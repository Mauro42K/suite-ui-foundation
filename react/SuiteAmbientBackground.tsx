import type { CSSProperties } from "react";

import { cn } from "./suite-auth-theme";

export type SuiteAmbientBackgroundProps = {
  className?: string;
  mode?: "default" | "warm" | "cool";
  showGrid?: boolean;
  showOrbs?: boolean;
};

const orbModes = {
  default: {
    warm: "radial-gradient(circle at 35% 35%, rgba(253, 186, 116, 0.92), rgba(251, 113, 133, 0.24) 70%, transparent 82%)",
    cool: "radial-gradient(circle at 35% 35%, rgba(125, 211, 252, 0.86), rgba(96, 165, 250, 0.2) 68%, transparent 80%)",
    neutral: "radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.88), rgba(196, 181, 253, 0.12) 70%, transparent 84%)"
  },
  warm: {
    warm: "radial-gradient(circle at 35% 35%, rgba(251, 191, 36, 0.88), rgba(251, 113, 133, 0.28) 70%, transparent 82%)",
    cool: "radial-gradient(circle at 35% 35%, rgba(244, 114, 182, 0.2), rgba(249, 115, 22, 0.12) 68%, transparent 80%)",
    neutral: "radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.84), rgba(251, 191, 36, 0.08) 70%, transparent 84%)"
  },
  cool: {
    warm: "radial-gradient(circle at 35% 35%, rgba(251, 146, 60, 0.35), rgba(251, 113, 133, 0.18) 70%, transparent 82%)",
    cool: "radial-gradient(circle at 35% 35%, rgba(96, 165, 250, 0.4), rgba(56, 189, 248, 0.2) 68%, transparent 80%)",
    neutral: "radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.88), rgba(165, 243, 252, 0.08) 70%, transparent 84%)"
  }
} as const;

function orbStyle(background: string, style: CSSProperties): CSSProperties {
  return {
    position: "absolute",
    borderRadius: 9999,
    filter: "blur(24px)",
    opacity: 0.82,
    background,
    ...style,
  };
}

export function SuiteAmbientBackground({
  className,
  mode = "default",
  showGrid = true,
  showOrbs = true,
}: SuiteAmbientBackgroundProps) {
  const palette = orbModes[mode];

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      {showGrid ? (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(circle at center, black 55%, transparent 100%)",
          }}
        />
      ) : null}
      {showOrbs ? (
        <>
          <div style={orbStyle(palette.warm, { left: "8%", top: "56%", width: 220, height: 220 })} />
          <div style={orbStyle(palette.cool, { right: "9%", top: "10%", width: 260, height: 260 })} />
          <div style={orbStyle(palette.neutral, { left: "35%", top: "15%", width: 180, height: 180 })} />
        </>
      ) : null}
    </div>
  );
}
