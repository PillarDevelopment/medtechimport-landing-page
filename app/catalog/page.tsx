'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Search, Filter, Grid, List, Star } from 'lucide-react'

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Все категории' },
    { id: 'diagnostic', name: 'Диагностическое оборудование' },
    { id: 'surgical', name: 'Хирургическое оборудование' },
    { id: 'laboratory', name: 'Лабораторное оборудование' },
    { id: 'resuscitation', name: 'Реанимационное оборудование' },
    { id: 'dental', name: 'Стоматологическое оборудование' },
    { id: 'physiotherapy', name: 'Физиотерапевтическое оборудование' }
  ]

  const products = [
    {
      id: 1,
      name: 'УЗИ аппарат Mindray DC-8',
      category: 'diagnostic',
      description: 'Ультразвуковой диагностический комплекс с цветным допплером',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: 'По запросу',
      rating: 4.8,
      reviews: 12,
      isNew: true
    },
    {
      id: 2,
      name: 'Операционный стол Maquet 1150.16',
      category: 'surgical',
      description: 'Электрический операционный стол с гидравлическим приводом',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: 'По запросу',
      rating: 4.9,
      reviews: 8,
      isNew: false
    },
    {
      id: 3,
      name: 'Анализатор крови Mindray BC-6800',
      category: 'laboratory',
      description: 'Автоматический гематологический анализатор',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: 'По запросу',
      rating: 4.7,
      reviews: 15,
      isNew: true
    },
    {
      id: 4,
      name: 'Аппарат ИВЛ Mindray SV300',
      category: 'resuscitation',
      description: 'Вентилятор легких для интенсивной терапии',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: 'По запросу',
      rating: 4.9,
      reviews: 6,
      isNew: false
    },
    {
      id: 5,
      name: 'Стоматологическая установка A-dec 500',
      category: 'dental',
      description: 'Современная стоматологическая установка с LED освещением',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: 'По запросу',
      rating: 4.6,
      reviews: 10,
      isNew: false
    },
    {
      id: 6,
      name: 'Аппарат УВЧ УВЧ-66',
      category: 'physiotherapy',
      description: 'Аппарат для ультравысокочастотной терапии',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: 'По запросу',
      rating: 4.5,
      reviews: 7,
      isNew: false
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Каталог оборудования
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Широкий ассортимент медицинского оборудования от ведущих производителей
            </p>
          </motion.div>
        </div>
      </section>

      {/* Фильтры и поиск */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Поиск */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Поиск по названию или описанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Фильтры */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Переключение вида */}
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Список товаров */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                По вашему запросу ничего не найдено
              </p>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`card hover:shadow-xl transition-shadow duration-300 ${
                    viewMode === 'list' ? 'flex space-x-6' : ''
                  }`}
                >
                  {/* Изображение */}
                  <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}>
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full object-cover rounded-lg ${
                          viewMode === 'list' ? 'h-32' : 'h-48'
                        }`}
                      />
                      {product.isNew && (
                        <span className="absolute top-2 right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
                          Новинка
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Информация о товаре */}
                  <div className={viewMode === 'list' ? 'flex-1' : ''}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary-500">
                        {product.price}
                      </span>
                      <button className="btn-primary">
                        Подробнее
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Пагинация */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50">
                Предыдущая
              </button>
              <button className="px-3 py-2 bg-primary-500 text-white rounded-lg">1</button>
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Следующая
              </button>
            </nav>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
