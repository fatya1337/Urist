"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

type AuthUser = {
  id: string
  email: string
  name: string
  role: "user" | "admin"
} | null

type AuthContextType = {
  user: AuthUser
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => false,
  register: async () => false,
  logout: () => {},
})

const DEMO_USER = {
  id: "user-1",
  email: "demo@orkestron.ru",
  name: "Демо-пользователь",
  role: "user" as const,
}

const ADMIN_USER = {
  id: "admin-1",
  email: "admin@orkestron.ru",
  name: "Администратор",
  role: "admin" as const,
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("orkestron_user")
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {}
    }
    setLoading(false)
  }, [])

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 800))
    const u = email.includes("admin") ? ADMIN_USER : DEMO_USER
    const loggedIn = { ...u, email }
    setUser(loggedIn)
    localStorage.setItem("orkestron_user", JSON.stringify(loggedIn))
    return true
  }, [])

  const register = useCallback(async (name: string, email: string, _password: string): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 800))
    const u = { ...DEMO_USER, name, email }
    setUser(u)
    localStorage.setItem("orkestron_user", JSON.stringify(u))
    return true
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem("orkestron_user")
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
