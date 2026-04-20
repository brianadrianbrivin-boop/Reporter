"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6">

      <div className="max-w-3xl w-full text-center">

        {/* Badge */}
        <div className="inline-block px-4 py-1 mb-6 text-sm bg-gray-100 rounded-full text-gray-600">
          AI Newsletter Platform
        </div>

        {/* Hero */}
        <h1 className="text-5xl font-bold leading-tight">
          Reporter delivers AI-powered insights without information overload
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          Daily summaries of news, trends, and signals — simplified for busy people.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
            required
          />
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
            Get Early Access
          </button>
        </form>

        <p className="mt-3 text-sm text-gray-400">
          No spam. Cancel anytime.
        </p>

        {/* Features */}
        <div className="mt-14 grid sm:grid-cols-3 gap-6 text-left">

          <div className="p-4 border rounded-xl bg-white">
            <h3 className="font-semibold">⚡ Fast Insights</h3>
            <p className="text-sm text-gray-500 mt-2">
              Get daily AI summaries in under 1 minute.
            </p>
          </div>

          <div className="p-4 border rounded-xl bg-white">
            <h3 className="font-semibold">🧠 AI Curated</h3>
            <p className="text-sm text-gray-500 mt-2">
              Only relevant news and trends selected.
            </p>
          </div>

          <div className="p-4 border rounded-xl bg-white">
            <h3 className="font-semibold">📩 Email Delivery</h3>
            <p className="text-sm text-gray-500 mt-2">
              Delivered directly to your inbox daily.
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="mt-16 text-xs text-gray-400">
          © {new Date().getFullYear()} Reporter. Built with Next.js.
        </p>

      </div>
    </main>
  );
}
