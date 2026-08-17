from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .email_service import send_enquiry_email
from .database import supabase
from .enquiries import router as enquiries_router


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://josephfolio.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(enquiries_router)


@app.get("/")
def root():
    return {
        "message": "Joseph Portfolio API is running"
    }


@app.get("/test-db")
def test_database():

    response = (
        supabase
        .table("enquiries")
        .select("*")
        .limit(1)
        .execute()
    )

    return {
        "message": "Supabase connection successful",
        "data": response.data
    }
    
    

@app.get("/test-smtp")
def test_smtp():

    test_enquiry = {
        "name": "SMTP Test",
        "email": "test@example.com",
        "phone": "0500000000",
        "project_type": "Portfolio Test",
        "budget": "Testing",
        "timeline": "Today",
        "message": "This is a test email from the Joseph AMUASI portfolio."
    }

    send_enquiry_email(test_enquiry)

    return {
        "message": "SMTP email sent successfully"
    }