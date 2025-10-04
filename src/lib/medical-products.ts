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
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
}

// Специализации стоматологов
export const specializations: Category[] = [
  {
    id: 'therapist',
    name: 'Терапевт',
    description: 'Лечение кариеса, пульпита, пломбирование',
    icon: 'Heart',
    subcategories: [
      { id: 'anesthetics', name: 'Анестетики', description: 'Местные анестетики для обезболивания' },
      { id: 'composites', name: 'Композиты (светоотверждаемые)', description: 'Композитные материалы для пломбирования' },
      { id: 'glass-ionomers', name: 'Стеклоиономеры', description: 'Стеклоиономерные цементы' },
      { id: 'bonds-adhesives', name: 'Бонды/адгезивы', description: 'Адгезивные системы' },
      { id: 'matrices', name: 'Матрицы', description: 'Матрицы для восстановления зубов' },
      { id: 'wedges', name: 'Клинья', description: 'Клинья для фиксации матриц' },
      { id: 'rubber-dam', name: 'Коффердам', description: 'Раббердам для изоляции' },
      { id: 'etching-gels', name: 'Гели для травления', description: 'Ортофосфорная кислота' },
      { id: 'endodontic-tools', name: 'Эндодонтические инструменты', description: 'Файлы, иглы для лечения каналов' },
      { id: 'calcium-hydroxide', name: 'Кальций-гидроксидные препараты', description: 'Препараты для лечения пульпита' }
    ]
  },
  {
    id: 'orthopedist',
    name: 'Ортопед',
    description: 'Протезирование, коронки, виниры',
    icon: 'Crown',
    subcategories: [
      { id: 'impression-materials', name: 'Оттискные материалы', description: 'Силиконы, альгинаты' },
      { id: 'gypsum', name: 'Гипс', description: 'Гипсовые материалы для моделей' },
      { id: 'cements', name: 'Цементы', description: 'Стеклоиономерные, композитные цементы' },
      { id: 'temporary-materials', name: 'Временные пломбировочные материалы', description: 'Материалы для временных реставраций' },
      { id: 'veneer-composites', name: 'Композиты для фиксации виниров', description: 'Адгезивы для виниров' },
      { id: 'individual-trays', name: 'Индивидуальные ложки', description: 'Ложки для снятия оттисков' },
      { id: 'laboratory-materials', name: 'Лабораторные материалы', description: 'Восковки, пластмассы' }
    ]
  },
  {
    id: 'surgeon',
    name: 'Хирург',
    description: 'Удаление зубов, имплантация, операции',
    icon: 'Scissors',
    subcategories: [
      { id: 'anesthetics', name: 'Анестетики', description: 'Местные анестетики' },
      { id: 'suture-materials', name: 'Шовный материал', description: 'Шелк, викрил' },
      { id: 'sterile-wipes', name: 'Стерильные салфетки', description: 'Стерильные материалы' },
      { id: 'gloves', name: 'Перчатки', description: 'Стерильные перчатки' },
      { id: 'saline', name: 'Физиологический раствор', description: 'Раствор для промывания' },
      { id: 'antiseptics', name: 'Хлоргексидин/антисептики', description: 'Антисептические растворы' },
      { id: 'disposable-needles', name: 'Одноразовые иглы и шприцы', description: 'Инъекционные материалы' },
      { id: 'surgical-burs', name: 'Боры хирургические', description: 'Боры для хирургических процедур' },
      { id: 'osteoplastic-materials', name: 'Остеопластический материал', description: 'Материалы для костной пластики' },
      { id: 'membranes', name: 'Мембраны', description: 'Мембраны для имплантации' }
    ]
  },
  {
    id: 'implantologist',
    name: 'Имплантолог',
    description: 'Установка имплантов, костная пластика',
    icon: 'Zap',
    subcategories: [
      { id: 'implants-abutments', name: 'Импланты и абатменты', description: 'Имплантационные системы' },
      { id: 'surgical-kits', name: 'Хирургические наборы', description: 'Наборы для имплантации' },
      { id: 'osteoplastic-materials', name: 'Остеопластические материалы', description: 'Костный заменитель, мембраны' },
      { id: 'suture-materials', name: 'Шовный материал', description: 'Материалы для ушивания' },
      { id: 'anesthetics', name: 'Анестетики', description: 'Местные анестетики' },
      { id: 'saline', name: 'Физиораствор', description: 'Раствор для промывания' },
      { id: 'sterile-wipes', name: 'Стерильные салфетки', description: 'Стерильные материалы' },
      { id: 'antiseptics', name: 'Антисептики', description: 'Антисептические растворы' }
    ]
  },
  {
    id: 'periodontist',
    name: 'Пародонтолог',
    description: 'Лечение десен, пародонтита',
    icon: 'Shield',
    subcategories: [
      { id: 'scalers', name: 'Скалеры', description: 'Инструменты для удаления зубного камня' },
      { id: 'ultrasonic-tips', name: 'Ультразвуковые насадки', description: 'Наконечники для ультразвука' },
      { id: 'curettes', name: 'Кюреты', description: 'Кюреты для пародонтологии' },
      { id: 'antiseptics', name: 'Антисептики', description: 'Хлоргексидин, перекись' },
      { id: 'suture-materials', name: 'Шовный материал', description: 'Материалы для ушивания' },
      { id: 'membranes', name: 'Мембраны', description: 'Мембраны для регенерации' },
      { id: 'osteoplastic-materials', name: 'Остеопластические материалы', description: 'Материалы для костной пластики' },
      { id: 'local-antibiotics', name: 'Местные антибиотики', description: 'Антибактериальные препараты' },
      { id: 'chlorhexidine-gels', name: 'Гели с хлоргексидином', description: 'Гели для лечения десен' },
      { id: 'anesthetics', name: 'Анестетики', description: 'Местные анестетики' }
    ]
  },
  {
    id: 'hygienist',
    name: 'Гигиенист',
    description: 'Профгигиена, профилактика',
    icon: 'Sparkles',
    subcategories: [
      { id: 'airflow-powders', name: 'Абразивные порошки для AirFlow', description: 'Порошки для профессиональной гигиены' },
      { id: 'polishing-pastes', name: 'Пасты для полировки', description: 'Полировочные пасты' },
      { id: 'brushes-rubber-cups', name: 'Щетки и резинки для наконечников', description: 'Наконечники для полировки' },
      { id: 'fluoride-varnishes', name: 'Фторсодержащие лаки и гели', description: 'Фторсодержащие препараты' },
      { id: 'ultrasonic-consumables', name: 'Расходники для ультразвуковых скейлеров', description: 'Наконечники для ультразвука' },
      { id: 'saliva-ejectors', name: 'Слюноотсосы', description: 'Одноразовые слюноотсосы' },
      { id: 'disposable-cups-wipes', name: 'Одноразовые стаканы и салфетки', description: 'Одноразовые материалы' }
    ]
  },
  {
    id: 'endodontist',
    name: 'Эндодонтист',
    description: 'Лечение корневых каналов',
    icon: 'Syringe',
    subcategories: [
      { id: 'hand-machine-files', name: 'Файлы ручные и машинные', description: 'Инструменты для обработки каналов' },
      { id: 'irrigation-solutions', name: 'Ирригационные растворы', description: 'Гипохлорит, EDTA, хлоргексидин' },
      { id: 'syringes-needles', name: 'Шприцы, иглы', description: 'Инструменты для ирригации' },
      { id: 'gutta-percha-points', name: 'Гутаперчевые штифты', description: 'Материалы для пломбирования каналов' },
      { id: 'sealers', name: 'Силеры', description: 'Эпоксидные, кальцийсодержащие' },
      { id: 'microscopic-consumables', name: 'Микроскопические расходники', description: 'Расходники для микроскопа' }
    ]
  }
];

