import type { EngineSlug } from "@/lib/engine-themes";

export type DocStatus = "Live" | "Planned" | "Vision" | "Gap";

export interface DocFeature {
  name: string;
  status: DocStatus;
}

export interface DocCapability {
  id: string;
  name: string;
  features: DocFeature[];
}

export interface DocStage {
  id: string;
  label: string;
}

export interface DocumentDef {
  slug: string;
  navLabel: string;
  engine: EngineSlug;
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  calloutLabel: string;
  calloutBody: string;
  pills: string[];
  who: string;
  actionUnit: string;
  stages: DocStage[];
  capabilities: DocCapability[];
}

const f = (status: DocStatus, name: string): DocFeature => ({ status, name });

export const documents: DocumentDef[] = [
  {
    slug: "moisture",
    navLabel: "Moisture",
    engine: "moisture",
    eyebrow: "Product truth · stakeholder overview",
    title: "Moisture",
    lastUpdated: "2026-08-22",
    intro:
      "Help growers keep plants in a healthy moisture range, with or without a sensor, by replacing watering guesswork with plant-, soil-, and environment-aware guidance before visible stress or overwatering damage.",
    calloutLabel: "Useful without a sensor, stronger with one",
    calloutBody:
      "You do not need expensive hardware to get useful moisture guidance. ElysHub estimates plant moisture from what it knows; a sensor upgrades confidence and precision.",
    pills: [
      "A decision engine, not a sensor dashboard",
      "Water conservation is an outcome, not the headline",
      "Sensor-optional monitoring is an enabling capability",
    ],
    who:
      "Small-scale farmers and experienced growers who need better watering decisions than habit, surface-soil checks, or visible plant stress. Hoses, drip, greenhouse or sensors — hardware is not required.",
    actionUnit:
      "The plot is the default watering decision — plants in a plot are normally managed together. A plant-level exception is only for a plant that materially needs different treatment.",
    stages: [
      { id: "C1", label: "Setup" },
      { id: "C2", label: "Know" },
      { id: "C3", label: "Estimate" },
      { id: "C4", label: "Trust" },
      { id: "C5", label: "Monitor" },
    ],
    capabilities: [
      {
        id: "C1",
        name: "Act through watering",
        features: [
          f("Live", "Watering method — how this plot waters, with change history"),
          f(
            "Live",
            "Record a watering as a plot action, with duration, vessel or runoff"
          ),
          f("Live", "Starting point (anchor) — last watering, or enough rain"),
          f("Planned", "How much / how long guidance in the grower UI"),
          f("Planned", "Isolate one plant from a shared plot watering"),
          f("Vision", "Automatic watering schedule"),
        ],
      },
      {
        id: "C2",
        name: "Know current moisture",
        features: [
          f("Live", "Five-zone water cycle — Water / Wet / Comfort / Dry / Stress"),
          f("Live", "Current reading and freshness — Sensor, Estimated or Waiting"),
          f("Gap", "Plot vs plant picture — mixed-plot overview not built"),
          f("Gap", "Sensor readings and estimates share one zone bar"),
        ],
      },
      {
        id: "C3",
        name: "Estimate when measurement is unavailable",
        features: [
          f("Live", "Weather-based estimate from the last known water in the soil"),
          f("Live", "Plot and plant context — thirst, soil, weather protection"),
          f("Live", "Device handoff — estimate continues from last measured value"),
        ],
      },
      {
        id: "C4",
        name: "Trust the interpretation",
        features: [
          f("Live", "Overall confidence on the estimate — never sensor-level certainty"),
          f("Live", "Per-input quality — anchor, weather, plant, soil, protection"),
          f("Live", "Why this number — rain, evaporation, net change, last sensor"),
          f("Vision", "Grower-visible leaching / drainage guidance"),
        ],
      },
      {
        id: "C5",
        name: "Monitor risk and history",
        features: [
          f("Live", "Duration-based alerts — too dry, waterlogged, too wet too long"),
          f("Live", "Care Center cards — moisture alerts in care / journal"),
          f("Live", "History graph — ~10 days of estimated moisture with zone bands"),
          f("Live", "Event log — zone changes, watering, alerts"),
          f("Planned", "Alert acknowledgement"),
          f("Gap", "Alert timing differs when plant thresholds are missing"),
        ],
      },
    ],
  },
];

export function getDocument(slug: string): DocumentDef | undefined {
  return documents.find((doc) => doc.slug === slug);
}
