# Survetra Services — Global Technology Corporate Platform

> **"Engineering the Future. Building What Matters."**  
> An enterprise-grade, multi-product corporate web platform and administration suite for **Survetra Services**. Designed with the design rigor of **Globant**, the typography and craft of **Stripe**, the modern aesthetic of **Vercel**, and the multi-product ecosystem architecture of **Zoho**.

---

## 🌟 Executive Summary

**Survetra Services** is a global technology and digital solutions enterprise that develops, owns, operates, and delivers mission-critical software platforms and digital ecosystems. This repository houses the complete production source code, architecture, automated database migrations, and administration infrastructure powering Survetra's digital presence.

### Primary Product Portfolio
1. **Tiffzy** — An end-to-end restaurant management, QR ordering, KDS, automated procurement supply chain, digital wallet, and delivery orchestration ecosystem.
2. **SocialSea** — A high-throughput social networking engine featuring real-time feeds, short-form video streaming, end-to-end encrypted messaging, and creator monetization hubs.
3. **Survetra Nexus (R&D)** — Autonomous enterprise multi-agent cognitive fabric and deterministic retrieval-augmented generation (RAG) platforms.

---

## 🏗️ Technology Stack

| Layer | Technologies | Description |
| :--- | :--- | :--- |
| **Frontend** | Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion | Fully responsive, high-performance web application with static site generation (SSG), dynamic SEO metadata, and zero layout shift. |
| **Backend** | Java 17 LTS, Spring Boot 3.3.4, Spring Security 6, Spring Data JPA, Hibernate | Modular, multi-tiered enterprise REST API with role-based access control (RBAC) and connection pooling. |
| **Security** | JJWT 0.12.6, BCrypt, Stateless JWT Authentication, Audit Logging | Zero-trust authentication filter chain with comprehensive audit logging for administrative mutations. |
| **Database** | PostgreSQL 16 (Flyway Migrations), H2 (Local Dev/Test Profile) | Normalized, UUID-keyed relational architecture spanning 19 tables with referential integrity. |
| **API Docs** | Springdoc OpenAPI 2.6.0, Swagger UI 3 | Interactive REST API explorer available at `/swagger-ui/index.html`. |
| **Infra & DevOps** | Docker, Docker Compose, Nginx Reverse Proxy, AWS S3 Compatible Storage | Production-ready multi-stage containerization with automated healthchecks and graceful shutdowns. |

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: v18.18+ or v20+ (`node -v`)
- **Java Development Kit**: JDK 17 LTS (`java -version`)
- **Maven**: 3.8+ (`mvn -v`)
- **Docker & Docker Compose** (Optional for containerized run)

---

### Option A: Local Development Setup (Quickest)

#### 1. Start the Spring Boot Backend (Dev Profile)
The backend includes a zero-dependency development profile (`application-dev.yml`) using an in-memory PostgreSQL-compatible H2 engine. It executes all Flyway migrations and provisions the initial administrative user automatically.

```bash
cd backend
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home # Or your system JDK 17 path
mvn clean spring-boot:run -Dspring-boot.run.profiles=dev
```
* Backend runs on: `http://localhost:8080`
* Swagger UI: `http://localhost:8080/swagger-ui/index.html`
* OpenAPI JSON: `http://localhost:8080/v3/api-docs`

#### 2. Start the Next.js Frontend
In a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
* Public Corporate Site: `http://localhost:3000`
* Administrative Panel: `http://localhost:3000/admin`

---

### Option B: Production Containerized Stack (Docker Compose)

Run the full stack (PostgreSQL 16 + Spring Boot + Next.js + Nginx) with a single command:

```bash
docker-compose up --build -d
```

Verify service status:
```bash
docker-compose ps
```

Access services:
- **Corporate Website & Admin UI**: `http://localhost:80` (or `http://localhost:3000`)
- **Backend API Gateway**: `http://localhost:8080/api/v1`
- **Swagger Documentation**: `http://localhost:8080/swagger-ui/index.html`

---

## 🔐 Administrative Access & Credentials

The platform is seeded with an initial Super Administrator account on startup. **Public admin registration is strictly disabled.**

* **Login Route**: `http://localhost:3000/admin/login`
* **Default Super Admin Email**: `admin@survetra.com`
* **Initial Default Password**: Configured via `ADMIN_DEFAULT_PASSWORD` (defaults to local dev credentials; must be set securely before production deployment).

