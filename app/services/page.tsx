import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Truck, Shield, Wrench, FileText, Users, Clock } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: 'Поставка оборудования',
      description: 'Прямые поставки от производителей с гарантией качества и лучшими ценами',
      features: ['Прямые контракты с производителями', 'Гарантия качества', 'Лучшие цены на рынке']
    },
    {
      icon: FileText,
      title: 'Сертификация и регистрация',
      description: 'Помощь в получении всех необходимых разрешений и сертификатов',
      features: ['Регистрация в Росздравнадзоре', 'Получение сертификатов', 'Консультации по документации']
    },
    {
      icon: Shield,
      title: 'Гарантийное обслуживание',
      description: 'Полное гарантийное и постгарантийное обслуживание оборудования',
      features: ['Гарантийный ремонт', 'Техническая поддержка', 'Замена комплектующих']
    },
    {
      icon: Wrench,
      title: 'Установка и настройка',
      description: 'Профессиональная установка, настройка и обучение персонала',
      features: ['Монтаж оборудования', 'Настройка параметров', 'Обучение персонала']
    },
    {
      icon: Users,
      title: 'Консультации',
      description: 'Бесплатные консультации по выбору и эксплуатации оборудования',
      features: ['Подбор оборудования', 'Технические консультации', 'Сравнительный анализ']
    },
    {
      icon: Clock,
      title: 'Логистика',
      description: 'Организация доставки и таможенного оформления оборудования',
      features: ['Международная доставка', 'Таможенное оформление', 'Страхование грузов']
    }
  ]

  const whyChooseUs = [
    'Более 5 лет опыта в медицинской отрасли',
    'Прямые контракты с ведущими производителями',
    'Полный цикл услуг от выбора до установки',
    'Гарантийное и постгарантийное обслуживание',
    'Бесплатные консультации и техническая поддержка',
    'Доставка по всей России'
  ]

  const howWeWork = [
    {
      step: '01',
      title: 'Консультация',
      description: 'Бесплатная консультация по выбору оборудования'
    },
    {
      step: '02',
      title: 'Подбор',
      description: 'Подбор оптимального решения под ваши задачи'
    },
    {
      step: '03',
      title: 'Договор',
      description: 'Заключение договора и согласование условий'
    },
    {
      step: '04',
      title: 'Поставка',
      description: 'Поставка оборудования с установкой и настройкой'
    },
    {
      step: '05',
      title: 'Поддержка',
      description: 'Гарантийное обслуживание и техническая поддержка'
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
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный цикл услуг по поставке и обслуживанию медицинского оборудования
            </p>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Что мы предлагаем
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От выбора оборудования до его установки и обслуживания — мы берем на себя все заботы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Мы заслужили доверие сотен медицинских учреждений благодаря 
                качеству услуг и индивидуальному подходу к каждому клиенту.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Медицинское оборудование"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6">
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  500+ клиентов
                </div>
                <div className="text-gray-600 text-sm">
                  доверяют нам
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Как мы работаем */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Простой и понятный процесс работы с нами
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {howWeWork.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
                
                {index < howWeWork.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2">
                    <div className="w-full h-full bg-primary-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
