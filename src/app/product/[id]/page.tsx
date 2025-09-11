import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, CheckCircle } from 'lucide-react'
import { getProductById, medicalProducts, categories } from '@/lib/medical-products'
import { formatPrice, formatRating } from '@/lib/utils'
import Breadcrumbs, { breadcrumbConfigs } from '@/components/Breadcrumbs'
import { JsonLd, generateProductSchema, getBaseUrl } from '@/lib/schema'
import { getCategoryAltText } from '@/components/ProductImage'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = medicalProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const category = categories.find(cat => cat.id === product.category)

  // Генерация schema.org разметки для товара
  const productSchema = generateProductSchema({
    name: product.name,
    description: product.description,
    image: product.image,
    url: `${getBaseUrl()}/product/${product.id}`,
    brand: product.brand,
    category: category?.name || 'Стоматологические расходники',
    price: product.price,
    currency: 'RUB',
    availability: product.inStock ? 'InStock' : 'OutOfStock',
    rating: {
      value: product.rating,
      count: product.reviews
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd data={productSchema} />
      <Breadcrumbs 
        items={breadcrumbConfigs.product(
          product.name, 
          category?.name || 'Категория', 
          product.category
        )} 
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden" role="img" aria-label={getCategoryAltText(product.category, product.name)}>
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-600">
                    {product.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden" role="img" aria-label={`${getCategoryAltText(product.category, product.name)} - дополнительное изображение ${index + 2}`}>
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">
                          {product.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-blue-600 font-medium">{product.brand}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{formatRating(product.rating)}</span>
                  <span className="text-sm text-gray-400">({product.reviews} отзывов)</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.inStock ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-600 font-medium">В наличии</span>
                  <span className="text-gray-500">({product.stockCount} шт.)</span>
                </>
              ) : (
                <>
                  <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                  <span className="text-red-600 font-medium">Нет в наличии</span>
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <button 
                className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Добавить в корзину</span>
              </button>
              
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <Truck className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Быстрая доставка</div>
                  <div className="text-sm text-gray-600">1-3 дня</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <Shield className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Гарантия качества</div>
                  <div className="text-sm text-gray-600">Сертифицировано</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <RotateCcw className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">Возврат</div>
                  <div className="text-sm text-gray-600">14 дней</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Specifications */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Характеристики</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Особенности</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Применение</h3>
              <ul className="space-y-2">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Сертификаты</h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Похожие товары</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">
                        {relatedProduct.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(relatedProduct.price)}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{formatRating(relatedProduct.rating)}</span>
                      </div>
                    </div>
                    <Link
                      href={`/product/${relatedProduct.id}`}
                      className="block w-full mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center text-sm"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
