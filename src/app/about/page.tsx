import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="py-14">
      <header className="max-w-3xl">
        <p className="text-sm text-white/60">Sobre</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          TheRevenue é uma central prática sobre GTM.
        </h1>
        <p className="mt-4 text-white/70">
          A ideia é simples: menos teoria, mais decisões aplicáveis. Conteúdo curto,
          frameworks e análises que ajudam líderes de receita a operar com mais previsibilidade.
        </p>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-semibold">O que você vai encontrar aqui</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>• Pipeline coverage, forecast e sinais de risco</li>
            <li>• Operação de funil (aging, ciclo)</li>
            <li>• RevOps: processo, governança e métricas</li>
            <li>• Enterprise: negociação, multi-stakeholders e execução</li>
          </ul>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-semibold">Para quem é</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>• CEO / Founder de B2B SaaS</li>
            <li>• Head of Sales / CRO</li>
            <li>• RevOps / Sales Ops</li>
            <li>• Lideranças de CS/Marketing que operam receita</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-10">
        <h2 className="text-2xl font-semibold tracking-tight">Como eu trabalho</h2>
        <p className="mt-2 text-white/70 max-w-3xl">
          Cada post tenta responder uma pergunta operacional. Se não dá pra virar ação, não vira post.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 font-medium text-black hover:bg-white/90"
          >
            Ler o blog
          </Link>
          <Link
            href="/tags"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10"
          >
            Explorar tags
          </Link>
          <a
            href="/#newsletter"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10"
          >
            Assinar newsletter
          </a>
        </div>

        <p className="mt-5 text-xs text-white/50">
          (Newsletter ainda é placeholder — depois conectamos Supabase.)
        </p>
      </section>
    </main>
  );
}
