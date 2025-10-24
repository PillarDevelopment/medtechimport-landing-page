import Link from 'next/link'
import Image from 'next/image'
import { Home, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Image */}
        <div className="mb-8">
          <div className="mx-auto w-48 h-64 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/raccoon-404.jpg"
              alt="Енот смотрит из-за деревянных досок"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-4">
            <span className="text-4xl font-bold text-red-600">404</span>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Упс - тут что-то должно было быть, но мы это потеряли...
        </h1>
        
        <p className="text-gray-600 mb-8">
          Страница, которую вы ищете, не найдена. Возможно, она была перемещена или удалена. 
          Даже наш енот не может найти то, что вы ищете! 🦝
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Перейти на главную страницу
          </Link>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Phone className="w-4 h-4" />
            <span className="text-sm">Или позвоните нам:</span>
          </div>
          
          <a
            href="tel:+7-800-123-45-67"
            className="inline-flex items-center justify-center w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            +7 (961) 627-15-55
          </a>
        </div>

        {/* Additional Help */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Нужна помощь? Свяжитесь с нами, и мы поможем найти то, что вы ищете.
          </p>
        </div>
      </div>
    </div>
  )
}
