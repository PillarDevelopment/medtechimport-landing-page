'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Введите корректный email'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  company: z.string().optional(),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов')
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form data:', data)
    setIsSubmitted(true)
    reset()
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Спасибо за обращение!
            </h2>
            <p className="text-gray-600 mb-6">
              Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Отправить еще одно сообщение
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и наши специалисты свяжутся с вами для консультации 
            по медицинскому оборудованию
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Имя *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="input-field w-full"
                  placeholder="Ваше имя"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="input-field w-full"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="input-field w-full"
                  placeholder="+7 (999) 123-45-67"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Компания
                </label>
                <input
                  {...register('company')}
                  type="text"
                  id="company"
                  className="input-field w-full"
                  placeholder="Название компании"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Сообщение *
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                className="input-field w-full resize-none"
                placeholder="Опишите, какое оборудование вас интересует..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
