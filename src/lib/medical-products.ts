export interface MedicalProduct {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  specialization?: string; // Специализация стоматолога
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
}


// Специализации стоматологов
export const specializations: Category[] = [
  {
    id: 'therapist',
    name: 'Терапевт',
    description: 'Лечение кариеса, пульпита, пломбирование',
    icon: 'Heart'
  },
  {
    id: 'orthopedist',
    name: 'Ортопед',
    description: 'Протезирование, коронки, виниры',
    icon: 'Crown'
  },
  {
    id: 'surgeon',
    name: 'Хирург',
    description: 'Удаление зубов, имплантация, операции',
    icon: 'Scissors'
  },
  {
    id: 'implantologist',
    name: 'Имплантолог',
    description: 'Установка имплантов, костная пластика',
    icon: 'Zap'
  },
  {
    id: 'periodontist',
    name: 'Пародонтолог',
    description: 'Лечение десен, пародонтита',
    icon: 'Shield'
  },
  {
    id: 'hygienist',
    name: 'Гигиенист',
    description: 'Профгигиена, профилактика',
    icon: 'Sparkles'
  },
  {
    id: 'endodontist',
    name: 'Эндодонтист',
    description: 'Лечение корневых каналов',
    icon: 'Syringe'
  }
];

// Старые категории (сохраняем для совместимости)
export const categories: Category[] = [
  {
    id: 'disposable-instruments',
    name: 'Одноразовые стоматологические инструменты',
    description: 'Одноразовые инструменты для стоматологических процедур',
    icon: 'Shield'
  },
  {
    id: 'impression-materials',
    name: 'Слепочные массы (альгинатные)',
    description: 'Альгинатные слепочные материалы для снятия оттисков',
    icon: 'Heart'
  },
  {
    id: 'dental-burs',
    name: 'Боры стоматологические',
    description: 'Стоматологические боры стандартных размеров',
    icon: 'Syringe'
  },
  {
    id: 'disposable-tips',
    name: 'Одноразовые наконечники',
    description: 'Одноразовые наконечники для стоматологических инструментов',
    icon: 'Droplets'
  },
  {
    id: 'retraction-cords',
    name: 'Ретракционные нити',
    description: 'Ретракционные нити для работы с десной',
    icon: 'TestTube'
  },
  {
    id: 'dental-materials',
    name: 'Стоматологические материалы',
    description: 'Гели, адгезивы и композитные материалы',
    icon: 'Droplets'
  },
  {
    id: 'endofiles',
    name: 'Эндофайлы',
    description: 'Эндодонтические инструменты для лечения корневых каналов',
    icon: 'Syringe'
  },
  {
    id: 'endodontic-instruments',
    name: 'Эндодонтические инструменты',
    description: 'Полный набор инструментов для эндодонтического лечения',
    icon: 'Syringe'
  },
  {
    id: 'isolation-materials',
    name: 'Материалы для изоляции',
    description: 'Раббердам и матрицы для изоляции рабочего поля',
    icon: 'Shield'
  },
  {
    id: 'sterilization-indicators',
    name: 'Индикаторы стерилизации',
    description: 'Индикаторы для контроля процесса стерилизации',
    icon: 'Activity'
  },
  {
    id: 'thermo-sealing-equipment',
    name: 'Термосварочные аппараты',
    description: 'Оборудование для термосварки упаковочных материалов',
    icon: 'Zap'
  },
  {
    id: 'sterilization-packages',
    name: 'Плоские пакеты для стерилизации',
    description: 'Плоские пакеты для упаковки инструментов перед стерилизацией',
    icon: 'Package'
  },
  {
    id: 'sterilization-rolls',
    name: 'Рулоны для стерилизации',
    description: 'Рулоны упаковочных материалов для стерилизации',
    icon: 'RotateCcw'
  },
  {
    id: 'wrapping-materials',
    name: 'Оберточные материалы',
    description: 'Материалы для обертывания инструментов перед стерилизацией',
    icon: 'Layers'
  }
];

