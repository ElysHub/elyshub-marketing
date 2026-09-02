import type { EngineTheme } from "@/lib/engine-themes";

interface SectionBandProps {
  theme: EngineTheme;
  variant: "hero" | "soft" | "page";
  children: React.ReactNode;
}

export default function SectionBand({
  theme,
  variant,
  children,
}: SectionBandProps) {
  const bg = variant === "hero" ? theme.heroBg : variant === "soft" ? theme.softBg : "bg-elys-page";

  return (
    <section className={`w-full ${bg} ${variant === "hero" ? "text-elys-page" : ""}`}>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-6 py-10 sm:px-10 sm:py-14">
        {children}
      </div>
    </section>
  );
}
