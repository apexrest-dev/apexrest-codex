#!/usr/bin/env bash
# Node fetch needs this switch to use the environment's HTTP(S) proxy.
# Preserve NO_PROXY and NODE_EXTRA_CA_CERTS; never disable TLS verification.
export NODE_USE_ENV_PROXY=1
