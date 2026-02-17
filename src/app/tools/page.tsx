import Link from "next/link";

const tools = [
  {
    title: "Pipeline Coverage",
    desc: "Calcule cobertura necessária para bater meta com confiança.",
    href: "/tools/pipeline-coverage",
    status: "coming soon",
  },
  {
    title: "Cohort Aging",
    desc: "Entenda risco por idade do deal e probabilidade de permanecer aberto.",
    href: "/tools/cohort-aging",
    status: "coming soon",
  },
  {
    title: "TheRevenue App (Beta)",
    desc: "A ferramenta em construção — por enquanto como conteúdo rico.",
    href: "/tools/therevenue-app",
    status: "beta",
  },
];

export default function ToolsPage() {
  return (
    <main className="py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Tools</h1>
      <p className="mt-2 text-white/70">
        Pequenas ferramentas práticas para GTM — rápidas e acionáveis.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.title}
            href={t.href}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/50">
                {t.status === "beta" ? "Beta" : "Em breve"}
              </span>
              <span className="text-xs text-white/50">→</span>
            </div>
            <h2 className="mt-2 text-lg font-semibold">{t.title}</h2>
            <p className="mt-2 text-sm text-white/70">{t.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
