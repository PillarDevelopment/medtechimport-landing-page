'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, ShoppingCart, Phone, Mail } from 'lucide-react'
import { categories } from '@/lib/medical-products'
import { JsonLd, generateNavigationSchema } from '@/lib/schema'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Генерация schema.org разметки для навигации
  const navigationItems = [
    { name: 'Главная', url: '/', description: 'Главная страница МедТехИмпорт' },
    { name: 'Каталог', url: '/catalog', description: 'Каталог стоматологических расходников' },
    { name: 'О компании', url: '/about', description: 'Информация о компании МедТехИмпорт' },
    { name: 'Контакты', url: '/contact', description: 'Контактная информация' },
    ...categories.map(category => ({
      name: category.name,
      url: `/catalog/${category.id}`,
      description: category.description
    }))
  ]

  const navigationSchema = generateNavigationSchema(navigationItems)

  return (
    <>
      <JsonLd data={navigationSchema} />
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@medtechimport.ru</span>
            </div>
          </div>
          <div className="text-sm">
            Бесплатная доставка от 5000₽
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">М</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">МедТехИмпорт</h1>
              <p className="text-sm text-gray-600">Стоматологические расходники</p>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск стоматологических товаров..."
                className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-4">
            <button 
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Корзина покупок"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block mt-4">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Главная
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Каталог
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link 
                  href={`/catalog/${category.id}`}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                О компании
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link href="/catalog" className="block text-gray-700 hover:text-blue-600 font-medium">
                    Каталог
                  </Link>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link 
                      href={`/catalog/${category.id}`}
                      className="block text-gray-700 hover:text-blue-600 font-medium"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium">
                    О компании
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
    </>
  )
}
