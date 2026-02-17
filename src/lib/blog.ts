import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  readingMinutes: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function safeParseTags(tags: unknown): string[] {
  if (!Array.isArray(tags)) return [];
  // normaliza: string, trim, remove vazios, de-dup
  const normalized = tags
    .map((t) => String(t).trim())
    .filter(Boolean);

  return Array.from(new Set(normalized));
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();

  const posts = slugs.map((slug) => {
    const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    const title = String(data.title ?? slug);
    const description = String(data.description ?? "");
    const date = String(data.date ?? "");
    const tags = safeParseTags(data.tags);
    const rt = readingTime(content);

    return {
      slug,
      title,
      description,
      date,
      tags,
      readingMinutes: Math.max(1, Math.round(rt.minutes)),
    } satisfies BlogPostMeta;
  });

  // ordena desc por date
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const title = String(data.title ?? slug);
  const description = String(data.description ?? "");
  const date = String(data.date ?? "");
  const tags = safeParseTags(data.tags);
  const rt = readingTime(content);

  return {
    slug,
    title,
    description,
    date,
    tags,
    readingMinutes: Math.max(1, Math.round(rt.minutes)),
    content,
  };
}

/** TAGS **/

// slug simples (bom o suficiente para URL)
export function tagToSlug(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function slugToTag(slug: string, allTags: string[]): string | null {
  // tenta achar a tag original que bate com o slug
  const found = allTags.find((t) => tagToSlug(t) === slug);
  return found ?? null;
}

export function getAllTags(): { tag: string; slug: string; count: number }[] {
  const posts = getAllPostsMeta();
  const counts = new Map<string, number>();

  for (const p of posts) {
    for (const t of p.tags) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }

  const items = Array.from(counts.entries()).map(([tag, count]) => ({
    tag,
    slug: tagToSlug(tag),
    count,
  }));

  // ordena por count desc, depois alfabético
  items.sort((a, b) => (b.count - a.count) || a.tag.localeCompare(b.tag));

  return items;
}

export function getPostsByTagSlug(tagSlug: string): {
  tag: string;
  posts: BlogPostMeta[];
} | null {
  const allTags = getAllTags().map((x) => x.tag);
  const tag = slugToTag(tagSlug, allTags);
  if (!tag) return null;

  const posts = getAllPostsMeta().filter((p) => p.tags.includes(tag));
  return { tag, posts };
}
