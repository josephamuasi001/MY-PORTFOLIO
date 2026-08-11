# Joseph Amuasi — Developer Portfolio

> Personal full-stack developer portfolio showcasing my projects, skills, services, experience, and selected work.

🌐 **Live Portfolio:** https://josephfolio.onrender.com/

---

## About

Welcome to my personal developer portfolio.

This project was created to showcase the projects I have designed and built while developing my skills in frontend development, backend development, UI/UX design, and full-stack application development.

The portfolio started as a frontend-focused project and has evolved into a full-stack application with a FastAPI backend and Supabase database.

The portfolio focuses on a clean, modern, responsive interface while providing visitors with a real enquiry system for project and collaboration requests.

---

# Tech Stack

## Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Lucide React

## Backend

- Python
- FastAPI
- Pydantic
- Uvicorn

## Database

- Supabase
- PostgreSQL

## Design

- Figma
- UI/UX Design
- Responsive Design

## Development Tools

- Git
- GitHub
- VS Code
- Render

---

# Project Architecture

The project uses a separated frontend and backend architecture with a hosted Supabase (Postgres) database.

```text
MY-PORTFOLIO/
├── frontend/        # React + Vite app (UI)
├── backend/         # FastAPI app (API)
└── README.md        # This file
```

## Overview

This repository contains a developer portfolio website (frontend) and a small FastAPI backend used to collect enquiries and persist them to a Supabase database. The frontend is a Vite + React application served locally during development and built for production. The backend exposes a few REST endpoints and uses the official Supabase client for Python.

## Tech stack

- Frontend: React, Vite, JavaScript, CSS
- Backend: Python, FastAPI, Pydantic, Uvicorn
- Database: Supabase (Postgres)
- Dev tools: npm, pip, dotenv, Git

---

## Quick Start (development)

Prerequisites:

- Node.js + npm
- Python 3.8+
- A Supabase project (for storing enquiries) and its `SUPABASE_URL` and `SUPABASE_KEY`

1) Clone the repo

```bash
git clone <repo-url>
cd MY-PORTFOLIO
```

2) Frontend - install and run

```bash
cd frontend
npm install
npm run dev
# open http://localhost:5173
```

3) Backend - create .env and run

- Create a `.env` file in `backend/` with:

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_service_role_or_anon_key
```

```bash
cd backend
python -m pip install -r requirements.txt
# from repo root: uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
# or from backend/: uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
uvicorn backend.app.main:app --reload --port 8000
# API available at http://127.0.0.1:8000
```

---

## Backend API

Base URL (development): `http://127.0.0.1:8000`

Endpoints:

- `GET /` — health check, returns a simple JSON message.
- `GET /test-db` — attempts a simple query against the `enquiries` table to validate Supabase connection.
- `POST /enquiries` — create a new enquiry. Accepts JSON matching the `EnquiryCreate` schema.
- `GET /enquiries/` — list enquiries (ordered by `created_at` desc).
- `GET /enquiries/{enquiry_id}` — fetch a single enquiry by id.

Enquiry payload (JSON):

```json
{
    "name": "Your name",
    "email": "email@example.com",
    "phone": "optional phone",
    "project_type": "website / app / design",
    "budget": "optional",
    "timeline": "optional",
    "message": "Project details / message"
}
```

Notes:

- The backend uses `backend/app/database.py` to read `SUPABASE_URL` and `SUPABASE_KEY` from the environment. Provide these in `backend/.env` for local development.
- CORS is configured in `backend/app/main.py` to allow the frontend dev origin(s) and the deployed domain `https://josephfolio.onrender.com`.

---

## Running the full app locally

1. Start the backend (`uvicorn backend.app.main:app --reload --port 8000`).
2. Start the frontend (`npm run dev` in the `frontend/` folder).
3. Open the frontend dev URL (default: `http://localhost:5173`). The frontend will call the backend API to submit enquiries.

---

## Production / Deployment notes

- The frontend can be built with `npm run build` (in `frontend/`) and deployed to static hosts (Render, Netlify, Vercel, etc.).
- The backend can be deployed to any Python host (Render, Fly, Railway) that supports environment variables. Ensure `SUPABASE_URL` and `SUPABASE_KEY` are set in the host environment.
- If hosting frontend and backend separately, update the frontend's API base URL to point to the deployed backend and ensure CORS is updated accordingly.

---

## Project structure (high level)

See the frontend README for a detailed breakdown of the UI structure and featured projects: [frontend/README.md](frontend/README.md)

Key backend files:

- `backend/app/main.py` — FastAPI application and CORS config
- `backend/app/enquiries.py` — API router for enquiries
- `backend/app/schemas.py` — Pydantic models for request validation
- `backend/app/database.py` — Supabase client initialization (reads env vars)

---

## Troubleshooting

- If you see errors about missing env vars, confirm `backend/.env` exists and contains `SUPABASE_URL` and `SUPABASE_KEY`.
- If the frontend cannot reach the backend, verify the backend URL and CORS origins in `main.py`.

---

## Contributing

If you'd like to contribute, open an issue or submit a pull request. Keep changes focused and add documentation where needed.

---

## License & Contact

This repository contains my portfolio code. For questions or hire enquiries, see the contact section in the frontend or email joseph@domain (replace with your preferred address).

---

Thank you for checking out the portfolio!


