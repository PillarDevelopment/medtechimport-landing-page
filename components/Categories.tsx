'use client'

import Link from 'next/link'

export default function Categories() {
  const categories = [
    {
      title: "Диагностическое оборудование",
      description: "УЗИ, МРТ, КТ, рентген аппараты",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      href: "/catalog?category=diagnostic"
    },
    {
      title: "Хирургическое оборудование",
      description: "Операционные столы, лапароскопия, эндоскопия",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      href: "/catalog?category=surgical"
    },
    {
      title: "Лабораторное оборудование",
      description: "Анализаторы, микроскопы, центрифуги",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      href: "/catalog?category=laboratory"
    },
    {
      title: "Реанимационное оборудование",
      description: "Аппараты ИВЛ, мониторы, дефибрилляторы",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      href: "/catalog?category=resuscitation"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Популярные категории
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Широкий ассортимент медицинского оборудования для всех направлений медицины
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group block"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/catalog"
            className="btn-primary inline-block"
          >
            Перейти в полный каталог
          </Link>
        </div>
      </div>
    </section>
  )
}
