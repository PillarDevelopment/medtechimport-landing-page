/**
 * Утилиты для генерации alt-текстов изображений
 */

// Предустановленные alt-тексты для категорий
export const categoryAltTexts = {
  'dental-burs': 'Стоматологические боры алмазные и твердосплавные',
  'disposable-tips': 'Одноразовые наконечники для стоматологических инструментов',
  'impression-materials': 'Слепочные массы альгинатные для стоматологии',
  'retraction-cords': 'Ретракционные нити гемостатические для работы с десной',
  'disposable-instruments': 'Одноразовые стоматологические инструменты',
  'scalpel-blades': 'Лезвия скальпеля стоматологические'
}

// Функция для генерации alt-текста на основе категории
export function getCategoryAltText(categoryId: string, productName?: string): string {
  if (categoryAltTexts[categoryId as keyof typeof categoryAltTexts]) {
    return categoryAltTexts[categoryId as keyof typeof categoryAltTexts]
  }
  
  if (productName) {
    return `${productName} - стоматологический расходный материал`
  }
  
  return 'Стоматологический расходный материал'
}
