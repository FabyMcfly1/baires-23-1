"use client";

import { motion } from "framer-motion";
import PremiumButton from "@/components/ui/PremiumButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center scale-105" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          relative z-10
          max-w-xl w-[90%]
          backdrop-blur-2xl bg-white/5
          border border-white/10
          rounded-3xl
          px-8 py-12 md:px-12 md:py-16
          text-center
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        "
      >
        {/* Brand */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-white">
          Baires <span className="text-[#C9A24D]">23.1</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm md:text-base text-gray-300 leading-relaxed">
          Cocina, ambiente y experiencia nocturna
        </p>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent opacity-70" />

        {/* CTA */}
        <div className="mt-8">
          <PremiumButton />
        </div>
      </motion.div>
    </section>
  );
}
