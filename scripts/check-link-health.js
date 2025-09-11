#!/usr/bin/env node

/**
 * Скрипт для проверки работоспособности ссылок через HTTP-запросы
 * 
 * Проверяет:
 * 1. Доступность всех внутренних маршрутов
 * 2. Корректность ответов сервера
 * 3. Время отклика
 */

const http = require('http');
const https = require('https');

// Цвета для консоли
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

class LinkHealthChecker {
  constructor(baseUrl = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
    this.results = {
      total: 0,
      working: 0,
      broken: 0,
      slow: 0,
      details: []
    };
  }

  // Основная функция проверки
  async checkAll() {
    console.log(`${colors.cyan}${colors.bright}🔗 Проверка работоспособности ссылок${colors.reset}\n`);
    console.log(`Базовый URL: ${colors.blue}${this.baseUrl}${colors.reset}\n`);
    
    const routes = this.getRoutesToCheck();
    
    for (const route of routes) {
      await this.checkRoute(route);
      // Небольшая задержка между запросами
      await this.delay(100);
    }
    
    this.generateReport();
  }

  // Получение маршрутов для проверки
  getRoutesToCheck() {
    return [
      '/',
      '/catalog',
      '/catalog/dental-burs',
      '/catalog/disposable-tips',
      '/catalog/impression-materials',
      '/catalog/disposable-instruments',
      '/catalog/retraction-cords',
      '/about',
      '/contact'
    ];
  }

  // Проверка отдельного маршрута
  async checkRoute(route) {
    const url = `${this.baseUrl}${route}`;
    const startTime = Date.now();
    
    try {
      const response = await this.makeRequest(url);
      const responseTime = Date.now() - startTime;
      
      this.results.total++;
      
      if (response.statusCode >= 200 && response.statusCode < 400) {
        this.results.working++;
        
        if (responseTime > 2000) {
          this.results.slow++;
        }
        
        const status = responseTime > 2000 ? 
          `${colors.yellow}🐌${colors.reset}` : 
          `${colors.green}✅${colors.reset}`;
        
        console.log(`${status} ${route} - ${response.statusCode} (${responseTime}ms)`);
        
        this.results.details.push({
          route,
          status: 'working',
          statusCode: response.statusCode,
          responseTime,
          isSlow: responseTime > 2000
        });
      } else {
        this.results.broken++;
        console.log(`${colors.red}❌${colors.reset} ${route} - ${response.statusCode} (${responseTime}ms)`);
        
        this.results.details.push({
          route,
          status: 'broken',
          statusCode: response.statusCode,
          responseTime,
          isSlow: false
        });
      }
    } catch (error) {
      this.results.total++;
      this.results.broken++;
      console.log(`${colors.red}❌${colors.reset} ${route} - Ошибка: ${error.message}`);
      
      this.results.details.push({
        route,
        status: 'error',
        statusCode: 0,
        responseTime: Date.now() - startTime,
        error: error.message,
        isSlow: false
      });
    }
  }

  // Выполнение HTTP-запроса
  makeRequest(url) {
    return new Promise((resolve, reject) => {
      const isHttps = url.startsWith('https://');
      const client = isHttps ? https : http;
      
      const req = client.request(url, {
        method: 'GET',
        timeout: 10000,
        headers: {
          'User-Agent': 'Internal-Links-Checker/1.0'
        }
      }, (res) => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers
        });
      });
      
      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });
      
      req.end();
    });
  }

  // Задержка
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Генерация отчета
  generateReport() {
    console.log(`\n${colors.cyan}${colors.bright}📊 ОТЧЕТ ПО РАБОТОСПОСОБНОСТИ ССЫЛОК${colors.reset}\n`);
    
    // Общая статистика
    console.log(`${colors.blue}📈 Общая статистика:${colors.reset}`);
    console.log(`   Всего проверено: ${colors.blue}${this.results.total}${colors.reset}`);
    console.log(`   Работающих: ${colors.green}${this.results.working}${colors.reset}`);
    console.log(`   Не работающих: ${colors.red}${this.results.broken}${colors.reset}`);
    console.log(`   Медленных (>2с): ${colors.yellow}${this.results.slow}${colors.reset}\n`);
    
    // Детали по маршрутам
    console.log(`${colors.blue}📄 Детали по маршрутам:${colors.reset}`);
    this.results.details.forEach(detail => {
      let statusIcon = '';
      let statusColor = '';
      
      switch (detail.status) {
        case 'working':
          statusIcon = detail.isSlow ? '🐌' : '✅';
          statusColor = detail.isSlow ? colors.yellow : colors.green;
          break;
        case 'broken':
          statusIcon = '❌';
          statusColor = colors.red;
          break;
        case 'error':
          statusIcon = '💥';
          statusColor = colors.red;
          break;
      }
      
      console.log(`   ${statusColor}${statusIcon}${colors.reset} ${detail.route}`);
      console.log(`      Статус: ${detail.statusCode || 'Ошибка'}`);
      console.log(`      Время: ${detail.responseTime}ms`);
      if (detail.error) {
        console.log(`      Ошибка: ${detail.error}`);
      }
      console.log('');
    });
    
    // Рекомендации
    this.generateRecommendations();
    
    // Итоговая оценка
    const successRate = (this.results.working / this.results.total * 100).toFixed(1);
    if (this.results.broken === 0 && this.results.slow === 0) {
      console.log(`\n${colors.green}${colors.bright}🎉 Отлично! Все ссылки работают быстро и корректно!${colors.reset}`);
    } else if (this.results.broken === 0) {
      console.log(`\n${colors.yellow}${colors.bright}⚠️  Все ссылки работают, но есть медленные (${this.results.slow})${colors.reset}`);
    } else {
      console.log(`\n${colors.red}${colors.bright}❌ Найдены проблемы: ${this.results.broken} не работающих ссылок${colors.reset}`);
    }
    
    console.log(`\nПроцент успешности: ${colors.blue}${successRate}%${colors.reset}`);
  }

  // Генерация рекомендаций
  generateRecommendations() {
    console.log(`${colors.cyan}💡 Рекомендации:${colors.reset}`);
    
    if (this.results.broken > 0) {
      console.log(`   • Исправьте не работающие ссылки`);
      console.log(`   • Проверьте правильность маршрутов в Next.js`);
    }
    
    if (this.results.slow > 0) {
      console.log(`   • Оптимизируйте медленные страницы`);
      console.log(`   • Проверьте производительность сервера`);
    }
    
    console.log(`   • Регулярно проверяйте работоспособность ссылок`);
    console.log(`   • Настройте мониторинг доступности сайта`);
    console.log(`   • Используйте кэширование для улучшения производительности`);
  }
}

// Запуск проверки
if (require.main === module) {
  const baseUrl = process.argv[2] || 'http://localhost:3000';
  const checker = new LinkHealthChecker(baseUrl);
  checker.checkAll().catch(console.error);
}

module.exports = LinkHealthChecker;
