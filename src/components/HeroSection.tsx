import Link from 'next/link'
import { ArrowRight, Shield, Heart, Syringe, Droplets } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Качество',
    description: 'Все товары сертифицированы и соответствуют стоматологическим стандартам'
  },
  {
    icon: Heart,
    title: 'Надежность',
    description: 'Проверенные поставщики и гарантия качества стоматологических материалов'
  },
  {
    icon: Syringe,
    title: 'Широкий ассортимент',
    description: 'Более 500 наименований стоматологических расходников'
  },
  {
    icon: Droplets,
    title: 'Быстрая доставка',
    description: 'Доставка по Москве в день заказа, по России - 1-3 дня'
  }
]

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Стоматологические
              <span className="text-blue-600 block">расходники</span>
              высшего качества
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ваш надежный поставщик качественных стоматологических расходных материалов. 
              Одноразовые инструменты, слепочные массы, боры, наконечники и многое другое.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/catalog"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
              >
                Смотреть каталог
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Связаться с нами
              </Link>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image/Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Инструменты</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Альгинат</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <Syringe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Боры</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <Droplets className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Наконечники</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">стоматологических товаров</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
