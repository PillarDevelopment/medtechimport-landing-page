#!/usr/bin/env node

/**
 * Главный скрипт для полной проверки внутренних ссылок
 * 
 * Объединяет все проверки:
 * 1. Анализ кода и структуры ссылок
 * 2. Проверка работоспособности через HTTP
 * 3. Генерация комплексного отчета
 */

const InternalLinksChecker = require('./check-internal-links');
const LinkHealthChecker = require('./check-link-health');

// Цвета для консоли
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

class ComprehensiveLinkChecker {
  constructor(baseUrl = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
    this.results = {
      codeAnalysis: null,
      healthCheck: null,
      overallScore: 0
    };
  }

  // Основная функция проверки
  async checkAll() {
    console.log(`${colors.magenta}${colors.bright}🚀 КОМПЛЕКСНАЯ ПРОВЕРКА ВНУТРЕННИХ ССЫЛОК${colors.reset}`);
    console.log(`${colors.magenta}${'='.repeat(60)}${colors.reset}\n`);
    
    try {
      // 1. Анализ кода
      console.log(`${colors.cyan}${colors.bright}📋 ЭТАП 1: Анализ кода и структуры ссылок${colors.reset}`);
      console.log(`${colors.cyan}${'-'.repeat(50)}${colors.reset}`);
      
      const codeChecker = new InternalLinksChecker();
      await codeChecker.checkAll();
      this.results.codeAnalysis = codeChecker.results;
      
      console.log(`\n${colors.green}✅ Анализ кода завершен${colors.reset}\n`);
      
      // 2. Проверка работоспособности
      console.log(`${colors.cyan}${colors.bright}🌐 ЭТАП 2: Проверка работоспособности ссылок${colors.reset}`);
      console.log(`${colors.cyan}${'-'.repeat(50)}${colors.reset}`);
      
      const healthChecker = new LinkHealthChecker(this.baseUrl);
      await healthChecker.checkAll();
      this.results.healthCheck = healthChecker.results;
      
      console.log(`\n${colors.green}✅ Проверка работоспособности завершена${colors.reset}\n`);
      
      // 3. Генерация итогового отчета
      this.generateFinalReport();
      
    } catch (error) {
      console.error(`${colors.red}❌ Ошибка при выполнении проверки: ${error.message}${colors.reset}`);
      process.exit(1);
    }
  }

  // Генерация итогового отчета
  generateFinalReport() {
    console.log(`${colors.magenta}${colors.bright}📊 ИТОГОВЫЙ ОТЧЕТ${colors.reset}`);
    console.log(`${colors.magenta}${'='.repeat(60)}${colors.reset}\n`);
    
    // Подсчет общего балла
    this.calculateOverallScore();
    
    // Сводка по этапам
    console.log(`${colors.blue}📈 Сводка по этапам:${colors.reset}`);
    
    // Анализ кода
    const codeIssues = this.results.codeAnalysis.countIssues.length + 
                      this.results.codeAnalysis.duplicates.length + 
                      this.results.codeAnalysis.anchorIssues.length;
    
    const codeStatus = codeIssues === 0 ? 
      `${colors.green}✅ Отлично${colors.reset}` : 
      `${colors.yellow}⚠️  ${codeIssues} проблем${colors.reset}`;
    
    console.log(`   📋 Анализ кода: ${codeStatus}`);
    
    // Проверка работоспособности
    const healthSuccessRate = (this.results.healthCheck.working / this.results.healthCheck.total * 100).toFixed(1);
    const healthStatus = this.results.healthCheck.broken === 0 ? 
      `${colors.green}✅ ${healthSuccessRate}% работают${colors.reset}` : 
      `${colors.red}❌ ${this.results.healthCheck.broken} не работают${colors.reset}`;
    
    console.log(`   🌐 Работоспособность: ${healthStatus}`);
    
    // Общий балл
    console.log(`\n${colors.blue}🎯 Общий балл: ${this.getScoreColor()}${this.results.overallScore}/100${colors.reset}`);
    
    // Детальные рекомендации
    this.generateDetailedRecommendations();
    
    // План действий
    this.generateActionPlan();
  }

  // Подсчет общего балла
  calculateOverallScore() {
    let score = 100;
    
    // Штрафы за проблемы в коде
    const codeIssues = this.results.codeAnalysis.countIssues.length + 
                      this.results.codeAnalysis.duplicates.length + 
                      this.results.codeAnalysis.anchorIssues.length;
    score -= codeIssues * 10;
    
    // Штрафы за неработающие ссылки
    const brokenLinks = this.results.healthCheck.broken;
    score -= brokenLinks * 15;
    
    // Штрафы за медленные ссылки
    const slowLinks = this.results.healthCheck.slow;
    score -= slowLinks * 5;
    
    this.results.overallScore = Math.max(0, score);
  }

  // Получение цвета для балла
  getScoreColor() {
    if (this.results.overallScore >= 90) return colors.green;
    if (this.results.overallScore >= 70) return colors.yellow;
    return colors.red;
  }

