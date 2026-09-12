# Security and privacy

Do not send credentials, cookies, wallets, real customer data or unredacted browser reports in issues. No public security mailbox has been configured; report privately to the repository owner through an already verified channel. GitHub private vulnerability reporting requires owner setup before it can be advertised.

Secrets belong in SQLcl's named connection store and private `.apexrest/auth` files (0600). Connection references contain names, not passwords. Browser login is local and interactive; recording, traces, screenshots and video are off. Reports are private and bounded; the public release excludes runtime caches, auth state and raw evidence containing local machine paths. Redaction is defense in depth and cannot identify every business secret. Review reports before sharing.

Project SQL, tests and generated APEXlang are executable code. Review and trust the project before execution. The local user and host permission boundary remain authoritative; APEXREST cannot prevent an agent with unrestricted shell/file access from modifying its own user policy. Production signing keys and approval verification configuration must be controlled by a protected external runner, inaccessible to untrusted repository code. Do not run privileged workflows against PR code.

Downloads enforce vendor host allowlists, HTTPS, pinned hashes, size limits and safe extraction. npm package integrity comes from a committed lockfile; browser revisions come from pinned Playwright. Browser CDN payload verification is delegated to Playwright and is not independently SHA-pinned by APEXREST; this is an explicit supply-chain limitation. No npm postinstall hook downloads tools. Oracle licenses and Linux package installation require separate consent.

Do not automatically clear a deployment lease in phase `writing`, even after its TTL. Oracle DDL may have committed. Reconcile the target, migration journal and SQL backup with a DBA first. Restore is application metadata recovery; database data/DDL recovery requires its own procedure.
