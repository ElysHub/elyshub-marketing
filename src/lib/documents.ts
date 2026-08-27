import type { EngineSlug } from "@/lib/engine-themes";

/**
 * Public document schema — Step 1 local fixture.
 * Canonical Product Truth lives in the engine repo; this shape is the
 * deterministic public projection consumed by the marketing site.
 */

/** Item display state. `gap` is flattened here for rendering simplicity. */
export type ItemState = "live" | "partial" | "planned" | "vision" | "gap";

export interface ResearchScore {
  status: "pending" | "scored";
  score: number | null;
  basis?: string;
}

export interface ContextCard {
  id: string;
  label: string;
  text: string;
}

export interface HeroSection {
  type: "hero";
  id: "hero";
  eyebrow: string;
  last_updated: string;
  title: string;
  job_statement: string;
  support_statement: {
    label: string;
    text: string;
  };
  value_pills: string[];
  context_cards: ContextCard[];
}

export interface JourneyStep {
  id: string;
  label: string;
}

export interface CapabilityItem {
  text: string;
  state: ItemState;
}

export interface Capability {
  id: string;
  name: string;
  research: ResearchScore;
  items: CapabilityItem[];
}

export interface CapabilityMapSection {
  type: "capability_map";
  id: "capability_map";
  title: string;
  journey: JourneyStep[];
  capabilities: Capability[];
}

export type DocumentSection = HeroSection | CapabilityMapSection;

export interface DocumentDef {
  slug: string;
  navLabel: string;
  engine: EngineSlug;
  sections: DocumentSection[];
}

const item = (state: ItemState, text: string): CapabilityItem => ({ state, text });

export const documents: DocumentDef[] = [
  {
    slug: "moisture",
    navLabel: "Moisture",
    engine: "moisture",
    sections: [
      {
        type: "hero",
        id: "hero",
        eyebrow: "Product truth · stakeholder overview",
        last_updated: "2026-08-22",
        title: "Moisture",
        job_statement:
          "Help growers keep plants in a healthy moisture range, with or without a sensor, by replacing watering guesswork with plant-, soil-, and environment-aware guidance before visible stress or overwatering damage.",
        support_statement: {
          label: "Useful without a sensor, stronger with one",
          text: "You do not need expensive hardware to get useful moisture guidance. ElysHub estimates plant moisture from what it knows; a sensor upgrades confidence and precision.",
        },
        value_pills: [
          "A decision engine, not a sensor dashboard",
          "Water conservation is an outcome, not the headline",
          "Sensor-optional monitoring is an enabling capability",
        ],
        context_cards: [
          {
            id: "audience",
            label: "Who",
            text: "Small-scale farmers and experienced growers who need better watering decisions than habit, surface-soil checks, or visible plant stress. Hoses, drip, greenhouse or sensors — hardware is not required.",
          },
          {
            id: "action_unit",
            label: "Action unit",
            text: "The plot is the default watering decision — plants in a plot are normally managed together. A plant-level exception is only for a plant that materially needs different treatment.",
          },
        ],
      },
      {
        type: "capability_map",
        id: "capability_map",
        title: "Capability map",
        journey: [
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
            research: { status: "pending", score: null },
            items: [
              item("live", "Watering method — how this plot waters, with change history"),
              item(
                "live",
                "Record a watering as a plot action, with duration, vessel or runoff"
              ),
              item("live", "Starting point (anchor) — last watering, or enough rain"),
              item("planned", "How much / how long guidance in the grower UI"),
              item("planned", "Isolate one plant from a shared plot watering"),
              item("vision", "Automatic watering schedule"),
            ],
          },
          {
            id: "C2",
            name: "Know current moisture",
            research: { status: "pending", score: null },
            items: [
              item("live", "Five-zone water cycle — Water / Wet / Comfort / Dry / Stress"),
              item("live", "Current reading and freshness — Sensor, Estimated or Waiting"),
              item("partial", "Plot vs plant picture — mixed-plot overview not built"),
              item("gap", "Sensor readings and estimates share one zone bar"),
            ],
          },
          {
            id: "C3",
            name: "Estimate when measurement is unavailable",
            research: { status: "pending", score: null },
            items: [
              item("live", "Weather-based estimate from the last known water in the soil"),
              item("live", "Plot and plant context — thirst, soil, weather protection"),
              item("live", "Device handoff — estimate continues from last measured value"),
            ],
          },
          {
            id: "C4",
            name: "Trust the interpretation",
            research: { status: "pending", score: null },
            items: [
              item("live", "Overall confidence on the estimate — never sensor-level certainty"),
              item("live", "Per-input quality — anchor, weather, plant, soil, protection"),
              item("live", "Why this number — rain, evaporation, net change, last sensor"),
              item("vision", "Grower-visible leaching / drainage guidance"),
            ],
          },
          {
            id: "C5",
            name: "Monitor risk and history",
            research: { status: "pending", score: null },
            items: [
              item("live", "Duration-based alerts — too dry, waterlogged, too wet too long"),
              item("live", "Care Center cards — moisture alerts in care / journal"),
              item("live", "History graph — ~10 days of estimated moisture with zone bands"),
              item("live", "Event log — zone changes, watering, alerts"),
              item("planned", "Alert acknowledgement"),
              item("gap", "Alert timing differs when plant thresholds are missing"),
            ],
          },
        ],
      },
    ],
  },
];

export function getDocument(slug: string): DocumentDef | undefined {
  return documents.find((doc) => doc.slug === slug);
}

export function getHeroSection(doc: DocumentDef): HeroSection | undefined {
  return doc.sections.find((s): s is HeroSection => s.type === "hero");
}
