"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { useLang } from "@/components/lang-provider"

export default function LoginPage() {
  const { login } = useAuth()
  const { locale } = useLang()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    const ok = await login(email, password)
    if (ok) {
      router.push(email.includes("admin") ? "/admin" : "/dashboard")
    } else {
      setError(locale === "ru" ? "Неверный email или пароль" : "Invalid email or password")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5">
      <div className="w-full max-w-sm animate-fade-up">
        <div className="text-center mb-8">
          <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-sm font-bold">O</span>
          </div>
          <h1 className="text-xl font-semibold text-white">
            {locale === "ru" ? "Войти в Orkestron" : "Sign in to Orkestron"}
          </h1>
          <p className="text-[13px] text-zinc-500 mt-1">
            {locale === "ru" ? "Введите данные для входа" : "Enter your credentials"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          <div>
            <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="input"
            />
          </div>
          <div>
            <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
              {locale === "ru" ? "Пароль" : "Password"}
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="input"
            />
          </div>

          {error && (
            <p className="text-[13px] text-red-400 animate-fade-in">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full relative"
          >
            {loading ? (
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              locale === "ru" ? "Войти" : "Sign in"
            )}
          </button>
        </form>

        <p className="text-center text-[13px] text-zinc-600 mt-4">
          {locale === "ru" ? "Нет аккаунта?" : "No account?"}{" "}
          <Link href="/register" className="text-violet-400 hover:text-violet-300 transition-colors">
            {locale === "ru" ? "Зарегистрироваться" : "Sign up"}
          </Link>
        </p>

        <div className="mt-6 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
          <p className="text-[11px] text-zinc-600 text-center">
            {locale === "ru"
              ? "Демо: введите любой email и пароль. Для админки используйте email с «admin»."
              : "Demo: enter any email and password. For admin panel, use email with \"admin\"."}
          </p>
        </div>
      </div>
    </div>
  )
}
