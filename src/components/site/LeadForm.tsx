"use client";

import { useState } from "react";

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, source: "homepage" }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(data?.error ?? "Não foi possível cadastrar agora.");
        return;
      }

      setStatus("ok");
      setMessage("Cadastro feito! ✅");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Erro de rede. Tente novamente.");
    }
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
      <button
        disabled={status === "loading"}
        className="rounded-2xl bg-white px-5 py-3 font-medium text-black hover:bg-white/90 disabled:opacity-70"
      >
        {status === "loading" ? "Enviando..." : "Entrar"}
      </button>

      {message ? (
        <p className={`text-sm ${status === "ok" ? "text-white/80" : "text-red-300"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
