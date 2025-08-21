import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Car } from 'lucide-react'

export default function ContactsPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      href: 'tel:+74951234567',
      description: 'Основной номер для связи'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@medtechimport.ru',
      href: 'mailto:info@medtechimport.ru',
      description: 'Электронная почта'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'г. Москва, ул. Примерная, д. 1',
      href: '#',
      description: 'Главный офис компании'
    },
    {
      icon: Clock,
      title: 'Время работы',
      value: 'Пн-Пт: 9:00-18:00',
      href: '#',
      description: 'Сб: 10:00-16:00, Вс: выходной'
    }
  ]

  const offices = [
    {
      city: 'Москва',
      address: 'г. Москва, ул. Примерная, д. 1',
      phone: '+7 (495) 123-45-67',
      email: 'moscow@medtechimport.ru'
    },
    {
      city: 'Санкт-Петербург',
      address: 'г. Санкт-Петербург, ул. Образцовая, д. 15',
      phone: '+7 (812) 987-65-43',
      email: 'spb@medtechimport.ru'
    },
    {
      city: 'Екатеринбург',
      address: 'г. Екатеринбург, ул. Центральная, д. 42',
      phone: '+7 (343) 456-78-90',
      email: 'ekb@medtechimport.ru'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Контакты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </motion.div>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наши специалисты готовы ответить на все ваши вопросы
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <contact.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <a
                  href={contact.href}
                  className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
                >
                  {contact.value}
                </a>
                <p className="text-gray-600 mt-2 text-sm">
                  {contact.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Офисы */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Наши офисы
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {office.city}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary-500" />
                      <a
                        href={`tel:${office.phone}`}
                        className="text-gray-600 hover:text-primary-500 transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary-500" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-gray-600 hover:text-primary-500 transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Карта */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
              Как добраться
            </h2>
            <div className="card p-0 overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Car className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Здесь будет интерактивная карта
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Интеграция с Google Maps или Яндекс.Карты
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Дополнительная информация */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Время работы
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Понедельник - Пятница</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Суббота</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Воскресенье</span>
                  <span className="font-medium">Выходной</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-primary-700 text-sm">
                  <strong>Внимание:</strong> В нерабочее время вы можете оставить заявку 
                  через форму на сайте, и мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Способы связи
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Телефон</h4>
                  <p className="text-gray-600">
                    Самый быстрый способ получить консультацию по оборудованию
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">
                    Подходит для отправки технических вопросов и документации
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Форма на сайте</h4>
                  <p className="text-gray-600">
                    Удобно для заявок на оборудование и общих вопросов
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <ContactForm />
      
      <Footer />
    </main>
  )
}
