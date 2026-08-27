import type { EngineTheme } from "@/lib/engine-themes";

interface EyebrowProps {
  theme: EngineTheme;
  children: React.ReactNode;
}

export default function Eyebrow({ theme, children }: EyebrowProps) {
  return (
    <div
      className={`text-[0.65rem] font-medium uppercase tracking-[0.14em] ${theme.accentText}`}
    >
      {children}
    </div>
  );
}
