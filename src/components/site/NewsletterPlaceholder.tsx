"use client";

import { useState } from "react";

export default function NewsletterPlaceholder() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<string>("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg("Salvaremos isso no Supabase depois 😉");
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        placeholder="Seu e-mail"
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/30"
      />
      <button className="rounded-2xl bg-white px-5 py-3 font-medium text-black hover:bg-white/90">
        Entrar
      </button>

      {msg ? <p className="text-sm text-white/70">{msg}</p> : null}
    </form>
  );
}
