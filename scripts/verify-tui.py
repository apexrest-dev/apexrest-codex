#!/usr/bin/env python3
"""Local POSIX pseudo-terminal smoke; SQLcl responses are explicit fixtures, not Oracle evidence."""
import argparse
import fcntl
import json
import os
from pathlib import Path
import pty
import re
import select
import signal
import struct
import subprocess
import tempfile
import termios
import time

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--node', default='node')
parser.add_argument('--runtime', default='dist/runtime/apexrest.mjs')
parser.add_argument('--capture-dir', help='Optional directory for actual PTY ANSI frames and text captures')
args = parser.parse_args()
runtime = str(Path(args.runtime).resolve())


class Terminal:
    def __init__(self, directory, cli_args=()):
        self.master, self.slave = pty.openpty()
        self.before = termios.tcgetattr(self.slave)
        self.resize(80, 24)
        self.data = b''
        self.mark = 0
        env = {**os.environ, 'TERM': 'xterm-256color',
               'APEXREST_HOME': str(Path(directory) / 'managed'),
               'CODEX_HOME': str(Path(directory) / 'codex'),
               'APEXREST_SQLCL': str(Path(directory) / 'sqlcl-fixture')}
        env.pop('APEXREST_RESOURCES', None)
        env.pop('NO_COLOR', None)
        self.process = subprocess.Popen(
            [args.node, runtime, *cli_args], cwd=directory, env=env,
            stdin=self.slave, stdout=self.slave, stderr=self.slave,
            start_new_session=True,
        )

    def resize(self, columns, rows):
        fcntl.ioctl(self.master, termios.TIOCSWINSZ,
                    struct.pack('HHHH', rows, columns, 0, 0))
        if hasattr(self, 'process'):
            self.mark = len(self.data)
            self.process.send_signal(signal.SIGWINCH)

    def send(self, text):
        self.mark = len(self.data)
        os.write(self.master, text.encode())

    def expect(self, text, timeout=10):
        deadline = time.monotonic() + timeout
        while text.encode() not in self.data[self.mark:]:
            if time.monotonic() >= deadline:
                raise AssertionError(f'Missing {text!r}: {self.data[-2500:]!r}')
            ready, _, _ = select.select([self.master], [], [], 0.1)
            if ready:
                self.data += os.read(self.master, 65536)
            elif self.process.poll() is not None:
                raise AssertionError(f'TUI exited early: {self.data[-2500:]!r}')

    def screen(self):
        # Async catalogue/settings loads may redraw after expect() matched a
        # label. Drain the complete frame, including split UTF-8 characters.
        while select.select([self.master], [], [], 0.03)[0]:
            self.data += os.read(self.master, 65536)
        frame = self.data.split(b'\x1b[2J')[-1].decode()
        # ONLCR may turn the application's CRLF into CR CR LF in the PTY stream.
        return re.sub(r'\x1b\[[0-?]*[ -/]*[@-~]', '', frame).replace('\r', '')

    def key(self, text):
        self.send(text)
        self.expect('\x1b[2J')
        # A single key may redraw multiple frames. Read through the complete latest frame.
        while select.select([self.master], [], [], 0.03)[0]:
            self.data += os.read(self.master, 65536)

    def select(self, label):
        self.key('\x1b[A' * 40)
        for _ in range(40):
            if any(line.lstrip().startswith('>') and label in line
                   for line in self.screen().splitlines()):
                return
            self.key('\x1b[B')
        raise AssertionError(f'Cannot select {label!r}: {self.screen()}')

    def capture(self, name):
        if not args.capture_dir:
            return
        target = Path(args.capture_dir)
        target.mkdir(parents=True, exist_ok=True)
        (target / f'{name}.ansi').write_bytes(self.data.split(b'\x1b[2J')[-1])
        (target / f'{name}.txt').write_text(self.screen())

    def menu(self):
        for _ in range(4):
            if 'What would you like to do?' in self.screen():
                return
            self.key('\x1b')
        raise AssertionError(f'Cannot return home: {self.screen()}')

    def close(self, by_signal=False):
        if by_signal:
            self.process.send_signal(signal.SIGTERM)
        else:
            self.send('\x03')
        self.expect('\x1b[?1049l')
        assert self.process.wait(timeout=3) == 0
        restored = termios.tcgetattr(self.slave)
        assert restored == self.before, 'Terminal attributes were not restored'
        assert b'\x1b[?25h' in self.data, 'Cursor was not restored'

    def dispose(self):
        if self.process.poll() is None:
            self.process.kill()
            self.process.wait()
        os.close(self.master)
        os.close(self.slave)


