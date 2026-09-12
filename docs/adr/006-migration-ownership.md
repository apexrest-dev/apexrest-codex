# ADR 006: migration-ownership

English | [Українська](006-migration-ownership.uk.md)

Status: accepted for local beta; integration claims require evidence.

Amended by [ADR 007](007-clean-apex-deployment.md): service tables are not prerequisites; local durable migration history is the default.

The target administrator explicitly installs APEXREST control tables. Migration filename and checksum are immutable; started/unresolved records block retries. Full SQLcl scripts run in order without splitting PL/SQL or claiming DDL rollback. Application restore does not restore schema data.
