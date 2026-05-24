import logging
import os
import tempfile

from fastapi import APIRouter, File, Form, UploadFile, HTTPException

from core.agent import analyze_contract
from core.parser import parse_document
from .schemas import AnalysisResponse, AnalysisResult, HealthResponse

logger = logging.getLogger(__name__)
router = APIRouter()

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB


@router.get("/health", response_model=HealthResponse)
async def health():
    return HealthResponse(
        status="ok",
        mock_mode=os.getenv("USE_MOCK", "true").lower() in ("true", "1", "yes"),
    )


@router.post("/analyze", response_model=AnalysisResponse)
async def analyze(
    file: UploadFile = File(...),
    side: str = Form(default="получатель услуг"),
):
    if not file.filename:
        raise HTTPException(400, "Файл не загружен")

    ext = file.filename.rsplit(".", 1)[-1].lower() if "." in file.filename else ""
    if ext not in ("pdf", "docx", "doc"):
        raise HTTPException(400, f"Неподдерживаемый формат .{ext}. Принимаем PDF и DOCX.")

    content = await file.read()
    if len(content) > MAX_FILE_SIZE:
        raise HTTPException(400, "Файл слишком большой (максимум 10 МБ)")
    if len(content) == 0:
        raise HTTPException(400, "Файл пустой")

    try:
        text = parse_document(file.filename, content)
    except ValueError as e:
        return AnalysisResponse(success=False, error=str(e))
    except Exception:
        logger.exception("Ошибка парсинга файла %s", file.filename)
        return AnalysisResponse(success=False, error="Не удалось прочитать файл")

    try:
        raw_result = analyze_contract(text, side=side)
        result = AnalysisResult(**raw_result)
    except ValueError as e:
        return AnalysisResponse(success=False, error=str(e))
    except Exception:
        logger.exception("Ошибка анализа")
        return AnalysisResponse(success=False, error="Ошибка при анализе документа")

    return AnalysisResponse(success=True, result=result)
