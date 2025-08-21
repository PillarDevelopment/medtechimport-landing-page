'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'О компании', href: '/about' },
      { name: 'Услуги', href: '/services' },
      { name: 'Контакты', href: '/contacts' },
      { name: 'Вакансии', href: '/careers' },
    ],
    catalog: [
      { name: 'Диагностическое оборудование', href: '/catalog/diagnostic' },
      { name: 'Хирургическое оборудование', href: '/catalog/surgical' },
      { name: 'Лабораторное оборудование', href: '/catalog/laboratory' },
      { name: 'Реанимационное оборудование', href: '/catalog/resuscitation' },
    ],
    support: [
      { name: 'Техническая поддержка', href: '/support' },
      { name: 'Гарантийное обслуживание', href: '/warranty' },
      { name: 'Сертификация', href: '/certification' },
      { name: 'FAQ', href: '/faq' },
    ],
    legal: [
      { name: 'Политика конфиденциальности', href: '/privacy' },
      { name: 'Условия использования', href: '/terms' },
      { name: 'Политика возврата', href: '/returns' },
      { name: 'Карта сайта', href: '/sitemap' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Компания */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">МТ</span>
              </div>
              <span className="text-xl font-bold">МедТехИмпорт</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ведущий поставщик медицинского оборудования в России. 
              Прямые поставки от производителей, гарантийное обслуживание 
              и помощь в сертификации.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@medtechimport.ru</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>

          {/* Меню */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              {footerLinks.catalog.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Социальные сети */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} МедТехИмпорт. Все права защищены.
            </div>
          </div>
        </div>

        {/* Реквизиты */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-400">
            <div>
              <h4 className="font-semibold text-white mb-2">Реквизиты компании</h4>
              <div className="space-y-1">
                <div>ООО "МедТехИмпорт"</div>
                <div>ИНН: 1234567890</div>
                <div>КПП: 123456789</div>
                <div>ОГРН: 1234567890123</div>
                <div>Юридический адрес: г. Москва, ул. Примерная, д. 1</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Банковские реквизиты</h4>
              <div className="space-y-1">
                <div>Банк: ПАО "Сбербанк"</div>
                <div>Р/с: 40702810123456789012</div>
                <div>К/с: 30101810400000000225</div>
                <div>БИК: 044525225</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
