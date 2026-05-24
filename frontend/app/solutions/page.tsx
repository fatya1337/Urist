"use client"

import Link from "next/link"
import { useLang } from "@/components/lang-provider"
import { translations as tr, t } from "@/lib/i18n"

const items = [
  {
    name: tr.solutions.lawyer.name,
    desc: tr.solutions.lawyer.desc,
    features: {
      ru: ["Анализ договоров PDF/DOCX", "Выявление рисков и красных флагов", "Ссылки на статьи ГК РФ", "Маскирование персональных данных", "Структурированный отчёт"],
      en: ["PDF/DOCX contract analysis", "Risk and red flag detection", "Legal code references", "PII masking", "Structured report"],
    },
  },
  {
    name: tr.solutions.support.name,
    desc: tr.solutions.support.desc,
    features: {
      ru: ["Telegram, WhatsApp, email, веб-чат", "Обучение на вашей базе знаний", "Автоэскалация на оператора", "Мультиязычность", "Аналитика обращений"],
      en: ["Telegram, WhatsApp, email, web chat", "Trained on your knowledge base", "Auto-escalation to operator", "Multilingual", "Request analytics"],
    },
  },
  {
    name: tr.solutions.voice.name,
    desc: tr.solutions.voice.desc,
    features: {
      ru: ["Приём входящих звонков", "Запись на приём / бронирование", "Интеграция с CRM", "Естественная речь", "Работа 24/7 без выходных"],
      en: ["Inbound call handling", "Appointment booking", "CRM integration", "Natural speech", "24/7 availability"],
    },
  },
  {
    name: tr.solutions.docs.name,
    desc: tr.solutions.docs.desc,
    features: {
      ru: ["Генерация документов по шаблонам", "Проверка на ошибки и пропуски", "Интеграция с 1С и ERP", "Пакетная обработка", "Контроль версий"],
      en: ["Template-based generation", "Error and gap detection", "ERP integration", "Batch processing", "Version control"],
    },
  },
]

export default function SolutionsPage() {
  const { locale } = useLang()

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-2xl mb-16 animate-fade-up">
        <p className="text-[12px] font-medium text-violet-500 uppercase tracking-wider mb-3">
          {t(tr.solutions.title, locale)}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {t(tr.solutions.subtitle, locale)}
        </h1>
      </div>

      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="card p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                {t(item.name, locale)}
              </h2>
              <p className="text-[14px] text-zinc-500 leading-relaxed mb-6">
                {t(item.desc, locale)}
              </p>
              <Link href="/contact" className="btn-primary text-[13px] py-2 px-5">
                {t(tr.cta.button, locale)}
              </Link>
            </div>
            <div>
              <ul className="space-y-3">
                {item.features[locale].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-[13px] text-zinc-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
