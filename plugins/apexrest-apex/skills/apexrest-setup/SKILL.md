---
name: apexrest-setup
description: Set up APEXREST for Codex, diagnose local toolchain capabilities and guide connection onboarding. Use for APEXREST setup or missing runtime tools.
---

Pass the absolute workspace `project` path on project-scoped MCP calls. The native server starts in its installed plugin directory, which is not the user project.
Call apexrest_doctor first. Distinguish detected tools, validated compiler, installed native plugin and database connectivity.
Run the bundled installer only under the host's approved filesystem/network scope. Never change host trust or copy login tokens.
Request connection references through local onboarding; never ask for passwords in chat.
If a dependency is missing, use [Install dependencies](../apexrest-install-dependencies/SKILL.md) and the bundled `dependencies install` command. This installs the client toolchain without reinstalling the native plugin. Reserve `setup` for bootstrap plus native registration. No download runs during MCP startup.
An existing clean supported APEX installation is sufficient for ordinary deployment. APEXREST service tables and utPLSQL are not client/deploy setup prerequisites. Local deployment history/coordination is the default; utPLSQL is needed only for SQL suites, and database control tables only for the explicitly selected optional database mode.
After reinstall, use a new Codex thread. A saved JSON file does not prove host discovery or readiness.
