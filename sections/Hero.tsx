"use client";

import { motion } from "framer-motion";
import PremiumButton from "@/components/ui/PremiumButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 text-center"
      >
        <h1 className="text-5xl font-semibold text-white">
          Baires 23.1
        </h1>

        <p className="mt-4 text-gray-300">
          Cocina, ambiente y experiencia nocturna
        </p>

        <div className="mt-8">
          <PremiumButton />
        </div>
      </motion.div>
    </section>
  );
}
