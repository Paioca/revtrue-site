import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "TheRevenue",
  description: "Revenue analytics for modern GTM teams.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-dvh bg-black text-white antialiased">
        <Navbar />
        <div className="mx-auto max-w-6xl px-6">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
