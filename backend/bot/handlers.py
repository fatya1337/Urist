import logging
import os

from aiogram import Router, F
from aiogram.filters import CommandStart
from aiogram.types import Message, Document

from core.agent import analyze_contract
from core.parser import parse_document

logger = logging.getLogger(__name__)
router = Router()

MAX_FILE_SIZE = 10 * 1024 * 1024


def _format_severity(s: str) -> str:
    return {"high": "🔴 Высокий", "medium": "🟡 Средний", "low": "🟢 Низкий"}.get(s, s)


def _format_verdict(v: str) -> str:
    return {
        "low_risk": "🟢 Низкий риск",
        "medium_risk": "🟡 Средний риск",
        "high_risk": "🔴 Высокий риск",
    }.get(v, v)


def _format_result(r: dict) -> str:
    lines = [
        f"📋 *{r.get('contract_type', 'Договор')}*",
        f"Вердикт: {_format_verdict(r.get('verdict', ''))}",
        "",
        f"📝 {r.get('summary', '')}",
    ]

    flags = r.get("red_flags", [])
    if flags:
        lines.append("")
        lines.append(f"⚠️ *Красные флаги ({len(flags)}):*")
        for f in flags:
            lines.append(f"  {_format_severity(f['severity'])} — {f['clause']}")
            lines.append(f"  _{f['issue']}_")
            lines.append(f"  → {f['recommendation']}")
            lines.append("")

    missing = r.get("missing_clauses", [])
    if missing:
        lines.append(f"❌ *Отсутствующие пункты ({len(missing)}):*")
        for m in missing:
            lines.append(f"  • {m['name']} — _{m['why_important']}_")
        lines.append("")

    recs = r.get("general_recommendations", [])
    if recs:
        lines.append("💡 *Рекомендации:*")
        for rec in recs:
            lines.append(f"  • {rec}")

    return "\n".join(lines)


@router.message(CommandStart())
async def cmd_start(message: Message):
    await message.answer(
        "👋 Привет! Я AI-юрист.\n\n"
        "Отправь мне PDF или DOCX договора — я проанализирую его и покажу:\n"
        "• Тип договора\n"
        "• Красные флаги и риски\n"
        "• Отсутствующие важные пункты\n"
        "• Рекомендации\n\n"
        "📎 Просто прикрепи файл к сообщению."
    )


@router.message(F.document)
async def handle_document(message: Message):
    doc: Document = message.document

    if not doc.file_name:
        await message.answer("❌ Не могу определить имя файла.")
        return

    ext = doc.file_name.rsplit(".", 1)[-1].lower() if "." in doc.file_name else ""
    if ext not in ("pdf", "docx", "doc"):
        await message.answer("❌ Принимаю только PDF и DOCX файлы.")
        return

    if doc.file_size and doc.file_size > MAX_FILE_SIZE:
        await message.answer("❌ Файл слишком большой (максимум 10 МБ).")
        return

    progress = await message.answer("⏳ Скачиваю файл...")

    bot = message.bot
    file = await bot.get_file(doc.file_id)
    file_bytes = await bot.download_file(file.file_path)
    content = file_bytes.read()

    await progress.edit_text("📄 Извлекаю текст из документа...")

    try:
        text = parse_document(doc.file_name, content)
    except ValueError as e:
        await progress.edit_text(f"❌ {e}")
        return
    except Exception:
        logger.exception("Ошибка парсинга %s", doc.file_name)
        await progress.edit_text("❌ Не удалось прочитать файл.")
        return

    await progress.edit_text("🤖 Анализирую договор... Это может занять 15-30 секунд.")

    try:
        result = analyze_contract(text)
    except ValueError as e:
        await progress.edit_text(f"❌ {e}")
        return
    except Exception:
        logger.exception("Ошибка анализа")
        await progress.edit_text("❌ Ошибка при анализе. Попробуй ещё раз.")
        return

    await progress.delete()

    formatted = _format_result(result)

    if len(formatted) > 4096:
        chunks = [formatted[i:i+4096] for i in range(0, len(formatted), 4096)]
        for chunk in chunks:
            await message.answer(chunk, parse_mode="Markdown")
    else:
        await message.answer(formatted, parse_mode="Markdown")


@router.message()
async def handle_text(message: Message):
    await message.answer(
        "📎 Отправь мне PDF или DOCX файл договора для анализа.\n"
        "Текстовые сообщения пока не поддерживаются."
    )
