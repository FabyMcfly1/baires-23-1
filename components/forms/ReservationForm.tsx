"use client";

import { useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    people: "2",
    phone: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    const message = `
Hola 👋
Quiero hacer una reserva en *Baires 23.1*:

📅 Fecha: ${form.date}
⏰ Hora: ${form.time}
👥 Personas: ${form.people}
👤 Nombre: ${form.name}
📞 Teléfono: ${form.phone || "No indicado"}

Gracias.
    `;
    openWhatsApp(message);
  }

  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5 w-full max-w-md">
      <h3 className="text-xl text-white font-semibold">
        Reserva tu mesa
      </h3>

      <input
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        className="input"
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="input"
      />

      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        className="input"
      />

      <select
        name="people"
        value={form.people}
        onChange={handleChange}
        className="input"
      >
        {[1,2,3,4,5,6,7,8].map(p => (
          <option key={p} value={p}>{p} personas</option>
        ))}
      </select>

      <input
        name="phone"
        placeholder="Teléfono (opcional)"
        value={form.phone}
        onChange={handleChange}
        className="input"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-[#C9A24D] text-black py-4 rounded-xl font-medium hover:scale-105 transition"
      >
        Reservar por WhatsApp
      </button>
    </div>
  );
}
