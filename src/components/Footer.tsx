import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, User } from 'lucide-react'

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
              <a href="https://t.me/tomographmil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Telegram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="https://max.ru/pillardev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Менеджер Max">
                <User className="w-5 h-5" />
              </a>
              <a href="https://vk.com/club233082119" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.426.132-.426s-.02-1.304.58-1.496c.592-.19 1.35.96 2.15 1.386.604.323 1.062.252 1.062.252l2.15-.03s1.123-.07.59-.913c-.044-.07-.312-.652-1.61-1.844-1.36-1.25-1.178-.105.46-3.2.99-1.87 1.386-3.01 1.262-3.497-.118-.46-.85-.338-.85-.338l-2.17.014s-.161-.022-.28.05c-.115.07-.188.23-.188.23s-.34.91-.79 1.685c-.95 1.63-1.33 1.715-1.485 1.61-.36-.25-.27-1.01-.27-1.548 0-1.68.25-2.38-.49-2.56-.24-.06-.42-.1-1.04-.106-.795-.007-1.47.002-1.85.16-.25.105-.44.34-.32.353.12.014.39.07.53.26.18.24.17.78.17.78s.1 1.48-.24 1.66c-.24.12-.57-.125-1.28-1.25-.36-.56-.63-1.18-.63-1.18s-.05-.15-.14-.23c-.11-.09-.26-.12-.26-.12l-2.06.014s-.31.009-.42.15c-.1.12-.01.37-.01.37s1.58 3.69 3.37 5.55c1.64 1.74 3.5 1.63 3.5 1.63h.85z"/>
                </svg>
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
                  <p className="font-medium">+7 961 627 15 55</p>
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
                  <p className="font-medium">г. Москва, ул. Нижние Мневники, 16</p>
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
