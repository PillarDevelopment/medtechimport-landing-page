import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactsPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      href: 'tel:+74951234567'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@medtechimport.ru',
      href: 'mailto:info@medtechimport.ru'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'г. Москва, ул. Примерная, д. 1',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Время работы',
      value: 'Пн-Пт: 9:00-18:00',
      href: '#'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Контакты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами для получения консультации по медицинскому оборудованию
            </p>
          </div>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Контактные данные */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Контактная информация
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {contact.title}
                      </h4>
                      <a
                        href={contact.href}
                        className="text-gray-600 hover:text-primary-500 transition-colors"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Дополнительная информация */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Дополнительная информация
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p>• Бесплатная консультация по выбору оборудования</p>
                  <p>• Техническая поддержка и обслуживание</p>
                  <p>• Помощь в сертификации и регистрации</p>
                  <p>• Доставка по всей России</p>
                </div>
              </div>
            </div>

            {/* Карта */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Наш офис
              </h2>
              
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-gray-600">
                    Здесь будет встроена карта
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Как добраться
                </h4>
                <p className="text-gray-600 text-sm">
                  Ближайшее метро: Примерная (5 минут пешком)<br />
                  Автобусы: 123, 456 (остановка "Примерная улица")
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <ContactForm />

      <Footer />
    </main>
  )
}
