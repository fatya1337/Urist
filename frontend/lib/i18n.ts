export type Locale = "ru" | "en"

export const translations = {
  nav: {
    solutions: { ru: "Решения", en: "Solutions" },
    pricing: { ru: "Цены", en: "Pricing" },
    about: { ru: "О нас", en: "About" },
    contact: { ru: "Связаться", en: "Contact" },
    getStarted: { ru: "Начать", en: "Get started" },
  },
  hero: {
    badge: { ru: "Платформа AI-агентов для бизнеса", en: "AI agent platform for business" },
    title1: { ru: "Автономные AI-агенты", en: "Autonomous AI agents" },
    title2: { ru: "для вашего бизнеса", en: "for your business" },
    subtitle: {
      ru: "Разрабатываем и внедряем интеллектуальных агентов, которые работают 24/7. Юристы, саппорт, аналитики — любая роль, любая задача.",
      en: "We build and deploy intelligent agents that work 24/7. Lawyers, support, analysts — any role, any task.",
    },
    cta: { ru: "Обсудить проект", en: "Start a project" },
    ctaSecondary: { ru: "Смотреть решения", en: "View solutions" },
  },
  stats: {
    accuracy: { ru: "Точность анализа", en: "Analysis accuracy" },
    costReduction: { ru: "Снижение затрат", en: "Cost reduction" },
    responseTime: { ru: "Время ответа", en: "Response time" },
    availability: { ru: "Доступность", en: "Availability" },
  },
  solutions: {
    title: { ru: "Решения", en: "Solutions" },
    subtitle: {
      ru: "Каждый агент проектируется под конкретную задачу бизнеса",
      en: "Each agent is designed for a specific business task",
    },
    lawyer: {
      name: { ru: "AI Юрист", en: "AI Lawyer" },
      desc: {
        ru: "Анализ договоров, выявление рисков, проверка на соответствие законодательству. Заменяет часы работы юриста за секунды.",
        en: "Contract analysis, risk detection, compliance verification. Replaces hours of legal work in seconds.",
      },
    },
    support: {
      name: { ru: "AI Саппорт", en: "AI Support" },
      desc: {
        ru: "Омниканальная поддержка клиентов. Telegram, WhatsApp, email, чат на сайте — единый агент на всех каналах.",
        en: "Omnichannel customer support. Telegram, WhatsApp, email, website chat — one agent across all channels.",
      },
    },
    voice: {
      name: { ru: "Голосовой агент", en: "Voice Agent" },
      desc: {
        ru: "Приём и обработка входящих звонков. Запись на приём, консультации, маршрутизация — без ожидания на линии.",
        en: "Inbound call handling. Appointments, consultations, routing — no hold times.",
      },
    },
    docs: {
      name: { ru: "AI Документооборот", en: "AI Documents" },
      desc: {
        ru: "Автоматическое заполнение, проверка и генерация документов по шаблонам и данным из ваших систем.",
        en: "Automated filling, verification, and generation of documents from your templates and systems.",
      },
    },
    learnMore: { ru: "Подробнее", en: "Learn more" },
  },
  features: {
    title: { ru: "Почему Orkestron", en: "Why Orkestron" },
    subtitle: {
      ru: "Не просто чат-бот. Полноценный сотрудник, который понимает контекст вашего бизнеса.",
      en: "Not just a chatbot. A full employee who understands your business context.",
    },
    f1: {
      title: { ru: "Контекст бизнеса", en: "Business context" },
      desc: {
        ru: "Агент обучается на ваших данных, документах и процессах. Знает специфику именно вашей компании.",
        en: "The agent learns from your data, documents, and processes. Knows your company's specifics.",
      },
    },
    f2: {
      title: { ru: "Безопасность данных", en: "Data security" },
      desc: {
        ru: "Маскирование персональных данных, шифрование, удаление после обработки. Соответствие 152-ФЗ.",
        en: "PII masking, encryption, deletion after processing. Full regulatory compliance.",
      },
    },
    f3: {
      title: { ru: "Интеграции", en: "Integrations" },
      desc: {
        ru: "CRM, 1C, Битрикс, Telegram, WhatsApp, email — агент встраивается в существующие процессы.",
        en: "CRM, ERP, Telegram, WhatsApp, email — the agent fits into your existing workflows.",
      },
    },
    f4: {
      title: { ru: "On-premise", en: "On-premise" },
      desc: {
        ru: "Для enterprise — развёртывание на вашем сервере. Данные не покидают ваш контур.",
        en: "For enterprise — deployment on your servers. Data never leaves your perimeter.",
      },
    },
  },
  cta: {
    title: { ru: "Готовы автоматизировать?", en: "Ready to automate?" },
    subtitle: {
      ru: "Расскажите о задаче — мы предложим решение и оценим сроки внедрения.",
      en: "Tell us about your task — we'll propose a solution and estimate the timeline.",
    },
    button: { ru: "Оставить заявку", en: "Get in touch" },
    telegram: { ru: "Написать в Telegram", en: "Message on Telegram" },
  },
  pricing: {
    title: { ru: "Цены", en: "Pricing" },
    subtitle: {
      ru: "Прозрачное ценообразование. Платите за результат, не за часы разработки.",
      en: "Transparent pricing. Pay for results, not development hours.",
    },
    starter: { ru: "Старт", en: "Starter" },
    starterDesc: { ru: "Один AI-агент для одной задачи", en: "One AI agent for one task" },
    starterPrice: { ru: "от 5 000 ₽/мес", en: "from $50/mo" },
    business: { ru: "Бизнес", en: "Business" },
    businessDesc: { ru: "Несколько агентов, интеграции, приоритетная поддержка", en: "Multiple agents, integrations, priority support" },
    businessPrice: { ru: "от 15 000 ₽/мес", en: "from $150/mo" },
    enterprise: { ru: "Enterprise", en: "Enterprise" },
    enterpriseDesc: { ru: "On-premise, кастомная разработка, SLA", en: "On-premise, custom development, SLA" },
    enterprisePrice: { ru: "Индивидуально", en: "Custom" },
    features: {
      s1: { ru: "1 AI-агент", en: "1 AI agent" },
      s2: { ru: "До 1 000 запросов/мес", en: "Up to 1,000 requests/mo" },
      s3: { ru: "Email поддержка", en: "Email support" },
      s4: { ru: "Стандартные интеграции", en: "Standard integrations" },
      b1: { ru: "До 5 AI-агентов", en: "Up to 5 AI agents" },
      b2: { ru: "До 10 000 запросов/мес", en: "Up to 10,000 requests/mo" },
      b3: { ru: "Приоритетная поддержка", en: "Priority support" },
      b4: { ru: "Кастомные интеграции", en: "Custom integrations" },
      e1: { ru: "Без ограничений", en: "Unlimited agents" },
      e2: { ru: "On-premise развёртывание", en: "On-premise deployment" },
      e3: { ru: "Выделенный менеджер", en: "Dedicated manager" },
      e4: { ru: "SLA 99.9%", en: "SLA 99.9%" },
    },
    select: { ru: "Выбрать", en: "Select" },
    contactSales: { ru: "Связаться", en: "Contact sales" },
  },
  about: {
    title: { ru: "О компании", en: "About" },
    subtitle: {
      ru: "Мы строим AI-агентов, которые решают реальные задачи бизнеса.",
      en: "We build AI agents that solve real business problems.",
    },
    mission: {
      title: { ru: "Миссия", en: "Mission" },
      text: {
        ru: "Сделать автономных AI-агентов доступными для каждого бизнеса в России. Не консалтинг, не PowerPoint — работающие решения, которые экономят время и деньги с первого дня.",
        en: "Make autonomous AI agents accessible to every business. Not consulting, not PowerPoint — working solutions that save time and money from day one.",
      },
    },
    approach: {
      title: { ru: "Подход", en: "Approach" },
      text: {
        ru: "Каждый агент проектируется под конкретную задачу. Мы не продаём универсальные чат-боты — мы создаём специализированных сотрудников, которые знают ваш бизнес.",
        en: "Each agent is designed for a specific task. We don't sell generic chatbots — we create specialized employees who know your business.",
      },
    },
    tech: {
      title: { ru: "Технологии", en: "Technology" },
      text: {
        ru: "Anthropic Claude, собственные фреймворки оркестрации, безопасная обработка данных с маскированием ПДн, интеграция с любыми бизнес-системами.",
        en: "Anthropic Claude, proprietary orchestration frameworks, secure data processing with PII masking, integration with any business system.",
      },
    },
  },
  contact: {
    title: { ru: "Связаться с нами", en: "Get in touch" },
    subtitle: {
      ru: "Расскажите о задаче — мы свяжемся в течение 24 часов.",
      en: "Tell us about your task — we'll get back within 24 hours.",
    },
    name: { ru: "Имя", en: "Name" },
    email: { ru: "Email", en: "Email" },
    company: { ru: "Компания", en: "Company" },
    message: { ru: "Опишите задачу", en: "Describe your task" },
    send: { ru: "Отправить", en: "Send" },
    sent: { ru: "Заявка отправлена", en: "Message sent" },
    sentDesc: {
      ru: "Мы свяжемся с вами в ближайшее время.",
      en: "We'll get back to you shortly.",
    },
    telegramAlt: {
      ru: "Или напишите нам в Telegram",
      en: "Or message us on Telegram",
    },
  },
  footer: {
    product: { ru: "Продукт", en: "Product" },
    company: { ru: "Компания", en: "Company" },
    legal: { ru: "Правовая информация", en: "Legal" },
    privacy: { ru: "Конфиденциальность", en: "Privacy" },
    terms: { ru: "Оферта", en: "Terms" },
    rights: { ru: "Все права защищены.", en: "All rights reserved." },
  },
} as const

export function t(
  key: Record<Locale, string>,
  locale: Locale
): string {
  return key[locale]
}
