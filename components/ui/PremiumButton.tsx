"use client";

import { openWhatsApp } from "@/lib/whatsapp";

export default function PremiumButton() {
  return (
    <button
      onClick={() =>
        openWhatsApp("Hola, quiero hacer una reserva en Baires 23.1")
      }
      className="px-8 py-4 rounded-xl bg-[#C9A24D] text-black font-medium hover:scale-105 transition"
    >
      Reservar por WhatsApp
    </button>
  );
}
