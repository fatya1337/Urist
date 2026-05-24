"use client"

import { useLang } from "@/components/lang-provider"

export default function BillingPage() {
  const { locale } = useLang()

  return (
    <div className="p-6 sm:p-8 max-w-3xl">
      <div className="mb-8 animate-fade-up">
        <h1 className="text-xl font-semibold text-white">
          {locale === "ru" ? "Подписка" : "Billing"}
        </h1>
      </div>

      <div className="card p-6 mb-6 animate-fade-up delay-1">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[12px] text-zinc-500 uppercase tracking-wider mb-1">
              {locale === "ru" ? "Текущий план" : "Current plan"}
            </p>
            <p className="text-lg font-semibold text-white">{locale === "ru" ? "Бизнес" : "Business"}</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-violet-600/10 text-violet-400 text-[12px] font-medium">
            {locale === "ru" ? "Активен" : "Active"}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.04]">
          <div>
            <p className="text-[11px] text-zinc-600">{locale === "ru" ? "Агентов" : "Agents"}</p>
            <p className="text-lg font-semibold text-white">3 / 5</p>
          </div>
          <div>
            <p className="text-[11px] text-zinc-600">{locale === "ru" ? "Запросов" : "Requests"}</p>
            <p className="text-lg font-semibold text-white">2 847 / 10 000</p>
          </div>
          <div>
            <p className="text-[11px] text-zinc-600">{locale === "ru" ? "Следующая оплата" : "Next payment"}</p>
            <p className="text-lg font-semibold text-white">15 000 &#8381;</p>
          </div>
        </div>
      </div>

      <div className="card p-6 animate-fade-up delay-2">
        <p className="text-[14px] text-zinc-400 mb-4">
          {locale === "ru" ? "История платежей" : "Payment history"}
        </p>
        <div className="space-y-3">
          {[
            { date: "01.05.2025", amount: "15 000 ₽", status: "paid" },
            { date: "01.04.2025", amount: "15 000 ₽", status: "paid" },
            { date: "01.03.2025", amount: "5 000 ₽", status: "paid" },
          ].map((p) => (
            <div key={p.date} className="flex items-center justify-between py-2 border-b border-white/[0.03] last:border-0">
              <span className="text-[13px] text-zinc-400">{p.date}</span>
              <span className="text-[13px] text-white">{p.amount}</span>
              <span className="text-[11px] text-emerald-500">{locale === "ru" ? "Оплачен" : "Paid"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
