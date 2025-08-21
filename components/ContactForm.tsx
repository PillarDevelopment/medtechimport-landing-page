'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Введите корректный email'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  company: z.string().min(2, 'Название компании должно содержать минимум 2 символа'),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form data:', data)
    setIsSubmitted(true)
    reset()
    setIsSubmitting(false)
    
    // Сброс статуса через 5 секунд
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      href: 'tel:+74951234567'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@medtechimport.ru',
      href: 'mailto:info@medtechimport.ru'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'г. Москва, ул. Примерная, д. 1',
      href: '#'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Получите бесплатную консультацию по выбору медицинского оборудования
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Контактная информация
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {contact.title}
                    </h4>
                    <a
                      href={contact.href}
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">
                Время работы
              </h4>
              <div className="space-y-2 text-gray-600">
                <div>Понедельник - Пятница: 9:00 - 18:00</div>
                <div>Суббота: 10:00 - 16:00</div>
                <div>Воскресенье: Выходной</div>
              </div>
            </div>
          </motion.div>

          {/* Форма */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Спасибо за заявку!
                  </h3>
                  <p className="text-gray-600">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя *
                      </label>
                      <input
                        type="text"
                        {...register('name')}
                        className="input-field"
                        placeholder="Ваше имя"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        className="input-field"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="input-field"
                        placeholder="+7 (999) 123-45-67"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Компания *
                      </label>
                      <input
                        type="text"
                        {...register('company')}
                        className="input-field"
                        placeholder="Название компании"
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Опишите, какое оборудование вас интересует..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Отправка...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Отправить заявку</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
