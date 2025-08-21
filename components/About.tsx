'use client'

import Link from 'next/link'

export default function About() {
  const stats = [
    { number: "500+", label: "Поставок" },
    { number: "50+", label: "Производителей" },
    { number: "5", label: "Лет опыта" },
    { number: "100%", label: "Гарантия" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              О компании МедТехИмпорт
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Мы специализируемся на поставке качественного медицинского оборудования 
              от ведущих мировых производителей. Наша миссия - обеспечить медицинские 
              учреждения современным и надежным оборудованием.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              За годы работы мы заслужили доверие сотен клиентов и стали надежным 
              партнером в сфере медицинского оборудования.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary">
                Узнать больше
              </Link>
              <Link href="/contacts" className="btn-outline">
                Связаться с нами
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="О компании"
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6">
              <div className="text-2xl font-bold text-primary-600 mb-2">
                Надежный партнер
              </div>
              <div className="text-gray-600 text-sm">
                в сфере медицинского оборудования
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
