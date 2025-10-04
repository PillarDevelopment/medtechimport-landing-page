'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, User } from 'lucide-react'
import { config } from '@/lib/config'

const contactInfo = [
  {
    icon: Phone,
    title: 'Телефон',
    details: ['+7 961 627 15 55'],
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
    details: ['г. Москва, ул. Нижние Мневники, 16'],
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
    phone: '+7 961 627 15 55',
    email: 'sales@medtechimport.ru',
    description: 'Консультации по стоматологическим товарам и оформление заказов'
  },
  {
    name: 'Техническая поддержка',
    phone: '+7 961 627 15 55',
    email: 'support@medtechimport.ru',
    description: 'Помощь с выбором стоматологических товаров и технические вопросы'
  },
  {
    name: 'Отдел закупок',
    phone: '+7 961 627 15 55',
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
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Используем конфигурацию для определения URL API
      const apiUrl = config.apiUrl
      console.log('Отправляем запрос на:', apiUrl)
      console.log('Данные формы:', formData)
      
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), config.timeout)
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })
      
      clearTimeout(timeoutId)

      console.log('Статус ответа:', response.status)
      console.log('Заголовки ответа:', response.headers)
      
      const result = await response.json()
      console.log('Результат ответа:', result)

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        alert(result.error || 'Произошла ошибка при отправке сообщения')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      console.error('Error details:', {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      })
      
      if (error instanceof Error && error.name === 'AbortError') {
        alert('Превышено время ожидания. Попробуйте еще раз.')
      } else if (error instanceof Error && error.message.includes('Failed to fetch')) {
        alert('Ошибка сети. Проверьте подключение к интернету.')
      } else {
        alert('Произошла ошибка при отправке сообщения')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
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
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Отправка...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Отправить сообщение</span>
                    </>
                  )}
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

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Мы в социальных сетях</h3>
              <div className="space-y-3">
                <a 
                  href="https://t.me/tomographmil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">Telegram</div>
                    <div className="text-sm text-gray-600">Наш канал</div>
                  </div>
                </a>
                <a 
                  href="https://t.me/max" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <User className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">Менеджер Max</div>
                    <div className="text-sm text-gray-600">Персональный менеджер</div>
                  </div>
                </a>
                <a 
                  href="https://vk.com/club233082119" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.426.132-.426s-.02-1.304.58-1.496c.592-.19 1.35.96 2.15 1.386.604.323 1.062.252 1.062.252l2.15-.03s1.123-.07.59-.913c-.044-.07-.312-.652-1.61-1.844-1.36-1.25-1.178-.105.46-3.2.99-1.87 1.386-3.01 1.262-3.497-.118-.46-.85-.338-.85-.338l-2.17.014s-.161-.022-.28.05c-.115.07-.188.23-.188.23s-.34.91-.79 1.685c-.95 1.63-1.33 1.715-1.485 1.61-.36-.25-.27-1.01-.27-1.548 0-1.68.25-2.38-.49-2.56-.24-.06-.42-.1-1.04-.106-.795-.007-1.47.002-1.85.16-.25.105-.44.34-.32.353.12.014.39.07.53.26.18.24.17.78.17.78s.1 1.48-.24 1.66c-.24.12-.57-.125-1.28-1.25-.36-.56-.63-1.18-.63-1.18s-.05-.15-.14-.23c-.11-.09-.26-.12-.26-.12l-2.06.014s-.31.009-.42.15c-.1.12-.01.37-.01.37s1.58 3.69 3.37 5.55c1.64 1.74 3.5 1.63 3.5 1.63h.85z"/>
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">ВКонтакте</div>
                    <div className="text-sm text-gray-600">Наша группа</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Как нас найти</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm">Карта</div>
                  <div className="text-xs">г. Москва, ул. Нижние Мневники, 16</div>
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
