import type { PublicPageDef } from "@/lib/pages";
import { getEngineTheme } from "@/lib/engine-themes";
import HeroSection from "@/components/publicpage/HeroSection";
import BenefitsGridSection from "@/components/publicpage/BenefitsGridSection";
import HowItWorksSection from "@/components/publicpage/HowItWorksSection";
import FaqSection from "@/components/publicpage/FaqSection";
import CtaSection from "@/components/publicpage/CtaSection";

export default function PublicPageView({ page }: { page: PublicPageDef }) {
  const theme = getEngineTheme(page.engine);

  return (
    <article className="flex flex-col">
      {page.sections.map((section) => {
        switch (section.type) {
          case "hero":
            return <HeroSection key={section.id} section={section} theme={theme} />;
          case "benefits_grid":
            return <BenefitsGridSection key={section.id} section={section} theme={theme} />;
          case "how_it_works":
            return <HowItWorksSection key={section.id} section={section} theme={theme} />;
          case "faq":
            return <FaqSection key={section.id} section={section} theme={theme} />;
          case "cta":
            return <CtaSection key={section.id} section={section} theme={theme} />;
          default: {
            const _exhaustive: never = section;
            return _exhaustive;
          }
        }
      })}
    </article>
  );
}
