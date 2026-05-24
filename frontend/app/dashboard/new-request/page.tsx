"use client"

import { useState } from "react"
import { useLang } from "@/components/lang-provider"

export default function NewRequestPage() {
  const { locale } = useLang()
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="p-6 sm:p-8 max-w-lg animate-fade-up">
        <div className="card p-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-white mb-2">
            {locale === "ru" ? "Заявка отправлена" : "Request sent"}
          </h2>
          <p className="text-[13px] text-zinc-500">
            {locale === "ru"
              ? "Мы свяжемся с вами в течение 24 часов для обсуждения деталей."
              : "We'll contact you within 24 hours to discuss the details."}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 sm:p-8 max-w-2xl">
      <div className="mb-8 animate-fade-up">
        <h1 className="text-xl font-semibold text-white">
          {locale === "ru" ? "Заказать нового агента" : "Request new agent"}
        </h1>
        <p className="text-[13px] text-zinc-500 mt-1">
          {locale === "ru"
            ? "Опишите задачу — мы создадим кастомного AI-ассистента под ваши потребности"
            : "Describe your task — we'll create a custom AI assistant for your needs"}
        </p>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true) }}
        className="card p-6 space-y-5 animate-fade-up delay-1"
      >
        <div>
          <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
            {locale === "ru" ? "Тип агента" : "Agent type"}
          </label>
          <select className="input bg-[#0a0a0a]">
            <option>{locale === "ru" ? "Юридический анализ" : "Legal analysis"}</option>
            <option>{locale === "ru" ? "Техподдержка" : "Customer support"}</option>
            <option>{locale === "ru" ? "Голосовой агент" : "Voice agent"}</option>
            <option>{locale === "ru" ? "Документооборот" : "Document processing"}</option>
            <option>{locale === "ru" ? "Другое" : "Other"}</option>
          </select>
        </div>

        <div>
          <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
            {locale === "ru" ? "Опишите задачу подробно" : "Describe the task in detail"}
          </label>
          <textarea
            required
            className="input"
            rows={5}
            placeholder={locale === "ru"
              ? "Какую задачу должен решать агент? С какими данными работать? Какие интеграции нужны?"
              : "What should the agent do? What data should it work with? What integrations are needed?"}
          />
        </div>

        <div>
          <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
            {locale === "ru" ? "Ожидаемый объём" : "Expected volume"}
          </label>
          <input
            type="text"
            className="input"
            placeholder={locale === "ru" ? "~100 запросов/день" : "~100 requests/day"}
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          {locale === "ru" ? "Отправить заявку" : "Submit request"}
        </button>
      </form>
    </div>
  )
}
