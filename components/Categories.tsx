'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const categories = [
  {
    name: 'Диагностическое оборудование',
    description: 'УЗИ, МРТ, КТ, рентген, эндоскопия',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '150+ товаров',
    slug: 'diagnostic'
  },
  {
    name: 'Хирургическое оборудование',
    description: 'Операционные столы, лапароскопия, инструменты',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '200+ товаров',
    slug: 'surgical'
  },
  {
    name: 'Лабораторное оборудование',
    description: 'Анализаторы, центрифуги, микроскопы',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '120+ товаров',
    slug: 'laboratory'
  },
  {
    name: 'Реанимационное оборудование',
    description: 'Аппараты ИВЛ, дефибрилляторы, мониторы',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '80+ товаров',
    slug: 'resuscitation'
  },
  {
    name: 'Стоматологическое оборудование',
    description: 'Стоматологические установки, бормашины',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '100+ товаров',
    slug: 'dental'
  },
  {
    name: 'Физиотерапевтическое оборудование',
    description: 'Аппараты УВЧ, электрофорез, магнитотерапия',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '90+ товаров',
    slug: 'physiotherapy'
  }
]

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Популярные категории
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Широкий ассортимент медицинского оборудования для всех направлений медицины
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/catalog/${category.slug}`} className="block">
                <div className="card overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white">
                        <h3 className="text-xl font-semibold mb-1">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-200 mb-2">
                          {category.description}
                        </p>
                        <span className="inline-block bg-primary-500 text-white text-xs px-3 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-primary-500 font-medium group-hover:text-primary-600 transition-colors">
                        Перейти в категорию
                      </span>
                      <svg 
                        className="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/catalog" className="btn-primary text-lg px-8 py-4">
            Смотреть весь каталог
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Categories
