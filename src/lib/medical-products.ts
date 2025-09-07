export interface MedicalProduct {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  inStock: boolean;
  stockCount: number;
  brand: string;
  specifications: {
    [key: string]: string;
  };
  features: string[];
  applications: string[];
  certifications: string[];
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'disposable-instruments',
    name: 'Одноразовые стоматологические инструменты',
    description: 'Одноразовые инструменты для стоматологических процедур',
    icon: 'Shield',
    subcategories: [
      { id: 'mirrors', name: 'Стоматологические зеркала', description: 'Одноразовые зеркала различных размеров' },
      { id: 'explorers', name: 'Зонды и экскаваторы', description: 'Одноразовые зонды и экскаваторы' },
      { id: 'tweezers', name: 'Пинцеты', description: 'Одноразовые пинцеты для стоматологии' },
      { id: 'spatulas', name: 'Шпатели', description: 'Одноразовые шпатели для замешивания' }
    ]
  },
  {
    id: 'impression-materials',
    name: 'Слепочные массы (альгинатные)',
    description: 'Альгинатные слепочные материалы для снятия оттисков',
    icon: 'Heart',
    subcategories: [
      { id: 'alginate', name: 'Альгинат', description: 'Альгинатные слепочные массы' },
      { id: 'mixing-bowls', name: 'Чашки для замешивания', description: 'Одноразовые чашки для замешивания' },
      { id: 'spatulas-mixing', name: 'Шпатели для замешивания', description: 'Шпатели для работы с альгинатом' },
      { id: 'trays', name: 'Слепочные ложки', description: 'Одноразовые слепочные ложки' }
    ]
  },
  {
    id: 'dental-burs',
    name: 'Боры стоматологические',
    description: 'Стоматологические боры стандартных размеров',
    icon: 'Syringe',
    subcategories: [
      { id: 'diamond-burs', name: 'Алмазные боры', description: 'Алмазные боры различных форм и размеров' },
      { id: 'carbide-burs', name: 'Твердосплавные боры', description: 'Твердосплавные боры для препарирования' },
      { id: 'finishing-burs', name: 'Финишные боры', description: 'Боры для финишной обработки' },
      { id: 'polishing-burs', name: 'Полировочные боры', description: 'Боры для полировки реставраций' }
    ]
  },
  {
    id: 'disposable-tips',
    name: 'Одноразовые наконечники',
    description: 'Одноразовые наконечники для стоматологических инструментов',
    icon: 'Droplets',
    subcategories: [
      { id: 'turbine-tips', name: 'Наконечники для турбины', description: 'Одноразовые наконечники для турбины' },
      { id: 'contra-angle-tips', name: 'Наконечники для контраугла', description: 'Одноразовые наконечники для контраугла' },
      { id: 'straight-tips', name: 'Прямые наконечники', description: 'Одноразовые прямые наконечники' },
      { id: 'prophy-tips', name: 'Наконечники для профгигиены', description: 'Наконечники для профессиональной гигиены' }
    ]
  },
  {
    id: 'retraction-cords',
    name: 'Ретракционные нити',
    description: 'Ретракционные нити для работы с десной',
    icon: 'TestTube',
    subcategories: [
      { id: 'plain-cords', name: 'Обычные ретракционные нити', description: 'Стандартные ретракционные нити' },
      { id: 'impregnated-cords', name: 'Пропитанные нити', description: 'Ретракционные нити с пропиткой' },
      { id: 'hemostatic-cords', name: 'Гемостатические нити', description: 'Нить с гемостатическим эффектом' },
      { id: 'sizes', name: 'Различные размеры', description: 'Нить разных диаметров и длин' }
    ]
  }
];

