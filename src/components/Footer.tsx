import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">М</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">МедТехИмпорт</h3>
                <p className="text-sm text-gray-400">Стоматологические расходники</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Ваш надежный поставщик качественных стоматологических расходных материалов 
              для стоматологических клиник и частных кабинетов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-gray-400 hover:text-white transition-colors">
                  Каталог товаров
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-400 hover:text-white transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-400 hover:text-white transition-colors">
                  Гарантии
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Категории</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog/disposable-instruments" className="text-gray-400 hover:text-white transition-colors">
                  Одноразовые инструменты
                </Link>
              </li>
              <li>
                <Link href="/catalog/impression-materials" className="text-gray-400 hover:text-white transition-colors">
                  Слепочные массы
                </Link>
              </li>
              <li>
                <Link href="/catalog/dental-burs" className="text-gray-400 hover:text-white transition-colors">
                  Стоматологические боры
                </Link>
              </li>
              <li>
                <Link href="/catalog/disposable-tips" className="text-gray-400 hover:text-white transition-colors">
                  Одноразовые наконечники
                </Link>
              </li>
              <li>
                <Link href="/catalog/retraction-cords" className="text-gray-400 hover:text-white transition-colors">
                  Ретракционные нити
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">Телефон</p>
                  <p className="font-medium">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium">info@medtechimport.ru</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">Адрес</p>
                  <p className="font-medium">г. Москва, ул. Медицинская, 123</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">Режим работы</p>
                  <p className="font-medium">Пн-Пт: 8:00-21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 МедТехИмпорт. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
