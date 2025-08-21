# Инструкции по развертыванию

## 🚀 Быстрый старт

### Локальная разработка

1. **Клонируйте репозиторий:**
```bash
git clone <repository-url>
cd landing
```

2. **Установите зависимости:**
```bash
npm install
```

3. **Запустите проект:**
```bash
npm run dev
```

4. **Откройте браузер:**
```
http://localhost:3000
```

## 🌐 Развертывание на продакшн

### Вариант 1: Vercel (рекомендуется)

1. **Подключите репозиторий к Vercel:**
   - Зайдите на [vercel.com](https://vercel.com)
   - Создайте аккаунт или войдите
   - Нажмите "New Project"
   - Подключите ваш GitHub/GitLab репозиторий

2. **Настройте переменные окружения (если нужно):**
   - В настройках проекта добавьте переменные окружения
   - Например: `NEXT_PUBLIC_API_URL=https://api.yourdomain.com`

3. **Деплой произойдет автоматически:**
   - При каждом push в main ветку
   - Vercel автоматически соберет и развернет проект

### Вариант 2: Netlify

1. **Подключите к Netlify:**
   - Зайдите на [netlify.com](https://netlify.com)
   - Создайте аккаунт
   - Нажмите "New site from Git"
   - Подключите репозиторий

2. **Настройте сборку:**
   - Build command: `npm run build`
   - Publish directory: `.next`

### Вариант 3: VPS/Хостинг

1. **Подготовьте сервер:**
```bash
# Установите Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Установите PM2 для управления процессами
npm install -g pm2
```

2. **Клонируйте проект:**
```bash
git clone <repository-url>
cd landing
npm install
```

3. **Соберите проект:**
```bash
npm run build
```

4. **Запустите с PM2:**
```bash
pm2 start npm --name "medical-landing" -- start
pm2 save
pm2 startup
```

5. **Настройте Nginx (опционально):**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 Настройка домена

### Для Vercel:
1. В настройках проекта перейдите в "Domains"
2. Добавьте ваш домен
3. Настройте DNS записи согласно инструкциям Vercel

### Для Netlify:
1. В настройках сайта перейдите в "Domain management"
2. Добавьте custom domain
3. Настройте DNS записи

## 📧 Настройка форм

### Текущая реализация:
- Формы работают в демо-режиме
- Данные выводятся в консоль браузера

### Для продакшна:

1. **Создайте API endpoint:**
```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Здесь добавьте логику отправки email
  // Например, через Nodemailer или сервис типа SendGrid
  
  return NextResponse.json({ success: true })
}
```

2. **Обновите компонент ContactForm:**
```typescript
const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    
    if (response.ok) {
      setIsSubmitted(true)
      reset()
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## 🔍 SEO оптимизация

### Уже настроено:
- ✅ Мета-теги для всех страниц
- ✅ Open Graph разметка
- ✅ Структурированные данные
- ✅ Человекопонятные URL

### Дополнительно:

1. **Создайте sitemap.xml:**
```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
    },
    {
      url: 'https://yourdomain.com/about',
      lastModified: new Date(),
    },
    // Добавьте все страницы
  ]
}
```

2. **Создайте robots.txt:**
```txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## 📊 Аналитика

### Google Analytics:
1. Создайте аккаунт в Google Analytics
2. Добавьте код отслеживания в `app/layout.tsx`:
```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🔒 Безопасность

### Рекомендации:
1. **HTTPS:** Всегда используйте HTTPS в продакшне
2. **Заголовки безопасности:** Добавьте security headers
3. **Валидация форм:** Уже реализована с Zod
4. **Rate limiting:** Добавьте для API endpoints

### Security Headers (next.config.js):
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## 📱 PWA (Progressive Web App)

### Для превращения в PWA:

1. **Установите зависимости:**
```bash
npm install next-pwa
```

2. **Обновите next.config.js:**
```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // ваши настройки
})
```

3. **Создайте manifest.json:**
```json
{
  "name": "МедТехИмпорт",
  "short_name": "МедТех",
  "description": "Поставка медицинского оборудования",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## 🚀 Мониторинг производительности

### Vercel Analytics:
- Автоматически включены в Vercel
- Показывают Core Web Vitals
- Аналитика пользователей

### Lighthouse:
- Запускайте регулярные проверки
- Оптимизируйте изображения
- Минимизируйте JavaScript

## 📞 Поддержка

### Полезные команды:
```bash
# Проверка типов
npm run type-check

# Линтинг
npm run lint

# Сборка для продакшна
npm run build

# Запуск продакшн версии
npm start
```

### Логи:
- Vercel: Встроенные логи в dashboard
- PM2: `pm2 logs medical-landing`
- Nginx: `/var/log/nginx/access.log`

---

**Удачи с вашим проектом! 🎉**
