import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Truck, FileText, Shield, Award, Settings, Users, Globe, Clock } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: 'Поставка оборудования',
      description: 'Прямые поставки медицинского оборудования от ведущих производителей со всего мира.',
      features: [
        'Прямые контракты с производителями',
        'Оптимальные цены без посредников',
        'Быстрые сроки поставки',
        'Таможенное оформление'
      ],
      color: 'primary'
    },
    {
      icon: FileText,
      title: 'Сертификация и документооборот',
      description: 'Полное сопровождение процесса сертификации и оформления всех необходимых документов.',
      features: [
        'Регистрационные удостоверения',
        'Сертификаты соответствия',
        'Паспорта и инструкции',
        'Гарантийные документы'
      ],
      color: 'secondary'
    },
    {
      icon: Shield,
      title: 'Гарантийное обслуживание',
      description: 'Комплексное техническое обслуживание и ремонт медицинского оборудования.',
      features: [
        'Гарантийное обслуживание',
        'Техническая поддержка 24/7',
        'Запасные части',
        'Обучение персонала'
      ],
      color: 'accent'
    },
    {
      icon: Settings,
      title: 'Монтаж и настройка',
      description: 'Профессиональная установка, настройка и ввод в эксплуатацию оборудования.',
      features: [
        'Монтаж оборудования',
        'Настройка и калибровка',
        'Ввод в эксплуатацию',
        'Обучение персонала'
      ],
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Консультации и обучение',
      description: 'Профессиональные консультации по выбору оборудования и обучение персонала.',
      features: [
        'Консультации по выбору',
        'Обучение персонала',
        'Техническая документация',
        'Онлайн поддержка'
      ],
      color: 'secondary'
    },
    {
      icon: Globe,
      title: 'Логистика и доставка',
      description: 'Организация доставки оборудования в любой регион России и СНГ.',
      features: [
        'Доставка по России',
        'Международные перевозки',
        'Страхование грузов',
        'Отслеживание доставки'
      ],
      color: 'accent'
    }
  ]

  const advantages = [
    {
      icon: Clock,
      title: 'Быстрые сроки',
      description: 'Поставка оборудования в кратчайшие сроки благодаря прямым контрактам с производителями'
    },
    {
      icon: Award,
      title: 'Гарантия качества',
      description: 'Все оборудование проходит строгий контроль качества и имеет необходимые сертификаты'
    },
    {
      icon: Users,
      title: 'Персональный менеджер',
      description: 'Каждому клиенту назначается персональный менеджер для решения всех вопросов'
    },
    {
      icon: Shield,
      title: 'Полная поддержка',
      description: 'Техническая поддержка и обслуживание на протяжении всего срока службы оборудования'
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
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг по поставке и обслуживанию медицинского оборудования
            </p>
          </motion.div>
        </div>
      </section>

      {/* Основные услуги */}
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
              Основные услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предоставляем комплексные решения для медицинских учреждений
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 mb-6 rounded-lg flex items-center justify-center ${
                  service.color === 'primary' ? 'bg-primary-100 text-primary-500' :
                  service.color === 'secondary' ? 'bg-secondary-100 text-secondary-500' :
                  'bg-accent-100 text-accent-500'
                }`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        service.color === 'primary' ? 'bg-primary-500' :
                        service.color === 'secondary' ? 'bg-secondary-500' :
                        'bg-accent-500'
                      }`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наши преимущества в работе с медицинским оборудованием
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <advantage.icon className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс работы */}
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
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Простой и понятный процесс сотрудничества
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Заявка',
                description: 'Вы оставляете заявку на сайте или звоните нам'
              },
              {
                step: '02',
                title: 'Консультация',
                description: 'Наш специалист связывается с вами для уточнения деталей'
              },
              {
                step: '03',
                title: 'Предложение',
                description: 'Подготавливаем коммерческое предложение с учетом ваших потребностей'
              },
              {
                step: '04',
                title: 'Поставка',
                description: 'Осуществляем поставку и ввод оборудования в эксплуатацию'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Свяжитесь с нами для получения персонального предложения по медицинскому оборудованию
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-500 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Получить консультацию
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Скачать каталог
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
