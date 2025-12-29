export const menuItems = [
  { id: 'home', label: 'Головна', href: '#' },
  { id: 'about', label: 'Про нас', href: '#' },
  { id: 'tariffs', label: 'Тарифи', href: '#' },
  { id: 'documents', label: 'Документи', href: '#' },
  { id: 'contacts', label: 'Контакти', href: '#' },
];

export const advantages = [
  {
    title: 'Надійність',
    description: 'Стабільне електропостачання 24/7 з мінімальними перебоями'
  },
  {
    title: 'Конкурентні тарифи',
    description: 'Вигідні ціни та гнучкі тарифні плани для різних потреб'
  },
  {
    title: 'Професійна підтримка',
    description: 'Кваліфікована технічна підтримка та консультації'
  },
  {
    title: 'Якість послуг',
    description: 'Сертифіковані послуги відповідно до європейських стандартів'
  }
];

export const tariffPreview = [
  {
    name: 'Комерційні споживачі',
    price: '3,50 ₴',
    unit: 'за кВт⋅год',
    features: [
      'Денний тариф з 7:00 до 23:00',
      'Технічна підтримка в робочі години',
      'Щомісячне звітування',
      'Особистий кабінет'
    ]
  },
  {
    name: 'Промислові споживачі',
    price: 'Індивідуально',
    features: [
      'Персональний тарифний план',
      'Цілодобова технічна підтримка',
      'Деталізована аналітика',
      'Персональний менеджер'
    ]
  }
];

export const tariffData = {
  commercial: {
    basePrice: 3.50,
    transmissionPrice: 1.45,
    distributionPrice: 0.98,
    currency: 'грн',
    unit: 'кВт⋅год'
  },
  industrial: {
    basePrice: {
      low: 4.52,
      medium: 3.98,
      high: 3.45
    },
    transmissionPercent: 15,
    distributionPercent: 12,
    currency: 'грн',
    unit: 'кВт⋅год'
  }
};

export const consumerTypes = [
  {
    id: 'commercial',
    title: 'Комерційний споживач',
    description: 'Для малих та середніх підприємств, торгових центрів, офісів',
    tariff: 'від 3,50 грн/кВт⋅год'
  },
  {
    id: 'industrial',
    title: 'Промисловий споживач',
    description: 'Для великих виробничих підприємств та промислових об\'єктів',
    tariff: 'індивідуальний розрахунок'
  },
  {
    id: 'residential',
    title: 'Побутовий споживач',
    description: 'Для приватних домогосподарств та квартир',
    tariff: 'за тарифами НЕК "Укренерго"'
  }
];

export const documentsPreview = [
  { name: 'Ліцензія на постачання електроенергії', 
    size: '2.4 MB',
    fileName: '/pdf/Постанова про видачу ліцензії від 11.09.18.pdf'
  },
  { name: 'Тарифи на електроенергію 2025', 
    size: '1.2 MB',
    fileName: '/pdf/Tarifi_na_poslugi_z_rozpodilu_elektrichnoi_energii_shho_dijut_z_01 (1).pdf'
  },
  { name: 'Інформація про адреси вебсайтів у мережі Інтернет операторів системи, до мереж яких постачальник має доступ', 
    size: '609 KB', 
    fileName: '/pdf/REIeSTR-OSR.pdf' 
  }
];

export const aboutValues = [
  {
    title: 'Надійність',
    description: 'Забезпечуємо стабільне електропостачання без перебоїв'
  },
  {
    title: 'Клієнтоорієнтованість',
    description: 'Завжди прислухаємося до потреб наших споживачів'
  },
  {
    title: 'Якість',
    description: 'Надаємо послуги найвищої якості відповідно до стандартів'
  },
  {
    title: 'Інновації',
    description: 'Впроваджуємо сучасні технології для покращення сервісу'
  }
];

export const aboutStats = [
  { number: '100+', label: 'Активних клієнтів' },
  { number: '23', label: 'Роки досвіду' },
  { number: '100%', label: 'Безперебійність постачання' },
  { number: '24/7', label: 'Технічна підтримка' }
];

export const contactInfo = [
  {
    title: 'Адреса головного офісу',
    details: [
      '04052, м. Київ',
      'вул. Нижній Вал, 7-9',
      '3-й поверх, офіс 9'
    ]
  },
  {
    title: 'Телефони',
    details: [
      'Приймальня: +38 (044) 239-27-53',
      'Факс: +38 (044) 239-27-54'
    ]
  },
  {
    title: 'Електронна пошта',
    details: [
      'sales@enerzap.org'
    ]
  },
  {
    title: 'Режим роботи',
    details: [
      'Понеділок - П\'ятниця: 10:00 - 18:00',
      'Субота-Неділя: Вихідний'
    ]
  }
];

export const contactDepartments = [
  {
    name: 'Відділ по роботі з клієнтами',
    phone: '+38 (044) 239-27-53',
    email: 'sales@enerzap.org',
  },
];