// Старые категории (сохраняем для совместимости)
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
  },
  {
    id: 'dental-materials',
    name: 'Стоматологические материалы',
    description: 'Гели, адгезивы и композитные материалы',
    icon: 'Droplets',
    subcategories: [
      { id: 'etching-gels', name: 'Гели для травления', description: 'Гели для травления эмали и дентина' },
      { id: 'adhesives', name: 'Адгезивы', description: 'Адгезивные системы для стоматологии' },
      { id: 'composites', name: 'Композитные материалы', description: 'Композитные материалы для реставраций' },
      { id: 'air-flow-powders', name: 'Порошки для Air Flow', description: 'Порошки для профессиональной гигиены' }
    ]
  },
  {
    id: 'endodontic-instruments',
    name: 'Эндодонтические инструменты',
    description: 'Инструменты для лечения корневых каналов',
    icon: 'Syringe',
    subcategories: [
      { id: 'k-files', name: 'K-Files', description: 'К-файлы для обработки корневых каналов' },
      { id: 'h-files', name: 'H-Files', description: 'Н-файлы и корневые буравы' },
      { id: 'rotary-files', name: 'Машинные файлы', description: 'Файлы для машинной обработки' },
      { id: 'mta-materials', name: 'МТА материалы', description: 'Материалы для пломбирования каналов' }
    ]
  },
  {
    id: 'isolation-materials',
    name: 'Материалы для изоляции',
    description: 'Раббердам и матрицы для изоляции рабочего поля',
    icon: 'Shield',
    subcategories: [
      { id: 'rubber-dam', name: 'Раббердам', description: 'Коффердам для изоляции зуба' },
      { id: 'matrices', name: 'Матрицы', description: 'Матрицы для восстановления зубов' },
      { id: 'sterilization-tapes', name: 'Ленты для стерилизации', description: 'Ленты и материалы для стерилизации' }
    ]
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
    category: 'endodontic-instruments',
    subcategory: 'k-files',
    specialization: 'endodontist',
    description: 'Набор К-файлов для ручной обработки корневых каналов. Размеры от №15 до №40, длина 25 мм.',
    price: 250,
    image: '/images/k-files-set.jpg',
    images: ['/images/k-files-set.jpg'],
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
    category: 'endodontic-instruments',
    subcategory: 'h-files',
    specialization: 'endodontist',
    description: 'Набор Н-файлов (корневых буравов) для ручной обработки корневых каналов. Размеры ISO 15-40, длина 25 мм.',
    price: 300,
    image: '/images/h-files-set.jpg',
    images: ['/images/h-files-set.jpg'],
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
    category: 'endodontic-instruments',
    subcategory: 'rotary-files',
    specialization: 'endodontist',
    description: 'Набор машинных файлов с памятью формы SC. Обеспечивают эффективную обработку корневых каналов.',
    price: 1970,
    image: '/images/sc-files-set.jpg',
    images: ['/images/sc-files-set.jpg'],
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
    category: 'endodontic-instruments',
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
    category: 'endodontic-instruments',
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
    category: 'endodontic-instruments',
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
    category: 'endodontic-instruments',
    subcategory: 'hand-machine-files',
    specialization: 'endodontist',
    description: 'Файлы для первичного прохождения канала D-Finders №08. 1 упаковка - 6 штук.',
    price: 635,
    image: '/images/k-files-set.jpg',
    images: ['/images/k-files-set.jpg'],
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
    category: 'endodontic-instruments',
    subcategory: 'h-files',
    specialization: 'endodontist',
    description: 'H-Files - ручные корневые буравы № 15-40, длина 25мм. 1 упаковка - 6 штук.',
    price: 305,
    image: '/images/h-files-set.jpg',
    images: ['/images/h-files-set.jpg'],
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
    category: 'endodontic-instruments',
    subcategory: 'k-files',
    specialization: 'endodontist',
    description: 'K-Files № 15, длина 25мм - ручные корневые буравы. 1 упаковка - 6 штук.',
    price: 240,
    image: '/images/k-files-set.jpg',
    images: ['/images/k-files-set.jpg'],
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
    category: 'endodontic-instruments',
    subcategory: 'rotary-files',
    specialization: 'endodontist',
    description: 'Peeso Reamers - машинные сверла №1, длина 28мм. 1 упаковка - 6 штук.',
    price: 740,
    image: '/images/sc-files-set.jpg',
    images: ['/images/sc-files-set.jpg'],
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
    category: 'endodontic-instruments',
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
    category: 'endodontic-instruments',
    subcategory: 'rotary-files',
    specialization: 'endodontist',
    description: 'Ultrasonic Files - машинные сверла для ультразвуковой обработки каналов №40. 1 упаковка - 6 штук.',
    price: 435,
    image: '/images/sc-files-set.jpg',
    images: ['/images/sc-files-set.jpg'],
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
