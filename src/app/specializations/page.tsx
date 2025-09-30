import Link from 'next/link'
import { specializations, medicalProducts } from '@/lib/medical-products'
import Breadcrumbs, { breadcrumbConfigs } from '@/components/Breadcrumbs'
import { JsonLd, generateSpecializationsSchema, getBaseUrl } from '@/lib/schema'
import { Heart, Crown, Scissors, Zap, Shield, Sparkles, Syringe } from 'lucide-react'

const iconMap = {
  Heart,
  Crown,
  Scissors,
  Zap,
  Shield,
  Sparkles,
  Syringe
}

export default function SpecializationsPage() {
  // Генерация schema.org разметки для специализаций
  const specializationsSchema = generateSpecializationsSchema(
    specializations.map(spec => ({
      name: spec.name,
      description: spec.description,
      url: `${getBaseUrl()}/specializations/${spec.id}`,
      category: 'Стоматологические специализации'
    }))
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd data={specializationsSchema} />
      <Breadcrumbs items={breadcrumbConfigs.specializations} />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Каталог по специализациям</h1>
          <p className="text-gray-600 max-w-3xl">
            Расходные материалы и инструменты, организованные по специализациям стоматологов. 
            Найдите все необходимое для вашей области работы.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Специализации Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {specializations.map((specialization) => {
            const IconComponent = iconMap[specialization.icon as keyof typeof iconMap] || Heart
            const productsCount = medicalProducts.filter(p => p.specialization === specialization.id).length
            
            return (
              <Link
                key={specialization.id}
                href={`/specializations/${specialization.id}`}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{specialization.name}</h3>
                    <p className="text-sm text-gray-500">{productsCount} товаров</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{specialization.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900">Основные расходники:</h4>
                  <div className="flex flex-wrap gap-1">
                    {specialization.subcategories.slice(0, 3).map((subcategory) => (
                      <span
                        key={subcategory.id}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {subcategory.name}
                      </span>
                    ))}
                    {specialization.subcategories.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{specialization.subcategories.length - 3} еще
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Дополнительная информация */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Как пользоваться каталогом по специализациям
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Выберите специализацию</h3>
              <p className="text-gray-600 text-sm">
                Найдите свою область работы среди 7 основных специализаций стоматологии
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Crown className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Изучите расходники</h3>
              <p className="text-gray-600 text-sm">
                Просмотрите типичные расходные материалы для ваших процедур
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Закажите товары</h3>
              <p className="text-gray-600 text-sm">
                Добавьте необходимые товары в корзину и оформите заказ
              </p>
            </div>
          </div>
        </div>

        {/* Ссылки на популярные специализации */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Популярные специализации
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/specializations/therapist" 
              className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <span className="text-gray-700 hover:text-blue-600">Терапевт</span>
            </Link>
            <Link 
              href="/specializations/orthopedist" 
              className="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <span className="text-gray-700 hover:text-green-600">Ортопед</span>
            </Link>
            <Link 
              href="/specializations/endodontist" 
              className="text-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <span className="text-gray-700 hover:text-purple-600">Эндодонтист</span>
            </Link>
            <Link 
              href="/specializations/hygienist" 
              className="text-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <span className="text-gray-700 hover:text-orange-600">Гигиенист</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
