import type { EngineSlug } from "@/lib/engine-themes";
import generatedPages from "@/lib/pages.generated.json";

/**
 * Public, grower-facing page schema (content/pages/*.yaml → src/app/learn/[slug]).
 *
 * Deliberately separate from src/lib/documents.ts (the internal Product Truth viewer at
 * /documents, gated in proxy.ts). That schema models per-feature roadmap state
 * (live/planned/vision/gap) and research status — useful to stakeholders, and useful to
 * competitors, not to growers. This schema only models benefit-level marketing content: no
 * states, no research, no feature-by-feature detail. Edit YAML to tweak copy; add a new
 * section `type` here only when a genuinely new layout is needed.
 */

export interface PublicHeroSection {
  type: "hero";
  id: "hero";
  eyebrow?: string;
  title: string;
  tagline: string;
  intro: string;
}

export interface BenefitItem {
  title: string;
  text: string;
}

export interface BenefitsGridSection {
  type: "benefits_grid";
  id: string;
  title: string;
  benefits: BenefitItem[];
}

export interface HowItWorksStep {
  title: string;
  text: string;
}

export interface HowItWorksSection {
  type: "how_it_works";
  id: string;
  title: string;
  steps: HowItWorksStep[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSection {
  type: "faq";
  id: string;
  title: string;
  items: FaqItem[];
}

export interface CtaSection {
  type: "cta";
  id: string;
  heading: string;
  body?: string;
  buttonLabel: string;
}

export type PublicPageSection =
  | PublicHeroSection
  | BenefitsGridSection
  | HowItWorksSection
  | FaqSection
  | CtaSection;

export interface PublicPageDef {
  slug: string;
  navLabel: string;
  engine: EngineSlug;
  sections: PublicPageSection[];
}

export const pages = generatedPages as unknown as PublicPageDef[];

export function getPage(slug: string): PublicPageDef | undefined {
  return pages.find((page) => page.slug === slug);
}
