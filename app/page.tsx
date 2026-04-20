export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">

      <h1 className="text-5xl font-bold max-w-3xl">
        Reporter — AI-powered newsletters without noise.
      </h1>

      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Get daily AI summaries of news, trends, and insights delivered in minutes.
      </p>

      <form className="mt-8 flex gap-3 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 border rounded-xl"
        />
        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Subscribe
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-400">
        No spam. Unsubscribe anytime.
      </p>

    </main>
  );
}
