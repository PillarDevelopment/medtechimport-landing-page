import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd, generateWebSiteSchema, generateOrganizationSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Стоматологические расходники | Купить оптом от 1500₽ | MTIOC",
  description: "Стоматологические расходники оптом и в розницу. ✅ 500+ товаров ✅ Сертификаты ✅ Доставка по РФ за 1-3 дня. Боры, наконечники, слепочные массы.",
  keywords: "стоматологические расходники, одноразовые инструменты, альгинат, стоматологические боры, наконечники, ретракционные нити",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Schema.org разметка */}
        <JsonLd data={generateWebSiteSchema()} />
        <JsonLd data={generateOrganizationSchema()} />
        
        {/* Yandex.Metrika counter */}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103858038', 'ym');

            ym(103858038, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `
        }} />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/103858038" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </head>
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
