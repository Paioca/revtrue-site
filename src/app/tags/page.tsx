import Link from "next/link";
import { getAllTags } from "@/lib/blog";

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <main className="py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Tags</h1>
      <p className="mt-2 text-white/70">
        Navegue pelos temas. Isso vira seu "índice GTM".
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tags.length === 0 ? (
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 text-white/70">
            Sem tags ainda. Adicione <code className="text-white/80">tags: ["revops"]</code> no frontmatter do MDX.
          </div>
        ) : (
          tags.map((t) => (
            <Link
              key={t.slug}
              href={`/tags/${t.slug}`}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{t.tag}</span>
                <span className="text-xs text-white/50">{t.count}</span>
              </div>
              <p className="mt-2 text-xs text-white/60">Ver posts →</p>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