export const medicalProducts: MedicalProduct[] = [
  {
    id: 'dental-mirror-disposable-50',
    name: 'Зеркало стоматологическое одноразовое (50 шт)',
    category: 'disposable-instruments',
    subcategory: 'mirrors',
    description: 'Одноразовые стоматологические зеркала с качественным отражающим покрытием. Обеспечивают отличную видимость рабочего поля.',
    price: 1200,
    originalPrice: 1500,
    image: '/images/dental-mirror.jpg',
    images: ['/images/dental-mirror.jpg', '/images/dental-mirror-2.jpg'],
    inStock: true,
    stockCount: 200,
    brand: 'DentPro',
    specifications: {
      'Диаметр зеркала': '18 мм',
      'Длина ручки': '180 мм',
      'Материал': 'Нержавеющая сталь',
      'Упаковка': '50 штук',
      'Стерильность': 'Стерильная'
    },
    features: [
      'Высокое качество отражения',
      'Удобная ручка',
      'Стерильность',
      'Одноразовое использование'
    ],
    applications: [
      'Осмотр полости рта',
      'Стоматологические процедуры',
      'Ортодонтическое лечение',
      'Хирургические вмешательства'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'alginate-impression-material-500g',
    name: 'Альгинат слепочный 500г',
    category: 'impression-materials',
    subcategory: 'alginate',
    description: 'Высококачественная альгинатная слепочная масса для снятия оттисков. Обеспечивает точное воспроизведение деталей.',
    price: 850,
    image: '/images/alginate-material.jpg',
    images: ['/images/alginate-material.jpg', '/images/alginate-material-2.jpg'],
    inStock: true,
    stockCount: 45,
    brand: 'AlginatePro',
    specifications: {
      'Вес': '500 г',
      'Время схватывания': '2-3 минуты',
      'Цвет': 'Розовый',
      'Температура': '18-22°C',
      'Срок годности': '24 месяца'
    },
    features: [
      'Быстрое схватывание',
      'Высокая точность',
      'Легкое замешивание',
      'Стабильные свойства'
    ],
    applications: [
      'Снятие оттисков',
      'Изготовление протезов',
      'Ортодонтическое лечение',
      'Диагностические модели'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'diamond-bur-set-10pcs',
    name: 'Набор алмазных боров 10 шт',
    category: 'dental-burs',
    subcategory: 'diamond-burs',
    description: 'Набор алмазных боров различных форм и размеров для препарирования зубов. Высокое качество алмазного покрытия.',
    price: 2500,
    image: '/images/diamond-burs.jpg',
    images: ['/images/diamond-burs.jpg', '/images/diamond-burs-2.jpg'],
    inStock: true,
    stockCount: 30,
    brand: 'DiamondTech',
    specifications: {
      'Количество': '10 штук',
      'Размеры': '101, 102, 103, 104, 105',
      'Форма': 'Круглые, конусные',
      'Зернистость': 'Средняя',
      'Хвостовик': '2.35 мм'
    },
    features: [
      'Высокое качество алмазов',
      'Долговечность',
      'Точное препарирование',
      'Минимальный нагрев'
    ],
    applications: [
      'Препарирование кариеса',
      'Формирование полостей',
      'Обработка эмали',
      'Подготовка под пломбы'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.7,
    reviews: 124
  },
  {
    id: 'turbine-tip-disposable-100',
    name: 'Наконечник турбинный одноразовый (100 шт)',
    category: 'disposable-tips',
    subcategory: 'turbine-tips',
    description: 'Одноразовые наконечники для турбины с антибактериальным покрытием. Обеспечивают стерильность процедур.',
    price: 1800,
    image: '/images/turbine-tips.jpg',
    images: ['/images/turbine-tips.jpg'],
    inStock: true,
    stockCount: 75,
    brand: 'TurbineSafe',
    specifications: {
      'Упаковка': '100 штук',
      'Материал': 'Пластик + металл',
      'Совместимость': 'Стандартная турбина',
      'Покрытие': 'Антибактериальное',
      'Стерильность': 'Стерильная'
    },
    features: [
      'Антибактериальное покрытие',
      'Легкая установка',
      'Надежная фиксация',
      'Одноразовое использование'
    ],
    applications: [
      'Препарирование зубов',
      'Снятие пломб',
      'Обработка коронок',
      'Профилактические процедуры'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.6,
    reviews: 67
  },
  {
    id: 'retraction-cord-hemostatic-5m',
    name: 'Ретракционная нить гемостатическая 5м',
    category: 'retraction-cords',
    subcategory: 'hemostatic-cords',
    description: 'Ретракционная нить с гемостатическим эффектом для работы с десной. Обеспечивает сухость рабочего поля.',
    price: 450,
    image: '/images/retraction-cord.jpg',
    images: ['/images/retraction-cord.jpg'],
    inStock: true,
    stockCount: 60,
    brand: 'GingiCare',
    specifications: {
      'Длина': '5 метров',
      'Диаметр': '0.5 мм',
      'Материал': 'Хлопок + гемостатик',
      'Цвет': 'Бежевый',
      'Упаковка': 'Стерильная'
    },
    features: [
      'Гемостатический эффект',
      'Мягкая структура',
      'Легкое введение',
      'Хорошая видимость'
    ],
    applications: [
      'Ретракция десны',
      'Подготовка к пломбированию',
      'Снятие оттисков',
      'Коронковые работы'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.8,
    reviews: 92
  },
  {
    id: 'mixing-bowl-disposable-50',
    name: 'Чашка для замешивания одноразовая (50 шт)',
    category: 'impression-materials',
    subcategory: 'mixing-bowls',
    description: 'Одноразовые чашки для замешивания альгинатных масс. Удобная форма и антистатическое покрытие.',
    price: 320,
    image: '/images/mixing-bowl.jpg',
    images: ['/images/mixing-bowl.jpg'],
    inStock: true,
    stockCount: 120,
    brand: 'MixPro',
    specifications: {
      'Объем': '50 мл',
      'Материал': 'Пластик',
      'Упаковка': '50 штук',
      'Покрытие': 'Антистатическое',
      'Форма': 'Круглая'
    },
    features: [
      'Антистатическое покрытие',
      'Удобная форма',
      'Легкое замешивание',
      'Одноразовое использование'
    ],
    applications: [
      'Замешивание альгината',
      'Приготовление слепочных масс',
      'Смешивание материалов',
      'Стоматологические процедуры'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE'],
    rating: 4.5,
    reviews: 43
  }
];

export function getProductsByCategory(categoryId: string): MedicalProduct[] {
  return medicalProducts.filter(product => product.category === categoryId);
}

export function getProductById(id: string): MedicalProduct | undefined {
  return medicalProducts.find(product => product.id === id);
}

export function searchProducts(query: string): MedicalProduct[] {
  const lowercaseQuery = query.toLowerCase();
  return medicalProducts.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery)
  );
}
