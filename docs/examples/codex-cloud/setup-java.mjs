import fs from 'node:fs';
import path from 'node:path';
import { X509Certificate, createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// APEXREST removes Java option environment variables. Use standard configuration
// files in a PRIVATE JDK copy instead of changing the environment's Java or trust.
const javaEnv = { ...process.env };
for (const key of [
  'APEXREST_ORDS_PASSWORD',
  'JAVA_TOOL_OPTIONS',
  '_JAVA_OPTIONS',
  'JDK_JAVA_OPTIONS',
  'NODE_OPTIONS',
]) {
  delete javaEnv[key];
}

function findJdk() {
  const candidates = [
    ...(process.env.JAVA_HOME ? [path.join(process.env.JAVA_HOME, 'bin/java')] : []),
    ...(process.env.PATH || '').split(path.delimiter).map((dir) => path.join(dir, 'java')),
  ];
  for (const executable of candidates) {
    if (!fs.existsSync(executable)) continue;
    const result = spawnSync(executable, ['-XshowSettings:properties', '--list-modules'], {
      env: javaEnv,
      encoding: 'utf8',
      timeout: 15000,
    });
    const home = result.stderr?.match(/^\s*java.home = (.+)$/mu)?.[1];
    const version = result.stderr?.match(/^\s*java.specification.version = (\d+)$/mu)?.[1];
    if (result.status === 0 && home && Number(version) >= 21 && /^jdk.compiler@/mu.test(result.stdout)) {
      return fs.realpathSync(home);
    }
  }
  throw new Error(
    'ORDS APEX operations require JDK 21+ with jdk.compiler. Select Java 21 in Cloud runtimes.',
  );
}

function proxyProperties() {
  const value =
    process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY;
  if (!value) return '';
  let proxy;
  try {
    proxy = new URL(value);
  } catch {
    throw new Error('Invalid Cloud proxy URL.');
  }
  if (
    proxy.protocol !== 'http:' ||
    proxy.username ||
    proxy.password ||
    proxy.search ||
    proxy.hash ||
    proxy.pathname !== '/'
  ) {
    throw new Error('Cloud Java requires an HTTP proxy without URL credentials.');
  }
  const bypass = new Set(['localhost', '127.*', '[::1]']);
  for (const entry of (process.env.no_proxy || process.env.NO_PROXY || '').split(',')) {
    const host = entry.trim().replace(/:\d+$/u, '').replace(/^\./u, '');
    // Java has no CIDR equivalent; those entries continue through the proxy.
    if (!host || host.includes('/')) continue;
    if (!/^[\w.*:[\]-]+$/u.test(host)) throw new Error('Unsupported host in NO_PROXY.');
    bypass.add(host);
    if (host.includes('.') && !/^[\d.]+$/u.test(host) && !host.includes('*')) bypass.add(`*.${host}`);
  }
  return (
    ['http', 'https']
      .map(
        (protocol) => `${protocol}.proxyHost=${proxy.hostname}\n${protocol}.proxyPort=${proxy.port || 80}\n`,
      )
      .join('') + `http.nonProxyHosts=${[...bypass].join('|')}\n`
  );
}

export function setupCloudJava(home, caFile) {
  const state = JSON.parse(fs.readFileSync(path.join(home, 'runtime.json'), 'utf8'));
  for (const id of ['node', 'java', 'sqlcl']) {
    if (state.components?.[id] !== 'verified' || !fs.existsSync(state[id] || '')) {
      throw new Error(`Dependency not verified: ${id}. Rerun Cloud Setup.`);
    }
  }
  const properties = proxyProperties();
  const certificates = caFile
    ? fs.readFileSync(caFile, 'utf8').match(/-----BEGIN CERTIFICATE-----[\s\S]*?-----END CERTIFICATE-----/gu)
    : [];
  if (!certificates) throw new Error('Cloud CA file contains no PEM certificates.');
  certificates.forEach((cert) => new X509Certificate(cert));
  const source = findJdk();
  const destination = path.resolve(home, '../java');
  if (source === destination)
    throw new Error('JAVA_HOME must point to the environment JDK, not the private Cloud copy.');
  const fingerprint = createHash('sha256')
    .update(source)
    .update(fs.readFileSync(path.join(source, 'release')))
    .digest('hex');
  const marker = path.join(destination, '.cloud-source');
  if (!fs.existsSync(marker) || fs.readFileSync(marker, 'utf8') !== fingerprint) {
    const staging = fs.mkdtempSync(path.join(path.dirname(destination), 'java-'));
    try {
      const copied = path.join(staging, 'jdk');
      // Dereference symlinks so later writes remain private. Source archives,
      // jmods, headers and manpages are unnecessary for SQLcl/source launch.
      fs.cpSync(source, copied, {
        recursive: true,
        dereference: true,
        filter: (file) => !['src.zip', 'jmods', 'include', 'man'].includes(path.basename(file)),
      });
      fs.writeFileSync(path.join(copied, '.cloud-source'), fingerprint, { mode: 0o600 });
      fs.rmSync(destination, { recursive: true, force: true });
      fs.renameSync(copied, destination);
    } finally {
      fs.rmSync(staging, { recursive: true, force: true });
    }
  }
  const netFile = path.join(destination, 'conf/net.properties');
  // Re-read environment defaults: proxy and CA settings may change on resume.
  fs.chmodSync(netFile, 0o600);
  fs.writeFileSync(
    netFile,
    fs.readFileSync(path.join(source, 'conf/net.properties'), 'utf8') + '\n# Codex Cloud\n' + properties,
  );
  const store = path.join(destination, 'lib/security/jssecacerts');
  fs.rmSync(store, { force: true });
  fs.copyFileSync(path.join(destination, 'lib/security/cacerts'), store);
  fs.chmodSync(store, 0o600);
  for (const cert of new Set(certificates)) {
    const result = spawnSync(
      path.join(destination, 'bin/keytool'),
      [
        '-importcert',
        '-noprompt',
        '-alias',
        'cloud-' + createHash('sha256').update(cert).digest('hex'),
        '-keystore',
        store,
        '-storepass',
        'changeit',
      ],
      { input: cert, env: javaEnv, encoding: 'utf8', timeout: 30000 },
    );
    if (result.error || result.status !== 0)
      throw new Error('Could not import Cloud CA into the private Java truststore.');
  }
  console.log(
    `Private JDK ready; proxy ${properties ? 'configured' : 'not configured'}; ${new Set(certificates).size} Cloud CA certificate(s).`,
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    if (process.env.CODEX_CLOUD === '1')
      setupCloudJava(process.env.APEXREST_HOME, process.env.NODE_EXTRA_CA_CERTS);
  } catch (error) {
    console.error(`Cloud Java setup failed: ${error.message}`);
    process.exitCode = 3;
  }
}
