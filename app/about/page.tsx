import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Award, Globe, Clock, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Довольных клиентов',
      color: 'primary'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Производителей',
      color: 'secondary'
    },
    {
      icon: Globe,
      number: '25',
      label: 'Регионов России',
      color: 'accent'
    },
    {
      icon: Clock,
      number: '5',
      label: 'Лет на рынке',
      color: 'primary'
    }
  ]

  const values = [
    {
      title: 'Качество',
      description: 'Мы работаем только с проверенными производителями и поставляем оборудование, соответствующее международным стандартам.',
      icon: CheckCircle
    },
    {
      title: 'Надежность',
      description: 'Наша репутация — это результат многолетней работы с медицинскими учреждениями по всей России.',
      icon: CheckCircle
    },
    {
      title: 'Инновации',
      description: 'Мы следим за новейшими технологиями и предлагаем клиентам современное медицинское оборудование.',
      icon: CheckCircle
    },
    {
      title: 'Поддержка',
      description: 'Обеспечиваем полную техническую поддержку и обслуживание оборудования на протяжении всего срока службы.',
      icon: CheckCircle
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
              О компании
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ведущий поставщик медицинского оборудования в России с 2019 года
            </p>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Наша история
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Компания <strong>МедТехИмпорт</strong> была основана в 2019 году с целью 
                обеспечить российские медицинские учреждения качественным и современным 
                оборудованием по доступным ценам.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                За 5 лет работы мы стали надежным партнером для более чем 500 медицинских 
                учреждений по всей России, от небольших частных клиник до крупных 
                многопрофильных больниц.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Наша миссия — способствовать развитию здравоохранения в России, 
                предоставляя врачам и медицинскому персоналу лучшие инструменты для 
                спасения жизней и улучшения качества медицинской помощи.
              </p>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Медицинское оборудование"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Статистика */}
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
              Наши достижения
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    stat.color === 'primary' ? 'bg-primary-100 text-primary-500' :
                    stat.color === 'secondary' ? 'bg-secondary-100 text-secondary-500' :
                    'bg-accent-100 text-accent-500'
                  }`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ценности */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Наши ценности
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессионалы с многолетним опытом в медицинской отрасли
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-500">АИ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Александр Иванов
              </h3>
              <p className="text-primary-500 font-medium mb-3">
                Генеральный директор
              </p>
              <p className="text-gray-600">
                15 лет опыта в медицинской отрасли, специалист по стратегическому развитию
              </p>
            </div>

            <div className="card text-center">
              <div className="w-24 h-24 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary-500">МП</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Мария Петрова
              </h3>
              <p className="text-secondary-500 font-medium mb-3">
                Технический директор
              </p>
              <p className="text-gray-600">
                Эксперт по медицинскому оборудованию, сертификации и технической поддержке
              </p>
            </div>

            <div className="card text-center">
              <div className="w-24 h-24 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-500">ДС</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Дмитрий Сидоров
              </h3>
              <p className="text-accent-500 font-medium mb-3">
                Руководитель отдела продаж
              </p>
              <p className="text-gray-600">
                Специалист по работе с клиентами и развитию партнерских отношений
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
