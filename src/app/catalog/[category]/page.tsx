import { notFound } from 'next/navigation'
import Link from 'next/link'
import { categories, getProductsByCategory } from '@/lib/medical-products'
import ProductCard from '@/components/ProductCard'
import CategoryFilter from '@/components/CategoryFilter'
import PriceFilter from '@/components/PriceFilter'
import BrandFilter from '@/components/BrandFilter'
import SortSelect from '@/components/SortSelect'
import { Filter, Grid, List } from 'lucide-react'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.id === params.category)
  
  if (!category) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(params.category)
  const brands = Array.from(new Set(categoryProducts.map(product => product.brand)))
  const maxPrice = Math.max(...categoryProducts.map(product => product.price))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Главная</Link>
            <span className="text-gray-400">/</span>
            <Link href="/catalog" className="text-gray-500 hover:text-blue-600">Каталог</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{category.name}</span>
          </nav>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h1>
          <p className="text-gray-600 max-w-3xl">
            {category.description}
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
            {/* Subcategories */}
            {category.subcategories.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Подкатегории</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.subcategories.map((subcategory) => (
                    <a
                      key={subcategory.id}
                      href={`/catalog/${category.id}/${subcategory.id}`}
                      className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 mb-1">{subcategory.name}</h4>
                      <p className="text-sm text-gray-600">{subcategory.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    Найдено товаров: <span className="font-semibold text-gray-900">{categoryProducts.length}</span>
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
            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {categoryProducts.map((product) => (
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
                  В данной категории пока нет товаров. Попробуйте изменить фильтры или выбрать другую категорию.
                </p>
                <Link
                  href="/catalog"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Посмотреть все товары
                </Link>
              </div>
            )}

            {/* Pagination */}
            {categoryProducts.length > 0 && (
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
      </div>
    </div>
  )
}
