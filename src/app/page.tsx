export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      <h1 className="text-5xl font-semibold mb-6">
      Stop guessing. Start growing with precision.
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
      ElysHub turns raw sensor data into clear, actionable plant care decisions.
      </p>

<a
  href="https://app.elyshub.com"
  className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:opacity-80 transition"
>
  Get early access
      </a>

    </main>
  );
}