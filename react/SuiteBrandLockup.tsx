import type { ReactNode } from "react";

import { cn } from "./suite-auth-theme";

export type SuiteBrandLockupProps = {
  mark: ReactNode;
  appName: string;
  subtitle?: string;
  className?: string;
  markFrame?: "glass" | "flat";
};

export function SuiteBrandLockup({
  mark,
  appName,
  subtitle,
  className,
  markFrame = "glass",
}: SuiteBrandLockupProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
          markFrame === "glass" ? "border" : "",
        )}
        style={
          markFrame === "glass"
            ? {
                background: "var(--suite-brand-frame-bg)",
                borderColor: "var(--suite-brand-frame-border)",
                boxShadow: "var(--suite-brand-frame-shadow)",
              }
            : { background: "rgba(255,255,255,0.82)" }
        }
      >
        {mark}
      </div>
      <div className="min-w-0">
        <div className="text-3xl font-extrabold tracking-tight" style={{ color: "var(--suite-text-primary)" }}>
          {appName}
        </div>
        {subtitle ? (
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--suite-text-secondary)" }}>
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
