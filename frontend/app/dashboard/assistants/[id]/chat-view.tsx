"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useLang } from "@/components/lang-provider"
import { MOCK_ASSISTANTS, MOCK_CONVERSATIONS, type Message } from "@/lib/mock-data"

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <div className="flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-zinc-500"
            style={{
              animation: "pulse 1.4s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function ChatView({ params }: { params: { id: string } }) {
  const { locale } = useLang()
  const assistant = MOCK_ASSISTANTS.find((a) => a.id === params.id)
  const initialConv = MOCK_CONVERSATIONS[params.id]

  const [messages, setMessages] = useState<Message[]>(initialConv?.messages || [])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg: Message = {
      id: `m-${Date.now()}`,
      role: "user",
      content: input.trim(),
      timestamp: new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setTyping(true)

    setTimeout(() => {
      const aiMsg: Message = {
        id: `m-${Date.now() + 1}`,
        role: "assistant",
        content: locale === "ru"
          ? "Спасибо за вопрос. Это демо-режим — в рабочей версии здесь будет реальный ответ от AI-ассистента, обученного на ваших данных."
          : "Thank you for your question. This is demo mode — in production, this will be a real response from an AI assistant trained on your data.",
        timestamp: new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, aiMsg])
      setTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!assistant) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-zinc-500">Assistant not found</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.04] bg-[#050505]/50 backdrop-blur-sm">
        <Link
          href="/dashboard"
          className="text-zinc-600 hover:text-zinc-300 transition-colors p-1"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <div className="w-8 h-8 rounded-lg bg-violet-600/10 flex items-center justify-center">
          <span className="text-violet-400 text-[11px] font-bold">{assistant.name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-[14px] font-medium text-white">{assistant.name}</p>
          <p className="text-[11px] text-zinc-500">{assistant.model}</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[11px] text-zinc-500">
            {locale === "ru" ? "Онлайн" : "Online"}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
            <div className="w-14 h-14 rounded-2xl bg-violet-600/10 flex items-center justify-center mb-4">
              <span className="text-violet-400 text-lg font-bold">{assistant.name.charAt(0)}</span>
            </div>
            <p className="text-[15px] text-white font-medium mb-1">{assistant.name}</p>
            <p className="text-[13px] text-zinc-500 max-w-sm">{assistant.description}</p>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}
          >
            <div className={`max-w-[70%] ${msg.role === "user" ? "order-2" : ""}`}>
              {msg.files && msg.files.length > 0 && (
                <div className="mb-2 flex flex-wrap gap-2">
                  {msg.files.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-600/10 text-[12px] text-violet-400"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                      </svg>
                      {f}
                    </span>
                  ))}
                </div>
              )}
              <div
                className={`rounded-2xl px-4 py-3 text-[14px] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-violet-600 text-white rounded-tr-md"
                    : "bg-zinc-900 border border-white/[0.04] text-zinc-300 rounded-tl-md"
                }`}
              >
                {msg.role === "assistant" ? (
                  <div className="prose-custom" dangerouslySetInnerHTML={{
                    __html: msg.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>')
                      .replace(/## (.*?)$/gm, '<h3 class="text-white font-medium text-[14px] mt-3 mb-1">$1</h3>')
                      .replace(/### (.*?)$/gm, '<h4 class="text-white font-medium text-[13px] mt-2 mb-1">$1</h4>')
                      .replace(/^> (.*?)$/gm, '<blockquote class="border-l-2 border-zinc-700 pl-3 text-zinc-500 italic text-[13px] my-2">$1</blockquote>')
                      .replace(/^- (.*?)$/gm, '<li class="text-zinc-400 text-[13px] ml-4">$1</li>')
                      .replace(/\n\n/g, '<br/><br/>')
                      .replace(/\n/g, '<br/>')
                  }} />
                ) : (
                  msg.content
                )}
              </div>
              <p className={`text-[10px] text-zinc-700 mt-1 ${msg.role === "user" ? "text-right" : ""}`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-zinc-900 border border-white/[0.04] rounded-2xl rounded-tl-md">
              <TypingIndicator />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-5 py-4 border-t border-white/[0.04] bg-[#050505]/50 backdrop-blur-sm">
        <div className="flex items-end gap-3 max-w-3xl mx-auto">
          <button className="text-zinc-600 hover:text-zinc-300 transition-colors p-2 mb-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
            </svg>
          </button>

          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={locale === "ru" ? "Введите сообщение..." : "Type a message..."}
            rows={1}
            className="flex-1 resize-none bg-transparent text-[14px] text-white placeholder-zinc-600 outline-none py-2"
            style={{ maxHeight: "120px" }}
          />

          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`p-2 mb-0.5 rounded-lg transition-all ${
              input.trim()
                ? "text-violet-400 hover:bg-violet-600/10"
                : "text-zinc-700"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
