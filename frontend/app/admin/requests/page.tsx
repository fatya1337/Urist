"use client"

import { useState } from "react"
import { MOCK_REQUESTS } from "@/lib/mock-data"

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState(MOCK_REQUESTS)

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
    <div className="p-6 sm:p-8 max-w-5xl">
      <div className="mb-8 animate-fade-up">
        <h1 className="text-xl font-semibold text-white">Заявки</h1>
        <p className="text-[13px] text-zinc-500 mt-1">
          {requests.filter((r) => r.status === "new").length} новых
        </p>
      </div>

      <div className="space-y-4">
        {requests.map((req, i) => (
          <div key={req.id} className="card p-5 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-[14px] font-medium text-white">{req.userName}</p>
                <p className="text-[11px] text-zinc-600">{req.createdAt}</p>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${statusColors[req.status]}`}>
                {statusLabels[req.status]}
              </span>
            </div>
            <p className="text-[13px] text-zinc-400 leading-relaxed mb-4">{req.description}</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setRequests((prev) =>
                  prev.map((r) => r.id === req.id ? { ...r, status: "in_progress" as const } : r)
                )}
                className="text-[12px] text-violet-400 hover:text-violet-300 transition-colors px-3 py-1 rounded-md border border-violet-600/20 hover:bg-violet-600/10"
              >
                Взять в работу
              </button>
              <button
                onClick={() => setRequests((prev) =>
                  prev.map((r) => r.id === req.id ? { ...r, status: "done" as const } : r)
                )}
                className="text-[12px] text-emerald-400 hover:text-emerald-300 transition-colors px-3 py-1 rounded-md border border-emerald-600/20 hover:bg-emerald-600/10"
              >
                Готово
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
