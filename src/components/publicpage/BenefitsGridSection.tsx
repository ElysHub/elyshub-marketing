import type { EngineTheme } from "@/lib/engine-themes";
import type { BenefitsGridSection as BenefitsGridSectionType } from "@/lib/pages";
import SectionBand from "@/components/document/SectionBand";

export default function BenefitsGridSection({
  section,
  theme,
}: {
  section: BenefitsGridSectionType;
  theme: EngineTheme;
}) {
  return (
    <SectionBand theme={theme} variant="soft">
      <h2 className="font-serif text-2xl text-elys-text">{section.title}</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {section.benefits.map((benefit) => (
          <div
            key={benefit.title}
            className={`rounded-xl border ${theme.accentBorderSoft} bg-elys-page p-6`}
          >
            <h3 className="text-base font-semibold text-elys-text">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-elys-muted">{benefit.text}</p>
          </div>
        ))}
      </div>
    </SectionBand>
  );
}
