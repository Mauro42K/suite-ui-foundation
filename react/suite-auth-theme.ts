import type { CSSProperties } from "react";

export const suiteAuthVars = {
  ["--suite-bg-base" as string]:
    "radial-gradient(circle at 15% 82%, rgba(251, 146, 60, 0.28), transparent 42%), radial-gradient(circle at 88% 14%, rgba(56, 189, 248, 0.28), transparent 40%), radial-gradient(circle at 64% 28%, rgba(191, 219, 254, 0.4), transparent 38%), linear-gradient(145deg, #f8fafc 0%, #f1f5f9 45%, #eef2ff 100%)",
  ["--suite-grid-line" as string]: "rgba(148, 163, 184, 0.06)",
  ["--suite-orb-warm" as string]:
    "radial-gradient(circle at 35% 35%, rgba(253, 186, 116, 0.95), rgba(251, 113, 133, 0.25) 70%, transparent 80%)",
  ["--suite-orb-cool" as string]:
    "radial-gradient(circle at 35% 35%, rgba(125, 211, 252, 0.9), rgba(96, 165, 250, 0.2) 68%, transparent 78%)",
  ["--suite-orb-neutral" as string]:
    "radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.9), rgba(196, 181, 253, 0.15) 70%, transparent 82%)",
  ["--suite-panel-bg" as string]: "rgba(255, 255, 255, 0.45)",
  ["--suite-panel-border" as string]: "rgba(255, 255, 255, 0.25)",
  ["--suite-panel-shadow" as string]: "0 42px 108px -36px rgba(15, 23, 42, 0.36), 0 22px 42px -28px rgba(15, 23, 42, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.48)",
  ["--suite-text-primary" as string]: "#0f172a",
  ["--suite-text-secondary" as string]: "rgba(15, 23, 42, 0.72)",
  ["--suite-text-muted" as string]: "rgba(71, 85, 105, 0.86)",
  ["--suite-input-bg" as string]: "rgba(255, 255, 255, 0.7)",
  ["--suite-input-border" as string]: "rgba(255, 255, 255, 0.5)",
  ["--suite-input-focus-ring" as string]: "rgba(99, 102, 241, 0.22)",
  ["--suite-brand-frame-bg" as string]: "rgba(255, 255, 255, 0.38)",
  ["--suite-brand-frame-border" as string]: "rgba(255, 255, 255, 0.7)",
  ["--suite-brand-frame-shadow" as string]: "inset 0 1px 0 rgba(255, 255, 255, 0.72)"
} as CSSProperties;

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
