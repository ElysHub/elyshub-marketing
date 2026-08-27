import type { CapabilityMapSection } from "@/lib/documents";
import type { EngineTheme } from "@/lib/engine-themes";
import CapabilityCard from "./CapabilityCard";
import JourneyPills from "./JourneyPills";
import SectionBand from "./SectionBand";

interface CapabilityMapSectionViewProps {
  section: CapabilityMapSection;
  theme: EngineTheme;
  documentTitle: string;
}

export default function CapabilityMapSectionView({
  section,
  theme,
  documentTitle,
}: CapabilityMapSectionViewProps) {
  return (
    <SectionBand theme={theme} variant="soft">
      <div className="flex flex-col gap-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="m-0 text-2xl font-medium text-elys-text">
            {section.title}
          </h2>
          <JourneyPills theme={theme} journey={section.journey} />
        </div>

        <div className="columns-1 gap-5 md:columns-2 [column-fill:balance]">
          {section.capabilities.map((capability) => (
            <CapabilityCard
              key={capability.id}
              theme={theme}
              capability={capability}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[0.65rem] text-elys-text/60">
          <div>
            <em>Is it working?</em> is a 1–10 research score, blank until the
            first round
          </div>
          <div>{documentTitle} · ElysHub</div>
        </div>
      </div>
    </SectionBand>
  );
}
