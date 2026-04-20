export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6">

      <div className="w-full max-w-2xl text-center">

        {/* Badge */}
        <div className="inline-block px-4 py-1 mb-6 text-sm bg-gray-100 rounded-full text-gray-600">
          AI-Powered Newsletter
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-bold leading-tight">
          Reporter helps you stay ahead without information overload
        </h1>

        {/* Subtext */}
        <p className="mt-5 text-lg text-gray-600">
          Get daily AI summaries of news, trends, and insights — clean, fast, and relevant.
        </p>

        {/* Form */}
        <form className="mt-10 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-black"
          />
          <button
            className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>

        {/* Trust line */}
        <p className="mt-4 text-sm text-gray-400">
          No spam. Unsubscribe anytime.
        </p>

        {/* Simple stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
          <div>
            <p className="font-bold text-xl">1 min</p>
            <p>Daily summary</p>
          </div>
          <div>
            <p className="font-bold text-xl">AI</p>
            <p>Powered insights</p>
          </div>
          <div>
            <p className="font-bold text-xl">0 spam</p>
            <p>Clean delivery</p>
          </div>
        </div>

      </div>
    </main>
  );
}