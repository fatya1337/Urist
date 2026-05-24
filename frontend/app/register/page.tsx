"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { useLang } from "@/components/lang-provider"

export default function RegisterPage() {
  const { register } = useAuth()
  const { locale } = useLang()
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const ok = await register(name, email, password)
    if (ok) router.push("/dashboard")
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
            {locale === "ru" ? "Создать аккаунт" : "Create account"}
          </h1>
          <p className="text-[13px] text-zinc-500 mt-1">
            {locale === "ru" ? "Начните использовать AI-агентов" : "Start using AI agents"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          <div>
            <label className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">
              {locale === "ru" ? "Имя" : "Name"}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={locale === "ru" ? "Иван Иванов" : "John Doe"}
              className="input"
            />
          </div>
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
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="input"
            />
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? (
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              locale === "ru" ? "Зарегистрироваться" : "Sign up"
            )}
          </button>
        </form>

        <p className="text-center text-[13px] text-zinc-600 mt-4">
          {locale === "ru" ? "Уже есть аккаунт?" : "Already have an account?"}{" "}
          <Link href="/login" className="text-violet-400 hover:text-violet-300 transition-colors">
            {locale === "ru" ? "Войти" : "Sign in"}
          </Link>
        </p>
      </div>
    </div>
  )
}
