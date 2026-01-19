"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-12 text-center max-w-xl"
      >
        <h1 className="text-5xl font-bold">Baires 23.1</h1>
        <p className="mt-4 text-gray-300">
          Cocina, ambiente y experiencia nocturna
        </p>
      </motion.div>
    </section>
  );
}
