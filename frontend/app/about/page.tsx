"use client"

import Link from "next/link"
import { useLang } from "@/components/lang-provider"
import { translations as tr, t } from "@/lib/i18n"

export default function AboutPage() {
  const { locale } = useLang()

  const sections = [
    { key: "mission" as const, num: "01" },
    { key: "approach" as const, num: "02" },
    { key: "tech" as const, num: "03" },
  ]

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-2xl mb-16 animate-fade-up">
        <p className="text-[12px] font-medium text-violet-500 uppercase tracking-wider mb-3">
          {t(tr.about.title, locale)}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {t(tr.about.subtitle, locale)}
        </h1>
      </div>

      <div className="space-y-4">
        {sections.map((s, i) => (
          <div
            key={s.key}
            className="card p-8 sm:p-10 animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="text-[11px] font-mono text-zinc-700 mb-4 block">{s.num}</span>
            <h2 className="text-xl font-semibold text-white mb-4">
              {t(tr.about[s.key].title, locale)}
            </h2>
            <p className="text-[14px] text-zinc-500 leading-relaxed max-w-2xl">
              {t(tr.about[s.key].text, locale)}
            </p>
          </div>
        ))}
      </div>

      <div className="card p-10 sm:p-16 text-center mt-16 animate-fade-up delay-4">
        <h2 className="text-xl font-semibold text-white mb-3">
          {t(tr.cta.title, locale)}
        </h2>
        <p className="text-[14px] text-zinc-500 mb-6 max-w-md mx-auto">
          {t(tr.cta.subtitle, locale)}
        </p>
        <Link href="/contact" className="btn-primary">
          {t(tr.cta.button, locale)}
        </Link>
      </div>
    </div>
  )
}
