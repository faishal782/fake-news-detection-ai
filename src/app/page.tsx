"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Analyzer from "@/components/sections/Analyzer";
import Result from "@/components/sections/Result";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";

type PredictionResult = {
  prediction: "Real" | "Fake";
  confidence: number;
  time: number;
  model: string;
};

export default function Home() {
  const [prediction, setPrediction] =
    useState<PredictionResult | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <Hero />

      <Analyzer
        onResult={(result) => {
          setPrediction(result);

          setTimeout(() => {
            document
              .getElementById("result")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }, 150);
        }}
      />

      <Result prediction={prediction} />

      <Features />

      <HowItWorks />

    </main>
  );
}