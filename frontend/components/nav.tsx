"use client"

import { useState } from "react"
import Link from "next/link"
import { useLang } from "./lang-provider"
import { useAuth } from "./auth-provider"
import { translations as tr, t } from "@/lib/i18n"

export function Nav() {
  const { locale, toggle } = useLang()
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)

  const links = [
    { href: "/solutions", label: t(tr.nav.solutions, locale) },
    { href: "/pricing", label: t(tr.nav.pricing, locale) },
    { href: "/about", label: t(tr.nav.about, locale) },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#050505]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-md bg-violet-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold tracking-tighter">O</span>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Orkestron
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 ml-2">
            <button
              onClick={toggle}
              className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors font-mono px-2 py-1 rounded border border-transparent hover:border-zinc-800"
            >
              {locale === "ru" ? "EN" : "RU"}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  href={user.role === "admin" ? "/admin" : "/dashboard"}
                  className="text-[13px] text-zinc-400 hover:text-white transition-colors"
                >
                  {user.role === "admin"
                    ? locale === "ru" ? "Админка" : "Admin"
                    : locale === "ru" ? "Кабинет" : "Dashboard"}
                </Link>
                <button
                  onClick={logout}
                  className="text-[13px] text-zinc-600 hover:text-zinc-400 transition-colors"
                >
                  {locale === "ru" ? "Выйти" : "Log out"}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="text-[13px] text-zinc-400 hover:text-white transition-colors px-3 py-1.5"
                >
                  {locale === "ru" ? "Войти" : "Log in"}
                </Link>
                <Link href="/register" className="btn-primary text-[13px] py-2 px-5">
                  {locale === "ru" ? "Регистрация" : "Sign up"}
                </Link>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-400 p-1"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.04] bg-[#050505]/95 backdrop-blur-xl animate-fade-in">
          <div className="px-5 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-[14px] text-zinc-400 hover:text-white transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/[0.04] space-y-2">
              {user ? (
                <>
                  <Link
                    href={user.role === "admin" ? "/admin" : "/dashboard"}
                    onClick={() => setOpen(false)}
                    className="block text-[14px] text-zinc-400 hover:text-white transition-colors py-1"
                  >
                    {user.role === "admin" ? "Админка" : "Кабинет"}
                  </Link>
                  <button
                    onClick={() => { logout(); setOpen(false) }}
                    className="block text-[14px] text-zinc-600 hover:text-zinc-400 transition-colors py-1"
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <Link href="/login" onClick={() => setOpen(false)} className="text-[14px] text-zinc-400">
                    Войти
                  </Link>
                  <Link href="/register" onClick={() => setOpen(false)} className="btn-primary text-[13px] py-2 px-5">
                    Регистрация
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
