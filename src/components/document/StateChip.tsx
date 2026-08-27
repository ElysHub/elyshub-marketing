import { cssVar } from "@/lib/design-tokens";
import type { ItemState } from "@/lib/documents";

const stateStyles: Record<ItemState, { color: string; label: string }> = {
  live: { color: cssVar.statusLive, label: "LIVE" },
  partial: { color: cssVar.statusPlanned, label: "PARTIAL" },
  planned: { color: cssVar.statusPlanned, label: "PLANNED" },
  vision: { color: cssVar.statusVision, label: "VISION" },
  gap: { color: cssVar.statusGap, label: "GAP" },
};

export default function StateChip({ state }: { state: ItemState }) {
  const { color, label } = stateStyles[state];
  return (
    <span
      className="shrink-0 text-right text-[0.6rem] font-semibold tracking-[0.08em]"
      style={{ color }}
    >
      {label}
    </span>
  );
}
