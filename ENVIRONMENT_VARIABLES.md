# Environment Variables Reference — Survetra Services

## 1. Overview & Safety Rules

This document outlines all configurable environment variables across the **Frontend (Next.js)** and **Backend (Spring Boot)** services.

### Core Security Directives:
1. **Never commit `.env` or `.env.local` files containing real secrets** to version control.
2. In production, supply secrets via managed secret vaults (AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault, or Vercel Environment Variables).
3. Any variable prefixed with `NEXT_PUBLIC_` is bundled into the client-side JavaScript artifact and is **publicly readable**. Never store private API keys or database passwords in `NEXT_PUBLIC_` variables.

---

## 2. Frontend Configuration (`frontend/`)

| Variable Name | Required | Default (Development) | Production Example | Description |
| :--- | :--- | :--- | :--- | :--- |
| `NODE_ENV` | Yes | `development` | `production` | Node.js execution runtime environment. |
| `PORT` | No | `3000` | `3000` | Port on which the Next.js server listens. |
| `NEXT_PUBLIC_API_URL` | Yes | `http://localhost:8080/api/v1` | `https://survetra.com/api/v1` | Public REST API base URL queried by client-side components. |
| `NEXT_PUBLIC_SITE_URL` | No | `http://localhost:3000` | `https://survetra.com` | Canonical root domain for sitemap and OpenGraph generation. |

### Sample `frontend/.env.local`:
```bash
NODE_ENV=development
PORT=3000
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 3. Backend Configuration (`backend/`)

| Variable Name | Required in Prod | Default (Dev Profile) | Production Example | Description |
| :--- | :--- | :--- | :--- | :--- |
| `SPRING_PROFILES_ACTIVE` | Yes | `dev` | `prod` | Active Spring profile (`dev` uses in-memory H2, `prod` requires PostgreSQL). |
| `SERVER_PORT` | No | `8080` | `8080` | Port on which the Spring Boot Tomcat container binds. |
| `DB_HOST` | In Prod | `localhost` | `survetra-postgres-rds.aws.internal` | PostgreSQL server hostname or IP. |
| `DB_PORT` | No | `5432` | `5432` | PostgreSQL server port. |
| `DB_NAME` | In Prod | `survetra_db` | `survetra_prod_db` | Target PostgreSQL database name. |
| `DB_USER` | In Prod | `survetra_user` | `survetra_master_admin` | Database connection username. |
| `DB_PASSWORD` | In Prod | None | `(Strong-Db-Password)` | Database connection password. |
| `JWT_SECRET` | In Prod | None | `(64-char Hex Secret)` | HMAC-SHA256 private key for admin JWT issuance. |
| `JWT_EXPIRATION_MS` | No | `86400000` (24h) | `86400000` | JWT token validity window in milliseconds. |
| `ADMIN_DEFAULT_EMAIL` | No | `admin@survetra.com` | `admin@survetra.com` | Initial root administrator account email address. |
| `ADMIN_DEFAULT_PASSWORD` | In Prod | None | `(Secure-Random-String)` | Password provisioned for initial Super Admin on first boot. |
| `CORS_ALLOWED_ORIGINS` | No | `http://localhost:3000` | `https://survetra.com,https://www.survetra.com` | Comma-delimited list of permitted CORS frontend domains. |
| `AWS_REGION` | If using S3 | `us-east-1` | `us-east-1` | AWS datacenter region for S3 media asset storage. |
| `AWS_S3_BUCKET` | If using S3 | `survetra-media-dev` | `survetra-production-assets` | Target AWS S3 bucket name. |
| `AWS_ACCESS_KEY_ID` | If using S3 | None | `AKIAIOSFODNN7EXAMPLE` | IAM access key for S3 bucket read/write operations. |
| `AWS_SECRET_ACCESS_KEY`| If using S3 | None | `wJalrXUtnFEMI/K7MDENG/bPxRfiCY` | IAM secret key for S3 bucket operations. |

### Sample `backend/.env`:
```bash
SPRING_PROFILES_ACTIVE=prod
SERVER_PORT=8080
DB_HOST=localhost
DB_PORT=5432
DB_NAME=survetra_db
DB_USER=survetra_user
DB_PASSWORD=replace_with_secure_production_db_password
JWT_SECRET=replace_with_64_character_hex_secret_key_for_jwt_signing
ADMIN_DEFAULT_EMAIL=admin@survetra.com
ADMIN_DEFAULT_PASSWORD=replace_with_secure_admin_password
CORS_ALLOWED_ORIGINS=http://localhost:3000,https://survetra.com
```

