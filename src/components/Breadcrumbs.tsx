import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { JsonLd, generateBreadcrumbSchema, getBaseUrl } from '@/lib/schema'

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Генерация schema.org разметки для хлебных крошек
  const breadcrumbSchema = generateBreadcrumbSchema(
    items.map((item, index) => ({
      name: item.label,
      url: item.href ? `${getBaseUrl()}${item.href}` : `${getBaseUrl()}${typeof window !== 'undefined' ? window.location.pathname : ''}`,
      position: index + 1
    }))
  )

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav 
        className={`bg-white border-b ${className}`}
        aria-label="Хлебные крошки"
      >
        <div className="container mx-auto px-4 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index === 0 && (
                  <Home className="w-4 h-4 text-gray-500 mr-1" />
                )}
                
                {item.href && !item.current ? (
                  <Link 
                    href={item.href}
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span 
                    className={`${
                      item.current 
                        ? 'text-gray-900 font-medium' 
                        : 'text-gray-500'
                    }`}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
                
                {index < items.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2 flex-shrink-0" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}

// Предустановленные конфигурации для разных страниц
export const breadcrumbConfigs = {
  home: [
    { label: 'Главная', current: true }
  ],
  
  catalog: [
    { label: 'Главная', href: '/' },
    { label: 'Каталог', current: true }
  ],
  
  category: (categoryName: string) => [
    { label: 'Главная', href: '/' },
    { label: 'Каталог', href: '/catalog' },
    { label: categoryName, current: true }
  ],
  
  product: (productName: string, categoryName: string, categoryId: string) => [
    { label: 'Главная', href: '/' },
    { label: 'Каталог', href: '/catalog' },
    { label: categoryName, href: `/catalog/${categoryId}` },
    { label: productName, current: true }
  ],
  
  about: [
    { label: 'Главная', href: '/' },
    { label: 'О компании', current: true }
  ],
  
  contact: [
    { label: 'Главная', href: '/' },
    { label: 'Контакты', current: true }
  ]
}
