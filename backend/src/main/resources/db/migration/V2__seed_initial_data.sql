-- Survetra Services Initial Seed Data
-- Flyway Migration V2__seed_initial_data.sql

-- 1. Insert Roles
INSERT INTO roles (id, name, description) VALUES
    ('00000000-0000-0000-0000-000000000001', 'SUPER_ADMIN', 'Full administrative authority across all modules and security settings'),
    ('00000000-0000-0000-0000-000000000002', 'CONTENT_MANAGER', 'Editorial authority over products, services, insights, and media'),
    ('00000000-0000-0000-0000-000000000003', 'HR_MANAGER', 'Authority over recruitment listings and candidate applications'),
    ('00000000-0000-0000-0000-000000000004', 'BUSINESS_DEVELOPMENT_MANAGER', 'Access to incoming business inquiries and client partnerships')
ON CONFLICT (id) DO NOTHING;

-- Note: The first root administrator is provisioned dynamically at application startup
-- by DataInitializerService using the ADMIN_DEFAULT_EMAIL and ADMIN_DEFAULT_PASSWORD environment variables.

-- 2. Insert Products (Tiffzy, SocialSea, Nexus)
INSERT INTO products (id, slug, name, tagline, category, short_description, full_description, status, badge, features, tech_stack, metrics) VALUES
(
    '22222222-2222-2222-2222-222222222221',
    'tiffzy',
    'Tiffzy',
    'End-to-End Restaurant Technology & Food Service Management Ecosystem',
    'Restaurant & Commerce Technology',
    'A unified enterprise platform powering restaurant operations, dynamic ordering, kitchen workflow automation, multi-tier supply chain, and integrated digital wallets.',
    'Tiffzy is Survetra''s flagship enterprise restaurant ecosystem, engineered to solve the complex operational challenges of modern food service providers, cloud kitchens, and multi-location franchises.',
    'Production',
    'Enterprise Suite',
    '[{"title": "Comprehensive Restaurant Management", "description": "Multi-outlet administration, table routing, and live analytics."}, {"title": "Omnichannel Customer Ordering", "description": "Contactless QR ordering, consumer mobile web app, and real-time tracking."}, {"title": "Integrated Supply Chain", "description": "Automated ingredient depletion and supplier replenishment."}]'::jsonb,
    '["Next.js", "React Native", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes"]'::jsonb,
    '[{"label": "Orders Processed", "value": "2.5M+"}, {"label": "Uptime Reliability", "value": "99.98%"}, {"label": "Kitchen Ticket Prep Reduction", "value": "32%"}]'::jsonb
),
(
    '22222222-2222-2222-2222-222222222222',
    'socialsea',
    'SocialSea',
    'High-Engagement Community Platform & Next-Gen Social Networking System',
    'Social Media & Community Platforms',
    'A real-time, low-latency social networking engine engineered for verified communities, rich multimedia feeds, short-form video streaming, and encrypted messaging.',
    'SocialSea is Survetra''s modern social platform designed to redefine authentic digital connections. Built upon a distributed event-driven microservices architecture.',
    'Beta',
    'Consumer Platform',
    '[{"title": "Adaptive Algorithmic Feed", "description": "Vector graph recommendations for relevant, engaging feeds."}, {"title": "Ultra-Low-Latency Videos", "description": "Adaptive HLS/DASH video streaming under 280ms start times."}, {"title": "Encrypted Real-Time Messaging", "description": "WebSocket and WebRTC direct messaging."}]'::jsonb,
    '["Next.js", "React Native", "Go", "Spring Boot", "Cassandra", "PostgreSQL", "AWS S3", "WebRTC"]'::jsonb,
    '[{"label": "Peak Message Throughput", "value": "45K msg/sec"}, {"label": "P99 Feed Latency", "value": "< 42ms"}, {"label": "Active Beta Communities", "value": "1,200+"}]'::jsonb
),
(
    '22222222-2222-2222-2222-222222222223',
    'survetra-nexus',
    'Survetra Nexus (R&D)',
    'Autonomous Enterprise Agent & Workflow Orchestration Fabric',
    'AI & Enterprise Automation',
    'An internal and enterprise-facing AI agent orchestration mesh connecting enterprise data silos with contextual LLM decision engines.',
    'Survetra Nexus delivers autonomous agent workflows, secure RAG pipelines, and deterministic integration bridges across ERP, CRM, and bespoke company data stores.',
    'In Development',
    'Next Initiative',
    '[{"title": "Deterministic Multi-Agent Coordination", "description": "Autonomous task decomposition with verification steps."}, {"title": "Enterprise Secure RAG", "description": "Document ingestion with hybrid vector search."}]'::jsonb,
    '["Python", "Java 17", "LangGraph", "pgvector", "Spring AI", "Docker"]'::jsonb,
    '[{"label": "Target Accuracy", "value": "99.4%"}, {"label": "Supported Connectors", "value": "40+ APIs"}]'::jsonb
)
ON CONFLICT (id) DO NOTHING;

-- 4. Insert Global Settings
INSERT INTO site_settings (id, setting_key, setting_value, category, description) VALUES
    ('33333333-3333-3333-3333-333333333331', 'company_name', 'Survetra Services', 'GENERAL', 'Brand display name'),
    ('33333333-3333-3333-3333-333333333332', 'company_tagline', 'Engineering the Future. Building What Matters.', 'GENERAL', 'Corporate brand tagline'),
    ('33333333-3333-3333-3333-333333333333', 'contact_email', 'contact@survetra.com', 'CONTACT', 'Inbound inquiries destination'),
    ('33333333-3333-3333-3333-333333333334', 'contact_phone', '+91 (80) 4120-8900', 'CONTACT', 'Headquarters corporate line'),
    ('33333333-3333-3333-3333-333333333335', 'headquarters_location', 'Bengaluru, Karnataka, India', 'CONTACT', 'Primary physical operating office')
ON CONFLICT (id) DO NOTHING;