  // Генерация детальных рекомендаций
  generateDetailedRecommendations() {
    console.log(`\n${colors.cyan}💡 Детальные рекомендации:${colors.reset}`);
    
    // Рекомендации по коду
    if (this.results.codeAnalysis.countIssues.length > 0) {
      console.log(`\n${colors.yellow}📊 Проблемы с количеством ссылок:${colors.reset}`);
      this.results.codeAnalysis.countIssues.forEach(issue => {
        console.log(`   • ${issue.page}: ${issue.current} ссылок (ожидается: ${issue.expected})`);
      });
    }
    
    if (this.results.codeAnalysis.duplicates.length > 0) {
      console.log(`\n${colors.yellow}🔄 Дублирующиеся ссылки:${colors.reset}`);
      this.results.codeAnalysis.duplicates.forEach(duplicate => {
        console.log(`   • ${duplicate.page}: ${duplicate.duplicates.join(', ')}`);
      });
    }
    
    if (this.results.codeAnalysis.anchorIssues.length > 0) {
      console.log(`\n${colors.yellow}🏷️  Проблемы с анкорами:${colors.reset}`);
      this.results.codeAnalysis.anchorIssues.forEach(issue => {
        console.log(`   • ${issue.page} → ${issue.href}: "${issue.currentAnchor}"`);
      });
    }
    
    // Рекомендации по работоспособности
    if (this.results.healthCheck.broken > 0) {
      console.log(`\n${colors.red}🔗 Неработающие ссылки:${colors.reset}`);
      this.results.healthCheck.details
        .filter(detail => detail.status === 'broken' || detail.status === 'error')
        .forEach(detail => {
          console.log(`   • ${detail.route}: ${detail.statusCode || detail.error}`);
        });
    }
    
    if (this.results.healthCheck.slow > 0) {
      console.log(`\n${colors.yellow}🐌 Медленные ссылки:${colors.reset}`);
      this.results.healthCheck.details
        .filter(detail => detail.isSlow)
        .forEach(detail => {
          console.log(`   • ${detail.route}: ${detail.responseTime}ms`);
        });
    }
  }

  // Генерация плана действий
  generateActionPlan() {
    console.log(`\n${colors.cyan}📋 План действий:${colors.reset}`);
    
    const hasCodeIssues = this.results.codeAnalysis.countIssues.length > 0 || 
                         this.results.codeAnalysis.duplicates.length > 0 || 
                         this.results.codeAnalysis.anchorIssues.length > 0;
    
    const hasHealthIssues = this.results.healthCheck.broken > 0 || 
                           this.results.healthCheck.slow > 0;
    
    if (hasCodeIssues) {
      console.log(`\n${colors.blue}1. Исправление проблем в коде:${colors.reset}`);
      if (this.results.codeAnalysis.countIssues.length > 0) {
        console.log(`   • Добавьте/удалите ссылки согласно плану`);
      }
      if (this.results.codeAnalysis.duplicates.length > 0) {
        console.log(`   • Удалите дублирующиеся ссылки`);
      }
      if (this.results.codeAnalysis.anchorIssues.length > 0) {
        console.log(`   • Обновите анкоры для лучшего SEO`);
      }
    }
    
    if (hasHealthIssues) {
      console.log(`\n${colors.blue}2. Исправление проблем с работоспособностью:${colors.reset}`);
      if (this.results.healthCheck.broken > 0) {
        console.log(`   • Исправьте неработающие маршруты`);
        console.log(`   • Проверьте конфигурацию Next.js`);
      }
      if (this.results.healthCheck.slow > 0) {
        console.log(`   • Оптимизируйте производительность страниц`);
        console.log(`   • Настройте кэширование`);
      }
    }
    
    console.log(`\n${colors.blue}3. Регулярный мониторинг:${colors.reset}`);
    console.log(`   • Запускайте проверку после каждого обновления`);
    console.log(`   • Настройте автоматические проверки`);
    console.log(`   • Мониторьте производительность в продакшене`);
    
    // Следующие шаги
    console.log(`\n${colors.green}🎯 Следующие шаги:${colors.reset}`);
    if (this.results.overallScore >= 90) {
      console.log(`   • Отличная работа! Поддерживайте текущий уровень`);
      console.log(`   • Рассмотрите возможность добавления новых внутренних ссылок`);
    } else if (this.results.overallScore >= 70) {
      console.log(`   • Хорошая работа, но есть возможности для улучшения`);
      console.log(`   • Исправьте найденные проблемы`);
    } else {
      console.log(`   • Требуется серьезная работа над внутренними ссылками`);
      console.log(`   • Начните с исправления критических проблем`);
    }
  }
}

// Запуск проверки
if (require.main === module) {
  const baseUrl = process.argv[2] || 'http://localhost:3000';
  const checker = new ComprehensiveLinkChecker(baseUrl);
  checker.checkAll().catch(console.error);
}

module.exports = ComprehensiveLinkChecker;
