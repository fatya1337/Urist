"use client"

import { useAuth } from "@/components/auth-provider"
import { useLang } from "@/components/lang-provider"

export default function SettingsPage() {
  const { user } = useAuth()
  const { locale } = useLang()

  return (
    <div className="p-6 sm:p-8 max-w-2xl">
      <div className="mb-8 animate-fade-up">
        <h1 className="text-xl font-semibold text-white">
          {locale === "ru" ? "Настройки" : "Settings"}
        </h1>
      </div>

      <div className="space-y-6">
        <div className="card p-6 animate-fade-up delay-1">
          <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-4">
            {locale === "ru" ? "Профиль" : "Profile"}
          </p>
          <div className="space-y-4">
            <div>
              <label className="text-[12px] text-zinc-500 mb-1.5 block">
                {locale === "ru" ? "Имя" : "Name"}
              </label>
              <input type="text" defaultValue={user?.name || ""} className="input" />
            </div>
            <div>
              <label className="text-[12px] text-zinc-500 mb-1.5 block">Email</label>
              <input type="email" defaultValue={user?.email || ""} className="input" />
            </div>
            <button className="btn-primary text-[13px] py-2 px-5">
              {locale === "ru" ? "Сохранить" : "Save"}
            </button>
          </div>
        </div>

        <div className="card p-6 animate-fade-up delay-2">
          <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-wider mb-4">
            {locale === "ru" ? "Безопасность" : "Security"}
          </p>
          <div className="space-y-4">
            <div>
              <label className="text-[12px] text-zinc-500 mb-1.5 block">
                {locale === "ru" ? "Новый пароль" : "New password"}
              </label>
              <input type="password" placeholder="••••••••" className="input" />
            </div>
            <button className="btn-secondary text-[13px] py-2 px-5">
              {locale === "ru" ? "Сменить пароль" : "Change password"}
            </button>
          </div>
        </div>

        <div className="card p-6 border-red-500/10 animate-fade-up delay-3">
          <p className="text-[12px] font-medium text-red-400/70 uppercase tracking-wider mb-2">
            {locale === "ru" ? "Опасная зона" : "Danger zone"}
          </p>
          <p className="text-[13px] text-zinc-500 mb-4">
            {locale === "ru"
              ? "Удаление аккаунта необратимо. Все данные и ассистенты будут удалены."
              : "Account deletion is irreversible. All data and assistants will be removed."}
          </p>
          <button className="text-[13px] text-red-400 hover:text-red-300 transition-colors">
            {locale === "ru" ? "Удалить аккаунт" : "Delete account"}
          </button>
        </div>
      </div>
    </div>
  )
}
