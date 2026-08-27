import type { HeroSection } from "@/lib/documents";
import type { EngineTheme } from "@/lib/engine-themes";
import ContextCard from "./ContextCard";
import Eyebrow from "./Eyebrow";
import Pill from "./Pill";
import SectionBand from "./SectionBand";
import SupportStatement from "./SupportStatement";

interface HeroSectionViewProps {
  section: HeroSection;
  theme: EngineTheme;
}

export default function HeroSectionView({ section, theme }: HeroSectionViewProps) {
  return (
    <SectionBand theme={theme} variant="hero">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <Eyebrow theme={theme}>{section.eyebrow}</Eyebrow>
            <div className="text-[0.65rem] text-elys-page/50">
              Last updated {section.last_updated}
            </div>
          </div>

          <h1 className="m-0 text-4xl font-medium leading-none tracking-tight sm:text-5xl">
            {section.title}
          </h1>

          <p className="m-0 max-w-3xl text-lg leading-relaxed text-elys-page/90">
            {section.job_statement}
          </p>

          <SupportStatement
            theme={theme}
            label={section.support_statement.label}
            text={section.support_statement.text}
          />

          <div className="flex flex-wrap gap-2.5">
            {section.value_pills.map((pill) => (
              <Pill key={pill} theme={theme}>
                {pill}
              </Pill>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {section.context_cards.map((card) => (
            <ContextCard
              key={card.id}
              theme={theme}
              label={card.label}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </SectionBand>
  );
}
