import type { ReactNode } from "react";

import { SuiteAmbientBackground } from "./SuiteAmbientBackground";
import { SuiteBrandLockup } from "./SuiteBrandLockup";
import { SuiteGlassPanel } from "./SuiteGlassPanel";
import { cn, suiteAuthVars } from "./suite-auth-theme";

export type SuiteAuthShellProps = {
  mark: ReactNode;
  appName: string;
  introTitle?: string;
  introBody?: string;
  children: ReactNode;
  className?: string;
  panelClassName?: string;
  contentWidth?: "sm" | "md";
};

const widthClass = {
  sm: "max-w-[560px]",
  md: "max-w-[720px]",
} as const;

export function SuiteAuthShell({
  mark,
  appName,
  introTitle,
  introBody,
  children,
  className,
  panelClassName,
  contentWidth = "sm",
}: SuiteAuthShellProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen overflow-hidden px-4 py-6 sm:px-8 sm:py-8 md:px-12 2xl:px-20",
        className,
      )}
      style={{
        ...suiteAuthVars,
        background: "var(--suite-bg-base)",
      }}
    >
      <SuiteAmbientBackground />
      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full items-center justify-center sm:min-h-[calc(100vh-4rem)]">
        <div className={cn("w-full", widthClass[contentWidth])}>
          <SuiteGlassPanel className={panelClassName} density="comfortable">
            <SuiteBrandLockup mark={mark} appName={appName} />
            {introTitle || introBody ? (
              <header className="mt-6 space-y-1.5">
                {introTitle ? (
                  <h1 className="text-base font-semibold tracking-tight sm:text-lg" style={{ color: "var(--suite-text-primary)" }}>
                    {introTitle}
                  </h1>
                ) : null}
                {introBody ? (
                  <p className="text-sm leading-relaxed" style={{ color: "var(--suite-text-muted)" }}>
                    {introBody}
                  </p>
                ) : null}
              </header>
            ) : null}
            <div className="mt-6">{children}</div>
          </SuiteGlassPanel>
        </div>
      </div>
    </section>
  );
}
