# Codex integration: source audit

English | [Українська](codex-integration.uk.md)

This plugin targets **Codex desktop and Codex CLI only**. There is no compatibility layer for other agent products. The audit on 2026-09-17 inspected OpenAI's actual Rust source at `rust-v0.154.0` (`6b9826e3aa83b1a5947db50f4332cb9c65f1b340`), matching the locally installed CLI, and compared the relevant files with upstream `main` (`e269f2164cbb9f499e4f22301c393500e2a831f3`). These are observations of those revisions, not a promise about later releases.

## Agent communication

The internal mechanism exists. [`AgentControl`](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/core/src/agent/control.rs#L116) maintains a registry shared by a root session and its children. Its communication method and type are `pub(crate)`. [`multi_agents.rs`](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/core/src/tools/handlers/multi_agents.rs) translates model tool calls into these internal operations. These Rust APIs are not a plugin RPC endpoint.

The [`ClientRequest` catalog](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/app-server-protocol/src/protocol/common.rs#L550) exposes `thread/start`, `thread/resume`, `turn/start`, `turn/steer` and `turn/interrupt`; it does not expose a direct `agent/spawn` or `agent/send` endpoint. Native model-chosen subagents are useful, but asking the manager to invoke them does not enforce a mandatory review sequence.

APEXREST therefore uses the real [Codex App Server](https://developers.openai.com/codex/app-server) with a deterministic controller. It creates separate manager, developer and QA sessions, provides scoped `team_context` and `team_message` dynamic tools, and consumes native completion events. It uses the existing Codex login and model configuration. It neither attaches to the current desktop task nor borrows its private agent registry. See [the implemented workflow](team.md).

## Status and interface surfaces

| Mechanism | Source finding | APEXREST implication |
| --- | --- | --- |
| Native turn/item notifications | App Server has `turn/started`, `item/completed`, `turn/completed` and tool-progress events | Use the native stream for execution and review status. Team execution already does this. |
| MCP UI resource metadata | Protocol tests preserve `text/html;profile=mcp-app`; tool items carry an app resource URI | A candidate for a Codex desktop status component. Metadata support does not prove that the installed desktop renders it. |
| `mcpServer/event/stream/start` | The [implementation](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/app-server/src/request_processors/mcp_event_stream.rs#L47) rejects servers other than hosted apps | Do not use this as the event channel for the local stdio APEXREST server. |
| Plugin manifest | [Declared fields](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/plugin/src/manifest.rs#L17) include skills, MCP, apps, hooks and presentation metadata | No arbitrary sidebar/panel/status-bar extension is declared in this schema. |
| CLI status line | [`StatusLineItem`](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/bottom_pane/status_line_setup.rs#L56) is a fixed Rust enum | A plugin cannot add an APEX import counter through this configuration. Changing that enum requires a Codex source change. |
| Plugin hooks | Manifest accepts hook resources | Hooks can participate in supported lifecycle events; they are not a documented panel renderer or a direct external subagent API. |

The [MCP Apps capability tests](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/codex-mcp/src/client_capabilities_tests.rs) and [tool item model](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/protocol/src/items.rs#L410) support the UI-metadata finding. The official [UI documentation](https://developers.openai.com/plugins/build/chatgpt-ui) explains resource association and the bridge, but describes ChatGPT rendering. It is not evidence of Codex desktop fullscreen, picture-in-picture or a persistent service panel. The inspected repository provides the core, CLI and App Server; this audit did not inspect the desktop renderer.

The current desktop context also exposes the first-party `open_in_codex` tool for native file, browser, terminal and review panels. The request to show this research artifact was accepted as queued; actual rendering was not observed. This is a host capability that a Codex skill may use when available, not a plugin-manifest panel API. A generated status artifact in that native file panel is another candidate; automatic refresh must be tested. The console client can present the same state through native tool output.

## Integration decision

Use Codex's App Server, sessions, sandbox, structured outputs, dynamic tools and event stream. Keep APEXREST's state machine responsible for mandatory reviews and durable application-operation status. The existing SQLcl CLI/MCP switch selects the Oracle transport; it does not change the Codex orchestration protocol.

The [development panel](panel.md) now uses one shared status service, rendered in the actual Codex in-app browser and in the CLI TUI. Live native agent activity, configuration forms and review transitions were observed in the desktop browser. A self-contained MCP UI resource is also exposed; its discovery is verified separately from rendering, which remains unverified. No arbitrary sidebar injection or Codex fork is used.
