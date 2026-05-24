import os
import sys
import logging

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
os.environ["USE_MOCK"] = "true"

logging.basicConfig(level=logging.INFO, format="%(name)s | %(message)s")

from core.parser import read_pdf, read_docx, parse_document
from core.pii_masker import mask_pii, unmask_pii
from core.agent import analyze_contract


def test_pii_masker():
    text = (
        "Договор между Ивановым Иваном Ивановичем (ИНН: 7707083893) "
        "и Петровой Анной Сергеевной (телефон +7 (999) 123-45-67, "
        "email test@example.com). Счёт 40802810900000012345, БИК: 044525225."
    )
    result = mask_pii(text)
    print("\n--- Маскированный текст ---")
    print(result.masked_text)
    print("\n--- Маппинг ---")
    for token, original in result.mappings.items():
        print(f"  {token} -> {original}")

    assert "Ивановым Иваном Ивановичем" not in result.masked_text
    assert "7707083893" not in result.masked_text
    assert "test@example.com" not in result.masked_text

    restored = unmask_pii(result.masked_text, result.mappings)
    assert "Ивановым Иваном Ивановичем" in restored
    assert "7707083893" in restored
    print("\n✓ Маскирование и восстановление работают")


def test_mock_agent():
    result = analyze_contract("Тестовый текст договора")
    assert result["contract_type"] == "Договор оказания услуг"
    assert result["verdict"] in ("low_risk", "medium_risk", "high_risk")
    assert len(result["red_flags"]) > 0
    print("\n✓ Mock-агент возвращает корректную структуру")
    print(f"  Тип: {result['contract_type']}")
    print(f"  Вердикт: {result['verdict']}")
    print(f"  Red flags: {len(result['red_flags'])}")
    print(f"  Missing clauses: {len(result['missing_clauses'])}")


if __name__ == "__main__":
    print("=" * 50)
    print("ТЕСТ 1: PII Masker")
    print("=" * 50)
    test_pii_masker()

    print("\n" + "=" * 50)
    print("ТЕСТ 2: Mock Agent")
    print("=" * 50)
    test_mock_agent()

    print("\n" + "=" * 50)
    print("ВСЕ ТЕСТЫ ПРОЙДЕНЫ")
    print("=" * 50)
