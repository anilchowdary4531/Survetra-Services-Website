# REST API Documentation — Survetra Services

## 1. Overview & Protocol Standards

The Survetra Services backend exposes an enterprise RESTful HTTP API compliant with OpenAPI 3.0 standards.

- **Base URL (Local)**: `http://localhost:8080/api/v1`
- **Base URL (Production)**: `https://survetra.com/api/v1`
- **Interactive Swagger Explorer**: `http://localhost:8080/swagger-ui/index.html`
- **OpenAPI Schema Definition**: `http://localhost:8080/v3/api-docs`
- **Content-Type**: `application/json; charset=UTF-8`

### Standard Response Envelope (`ApiResponse<T>`)
All JSON responses follow a structured envelope:
```json
{
  "success": true,
  "message": "Operation completed successfully.",
  "data": { ... },
  "timestamp": "2026-11-14T17:30:00Z"
}
```

### Standard Error Envelope
```json
{
  "success": false,
  "message": "Invalid credentials provided.",
  "timestamp": "2026-11-14T17:30:00Z"
}
```

---

## 2. Authentication Endpoints

### 2.1 Authenticate & Obtain JWT Token
- **Endpoint**: `POST /api/v1/auth/login`
- **Access**: Public
- **Description**: Verifies administrator credentials, performs rate limiting check, and issues an HMAC-SHA256 signed JWT token valid for 24 hours.

#### Request Payload:
```json
{
  "email": "admin@survetra.com",
  "password": "<your_admin_password>"
}
```

#### Response (200 OK):
```json
{
  "success": true,
  "message": "Authentication successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBzdXJ2ZXRyYS5jb20iLCJyb2xlcyI6WyJST0xFX1NVUEVSX0FETUlOIl19...",
    "type": "Bearer",
    "email": "admin@survetra.com",
    "fullName": "Super Administrator",
    "roles": ["ROLE_SUPER_ADMIN"]
  },
  "timestamp": "2026-11-14T17:30:00Z"
}
```

#### Example cURL:
```bash
curl -X POST http://localhost:8080/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@survetra.com","password":"<your_admin_password>"}'
```

---

### 2.2 Introspect Current User Identity
- **Endpoint**: `GET /api/v1/auth/me`
- **Access**: Authenticated (`Bearer <token>`)
- **Description**: Returns the profile details and permission matrix of the currently authenticated administrator.

#### Request Header:
```http
Authorization: Bearer <your_jwt_token>
```

#### Response (200 OK):
```json
{
  "success": true,
  "message": "User profile retrieved",
  "data": {
    "id": "11111111-1111-1111-1111-111111111111",
    "email": "admin@survetra.com",
    "fullName": "Super Administrator",
    "roles": ["ROLE_SUPER_ADMIN"]
  },
  "timestamp": "2026-11-14T17:30:00Z"
}
```

---

## 3. Public Web Endpoints (No Authentication Required)

These endpoints power the public corporate website. They are cached at the edge and backed by in-memory query indexes.

