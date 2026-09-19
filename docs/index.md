# Documentation

English | [Українська](index.uk.md)

![APEXREST pencil and ruler symbol](assets/apexrest-logo.svg)

APEXREST is a native Codex plugin for Oracle APEX development, controlled imports and verification. The current version is a beta with separate implementation and evidence records; documentation does not certify the remaining release gates.

## Start here

| Goal                                                         | Guide                                                     |
| ------------------------------------------------------------ | --------------------------------------------------------- |
| Install the repository plugin and connect a target           | [Getting started](getting-started.md)                     |
| Run a reviewed agent task and understand the panel           | [Full agent workflow with screenshots](agent-workflow.md) |
| Install/remove tools and test connections in the terminal    | [Terminal interface](tui.md)                              |
| Understand the product and examples                          | [README](../README.md)                                    |
| Bring an existing application into source control            | [Existing applications](existing-app.md)                  |
| Configure environments, runtime paths and policy             | [Configuration](configuration.md)                         |
| Connect over HTTP(S) when the Oracle listener is unavailable | [SQL through ORDS](ords.md)                               |
| Learn the plan, import and recovery model                    | [Deployment safety](deployment-safety.md)                 |
| Deploy without service tables                                | [Clean APEX deployment](clean-apex-deployment.md)         |
| Select and run the checks appropriate to a change            | [Testing](testing.md)                                     |
| Resolve setup, compiler or runtime failures                  | [Troubleshooting](troubleshooting.md)                     |

## Understand and extend

- [Architecture](architecture.md): packages, process boundaries and durable state.
- [Optimization review](optimization-review.md): local measurements and runtime optimizations.
- [Contributing](../CONTRIBUTING.md): local workflow, validation and review requirements.
- [Security and privacy](../SECURITY.md): credentials, code trust, reports and recovery.
- [Research](research.md): reviewed upstream material and compatibility decisions.
- [Architecture decisions](adr/): the rationale for supported implementation choices; Ukrainian files end in `.uk.md`.

## Inspect the evidence

- [Implementation status](implementation-status.md): what exists and what was actually exercised.
- [Acceptance matrix](acceptance.json): implementation, verification, evidence and blockers for each requirement.
- [Next actions](next-actions.md): the open stable-release gates and their prerequisites.

Historical reports retain their original source digest and scope. A later success does not relabel an earlier blocked run, and an earlier blocked run does not erase a separately recorded later result.

## Prepare a release

Read [publisher setup](publishing.md) and [release notes](release-notes.md). A source-repository installation and a published, signed stable release are different distribution states. Local packaging never publishes, tags or provisions infrastructure.
