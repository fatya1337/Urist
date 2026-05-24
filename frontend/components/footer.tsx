"use client"

import Link from "next/link"
import { useLang } from "./lang-provider"
import { translations as tr, t } from "@/lib/i18n"

export function Footer() {
  const { locale } = useLang()

  return (
    <footer className="border-t border-white/[0.04] mt-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md bg-violet-600 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold tracking-tighter">O</span>
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Orkestron
              </span>
            </div>
            <p className="text-[13px] text-zinc-600 leading-relaxed max-w-[200px]">
              {locale === "ru"
                ? "Автономные AI-агенты для бизнеса"
                : "Autonomous AI agents for business"}
            </p>
          </div>

          <div>
            <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-3">
              {t(tr.footer.product, locale)}
            </p>
            <div className="space-y-2">
              <Link href="/solutions" className="block text-[13px] text-zinc-600 hover:text-zinc-300 transition-colors">
                {t(tr.nav.solutions, locale)}
              </Link>
              <Link href="/pricing" className="block text-[13px] text-zinc-600 hover:text-zinc-300 transition-colors">
                {t(tr.nav.pricing, locale)}
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-3">
              {t(tr.footer.company, locale)}
            </p>
            <div className="space-y-2">
              <Link href="/about" className="block text-[13px] text-zinc-600 hover:text-zinc-300 transition-colors">
                {t(tr.nav.about, locale)}
              </Link>
              <Link href="/contact" className="block text-[13px] text-zinc-600 hover:text-zinc-300 transition-colors">
                {t(tr.nav.contact, locale)}
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-3">
              {t(tr.footer.legal, locale)}
            </p>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-[13px] text-zinc-600 hover:text-zinc-300 transition-colors">
                {t(tr.footer.privacy, locale)}
              </Link>
              <Link href="/terms" className="block text-[13px] text-zinc-600 hover:text-zinc-300 transition-colors">
                {t(tr.footer.terms, locale)}
              </Link>
            </div>
          </div>
        </div>

        <div className="gradient-line mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-zinc-700">
          <p>&copy; {new Date().getFullYear()} Orkestron. {t(tr.footer.rights, locale)}</p>
          <p>arte-ar.ru@yandex.ru</p>
        </div>
      </div>
    </footer>
  )
}
