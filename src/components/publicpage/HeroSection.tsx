import type { EngineTheme } from "@/lib/engine-themes";
import type { PublicHeroSection } from "@/lib/pages";
import SectionBand from "@/components/document/SectionBand";

export default function HeroSection({
  section,
  theme,
}: {
  section: PublicHeroSection;
  theme: EngineTheme;
}) {
  return (
    <SectionBand theme={theme} variant="hero">
      {section.eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.14em] ${theme.accentText}`}
        >
          {section.eyebrow}
        </p>
      )}
      <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
        {section.title}
      </h1>
      <p className={`mt-3 text-lg font-medium ${theme.accentText}`}>{section.tagline}</p>
      <p className="mt-5 max-w-xl text-base leading-relaxed opacity-90">{section.intro}</p>
    </SectionBand>
  );
}
