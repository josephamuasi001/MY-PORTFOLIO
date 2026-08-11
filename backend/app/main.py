from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import supabase
from .enquiries import router as enquiries_router


app = FastAPI()


# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
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