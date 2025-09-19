import Link from 'next/link'
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react'
import { MedicalProduct } from '@/lib/medical-products'
import { formatPrice, formatRating } from '@/lib/utils'
import { getCategoryAltText } from '@/lib/alt-texts'
import ProductImage from './ProductImage'

interface ProductCardProps {
  product: MedicalProduct
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden" role="img" aria-label={getCategoryAltText(product.category, product.name)}>
        <ProductImage 
          src={product.image} 
          alt={getCategoryAltText(product.category, product.name)}
          fallbackLetter={product.name.charAt(0)}
          fallbackSize="md"
          width={400}
          height={192}
          priority={false}
        />
        
        {/* Discount badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
        
        {/* Stock badge */}
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-gray-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            Нет в наличии
          </div>
        )}
        
        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <Link
            href={`/product/${product.id}`}
            className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 hover:text-blue-500 transition-colors"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-medium">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{formatRating(product.rating)}</span>
            <span className="text-sm text-gray-400">({product.reviews})</span>
          </div>
        </div>

        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {product.inStock ? `В наличии: ${product.stockCount}` : 'Нет в наличии'}
          </div>
        </div>

        <div className="flex space-x-2">
          <Link
            href={`/product/${product.id}`}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center text-sm"
          >
            Подробнее
          </Link>
          <button 
            className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
