// Конфигурация для разных окружений
export const config = {
  // URL API сервера
  apiUrl: process.env.NEXT_PUBLIC_API_URL || '/api/send-message',
  
  // Определяем окружение
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // Дополнительные настройки
  timeout: 10000, // 10 секунд таймаут для запросов
}
