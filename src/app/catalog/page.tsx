import { Suspense } from 'react'
import Link from 'next/link'
import { medicalProducts, categories } from '@/lib/medical-products'
import ProductCard from '@/components/ProductCard'
import CategoryFilter from '@/components/CategoryFilter'
import PriceFilter from '@/components/PriceFilter'
import BrandFilter from '@/components/BrandFilter'
import SortSelect from '@/components/SortSelect'
import { JsonLd, generateCollectionSchema, getBaseUrl } from '@/lib/schema'
import { Filter, Grid, List } from 'lucide-react'

export default function CatalogPage() {
  const brands = Array.from(new Set(medicalProducts.map(product => product.brand)))
  const maxPrice = Math.max(...medicalProducts.map(product => product.price))

  // Генерация schema.org разметки для каталога
  const catalogSchema = generateCollectionSchema(
    medicalProducts.slice(0, 20).map(product => ({
      name: product.name,
      description: product.description,
      image: product.image,
      url: `${getBaseUrl()}/product/${product.id}`,
      brand: product.brand,
      category: 'Стоматологические расходники',
      price: product.price,
      currency: 'RUB',
      availability: product.inStock ? 'InStock' : 'OutOfStock'
    }))
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd data={catalogSchema} />
      
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

        {/* Дополнительные ссылки для SEO */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Популярные категории
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link 
              href="/catalog/dental-burs" 
              className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <span className="text-gray-700 hover:text-blue-600">стоматологические боры</span>
            </Link>
            <Link 
              href="/catalog/disposable-tips" 
              className="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <span className="text-gray-700 hover:text-green-600">одноразовые наконечники</span>
            </Link>
            <Link 
              href="/catalog/impression-materials" 
              className="text-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <span className="text-gray-700 hover:text-purple-600">слепочные материалы</span>
            </Link>
            <Link 
              href="/catalog/disposable-instruments" 
              className="text-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <span className="text-gray-700 hover:text-orange-600">одноразовые инструменты</span>
            </Link>
            <Link 
              href="/catalog/retraction-cords" 
              className="text-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <span className="text-gray-700 hover:text-red-600">ретракционные нити</span>
            </Link>
          </div>
        </div>

        {/* Ссылки на популярные товары */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Рекомендуемые товары
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/product/bor-diamond-round-1-2mm" 
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="text-gray-700 hover:text-blue-600">алмазный бор круглый</span>
            </Link>
            <Link 
              href="/product/tip-angled-1-1" 
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="text-gray-700 hover:text-blue-600">угловой наконечник</span>
            </Link>
            <Link 
              href="/product/alginate-fast-set" 
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="text-gray-700 hover:text-blue-600">альгинат быстрого затвердевания</span>
            </Link>
            <Link 
              href="/product/retraction-cord-hemostatic-5m" 
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="text-gray-700 hover:text-blue-600">ретракционная нить</span>
            </Link>
          </div>
        </div>

        {/* Ссылки на разделы сайта */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Полезная информация
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/about" 
              className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">о компании</h3>
              <p className="text-gray-600 text-sm">Узнать больше о МедТехИмпорт</p>
            </Link>
            <Link 
              href="/contact" 
              className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">контакты</h3>
              <p className="text-gray-600 text-sm">Связаться с нами</p>
            </Link>
            <Link 
              href="/" 
              className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">главная страница</h3>
              <p className="text-gray-600 text-sm">Вернуться на главную</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
