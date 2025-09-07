'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const sortOptions = [
  { value: 'popular', label: 'По популярности' },
  { value: 'price-asc', label: 'Цена: по возрастанию' },
  { value: 'price-desc', label: 'Цена: по убыванию' },
  { value: 'rating', label: 'По рейтингу' },
  { value: 'newest', label: 'Сначала новые' },
  { value: 'name', label: 'По названию' }
]

export default function SortSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(sortOptions[0])

  const handleOptionSelect = (option: typeof sortOptions[0]) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
      >
        <span className="text-sm text-gray-700">Сортировка:</span>
        <span className="text-sm font-medium text-gray-900">{selectedOption.label}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            <div className="py-1">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                    selectedOption.value === option.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
