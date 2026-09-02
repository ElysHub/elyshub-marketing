import type { EngineTheme } from "@/lib/engine-themes";
import type { HowItWorksSection as HowItWorksSectionType } from "@/lib/pages";
import SectionBand from "@/components/document/SectionBand";

export default function HowItWorksSection({
  section,
  theme,
}: {
  section: HowItWorksSectionType;
  theme: EngineTheme;
}) {
  return (
    <SectionBand theme={theme} variant="page">
      <h2 className="font-serif text-2xl text-elys-text">{section.title}</h2>
      <ol className="mt-8 grid gap-6 sm:grid-cols-3">
        {section.steps.map((step, index) => (
          <li key={step.title}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-elys-page ${theme.accentBg}`}
            >
              {index + 1}
            </div>
            <h3 className="mt-3 text-base font-semibold text-elys-text">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-elys-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </SectionBand>
  );
}
