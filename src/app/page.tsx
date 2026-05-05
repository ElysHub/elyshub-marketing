export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center text-center px-6 py-16">

      {/* HERO */}
      <section className="flex flex-col items-center max-w-2xl">

        {/* LOGO */}
        <img 
          src="/icon.png" 
          alt="ElysHub logo" 
          className="w-20 h-20 mb-6"
        />

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Stop guessing. Start growing with precision.
        </h1>

        {/* SUBTEXT */}
        <p className="text-lg text-gray-600 mb-4">
          ElysHub helps you understand your plants, control your environment, and make confident decisions using real data.
        </p>

        <p className="text-md text-gray-500 mb-8">
          Built for growers who want clarity — not guesswork.
        </p>

        {/* CTA */}
        <a
          href="https://tally.so/r/7R4X82"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:opacity-80 transition"
        >
          Get early access
        </a>
      </section>

      {/* PILLARS */}
      <section className="mt-20 max-w-4xl w-full">

        <h2 className="text-2xl font-semibold mb-10">
          How ElysHub works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

          <div>
            <h3 className="font-semibold text-lg mb-2">Environment Intelligence</h3>
            <p className="text-gray-600">
              Understand light, moisture, temperature, and how your environment actually affects your plants.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Medium & Nutrition</h3>
            <p className="text-gray-600">
              Manage soil, substrates, and nutrients with precision to support healthy growth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Planning & Management</h3>
            <p className="text-gray-600">
              Track growth, plan plantings, and make better decisions over time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Care Intelligence</h3>
            <p className="text-gray-600">
              Get clear recommendations and learn what works for your specific plants.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 text-sm text-gray-500 flex flex-col items-center gap-2">

        <p>Contact: elyshub.team@gmail.com</p>

        <div className="flex gap-4">
          <a href="https://www.facebook.com/" target="_blank">Facebook</a>
          <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
          <a href="https://www.reddit.com/" target="_blank">Reddit</a>
        </div>

        <p className="mt-4">© {new Date().getFullYear()} ElysHub</p>

      </footer>

    </main>
  );
}