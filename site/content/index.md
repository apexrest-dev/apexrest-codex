# APEX development, inside Codex.

A native plugin for real Oracle APEXlang workflows: generate an application, validate with SQLcl, review a deployment plan and inspect test evidence.

**Independent APEXREST tooling. Local beta {{version}}.** Not an official Oracle or OpenAI product.

## Start with an application

Generate a blank app or the customer CRM. Keep Oracle's native source files and metadata. Ask Codex for the relevant reference, then run the real compiler on a staged copy.

## Make each deployment reviewable

Bind a plan to exact sources and target identity. Back up the existing application, coordinate runners, record migration outcomes and require application tests. Uncertain outcomes stay uncertain until reconciled.

## Know what was actually checked

The compatibility plugin was installed and exercised through Codex 0.154.0 on macOS arm64. Both templates passed local SQLcl compilation. Live database deployment, utPLSQL, authenticated CRUD and other client platforms still require integration evidence.

[Install from a local release](install/) · [Read the workflow](docs/) · [Review deployment limits](deployment/)
