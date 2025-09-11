# Система внутренних ссылок

## Обзор

Реализована система внутренних ссылок для улучшения SEO и навигации пользователей по сайту МедТехИмпорт.

## Компонент InternalLinks

Создан переиспользуемый компонент `src/components/InternalLinks.tsx` с поддержкой трех типов:

### 1. Главная страница (`type="homepage"`)
- **Расположение**: В конце главной страницы перед закрывающим `</main>`
- **Содержание**: Блок ссылок на популярные категории
- **Анкоры**:
  - "Стоматологические боры" → `/catalog/dental-burs`
  - "Одноразовые наконечники" → `/catalog/disposable-tips`
  - "Слепочные массы и материалы" → `/catalog/impression-materials`

### 2. Страница боров (`type="dental-burs"`)
- **Расположение**: На странице `/catalog/dental-burs` после списка товаров
- **Содержание**: Кросс-ссылки на связанные товары
- **Анкоры**:
  - "наконечники для боров" → `/catalog/disposable-tips`
  - "одноразовые стоматологические инструменты" → `/catalog/disposable-instruments`

### 3. Страница наконечников (`type="disposable-tips"`)
- **Расположение**: На странице `/catalog/disposable-tips` после списка товаров
- **Содержание**: Кросс-ссылки на связанные товары
- **Анкоры**:
  - "боры для наконечников" → `/catalog/dental-burs`

## Интеграция

### Главная страница
```tsx
// src/app/page.tsx
import InternalLinks from '@/components/InternalLinks'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <PopularProducts />
      <FeaturesSection />
      <InternalLinks type="homepage" />
    </>
  )
}
```

### Страницы категорий
```tsx
// src/app/catalog/[category]/page.tsx
{params.category === 'dental-burs' && (
  <div className="mt-8">
    <InternalLinks type="dental-burs" />
  </div>
)}

{params.category === 'disposable-tips' && (
  <div className="mt-8">
    <InternalLinks type="disposable-tips" />
  </div>
)}
```

## Стилизация

Компонент использует Tailwind CSS с:
- Градиентными фонами для разных типов ссылок
- Hover-эффектами и анимациями
- Адаптивной сеткой
- Иконками Lucide React

## SEO Преимущества

1. **Улучшенная навигация**: Пользователи легко находят связанные товары
2. **Распределение веса страниц**: Внутренние ссылки помогают поисковым системам понимать структуру сайта
3. **Снижение показателя отказов**: Больше релевантных ссылок = больше времени на сайте
4. **Контекстные анкоры**: Тексты ссылок содержат ключевые слова

## Расширение

Для добавления новых типов внутренних ссылок:

1. Добавьте новый тип в интерфейс `InternalLinksProps`
2. Создайте соответствующую логику в компоненте `InternalLinks`
3. Интегрируйте в нужные страницы

## Удаленные файлы

Удалены устаревшие файлы:
- `src/components/InternalLinks.js`
- `scripts/inject-internal-links.js`
- `internal-links-config.json`

Эти файлы были заменены на современное TypeScript решение с интеграцией в Next.js.
