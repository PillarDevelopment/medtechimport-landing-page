'use client'

import { motion } from 'framer-motion'
import { Truck, FileText, Shield, Award } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Прямые поставки от производителей',
    description: 'Работаем напрямую с ведущими производителями медицинского оборудования, что позволяет предлагать лучшие цены и гарантировать качество.',
    color: 'primary'
  },
  {
    icon: FileText,
    title: 'Полный комплект документов',
    description: 'Предоставляем все необходимые документы: сертификаты, паспорта, инструкции, гарантийные талоны и регистрационные удостоверения.',
    color: 'secondary'
  },
  {
    icon: Shield,
    title: 'Гарантийное обслуживание',
    description: 'Обеспечиваем полное гарантийное и постгарантийное обслуживание оборудования, включая техническую поддержку и ремонт.',
    color: 'accent'
  },
  {
    icon: Award,
    title: 'Помощь в сертификации',
    description: 'Помогаем в получении всех необходимых разрешений и сертификатов для ввода оборудования в эксплуатацию.',
    color: 'primary'
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Почему клиенты выбирают нас для поставки медицинского оборудования
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                feature.color === 'primary' ? 'bg-primary-100 text-primary-500' :
                feature.color === 'secondary' ? 'bg-secondary-100 text-secondary-500' :
                'bg-accent-100 text-accent-500'
              }`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
