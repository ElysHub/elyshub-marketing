import type { EngineTheme } from "@/lib/engine-themes";

interface PillProps {
  theme: EngineTheme;
  children: React.ReactNode;
}

export default function Pill({ theme, children }: PillProps) {
  return (
    <div
      className={`rounded-full border px-4 py-2 text-[0.7rem] leading-none ${theme.accentBorderSoft} ${theme.accentText}`}
    >
      {children}
    </div>
  );
}
