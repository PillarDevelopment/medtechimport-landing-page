import Link from 'next/link'
import { Award, Users, Target, Shield, Truck, Headphones } from 'lucide-react'
import Breadcrumbs, { breadcrumbConfigs } from '@/components/Breadcrumbs'

const stats = [
  { icon: Users, value: '200+', label: 'Стоматологических клиник' },
  { icon: Award, value: '500+', label: 'Стоматологических товаров' },
  { icon: Truck, value: '10+', label: 'Лет на рынке' },
  { icon: Shield, value: '100%', label: 'Качество продукции' }
]

const values = [
  {
    icon: Shield,
    title: 'Качество',
    description: 'Мы работаем только с проверенными поставщиками и гарантируем высокое качество всей продукции.'
  },
  {
    icon: Target,
    title: 'Надежность',
    description: 'Наша компания зарекомендовала себя как надежный партнер в сфере медицинских расходников.'
  },
  {
    icon: Users,
    title: 'Клиентоориентированность',
    description: 'Мы всегда готовы помочь нашим клиентам с выбором товаров и предоставить профессиональные консультации.'
  },
  {
    icon: Headphones,
    title: 'Поддержка',
    description: 'Наша команда специалистов готова ответить на любые вопросы и оказать техническую поддержку.'
  }
]

const team = [
  {
    name: 'Анна Петрова',
    position: 'Генеральный директор',
    experience: '15 лет в стоматологической сфере'
  },
  {
    name: 'Михаил Иванов',
    position: 'Коммерческий директор',
    experience: '12 лет опыта продаж'
  },
  {
    name: 'Елена Сидорова',
    position: 'Менеджер по закупкам',
    experience: '10 лет в закупках'
  },
  {
    name: 'Дмитрий Козлов',
    position: 'Технический специалист',
    experience: '8 лет в стоматологии'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs items={breadcrumbConfigs.about} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              О компании МедТехИмпорт
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Ваш надежный поставщик качественных стоматологических расходных материалов 
              с многолетним опытом работы в сфере стоматологии
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Компания МедТехИмпорт была основана в 2014 году с целью обеспечения 
                  стоматологических клиник качественными расходными материалами. 
                  За годы работы мы зарекомендовали себя как надежный партнер 
                  в сфере стоматологии.
                </p>
                <p>
                  Наша миссия — обеспечить доступность качественных стоматологических 
                  расходников для всех типов стоматологических учреждений, от небольших 
                  частных кабинетов до крупных стоматологических центров.
                </p>
                <p>
                  Мы постоянно расширяем ассортимент продукции, следим за новинками 
                  рынка и поддерживаем тесные отношения с ведущими производителями 
                  стоматологического оборудования и расходных материалов.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши достижения</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Сертификация ISO 9001</div>
                    <div className="text-sm text-gray-600">Система менеджмента качества</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Лицензия на стоматологическую деятельность</div>
                    <div className="text-sm text-gray-600">Официальное разрешение на торговлю</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Партнерство с ведущими стоматологическими брендами</div>
                    <div className="text-sm text-gray-600">Прямые поставки от производителей</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Экспертная поддержка</div>
                    <div className="text-sm text-gray-600">Консультации специалистов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Принципы, которыми мы руководствуемся в работе с клиентами и партнерами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наша команда
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессионалы с многолетним опытом работы в стоматологической сфере
          </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{member.position}</div>
                <div className="text-sm text-gray-600">{member.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения персонального предложения 
            и консультации по ассортименту товаров
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Связаться с нами
            </Link>
            <Link
              href="/catalog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Посмотреть каталог
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
