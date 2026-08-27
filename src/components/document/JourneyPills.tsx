import type { JourneyStep } from "@/lib/documents";
import type { EngineTheme } from "@/lib/engine-themes";

interface JourneyPillsProps {
  theme: EngineTheme;
  journey: JourneyStep[];
}

export default function JourneyPills({ theme, journey }: JourneyPillsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {journey.map((step, i) => (
        <div key={step.id} className="flex items-center gap-2">
          <div
            className={`rounded-full px-3.5 py-2 text-[0.65rem] leading-none text-elys-page ${theme.accentBg}`}
          >
            <span className="text-elys-page/70">{step.id}</span> {step.label}
          </div>
          {i < journey.length - 1 ? (
            <span className="text-[0.65rem] text-elys-text/40">→</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
