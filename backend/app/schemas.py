from pydantic import BaseModel, EmailStr


class EnquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str | None = None
    project_type: str
    budget: str | None = None
    timeline: str | None = None
    message: str