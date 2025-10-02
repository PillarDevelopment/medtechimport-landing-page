import { NextResponse } from 'next/server';
import { medicalProducts, categories, specializations } from '@/lib/medical-products';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mtioc.ru';
  
  // Статические страницы
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/catalog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/specializations`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Страницы категорий
  const categoryPages = categories.map(category => ({
    url: `${baseUrl}/catalog/${category.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Страницы специализаций
  const specializationPages = specializations.map(specialization => ({
    url: `${baseUrl}/specializations/${specialization.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Страницы продуктов
  const productPages = medicalProducts.map(product => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Объединяем все страницы
  const allPages = [
    ...staticPages,
    ...categoryPages,
    ...specializationPages,
    ...productPages,
  ];

  // Генерируем XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Кешируем на 1 час
    },
  });
}
