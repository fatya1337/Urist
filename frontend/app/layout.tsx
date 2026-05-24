import type { Metadata } from "next"
import { LangProvider } from "@/components/lang-provider"
import { AuthProvider } from "@/components/auth-provider"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Orkestron — AI-агенты для бизнеса",
  description:
    "Разрабатываем и внедряем автономных AI-агентов для бизнеса. Юристы, саппорт, голосовые агенты, документооборот.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="dark">
      <body className="min-h-screen bg-grid relative overflow-x-hidden">
        <AuthProvider>
          <LangProvider>
            <Nav />
            <main className="relative pt-14">{children}</main>
            <Footer />
          </LangProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
