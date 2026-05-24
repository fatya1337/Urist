from pydantic import BaseModel, Field


class RedFlag(BaseModel):
    clause: str
    quote: str
    issue: str
    severity: str = Field(pattern=r"^(high|medium|low)$")
    recommendation: str


class MissingClause(BaseModel):
    name: str
    why_important: str


class FinancialRisk(BaseModel):
    description: str
    severity: str = Field(pattern=r"^(high|medium|low)$")
    recommendation: str


class LegalRisk(BaseModel):
    description: str
    severity: str = Field(pattern=r"^(high|medium|low)$")
    article: str = ""
    recommendation: str


class AnalysisResult(BaseModel):
    contract_type: str
    parties: list[str] = []
    verdict: str = Field(pattern=r"^(low_risk|medium_risk|high_risk)$")
    summary: str
    red_flags: list[RedFlag] = []
    missing_clauses: list[MissingClause] = []
    financial_risks: list[FinancialRisk] = []
    legal_risks: list[LegalRisk] = []
    general_recommendations: list[str] = []


class AnalysisRequest(BaseModel):
    side: str = "получатель услуг"


class AnalysisResponse(BaseModel):
    success: bool
    result: AnalysisResult | None = None
    error: str | None = None


class HealthResponse(BaseModel):
    status: str
    mock_mode: bool
