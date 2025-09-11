#!/usr/bin/env node

/**
 * Скрипт для проверки внутренних ссылок сайта МедТехИмпорт
 * 
 * Проверяет:
 * 1. Работоспособность всех внутренних ссылок
 * 2. Соответствие количества ссылок плану (15-18 с главной, 6-8 с категорий)
 * 3. Правильность анкоров
 * 4. Отсутствие дублирующихся ссылок на одной странице
 */

const fs = require('fs');
const path = require('path');

// Цвета для консоли
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// План по количеству ссылок
const LINK_PLAN = {
  homepage: { min: 15, max: 18, description: 'Главная страница' },
  category: { min: 6, max: 8, description: 'Страницы категорий' },
  catalog: { min: 10, max: 15, description: 'Страница каталога' },
  product: { min: 5, max: 8, description: 'Страницы товаров' },
  other: { min: 3, max: 6, description: 'Остальные страницы' }
};

// Ожидаемые анкоры для SEO
const EXPECTED_ANCHORS = {
  '/catalog/dental-burs': ['стоматологические боры', 'боры', 'dental-burs'],
  '/catalog/disposable-tips': ['одноразовые наконечники', 'наконечники', 'disposable-tips'],
  '/catalog/impression-materials': ['слепочные массы', 'материалы', 'impression-materials'],
  '/catalog/disposable-instruments': ['одноразовые инструменты', 'инструменты', 'disposable-instruments'],
  '/catalog/retraction-cords': ['ретракционные нити', 'нити', 'retraction-cords'],
  '/catalog': ['каталог', 'товары', 'catalog'],
  '/about': ['о компании', 'компания', 'about'],
  '/contact': ['контакты', 'связаться', 'contact'],
  '/': ['главная', 'home', 'медтехимпорт']
};

// Валидные маршруты сайта
const VALID_ROUTES = [
  '/',
  '/catalog',
  '/catalog/dental-burs',
  '/catalog/disposable-tips', 
  '/catalog/impression-materials',
  '/catalog/disposable-instruments',
  '/catalog/retraction-cords',
  '/about',
  '/contact',
  '/delivery',
  '/warranty',
  '/privacy',
  '/terms'
];

class InternalLinksChecker {
  constructor() {
    this.results = {
      totalLinks: 0,
      workingLinks: 0,
      brokenLinks: 0,
      pages: {},
      duplicates: [],
      anchorIssues: [],
      countIssues: []
    };
  }

  // Основная функция проверки
  async checkAll() {
    console.log(`${colors.cyan}${colors.bright}🔍 Проверка внутренних ссылок сайта МедТехИмпорт${colors.reset}\n`);
    
    const pages = this.getPagesToCheck();
    
    for (const page of pages) {
      await this.checkPage(page);
    }
    
    this.generateReport();
  }

  // Получение списка страниц для проверки
  getPagesToCheck() {
    const pages = [];
    const srcDir = path.join(process.cwd(), 'src');
    
    // Главная страница
    pages.push({
      path: '/',
      file: path.join(srcDir, 'app/page.tsx'),
      type: 'homepage'
    });
    
    // Каталог
    pages.push({
      path: '/catalog',
      file: path.join(srcDir, 'app/catalog/page.tsx'),
      type: 'catalog'
    });
    
    // Страницы категорий
    const categories = ['dental-burs', 'disposable-tips', 'impression-materials', 'disposable-instruments', 'retraction-cords'];
    categories.forEach(category => {
      pages.push({
        path: `/catalog/${category}`,
        file: path.join(srcDir, 'app/catalog/[category]/page.tsx'),
        type: 'category'
      });
    });
    
    // Остальные страницы
    pages.push({
      path: '/about',
      file: path.join(srcDir, 'app/about/page.tsx'),
      type: 'other'
    });
    
    pages.push({
      path: '/contact',
      file: path.join(srcDir, 'app/contact/page.tsx'),
      type: 'other'
    });
    
    return pages;
  }

