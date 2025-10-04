import { notFound } from 'next/navigation'
import Link from 'next/link'
import { specializations, getProductsBySpecialization, getSpecializationById } from '@/lib/medical-products'
import ProductCard from '@/components/ProductCard'
import CategoryFilter from '@/components/CategoryFilter'
import PriceFilter from '@/components/PriceFilter'
import BrandFilter from '@/components/BrandFilter'
import SortSelect from '@/components/SortSelect'
import { Filter, Grid, List, Heart, Crown, Scissors, Zap, Shield, Sparkles, Syringe } from 'lucide-react'

const iconMap = {
  Heart,
  Crown,
  Scissors,
  Zap,
  Shield,
  Sparkles,
  Syringe
}

interface SpecializationPageProps {
  params: {
    specialization: string
  }
}

export default async function SpecializationPage({ params }: SpecializationPageProps) {
  const { specialization: specializationId } = await params
  const specialization = getSpecializationById(specializationId)
  
  if (!specialization) {
    notFound()
  }

  const specializationProducts = getProductsBySpecialization(specializationId)
  const brands = Array.from(new Set(specializationProducts.map(product => product.brand)))
  const maxPrice = Math.max(...specializationProducts.map(product => product.price))
  const IconComponent = iconMap[specialization.icon as keyof typeof iconMap] || Heart

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-50 rounded-lg mr-4">
              <IconComponent className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{specialization.name}</h1>
              <p className="text-gray-600 max-w-3xl">
                {specialization.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Фильтры
                </h2>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Сбросить все
                </button>
              </div>

              <div className="space-y-6">
                <CategoryFilter categories={specializations} />
                <PriceFilter maxPrice={maxPrice} />
                <BrandFilter brands={brands} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">

            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    Найдено товаров: <span className="font-semibold text-gray-900">{specializationProducts.length}</span>
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <SortSelect />
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Grid className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {specializationProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {specializationProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Товары не найдены
                </h3>
                <p className="text-gray-600 mb-6">
                  В данной специализации пока нет товаров. Попробуйте изменить фильтры или выбрать другую специализацию.
                </p>
                <Link
                  href="/specializations"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Посмотреть все специализации
                </Link>
              </div>
            )}

            {/* Pagination */}
            {specializationProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    Предыдущая
                  </button>
                  <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    2
                  </button>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    3
                  </button>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    Следующая
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Дополнительные ссылки */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Другие специализации
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specializations
              .filter(spec => spec.id !== specializationId)
              .slice(0, 4)
              .map((spec) => {
                const SpecIcon = iconMap[spec.icon as keyof typeof iconMap] || Heart
                return (
                  <Link
                    key={spec.id}
                    href={`/specializations/${spec.id}`}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center"
                  >
                    <SpecIcon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <span className="text-gray-700 hover:text-blue-600">{spec.name}</span>
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
