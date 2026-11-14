# Production Deployment Guide — Survetra Services

## 1. Deployment Architectures Overview

The Survetra Services platform supports three battle-tested production deployment patterns depending on enterprise scale and infrastructure preference:

```
[Pattern A: Hybrid Cloud (Recommended)]
Frontend  ──> Vercel Edge Global Network
Backend   ──> AWS ECS / GCP Cloud Run / Render (Spring Boot Docker)
Database  ──> AWS RDS PostgreSQL 16 (Multi-AZ) / GCP Cloud SQL
Storage   ──> AWS S3 + CloudFront CDN

[Pattern B: Self-Hosted Docker Compose / Swarm]
Host VM   ──> Ubuntu 22.04 / 24.04 LTS (Docker Engine + Compose)
Services  ──> Nginx (Port 80/443) -> Next.js (Port 3000) + Spring Boot (Port 8080) + Postgres (Port 5432)

[Pattern C: Native Linux Systemd / Bare-Metal]
Web Tier  ──> Nginx + Node.js 20 (PM2 process manager)
App Tier  ──> Systemd service running Spring Boot jar on OpenJDK 17
DB Tier   ──> Dedicated PostgreSQL 16 server
```

---

## 2. Pattern A: Hybrid Cloud Deployment (Vercel + AWS / GCP)

### 2.1 Frontend Deployment on Vercel
1. Link your GitHub / GitLab repository containing the `/frontend` directory to Vercel.
2. In Project Settings, set the **Root Directory** to `frontend`.
3. Framework Preset: **Next.js** (automatically detected).
4. Configure Build & Development Settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm ci`
5. Configure Environment Variables in the Vercel Dashboard:
   - `NEXT_PUBLIC_API_URL`: `https://api.survetra.com/api/v1`
   - `NEXT_PUBLIC_SITE_URL`: `https://survetra.com`
6. Click **Deploy**. Vercel will provision edge CDN nodes across 300+ global locations with instant SSL.

---

### 2.2 Backend Deployment on AWS ECS / GCP Cloud Run
1. Build and push the backend Docker container to Amazon ECR or Google Artifact Registry:
   ```bash
   cd backend
   docker build -t survetra-backend:latest .
   docker tag survetra-backend:latest <ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/survetra-backend:latest
   docker push <ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/survetra-backend:latest
   ```
2. Provision an AWS RDS PostgreSQL 16 instance:
   - Multi-AZ deployment for high availability.
   - Set database name: `survetra_db`.
   - Security Group: Allow port 5432 inbound only from the ECS task security group.
3. Configure ECS Task Definition / Cloud Run Environment Variables:
   - `SPRING_PROFILES_ACTIVE`: `prod`
   - `DB_HOST`: `<rds-endpoint>.rds.amazonaws.com`
   - `DB_PORT`: `5432`
   - `DB_NAME`: `survetra_db`
   - `DB_USER`: `survetra_admin`
   - `DB_PASSWORD`: `<Strong-RDS-Password>`
   - `JWT_SECRET`: `<64-byte-hex-secret>`
   - `CORS_ALLOWED_ORIGINS`: `https://survetra.com,https://www.survetra.com`
4. Attach an Application Load Balancer (ALB) with an ACM SSL certificate for `api.survetra.com`.

---

## 3. Pattern B: Single-Server Docker Compose Runbook (Ubuntu 22.04 LTS)

### 3.1 Provisioning the Host
1. Connect to your clean Ubuntu server via SSH:
   ```bash
   ssh root@<server_ip>
   ```
2. Install Docker and Docker Compose plugin:
   ```bash
   apt-get update && apt-get install -y ca-certificates curl gnupg lsb-release
   mkdir -p /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
   apt-get update && apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
   ```

### 3.2 Deploying the Stack
1. Clone the repository and navigate to the project root:
   ```bash
   git clone https://github.com/anilchowdary4531/Survetra-Services-Website.git /opt/survetra
   cd /opt/survetra
   ```
2. Create the production `.env` file:
   ```bash
   cat <<EOF > .env
   POSTGRES_DB=survetra_db
   POSTGRES_USER=survetra_prod
   POSTGRES_PASSWORD=$(openssl rand -hex 24)
   JWT_SECRET=$(openssl rand -hex 32)
   ADMIN_DEFAULT_EMAIL=admin@survetra.com
   ADMIN_DEFAULT_PASSWORD=$(openssl rand -base64 18)
   CORS_ALLOWED_ORIGINS=https://survetra.com,https://www.survetra.com
   NEXT_PUBLIC_API_URL=https://survetra.com/api/v1
   NEXT_PUBLIC_SITE_URL=https://survetra.com
   EOF
   ```
3. Launch services in daemon mode:
   ```bash
   docker compose up --build -d
   ```
4. Verify all 4 containers are healthy:
   ```bash
   docker compose ps
   ```

### 3.3 Configuring SSL via Certbot
To secure the host with free Let's Encrypt SSL certificates:
```bash
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d survetra.com -d www.survetra.com
```

---

## 4. Health Checks, Monitoring & Observability

### 4.1 Backend Healthcheck
Spring Boot Actuator provides real-time health metrics at `/actuator/health`:
```bash
curl -I http://localhost:8080/actuator/health
```
Expected Response:
```json
{"status":"UP","components":{"db":{"status":"UP"},"diskSpace":{"status":"UP"},"ping":{"status":"UP"}}}
```

### 4.2 Application Logs
- **Docker Compose Logs**:
  ```bash
  docker compose logs -f --tail=100 backend
  docker compose logs -f --tail=100 frontend
  ```
- **Database Logs**:
  ```bash
  docker compose logs -f postgres
  ```

---

## 5. Backup & Disaster Recovery Procedures

### Automated Daily PostgreSQL Backup Script
Create `/etc/cron.daily/survetra-db-backup`:
```bash
#!/bin/bash
BACKUP_DIR="/var/backups/survetra"
mkdir -p "$BACKUP_DIR"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
docker exec survetra-postgres pg_dump -U survetra_prod survetra_db | gzip > "$BACKUP_DIR/db_$TIMESTAMP.sql.gz"
find "$BACKUP_DIR" -type f -name "db_*.sql.gz" -mtime +14 -delete
```
Make executable: `chmod +x /etc/cron.daily/survetra-db-backup`.

