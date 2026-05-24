export type Assistant = {
  id: string
  name: string
  description: string
  type: string
  status: "active" | "disabled" | "pending"
  model: string
  messagesCount: number
  lastActive: string
}

export type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: string
  files?: string[]
}

export type Conversation = {
  id: string
  assistantId: string
  title: string
  messages: Message[]
  createdAt: string
}

export type UserRequest = {
  id: string
  userId: string
  userName: string
  description: string
  status: "new" | "in_progress" | "done" | "rejected"
  createdAt: string
}

export type User = {
  id: string
  email: string
  name: string
  role: "user" | "admin"
  plan: string
  assistantsCount: number
  createdAt: string
}

export const MOCK_ASSISTANTS: Assistant[] = [
  {
    id: "ast-1",
    name: "AI Юрист",
    description: "Анализ договоров, выявление рисков, проверка на соответствие законодательству РФ",
    type: "lawyer",
    status: "active",
    model: "claude-sonnet-4-5",
    messagesCount: 47,
    lastActive: "2 часа назад",
  },
  {
    id: "ast-2",
    name: "Техподдержка",
    description: "Отвечает на вопросы клиентов по вашему продукту на основе базы знаний",
    type: "support",
    status: "active",
    model: "claude-sonnet-4-5",
    messagesCount: 213,
    lastActive: "15 минут назад",
  },
  {
    id: "ast-3",
    name: "HR-ассистент",
    description: "Скрининг резюме, подготовка вопросов для интервью, онбординг",
    type: "hr",
    status: "pending",
    model: "claude-sonnet-4-5",
    messagesCount: 0,
    lastActive: "Не активирован",
  },
]

export const MOCK_CONVERSATIONS: Record<string, Conversation> = {
  "ast-1": {
    id: "conv-1",
    assistantId: "ast-1",
    title: "Анализ договора аренды",
    createdAt: "2025-05-24",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "Проанализируй этот договор аренды офисного помещения. Я арендатор.",
        timestamp: "14:30",
        files: ["Договор_аренды_2025.pdf"],
      },
      {
        id: "m2",
        role: "assistant",
        content: `## Анализ договора аренды офисного помещения

**Тип:** Договор аренды нежилого помещения
**Вердикт:** Средний риск

### Обнаруженные проблемы

**п. 4.2 — Одностороннее повышение арендной платы**
> «Арендодатель вправе пересматривать размер арендной платы не чаще одного раза в год»

Отсутствует ограничение максимального процента повышения. По ст. 614 ГК РФ стороны могут предусмотреть порядок изменения, но без потолка вы рискуете получить неожиданное повышение.

**Рекомендация:** Добавить формулировку «но не более чем на 10% от текущей ставки» или привязать к индексу ИПЦ.

**п. 7.1 — Расторжение только через суд**
Договор не предусматривает возможности одностороннего отказа арендатора. При необходимости съехать раньше срока придётся либо платить до конца, либо судиться.

**Рекомендация:** Добавить пункт о праве арендатора на односторонний отказ с уведомлением за 90 дней.

### Отсутствующие пункты
- Порядок возврата обеспечительного платежа
- Условия проведения ремонта и согласование перепланировки
- Ответственность за скрытые дефекты помещения`,
        timestamp: "14:31",
      },
      {
        id: "m3",
        role: "user",
        content: "А что насчёт пункта про субаренду? Мне может понадобиться сдать часть офиса.",
        timestamp: "14:35",
      },
      {
        id: "m4",
        role: "assistant",
        content: `В текущем договоре **субаренда запрещена** (п. 2.4): «Арендатор не вправе сдавать Помещение в субаренду без письменного согласия Арендодателя».

Это стандартная формулировка, но обратите внимание — согласие должно быть **письменным**. На практике это означает:

1. Нужно заранее получить письменное согласие арендодателя
2. Согласие на субаренду можно включить сразу в допсоглашение
3. По ст. 615 ГК РФ, если договор не запрещает субаренду прямо, арендатор может субарендовать с согласия арендодателя

**Рекомендация:** Если субаренда для вас критична — настаивайте на включении разрешения субаренды в основной договор, с уведомлением арендодателя за 30 дней.`,
        timestamp: "14:36",
      },
    ],
  },
  "ast-2": {
    id: "conv-2",
    assistantId: "ast-2",
    title: "Вопрос по тарифам",
    createdAt: "2025-05-24",
    messages: [
      {
        id: "m5",
        role: "user",
        content: "Клиент спрашивает: можно ли перейти с тарифа Старт на Бизнес в середине месяца?",
        timestamp: "10:15",
      },
      {
        id: "m6",
        role: "assistant",
        content: `Да, переход на более высокий тариф возможен в любой момент. Вот как это работает:

1. **Пересчёт оплаты** — за оставшиеся дни текущего месяца будет начислена разница между тарифами пропорционально
2. **Активация** — новый тариф активируется мгновенно после оплаты
3. **Лимиты** — лимиты запросов обновляются сразу до нового тарифа

Клиенту нужно перейти в **Настройки → Подписка → Сменить тариф**.

Если клиент хочет перейти на более низкий тариф — это возможно только с начала следующего расчётного периода.`,
        timestamp: "10:15",
      },
    ],
  },
}

export const MOCK_REQUESTS: UserRequest[] = [
  {
    id: "req-1",
    userId: "user-2",
    userName: "Мария Петрова",
    description: "Нужен ассистент для автоматической проверки бухгалтерской отчётности. Должен уметь анализировать баланс, отчёт о прибылях и убытках, проверять арифметику и соответствие стандартам РСБУ.",
    status: "new",
    createdAt: "2025-05-23",
  },
  {
    id: "req-2",
    userId: "user-3",
    userName: "Алексей Сидоров",
    description: "Ассистент для клиники: запись пациентов на приём через чат, ответы на типовые вопросы о процедурах и ценах, напоминания о визитах.",
    status: "in_progress",
    createdAt: "2025-05-20",
  },
  {
    id: "req-3",
    userId: "user-4",
    userName: "ООО Логистик",
    description: "Бот для отслеживания грузов. Клиент вводит номер накладной — бот показывает статус, ETA, контакты водителя.",
    status: "done",
    createdAt: "2025-05-15",
  },
]

export const MOCK_USERS: User[] = [
  {
    id: "user-1",
    email: "demo@orkestron.ru",
    name: "Демо-пользователь",
    role: "user",
    plan: "business",
    assistantsCount: 3,
    createdAt: "2025-05-01",
  },
  {
    id: "user-2",
    email: "maria@company.ru",
    name: "Мария Петрова",
    role: "user",
    plan: "starter",
    assistantsCount: 1,
    createdAt: "2025-05-10",
  },
  {
    id: "user-3",
    email: "alex@clinic.ru",
    name: "Алексей Сидоров",
    role: "user",
    plan: "business",
    assistantsCount: 2,
    createdAt: "2025-05-12",
  },
]
