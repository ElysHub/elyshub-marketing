import { cssVar } from "@/lib/design-tokens";

const tallyUrl = "https://tally.so/r/7R4X82";

export default function Home() {
  return (
    <main className="min-h-screen bg-elys-page text-elys-text">

      {/* NAV */}
      <header className="border-b border-elys-border bg-elys-page">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a
            href="/"
            className="flex items-center gap-3 text-elys-text transition hover:opacity-80"
          >
            <img
              src="/icon.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 shrink-0"
            />
            <span className="text-lg font-semibold tracking-tight">ElysHub</span>
          </a>

          <a
            href={tallyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block shrink-0 rounded-full border-2 border-elys-primary bg-transparent px-5 py-2 text-sm font-medium text-elys-primary transition hover:bg-elys-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elys-primary focus-visible:ring-offset-2 focus-visible:ring-offset-elys-page"
          >
            Get early access
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-elys-hero px-6 py-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-10">
          <h1 className="text-5xl md:text-6xl leading-tight mb-6">
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

      {/* FOOTER */}
      <footer className="mx-auto mt-32 max-w-5xl border-t border-elys-border px-6 pb-16 pt-10">

        <div className="flex flex-col items-center justify-between gap-6 text-sm text-elys-muted md:flex-row">

          <div>
            Contact:{" "}
            <a
              href="mailto:elyshub.team@gmail.com"
              className="transition hover:text-elys-text"
            >
              elyshub.team@gmail.com
            </a>
          </div>

          <div className="flex gap-6">

            <a
              href="https://www.facebook.com/profile.php?id=61585837850448"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-elys-text"
            >
              Facebook
            </a>

            <a
              href="https://www.linkedin.com/company/elyshub"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-elys-text"
            >
              LinkedIn
            </a>

            <a
              href="https://www.reddit.com/user/Far-Plant-9223/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-elys-text"
            >
              Reddit
            </a>

          </div>

        </div>

        <p className="mt-10 text-center text-sm text-elys-muted">
          © {new Date().getFullYear()} ElysHub, LLC. All rights reserved.
        </p>

      </footer>

    </main>
  );
}