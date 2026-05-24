import { MOCK_ASSISTANTS } from "@/lib/mock-data"
import ChatView from "./chat-view"

export function generateStaticParams() {
  return MOCK_ASSISTANTS.map((a) => ({ id: a.id }))
}

export default function ChatPage({ params }: { params: { id: string } }) {
  return <ChatView params={params} />
}
