/**
 * Per-engine document themes. Each engine gets one accent + one soft
 * background, sourced from the primitives/aliases in `globals.css`.
 *
 * Class names here must be literal strings (not built at runtime) so
 * Tailwind's build-time scanner can find and generate them.
 */
export type EngineSlug =
  | "general"
  | "moisture"
  | "temperature"
  | "pests"
  | "soil"
  | "light";

export interface EngineTheme {
  /** Background for the header/hero section (dark accent band). */
  heroBg: string;
  /** Light accent used for labels/borders/pills on top of `heroBg`. */
  accentText: string;
  /** Light accent border, full opacity — used on the dark hero. */
  accentBorder: string;
  /** Light accent border, ~60% opacity — used on outlined pills. */
  accentBorderSoft: string;
  /** Solid accent fill — stage pills, capability circles (on the light band). */
  accentBg: string;
  /** Accent fill at ~70% opacity — small bullets/markers. */
  accentBgSoft: string;
  /** Soft accent-tinted section background (the "capability map" band). */
  softBg: string;
}

const general: EngineTheme = {
  heroBg: "bg-elys-text",
  accentText: "text-elys-transition-green",
  accentBorder: "border-elys-primary",
  accentBorderSoft: "border-elys-primary/60",
  accentBg: "bg-elys-primary",
  accentBgSoft: "bg-elys-primary/70",
  softBg: "bg-elys-hero",
};

const moisture: EngineTheme = {
  heroBg: "bg-accent-moisture",
  accentText: "text-background-moisture",
  accentBorder: "border-background-moisture",
  accentBorderSoft: "border-background-moisture/60",
  accentBg: "bg-accent-moisture",
  accentBgSoft: "bg-accent-moisture/70",
  softBg: "bg-background-moisture",
};

const soil: EngineTheme = {
  heroBg: "bg-accent-soil",
  accentText: "text-background-soil",
  accentBorder: "border-background-soil",
  accentBorderSoft: "border-background-soil/60",
  accentBg: "bg-accent-soil",
  accentBgSoft: "bg-accent-soil/70",
  softBg: "bg-background-soil",
};

export const engineThemes: Record<EngineSlug, EngineTheme> = {
  general,
  moisture,
  soil,
  // Palettes not defined yet — fall back to the general theme until each
  // engine gets its own primitives (temperature/red, pests/purple,
  // light/yellow-brown).
  temperature: general,
  pests: general,
  light: general,
};

export function getEngineTheme(engine: EngineSlug): EngineTheme {
  return engineThemes[engine] ?? general;
}
