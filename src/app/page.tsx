import Link from "next/link";
import NewsletterPlaceholder from "@/components/site/NewsletterPlaceholder";
import { getAllPostsMeta, getAllTags } from "@/lib/blog";

export default function HomePage() {
  const posts = getAllPostsMeta();
  const latest = posts.slice(0, 5);
  const tags = getAllTags().slice(0, 9);

  const tracks = [
    {
      title: "Pipeline & Forecast",
      desc: "Cobertura, conversão, aging e o que realmente move o número.",
      href: "/tags/pipeline",
    },
    {
      title: "RevOps & Process",
      desc: "Frameworks e playbooks para operar GTM com governança.",
      href: "/tags/revops",
    },
    {
      title: "Enterprise Sales",
      desc: "Ciclo longo, multi-stakeholders, risco e execução.",
      href: "/tags/enterprise-sales",
    },
  ];

  return (
    <main className="py-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative max-w-3xl">
          <p className="text-sm text-white/70">GTM • Revenue • RevOps • Enterprise</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            TheRevenue
          </h1>

          <p className="mt-5 text-lg text-white/70">
            Um blog prático sobre GTM: ideias curtas, frameworks e decisões que movem receita.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="mt-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Comece por aqui</h2>
            <p className="mt-2 text-white/70">
              Trilhas rápidas para você achar valor em 3 minutos.
            </p>
          </div>
          <Link href="/blog" className="text-sm text-white/70 hover:text-white">
            Ver tudo →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {tracks.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06]"
            >
              <div className="text-xs text-white/50">Trilha</div>
              <h3 className="mt-2 text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-white/70">{t.desc}</p>
              <p className="mt-4 text-xs text-white/50">
                (Se a tag ainda não existir, criaremos conforme os posts surgirem.)
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* TAGS */}
      <section className="mt-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Tags</h2>
            <p className="mt-2 text-white/70">
              Um índice do conteúdo — bom para voltar sempre.
            </p>
          </div>
          <Link href="/tags" className="text-sm text-white/70 hover:text-white">
            Ver todas →
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.length === 0 ? (
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 text-white/70">
              Sem tags ainda. Adicione <code className="text-white/80">tags</code> no frontmatter dos posts.
            </div>
          ) : (
            tags.map((t) => (
              <Link
                key={t.slug}
                href={`/tags/${t.slug}`}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10"
              >
                {t.tag} <span className="text-white/40">({t.count})</span>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="mt-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Últimos posts</h2>
            <p className="mt-2 text-white/70">Notas curtas, aplicáveis, sem enrolação.</p>
          </div>
          <Link href="/blog" className="text-sm text-white/70 hover:text-white">
            Ir para o blog →
          </Link>
        </div>

        <div className="mt-6 grid gap-4">
          {latest.length === 0 ? (
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 text-white/70">
              Sem posts ainda. Crie um arquivo em <code className="text-white/80">src/content/blog</code>.
            </div>
          ) : (
            latest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs text-white/50">
                    {p.readingMinutes} min • {p.date}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        id="newsletter"
        className="mt-16 rounded-[28px] border border-white/10 bg-white/[0.03] p-10"
      >
        <h2 className="text-2xl font-semibold tracking-tight">Newsletter</h2>
        <p className="mt-2 text-white/70">
          Por enquanto é um placeholder. Depois conectamos Supabase.
        </p>
        <NewsletterPlaceholder />
      </section>
    </main>
  );
}
