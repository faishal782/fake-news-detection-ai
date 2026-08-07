"use client";

import { useState } from "react";
import axios from "axios";

type PredictionResult = {
  prediction: "Real" | "Fake";
  confidence: number;
  time: number;
  model: string;
};

type AnalyzerProps = {
  onResult: (result: PredictionResult) => void;
};

export default function Analyzer({ onResult }: AnalyzerProps) {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeNews() {
    if (!text.trim()) {
      alert("Please paste some news content.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
    "http://127.0.0.1:8000/predict-ai",
        {
          text,
        }
      );

      console.log("Backend Response:", response.data);

      onResult(response.data);

      console.log("Prediction sent successfully.");
    } catch (error: any) {
      console.error("FULL ERROR:", error);

      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }

      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (    <section
      id="analyzer"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Analyze Any News
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Paste a news article, headline, or URL and let our AI determine
            whether it's real or fake.
          </p>
        </div>

        {/* Card */}
        <div className="mt-14 rounded-3xl border border-gray-800 bg-[#0B1120] p-8 shadow-xl">

          {/* URL */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              News URL
            </label>

            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/news"
              className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          {/* OR */}
          <div className="my-8 flex items-center">
            <div className="h-px flex-1 bg-gray-700"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-700"></div>
          </div>

          {/* News Content */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              Paste News Content
            </label>

            <textarea
              rows={8}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your article here..."
              className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={analyzeNews}
              disabled={loading}
              className="rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              {loading ? "Analyzing..." : "Analyze News"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}