| HTTP Method | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/public/products` | Returns all active, published technology products (Tiffzy, SocialSea, Nexus). |
| `GET` | `/api/v1/public/products/{slug}` | Returns detailed entity record for a specific product by slug. |
| `GET` | `/api/v1/public/services` | Returns all published service offerings categorized by technical domain. |
| `GET` | `/api/v1/public/industries` | Returns supported industry verticals and business solution descriptions. |
| `GET` | `/api/v1/public/case-studies` | Returns published transformation case studies and client metrics. |
| `GET` | `/api/v1/public/careers` | Returns active job openings with department and location filters. |
| `GET` | `/api/v1/public/insights` | Returns published whitepapers, engineering articles, and editorial blogs. |
| `GET` | `/api/v1/public/leadership` | Returns executive board members, roles, bios, and LinkedIn profiles. |
| `GET` | `/api/v1/public/settings` | Returns public corporate metadata, SLA metrics, address, and contact numbers. |
| `POST` | `/api/v1/public/contact` | Submits an enterprise contact inquiry with server-side validation. |
| `POST` | `/api/v1/public/careers/apply` | Submits a job application with applicant details and resume URL. |

---

### 3.1 Submit Contact Inquiry
- **Endpoint**: `POST /api/v1/public/contact`
- **Access**: Public
- **Validation**:
  - `fullName`: Required, 2-150 characters
  - `businessEmail`: Required, valid RFC-5322 email syntax
  - `subject`: Required, 3-200 characters
  - `message`: Required, 10-5000 characters

#### Request Payload:
```json
{
  "fullName": "Alexander Vance",
  "businessEmail": "a.vance@globallogistics.com",
  "company": "Global Logistics Corp",
  "phone": "+1 (555) 234-5678",
  "subject": "Enterprise AI Agent Integration Inquiry",
  "category": "Enterprise Solutions",
  "message": "We are seeking to integrate autonomous multi-agent pipelines with our existing SAP ERP systems."
}
```

#### Response (200 OK):
```json
{
  "success": true,
  "message": "Thank you for contacting Survetra Services. Your enquiry has been received and routed to our solutions team.",
  "data": {
    "enquiryId": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    "status": "NEW"
  },
  "timestamp": "2026-11-14T17:30:00Z"
}
```

---

### 3.2 Submit Career Application
- **Endpoint**: `POST /api/v1/public/careers/apply`
- **Access**: Public

#### Request Payload:
```json
{
  "jobOpeningId": "33333333-3333-3333-3333-333333333331",
  "applicantName": "Candidate Applicant",
  "email": "candidate@example.com",
  "phone": "+91 98765 43210",
  "resumeUrl": "https://assets.survetra.com/resumes/applicant_cv.pdf",
  "coverLetter": "Extensive experience building distributed high-throughput consensus systems and real-time streaming engines."
}
```

#### Response (200 OK):
```json
{
  "success": true,
  "message": "Your application has been received successfully. Our talent team will review your profile shortly.",
  "data": {
    "applicationId": "b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e",
    "status": "PENDING"
  },
  "timestamp": "2026-11-14T17:30:00Z"
}
```

---

## 4. Protected Administration Endpoints

All admin endpoints require an HTTP `Authorization` header containing a valid Bearer token:
```http
Authorization: Bearer <valid_jwt_token>
```

### 4.1 Dashboard Telemetry & KPIs
- **Endpoint**: `GET /api/v1/admin/dashboard/stats`
- **Role Requirement**: Any authenticated administrative role
- **Description**: Returns real-time quantitative counts from the production database.

#### Response (200 OK):
```json
{
  "success": true,
  "message": "Dashboard statistics retrieved",
  "data": {
    "totalEnquiries": 12,
    "newEnquiries": 4,
    "publishedProducts": 3,
    "publishedProjects": 6,
    "activeJobOpenings": 5,
    "pendingApplications": 9,
    "publishedArticles": 7,
    "recentAuditLogs": [
      {
        "id": "e8f9a0b1-c2d3-4e5f-6a7b-8c9d0e1f2a3b",
        "action": "UPDATE_PRODUCT",
        "entityType": "Product",
        "entityId": "22222222-2222-2222-2222-222222222221",
        "actorEmail": "admin@survetra.com",
        "timestamp": "2026-11-14T17:28:14Z"
      }
    ]
  },
  "timestamp": "2026-11-14T17:30:00Z"
}
```

---

### 4.2 Content Management CRUD Matrix

The admin API exposes comprehensive REST operations for all content entities:

| Resource | Base Path | Permitted Roles | Actions Supported |
| :--- | :--- | :--- | :--- |
| **Products** | `/api/v1/admin/products` | `SUPER_ADMIN`, `CONTENT_MANAGER` | `GET`, `POST`, `PUT /{id}`, `DELETE /{id}` |
| **Projects** | `/api/v1/admin/projects` | `SUPER_ADMIN`, `CONTENT_MANAGER` | `GET`, `POST`, `PUT /{id}`, `DELETE /{id}` |
| **Services** | `/api/v1/admin/services` | `SUPER_ADMIN`, `CONTENT_MANAGER` | `GET`, `POST`, `PUT /{id}`, `DELETE /{id}` |
| **Industries** | `/api/v1/admin/industries` | `SUPER_ADMIN`, `CONTENT_MANAGER` | `GET`, `POST`, `PUT /{id}`, `DELETE /{id}` |
| **Case Studies** | `/api/v1/admin/case-studies` | `SUPER_ADMIN`, `CONTENT_MANAGER` | `GET`, `POST`, `PUT /{id}`, `DELETE /{id}` |
| **Leadership** | `/api/v1/admin/leadership` | `SUPER_ADMIN`, `CONTENT_MANAGER` | `GET`, `POST`, `PUT /{id}`, `DELETE /{id}` |
| **Careers** | `/api/v1/admin/careers` | `SUPER_ADMIN`, `HR_MANAGER` | `GET`, `POST`, `PUT /{id}`, `DELETE /{id}` |
| **Applications** | `/api/v1/admin/applications`| `SUPER_ADMIN`, `HR_MANAGER` | `GET`, `PUT /{id}/status`, `DELETE /{id}` |
| **Insights** | `/api/v1/admin/insights` | `SUPER_ADMIN`, `CONTENT_MANAGER` | `GET`, `POST`, `PUT /{id}`, `DELETE /{id}` |
| **Enquiries** | `/api/v1/admin/enquiries` | `SUPER_ADMIN`, `BIZDEV_MANAGER` | `GET`, `PUT /{id}/status`, `DELETE /{id}` |
| **Media** | `/api/v1/admin/media` | `SUPER_ADMIN`, `CONTENT_MANAGER` | `GET`, `POST (multipart)`, `DELETE /{id}` |
| **Settings** | `/api/v1/admin/settings` | `SUPER_ADMIN` | `GET`, `PUT` |
| **Users** | `/api/v1/admin/users` | `SUPER_ADMIN` | `GET`, `POST`, `PUT /{id}`, `DELETE /{id}` |
| **Audit Logs** | `/api/v1/admin/audit-logs`| `SUPER_ADMIN` | `GET (paginated, read-only)` |

