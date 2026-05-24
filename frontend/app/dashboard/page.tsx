"use client"

import Link from "next/link"
import { useLang } from "@/components/lang-provider"
import { MOCK_ASSISTANTS, type Assistant } from "@/lib/mock-data"

function StatusDot({ status }: { status: Assistant["status"] }) {
  const colors = {
    active: "bg-emerald-500",
    disabled: "bg-zinc-600",
    pending: "bg-amber-500",
  }
  return <span className={`w-1.5 h-1.5 rounded-full ${colors[status]}`} />
}

function StatusLabel({ status, locale }: { status: Assistant["status"]; locale: string }) {
  const labels: Record<string, Record<string, string>> = {
    active: { ru: "Активен", en: "Active" },
    disabled: { ru: "Отключён", en: "Disabled" },
    pending: { ru: "Настраивается", en: "Setting up" },
  }
  return <span className="text-[11px] text-zinc-500">{labels[status][locale]}</span>
}

function TypeIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    lawyer: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z",
    support: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    hr: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[type] || paths.support} />
    </svg>
  )
}

export default function DashboardPage() {
  const { locale } = useLang()

  return (
    <div className="p-6 sm:p-8 max-w-5xl">
      <div className="mb-8 animate-fade-up">
        <h1 className="text-xl font-semibold text-white">
          {locale === "ru" ? "Мои ассистенты" : "My assistants"}
        </h1>
        <p className="text-[13px] text-zinc-500 mt-1">
          {locale === "ru"
            ? `${MOCK_ASSISTANTS.length} ассистент${MOCK_ASSISTANTS.length > 1 ? "а" : ""}`
            : `${MOCK_ASSISTANTS.length} assistant${MOCK_ASSISTANTS.length > 1 ? "s" : ""}`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_ASSISTANTS.map((ast, i) => (
          <Link
            key={ast.id}
            href={ast.status === "active" ? `/dashboard/assistants/${ast.id}` : "#"}
            className={`card p-5 group animate-fade-up ${
              ast.status === "active" ? "cursor-pointer" : "opacity-60 cursor-default"
            }`}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center text-violet-400">
                <TypeIcon type={ast.type} />
              </div>
              <div className="flex items-center gap-1.5">
                <StatusDot status={ast.status} />
                <StatusLabel status={ast.status} locale={locale} />
              </div>
            </div>

            <h3 className="text-[15px] font-medium text-white mb-1 group-hover:text-violet-300 transition-colors">
              {ast.name}
            </h3>
            <p className="text-[12px] text-zinc-500 leading-relaxed mb-4">
              {ast.description}
            </p>

            <div className="flex items-center justify-between text-[11px] text-zinc-600 pt-3 border-t border-white/[0.04]">
              <span>{ast.messagesCount} {locale === "ru" ? "сообщений" : "messages"}</span>
              <span>{ast.lastActive}</span>
            </div>
          </Link>
        ))}

        {/* Add new card */}
        <Link
          href="/dashboard/new-request"
          className="card p-5 flex flex-col items-center justify-center text-center border-dashed min-h-[200px] group animate-fade-up"
          style={{ animationDelay: `${MOCK_ASSISTANTS.length * 0.08}s` }}
        >
          <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-zinc-600 group-hover:text-violet-400 group-hover:bg-violet-600/10 transition-all mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <p className="text-[13px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
            {locale === "ru" ? "Заказать нового агента" : "Request new agent"}
          </p>
        </Link>
      </div>
    </div>
  )
}
