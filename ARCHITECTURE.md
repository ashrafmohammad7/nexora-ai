# Nexora AI Architecture

# High-Level Architecture

```text
                React Frontend
                       ↓
             Spring Boot Backend
                       ↓
             Python AI Microservice
                       ↓
                 PostgreSQL
```

---

# Frontend Layer

## Responsibilities
- Dashboard UI
- Resume Upload
- Analytics Visualization
- User Interaction

## Technologies
- React
- Tailwind CSS
- Axios

---

# Backend Layer (Spring Boot)

## Responsibilities
- Authentication
- REST APIs
- JWT Security
- Database Management
- User Management

## Technologies
- Spring Boot
- Spring Security
- Hibernate
- JPA

---

# AI Layer (FastAPI)

## Responsibilities
- Resume Parsing
- NLP Processing
- Skill Detection
- Recommendation Engine
- Placement Prediction

## Technologies
- FastAPI
- spaCy
- scikit-learn
- pdfplumber

---

# Database Layer

## Responsibilities
- User Data
- Resume Data
- Analytics Data
- Placement Reports

## Technologies
- PostgreSQL

---

# AI Workflow

```text
Resume Upload
      ↓
Resume Parsing
      ↓
Skill Extraction
      ↓
Industry Mapping
      ↓
Skill Gap Detection
      ↓
Readiness Score
      ↓
Recommendations
```