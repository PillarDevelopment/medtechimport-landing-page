'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, ShoppingCart } from 'lucide-react'
import { categories, specializations } from '@/lib/medical-products'
import { JsonLd, generateNavigationSchema } from '@/lib/schema'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Генерация schema.org разметки для навигации
  const navigationItems = [
    { name: 'Главная', url: '/', description: 'Главная страница МедТехИмпорт' },
    { name: 'Специализации', url: '/specializations', description: 'Каталог по специализациям стоматологов' },
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
      {/* Main header */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">М</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">МедТехИмпорт</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Стоматологические расходники</p>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full px-3 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-2">
            <button 
              className="relative p-1.5 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Корзина покупок"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block mt-2">
          <ul className="flex space-x-4 text-sm">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Главная
              </Link>
            </li>
            <li className="relative group">
              <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Специализации
              </span>
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {specializations.map((specialization) => (
                  <Link 
                    key={specialization.id}
                    href={`/specializations/${specialization.id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {specialization.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="relative group">
              <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Каталог
              </span>
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {categories.map((category) => (
                  <Link 
                    key={category.id}
                    href={`/catalog/${category.id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </li>
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
          <div className="container mx-auto px-4 py-2">
            <nav>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium py-1">
                    Главная
                  </Link>
                </li>
                <li className="border-t pt-2 mt-2">
                  <div className="text-gray-500 text-xs font-semibold mb-1">СПЕЦИАЛИЗАЦИИ</div>
                  {specializations.map((specialization) => (
                    <Link 
                      key={specialization.id}
                      href={`/specializations/${specialization.id}`}
                      className="block text-gray-600 hover:text-blue-600 py-1 pl-2"
                    >
                      {specialization.name}
                    </Link>
                  ))}
                </li>
                <li className="border-t pt-2 mt-2">
                  <div className="text-gray-500 text-xs font-semibold mb-1">КАТАЛОГ</div>
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      href={`/catalog/${category.id}`}
                      className="block text-gray-600 hover:text-blue-600 py-1 pl-2"
                    >
                      {category.name}
                    </Link>
                  ))}
                </li>
                <li>
                  <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium py-1">
                    О компании
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium py-1">
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
