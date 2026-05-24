"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Sidebar } from "@/components/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) router.push("/login")
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
        <span className="inline-block w-6 h-6 border-2 border-violet-600/30 border-t-violet-600 rounded-full animate-spin" />
      </div>
    )
  }

  if (!user || user.role !== "admin") return null

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar type="admin" />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
