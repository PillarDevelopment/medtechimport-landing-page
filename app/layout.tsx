import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'МедТехИмпорт - Поставка медицинского оборудования',
  description: 'Прямые поставки медицинского оборудования от производителей. Полный комплект документов, гарантийное обслуживание, помощь в сертификации.',
  keywords: 'медицинское оборудование, поставка, дистрибуция, медтехника, диагностическое оборудование',
  openGraph: {
    title: 'МедТехИмпорт - Поставка медицинского оборудования',
    description: 'Прямые поставки медицинского оборудования от производителей',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
