import re
from dataclasses import dataclass, field


@dataclass
class MaskResult:
    masked_text: str
    mappings: dict[str, str] = field(default_factory=dict)


_PATTERNS: list[tuple[str, str, re.Pattern]] = [
    # ИНН (10 или 12 цифр)
    ("ИНН", "ИНН_{i}", re.compile(r"\bИНН\s*:?\s*(\d{10,12})\b")),
    # ОГРН / ОГРНИП
    ("ОГРН", "ОГРН_{i}", re.compile(r"\bОГРН(?:ИП)?\s*:?\s*(\d{13,15})\b")),
    # Банковский счёт (20 цифр) — до телефона, чтобы не перехватывался
    ("СЧЁТ", "СЧЁТ_{i}", re.compile(r"\b\d{20}\b")),
    # БИК (9 цифр после слова БИК)
    ("БИК", "БИК_{i}", re.compile(r"\bБИК\s*:?\s*\d{9}\b")),
    # Паспорт (серия номер)
    ("ПАСПОРТ", "ПАСПОРТ_{i}", re.compile(r"\b\d{2}\s?\d{2}\s?\d{6}\b")),
    # Телефон
    ("ТЕЛ", "ТЕЛ_{i}", re.compile(r"(?:\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}")),
    # Email
    ("EMAIL", "EMAIL_{i}", re.compile(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+")),
]

# ФИО: "Иванов Иван Иванович" или "Иванова А.А."
_FIO_FULL = re.compile(
    r"\b[А-ЯЁ][а-яё]{1,30}\s+[А-ЯЁ][а-яё]{1,30}\s+[А-ЯЁ][а-яё]{1,30}(?:вич|вна|ич|на|вичем|вной|ичем|ной|вичу|вне|ичу|не)\b"
)
_FIO_SHORT = re.compile(
    r"\b([А-ЯЁ][а-яё]{1,30})\s+([А-ЯЁ])\.\s*([А-ЯЁ])\.\b"
)


def mask_pii(text: str) -> MaskResult:
    mappings: dict[str, str] = {}
    masked = text
    counters: dict[str, int] = {}

    for label, token_tpl, pattern in _PATTERNS:
        for match in pattern.finditer(masked):
            original = match.group(0)
            if original in mappings.values():
                continue
            counters[label] = counters.get(label, 0) + 1
            token = f"[{token_tpl.format(i=counters[label])}]"
            mappings[token] = original
            masked = masked.replace(original, token)

    for pattern, label in [(_FIO_FULL, "ФИО"), (_FIO_SHORT, "ФИО")]:
        for match in pattern.finditer(masked):
            original = match.group(0)
            if original in mappings.values():
                continue
            counters[label] = counters.get(label, 0) + 1
            token = f"[{label}_{counters[label]}]"
            mappings[token] = original
            masked = masked.replace(original, token)

    return MaskResult(masked_text=masked, mappings=mappings)


def unmask_pii(text: str, mappings: dict[str, str]) -> str:
    result = text
    for token, original in mappings.items():
        result = result.replace(token, original)
    return result
