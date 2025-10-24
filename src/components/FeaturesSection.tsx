import { Truck, Shield, Award, Headphones, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Быстрая доставка',
    description: 'Доставка по Москве в день заказа, по России - 1-3 дня',
    color: 'blue'
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Все товары сертифицированы и имеют гарантию качества',
    color: 'green'
  },
  {
    icon: Award,
    title: 'Сертифицированная продукция',
    description: 'Соответствие ГОСТ, CE, FDA и другим международным стандартам',
    color: 'purple'
  },
  {
    icon: Headphones,
    title: 'Техническая поддержка',
    description: 'Квалифицированные консультанты помогут с выбором стоматологических товаров',
    color: 'orange'
  },
  {
    icon: Clock,
    title: 'Расширенный режим работы',
    description: 'Работаем с 8:00 до 21:00, быстрая обработка заявок',
    color: 'red'
  },
  {
    icon: Users,
    title: 'Опытная команда',
    description: 'Более 10 лет опыта работы в сфере стоматологических товаров',
    color: 'indigo'
  }
]

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
  red: 'bg-red-100 text-red-600',
  indigo: 'bg-indigo-100 text-indigo-600'
}

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают MTIOC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы обеспечиваем высокое качество стоматологических материалов и надежность поставок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Стоматологических товаров</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8-21</div>
              <div className="text-blue-100">Режим работы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
