import Link from "next/link";
import { getAllPostsMeta, tagToSlug } from "@/lib/blog";

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 text-white/70">
        Notas de produto, revenue e aprendizados construindo o TheRevenue.
      </p>

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
            {p.tags.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Link
                    key={t}
                    href={`/tags/${tagToSlug(t)}`}
                    className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/70 hover:bg-white/10"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </main>
  );
}
