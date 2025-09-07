import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "DentMed - Стоматологические расходники",
  description: "Качественные стоматологические расходные материалы для стоматологических клиник. Одноразовые инструменты, слепочные массы, боры, наконечники, ретракционные нити.",
  keywords: "стоматологические расходники, одноразовые инструменты, альгинат, стоматологические боры, наконечники, ретракционные нити",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
