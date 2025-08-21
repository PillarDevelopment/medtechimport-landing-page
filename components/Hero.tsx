'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Медицинское оборудование
              <span className="text-primary-600 block">для профессионалов</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Поставляем качественное медицинское оборудование от ведущих производителей. 
              Гарантия, сертификация, техническая поддержка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/catalog" 
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Перейти в каталог
              </Link>
              <Link 
                href="/contacts" 
                className="btn-outline text-lg px-8 py-4 inline-block"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Медицинское оборудование"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-12">
              <div className="text-2xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-gray-600">Довольных клиентов</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-12">
              <div className="text-2xl font-bold text-secondary-600">50+</div>
              <div className="text-sm text-gray-600">Производителей</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
