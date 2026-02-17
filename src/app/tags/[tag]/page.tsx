import Link from "next/link";
import { getAllTags, getPostsByTagSlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t.slug }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const result = getPostsByTagSlug(params.tag);

  if (!result) {
    return (
      <main className="py-14">
        <Link href="/tags" className="text-sm text-white/70 hover:text-white">
          ← Voltar para Tags
        </Link>
        <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-6 text-white/70">
          Tag não encontrada.
        </div>
      </main>
    );
  }

  const { tag, posts } = result;

  return (
    <main className="py-14">
      <Link href="/tags" className="text-sm text-white/70 hover:text-white">
        ← Voltar para Tags
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight">{tag}</h1>
        <p className="mt-2 text-white/70">
          {posts.length} post{posts.length === 1 ? "" : "s"} com esta tag.
        </p>
      </header>

      <div className="mt-10 grid gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06]"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <span className="text-xs text-white/50">
                {p.readingMinutes} min • {p.date}
              </span>
            </div>
            <p className="mt-2 text-sm text-white/70">{p.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
