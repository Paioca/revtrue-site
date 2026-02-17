import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          TheRevenue
        </Link>

        <nav className="flex items-center gap-4 text-sm text-white/80">
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/tags" className="hover:text-white">
            Tags
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <a
            href="#newsletter"
            className="rounded-xl bg-white/10 px-3 py-2 text-white hover:bg-white/15"
          >
            Newsletter
          </a>
        </nav>
      </div>
    </header>
  );
}
