import type { EngineTheme } from "@/lib/engine-themes";

interface ContextCardProps {
  theme: EngineTheme;
  label: string;
  text: string;
}

export default function ContextCard({ theme, label, text }: ContextCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-elys-page/10 bg-elys-page/[0.06] p-5">
      <div className={`text-[0.6rem] uppercase tracking-[0.1em] ${theme.accentText}`}>
        {label}
      </div>
      <div className="text-sm leading-relaxed text-elys-page/85">{text}</div>
    </div>
  );
}
