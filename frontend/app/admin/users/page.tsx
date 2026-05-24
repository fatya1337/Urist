"use client"

import { MOCK_USERS } from "@/lib/mock-data"

export default function AdminUsersPage() {
  return (
    <div className="p-6 sm:p-8 max-w-5xl">
      <div className="mb-8 animate-fade-up">
        <h1 className="text-xl font-semibold text-white">Пользователи</h1>
        <p className="text-[13px] text-zinc-500 mt-1">{MOCK_USERS.length} зарегистрировано</p>
      </div>

      <div className="card overflow-hidden animate-fade-up delay-1">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.04]">
              <th className="text-left px-5 py-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Имя</th>
              <th className="text-left px-5 py-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Email</th>
              <th className="text-left px-5 py-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">План</th>
              <th className="text-left px-5 py-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Агенты</th>
              <th className="text-left px-5 py-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Дата</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_USERS.map((user) => (
              <tr key={user.id} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                <td className="px-5 py-3 text-[13px] text-white">{user.name}</td>
                <td className="px-5 py-3 text-[13px] text-zinc-400">{user.email}</td>
                <td className="px-5 py-3">
                  <span className="px-2 py-0.5 rounded-full bg-violet-600/10 text-violet-400 text-[11px] font-medium capitalize">
                    {user.plan}
                  </span>
                </td>
                <td className="px-5 py-3 text-[13px] text-zinc-400">{user.assistantsCount}</td>
                <td className="px-5 py-3 text-[13px] text-zinc-600">{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
