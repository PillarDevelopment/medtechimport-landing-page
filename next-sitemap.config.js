/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mtioc.ru',
  generateRobotsTxt: false, // Мы уже создали robots.txt вручную
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/private/*'],
  additionalPaths: async (config) => {
    const result = [];
    
    // Добавляем статические страницы
    const staticPages = [
      { loc: '/about', changefreq: 'monthly', priority: 0.8 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
      { loc: '/catalog', changefreq: 'daily', priority: 0.9 },
      { loc: '/specializations', changefreq: 'weekly', priority: 0.9 },
    ];
    
    // Добавляем категории
    const categories = [
      'disposable-instruments',
      'impression-materials', 
      'dental-burs',
      'disposable-tips',
      'retraction-cords',
      'dental-materials',
      'endodontic-instruments',
      'isolation-materials'
    ];
    
    categories.forEach(category => {
      result.push({
        loc: `/catalog/${category}`,
        changefreq: 'weekly',
        priority: 0.8,
      });
    });
    
    // Добавляем специализации
    const specializations = [
      'therapist',
      'orthopedist',
      'surgeon',
      'implantologist',
      'periodontist',
      'hygienist',
      'endodontist'
    ];
    
    specializations.forEach(specialization => {
      result.push({
        loc: `/specializations/${specialization}`,
        changefreq: 'weekly',
        priority: 0.8,
      });
    });
    
    // Добавляем популярные продукты
    const popularProducts = [
      'dental-mirror-disposable-50',
      'alginate-impression-material-500g',
      'diamond-bur-set-10pcs',
      'turbine-tip-disposable-100',
      'retraction-cord-hemostatic-5m',
      'travex-37-etching-gel',
      'air-flow-powder-neutral-ems',
      'rubber-dam-kit-dental-dams',
      'adper-single-bond-2',
      'gradia-direct-anterior'
    ];
    
    popularProducts.forEach(product => {
      result.push({
        loc: `/product/${product}`,
        changefreq: 'weekly',
        priority: 0.7,
      });
    });
    
    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://mtioc.ru'}/sitemap.xml`,
    ],
  },
};
