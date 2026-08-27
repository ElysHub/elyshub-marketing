import type { ResearchScore as ResearchScoreData } from "@/lib/documents";

interface ResearchScoreProps {
  research: ResearchScoreData;
}

export default function ResearchScore({ research }: ResearchScoreProps) {
  if (research.status === "scored" && research.score !== null) {
    return (
      <div className="shrink-0 text-right text-xs text-elys-text/55">
        <span className="font-medium text-elys-text/75">{research.score}</span>
        <span> / 10</span>
      </div>
    );
  }

  return (
    <div className="shrink-0 text-xs text-elys-text/55">— / 10</div>
  );
}
