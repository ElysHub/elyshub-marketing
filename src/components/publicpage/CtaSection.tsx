import type { EngineTheme } from "@/lib/engine-themes";
import type { CtaSection as CtaSectionType } from "@/lib/pages";
import SectionBand from "@/components/document/SectionBand";
import { tallyUrl } from "@/components/SiteHeader";

export default function CtaSection({
  section,
  theme,
}: {
  section: CtaSectionType;
  theme: EngineTheme;
}) {
  return (
    <SectionBand theme={theme} variant="hero">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-serif text-2xl sm:text-3xl">{section.heading}</h2>
        {section.body && <p className="mt-3 max-w-md opacity-90">{section.body}</p>}
        <a
          href={tallyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-block rounded-full border-2 px-6 py-2.5 text-sm font-medium transition hover:opacity-80 ${theme.accentBorder} ${theme.accentText}`}
        >
          {section.buttonLabel}
        </a>
      </div>
    </SectionBand>
  );
}
