'use client'

import { motion } from 'framer-motion'
import { Users, Award, Globe, Clock } from 'lucide-react'
import Link from 'next/link'

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

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Текстовый контент */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              О компании
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>МедТехИмпорт</strong> — ведущий поставщик медицинского оборудования в России. 
              Мы специализируемся на прямых поставках от производителей, что позволяет нам 
              предлагать лучшие цены и гарантировать качество продукции.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наша миссия — обеспечить медицинские учреждения современным, надежным и 
              эффективным оборудованием, которое поможет врачам спасать жизни и улучшать 
              качество медицинской помощи.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary">
                Подробнее о нас
              </Link>
              <Link href="/contacts" className="btn-outline">
                Связаться с нами
              </Link>
            </div>
          </motion.div>
          
          {/* Статистика */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  stat.color === 'primary' ? 'bg-primary-100 text-primary-500' :
                  stat.color === 'secondary' ? 'bg-secondary-100 text-secondary-500' :
                  'bg-accent-100 text-accent-500'
                }`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Качество
            </h3>
            <p className="text-gray-600">
              Все оборудование проходит строгий контроль качества и имеет необходимые сертификаты
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Надежность
            </h3>
            <p className="text-gray-600">
              Работаем только с проверенными производителями с мировым именем
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Поддержка
            </h3>
            <p className="text-gray-600">
              Обеспечиваем полную техническую поддержку и обслуживание оборудования
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
