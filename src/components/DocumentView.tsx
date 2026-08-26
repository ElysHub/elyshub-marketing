import type { DocumentDef } from "@/lib/documents";
import StatusTag from "@/components/StatusTag";

export default function DocumentView({ document }: { document: DocumentDef }) {
  return (
    <article className="flex flex-col">
      {/* HEADER */}
      <section className="w-full bg-elys-text text-elys-page">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-10 sm:px-10 sm:py-14">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-elys-transition-green">
                {document.eyebrow}
              </div>
              <div className="text-[0.65rem] text-elys-page/50">
                Last updated {document.lastUpdated}
              </div>
            </div>

            <h1 className="m-0 text-4xl font-medium leading-none tracking-tight sm:text-5xl">
              {document.title}
            </h1>

            <p className="m-0 max-w-3xl text-lg leading-relaxed text-elys-page/90">
              {document.intro}
            </p>

            <div className="flex flex-col gap-2.5 border-l-2 border-elys-primary py-1 pl-5">
              <div className="text-[0.6rem] uppercase tracking-[0.1em] text-elys-transition-green">
                {document.calloutLabel}
              </div>
              <div className="text-[0.95rem] leading-relaxed text-elys-page/90">
                {document.calloutBody}
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {document.pills.map((pill) => (
                <div
                  key={pill}
                  className="rounded-full border border-elys-primary/60 px-4 py-2 text-[0.7rem] leading-none text-elys-transition-green"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2 rounded-lg border border-elys-page/10 bg-elys-page/[0.06] p-5">
              <div className="text-[0.6rem] uppercase tracking-[0.1em] text-elys-transition-green">
                Who
              </div>
              <div className="text-sm leading-relaxed text-elys-page/85">
                {document.who}
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border border-elys-page/10 bg-elys-page/[0.06] p-5">
              <div className="text-[0.6rem] uppercase tracking-[0.1em] text-elys-transition-green">
                Action unit
              </div>
              <div className="text-sm leading-relaxed text-elys-page/85">
                {document.actionUnit}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY MAP */}
      <section className="w-full bg-elys-hero">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-6 py-10 sm:px-10 sm:py-14">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="m-0 text-2xl font-medium text-elys-text">
              Capability map
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              {document.stages.map((stage, i) => (
                <div key={stage.id} className="flex items-center gap-2">
                  <div className="rounded-full bg-elys-primary px-3.5 py-2 text-[0.65rem] leading-none text-elys-page">
                    <span className="text-elys-page/70">{stage.id}</span>{" "}
                    {stage.label}
                  </div>
                  {i < document.stages.length - 1 ? (
                    <span className="text-[0.65rem] text-elys-text/40">→</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="columns-1 gap-5 md:columns-2 [column-fill:balance]">
            {document.capabilities.map((cap) => (
              <div
                key={cap.id}
                className="mb-5 flex break-inside-avoid flex-col gap-2.5 rounded-lg border border-elys-text/10 bg-white p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-elys-primary text-[0.75rem] font-medium text-elys-page">
                    {cap.id}
                  </div>
                  <div className="flex-1 text-[1.05rem] font-medium leading-tight text-elys-text">
                    {cap.name}
                  </div>
                </div>
                <div className="flex flex-col divide-y divide-elys-text/10">
                  {cap.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-baseline gap-4 py-2.5"
                    >
                      <div className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-elys-primary/70" />
                      <div className="flex-1 text-sm leading-snug text-elys-text/90">
                        {feature.name}
                      </div>
                      <StatusTag status={feature.status} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[0.65rem] text-elys-text/60">
            <div>
              <em>Is it working?</em> is a 1–10 research score, blank until the
              first round
            </div>
            <div>
              {document.title} · ElysHub
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
