export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TheRevenue</p>
          <p className="text-white/50">Built with Next.js + Supabase</p>
        </div>
      </div>
    </footer>
  );
}
