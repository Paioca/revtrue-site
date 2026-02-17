import Link from "next/link";

export default function TheRevenueAppBetaPage() {
  return (
    <main className="py-14">
      <Link href="/tools" className="text-sm text-white/70 hover:text-white">
        ← Voltar para Tools
      </Link>

      <header className="mt-6 max-w-3xl">
        <div className="text-xs text-white/50">Beta</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          TheRevenue App (Beta)
        </h1>
        <p className="mt-3 text-white/70">
          Estamos construindo uma ferramenta para análise de cohort, pipeline e forecast.
          Por enquanto, ela entra como "conteúdo rico": você testa e a gente aprende rápido.
        </p>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-semibold">O que já queremos validar</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>• Upload simples (CSV/Excel) e mapeamento rápido</li>
            <li>• Cohort por data escolhida (ex.: SQL)</li>
            <li>• Conversão por etapa e aging</li>
            <li>• Diagnóstico: onde atuar no funil</li>
          </ul>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-semibold">Acesso ao beta</h2>
          <p className="mt-2 text-sm text-white/70">
            Se você já tem o app rodando em outro domínio/subdomínio, coloque o link aqui.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 font-medium text-black hover:bg-white/90"
            >
              Abrir o app (placeholder)
            </a>

            <a
              href="#newsletter"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10"
            >
              Quero participar
            </a>
          </div>

          <p className="mt-4 text-xs text-white/50">
            Depois a gente conecta isso com Supabase para "waitlist" e tracking.
          </p>
        </div>
      </section>
    </main>
  );
}
