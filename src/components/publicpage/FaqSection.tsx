import type { EngineTheme } from "@/lib/engine-themes";
import type { FaqSection as FaqSectionType } from "@/lib/pages";
import SectionBand from "@/components/document/SectionBand";

export default function FaqSection({
  section,
  theme,
}: {
  section: FaqSectionType;
  theme: EngineTheme;
}) {
  return (
    <SectionBand theme={theme} variant="soft">
      <h2 className="font-serif text-2xl text-elys-text">{section.title}</h2>
      <div className="mt-8 flex flex-col gap-6">
        {section.items.map((item) => (
          <div key={item.question}>
            <h3 className="text-base font-semibold text-elys-text">{item.question}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-elys-muted">{item.answer}</p>
          </div>
        ))}
      </div>
    </SectionBand>
  );
}
