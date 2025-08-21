'use client'

import { Shield, Truck, FileText, Award } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Прямые поставки",
      description: "Работаем напрямую с производителями, что позволяет предлагать лучшие цены"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Полный комплект документов",
      description: "Предоставляем все необходимые документы для регистрации оборудования"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Гарантийное обслуживание",
      description: "Обеспечиваем техническую поддержку и гарантийное обслуживание"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Сертификация",
      description: "Помогаем с получением всех необходимых сертификатов и разрешений"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы обеспечиваем полный цикл поставки медицинского оборудования 
            от выбора до установки и обслуживания
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
