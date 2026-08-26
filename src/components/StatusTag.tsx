import { cssVar } from "@/lib/design-tokens";
import type { DocStatus } from "@/lib/documents";

const statusStyles: Record<DocStatus, { color: string; label: string }> = {
  Live: { color: cssVar.statusLive, label: "LIVE" },
  Planned: { color: cssVar.statusPlanned, label: "PLANNED" },
  Vision: { color: cssVar.statusVision, label: "VISION" },
  Gap: { color: cssVar.statusGap, label: "GAP" },
};

export default function StatusTag({ status }: { status: DocStatus }) {
  const { color, label } = statusStyles[status];
  return (
    <span
      className="shrink-0 text-right text-[0.6rem] font-semibold tracking-[0.08em]"
      style={{ color }}
    >
      {label}
    </span>
  );
}
