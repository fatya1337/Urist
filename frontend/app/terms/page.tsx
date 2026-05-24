"use client"

import Link from "next/link"
import { useLang } from "@/components/lang-provider"

export default function TermsPage() {
  const { locale } = useLang()

  if (locale === "en") {
    return (
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <h1 className="text-3xl font-bold text-white mb-10 animate-fade-up">Terms of Service</h1>
        <div className="card p-8 sm:p-10 space-y-8 text-[14px] text-zinc-400 leading-relaxed animate-fade-up delay-1">
          <section>
            <h2 className="text-[15px] font-semibold text-white mb-3">1. General</h2>
            <p>This document constitutes a public offer defining the terms of use of the AI document analysis service. Using the Service constitutes unconditional acceptance of these terms.</p>
          </section>
          <section>
            <h2 className="text-[15px] font-semibold text-white mb-3">2. Subject</h2>
            <p>The Provider grants the User access to the Service for automated analysis of legal documents using artificial intelligence.</p>
          </section>
          <section>
            <h2 className="text-[15px] font-semibold text-white mb-3">3. Terms of use</h2>
            <p>The Service is provided "as is" without warranties. Results are informational and do not constitute legal advice. The User is solely responsible for decisions based on the analysis.</p>
          </section>
          <section>
            <h2 className="text-[15px] font-semibold text-white mb-3">4. Limitation of liability</h2>
            <p>Maximum liability is limited to the amount paid for the current subscription period. The Provider is not liable for indirect or consequential damages.</p>
          </section>
          <section>
            <h2 className="text-[15px] font-semibold text-white mb-3">5. Data processing</h2>
            <p>Data is processed in accordance with our <Link href="/privacy" className="text-violet-400 hover:text-violet-300 transition-colors">Privacy Policy</Link>.</p>
          </section>
          <section>
            <h2 className="text-[15px] font-semibold text-white mb-3">6. Contact</h2>
            <p className="text-zinc-500">arte-ar.ru@yandex.ru</p>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <h1 className="text-3xl font-bold text-white mb-10 animate-fade-up">Договор-оферта</h1>
      <div className="card p-8 sm:p-10 space-y-8 text-[14px] text-zinc-400 leading-relaxed animate-fade-up delay-1">
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">1. Общие положения</h2>
          <p>Настоящий документ является публичной офертой и определяет условия использования сервиса ИИ-анализа документов. Использование Сервиса означает безоговорочное принятие всех условий настоящей Оферты.</p>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">2. Предмет оферты</h2>
          <p>Исполнитель предоставляет Пользователю доступ к Сервису для автоматизированного анализа юридических документов с помощью технологий искусственного интеллекта.</p>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">3. Условия использования</h2>
          <p>Сервис предоставляется «как есть» без гарантий. Результаты анализа носят информационный характер и не являются юридической консультацией. Пользователь самостоятельно несёт ответственность за решения, принятые на основе результатов анализа.</p>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">4. Ограничение ответственности</h2>
          <p>Максимальная ответственность Исполнителя ограничена суммой, уплаченной за текущий период подписки. Исполнитель не несёт ответственности за косвенные убытки, включая упущенную выгоду.</p>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">5. Обработка данных</h2>
          <p>Обработка персональных данных осуществляется в соответствии с <Link href="/privacy" className="text-violet-400 hover:text-violet-300 transition-colors">Политикой конфиденциальности</Link>.</p>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">6. Разрешение споров</h2>
          <p>Все споры разрешаются путём переговоров. При невозможности урегулирования — в суде по месту нахождения Исполнителя в соответствии с законодательством РФ.</p>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">7. Контакты</h2>
          <p className="text-zinc-500">arte-ar.ru@yandex.ru</p>
        </section>
      </div>
    </div>
  )
}
