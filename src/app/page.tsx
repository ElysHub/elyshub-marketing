import { Fragment } from "react";
import { cssVar } from "@/lib/design-tokens";
import SiteHeader, { tallyUrl } from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const audienceLabels = [
  "Farmers",
  "Hobbyists",
  "First-time gardeners",
  "For scientists",
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-elys-page text-elys-text">

      <SiteHeader />

      {/* HERO */}
      <section className="bg-elys-hero px-6 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center pt-10 text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-elys-primary bg-transparent px-4 py-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-elys-text md:text-xs">
            <span
              className="size-2 shrink-0 rounded-full bg-elys-primary"
              aria-hidden
            />
            <span>Now welcoming early growers</span>
          </p>

          <h1 className="mb-6 text-5xl leading-tight md:text-6xl">
            Understand{" "}
            <span className="italic" style={{ color: cssVar.primary }}>
              your plants
            </span>
            .
            <br />
            Grow with{" "}
            <span className="relative inline-block overflow-visible whitespace-nowrap pb-1">
              precision
              <svg
                className="pointer-events-none absolute left-0 w-full"
                style={{ bottom: "-6px", height: "12px" }}
                viewBox="0 0 220 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 8 Q 60 0, 120 7 T 218 5"
                  fill="none"
                  stroke={cssVar.primary}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="nonScalingStroke"
                />
              </svg>
            </span>.
          </h1>

          <p className="text-lg md:text-xl text-elys-muted max-w-2xl mb-10 leading-relaxed">
            ElysHub helps growers understand environmental conditions,
            manage plant care intelligently, and make confident decisions using real data.
          </p>

          <a
            href={tallyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-elys-primary px-10 py-4 text-lg font-medium text-white shadow-sm transition hover:brightness-110 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elys-primary-ring focus-visible:ring-offset-2 focus-visible:ring-offset-elys-hero"
          >
            Get early access
          </a>
        </div>
      </section>

      {/* AUDIENCE STRIP */}
      <section
        className="border-y border-elys-transition-green bg-elys-hero px-6 py-3.5"
        aria-label="Audiences ElysHub serves"
      >
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center font-sans text-[0.65rem] font-medium uppercase tracking-[0.14em] text-elys-muted md:text-xs">
          {audienceLabels.map((label, i) => (
            <Fragment key={label}>
              {i > 0 ? (
                <span
                  className="select-none text-elys-muted/45"
                  aria-hidden
                >
                  •
                </span>
              ) : null}
              <span>{label}</span>
            </Fragment>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mt-32 px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl mb-4">
            Built around real growing systems
          </h2>

          <p className="text-elys-muted text-lg">
            ElysHub is designed to help growers understand, plan, and optimize every stage of plant care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl mb-3">
              Environment Intelligence
            </h3>

            <p className="text-elys-muted leading-relaxed">
              Monitor light, moisture, temperature, and environmental conditions with sensors and intelligent estimation systems.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl mb-3">
              Medium & Nutrition
            </h3>

            <p className="text-elys-muted leading-relaxed">
              Manage soil, substrates, nutrients, and fertilization strategies with greater precision and sustainability.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl mb-3">
              Planning & Management
            </h3>

            <p className="text-elys-muted leading-relaxed">
              Track growth, manage plant history, optimize timing, and plan future cultivation with confidence.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl mb-3">
              Care Intelligence
            </h3>

            <p className="text-elys-muted leading-relaxed">
              Learn from care recommendations, observations, and evolving plant knowledge tailored to your environment.
            </p>
          </div>

        </div>
      </section>

      <SiteFooter />

    </main>
  );
}