"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Locale } from "@/lib/i18n"

type LangContextType = {
  locale: Locale
  toggle: () => void
}

const LangContext = createContext<LangContextType>({
  locale: "ru",
  toggle: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru")

  const toggle = useCallback(() => {
    setLocale((prev) => (prev === "ru" ? "en" : "ru"))
  }, [])

  return (
    <LangContext.Provider value={{ locale, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
