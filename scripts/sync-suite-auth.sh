#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HEADER='// Derived from suite-ui-foundation v0.1 (login-shell baseline)'
FILES=(
  "SuiteAmbientBackground.tsx"
  "SuiteAuthShell.tsx"
  "SuiteBrandLockup.tsx"
  "SuiteGlassPanel.tsx"
  "suite-auth-theme.ts"
)
TARGETS=(
  "/Users/mauro/pdr-gantt-master/src/components/suite-auth"
  "/Users/mauro/Tasko.ai/src/web/components/suite-auth"
)

for target in "${TARGETS[@]}"; do
  mkdir -p "$target"
  for file in "${FILES[@]}"; do
    src="$ROOT/react/$file"
    dst="$target/$file"
    tmp="$dst.tmp"
    {
      printf '%s\n' "$HEADER"
      cat "$src"
    } > "$tmp"
    mv "$tmp" "$dst"
  done
  echo "Synced suite auth files -> $target"
done
