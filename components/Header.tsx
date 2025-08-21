'use client'

import { useState } from 'react'
import { Phone, Mail, Menu, X } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">МТ</span>
              </div>
              <span className="text-xl font-bold text-gray-900">МедТехИмпорт</span>
            </Link>
          </div>

          {/* Контакты - десктоп */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="font-medium">info@medtechimport.ru</span>
            </div>
          </div>

          {/* Навигация - десктоп */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/catalog" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Каталог
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              О компании
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Услуги
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Контакты
            </Link>
            <button className="btn-primary">
              Заказать звонок
            </button>
          </nav>

          {/* Мобильное меню */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-500 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="font-medium">info@medtechimport.ru</span>
              </div>
              <nav className="flex flex-col space-y-3">
                <Link 
                  href="/catalog" 
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Каталог
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О компании
                </Link>
                <Link 
                  href="/services" 
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Услуги
                </Link>
                <Link 
                  href="/contacts" 
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </Link>
                <button className="btn-primary w-full">
                  Заказать звонок
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