  // Проверка отдельной страницы
  async checkPage(pageInfo) {
    if (!fs.existsSync(pageInfo.file)) {
      console.log(`${colors.red}❌ Файл не найден: ${pageInfo.file}${colors.reset}`);
      return;
    }

    const content = fs.readFileSync(pageInfo.file, 'utf8');
    const links = this.extractLinks(content, pageInfo.path);
    
    this.results.pages[pageInfo.path] = {
      type: pageInfo.type,
      links: links,
      count: links.length
    };
    
    // Проверка количества ссылок
    this.checkLinkCount(pageInfo.path, pageInfo.type, links.length);
    
    // Проверка дубликатов
    this.checkDuplicates(pageInfo.path, links);
    
    // Проверка анкоров
    this.checkAnchors(pageInfo.path, links);
    
    console.log(`${colors.green}✅ ${pageInfo.path}${colors.reset} - найдено ${colors.blue}${links.length}${colors.reset} ссылок`);
  }

  // Извлечение ссылок из контента
  extractLinks(content, pagePath) {
    const links = [];
    
    // Поиск Link href=
    const linkMatches = content.match(/Link\s+href=["']([^"']+)["']/g) || [];
    linkMatches.forEach(match => {
      const href = match.match(/href=["']([^"']+)["']/)[1];
      const anchor = this.extractAnchor(content, match);
      links.push({ href, anchor, type: 'Link' });
    });
    
    // Поиск href= (обычные ссылки)
    const hrefMatches = content.match(/href=["']([^"']+)["']/g) || [];
    hrefMatches.forEach(match => {
      const href = match.match(/href=["']([^"']+)["']/)[1];
      if (!href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        const anchor = this.extractAnchor(content, match);
        links.push({ href, anchor, type: 'href' });
      }
    });
    
    return links;
  }

  // Извлечение анкора из контекста
  extractAnchor(content, linkMatch) {
    const index = content.indexOf(linkMatch);
    const beforeLink = content.substring(Math.max(0, index - 200), index);
    const afterLink = content.substring(index, index + 200);
    
    // Поиск текста между тегами
    const textMatch = afterLink.match(/>([^<]+)</);
    if (textMatch) {
      return textMatch[1].trim();
    }
    
    return 'Без анкора';
  }

  // Проверка количества ссылок
  checkLinkCount(pagePath, pageType, count) {
    const plan = LINK_PLAN[pageType] || LINK_PLAN.other;
    
    if (count < plan.min || count > plan.max) {
      this.results.countIssues.push({
        page: pagePath,
        type: pageType,
        current: count,
        expected: `${plan.min}-${plan.max}`,
        description: plan.description
      });
    }
  }

  // Проверка дублирующихся ссылок
  checkDuplicates(pagePath, links) {
    const hrefs = links.map(link => link.href);
    const duplicates = hrefs.filter((href, index) => hrefs.indexOf(href) !== index);
    
    if (duplicates.length > 0) {
      this.results.duplicates.push({
        page: pagePath,
        duplicates: [...new Set(duplicates)]
      });
    }
  }

  // Проверка анкоров
  checkAnchors(pagePath, links) {
    links.forEach(link => {
      if (EXPECTED_ANCHORS[link.href]) {
        const expectedAnchors = EXPECTED_ANCHORS[link.href];
        const hasGoodAnchor = expectedAnchors.some(expected => 
          link.anchor.toLowerCase().includes(expected.toLowerCase())
        );
        
        if (!hasGoodAnchor) {
          this.results.anchorIssues.push({
            page: pagePath,
            href: link.href,
            currentAnchor: link.anchor,
            expectedAnchors: expectedAnchors
          });
        }
      }
    });
  }

