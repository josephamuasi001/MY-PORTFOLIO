from fastapi import FastAPI

from .database import supabase
from .enquiries import router as enquiries_router


app = FastAPI()


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