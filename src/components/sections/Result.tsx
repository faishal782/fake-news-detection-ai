"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Shield,
  Timer,
  Database,
  Brain,
  BarChart3,
} from "lucide-react";

type PredictionResult = {
  prediction: "Real" | "Fake";
  confidence: number;
  time: number;
  model: string;
};

type ResultProps = {
  prediction: PredictionResult | null;
};

export default function Result({
  prediction,
}: ResultProps) {
  if (!prediction) return null;

  const isReal = prediction.prediction === "Real";

  return (
    <section
      id="result"
      className="bg-black px-6 py-20"
    >
      <div className="mx-auto max-w-6xl rounded-3xl border border-gray-800 bg-[#0B1120] p-10">

        {/* Heading */}

        <div className="text-center">

          <Shield
            className="mx-auto mb-4 text-blue-500"
            size={44}
          />

          <h2 className="text-4xl font-bold text-white">
            AI Analysis Result
          </h2>

          <p className="mt-4 text-gray-400">
            Generated using RoBERTa Transformer AI
          </p>

        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
                    {/* LEFT CARD */}

          <div
            className={`rounded-3xl border p-8 transition-all duration-300 ${
              isReal
                ? "border-green-500/30 bg-green-500/10"
                : "border-red-500/30 bg-red-500/10"
            }`}
          >

            {isReal ? (
              <CheckCircle2
                className="mb-5 text-green-400"
                size={44}
              />
            ) : (
              <AlertTriangle
                className="mb-5 text-red-400"
                size={44}
              />
            )}

            <h3
              className={`text-4xl font-bold ${
                isReal
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {prediction.prediction}
            </h3>

            <p className="mt-4 text-lg text-gray-300">
              AI Prediction
            </p>

            <div className="mt-10">

              <div className="mb-3 flex items-center justify-between">

                <span className="text-gray-400">
                  Confidence
                </span>

                <span className="font-bold text-white">
                  {prediction.confidence}%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-gray-700">

                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    isReal
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                  style={{
                    width: `${prediction.confidence}%`,
                  }}
                />

              </div>

            </div>

          </div>

          {/* RIGHT CARD */}

          <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8">

            <h3 className="mb-8 text-2xl font-bold text-white">
              Prediction Details
            </h3>

            <div className="space-y-6">              <div className="flex items-center gap-4">
                <Timer className="text-blue-400" />

                <div>
                  <p className="text-sm text-gray-400">
                    Prediction Time
                  </p>

                  <p className="text-lg font-semibold text-white">
                    {prediction.time} sec
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Brain className="text-purple-400" />

                <div>
                  <p className="text-sm text-gray-400">
                    AI Model
                  </p>

                  <p className="text-lg font-semibold text-white">
                    {prediction.model}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Database className="text-green-400" />

                <div>
                  <p className="text-sm text-gray-400">
                    Technology
                  </p>

                  <p className="text-lg font-semibold text-white">
                    RoBERTa Transformer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <BarChart3 className="text-yellow-400" />

                <div>
                  <p className="text-sm text-gray-400">
                    Status
                  </p>

                  <p className="text-lg font-semibold text-white">
                    Live AI Prediction
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}