  // Генерация отчета
  generateReport() {
    console.log(`\n${colors.cyan}${colors.bright}📊 ОТЧЕТ ПО ПРОВЕРКЕ ВНУТРЕННИХ ССЫЛОК${colors.reset}\n`);
    
    // Общая статистика
    const totalLinks = Object.values(this.results.pages).reduce((sum, page) => sum + page.count, 0);
    console.log(`${colors.blue}📈 Общая статистика:${colors.reset}`);
    console.log(`   Всего ссылок: ${colors.green}${totalLinks}${colors.reset}`);
    console.log(`   Проверено страниц: ${colors.green}${Object.keys(this.results.pages).length}${colors.reset}\n`);
    
    // Детали по страницам
    console.log(`${colors.blue}📄 Детали по страницам:${colors.reset}`);
    Object.entries(this.results.pages).forEach(([pagePath, pageData]) => {
      const plan = LINK_PLAN[pageData.type] || LINK_PLAN.other;
      const status = pageData.count >= plan.min && pageData.count <= plan.max ? 
        `${colors.green}✅${colors.reset}` : `${colors.red}❌${colors.reset}`;
      
      console.log(`   ${status} ${pagePath} - ${pageData.count} ссылок (план: ${plan.min}-${plan.max})`);
    });
    
    // Проблемы с количеством ссылок
    if (this.results.countIssues.length > 0) {
      console.log(`\n${colors.red}⚠️  Проблемы с количеством ссылок:${colors.reset}`);
      this.results.countIssues.forEach(issue => {
        console.log(`   ${colors.red}❌${colors.reset} ${issue.page}: ${issue.current} ссылок (ожидается: ${issue.expected})`);
      });
    }
    
    // Дублирующиеся ссылки
    if (this.results.duplicates.length > 0) {
      console.log(`\n${colors.yellow}⚠️  Дублирующиеся ссылки:${colors.reset}`);
      this.results.duplicates.forEach(duplicate => {
        console.log(`   ${colors.yellow}🔄${colors.reset} ${duplicate.page}:`);
        duplicate.duplicates.forEach(dup => {
          console.log(`      - ${dup}`);
        });
      });
    }
    
    // Проблемы с анкорами
    if (this.results.anchorIssues.length > 0) {
      console.log(`\n${colors.magenta}⚠️  Проблемы с анкорами:${colors.reset}`);
      this.results.anchorIssues.forEach(issue => {
        console.log(`   ${colors.magenta}🏷️${colors.reset} ${issue.page} → ${issue.href}`);
        console.log(`      Текущий анкор: "${issue.currentAnchor}"`);
        console.log(`      Ожидаемые: ${issue.expectedAnchors.join(', ')}`);
      });
    }
    
    // Рекомендации
    this.generateRecommendations();
    
    // Итоговая оценка
    const totalIssues = this.results.countIssues.length + this.results.duplicates.length + this.results.anchorIssues.length;
    if (totalIssues === 0) {
      console.log(`\n${colors.green}${colors.bright}🎉 Отлично! Все проверки пройдены успешно!${colors.reset}`);
    } else {
      console.log(`\n${colors.yellow}${colors.bright}📋 Найдено ${totalIssues} проблем, требующих внимания${colors.reset}`);
    }
  }

  // Генерация рекомендаций
  generateRecommendations() {
    console.log(`\n${colors.cyan}💡 Рекомендации:${colors.reset}`);
    
    if (this.results.countIssues.length > 0) {
      console.log(`   • Проверьте количество ссылок на страницах согласно плану`);
    }
    
    if (this.results.duplicates.length > 0) {
      console.log(`   • Удалите дублирующиеся ссылки для улучшения UX`);
    }
    
    if (this.results.anchorIssues.length > 0) {
      console.log(`   • Обновите анкоры ссылок для лучшего SEO`);
    }
    
    console.log(`   • Регулярно проверяйте работоспособность ссылок`);
    console.log(`   • Используйте семантические анкоры с ключевыми словами`);
    console.log(`   • Избегайте дублирования ссылок на одной странице`);
  }
}

// Запуск проверки
if (require.main === module) {
  const checker = new InternalLinksChecker();
  checker.checkAll().catch(console.error);
}

module.exports = InternalLinksChecker;
