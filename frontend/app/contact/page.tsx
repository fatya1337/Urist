"use client"

import { useState } from "react"
import { useLang } from "@/components/lang-provider"
import { translations as tr, t } from "@/lib/i18n"

export default function ContactPage() {
  const { locale } = useLang()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="max-w-lg mx-auto px-5 sm:px-8 py-24 sm:py-32 text-center animate-fade-up">
        <div className="card p-10">
          <div className="w-12 h-12 rounded-full bg-violet-600/10 flex items-center justify-center mx-auto mb-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-white mb-2">
            {t(tr.contact.sent, locale)}
          </h1>
          <p className="text-[14px] text-zinc-500">
            {t(tr.contact.sentDesc, locale)}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="animate-fade-up">
          <p className="text-[12px] font-medium text-violet-500 uppercase tracking-wider mb-3">
            {t(tr.contact.title, locale)}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t(tr.contact.subtitle, locale)}
          </h1>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1">Email</p>
              <p className="text-[14px] text-zinc-300">arte-ar.ru@yandex.ru</p>
            </div>
            <div>
              <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1">Telegram</p>
              <a
                href="https://t.me/orkestron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-violet-400 hover:text-violet-300 transition-colors"
              >
                @orkestron
              </a>
            </div>
          </div>
        </div>

        <div className="animate-fade-up delay-2">
          <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-4">
            <div>
              <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
                {t(tr.contact.name, locale)}
              </label>
              <input type="text" required className="input" />
            </div>
            <div>
              <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
                {t(tr.contact.email, locale)}
              </label>
              <input type="email" required className="input" />
            </div>
            <div>
              <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
                {t(tr.contact.company, locale)}
              </label>
              <input type="text" className="input" />
            </div>
            <div>
              <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
                {t(tr.contact.message, locale)}
              </label>
              <textarea required className="input" />
            </div>
            <button type="submit" className="btn-primary w-full mt-2">
              {t(tr.contact.send, locale)}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