checks = []
with tempfile.TemporaryDirectory(prefix='apexrest-tui-') as directory:
    fixture = Path(directory) / 'sqlcl-fixture'
    fixture.write_text("""#!/usr/bin/env python3
import sys, re, json
text = sys.stdin.read()
if '-version' in sys.argv:
    print('SQLcl: Release fixture')
elif '-name' in sys.argv:
    name = sys.argv[sys.argv.index('-name') + 1]
    print(json.dumps({'results': [{'items': [{'db_unique_name': 'FIXTURE', 'service_name': 'FIXTURE_SERVICE', 'parsing_schema': 'FIXTURE_APP'}]}]}))
elif 'connmgr list -flat' in text:
    marker = re.search(r'prompt (APEXREST_CONNECTIONS_\\w+)_BEGIN', text).group(1)
    print(marker + '_BEGIN')
    print('Development / Київ')
    print('Second saved connection')
    print(marker + '_END')
else:
    sys.exit(1)
""")
    fixture.chmod(0o700)
    terminal = Terminal(directory)
    try:
        terminal.expect('What would you like to do?')
        actions = ['Install tools', 'Uninstall tools', 'Install plugin', 'Uninstall plugin', 'List saved SQLcl connections', 'Test saved SQLcl connection', 'SQLcl mode: CLI / MCP']
        terminal.expect(actions[-1])
        terminal.expect('Bundled Oracle refs')
        assert all(label in terminal.screen() for label in actions)
        assert 'APEXREST' in terminal.screen()
        assert not re.search(r'Project:|Setup|Deployment|Oracle references|Sandbox', terminal.screen())
        terminal.capture('home-80x24')
        assert 'Checkbox' in terminal.screen()
        assert 'Item / component' in terminal.screen()
        checks.append('bare invocation opens the logo, seven direct actions and the bundled APEXlang table')
        terminal.key('\tpage items select')
        assert all(name in terminal.screen() for name in ['Select list', 'Select many', 'Select one'])
        assert 'Checkbox' not in terminal.screen()
        terminal.capture('apexlang-search-80x24')
        terminal.key('\r')
        assert 'Find APEXlang: page items select' in terminal.screen()
        assert not (Path(directory) / 'managed').exists()
        terminal.key('\x1b')
        terminal.key('\x1b[F')
        assert 'REST data source servers' in terminal.screen()
        terminal.capture('apexlang-last-page-80x24')
        terminal.key('\x1b[H')
        terminal.key('\t')
        terminal.resize(120, 32)
        terminal.expect('What would you like to do?')
        terminal.expect('Bundled Oracle refs')
        assert all(label in terminal.screen() for label in actions)
        assert 'Group' in terminal.screen()
        terminal.capture('home-120x32')
        terminal.resize(80, 24)
        terminal.expect('Bundled Oracle refs')
        checks.append('APEXlang search, first/last navigation, read-only Enter, Tab focus and wide dashboard')
        terminal.key('project')
        assert 'No matching actions' in terminal.screen()
        terminal.menu()
        terminal.key('dependencies install\r')
        terminal.capture('tools-form-80x24')
        terminal.key('\x12')
        assert 'Ready to run' in terminal.screen()
        terminal.capture('tools-review-80x24')
        assert 'Preview only' not in terminal.screen()
        assert 'Approve changes' not in terminal.screen()
        terminal.key('d')
        assert '--yes' in terminal.screen()
        assert '--dry-run' not in terminal.screen()
        assert not (Path(directory) / 'managed').exists()
        checks.append('tools install has no preview toggle; review authorizes direct execution without running installation in this smoke')
        terminal.menu()
        # Execute removal only against an isolated disposable managed-tool fixture.
        managed = Path(directory) / 'managed'
        java = managed / 'toolchains/java/fixture/bin/java'
        java.parent.mkdir(parents=True)
        java.write_text('disposable fixture, never executed')
        (managed / 'runtime.json').write_text(json.dumps({'schemaVersion': 1, 'java': str(java), 'components': {'java': 'verified'}}))
        terminal.key('dependencies uninstall\r')
        assert 'Ready to run' in terminal.screen()
        assert java.exists()
        terminal.send('\r')
        terminal.expect('Completed')
        assert 'Java: Removed' in terminal.screen()
        assert not java.exists()
        terminal.capture('tools-uninstall-result-80x24')
        terminal.key('d')
        terminal.key('\x1b[F')
        assert '"exitCode": 0' in terminal.screen()
        checks.append('Enter on review directly removes an isolated managed-tool fixture and shows optional JSON')
        terminal.menu()
        terminal.key('plugin install\r')
        assert 'Accept Oracle license' not in terminal.screen()
        terminal.key('\x12d')
        assert '--native-only' in terminal.screen()
        assert '--yes' in terminal.screen()
        assert '--dry-run' not in terminal.screen()
        terminal.capture('plugin-review-80x24')
        checks.append('plugin installation is fixed to plugin-only and leaves tool options out')
        terminal.menu()
        terminal.key('connection list')
        terminal.send('\r')
        terminal.expect('2 saved connections')
        terminal.capture('connections-80x24')
        terminal.key('Київ')
        assert 'Second saved connection' not in terminal.screen()
        terminal.send('\r')
        terminal.expect('Connection successful')
        assert 'FIXTURE_SERVICE' in terminal.screen()
        terminal.capture('connection-test-fixture-80x24')
        terminal.send('\r')
        terminal.expect('Search: Київ')
        terminal.key('\x1b')
        terminal.send('\x12')
        terminal.expect('2 saved connections')
        checks.append('fixture SQLcl names are searchable; Enter tests the selected saved name; results return to the picker and refresh')
        terminal.menu()
        terminal.send('sqlcl configure\r')
        terminal.expect('SQLcl execution mode')
        terminal.select('SQLcl execution mode')
        terminal.key('\r')
        terminal.key('\x1b[B\r')
        terminal.key('\x12')
        assert 'DBTOOLS$MCP_LOG' in terminal.screen()
        assert not (managed / 'sqlcl.json').exists()
        terminal.key('\x1b')
        assert not (managed / 'sqlcl.json').exists()
        terminal.key('\x12')
        terminal.send('\r')
        terminal.expect('SQLcl mode: MCP')
        assert json.loads((managed / 'sqlcl.json').read_text()) == {'schemaVersion': 1, 'mode': 'mcp', 'mcpRestrictLevel': '4'}
        terminal.capture('sqlcl-mode-saved-80x24')
        terminal.menu()
        assert 'SQLcl: MCP' in terminal.screen()
        checks.append('SQLcl mode review cancellation does not write; Enter persists MCP and updates the home screen without connecting')
        terminal.close()
        checks.append('Ctrl+C restores terminal input, cursor and normal screen')
    finally:
        terminal.dispose()

    terminal = Terminal(directory, ['tui'])
    try:
        terminal.expect('What would you like to do?')
        terminal.expect('SQLcl: MCP')
        checks.append('a new TUI process reads the persisted SQLcl MCP mode')
        terminal.resize(20, 5)
        terminal.expect('Resize terminal')
        terminal.resize(50, 14)
        terminal.expect('What would you like to do?')
        terminal.expect('Checkbox')
        assert all(len(line) <= 48 for line in terminal.screen().splitlines())
        terminal.capture('home-50x14')
        terminal.key('\tselect-list')
        assert 'Select list' in terminal.screen()
        terminal.capture('apexlang-search-50x14')
        terminal.resize(30, 10)
        terminal.expect('Select list')
        assert len(terminal.screen().splitlines()) <= 9
        assert all(len(line) <= 28 for line in terminal.screen().splitlines())
        terminal.capture('apexlang-search-30x10')
        terminal.close(by_signal=True)
        checks.append('explicit TUI, catalogue search at 50x14 and 30x10, small-terminal resize and SIGTERM cleanup')
    finally:
        terminal.dispose()

print(json.dumps({'scope': 'local-posix-pty', 'runtime': runtime,
                  'node': subprocess.check_output([args.node, '--version'], text=True).strip(),
                  'checks': checks, 'sqlcl': 'explicit executable fixture', 'oracle': 'not-run', 'nativeCodex': 'not-run'}, indent=2))
