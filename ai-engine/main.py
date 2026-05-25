from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pdfplumber

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Skill Database
SKILLS_DB = [
    "Python",
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "SQL",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "FastAPI",
    "Git",
    "GitHub",
    "HTML",
    "CSS",
]

@app.get("/")
def home():
    return {
        "message": "Nexora AI Backend Running"
    }

@app.post("/analyze-resume")
async def analyze_resume(file: UploadFile = File(...)):

    text = ""

    # Extract PDF text
    with pdfplumber.open(file.file) as pdf:
        for page in pdf.pages:
            extracted = page.extract_text()

            if extracted:
                text += extracted

    # Detect skills
    detected_skills = []

    for skill in SKILLS_DB:
        if skill.lower() in text.lower():
            detected_skills.append(skill)

    # Generate readiness score
    readiness_score = min(len(detected_skills) * 10, 100)

    return {
        "filename": file.filename,
        "skills_detected": detected_skills,
        "readiness_score": readiness_score,
        "content_preview": text[:1000]
    }