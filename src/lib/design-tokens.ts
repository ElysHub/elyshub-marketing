/**
 * ElysHub color tokens — single source of truth is `:root` in `src/app/globals.css`.
 * Use these for inline `style`, SVG fills, or non-Tailwind APIs. In JSX markup,
 * prefer Tailwind utilities: `bg-elys-page`, `text-elys-primary`, etc.
 */
export const cssVar = {
  primary: "var(--elys-primary)",
  primaryRing: "var(--elys-primary-ring)",
  hero: "var(--elys-hero)",
  page: "var(--elys-page)",
  text: "var(--elys-text)",
  muted: "var(--elys-muted)",
  border: "var(--elys-border)",
  transitionGreen: "var(--elys-transition-green)",
  statusLive: "var(--elys-status-live)",
  statusPlanned: "var(--elys-status-planned)",
  statusVision: "var(--elys-status-vision)",
  statusGap: "var(--elys-status-gap)",
} as const;

export type ElysColorToken = keyof typeof cssVar;
