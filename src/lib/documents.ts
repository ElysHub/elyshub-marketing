import type { EngineSlug } from "@/lib/engine-themes";
import generatedDocuments from "@/lib/documents.generated.json";

/**
 * Public document schema.
 * Canonical Product Truth lives in the engine repo (elyshub_fe_and_be); this shape is the
 * deterministic public projection consumed by the marketing site.
 *
 * Content is NOT hardcoded here. `documents` below is generated at build time from
 * content/documents/*.yaml (see scripts/generate-documents.mjs) — those YAML files are
 * manually-copied, traceable derivations of each engine's Product Truth doc. To change
 * content: edit the source repo's Product Truth, re-derive its YAML, copy it into
 * content/documents/, then run `npm run generate:documents` (or `npm run dev` / `build`,
 * which do it automatically).
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

/**
 * Internal Product Truth / stakeholder viewer — access-controlled by proxy.ts
 * (Basic Auth on /documents/*), not by filtering here. See proxy.ts for why.
 */
export const documents = generatedDocuments as unknown as DocumentDef[];

export function getDocument(slug: string): DocumentDef | undefined {
  return documents.find((doc) => doc.slug === slug);
}

export function getHeroSection(doc: DocumentDef): HeroSection | undefined {
  return doc.sections.find((s): s is HeroSection => s.type === "hero");
}
