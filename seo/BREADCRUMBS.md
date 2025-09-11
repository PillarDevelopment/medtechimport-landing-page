# Система хлебных крошек

## Обзор

Реализована универсальная система хлебных крошек для улучшения навигации и внутренней перелинковки на сайте МедТехИмпорт.

## Компонент Breadcrumbs

Создан переиспользуемый компонент `src/components/Breadcrumbs.tsx` с поддержкой:

### Основные возможности:
- **Семантическая разметка** с использованием `<nav>` и `<ol>`
- **Accessibility** с правильными ARIA-атрибутами
- **Иконки** для улучшения визуального восприятия
- **Hover-эффекты** для интерактивности
- **Адаптивный дизайн** для всех устройств

### Структура компонента:

```tsx
interface BreadcrumbItem {
  label: string      // Текст ссылки
  href?: string      // URL (если не указан, элемент не кликабельный)
  current?: boolean  // Текущая страница
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]  // Массив элементов навигации
  className?: string       // Дополнительные CSS классы
}
```

## Предустановленные конфигурации

### 1. Главная страница
```tsx
breadcrumbConfigs.home = [
  { label: 'Главная', current: true }
]
```

### 2. Каталог
```tsx
breadcrumbConfigs.catalog = [
  { label: 'Главная', href: '/' },
  { label: 'Каталог', current: true }
]
```

### 3. Категории товаров
```tsx
breadcrumbConfigs.category(categoryName) = [
  { label: 'Главная', href: '/' },
  { label: 'Каталог', href: '/catalog' },
  { label: categoryName, current: true }
]
```

### 4. Страницы товаров
```tsx
breadcrumbConfigs.product(productName, categoryName, categoryId) = [
  { label: 'Главная', href: '/' },
  { label: 'Каталог', href: '/catalog' },
  { label: categoryName, href: `/catalog/${categoryId}` },
  { label: productName, current: true }
]
```

### 5. О компании
```tsx
breadcrumbConfigs.about = [
  { label: 'Главная', href: '/' },
  { label: 'О компании', current: true }
]
```

### 6. Контакты
```tsx
breadcrumbConfigs.contact = [
  { label: 'Главная', href: '/' },
  { label: 'Контакты', current: true }
]
```

## Интеграция на страницах

### Главная страница
```tsx
// src/app/page.tsx
import Breadcrumbs, { breadcrumbConfigs } from '@/components/Breadcrumbs'

export default function Home() {
  return (
    <>
      <Breadcrumbs items={breadcrumbConfigs.home} />
      {/* остальной контент */}
    </>
  )
}
```

### Страница каталога
```tsx
// src/app/catalog/page.tsx
<Breadcrumbs items={breadcrumbConfigs.catalog} />
```

### Страницы категорий
```tsx
// src/app/catalog/[category]/page.tsx
<Breadcrumbs items={breadcrumbConfigs.category(category.name)} />
```

### Страницы товаров
```tsx
// src/app/product/[id]/page.tsx
<Breadcrumbs 
  items={breadcrumbConfigs.product(
    product.name, 
    category?.name || 'Категория', 
    product.category
  )} 
/>
```

### Остальные страницы
```tsx
// src/app/about/page.tsx
<Breadcrumbs items={breadcrumbConfigs.about} />

// src/app/contact/page.tsx
<Breadcrumbs items={breadcrumbConfigs.contact} />
```

## Стилизация

Компонент использует Tailwind CSS с:

- **Белый фон** с нижней границей для визуального разделения
- **Иконка дома** для главной страницы
- **Стрелки-разделители** между элементами
- **Hover-эффекты** для кликабельных ссылок
- **Разные цвета** для активных и неактивных элементов
- **Адаптивные отступы** и размеры

## SEO Преимущества

1. **Улучшенная навигация**: Пользователи всегда знают, где находятся
2. **Внутренняя перелинковка**: Каждая ссылка в хлебных крошках - это внутренняя ссылка
3. **Структурированные данные**: Семантическая разметка помогает поисковым системам
4. **Снижение показателя отказов**: Легкая навигация удерживает пользователей
5. **Контекстные анкоры**: Тексты ссылок содержат ключевые слова

## Accessibility

- **ARIA-атрибуты**: `aria-label` и `aria-current`
- **Семантическая разметка**: Использование `<nav>` и `<ol>`
- **Клавиатурная навигация**: Все ссылки доступны с клавиатуры
- **Скрин-ридеры**: Правильная структура для программ чтения с экрана

## Расширение

Для добавления новых типов хлебных крошек:

1. Добавьте новую конфигурацию в `breadcrumbConfigs`
2. Используйте её на соответствующих страницах
3. При необходимости создайте функцию для динамических конфигураций

## Замененные реализации

Удалены дублирующиеся реализации хлебных крошек:
- Старые `<nav>` блоки в `src/app/catalog/[category]/page.tsx`
- Старые `<nav>` блоки в `src/app/product/[id]/page.tsx`

Все заменены на единый компонент `Breadcrumbs` для консистентности и переиспользования.
