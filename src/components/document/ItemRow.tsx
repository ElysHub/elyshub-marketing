import type { CapabilityItem } from "@/lib/documents";
import type { EngineTheme } from "@/lib/engine-themes";
import StateChip from "./StateChip";

interface ItemRowProps {
  theme: EngineTheme;
  item: CapabilityItem;
}

export default function ItemRow({ theme, item }: ItemRowProps) {
  return (
    <div className="flex items-baseline gap-4 py-2.5">
      <div
        className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${theme.accentBgSoft}`}
      />
      <div className="flex-1 text-sm leading-snug text-elys-text/90">
        {item.text}
      </div>
      <StateChip state={item.state} />
    </div>
  );
}
