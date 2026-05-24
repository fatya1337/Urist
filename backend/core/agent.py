import json
import logging
import os
import time

import anthropic

from .mock_data import MOCK_ANALYSIS
from .pii_masker import mask_pii, unmask_pii
from .prompts import ANALYZE_USER_TEMPLATE, LAWYER_SYSTEM_PROMPT

logger = logging.getLogger(__name__)

USE_MOCK = os.getenv("USE_MOCK", "true").lower() in ("true", "1", "yes")
MODEL = os.getenv("CLAUDE_MODEL", "claude-sonnet-4-5-20250514")


def analyze_contract(text: str, side: str = "получатель услуг") -> dict:
    logger.info("Начинаю анализ договора (%d символов), mock=%s", len(text), USE_MOCK)

    if USE_MOCK:
        logger.info("Mock-режим: возвращаю заготовленный ответ")
        return MOCK_ANALYSIS

    mask_result = mask_pii(text)
    logger.info("Маскирование ПДн: %d замен", len(mask_result.mappings))

    user_message = ANALYZE_USER_TEMPLATE.format(
        side=side,
        contract_text=mask_result.masked_text,
    )

    client = anthropic.Anthropic()

    start = time.time()
    response = client.messages.create(
        model=MODEL,
        max_tokens=4096,
        system=[
            {
                "type": "text",
                "text": LAWYER_SYSTEM_PROMPT,
                "cache_control": {"type": "ephemeral"},
            }
        ],
        messages=[{"role": "user", "content": user_message}],
    )
    elapsed = time.time() - start

    logger.info(
        "Claude ответил за %.1f сек | input_tokens=%d | output_tokens=%d",
        elapsed,
        response.usage.input_tokens,
        response.usage.output_tokens,
    )

    raw_text = response.content[0].text
    raw_text = unmask_pii(raw_text, mask_result.mappings)

    try:
        result = json.loads(raw_text)
    except json.JSONDecodeError:
        logger.error("Claude вернул невалидный JSON: %s", raw_text[:200])
        raise ValueError("Модель вернула невалидный JSON — попробуйте ещё раз")

    return result
