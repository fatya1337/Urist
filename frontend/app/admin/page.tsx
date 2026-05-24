"use client"

import { MOCK_USERS, MOCK_REQUESTS, MOCK_ASSISTANTS } from "@/lib/mock-data"

export default function AdminPage() {
  const stats = [
    { label: "Пользователей", value: MOCK_USERS.length, color: "text-white" },
    { label: "Ассистентов", value: MOCK_ASSISTANTS.length, color: "text-violet-400" },
    { label: "Новых заявок", value: MOCK_REQUESTS.filter((r) => r.status === "new").length, color: "text-amber-400" },
    { label: "Доход/мес", value: "35 000 ₽", color: "text-emerald-400" },
  ]

  return (
    <div className="p-6 sm:p-8 max-w-5xl">
      <div className="mb-8 animate-fade-up">
        <h1 className="text-xl font-semibold text-white">Админ-панель</h1>
        <p className="text-[13px] text-zinc-500 mt-1">Обзор платформы</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={s.label} className="card p-5 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <p className="text-[11px] text-zinc-600 mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="card p-5 animate-fade-up delay-3">
        <p className="text-[14px] font-medium text-white mb-4">Последние заявки</p>
        <div className="space-y-3">
          {MOCK_REQUESTS.map((req) => {
            const statusColors: Record<string, string> = {
              new: "text-amber-400 bg-amber-400/10",
              in_progress: "text-blue-400 bg-blue-400/10",
              done: "text-emerald-400 bg-emerald-400/10",
              rejected: "text-red-400 bg-red-400/10",
            }
            const statusLabels: Record<string, string> = {
              new: "Новая",
              in_progress: "В работе",
              done: "Готово",
              rejected: "Отклонена",
            }
            return (
              <div key={req.id} className="flex items-center gap-4 py-3 border-b border-white/[0.03] last:border-0">
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-white truncate">{req.userName}</p>
                  <p className="text-[12px] text-zinc-500 truncate">{req.description}</p>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${statusColors[req.status]}`}>
                  {statusLabels[req.status]}
                </span>
                <span className="text-[11px] text-zinc-600 whitespace-nowrap">{req.createdAt}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
