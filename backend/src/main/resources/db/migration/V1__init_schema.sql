-- Survetra Services Database Initialization Schema
-- Flyway Migration V1__init_schema.sql

-- 1. Roles Table
CREATE TABLE IF NOT EXISTS roles (
    id UUID PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Permissions Table
CREATE TABLE IF NOT EXISTS permissions (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Role Permissions Join Table
CREATE TABLE IF NOT EXISTS role_permissions (
    role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    permission_id UUID NOT NULL REFERENCES permissions(id) ON DELETE CASCADE,
    PRIMARY KEY (role_id, permission_id)
);

-- 4. Users Table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. User Roles Join Table
CREATE TABLE IF NOT EXISTS user_roles (
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, role_id)
);

-- 6. Products Table (Tiffzy, SocialSea, etc.)
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY,
    slug VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    tagline VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'In Development',
    badge VARCHAR(50),
    features JSONB,
    tech_stack JSONB,
    metrics JSONB,
    external_url VARCHAR(255),
    demo_url VARCHAR(255),
    sort_order INT DEFAULT 0,
    meta_title VARCHAR(255),
    meta_description VARCHAR(500),
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY,
    slug VARCHAR(100) NOT NULL UNIQUE,
    title VARCHAR(200) NOT NULL,
    client_name VARCHAR(150) NOT NULL,
    category VARCHAR(100) NOT NULL,
    summary TEXT NOT NULL,
    description TEXT,
    thumbnail_url VARCHAR(500),
    status VARCHAR(50) NOT NULL DEFAULT 'Completed',
    completion_date VARCHAR(50),
    sort_order INT DEFAULT 0,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. Services Table (11 Practice Areas)
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY,
    slug VARCHAR(100) NOT NULL UNIQUE,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(100) NOT NULL,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    icon_name VARCHAR(50) NOT NULL,
    capabilities JSONB,
    deliverables JSONB,
    tech_stack JSONB,
    business_impact JSONB,
    status VARCHAR(50) NOT NULL DEFAULT 'PUBLISHED',
    sort_order INT DEFAULT 0,
    meta_title VARCHAR(255),
    meta_description VARCHAR(500),
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 9. Industries Table
CREATE TABLE IF NOT EXISTS industries (
    id UUID PRIMARY KEY,
    slug VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    tagline VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon_name VARCHAR(50) NOT NULL,
    key_solutions JSONB,
    featured_products JSONB,
    impact_highlights JSONB,
    status VARCHAR(50) NOT NULL DEFAULT 'PUBLISHED',
    sort_order INT DEFAULT 0,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. Case Studies Table
CREATE TABLE IF NOT EXISTS case_studies (
    id UUID PRIMARY KEY,
    slug VARCHAR(100) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    client_name VARCHAR(150) NOT NULL,
    industry VARCHAR(100) NOT NULL,
    challenge TEXT NOT NULL,
    solution TEXT NOT NULL,
    results JSONB,
    metrics JSONB,
    technologies_used JSONB,
    testimonial_quote TEXT,
    testimonial_author VARCHAR(200),
    status VARCHAR(50) NOT NULL DEFAULT 'PUBLISHED',
    sort_order INT DEFAULT 0,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 11. Team Members Table (Leadership)
CREATE TABLE IF NOT EXISTS team_members (
    id UUID PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    role VARCHAR(150) NOT NULL,
    category VARCHAR(100) NOT NULL,
    bio TEXT NOT NULL,
    avatar_url VARCHAR(500),
    linkedin_url VARCHAR(255),
    twitter_url VARCHAR(255),
    sort_order INT DEFAULT 0,
    status VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 12. Job Openings Table
CREATE TABLE IF NOT EXISTS job_openings (
    id UUID PRIMARY KEY,
    slug VARCHAR(150) NOT NULL UNIQUE,
    title VARCHAR(200) NOT NULL,
    department VARCHAR(100) NOT NULL,
    location VARCHAR(150) NOT NULL,
    employment_type VARCHAR(50) NOT NULL,
    experience_level VARCHAR(50) NOT NULL,
    overview TEXT NOT NULL,
    responsibilities JSONB,
    requirements JSONB,
    benefits JSONB,
    status VARCHAR(50) NOT NULL DEFAULT 'OPEN',
    sort_order INT DEFAULT 0,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 13. Job Applications Table
CREATE TABLE IF NOT EXISTS job_applications (
    id UUID PRIMARY KEY,
    job_opening_id UUID REFERENCES job_openings(id) ON DELETE SET NULL,
    applicant_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    position_applied VARCHAR(200) NOT NULL,
    resume_url VARCHAR(500) NOT NULL,
    cover_letter TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'SUBMITTED',
    admin_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 14. Articles Table (Insights & Blogs)
CREATE TABLE IF NOT EXISTS articles (
    id UUID PRIMARY KEY,
    slug VARCHAR(150) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    read_time VARCHAR(50) NOT NULL,
    published_date VARCHAR(50) NOT NULL,
    author_name VARCHAR(150) NOT NULL,
    author_role VARCHAR(150) NOT NULL,
    tags JSONB,
    status VARCHAR(50) NOT NULL DEFAULT 'PUBLISHED',
    sort_order INT DEFAULT 0,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 15. Enquiries Table (Contact Submissions)
CREATE TABLE IF NOT EXISTS enquiries (
    id UUID PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    business_email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(150),
    category VARCHAR(50) NOT NULL DEFAULT 'GENERAL',
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'NEW',
    ip_address VARCHAR(50),
    admin_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 16. Media Assets Table
CREATE TABLE IF NOT EXISTS media_assets (
    id UUID PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    file_type VARCHAR(100) NOT NULL,
    file_size VARCHAR(50) NOT NULL,
    url VARCHAR(500) NOT NULL,
    alt_text VARCHAR(255),
    storage_provider VARCHAR(50) DEFAULT 'LOCAL',
    storage_path VARCHAR(500),
    uploaded_by VARCHAR(150),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 17. Site Settings Table
CREATE TABLE IF NOT EXISTS site_settings (
    id UUID PRIMARY KEY,
    setting_key VARCHAR(100) NOT NULL UNIQUE,
    setting_value TEXT NOT NULL,
    category VARCHAR(50) NOT NULL DEFAULT 'GENERAL',
    description VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 18. Navigation Items Table
CREATE TABLE IF NOT EXISTS navigation_items (
    id UUID PRIMARY KEY,
    label VARCHAR(100) NOT NULL,
    url VARCHAR(255) NOT NULL,
    sort_order INT DEFAULT 0,
    location VARCHAR(50) NOT NULL DEFAULT 'Both',
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 19. Audit Logs Table
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY,
    user_id UUID,
    user_email VARCHAR(255),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(100) NOT NULL,
    entity_id VARCHAR(100),
    ip_address VARCHAR(50),
    details TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_industries_slug ON industries(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_job_openings_slug ON job_openings(slug);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);

