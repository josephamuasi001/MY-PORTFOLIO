from fastapi import APIRouter, HTTPException

from .database import supabase
from .schemas import EnquiryCreate


router = APIRouter(
    prefix="/enquiries",
    tags=["Enquiries"]
)


@router.post("")
def create_enquiry(enquiry: EnquiryCreate):

    try:

        response = (
            supabase
            .table("enquiries")
            .insert(enquiry.model_dump())
            .execute()
        )

        return {
            "message": "Enquiry submitted successfully",
            "data": response.data
        }

    except Exception as error:

        raise HTTPException(
            status_code=500,
            detail=f"Failed to submit enquiry: {str(error)}"
        )