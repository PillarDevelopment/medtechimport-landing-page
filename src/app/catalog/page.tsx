import { Suspense } from 'react'
import { medicalProducts, categories } from '@/lib/medical-products'
import ProductCard from '@/components/ProductCard'
import CategoryFilter from '@/components/CategoryFilter'
import PriceFilter from '@/components/PriceFilter'
import BrandFilter from '@/components/BrandFilter'
import SortSelect from '@/components/SortSelect'
import { Filter, Grid, List } from 'lucide-react'

export default function CatalogPage() {
  const brands = Array.from(new Set(medicalProducts.map(product => product.brand)))
  const maxPrice = Math.max(...medicalProducts.map(product => product.price))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Каталог товаров</h1>
          <p className="text-gray-600">
            Широкий ассортимент стоматологических расходных материалов
          </p>
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
                <CategoryFilter categories={categories} />
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
                    Найдено товаров: <span className="font-semibold text-gray-900">{medicalProducts.length}</span>
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
            <Suspense fallback={<div>Загрузка товаров...</div>}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {medicalProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </Suspense>

            {/* Pagination */}
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
          </div>
        </div>
      </div>
    </div>
  )
}
