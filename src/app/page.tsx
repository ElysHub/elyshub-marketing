export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-5xl font-semibold mb-6">
        Stop guessing. Start growing with precision.
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-4">
        ElysHub turns raw sensor data into clear, actionable plant care decisions.
      </p>

      <p className="text-md text-gray-500 max-w-md mb-8">
        Built for serious growers who want control — not guesswork.
      </p>

      <a
        href="https://tally.so/r/7R4X82"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:opacity-80 transition"
      >
        Get early access
      </a>

    </main>
  );
}