import type { Capability } from "@/lib/documents";
import type { EngineTheme } from "@/lib/engine-themes";
import ItemRow from "./ItemRow";
import ResearchScore from "./ResearchScore";

interface CapabilityCardProps {
  theme: EngineTheme;
  capability: Capability;
}

export default function CapabilityCard({ theme, capability }: CapabilityCardProps) {
  return (
    <div className="mb-5 flex break-inside-avoid flex-col gap-2.5 rounded-lg border border-elys-text/10 bg-white p-5">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-[0.75rem] font-medium text-elys-page ${theme.accentBg}`}
        >
          {capability.id}
        </div>
        <div className="flex-1 text-[1.05rem] font-medium leading-tight text-elys-text">
          {capability.name}
        </div>
        <ResearchScore research={capability.research} />
      </div>
      <div className="flex flex-col divide-y divide-elys-text/10">
        {capability.items.map((row) => (
          <ItemRow key={row.text} theme={theme} item={row} />
        ))}
      </div>
    </div>
  );
}