export const medicalProducts: MedicalProduct[] = [
  {
    id: 'dental-mirror-disposable-50',
    name: 'Зеркало стоматологическое одноразовое (50 шт)',
    category: 'disposable-instruments',
    subcategory: 'mirrors',
    specialization: 'therapist',
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
    specialization: 'orthopedist',
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
    specialization: 'therapist',
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
    specialization: 'therapist',
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
    specialization: 'therapist',
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
    specialization: 'orthopedist',
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
  },
  {
    id: 'travex-37-etching-gel',
    name: 'Травекс 37 гель для травления эмали 1шпр.х3,5мл',
    category: 'dental-materials',
    subcategory: 'etching-gels',
    specialization: 'therapist',
    description: 'Гель для травления эмали с содержанием 37% ортофосфорной кислоты. Обеспечивает надежное травление поверхности зуба.',
    price: 176,
    image: '/images/travex-37-gel.jpg',
    images: ['/images/travex-37-gel.jpg'],
    inStock: true,
    stockCount: 50,
    brand: 'Travex',
    specifications: {
      'Объем': '3.5 мл',
      'Концентрация кислоты': '37%',
      'Форма выпуска': 'Шприц',
      'Цвет': 'Голубой',
      'pH': '0.6'
    },
    features: [
      'Высокая эффективность травления',
      'Удобная форма выпуска',
      'Контролируемое нанесение',
      'Быстрое действие'
    ],
    applications: [
      'Травление эмали',
      'Подготовка к адгезии',
      'Реставрационные работы',
      'Ортодонтическое лечение'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.7,
    reviews: 89
  },
  {
    id: 'air-flow-powder-neutral-ems',
    name: 'Порошок для Air flow Нейтральный, EMS 300г',
    category: 'dental-materials',
    subcategory: 'air-flow-powders',
    specialization: 'hygienist',
    description: 'Нейтральный порошок для системы Air Flow EMS. Обеспечивает эффективное удаление налета и пигментации.',
    price: 3815,
    image: '/images/air-flow-powder.jpg',
    images: ['/images/air-flow-powder.jpg'],
    inStock: true,
    stockCount: 25,
    brand: 'EMS',
    specifications: {
      'Вес': '300 г',
      'Тип': 'Нейтральный',
      'Размер частиц': '65 мкм',
      'pH': '7.0',
      'Совместимость': 'EMS Air Flow'
    },
    features: [
      'Мягкое воздействие',
      'Эффективное удаление налета',
      'Безопасность для эмали',
      'Высокая производительность'
    ],
    applications: [
      'Профессиональная гигиена',
      'Удаление пигментации',
      'Полировка зубов',
      'Подготовка к отбеливанию'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'rubber-dam-kit-dental-dams',
    name: 'Раббер Дам-набор листов Dental Dams Синие, Средней толщины, без запаха 36 шт',
    category: 'isolation-materials',
    subcategory: 'rubber-dam',
    specialization: 'therapist',
    description: 'Набор листов раббердама средней толщины для изоляции рабочего поля. Обеспечивает сухость и чистоту процедуры.',
    price: 540,
    image: '/images/rubber-dam-kit.jpg',
    images: ['/images/rubber-dam-kit.jpg'],
    inStock: true,
    stockCount: 40,
    brand: 'Dental Dams',
    specifications: {
      'Количество': '36 штук',
      'Толщина': 'Средняя',
      'Цвет': 'Синий',
      'Размер': '15x15 см',
      'Запах': 'Без запаха'
    },
    features: [
      'Средняя толщина',
      'Без запаха',
      'Хорошая эластичность',
      'Надежная изоляция'
    ],
    applications: [
      'Изоляция рабочего поля',
      'Эндодонтическое лечение',
      'Реставрационные работы',
      'Профилактика инфекций'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.6,
    reviews: 78
  },
  {
    id: 'adper-single-bond-2',
    name: 'Adper Single Bond 2 6 мл, 3M Espe',
    category: 'dental-materials',
    subcategory: 'adhesives',
    specialization: 'therapist',
    description: 'Универсальная адгезивная система 5-го поколения. Обеспечивает надежную адгезию к эмали и дентину.',
    price: 4420,
    image: '/images/adper-single-bond.jpg',
    images: ['/images/adper-single-bond.jpg'],
    inStock: true,
    stockCount: 15,
    brand: '3M Espe',
    specifications: {
      'Объем': '6 мл',
      'Поколение': '5-е поколение',
      'Тип': 'Универсальный',
      'pH': '3.2',
      'Срок годности': '24 месяца'
    },
    features: [
      'Универсальная адгезия',
      'Простота применения',
      'Высокая прочность связи',
      'Стабильные результаты'
    ],
    applications: [
      'Реставрационные работы',
      'Адгезия композитов',
      'Ортодонтическое лечение',
      'Протезирование'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.8,
    reviews: 234
  },
  {
    id: 'contour-matrices-metal',
    name: 'Матрицы 1.0976 контур.секц метал среди, твердые 50 мкм 10 шт ТОР ВМ',
    category: 'isolation-materials',
    subcategory: 'matrices',
    specialization: 'therapist',
    description: 'Контурные секционные металлические матрицы средней толщины. Обеспечивают точное восстановление анатомической формы зуба.',
    price: 105,
    image: '/images/contour-matrices.jpg',
    images: ['/images/contour-matrices.jpg'],
    inStock: true,
    stockCount: 80,
    brand: 'ТОР ВМ',
    specifications: {
      'Количество': '10 штук',
      'Толщина': '50 мкм',
      'Материал': 'Металл',
      'Тип': 'Секционные',
      'Размер': 'Средний'
    },
    features: [
      'Точное контурирование',
      'Прочность материала',
      'Легкая установка',
      'Многоразовое использование'
    ],
    applications: [
      'Восстановление зубов',
      'Реставрационные работы',
      'Формирование контактов',
      'Пломбирование'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE'],
    rating: 4.4,
    reviews: 67
  },
  {
    id: 'eurotape-sterilization-rolls',
    name: 'Рулоны EuroTape для стерилизации 1 шт, EuroType (150мм х 200м)',
    category: 'isolation-materials',
    subcategory: 'sterilization-tapes',
    specialization: 'surgeon',
    description: 'Рулоны для стерилизации EuroTape. Обеспечивают надежную упаковку инструментов для стерилизации.',
    price: 2085,
    image: '/images/eurotape-rolls.jpg',
    images: ['/images/eurotape-rolls.jpg'],
    inStock: true,
    stockCount: 20,
    brand: 'EuroType',
    specifications: {
      'Ширина': '150 мм',
      'Длина': '200 м',
      'Материал': 'Крафт-бумага',
      'Тип': 'Стерилизационная лента',
      'Температура': 'До 180°C'
    },
    features: [
      'Высокая прочность',
      'Индикация стерилизации',
      'Легкое использование',
      'Экономичность'
    ],
    applications: [
      'Упаковка инструментов',
      'Стерилизация',
      'Организация рабочего места',
      'Соблюдение стандартов'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'ISO 11607'],
    rating: 4.7,
    reviews: 45
  },
  {
    id: 'k-files-15-40-25mm',
    name: 'K.Files №15-40 25мм - 6шт.',
    category: 'endofiles',
    subcategory: 'k-files',
    specialization: 'endodontist',
    description: 'Набор К-файлов для ручной обработки корневых каналов. Размеры от №15 до №40, длина 25 мм.',
    price: 250,
    image: '/images/k-files-set.svg',
    images: ['/images/k-files-set.svg'],
    inStock: true,
    stockCount: 60,
    brand: 'EndoTech',
    specifications: {
      'Количество': '6 штук',
      'Размеры': '№15-40',
      'Длина': '25 мм',
      'Материал': 'Нержавеющая сталь',
      'Тип': 'Ручные файлы'
    },
    features: [
      'Высокое качество стали',
      'Точная калибровка',
      'Надежная фиксация',
      'Долговечность'
    ],
    applications: [
      'Обработка корневых каналов',
      'Эндодонтическое лечение',
      'Расширение каналов',
      'Подготовка к пломбированию'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.5,
    reviews: 89
  },
  {
    id: 'h-files-root-reamers-25mm',
    name: 'H-Files корневые буравы ручные, длина 25 мм, ISO-15-40 6шт',
    category: 'endofiles',
    subcategory: 'h-files',
    specialization: 'endodontist',
    description: 'Набор Н-файлов (корневых буравов) для ручной обработки корневых каналов. Размеры ISO 15-40, длина 25 мм.',
    price: 300,
    image: '/images/h-files-set.svg',
    images: ['/images/h-files-set.svg'],
    inStock: true,
    stockCount: 55,
    brand: 'EndoTech',
    specifications: {
      'Количество': '6 штук',
      'Размеры': 'ISO 15-40',
      'Длина': '25 мм',
      'Материал': 'Нержавеющая сталь',
      'Тип': 'Корневые буравы'
    },
    features: [
      'Эффективная обработка',
      'Прочная конструкция',
      'Точные размеры',
      'Удобная рукоятка'
    ],
    applications: [
      'Обработка корневых каналов',
      'Удаление дентина',
      'Расширение каналов',
      'Эндодонтическое лечение'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.6,
    reviews: 76
  },
  {
    id: 'sc-files-shape-memory',
    name: 'Файлы машинные с памятью формы SC 6шт. (SC-Assorted L25 x6)',
    category: 'endofiles',
    subcategory: 'rotary-files',
    specialization: 'endodontist',
    description: 'Набор машинных файлов с памятью формы SC. Обеспечивают эффективную обработку корневых каналов.',
    price: 1970,
    image: '/images/sc-files-set.svg',
    images: ['/images/sc-files-set.svg'],
    inStock: true,
    stockCount: 30,
    brand: 'ShapeTech',
    specifications: {
      'Количество': '6 штук',
      'Длина': '25 мм',
      'Тип': 'Машинные файлы',
      'Особенность': 'Память формы',
      'Совместимость': 'Эндодонтические наконечники'
    },
    features: [
      'Память формы',
      'Высокая эффективность',
      'Безопасность использования',
      'Долговечность'
    ],
    applications: [
      'Машинная обработка каналов',
      'Эндодонтическое лечение',
      'Расширение каналов',
      'Профессиональная эндодонтия'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.8,
    reviews: 123
  },
  {
    id: 'mta-canal-material',
    name: 'Канал МТА 3 шт.-материал для устранения дефектов корневых каналов, Омегадент',
    category: 'endofiles',
    subcategory: 'mta-materials',
    specialization: 'endodontist',
    description: 'МТА материал для устранения дефектов корневых каналов. Обеспечивает надежное пломбирование и герметизацию.',
    price: 800,
    image: '/images/mta-canal-material.jpg',
    images: ['/images/mta-canal-material.jpg'],
    inStock: true,
    stockCount: 35,
    brand: 'Омегадент',
    specifications: {
      'Количество': '3 штуки',
      'Тип': 'МТА материал',
      'Назначение': 'Пломбирование каналов',
      'Совместимость': 'Биосовместимый',
      'Срок годности': '24 месяца'
    },
    features: [
      'Биосовместимость',
      'Высокая прочность',
      'Герметичность',
      'Простота применения'
    ],
    applications: [
      'Пломбирование каналов',
      'Устранение дефектов',
      'Эндодонтическое лечение',
      'Репаративные процедуры'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.7,
    reviews: 98
  },
  {
    id: 'gradia-direct-anterior',
    name: 'Gradia Direct Anterior - цвет А-А1 1шпр х 4,7г.',
    category: 'dental-materials',
    subcategory: 'composites',
    specialization: 'therapist',
    description: 'Композитный материал для передних зубов цвета А-А1. Обеспечивает естественный вид реставраций.',
    price: 3150,
    image: '/images/gradia-direct-anterior.jpg',
    images: ['/images/gradia-direct-anterior.jpg'],
    inStock: true,
    stockCount: 20,
    brand: 'GC',
    specifications: {
      'Вес': '4.7 г',
      'Цвет': 'А-А1',
      'Назначение': 'Передние зубы',
      'Форма выпуска': 'Шприц',
      'Светоотверждение': 'Да'
    },
    features: [
      'Естественный цвет',
      'Высокая эстетика',
      'Прочность',
      'Легкость полировки'
    ],
    applications: [
      'Реставрация передних зубов',
      'Эстетические реставрации',
      'Восстановление формы',
      'Косметическая стоматология'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.9,
    reviews: 187
  },
  // БОРЫ
  {
    id: 'bc31c-diamond-bur',
    name: 'BC31C - Алмазный бор для турбины',
    category: 'dental-burs',
    subcategory: 'diamond-burs',
    specialization: 'therapist',
    description: 'Алмазный бор BC31C для турбины. Высокое качество алмазного покрытия обеспечивает эффективное препарирование.',
    price: 690,
    image: '/images/dental-burs.jpg',
    images: ['/images/dental-burs.jpg'],
    inStock: true,
    stockCount: 50,
    brand: 'Mani',
    specifications: {
      'Тип': 'Алмазный бор',
      'Форма': 'BC31C',
      'Упаковка': '1 упаковка - 5 штук',
      'Хвостовик': '2.35 мм',
      'Назначение': 'Турбина'
    },
    features: [
      'Высокое качество алмазов',
      'Эффективное препарирование',
      'Долговечность',
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
    reviews: 89
  },
  {
    id: 'cd50f-diamond-bur',
    name: 'CD50F - Алмазный бор для турбины',
    category: 'dental-burs',
    subcategory: 'diamond-burs',
    specialization: 'therapist',
    description: 'Алмазный бор CD50F для турбины. Обеспечивает точное препарирование и формирование полостей.',
    price: 650,
    image: '/images/dental-burs.jpg',
    images: ['/images/dental-burs.jpg'],
    inStock: true,
    stockCount: 45,
    brand: 'Mani',
    specifications: {
      'Тип': 'Алмазный бор',
      'Форма': 'CD50F',
      'Упаковка': '1 упаковка - 5 штук',
      'Хвостовик': '2.35 мм',
      'Назначение': 'Турбина'
    },
    features: [
      'Точное препарирование',
      'Высокое качество',
      'Долговечность',
      'Эффективность'
    ],
    applications: [
      'Препарирование кариеса',
      'Формирование полостей',
      'Обработка эмали',
      'Подготовка под пломбы'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.6,
    reviews: 76
  },
  {
    id: 'carbide-bur-701',
    name: 'Твердосплавный бор №701',
    category: 'dental-burs',
    subcategory: 'carbide-burs',
    specialization: 'therapist',
    description: 'Твердосплавный бор №701 для препарирования. Высокая прочность и долговечность.',
    price: 1355,
    image: '/images/dental-burs.jpg',
    images: ['/images/dental-burs.jpg'],
    inStock: true,
    stockCount: 30,
    brand: 'Mani',
    specifications: {
      'Тип': 'Твердосплавный бор',
      'Номер': '701',
      'Упаковка': '1 упаковка - 5 штук',
      'Хвостовик': '2.35 мм',
      'Материал': 'Твердый сплав'
    },
    features: [
      'Высокая прочность',
      'Долговечность',
      'Точное препарирование',
      'Надежность'
    ],
    applications: [
      'Препарирование кариеса',
      'Формирование полостей',
      'Обработка дентина',
      'Подготовка под пломбы'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.8,
    reviews: 112
  },
  // ИЗГОТОВЛЕНИЕ И ВРЕМЕННАЯ ФИКСАЦИЯ КОРОНОК И МОСТОВ
  {
    id: 'freegenol-temporary-pack-cement',
    name: 'Freegenol Temporary Pack-cement для временной фиксации',
    category: 'dental-materials',
    subcategory: 'temporary-materials',
    specialization: 'orthopedist',
    description: 'Временный цемент для фиксации коронок и мостов. Включает цемент 55г+20г и очиститель 2.5мл.',
    price: 5750,
    image: '/images/dental-materials.jpg',
    images: ['/images/dental-materials.jpg'],
    inStock: true,
    stockCount: 15,
    brand: 'GC',
    specifications: {
      'Код': '003440',
      'Назначение': 'Временная фиксация',
      'Состав': '55г+20г цемент + 2.5мл очиститель',
      'Тип': 'Временный цемент',
      'Производитель': 'GC'
    },
    features: [
      'Надежная временная фиксация',
      'Легкое удаление',
      'Биосовместимость',
      'Удобство использования'
    ],
    applications: [
      'Временная фиксация коронок',
      'Временная фиксация мостов',
      'Тестирование протезов',
      'Промежуточные этапы лечения'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.6,
    reviews: 67
  },
  // ПЛОМБИРОВАНИЕ КАНАЛОВ
  {
    id: 'paper-points-taper-02-15',
    name: 'Paper points, taper 02 №15, 200 шт',
    category: 'endofiles',
    subcategory: 'gutta-percha-points',
    specialization: 'endodontist',
    description: 'Бумажные штифты taper 02 №15 для пломбирования каналов. Упаковка 200 штук.',
    price: 245,
    image: '/images/endodontic-instruments.jpg',
    images: ['/images/endodontic-instruments.jpg'],
    inStock: true,
    stockCount: 80,
    brand: 'Diadent',
    specifications: {
      'Код': '0390105Dm.15',
      'Тип': 'Paper points',
      'Taper': '02',
      'Размер': '№15',
      'Количество': '200 штук'
    },
    features: [
      'Высокая впитывающая способность',
      'Точные размеры',
      'Стерильность',
      'Надежность'
    ],
    applications: [
      'Осушение каналов',
      'Пломбирование каналов',
      'Эндодонтическое лечение',
      'Подготовка к обтурации'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.5,
    reviews: 89
  },
  {
    id: 'gutta-percha-points-taper-04-25',
    name: 'Gutta-percha points, taper 04 №25, 60 шт',
    category: 'endofiles',
    subcategory: 'gutta-percha-points',
    specialization: 'endodontist',
    description: 'Гутаперчевые штифты taper 04 №25 для пломбирования каналов. Упаковка 60 штук.',
    price: 900,
    image: '/images/endodontic-instruments.jpg',
    images: ['/images/endodontic-instruments.jpg'],
    inStock: true,
    stockCount: 60,
    brand: 'Diadent',
    specifications: {
      'Код': '04.25gut',
      'Тип': 'Gutta-percha points',
      'Taper': '04',
      'Размер': '№25',
      'Количество': '60 штук',
      'Единица измерения': 'миллиметр'
    },
    features: [
      'Высокое качество гутаперчи',
      'Точные размеры',
      'Стерильность',
      'Надежная обтурация'
    ],
    applications: [
      'Пломбирование каналов',
      'Эндодонтическое лечение',
      'Обтурация корневых каналов',
      'Завершение эндодонтического лечения'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.7,
    reviews: 124
  },
  // ПЛОМБИРОВАНИЕ СВЕТОВОГО ОТВЕРЖДЕНИЯ
  {
    id: 'gaenial-posterior-a3-composite',
    name: 'G-aenial Posterior A3 реставрационный композит',
    category: 'dental-materials',
    subcategory: 'composites',
    specialization: 'therapist',
    description: 'Реставрационный композит G-aenial Posterior A3 для жевательных зубов. 1 шприц 5.5г.',
    price: 3510,
    image: '/images/gradia-direct-anterior.jpg',
    images: ['/images/gradia-direct-anterior.jpg'],
    inStock: true,
    stockCount: 25,
    brand: 'GC',
    specifications: {
      'Код': '004701',
      'Тип': 'Реставрационный композит',
      'Цвет': 'A3',
      'Назначение': 'Жевательные зубы',
      'Форма выпуска': '1 шприц 5.5г',
      'Производитель': 'GC (Japan)'
    },
    features: [
      'Высокая прочность',
      'Отличная эстетика',
      'Светоотверждение',
      'Долговечность'
    ],
    applications: [
      'Реставрация жевательных зубов',
      'Пломбирование полостей',
      'Восстановление формы',
      'Функциональные реставрации'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'gradia-direct-anterior-a3-hybrid',
    name: 'Gradia Direct Anterior A3 гибридный композит',
    category: 'dental-materials',
    subcategory: 'composites',
    specialization: 'therapist',
    description: 'Гибридный композит Gradia Direct Anterior A3 для передних зубов. 1 шприц 4г.',
    price: 2655,
    image: '/images/gradia-direct-anterior.jpg',
    images: ['/images/gradia-direct-anterior.jpg'],
    inStock: true,
    stockCount: 30,
    brand: 'GC',
    specifications: {
      'Код': '003364',
      'Тип': 'Гибридный композит',
      'Цвет': 'A3',
      'Назначение': 'Передние зубы',
      'Форма выпуска': '1 шприц 4г',
      'Производитель': 'GC (Japan)'
    },
    features: [
      'Отличная эстетика',
      'Высокая прочность',
      'Светоотверждение',
      'Легкость полировки'
    ],
    applications: [
      'Реставрация передних зубов',
      'Эстетические реставрации',
      'Восстановление формы',
      'Косметическая стоматология'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.9,
    reviews: 198
  },
  {
    id: 'gradia-direct-flo-a3-flowable',
    name: 'Gradia Direct Flo A3 гибридный текучий композит',
    category: 'dental-materials',
    subcategory: 'composites',
    specialization: 'therapist',
    description: 'Гибридный текучий композит Gradia Direct Flo A3. 2 шприца по 1.5г.',
    price: 3385,
    image: '/images/gradia-direct-anterior.jpg',
    images: ['/images/gradia-direct-anterior.jpg'],
    inStock: true,
    stockCount: 20,
    brand: 'GC',
    specifications: {
      'Код': '0110227.A3/GC003443',
      'Тип': 'Гибридный текучий композит',
      'Цвет': 'A3',
      'Форма выпуска': '2 шприца по 1.5г',
      'Производитель': 'GC (Japan)'
    },
    features: [
      'Текучая консистенция',
      'Отличная адгезия',
      'Светоотверждение',
      'Высокая эстетика'
    ],
    applications: [
      'Реставрация небольших полостей',
      'Герметизация фиссур',
      'Восстановление контуров',
      'Эстетические реставрации'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.7,
    reviews: 134
  },
  // ПЛОМБИРОВАНИЕ ХИМИЧЕСКОГО ОТВЕРЖДЕНИЯ
  {
    id: 'cocoa-butter-separation-agent',
    name: 'Какао-масло агент для разделения',
    category: 'dental-materials',
    subcategory: 'temporary-materials',
    specialization: 'therapist',
    description: 'Какао-масло агент для разделения, 10г. Используется для предотвращения прилипания материалов.',
    price: 1795,
    image: '/images/dental-materials.jpg',
    images: ['/images/dental-materials.jpg'],
    inStock: true,
    stockCount: 40,
    brand: 'GC',
    specifications: {
      'Код': '000387',
      'Тип': 'Агент для разделения',
      'Состав': 'Какао-масло',
      'Вес': '10г',
      'Производитель': 'GC (Japan)'
    },
    features: [
      'Натуральный состав',
      'Эффективное разделение',
      'Безопасность',
      'Легкость применения'
    ],
    applications: [
      'Предотвращение прилипания',
      'Разделение материалов',
      'Стоматологические процедуры',
      'Лабораторные работы'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.5,
    reviews: 67
  },
  {
    id: 'fuji-ix-a3-fluoride-cement',
    name: 'Fuji IX A3 фторвыделяющий реставрационный цемент',
    category: 'dental-materials',
    subcategory: 'glass-ionomers',
    specialization: 'therapist',
    description: 'Фторвыделяющий реставрационный цемент Fuji IX A3. 15г+8г.',
    price: 5150,
    image: '/images/dental-materials.jpg',
    images: ['/images/dental-materials.jpg'],
    inStock: true,
    stockCount: 20,
    brand: 'GC',
    specifications: {
      'Код': '003264',
      'Тип': 'Фторвыделяющий реставрационный цемент',
      'Цвет': 'A3',
      'Состав': '15г+8г',
      'Производитель': 'GC'
    },
    features: [
      'Фторвыделение',
      'Химическое отверждение',
      'Высокая прочность',
      'Биосовместимость'
    ],
    applications: [
      'Реставрация зубов',
      'Пломбирование полостей',
      'Восстановление формы',
      'Профилактика кариеса'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.6,
    reviews: 98
  },
  {
    id: 'epitex-refill-coarse-blue',
    name: 'Epitex Refill Coarse, грубый, синий',
    category: 'dental-materials',
    subcategory: 'polishing-materials',
    specialization: 'hygienist',
    description: 'Epitex Refill Coarse, грубый, синий. Картридж 10м.',
    price: 3205,
    image: '/images/dental-materials.jpg',
    images: ['/images/dental-materials.jpg'],
    inStock: true,
    stockCount: 15,
    brand: 'GC',
    specifications: {
      'Код': '000405',
      'Тип': 'Epitex Refill Coarse',
      'Зернистость': 'Грубый',
      'Цвет': 'Синий',
      'Форма выпуска': 'Картридж 10м',
      'Производитель': 'GC (Japan)'
    },
    features: [
      'Грубая зернистость',
      'Эффективная полировка',
      'Долговечность',
      'Удобство использования'
    ],
    applications: [
      'Полировка реставраций',
      'Финишная обработка',
      'Профессиональная гигиена',
      'Восстановление блеска'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.7,
    reviews: 76
  },
  {
    id: 'metal-strips-red-200',
    name: 'Metal Strips - металлические полоски, красные №200',
    category: 'isolation-materials',
    subcategory: 'matrices',
    specialization: 'therapist',
    description: 'Металлические полоски красные №200. 1 упаковка - 12 штук.',
    price: 10845,
    image: '/images/contour-matrices.jpg',
    images: ['/images/contour-matrices.jpg'],
    inStock: true,
    stockCount: 10,
    brand: 'GC',
    specifications: {
      'Код': '004848/0940284',
      'Тип': 'Metal Strips',
      'Цвет': 'Красный',
      'Размер': '№200',
      'Упаковка': '1 упаковка - 12 штук',
      'Производитель': 'GC'
    },
    features: [
      'Высокая прочность',
      'Точные размеры',
      'Многоразовое использование',
      'Надежность'
    ],
    applications: [
      'Восстановление контактов',
      'Реставрационные работы',
      'Формирование полостей',
      'Пломбирование'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.8,
    reviews: 89
  },
  // ПОСТОЯННАЯ ФИКСАЦИЯ КОРОНОК И МОСТОВ
  {
    id: 'fuji-plus-liquid-glass-ionomer',
    name: 'Fuji Plus Liquid - стеклоиономерный цемент для постоянной фиксации',
    category: 'dental-materials',
    subcategory: 'cements',
    specialization: 'orthopedist',
    description: 'Стеклоиономерный цемент для постоянной фиксации коронок и мостов. 7мл.',
    price: 4705,
    image: '/images/dental-materials.jpg',
    images: ['/images/dental-materials.jpg'],
    inStock: true,
    stockCount: 18,
    brand: 'GC',
    specifications: {
      'Код': '0130044/003215',
      'Тип': 'Стеклоиономерный цемент',
      'Назначение': 'Постоянная фиксация',
      'Объем': '7мл',
      'Производитель': 'GC (Japan)'
    },
    features: [
      'Надежная постоянная фиксация',
      'Фторвыделение',
      'Биосовместимость',
      'Долговечность'
    ],
    applications: [
      'Постоянная фиксация коронок',
      'Постоянная фиксация мостов',
      'Фиксация вкладок',
      'Протезирование'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.7,
    reviews: 112
  },
  // СЛЕПОЧНЫЕ МАТЕРИАЛЫ И АКСЕССУАРЫ
  {
    id: 'functional-sticks-iso-thermoplastic',
    name: 'Functional Sticks ISO функциональные термопластические палочки',
    category: 'impression-materials',
    subcategory: 'alginate',
    specialization: 'orthopedist',
    description: 'Функциональные термопластические палочки ISO. 120г.',
    price: 5300,
    image: '/images/alginate-material.jpg',
    images: ['/images/alginate-material.jpg'],
    inStock: true,
    stockCount: 12,
    brand: 'GC',
    specifications: {
      'Код': '000043/0930140',
      'Тип': 'Functional Sticks ISO',
      'Назначение': 'Функциональные термопластические палочки',
      'Вес': '120г',
      'Производитель': 'GC'
    },
    features: [
      'Термопластичность',
      'Функциональность',
      'Точность оттисков',
      'Удобство использования'
    ],
    applications: [
      'Снятие функциональных оттисков',
      'Изготовление протезов',
      'Ортодонтическое лечение',
      'Диагностические модели'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.6,
    reviews: 78
  },
  // ЭНДОДОНТИЧЕСКИЕ ИНСТРУМЕНТЫ И АКСЕССУАРЫ
  {
    id: 'd-finders-08-primary-canal',
    name: 'D-Finders №08 - файлы для первичного прохождения канала',
    category: 'endofiles',
    subcategory: 'hand-machine-files',
    specialization: 'endodontist',
    description: 'Файлы для первичного прохождения канала D-Finders №08. 1 упаковка - 6 штук.',
    price: 635,
    image: '/images/k-files-set.svg',
    images: ['/images/k-files-set.svg'],
    inStock: true,
    stockCount: 40,
    brand: 'Mani',
    specifications: {
      'Код': 'D-Finders- №08',
      'Тип': 'Файлы для первичного прохождения канала',
      'Размер': '№08',
      'Упаковка': '1 упаковка - 6 штук',
      'Производитель': 'Mani'
    },
    features: [
      'Эффективное прохождение каналов',
      'Высокое качество',
      'Надежность',
      'Точность'
    ],
    applications: [
      'Первичное прохождение каналов',
      'Эндодонтическое лечение',
      'Обработка корневых каналов',
      'Подготовка к пломбированию'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.7,
    reviews: 95
  },
  {
    id: 'h-files-hand-canal-reamers-15-40',
    name: 'H-Files - ручные корневые буравы № 15-40 25мм',
    category: 'endofiles',
    subcategory: 'h-files',
    specialization: 'endodontist',
    description: 'H-Files - ручные корневые буравы № 15-40, длина 25мм. 1 упаковка - 6 штук.',
    price: 305,
    image: '/images/h-files-set.svg',
    images: ['/images/h-files-set.svg'],
    inStock: true,
    stockCount: 60,
    brand: 'Mani',
    specifications: {
      'Код': '0332014',
      'Тип': 'H-Files - ручные корневые буравы',
      'Размеры': '№ 15-40',
      'Длина': '25мм',
      'Упаковка': '1 упаковка - 6 штук',
      'Производитель': 'Mani'
    },
    features: [
      'Эффективная обработка каналов',
      'Прочная конструкция',
      'Точные размеры',
      'Удобная рукоятка'
    ],
    applications: [
      'Обработка корневых каналов',
      'Удаление дентина',
      'Расширение каналов',
      'Эндодонтическое лечение'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.6,
    reviews: 87
  },
  {
    id: 'k-files-15-25mm-hand-reamers',
    name: 'K-Files № 15 25мм - ручные корневые буравы',
    category: 'endofiles',
    subcategory: 'k-files',
    specialization: 'endodontist',
    description: 'K-Files № 15, длина 25мм - ручные корневые буравы. 1 упаковка - 6 штук.',
    price: 240,
    image: '/images/k-files-set.svg',
    images: ['/images/k-files-set.svg'],
    inStock: true,
    stockCount: 70,
    brand: 'Mani',
    specifications: {
      'Код': '0322004',
      'Тип': 'K-Files - ручные корневые буравы',
      'Размер': '№ 15',
      'Длина': '25мм',
      'Упаковка': '1 упаковка - 6 штук',
      'Производитель': 'Mani'
    },
    features: [
      'Высокое качество стали',
      'Точная калибровка',
      'Надежная фиксация',
      'Долговечность'
    ],
    applications: [
      'Обработка корневых каналов',
      'Эндодонтическое лечение',
      'Расширение каналов',
      'Подготовка к пломбированию'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.5,
    reviews: 76
  },
  {
    id: 'peeso-reamers-machine-drills-1-28mm',
    name: 'Peeso Reamers - машинные сверла №1 28мм',
    category: 'endofiles',
    subcategory: 'rotary-files',
    specialization: 'endodontist',
    description: 'Peeso Reamers - машинные сверла №1, длина 28мм. 1 упаковка - 6 штук.',
    price: 740,
    image: '/images/sc-files-set.svg',
    images: ['/images/sc-files-set.svg'],
    inStock: true,
    stockCount: 35,
    brand: 'Mani',
    specifications: {
      'Код': '0371015',
      'Тип': 'Peeso Reamers - машинные сверла',
      'Размер': '№1',
      'Длина': '28мм',
      'Упаковка': '1 упаковка - 6 штук',
      'Производитель': 'Mani'
    },
    features: [
      'Машинная обработка',
      'Высокая эффективность',
      'Прочность',
      'Точность'
    ],
    applications: [
      'Машинная обработка каналов',
      'Эндодонтическое лечение',
      'Расширение каналов',
      'Профессиональная эндодонтия'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.8,
    reviews: 103
  },
  {
    id: 'spreaders-gutta-percha-instrument-15-25mm',
    name: 'Spreaders - инструмент для работы с гутаперчей №15 25мм',
    category: 'endofiles',
    subcategory: 'gutta-percha-points',
    specialization: 'endodontist',
    description: 'Spreaders - инструмент для работы с гутаперчей №15, длина 25мм. 1 упаковка - 6 штук.',
    price: 435,
    image: '/images/endodontic-instruments.jpg',
    images: ['/images/endodontic-instruments.jpg'],
    inStock: true,
    stockCount: 50,
    brand: 'Mani',
    specifications: {
      'Код': '0390190',
      'Тип': 'Spreaders - инструмент для работы с гутаперчей',
      'Размер': '№15',
      'Длина': '25мм',
      'Упаковка': '1 упаковка - 6 штук',
      'Производитель': 'Mani'
    },
    features: [
      'Эффективная работа с гутаперчей',
      'Точные размеры',
      'Прочность',
      'Удобство использования'
    ],
    applications: [
      'Работа с гутаперчей',
      'Пломбирование каналов',
      'Эндодонтическое лечение',
      'Обтурация каналов'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.6,
    reviews: 82
  },
  {
    id: 'ultrasonic-files-40-machine-drills',
    name: 'Ultrasonic Files - машинные сверла для ультразвуковой обработки каналов №40',
    category: 'endofiles',
    subcategory: 'rotary-files',
    specialization: 'endodontist',
    description: 'Ultrasonic Files - машинные сверла для ультразвуковой обработки каналов №40. 1 упаковка - 6 штук.',
    price: 435,
    image: '/images/sc-files-set.svg',
    images: ['/images/sc-files-set.svg'],
    inStock: true,
    stockCount: 45,
    brand: 'Mani',
    specifications: {
      'Код': '0391007',
      'Тип': 'Ultrasonic Files - машинные сверла для ультразвуковой обработки каналов',
      'Размер': '№40',
      'Упаковка': '1 упаковка - 6 штук',
      'Производитель': 'Mani'
    },
    features: [
      'Ультразвуковая обработка',
      'Высокая эффективность',
      'Безопасность',
      'Точность'
    ],
    applications: [
      'Ультразвуковая обработка каналов',
      'Эндодонтическое лечение',
      'Очистка каналов',
      'Профессиональная эндодонтия'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.7,
    reviews: 91
  },
  // ИНДИКАТОРЫ СТЕРИЛИЗАЦИИ
  {
    id: 'sterilization-indicator-tape-18mm',
    name: 'Индикаторная лента для стерилизации 18мм x 50м',
    category: 'sterilization-indicators',
    subcategory: 'indicator-tape',
    specialization: 'surgeon',
    description: 'Индикаторная лента для контроля стерилизации. Меняет цвет при достижении необходимой температуры.',
    price: 450,
    image: '/images/sterilization-indicator.jpg',
    images: ['/images/sterilization-indicator.jpg'],
    inStock: true,
    stockCount: 100,
    brand: 'Клинипак',
    specifications: {
      'Ширина': '18 мм',
      'Длина': '50 м',
      'Тип': 'Индикаторная лента',
      'Температура активации': '121°C',
      'Цвет': 'Бежевый → коричневый'
    },
    features: [
      'Визуальный контроль стерилизации',
      'Надежная индикация',
      'Легкое применение',
      'Соответствие стандартам'
    ],
    applications: [
      'Контроль стерилизации',
      'Упаковка инструментов',
      'Соблюдение протоколов',
      'Документирование процесса'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'ISO 11140'],
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'chemical-indicator-strips-100',
    name: 'Химические индикаторные полоски 100 шт',
    category: 'sterilization-indicators',
    subcategory: 'chemical-indicators',
    specialization: 'surgeon',
    description: 'Химические индикаторные полоски для контроля стерилизации в автоклаве.',
    price: 1200,
    image: '/images/chemical-indicator.jpg',
    images: ['/images/chemical-indicator.jpg'],
    inStock: true,
    stockCount: 50,
    brand: 'Клинипак',
    specifications: {
      'Количество': '100 штук',
      'Тип': 'Химический индикатор',
      'Температура': '121°C / 134°C',
      'Время': '15-20 минут',
      'Упаковка': 'Герметичная'
    },
    features: [
      'Точная индикация',
      'Быстрая реакция',
      'Надежность',
      'Простота использования'
    ],
    applications: [
      'Контроль автоклавирования',
      'Проверка стерилизации',
      'Качество обработки',
      'Протоколы безопасности'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'ISO 11140'],
    rating: 4.9,
    reviews: 89
  },
  // ТЕРМОСВАРОЧНЫЕ АППАРАТЫ
  {
    id: 'thermo-sealer-compact-300mm',
    name: 'Термосварочный аппарат компактный 300мм',
    category: 'thermo-sealing-equipment',
    subcategory: 'thermo-sealers',
    specialization: 'surgeon',
    description: 'Компактный термосварочный аппарат для упаковки инструментов перед стерилизацией.',
    price: 25000,
    image: '/images/thermo-sealer.jpg',
    images: ['/images/thermo-sealer.jpg'],
    inStock: true,
    stockCount: 5,
    brand: 'Клинипак',
    specifications: {
      'Ширина сварки': '300 мм',
      'Температура': '150-200°C',
      'Мощность': '800 Вт',
      'Размеры': '400x200x150 мм',
      'Вес': '3.5 кг'
    },
    features: [
      'Компактные размеры',
      'Надежная сварка',
      'Простота использования',
      'Энергоэффективность'
    ],
    applications: [
      'Упаковка инструментов',
      'Подготовка к стерилизации',
      'Создание герметичных пакетов',
      'Организация рабочего места'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'ISO 11607'],
    rating: 4.7,
    reviews: 23
  },
  {
    id: 'thermo-sealer-professional-500mm',
    name: 'Термосварочный аппарат профессиональный 500мм',
    category: 'thermo-sealing-equipment',
    subcategory: 'thermo-sealers',
    specialization: 'surgeon',
    description: 'Профессиональный термосварочный аппарат для больших объемов упаковки.',
    price: 45000,
    image: '/images/thermo-sealer-pro.jpg',
    images: ['/images/thermo-sealer-pro.jpg'],
    inStock: true,
    stockCount: 3,
    brand: 'Клинипак',
    specifications: {
      'Ширина сварки': '500 мм',
      'Температура': '150-250°C',
      'Мощность': '1500 Вт',
      'Размеры': '600x300x200 мм',
      'Вес': '8 кг'
    },
    features: [
      'Высокая производительность',
      'Профессиональное качество',
      'Надежность',
      'Долговечность'
    ],
    applications: [
      'Массовая упаковка',
      'Профессиональная стерилизация',
      'Клиники и больницы',
      'Стоматологические центры'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'ISO 11607'],
    rating: 4.8,
    reviews: 15
  },
  // ПЛОСКИЕ ПАКЕТЫ ДЛЯ СТЕРИЛИЗАЦИИ
  {
    id: 'sterilization-pouches-small-100x150',
    name: 'Плоские пакеты для стерилизации 100x150мм 100шт',
    category: 'sterilization-packages',
    subcategory: 'sterilization-pouches',
    specialization: 'surgeon',
    description: 'Плоские пакеты для стерилизации инструментов. Размер 100x150мм, упаковка 100 штук.',
    price: 850,
    image: '/images/sterilization-pouches.jpg',
    images: ['/images/sterilization-pouches.jpg'],
    inStock: true,
    stockCount: 200,
    brand: 'Клинипак',
    specifications: {
      'Размер': '100x150 мм',
      'Количество': '100 штук',
      'Материал': 'Бумага + пленка',
      'Температура': 'До 180°C',
      'Тип': 'Плоские пакеты'
    },
    features: [
      'Надежная герметизация',
      'Высокая прочность',
      'Индикация стерилизации',
      'Удобство использования'
    ],
    applications: [
      'Упаковка мелких инструментов',
      'Стерилизация в автоклаве',
      'Организация инструментов',
      'Соблюдение протоколов'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'ISO 11607'],
    rating: 4.6,
    reviews: 134
  },
  {
    id: 'sterilization-pouches-large-200x300',
    name: 'Плоские пакеты для стерилизации 200x300мм 50шт',
    category: 'sterilization-packages',
    subcategory: 'sterilization-pouches',
    specialization: 'surgeon',
    description: 'Большие плоские пакеты для стерилизации крупных инструментов. Размер 200x300мм.',
    price: 1200,
    image: '/images/sterilization-pouches-large.jpg',
    images: ['/images/sterilization-pouches-large.jpg'],
    inStock: true,
    stockCount: 150,
    brand: 'Клинипак',
    specifications: {
      'Размер': '200x300 мм',
      'Количество': '50 штук',
      'Материал': 'Бумага + пленка',
      'Температура': 'До 180°C',
      'Тип': 'Плоские пакеты'
    },
    features: [
      'Большой размер',
      'Надежная герметизация',
      'Высокая прочность',
      'Индикация стерилизации'
    ],
    applications: [
      'Упаковка крупных инструментов',
      'Стерилизация наборов',
      'Профессиональная стерилизация',
      'Клиническое применение'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'ISO 11607'],
    rating: 4.7,
    reviews: 89
  },
  // РУЛОНЫ ДЛЯ СТЕРИЛИЗАЦИИ
  {
    id: 'sterilization-roll-300mm-100m',
    name: 'Рулон для стерилизации 300мм x 100м',
    category: 'sterilization-rolls',
    subcategory: 'sterilization-rolls',
    specialization: 'surgeon',
    description: 'Рулон упаковочного материала для стерилизации. Ширина 300мм, длина 100м.',
    price: 2800,
    image: '/images/sterilization-roll.jpg',
    images: ['/images/sterilization-roll.jpg'],
    inStock: true,
    stockCount: 25,
    brand: 'Клинипак',
    specifications: {
      'Ширина': '300 мм',
      'Длина': '100 м',
      'Материал': 'Крафт-бумага + пленка',
      'Температура': 'До 180°C',
      'Тип': 'Рулон'
    },
    features: [
      'Экономичность',
      'Универсальность',
      'Высокая прочность',
      'Индикация стерилизации'
    ],
    applications: [
      'Упаковка инструментов',
      'Стерилизация в автоклаве',
      'Массовая упаковка',
      'Профессиональное применение'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'ISO 11607'],
    rating: 4.8,
    reviews: 67
  },
  {
    id: 'sterilization-roll-450mm-50m',
    name: 'Рулон для стерилизации 450мм x 50м',
    category: 'sterilization-rolls',
    subcategory: 'sterilization-rolls',
    specialization: 'surgeon',
    description: 'Широкий рулон для упаковки крупных инструментов. Ширина 450мм, длина 50м.',
    price: 3200,
    image: '/images/sterilization-roll-wide.jpg',
    images: ['/images/sterilization-roll-wide.jpg'],
    inStock: true,
    stockCount: 20,
    brand: 'Клинипак',
    specifications: {
      'Ширина': '450 мм',
      'Длина': '50 м',
      'Материал': 'Крафт-бумага + пленка',
      'Температура': 'До 180°C',
      'Тип': 'Рулон'
    },
    features: [
      'Широкая упаковка',
      'Высокое качество',
      'Надежность',
      'Профессиональное применение'
    ],
    applications: [
      'Упаковка крупных инструментов',
      'Стерилизация наборов',
      'Клиническое применение',
      'Больничные протоколы'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'ISO 11607'],
    rating: 4.9,
    reviews: 45
  },
  // ОБЕРТОЧНЫЕ МАТЕРИАЛЫ
  {
    id: 'sterilization-wrapping-paper-50cm',
    name: 'Оберточная бумага для стерилизации 50см x 50м',
    category: 'wrapping-materials',
    subcategory: 'wrapping-paper',
    specialization: 'surgeon',
    description: 'Оберточная бумага для стерилизации инструментов. Ширина 50см, длина 50м.',
    price: 1500,
    image: '/images/wrapping-paper.jpg',
    images: ['/images/wrapping-paper.jpg'],
    inStock: true,
    stockCount: 80,
    brand: 'Клинипак',
    specifications: {
      'Ширина': '50 см',
      'Длина': '50 м',
      'Материал': 'Крафт-бумага',
      'Температура': 'До 180°C',
      'Тип': 'Оберточная бумага'
    },
    features: [
      'Высокая прочность',
      'Хорошая проницаемость',
      'Легкость использования',
      'Экономичность'
    ],
    applications: [
      'Обертывание инструментов',
      'Стерилизация в автоклаве',
      'Создание пакетов',
      'Организация инструментов'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'ISO 11607'],
    rating: 4.7,
    reviews: 112
  },
  {
    id: 'sterilization-fabric-70cm',
    name: 'Оберточная ткань для стерилизации 70см x 1м',
    category: 'wrapping-materials',
    subcategory: 'wrapping-fabric',
    specialization: 'surgeon',
    description: 'Оберточная ткань для стерилизации инструментов. Размер 70см x 1м.',
    price: 450,
    image: '/images/wrapping-fabric.jpg',
    images: ['/images/wrapping-fabric.jpg'],
    inStock: true,
    stockCount: 60,
    brand: 'Клинипак',
    specifications: {
      'Размер': '70см x 1м',
      'Материал': 'Хлопчатобумажная ткань',
      'Температура': 'До 180°C',
      'Тип': 'Оберточная ткань',
      'Повторное использование': 'Да'
    },
    features: [
      'Многоразовое использование',
      'Высокая прочность',
      'Хорошая проницаемость',
      'Экономичность'
    ],
    applications: [
      'Обертывание инструментов',
      'Стерилизация в автоклаве',
      'Создание наборов',
      'Профессиональное применение'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'ISO 11607'],
    rating: 4.8,
    reviews: 78
  },
  // ЭНДОДОНТИЧЕСКИЕ ИНСТРУМЕНТЫ
  {
    id: 'endodontic-kit-basic',
    name: 'Базовый набор эндодонтических инструментов',
    category: 'endodontic-instruments',
    subcategory: 'endodontic-kits',
    specialization: 'endodontist',
    description: 'Базовый набор эндодонтических инструментов для лечения корневых каналов. Включает все необходимые инструменты для качественного эндодонтического лечения.',
    price: 4500,
    image: '/images/endodontic-instruments.jpg',
    images: ['/images/endodontic-instruments.jpg'],
    inStock: true,
    stockCount: 25,
    brand: 'EndoTech',
    specifications: {
      'Тип': 'Базовый набор',
      'Количество инструментов': '25 штук',
      'Материал': 'Нержавеющая сталь',
      'Упаковка': 'Стерильная',
      'Совместимость': 'Стандартные наконечники'
    },
    features: [
      'Полный набор инструментов',
      'Высокое качество стали',
      'Стерильная упаковка',
      'Удобная организация'
    ],
    applications: [
      'Эндодонтическое лечение',
      'Обработка корневых каналов',
      'Пломбирование каналов',
      'Профессиональная эндодонтия'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'endodontic-kit-professional',
    name: 'Профессиональный набор эндодонтических инструментов',
    category: 'endodontic-instruments',
    subcategory: 'endodontic-kits',
    specialization: 'endodontist',
    description: 'Профессиональный набор эндодонтических инструментов премиум-класса. Включает расширенный набор инструментов для сложных случаев.',
    price: 8500,
    image: '/images/endodontic-instruments.jpg',
    images: ['/images/endodontic-instruments.jpg'],
    inStock: true,
    stockCount: 15,
    brand: 'EndoTech Pro',
    specifications: {
      'Тип': 'Профессиональный набор',
      'Количество инструментов': '45 штук',
      'Материал': 'Титан + нержавеющая сталь',
      'Упаковка': 'Стерильная',
      'Особенности': 'Память формы, антибактериальное покрытие'
    },
    features: [
      'Расширенный набор инструментов',
      'Память формы',
      'Антибактериальное покрытие',
      'Профессиональное качество'
    ],
    applications: [
      'Сложные эндодонтические случаи',
      'Профессиональная эндодонтия',
      'Микроскопическая эндодонтия',
      'Ревизионное лечение'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'endodontic-ultrasonic-tips',
    name: 'Ультразвуковые наконечники для эндодонтии',
    category: 'endodontic-instruments',
    subcategory: 'ultrasonic-tips',
    specialization: 'endodontist',
    description: 'Набор ультразвуковых наконечников для эндодонтического лечения. Обеспечивают эффективную очистку корневых каналов.',
    price: 3200,
    image: '/images/endodontic-instruments.jpg',
    images: ['/images/endodontic-instruments.jpg'],
    inStock: true,
    stockCount: 30,
    brand: 'UltraEndo',
    specifications: {
      'Количество': '8 штук',
      'Тип': 'Ультразвуковые наконечники',
      'Материал': 'Титан',
      'Совместимость': 'Ультразвуковые аппараты',
      'Размеры': 'Различные'
    },
    features: [
      'Эффективная очистка каналов',
      'Высокое качество титана',
      'Различные размеры',
      'Долговечность'
    ],
    applications: [
      'Ультразвуковая очистка каналов',
      'Удаление обтурационного материала',
      'Обработка сложных каналов',
      'Ревизионное лечение'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.7,
    reviews: 124
  },
  {
    id: 'endodontic-microscopes',
    name: 'Эндодонтический микроскоп',
    category: 'endodontic-instruments',
    subcategory: 'microscopes',
    specialization: 'endodontist',
    description: 'Профессиональный эндодонтический микроскоп для точного лечения корневых каналов. Высокое разрешение и качественная оптика.',
    price: 125000,
    image: '/images/endodontic-instruments.jpg',
    images: ['/images/endodontic-instruments.jpg'],
    inStock: true,
    stockCount: 3,
    brand: 'MicroEndo',
    specifications: {
      'Увеличение': '4x - 25x',
      'Разрешение': '4K',
      'Освещение': 'LED',
      'Тип': 'Стоматологический микроскоп',
      'Гарантия': '2 года'
    },
    features: [
      'Высокое разрешение 4K',
      'LED освещение',
      'Эргономичный дизайн',
      'Цифровая запись'
    ],
    applications: [
      'Микроскопическая эндодонтия',
      'Сложные случаи лечения',
      'Обучение и демонстрация',
      'Документирование процедур'
    ],
    certifications: ['ГОСТ Р 51000.3-96', 'CE', 'FDA'],
    rating: 4.9,
    reviews: 23
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

// Функции для работы со специализациями
export function getProductsBySpecialization(specializationId: string): MedicalProduct[] {
  return medicalProducts.filter(product => product.specialization === specializationId);
}

export function getSpecializationById(id: string): Category | undefined {
  return specializations.find(spec => spec.id === id);
}

export function getProductsBySpecializationAndSubcategory(specializationId: string, subcategoryId: string): MedicalProduct[] {
  return medicalProducts.filter(product => 
    product.specialization === specializationId && 
    product.subcategory === subcategoryId
  );
}
