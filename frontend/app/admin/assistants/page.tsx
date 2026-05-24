"use client"

import { useState } from "react"
import { MOCK_ASSISTANTS, MOCK_USERS } from "@/lib/mock-data"

export default function AdminAssistantsPage() {
  const [showCreate, setShowCreate] = useState(false)

  return (
    <div className="p-6 sm:p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8 animate-fade-up">
        <div>
          <h1 className="text-xl font-semibold text-white">Ассистенты</h1>
          <p className="text-[13px] text-zinc-500 mt-1">Управление AI-агентами</p>
        </div>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="btn-primary text-[13px] py-2 px-4"
        >
          Создать агента
        </button>
      </div>

      {showCreate && (
        <div className="card p-6 mb-6 animate-fade-up">
          <p className="text-[14px] font-medium text-white mb-4">Новый ассистент</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[12px] text-zinc-500 mb-1.5 block">Название</label>
              <input type="text" className="input" placeholder="AI Бухгалтер" />
            </div>
            <div>
              <label className="text-[12px] text-zinc-500 mb-1.5 block">Привязать к пользователю</label>
              <select className="input bg-[#0a0a0a]">
                {MOCK_USERS.map((u) => (
                  <option key={u.id} value={u.id}>{u.name} ({u.email})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[12px] text-zinc-500 mb-1.5 block">Тип</label>
              <input type="text" className="input" placeholder="accounting" />
            </div>
            <div>
              <label className="text-[12px] text-zinc-500 mb-1.5 block">Модель</label>
              <select className="input bg-[#0a0a0a]">
                <option>claude-sonnet-4-5</option>
                <option>claude-haiku-4-5</option>
                <option>claude-opus-4-7</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-[12px] text-zinc-500 mb-1.5 block">Системный промпт</label>
            <textarea
              className="input font-mono text-[13px]"
              rows={6}
              placeholder="Ты — опытный бухгалтер..."
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-primary text-[13px] py-2 px-5">Создать</button>
            <button
              onClick={() => setShowCreate(false)}
              className="text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Отмена
            </button>
          </div>
        </div>
      )}

      <div className="card overflow-hidden animate-fade-up delay-1">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.04]">
              <th className="text-left px-5 py-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Агент</th>
              <th className="text-left px-5 py-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Тип</th>
              <th className="text-left px-5 py-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Модель</th>
              <th className="text-left px-5 py-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Сообщений</th>
              <th className="text-left px-5 py-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Статус</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_ASSISTANTS.map((ast) => (
              <tr key={ast.id} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                <td className="px-5 py-3 text-[13px] text-white">{ast.name}</td>
                <td className="px-5 py-3 text-[13px] text-zinc-400 font-mono">{ast.type}</td>
                <td className="px-5 py-3 text-[13px] text-zinc-500 font-mono text-[12px]">{ast.model}</td>
                <td className="px-5 py-3 text-[13px] text-zinc-400">{ast.messagesCount}</td>
                <td className="px-5 py-3">
                  <span className={`inline-flex items-center gap-1.5 text-[11px] ${
                    ast.status === "active" ? "text-emerald-400" : ast.status === "pending" ? "text-amber-400" : "text-zinc-500"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      ast.status === "active" ? "bg-emerald-500" : ast.status === "pending" ? "bg-amber-500" : "bg-zinc-600"
                    }`} />
                    {ast.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
