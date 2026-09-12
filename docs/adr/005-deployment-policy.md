# ADR 005: deployment-policy

Status: accepted for local beta; integration claims require evidence.

Amended by [ADR 007](007-clean-apex-deployment.md): local control is the default; the DB row lease is optional.

Use expiring hash-bound full-application plans, actual target exports/identity, mandatory existing-app SQL backups, a shared DB row lease and a durable journal. A writing lease never self-recovers after expiry. Restore is a new exact-grant plan, and general destructive/authentication changes stay blocked.
