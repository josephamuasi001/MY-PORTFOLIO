from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .smtp_test import test_smtp

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
def test_smtp_connection():

    test_smtp()

    return {
        "message": "SMTP connection successful"
    }