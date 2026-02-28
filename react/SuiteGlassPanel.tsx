import type { ReactNode } from "react";

import { cn } from "./suite-auth-theme";

export type SuiteGlassPanelProps = {
  className?: string;
  children: ReactNode;
  density?: "comfortable" | "compact";
};

const densityClass = {
  comfortable: "p-6 sm:p-7",
  compact: "p-5 sm:p-6",
} as const;

export function SuiteGlassPanel({
  className,
  children,
  density = "comfortable",
}: SuiteGlassPanelProps) {
  return (
    <div
      className={cn(
        "relative w-full rounded-[2rem] border backdrop-blur-2xl",
        densityClass[density],
        className,
      )}
      style={{
        background: "var(--suite-panel-bg)",
        borderColor: "var(--suite-panel-border)",
        boxShadow: "var(--suite-panel-shadow)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.15), rgba(255,255,255,0.1))",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
