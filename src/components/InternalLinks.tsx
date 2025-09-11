import Link from 'next/link'
import { ArrowRight, Link as LinkIcon } from 'lucide-react'

interface InternalLinksProps {
  type: 'homepage' | 'dental-burs' | 'disposable-tips'
  className?: string
}

export default function InternalLinks({ type, className = '' }: InternalLinksProps) {
  if (type === 'homepage') {
    return (
      <section className={`bg-white py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные категории расходников
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите нужную категорию стоматологических расходных материалов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              href="/catalog/dental-burs" 
              className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-200"
              aria-label="Перейти к стоматологическим борам"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <LinkIcon className="w-6 h-6 text-blue-600" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Стоматологические боры
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Алмазные и твердосплавные боры всех типов для различных стоматологических процедур
              </p>
            </Link>

            <Link 
              href="/catalog/disposable-tips" 
              className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-200"
              aria-label="Перейти к одноразовым наконечникам"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <LinkIcon className="w-6 h-6 text-green-600" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Одноразовые наконечники
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Угловые и прямые наконечники для микромоторов с высоким качеством
              </p>
            </Link>

            <Link 
              href="/catalog/impression-materials" 
              className="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-purple-100 hover:border-purple-200"
              aria-label="Перейти к слепочным массам и материалам"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <LinkIcon className="w-6 h-6 text-purple-600" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Слепочные массы и материалы
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Силиконовые и альгинатные материалы для точных слепков
              </p>
            </Link>
          </div>

          {/* Дополнительные ссылки для SEO */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Другие категории товаров
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                href="/catalog/disposable-instruments" 
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Перейти к одноразовым стоматологическим инструментам"
              >
                <span className="text-gray-800 hover:text-blue-700">одноразовые стоматологические инструменты</span>
              </Link>
              <Link 
                href="/catalog/retraction-cords" 
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Перейти к ретракционным нитям"
              >
                <span className="text-gray-800 hover:text-blue-700">ретракционные нити</span>
              </Link>
              <Link 
                href="/catalog" 
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Перейти к каталогу товаров"
              >
                <span className="text-gray-800 hover:text-blue-700">каталог товаров</span>
              </Link>
              <Link 
                href="/about" 
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Перейти к информации о компании"
              >
                <span className="text-gray-800 hover:text-blue-700">о компании</span>
              </Link>
            </div>
          </div>

          {/* Ссылки на популярные товары */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Популярные товары
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                href="/product/bor-diamond-round-1-2mm" 
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                aria-label="Перейти к алмазному бору круглому 1.2мм"
              >
                <span className="text-gray-800 hover:text-blue-700">алмазный бор круглый 1.2мм</span>
              </Link>
              <Link 
                href="/product/tip-angled-1-1" 
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                aria-label="Перейти к угловому наконечнику 1:1"
              >
                <span className="text-gray-800 hover:text-blue-700">угловой наконечник 1:1</span>
              </Link>
              <Link 
                href="/product/alginate-fast-set" 
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                aria-label="Перейти к альгинату быстрого затвердевания"
              >
                <span className="text-gray-800 hover:text-blue-700">альгинат быстрого затвердевания</span>
              </Link>
              <Link 
                href="/product/retraction-cord-hemostatic-5m" 
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                aria-label="Перейти к ретракционной нити гемостатической 5м"
              >
                <span className="text-gray-800 hover:text-blue-700">ретракционная нить гемостатическая 5м</span>
              </Link>
              <Link 
                href="/product/scalpel-blade-15c" 
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                aria-label="Перейти к лезвию скальпеля 15C"
              >
                <span className="text-gray-800 hover:text-blue-700">лезвие скальпеля 15C</span>
              </Link>
              <Link 
                href="/product/silicone-putty-heavy" 
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                aria-label="Перейти к силиконовой слепочной массе"
              >
                <span className="text-gray-800 hover:text-blue-700">силиконовая слепочная масса</span>
              </Link>
            </div>
          </div>

          {/* Ссылки на разделы сайта */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Полезная информация
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                href="/contact" 
                className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center"
                aria-label="Перейти к контактной информации"
              >
                <h4 className="font-semibold text-gray-900 mb-2">контакты</h4>
                <p className="text-gray-700 text-sm">Связаться с нами</p>
              </Link>
              <Link 
                href="/about" 
                className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center"
                aria-label="Перейти к информации о компании"
              >
                <h4 className="font-semibold text-gray-900 mb-2">о компании</h4>
                <p className="text-gray-700 text-sm">Узнать больше о нас</p>
              </Link>
              <Link 
                href="/catalog" 
                className="p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-center"
                aria-label="Перейти к каталогу товаров"
              >
                <h4 className="font-semibold text-gray-900 mb-2">каталог</h4>
                <p className="text-gray-700 text-sm">Все товары</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (type === 'dental-burs') {
    return (
      <aside className={`bg-gray-50 rounded-2xl p-8 ${className}`}>
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
            <LinkIcon className="w-4 h-4 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Часто покупают вместе
          </h3>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/catalog/disposable-tips" 
            className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-300"
            aria-label="Перейти к наконечникам для боров"
          >
            <div>
              <h4 className="font-medium text-gray-900 mb-1">наконечники для боров</h4>
              <p className="text-sm text-gray-700">Угловые и прямые наконечники</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </Link>
          
          <Link 
            href="/catalog/disposable-instruments" 
            className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-300"
            aria-label="Перейти к одноразовым стоматологическим инструментам"
          >
            <div>
              <h4 className="font-medium text-gray-900 mb-1">одноразовые стоматологические инструменты</h4>
              <p className="text-sm text-gray-700">Полный набор инструментария</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </Link>
        </div>
      </aside>
    )
  }

  if (type === 'disposable-tips') {
    return (
      <aside className={`bg-gray-50 rounded-2xl p-8 ${className}`}>
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
            <LinkIcon className="w-4 h-4 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Дополнительно понадобится
          </h3>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/catalog/dental-burs" 
            className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-green-300"
            aria-label="Перейти к борам для наконечников"
          >
            <div>
              <h4 className="font-medium text-gray-900 mb-1">боры для наконечников</h4>
              <p className="text-sm text-gray-700">Алмазные и твердосплавные боры</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </Link>
        </div>
      </aside>
    )
  }

  return null
}
