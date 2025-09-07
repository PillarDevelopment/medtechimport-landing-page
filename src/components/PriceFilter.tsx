'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface PriceFilterProps {
  maxPrice: number
}

export default function PriceFilter({ maxPrice }: PriceFilterProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [priceRange, setPriceRange] = useState([0, maxPrice])

  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange]
    newRange[index] = value
    setPriceRange(newRange)
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
      >
        Цена
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      
      {isExpanded && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(0, Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="От"
            />
            <span className="text-gray-500">—</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="До"
            />
          </div>
          
          <div className="relative">
            <input
              type="range"
              min="0"
              max={maxPrice}
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(0, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="range"
              min="0"
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider absolute top-0"
            />
          </div>
          
          <div className="flex justify-between text-sm text-gray-600">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      )}
    </div>
  )
}
