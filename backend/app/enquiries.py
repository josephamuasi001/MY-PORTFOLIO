from fastapi import APIRouter, HTTPException

from .email_service import send_enquiry_email

from .database import supabase
from .schemas import EnquiryCreate


router = APIRouter(
    prefix="/enquiries",
    tags=["Enquiries"]
)


@router.post("")
def create_enquiry(enquiry: EnquiryCreate):

    try:

        enquiry_data = enquiry.model_dump()
        
        
        response = (
            supabase
            .table("enquiries")
            .insert(enquiry_data)
            .execute()
        )

        send_enquiry_email(enquiry_data)

        return {
            "message": "Enquiry submitted successfully",
            "data": response.data
        }

    except Exception as error:

        raise HTTPException(
            status_code=500,
            detail=f"Failed to submit enquiry: {str(error)}"
        )
        
        
@router.get("/")
def get_enquiries():

    try:
        response = (
            supabase
            .table("enquiries")
            .select("*")
            .order("created_at", desc=True)
            .execute()
        )

        return {
            "message": "Enquiries retrieved successfully",
            "data": response.data
        }

    except Exception as error:

        raise HTTPException(
            status_code=500,
            detail=f"Failed to retrieve enquiries: {str(error)}"
        )
        


@router.get("/{enquiry_id}")
def get_enquiry(enquiry_id: int):

    try:
        response = (
            supabase
            .table("enquiries")
            .select("*")
            .eq("id", enquiry_id)
            .single()
            .execute()
        )

        if not response.data:
            raise HTTPException(
                status_code=404,
                detail="Enquiry not found"
            )

        return {
            "message": "Enquiry retrieved successfully",
            "data": response.data
        }

    except HTTPException:
        raise

    except Exception as error:

        raise HTTPException(
            status_code=500,
            detail=f"Failed to retrieve enquiry: {str(error)}"
        )