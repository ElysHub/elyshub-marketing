import type { EngineTheme } from "@/lib/engine-themes";

interface SupportStatementProps {
  theme: EngineTheme;
  label: string;
  text: string;
}

export default function SupportStatement({
  theme,
  label,
  text,
}: SupportStatementProps) {
  return (
    <div
      className={`flex flex-col gap-2.5 border-l-2 py-1 pl-5 ${theme.accentBorder}`}
    >
      <div className={`text-[0.6rem] uppercase tracking-[0.1em] ${theme.accentText}`}>
        {label}
      </div>
      <div className="text-[0.95rem] leading-relaxed text-elys-page/90">{text}</div>
    </div>
  );
}
