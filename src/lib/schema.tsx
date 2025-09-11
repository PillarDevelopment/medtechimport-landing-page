/**
 * Утилиты для генерации schema.org разметки
 * Улучшает SEO и понимание структуры сайта поисковыми системами
 */

import React from 'react'

export interface BreadcrumbItem {
  name: string
  url: string
  position: number
}

export interface NavigationItem {
  name: string
  url: string
  description?: string
}

export interface ProductSchema {
  name: string
  description: string
  image: string
  url: string
  brand: string
  category: string
  price: number
  currency: string
  availability: string
  rating?: {
    value: number
    count: number
  }
  offers?: {
    price: number
    currency: string
    availability: string
    seller: {
      name: string
      url: string
    }
  }
}

/**
 * Генерация JSON-LD для хлебных крошек
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.url
    }))
  }
}

/**
 * Генерация JSON-LD для навигации сайта
 */
export function generateNavigationSchema(items: NavigationItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Основная навигация",
    "description": "Главное меню сайта МедТехИмпорт",
    "url": "https://medtechimport.ru",
    "hasPart": items.map(item => ({
      "@type": "WebPageElement",
      "name": item.name,
      "url": item.url,
      "description": item.description || `${item.name} - МедТехИмпорт`
    }))
  }
}

/**
 * Генерация JSON-LD для товара
 */
export function generateProductSchema(product: ProductSchema): object {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "url": product.url,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": product.currency,
      "availability": `https://schema.org/${product.availability}`,
      "seller": {
        "@type": "Organization",
        "name": "МедТехИмпорт",
        "url": "https://medtechimport.ru"
      }
    }
  }

  // Добавляем рейтинг, если есть
  if (product.rating) {
    return {
      ...baseSchema,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating.value,
        "reviewCount": product.rating.count
      }
    }
  }

  return baseSchema
}

/**
 * Генерация JSON-LD для организации
 */
export function generateOrganizationSchema(): object {
  return {
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
    },
    "sameAs": [
      "https://vk.com/medtechimport",
      "https://instagram.com/medtechimport"
    ]
  }
}

/**
 * Генерация JSON-LD для веб-сайта
 */
export function generateWebSiteSchema(): object {
  return {
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
}

/**
 * Генерация JSON-LD для коллекции товаров (каталог)
 */
export function generateCollectionSchema(products: ProductSchema[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Каталог стоматологических расходников",
    "description": "Широкий ассортимент стоматологических расходных материалов",
    "url": "https://medtechimport.ru/catalog",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": products.length,
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "url": product.url,
          "image": product.image,
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": product.currency
          }
        }
      }))
    }
  }
}

/**
 * Компонент для вставки JSON-LD в head
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }}
    />
  )
}

/**
 * Утилита для получения базового URL
 */
export function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return 'https://medtechimport.ru'
}
