import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  const { content } = await compileMDX({
    source: post.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
  });

  return (
    <main className="py-14">
      <Link href="/blog" className="text-sm text-white/70 hover:text-white">
        ← Voltar
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        <p className="mt-2 text-white/70">{post.description}</p>
        <div className="mt-3 text-xs text-white/50">
          {post.date} • {post.readingMinutes} min
        </div>
      </header>

      <article className="prose prose-invert mt-10 max-w-none prose-p:text-white/80 prose-a:text-white prose-headings:scroll-mt-24">
        {content}
      </article>
    </main>
  );
}
