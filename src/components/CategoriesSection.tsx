import Link from 'next/link'
import { Shield, Heart, Syringe, Droplets, TestTube, Activity, ArrowRight } from 'lucide-react'
import { categories } from '@/lib/medical-products'

const iconMap = {
  Shield,
  Heart,
  Syringe,
  Droplets,
  TestTube,
  Activity
}

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши категории товаров
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Широкий ассортимент стоматологических расходных материалов для всех видов стоматологической деятельности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Shield
            
            return (
              <Link
                key={category.id}
                href={`/catalog/${category.id}`}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  {category.subcategories.slice(0, 3).map((subcategory) => (
                    <div key={subcategory.id} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {subcategory.name}
                    </div>
                  ))}
                  {category.subcategories.length > 3 && (
                    <div className="text-sm text-blue-600 font-medium">
                      +{category.subcategories.length - 3} еще
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/catalog"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors group"
          >
            Смотреть все товары
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
