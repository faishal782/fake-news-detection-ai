"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-black to-black px-6 pt-24">

      {/* Background Glows */}
      <div className="absolute left-1/2 top-40 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="absolute right-20 top-20 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="absolute bottom-20 left-20 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Floating Particles */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute left-24 top-40 h-3 w-3 rounded-full bg-blue-400 opacity-70"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute right-52 top-60 h-2 w-2 rounded-full bg-cyan-300 opacity-70"
      />

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute bottom-40 left-1/3 h-4 w-4 rounded-full bg-blue-500 opacity-40"
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute bottom-56 right-32 h-2 w-2 rounded-full bg-white opacity-60"
      />

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute left-12 top-1/2 h-2 w-2 rounded-full bg-blue-500 opacity-50"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* AI Badge */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-blue-400"
        >
          <Sparkles size={18} />
          AI Powered Detection
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="text-6xl font-extrabold leading-tight text-white md:text-7xl"
        >
          Detect Fake News
          <br />
          Before It Spreads
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.45,
            duration: 0.8,
          }}
          className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-400"
        >
          Verify news articles, headlines and URLs instantly using
          Artificial Intelligence and Machine Learning.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <Button text="Analyze News" primary />
          <Button text="Learn More" />
        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="mt-20 flex flex-wrap justify-center gap-12 text-gray-300"
        >
                      <div className="flex items-center gap-3">
            <ShieldCheck className="text-blue-500" size={28} />

            <div className="text-left">
              <h3 className="text-2xl font-bold text-white">
                98%
              </h3>

              <p className="text-gray-400">
                Accuracy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Zap className="text-yellow-400" size={28} />

            <div className="text-left">
              <h3 className="text-2xl font-bold text-white">
                2 Sec
              </h3>

              <p className="text-gray-400">
                Average Scan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="text-cyan-400" size={28} />

            <div className="text-left">
              <h3 className="text-2xl font-bold text-white">
                24/7
              </h3>

              <p className="text-gray-400">
                AI Monitoring
              </p>
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
}