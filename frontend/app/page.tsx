"use client"

import Link from "next/link"
import { useLang } from "@/components/lang-provider"
import { translations as tr, t } from "@/lib/i18n"

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  )
}

const solutions = [
  {
    name: tr.solutions.lawyer.name,
    desc: tr.solutions.lawyer.desc,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    name: tr.solutions.support.name,
    desc: tr.solutions.support.desc,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    name: tr.solutions.voice.name,
    desc: tr.solutions.voice.desc,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    name: tr.solutions.docs.name,
    desc: tr.solutions.docs.desc,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
]

const features = [
  { key: "f1" as const, icon: "01" },
  { key: "f2" as const, icon: "02" },
  { key: "f3" as const, icon: "03" },
  { key: "f4" as const, icon: "04" },
]

export default function HomePage() {
  const { locale } = useLang()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-36 pb-20 sm:pb-32 relative">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <span className="inline-block text-[12px] font-medium text-zinc-500 tracking-wide uppercase mb-6">
                {t(tr.hero.badge, locale)}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-[-0.03em] leading-[1.1] animate-fade-up delay-1">
              {t(tr.hero.title1, locale)}
              <br />
              <span className="text-gradient-accent">{t(tr.hero.title2, locale)}</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-500 leading-relaxed max-w-xl animate-fade-up delay-2">
              {t(tr.hero.subtitle, locale)}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 mt-8 animate-fade-up delay-3">
              <Link href="/contact" className="btn-primary">
                {t(tr.hero.cta, locale)}
                <ArrowRight />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                {t(tr.hero.ctaSecondary, locale)}
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-20 sm:mt-28 rounded-2xl overflow-hidden border border-white/[0.04] animate-fade-up delay-4">
            {[
              { value: "98%", label: t(tr.stats.accuracy, locale) },
              { value: "10x", label: t(tr.stats.costReduction, locale) },
              { value: "<30s", label: t(tr.stats.responseTime, locale) },
              { value: "24/7", label: t(tr.stats.availability, locale) },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0a0a0a] p-6 sm:p-8 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                <p className="text-[12px] text-zinc-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-line" />

      {/* Solutions */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] font-medium text-violet-500 uppercase tracking-wider mb-3">
            {t(tr.solutions.title, locale)}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {t(tr.solutions.subtitle, locale)}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {solutions.map((s) => (
            <div key={t(s.name, locale)} className="card p-6 sm:p-8 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 mb-5">
                {s.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-2">
                {t(s.name, locale)}
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed mb-4">
                {t(s.desc, locale)}
              </p>
              <span className="text-[13px] text-violet-400 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                {t(tr.solutions.learnMore, locale)}
                <ArrowRight />
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="gradient-line" />

      {/* Features */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] font-medium text-violet-500 uppercase tracking-wider mb-3">
            {t(tr.features.title, locale)}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {t(tr.features.subtitle, locale)}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f.key} className="card p-6 sm:p-8">
              <span className="text-[11px] font-mono text-zinc-700 mb-4 block">{f.icon}</span>
              <h3 className="text-[15px] font-semibold text-white mb-2">
                {t(tr.features[f.key].title, locale)}
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                {t(tr.features[f.key].desc, locale)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="gradient-line" />

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="card p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="orb orb-1 opacity-[0.05]" style={{ top: "-300px", right: "-200px" }} />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 relative">
            {t(tr.cta.title, locale)}
          </h2>
          <p className="text-[15px] text-zinc-500 max-w-md mx-auto mb-8 relative">
            {t(tr.cta.subtitle, locale)}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative">
            <Link href="/contact" className="btn-primary">
              {t(tr.cta.button, locale)}
              <ArrowRight />
            </Link>
            <a
              href="https://t.me/orkestron"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t(tr.cta.telegram, locale)}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
