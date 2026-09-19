#!/usr/bin/env bash
# Setup only: print the absolute executable path, keeping diagnostics on stderr.
resolve_cloud_node() (
  set -eo pipefail
  set +u # nvm may reference unset variables.
  compatible() {
    "$1" -e 'const n = +process.versions.node.split(".")[0]; if (n < 24 || n >= 27) process.exit(1)' >/dev/null 2>&1
  }
  if [[ -x "$1/.codex/cloud/node" ]] && compatible "$1/.codex/cloud/node"; then
    "$1/.codex/cloud/node" -p 'process.execPath'
    return
  fi
  if command -v node >/dev/null && compatible "$(command -v node)"; then
    node -p 'process.execPath'
    return
  fi
  if ! declare -F nvm >/dev/null; then
    for script in "${NVM_DIR:-$HOME/.nvm}/nvm.sh" /usr/local/share/nvm/nvm.sh /opt/nvm/nvm.sh; do
      if [[ -s "$script" ]]; then
        source "$script" --no-use
        break
      fi
    done
  fi
  if ! declare -F nvm >/dev/null; then
    echo 'Node.js 24-26 is required. Select Node.js 24 in Cloud runtimes.' >&2
    return 1
  fi
  echo 'Activating Node.js 24 for Cloud setup...' >&2
  nvm use 24 >&2 || nvm install 24 >&2 || return 1
  compatible "$(command -v node)" || {
    echo 'nvm did not activate a supported Node.js version.' >&2
    return 1
  }
  node -p 'process.execPath'
)