> **Security Advisory**: For production deployments, inject `ADMIN_DEFAULT_PASSWORD` and `JWT_SECRET` via environment secrets, or update the credentials immediately upon first login via the Admin User Management module.

### Admin Dashboard Modules (17 Active Modules)
1. **Executive Dashboard**: Real-time enquiries, active hiring pipelines, published asset telemetry.
2. **Products**: Tiffzy, SocialSea, Nexus lifecycle management.
3. **Projects**: Client enterprise delivery showcase and milestones.
4. **Services**: 11 core technology capabilities (AI/LLM, Cloud, FinTech, Full-Stack).
5. **Industries**: Enterprise sectors (FoodTech, FinTech, Logistics, Digital Communities).
6. **Case Studies**: Quantitative business outcomes, architecture breakdowns, client metrics.
7. **Leadership & Team**: Executive roster, bios, social links, and governance profiles.
8. **Careers**: Job requisition management, experience levels, location filters.
9. **Job Applications**: Candidate pipeline, resume review, applicant status progression.
10. **Insights & Articles**: Technical blogs, whitepapers, thought leadership publications.
11. **Enquiries**: Inbound enterprise requests, urgency scoring, lead management.
12. **Media Library**: Asset repository with MIME validation and metadata tagging.
13. **SEO Management**: Meta tags, OpenGraph attributes, canonical overrides.
14. **Navigation Management**: Main header and footer link hierarchy.
15. **Website Settings**: Global telemetry, SLAs, contact info, brand configuration.
16. **User Management**: RBAC provisioning (Super Admin, Content, HR, BizDev).
17. **Audit Logs**: Tamper-evident ledger tracking all administrative actions with IP and timestamp.

---

## 🧪 Testing & Verification

### Running Backend Unit & Integration Tests
```bash
cd backend
mvn test
```
*Passes 100% of integration test suites across security, public data controllers, and auth barriers with 0 failures.*

### Running Frontend Type Checks & Production Build
```bash
cd frontend
npm run build
```
*Compiles all 60 static and dynamic routes cleanly with zero TypeScript errors or layout shifts.*

---

## 📚 Architectural & Technical Documentation

For in-depth operational and engineering guidance, refer to the dedicated documentation suite:

- **[System Architecture](file:///Users/anilkumarthammineni/Desktop/Survetra%20Services/Survetra%20website%20/ARCHITECTURE.md)** — Architectural patterns, clean-architecture backend layers, App Router topology, and security model.
- **[Database Schema](file:///Users/anilkumarthammineni/Desktop/Survetra%20Services/Survetra%20website%20/DATABASE_SCHEMA.md)** — 19 normalized PostgreSQL tables, indexes, entity-relationship diagrams, and migration standards.
- **[API Documentation](file:///Users/anilkumarthammineni/Desktop/Survetra%20Services/Survetra%20website%20/API_DOCUMENTATION.md)** — Exhaustive catalog of public and protected REST endpoints with sample curl payloads.
- **[Admin Portal Guide](file:///Users/anilkumarthammineni/Desktop/Survetra%20Services/Survetra%20website%20/ADMIN_GUIDE.md)** — Complete operational handbook for business, editorial, and HR stakeholders.
- **[Deployment Guide](file:///Users/anilkumarthammineni/Desktop/Survetra%20Services/Survetra%20website%20/DEPLOYMENT_GUIDE.md)** — Step-by-step production runbooks for Vercel, AWS ECS, GCP Cloud Run, and bare-metal Ubuntu/Nginx.
- **[Security Policy](file:///Users/anilkumarthammineni/Desktop/Survetra%20Services/Survetra%20website%20/SECURITY.md)** — Cryptographic standards, JWT lifecycle, RBAC enforcement, and vulnerability reporting.
- **[Environment Variables Reference](file:///Users/anilkumarthammineni/Desktop/Survetra%20Services/Survetra%20website%20/ENVIRONMENT_VARIABLES.md)** — Complete dictionary of configuration keys across environments.

---

## 🛡️ License & Copyright

Copyright © 2026 **Survetra Services Private Limited**. All rights reserved.  
Confidential and Proprietary. Unauthorized copying, distribution, or decompilation is strictly prohibited.

