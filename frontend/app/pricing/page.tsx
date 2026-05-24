"use client"

import Link from "next/link"
import { useLang } from "@/components/lang-provider"
import { translations as tr, t } from "@/lib/i18n"

export default function PricingPage() {
  const { locale } = useLang()
  const pf = tr.pricing.features

  const plans = [
    {
      name: t(tr.pricing.starter, locale),
      desc: t(tr.pricing.starterDesc, locale),
      price: t(tr.pricing.starterPrice, locale),
      features: [t(pf.s1, locale), t(pf.s2, locale), t(pf.s3, locale), t(pf.s4, locale)],
      cta: t(tr.pricing.select, locale),
      href: "/contact",
      highlighted: false,
    },
    {
      name: t(tr.pricing.business, locale),
      desc: t(tr.pricing.businessDesc, locale),
      price: t(tr.pricing.businessPrice, locale),
      features: [t(pf.b1, locale), t(pf.b2, locale), t(pf.b3, locale), t(pf.b4, locale)],
      cta: t(tr.pricing.select, locale),
      href: "/contact",
      highlighted: true,
    },
    {
      name: t(tr.pricing.enterprise, locale),
      desc: t(tr.pricing.enterpriseDesc, locale),
      price: t(tr.pricing.enterprisePrice, locale),
      features: [t(pf.e1, locale), t(pf.e2, locale), t(pf.e3, locale), t(pf.e4, locale)],
      cta: t(tr.pricing.contactSales, locale),
      href: "/contact",
      highlighted: false,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
        <p className="text-[12px] font-medium text-violet-500 uppercase tracking-wider mb-3">
          {t(tr.pricing.title, locale)}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {t(tr.pricing.subtitle, locale)}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-up delay-1">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`card p-8 flex flex-col ${
              plan.highlighted ? "border-violet-600/30 bg-violet-600/[0.03]" : ""
            }`}
          >
            {plan.highlighted && (
              <span className="text-[11px] font-medium text-violet-400 uppercase tracking-wider mb-4">
                {locale === "ru" ? "Популярный" : "Popular"}
              </span>
            )}
            <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
            <p className="text-[13px] text-zinc-500 mt-1 mb-6">{plan.desc}</p>
            <p className="text-2xl font-bold text-white mb-6">{plan.price}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[13px] text-zinc-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={plan.highlighted ? "#7c3aed" : "#3f3f46"} strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={plan.href}
              className={plan.highlighted ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
