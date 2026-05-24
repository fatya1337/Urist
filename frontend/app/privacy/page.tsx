"use client"

import { useLang } from "@/components/lang-provider"

export default function PrivacyPage() {
  const { locale } = useLang()

  if (locale === "en") {
    return (
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <h1 className="text-3xl font-bold text-white mb-10 animate-fade-up">Privacy Policy</h1>
        <div className="card p-8 sm:p-10 space-y-8 text-[14px] text-zinc-400 leading-relaxed animate-fade-up delay-1">
          <section>
            <h2 className="text-[15px] font-semibold text-white mb-3">1. Service purpose</h2>
            <p>The service provides AI-powered analysis of contracts and legal documents for informational purposes. It does not replace legal counsel and is not a legal service.</p>
          </section>
          <section>
            <h2 className="text-[15px] font-semibold text-white mb-3">2. Data we process</h2>
            <ul className="list-disc list-inside space-y-1 text-zinc-500">
              <li>Text of documents uploaded by the user</li>
              <li>Email and contact details upon registration</li>
              <li>Technical logs (IP, time, actions)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-[15px] font-semibold text-white mb-3">3. Third-party processing</h2>
            <p>Uploaded documents are processed via Anthropic, Inc. API (USA). Anthropic does not use data for model training. Logs are retained for 30 days. Transfer is TLS-encrypted.</p>
          </section>
          <section>
            <h2 className="text-[15px] font-semibold text-white mb-3">4. Data retention</h2>
            <p>Uploaded documents are deleted from our servers immediately after analysis. Analysis results are stored in the user's account until deleted by the user.</p>
          </section>
          <section>
            <h2 className="text-[15px] font-semibold text-white mb-3">5. Limitation of liability</h2>
            <p>The service is provided "as is". Analysis is AI-generated and may contain errors. Decisions based on the analysis are the user's responsibility.</p>
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
      <h1 className="text-3xl font-bold text-white mb-10 animate-fade-up">Политика конфиденциальности</h1>
      <div className="card p-8 sm:p-10 space-y-8 text-[14px] text-zinc-400 leading-relaxed animate-fade-up delay-1">
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">1. Назначение сервиса</h2>
          <p>Сервис предоставляет ИИ-анализ договоров и юридических документов в информационных целях. Сервис не заменяет консультацию юриста и не является юридической услугой.</p>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">2. Какие данные мы обрабатываем</h2>
          <ul className="list-disc list-inside space-y-1 text-zinc-500">
            <li>Текст загружаемых пользователем документов</li>
            <li>Email и контактные данные при регистрации</li>
            <li>Технические логи (IP, время, действия)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">3. Передача данных третьим лицам</h2>
          <p>Загружаемые документы передаются для анализа сервису Anthropic, Inc. (Anthropic API, США). Данные не используются для обучения моделей. Логи хранятся 30 дней. Передача защищена TLS-шифрованием.</p>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">4. Что пользователь обязуется НЕ загружать</h2>
          <ul className="list-disc list-inside space-y-1 text-zinc-500">
            <li>Документы, содержащие государственную тайну</li>
            <li>Банковскую тайну третьих лиц без их согласия</li>
            <li>Медицинскую тайну третьих лиц</li>
            <li>ПДн третьих лиц без полученного от них согласия</li>
          </ul>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">5. Срок хранения</h2>
          <p>Загруженный документ удаляется с наших серверов сразу после анализа. Результат анализа сохраняется в личном кабинете пользователя до его удаления.</p>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">6. Ограничение ответственности</h2>
          <p>Сервис предоставляется «как есть». Анализ генерируется ИИ и может содержать ошибки. Решения, принятые на основе анализа — ответственность пользователя.</p>
        </section>
        <section>
          <h2 className="text-[15px] font-semibold text-white mb-3">7. Контакты</h2>
          <p className="text-zinc-500">arte-ar.ru@yandex.ru</p>
        </section>
      </div>
    </div>
  )
}
