# Schema.org разметка для SEO

## 🎯 Обзор

Добавлена комплексная schema.org разметка для улучшения понимания структуры сайта поисковыми системами и повышения SEO-эффективности.

## 📋 Реализованные схемы

### 1. **BreadcrumbList** - Хлебные крошки
**Расположение**: Все страницы с хлебными крошками
**Файл**: `src/components/Breadcrumbs.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Главная",
      "item": "https://medtechimport.ru/"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Каталог",
      "item": "https://medtechimport.ru/catalog"
    }
  ]
}
```

**SEO преимущества:**
- Улучшенное отображение в результатах поиска
- Понятная навигация для пользователей
- Лучшее понимание структуры сайта

### 2. **SiteNavigationElement** - Главное меню
**Расположение**: Header компонент
**Файл**: `src/components/Header.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": "Основная навигация",
  "description": "Главное меню сайта МедТехИмпорт",
  "url": "https://medtechimport.ru",
  "hasPart": [
    {
      "@type": "WebPageElement",
      "name": "Главная",
      "url": "https://medtechimport.ru/",
      "description": "Главная страница МедТехИмпорт"
    }
  ]
}
```

**SEO преимущества:**
- Понимание структуры навигации
- Улучшенная индексация разделов
- Лучшее отображение в поиске

### 3. **Product** - Товары
**Расположение**: Страницы товаров
**Файл**: `src/app/product/[id]/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Алмазный бор для препарирования",
  "description": "Высококачественный алмазный бор...",
  "image": "https://medtechimport.ru/images/bor.jpg",
  "url": "https://medtechimport.ru/product/bor-001",
  "brand": {
    "@type": "Brand",
    "name": "Dentsply"
  },
  "category": "Стоматологические боры",
  "offers": {
    "@type": "Offer",
    "price": 1500,
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "МедТехИмпорт",
      "url": "https://medtechimport.ru"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.8,
    "reviewCount": 25
  }
}
```

**SEO преимущества:**
- Отображение в Google Shopping
- Rich snippets в результатах поиска
- Улучшенное понимание товаров

### 4. **WebSite** - Сайт
**Расположение**: Layout (все страницы)
**Файл**: `src/app/layout.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "МедТехИмпорт",
  "url": "https://medtechimport.ru",
  "description": "Качественные стоматологические расходные материалы оптом и в розницу",
  "publisher": {
    "@type": "Organization",
    "name": "МедТехИмпорт"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://medtechimport.ru/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**SEO преимущества:**
- Понимание назначения сайта
- Поддержка поиска по сайту
- Улучшенная индексация

### 5. **Organization** - Организация
**Расположение**: Layout (все страницы)
**Файл**: `src/app/layout.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "МедТехИмпорт",
  "url": "https://medtechimport.ru",
  "logo": "https://medtechimport.ru/logo.png",
  "description": "Поставщик качественных стоматологических расходных материалов",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Медицинская, 123",
    "addressLocality": "Москва",
    "addressCountry": "RU"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+7-495-123-45-67",
    "contactType": "customer service",
    "availableLanguage": "Russian"
  }
}
```

**SEO преимущества:**
- Knowledge Graph в Google
- Локальный SEO
- Доверие поисковых систем

### 6. **CollectionPage** - Каталог
**Расположение**: Страница каталога
**Файл**: `src/app/catalog/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Каталог стоматологических расходников",
  "description": "Широкий ассортимент стоматологических расходных материалов",
  "url": "https://medtechimport.ru/catalog",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 20,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Алмазный бор",
          "url": "https://medtechimport.ru/product/bor-001"
        }
      }
    ]
  }
}
```

**SEO преимущества:**
- Понимание структуры каталога
- Улучшенная индексация товаров
- Лучшее отображение в поиске

## 🛠️ Техническая реализация

### Утилиты для генерации JSON-LD
**Файл**: `src/lib/schema.tsx`

```typescript
// Генерация JSON-LD для хлебных крошек
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object

// Генерация JSON-LD для навигации
export function generateNavigationSchema(items: NavigationItem[]): object

// Генерация JSON-LD для товара
export function generateProductSchema(product: ProductSchema): object

// Компонент для вставки JSON-LD
export function JsonLd({ data }: { data: object })
```

### Интеграция в компоненты

```tsx
// В компоненте Breadcrumbs
const breadcrumbSchema = generateBreadcrumbSchema(items)
return (
  <>
    <JsonLd data={breadcrumbSchema} />
    <nav>...</nav>
  </>
)

// В компоненте Header
const navigationSchema = generateNavigationSchema(navigationItems)
return (
  <>
    <JsonLd data={navigationSchema} />
    <header>...</header>
  </>
)
```

## 📈 SEO преимущества

### 1. **Rich Snippets**
- Хлебные крошки в результатах поиска
- Рейтинги товаров
- Цены и наличие
- Контактная информация

### 2. **Улучшенная индексация**
- Понимание структуры сайта
- Связи между страницами
- Контекст контента
- Типы страниц

### 3. **Локальный SEO**
- Адрес организации
- Контактная информация
- Часы работы
- Географическое расположение

### 4. **E-commerce SEO**
- Товары в Google Shopping
- Цены и наличие
- Бренды и категории
- Отзывы и рейтинги

## 🔍 Проверка разметки

### Google Rich Results Test
```
https://search.google.com/test/rich-results
```

### Schema.org Validator
```
https://validator.schema.org/
```

### Google Search Console
- Мониторинг ошибок разметки
- Статистика rich snippets
- Рекомендации по улучшению

## 📊 Ожидаемые результаты

### Краткосрочные (1-3 месяца):
- Улучшение CTR в результатах поиска
- Появление rich snippets
- Лучшее понимание сайта поисковиками

### Долгосрочные (3-6 месяцев):
- Рост органического трафика
- Улучшение позиций в поиске
- Увеличение конверсий

## 🚀 Дальнейшие улучшения

### Планируемые схемы:
1. **Review** - для отзывов о товарах
2. **FAQ** - для часто задаваемых вопросов
3. **Article** - для блога и новостей
4. **Event** - для мероприятий и акций
5. **LocalBusiness** - для локального SEO

### Автоматизация:
- Генерация схем из CMS
- Валидация разметки в CI/CD
- Мониторинг ошибок
- A/B тестирование rich snippets

## ✅ Заключение

Schema.org разметка успешно интегрирована во все ключевые компоненты сайта. Это значительно улучшит понимание структуры сайта поисковыми системами и повысит SEO-эффективность.

Регулярный мониторинг через Google Search Console и валидаторы поможет отслеживать эффективность разметки и вносить необходимые улучшения.
