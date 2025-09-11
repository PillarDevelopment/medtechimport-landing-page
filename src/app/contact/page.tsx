'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Breadcrumbs, { breadcrumbConfigs } from '@/components/Breadcrumbs'

const contactInfo = [
  {
    icon: Phone,
    title: 'Телефон',
    details: ['+7 (495) 123-45-67', '+7 (495) 123-45-68'],
    description: 'Звонки принимаются с 8:00 до 21:00'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@medtechimport.ru', 'sales@medtechimport.ru'],
    description: 'Ответим в течение 2 часов'
  },
  {
    icon: MapPin,
    title: 'Адрес',
    details: ['г. Москва, ул. Медицинская, 123', 'БЦ "Медицинский", офис 456'],
    description: 'Вход со стороны парковки'
  },
  {
    icon: Clock,
    title: 'Режим работы',
    details: ['Пн-Пт: 8:00-21:00', 'Сб: 10:00-16:00'],
    description: 'Воскресенье - выходной'
  }
]

const departments = [
  {
    name: 'Отдел продаж',
    phone: '+7 (495) 123-45-67',
    email: 'sales@medtechimport.ru',
    description: 'Консультации по стоматологическим товарам и оформление заказов'
  },
  {
    name: 'Техническая поддержка',
    phone: '+7 (495) 123-45-68',
    email: 'support@medtechimport.ru',
    description: 'Помощь с выбором стоматологических товаров и технические вопросы'
  },
  {
    name: 'Отдел закупок',
    phone: '+7 (495) 123-45-69',
    email: 'purchasing@medtechimport.ru',
    description: 'Вопросы по поставкам и сотрудничеству'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs items={breadcrumbConfigs.contact} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Мы всегда готовы помочь вам с выбором стоматологических расходников 
              и ответить на любые вопросы
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Отправить сообщение
              </h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Компания
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Название компании"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Тема обращения *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Выберите тему</option>
                    <option value="consultation">Консультация по товарам</option>
                    <option value="order">Вопрос по заказу</option>
                    <option value="cooperation">Сотрудничество</option>
                    <option value="complaint">Жалоба</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Опишите ваш вопрос или пожелание..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Отправить сообщение</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Main Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Контактная информация</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-gray-600">{detail}</div>
                      ))}
                      <div className="text-sm text-gray-500 mt-1">{info.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Отделы</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-gray-900 mb-1">{dept.name}</h4>
                    <div className="text-sm text-gray-600 mb-1">{dept.phone}</div>
                    <div className="text-sm text-gray-600 mb-2">{dept.email}</div>
                    <div className="text-xs text-gray-500">{dept.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Как нас найти</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm">Карта</div>
                  <div className="text-xs">г. Москва, ул. Медицинская, 123</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы наших клиентов
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Какие документы нужны для оформления заказа?
              </h3>
              <p className="text-gray-600">
                Для оформления заказа необходимо предоставить лицензию на стоматологическую деятельность 
                или справку о том, что вы являетесь стоматологом.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Какова минимальная сумма заказа?
              </h3>
              <p className="text-gray-600">
                Минимальная сумма заказа составляет 5000 рублей. При заказе на меньшую сумму 
                взимается дополнительная плата за доставку.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Возможна ли доставка в другие регионы?
              </h3>
              <p className="text-gray-600">
                Да, мы осуществляем доставку по всей России. Сроки доставки зависят от региона 
                и составляют от 1 до 7 рабочих дней.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Предоставляете ли вы скидки постоянным клиентам?
              </h3>
              <p className="text-gray-600">
                Да, мы предоставляем скидки постоянным клиентам в зависимости от объема 
                закупок. Размер скидки обсуждается индивидуально с менеджером.
              </p>
            </div>
          </div>
        </div>

        {/* Дополнительные ссылки для SEO */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Полезные ссылки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/catalog" 
              className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">каталог товаров</h3>
              <p className="text-gray-600 text-sm">Посмотреть все товары</p>
            </Link>
            <Link 
              href="/about" 
              className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">о компании</h3>
              <p className="text-gray-600 text-sm">Узнать больше о нас</p>
            </Link>
            <Link 
              href="/catalog/dental-burs" 
              className="p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">стоматологические боры</h3>
              <p className="text-gray-600 text-sm">Популярная категория</p>
            </Link>
            <Link 
              href="/" 
              className="p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">главная страница</h3>
              <p className="text-gray-600 text-sm">Вернуться на главную</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
