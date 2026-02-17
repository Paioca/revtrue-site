"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={stagger}
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />

      <div className="relative max-w-3xl">
        <motion.p variants={fadeUp()} className="text-sm text-white/70">
          Revenue analytics • Cohorts • Pipeline • Forecast
        </motion.p>

        <motion.h1
          variants={fadeUp()}
          className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Uma forma moderna de enxergar seu GTM.
        </motion.h1>

        <motion.p variants={fadeUp()} className="mt-5 text-lg text-white/70">
          Suba dados, gere visões executivas e encontre alavancas reais de receita — sem planilha infinita.
        </motion.p>
      </div>
    </motion.section>
  );
}
