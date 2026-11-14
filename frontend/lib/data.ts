export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  status: "Active" | "Beta" | "In Development" | "Production";
  badge: string;
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
  techStack: string[];
  externalUrl?: string;
  demoUrl?: string;
  metrics?: { label: string; value: string }[];
  screenshots?: { caption: string; url: string }[];
  relatedCaseStudySlug?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: "AI & Intelligence" | "Core Engineering" | "Cloud & Infrastructure" | "Enterprise & Business";
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  capabilities: string[];
  deliverables: string[];
  techStack: string[];
  businessImpact: string[];
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  keySolutions: string[];
  featuredProducts?: string[];
  impactHighlights: { label: string; value: string }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
  technologiesUsed: string[];
  coverGradient: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "Executive Leadership" | "Technology & Engineering" | "Product & Design";
  bio: string;
  avatarUrl: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export interface JobOpening {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: "Full-time" | "Contract" | "Remote Friendly";
  experienceLevel: "Mid-Level" | "Senior" | "Lead" | "Staff / Lead" | "Principal";
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Engineering" | "AI & Innovation" | "Architecture" | "Product Strategy";
  readTime: string;
  publishedDate: string;
  authorName: string;
  authorRole: string;
  tags: string[];
  content: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "prod-tiffzy",
    slug: "tiffzy",
    name: "Tiffzy",
    tagline: "End-to-End Restaurant Technology & Food Service Management Ecosystem",
    category: "Restaurant & Commerce Technology",
    shortDescription: "A unified enterprise platform powering restaurant operations, dynamic ordering, kitchen workflow automation, multi-tier supply chain, and integrated digital wallets.",
    fullDescription: "Tiffzy is Survetra's flagship enterprise restaurant ecosystem, engineered to solve the complex operational challenges of modern food service providers, cloud kitchens, and multi-location franchises. The platform consolidates high-frequency tabletop ordering, intelligent kitchen display routing (KDS), automated inventory tracking, real-time supplier replenishment, and proprietary payment settlement into a single, cohesive cloud ecosystem.",
    status: "Production",
    badge: "Enterprise Suite",
    features: [
      {
        title: "Comprehensive Restaurant Management",
        description: "Centralized multi-outlet administration, role-based table routing, menu versioning, and real-time operational analytics."
      },
      {
        title: "Omnichannel Customer Ordering",
        description: "Contactless QR ordering, customizable consumer mobile web app, conversational ordering interfaces, and live order tracking."
      },
      {
        title: "Integrated Supply Chain & Procurement",
        description: "Automated ingredient depletion tracking, supplier vendor management, low-stock threshold triggers, and bulk purchase order workflows."
      },
      {
        title: "Enterprise Payments & Settlement",
        description: "Multi-gateway payment routing, split billing, instantaneous digital receipts, and regulatory compliance out of the box."
      },
      {
        title: "Proprietary Tiffzy Wallet & Loyalty",
        description: "Closed-loop customer wallet, automated cashback tiers, behavioral reward mechanisms, and seamless refund processing."
      },
      {
        title: "Delivery Orchestration & Fleet Logistics",
        description: "Dynamic route calculation, third-party delivery dispatch integration, and in-house rider tracking with real-time ETA updates."
      }
    ],
    techStack: ["Next.js", "React Native", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes"],
    metrics: [
      { label: "Orders Processed", value: "2.5M+" },
      { label: "Uptime Reliability", value: "99.98%" },
      { label: "Kitchen Ticket Time Reduction", value: "32%" },
      { label: "Multi-Outlet Support", value: "500+ Hubs" }
    ],
    screenshots: [
      { caption: "Operations Command Center", url: "/images/products/tiffzy-dashboard.png" },
      { caption: "Real-time Kitchen Display System", url: "/images/products/tiffzy-kds.png" },
      { caption: "Supply Chain & Inventory Management", url: "/images/products/tiffzy-inventory.png" }
    ],
    relatedCaseStudySlug: "scaling-cloud-kitchen-operations-with-tiffzy"
  },
  {
    id: "prod-socialsea",
    slug: "socialsea",
    name: "SocialSea",
    tagline: "High-Engagement Community Platform & Next-Gen Social Networking System",
    category: "Social Media & Community Platforms",
    shortDescription: "A real-time, low-latency social networking engine engineered for verified communities, rich multimedia feeds, short-form video streaming, and encrypted messaging.",
    fullDescription: "SocialSea is Survetra's modern social platform designed to redefine authentic digital connections. Built upon a distributed event-driven microservices architecture, SocialSea features intelligent interest-graph recommendation algorithms, high-throughput short video delivery, end-to-end encrypted direct messaging, ephemeral story feeds, and purpose-driven community spaces.",
    status: "Beta",
    badge: "Consumer Platform",
    features: [
      {
        title: "Adaptive Algorithmic Social Feed",
        description: "Personalized content curation powered by graph-based vector embeddings, ensuring relevant, safe, and engaging feed experiences."
      },
      {
        title: "Ultra-Low-Latency Short Videos",
        description: "Adaptive HLS/DASH video streaming, in-app video editing, sound overlay syncing, and optimized mobile GPU rendering."
      },
      {
        title: "Encrypted Real-Time Messaging",
        description: "WebSocket and WebRTC powered peer-to-peer and group communications with granular privacy controls."
      },
      {
        title: "Ephemeral Stories & Live Moments",
        description: "24-hour visual storytelling with interactive polls, audience reactions, and high-speed cloud media compression."
      },
      {
        title: "Specialized Topic Communities",
        description: "Moderated community hubs with tiered membership, governance tools, collaborative wikis, and structured event hosting."
      },
      {
        title: "Creator Monetization & Tipping",
        description: "Micro-transactions, subscription badges, direct creator support, and transparent payout reconciliation."
      }
    ],
    techStack: ["Next.js", "React Native", "Go", "Spring Boot", "Cassandra", "PostgreSQL", "AWS S3 / CloudFront", "WebRTC"],
    metrics: [
      { label: "Peak Message Throughput", value: "45K msg/sec" },
      { label: "P99 Feed Latency", value: "< 42ms" },
      { label: "Active Beta Communities", value: "1,200+" },
      { label: "Video Start Time", value: "< 280ms" }
    ],
    screenshots: [
      { caption: "SocialSea Feed & Discovery", url: "/images/products/socialsea-feed.png" },
      { caption: "Real-time Messaging Interface", url: "/images/products/socialsea-chat.png" },
      { caption: "Community Hub Workspace", url: "/images/products/socialsea-community.png" }
    ],
    relatedCaseStudySlug: "distributed-streaming-architecture-for-socialsea"
  },
  {
    id: "prod-survetra-nexus",
    slug: "survetra-nexus",
    name: "Survetra Nexus (R&D)",
    tagline: "Autonomous Enterprise Agent & Workflow Orchestration Fabric",
    category: "AI & Enterprise Automation",
    shortDescription: "An internal and enterprise-facing AI agent orchestration mesh that connects enterprise data silos with contextual LLM decision engines.",
    fullDescription: "Survetra Nexus represents our next-generation enterprise AI ecosystem, delivering autonomous agent workflows, secure RAG pipelines, and deterministic integration bridges across ERP, CRM, and bespoke company data stores.",
    status: "In Development",
    badge: "Next Initiative",
    features: [
      {
        title: "Deterministic Multi-Agent Coordination",
        description: "Multi-agent task decomposition with autonomous planning, verification steps, and human-in-the-loop checkpoints."
      },
      {
        title: "Enterprise Secure RAG Pipeline",
        description: "Document ingestion, hybrid vector/keyword search, and role-based access control directly inherited from enterprise IAM."
      },
      {
        title: "Zero-Data-Retention Safeguards",
        description: "Air-gapped deployment compatibility, model-agnostic routing, and rigorous data residency protection."
      }
    ],
    techStack: ["Python", "Java 17", "LangGraph", "pgvector", "Spring AI", "Docker", "Ollama / Bedrock"],
    metrics: [
      { label: "Target Agent Accuracy", value: "99.4%" },
      { label: "Supported Connectors", value: "40+ APIs" },
      { label: "Audit Traceability", value: "100%" }
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "serv-ai-ml",
    slug: "ai-and-machine-learning",
    title: "AI and Machine Learning",
    category: "AI & Intelligence",
    shortDescription: "Custom machine learning models, predictive intelligence, computer vision, and data engineering pipelines designed for production scale.",
    fullDescription: "Survetra delivers end-to-end artificial intelligence solutions from foundational data readiness to custom predictive modeling and operationalized MLOps pipelines. We transform complex data landscapes into high-accuracy, reliable decision engines that give enterprises decisive competitive advantages.",
    iconName: "BrainCircuit",
    capabilities: [
      "Custom Supervised & Unsupervised Model Training",
      "Predictive Analytics & Forecasting Engines",
      "Computer Vision & Optical Character Recognition (OCR)",
      "Time-Series Anomaly Detection",
      "Automated MLOps & Continuous Training Pipelines"
    ],
    deliverables: [
      "Production-grade model inference services",
      "Feature store architecture & data ingestion pipelines",
      "Model drift monitoring & telemetry dashboards",
      "Complete technical documentation & model cards"
    ],
    techStack: ["PyTorch", "TensorFlow", "Scikit-Learn", "Kubeflow", "MLflow", "FastAPI", "Python"],
    businessImpact: [
      "Automate manual verification workflows by up to 85%",
      "Predict customer churn and inventory demand with high precision",
      "Accelerate speed-to-insight from weeks to sub-second queries"
    ]
  },
  {
    id: "serv-gen-ai",
    slug: "generative-ai-and-llm",
    title: "Generative AI and LLM Solutions",
    category: "AI & Intelligence",
    shortDescription: "Custom LLM fine-tuning, domain adaptation, synthetic data generation, and enterprise generative AI integration.",
    fullDescription: "We engineer enterprise-grade generative AI applications that go far beyond standard prompts. Our team specializes in domain-specific fine-tuning, quantization for edge or private cloud inference, synthetic data generation, and guardrail enforcement to deliver reliable, hallucination-resistant generative intelligence.",
    iconName: "Sparkles",
    capabilities: [
      "Foundation Model Fine-Tuning (LoRA, QLoRA)",
      "Private & Air-Gapped LLM Deployments",
      "Structured Output Synthesis & JSON Schema Enforcement",
      "Content Generation & Document Transformation",
      "Hallucination Mitigation & Output Guardrails"
    ],
    deliverables: [
      "Custom fine-tuned weights and model endpoints",
      "Enterprise prompt engineering frameworks",
      "Semantic safety and compliance filtering layer",
      "Scalable token cost optimization architecture"
    ],
    techStack: ["OpenAI API", "Anthropic Claude", "Llama 3", "vLLM", "Hugging Face", "Ollama", "Triton"],
    businessImpact: [
      "Enable automated intelligent document synthesis",
      "Reduce customer support ticket handling times by 60%",
      "Protect intellectual property with zero-data-leakage architectures"
    ]
  },
  {
    id: "serv-rag-agents",
    slug: "rag-and-ai-agents",
    title: "RAG and Autonomous AI Agents",
    category: "AI & Intelligence",
    shortDescription: "Advanced Retrieval-Augmented Generation (RAG) and autonomous agent workflows with deterministic enterprise tool execution.",
    fullDescription: "Bridge the gap between raw generative models and your proprietary corporate knowledge. We architect hybrid vector search pipelines, multi-hop reasoning architectures, and multi-agent coordination frameworks that autonomously execute complex enterprise tasks with complete transparency.",
    iconName: "Bot",
    capabilities: [
      "Hybrid Vector & BM25 Keyword Retrieval",
      "Hierarchical Chunking & Re-ranking Strategies",
      "Multi-Agent Task Orchestration & Consensus",
      "Tool Calling & API Transaction Safeguards",
      "Vector Database Benchmarking & Optimization"
    ],
    deliverables: [
      "Enterprise RAG knowledge repository",
      "Autonomous agent task executors with human approvals",
      "Evaluation benchmarks with RAGAS / TruLens metrics",
      "Comprehensive telemetry and token tracing"
    ],
    techStack: ["LangChain", "LlamaIndex", "LangGraph", "Pinecone", "Qdrant", "pgvector", "Spring AI"],
    businessImpact: [
      "Instantaneous, grounded answers from thousands of corporate PDFs and wikis",
      "Multi-step automated workflows without manual context switching",
      "Auditable execution logs ensuring enterprise compliance"
    ]
  },
  {
    id: "serv-web-dev",
    slug: "web-application-development",
    title: "Web Application Development",
    category: "Core Engineering",
    shortDescription: "Ultra-fast, accessible, and resilient web applications built with Next.js, React, TypeScript, and modern headless architectures.",
    fullDescription: "Survetra builds web applications that combine aesthetic elegance with uncompromising technical performance. From high-conversion digital experiences to data-intensive internal web consoles, our architectures prioritize Core Web Vitals, accessibility, modular component design, and zero-downtime scalability.",
    iconName: "Globe",
    capabilities: [
      "Next.js App Router Architecture & Server Components",
      "Progressive Web Apps (PWA) with Offline Capability",
      "Enterprise Design Systems & Reusable Component Libraries",
      "State Management & Real-time WebSockets",
      "Accessibility (WCAG 2.1 AA) & Performance Engineering"
    ],
    deliverables: [
      "Production-ready Next.js application codebase",
      "Storybook or Figma design token synchronization",
      "Automated CI/CD deployment pipelines",
      "End-to-end testing suite (Playwright / Cypress)"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "GraphQL"],
    businessImpact: [
      "Achieve 95+ Core Web Vitals scores for superior SEO ranking",
      "Deliver sub-second page loads across mobile and desktop devices",
      "Accelerate feature time-to-market with unified component systems"
    ]
  },
  {
    id: "serv-mobile-dev",
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    category: "Core Engineering",
    shortDescription: "Native and cross-platform iOS and Android apps with fluid 120fps animations, offline-first sync, and biometric security.",
    fullDescription: "We engineer consumer and enterprise mobile applications that deliver native fluidity and hardware-level performance. Whether deploying a global social platform or an industrial field management tool, our mobile solutions feature biometric authentication, robust offline data synchronization, and optimized battery usage.",
    iconName: "Smartphone",
    capabilities: [
      "Cross-Platform React Native & Flutter Engineering",
      "Native iOS (Swift) & Android (Kotlin) Optimization",
      "Offline-First SQLite / WatermelonDB Sync Engines",
      "Hardware Integrations (BLE, NFC, Camera, Biometrics)",
      "App Store & Google Play Release Management"
    ],
    deliverables: [
      "Native iOS and Android binary builds",
      "Over-the-air (OTA) update infrastructure",
      "Crashlytics and performance telemetry integration",
      "Automated mobile testing pipelines"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Fastlane", "SQLite"],
    businessImpact: [
      "Unified single codebase reducing mobile development overhead by 40%",
      "Consistent 60–120 FPS render performance across diverse device tiers",
      "Flawless offline operation in areas with intermittent connectivity"
    ]
  },
  {
    id: "serv-backend-eng",
    slug: "backend-engineering",
    title: "Backend Engineering & Microservices",
    category: "Core Engineering",
    shortDescription: "High-throughput, event-driven distributed backends, RESTful and gRPC services built on Java/Spring Boot and Go.",
    fullDescription: "The bedrock of every resilient product is its backend engineering. Survetra designs high-concurrency microservice architectures capable of serving millions of requests per second with strict data integrity, zero race conditions, and sub-millisecond database queries.",
    iconName: "Server",
    capabilities: [
      "Spring Boot 3 & Java 17/21 Microservices",
      "High-Performance Go Microservices",
      "Event-Driven Architecture with Kafka & RabbitMQ",
      "Distributed Caching with Redis & In-Memory Grids",
      "Relational & NoSQL Database Optimization"
    ],
    deliverables: [
      "Containerized microservice codebases",
      "OpenAPI 3 / Swagger documentation",
      "Comprehensive unit and integration test suites",
      "Database schema migration scripts (Flyway / Liquibase)"
    ],
    techStack: ["Java 17/21", "Spring Boot", "Go", "PostgreSQL", "Kafka", "Redis", "gRPC"],
    businessImpact: [
      "Handle massive traffic spikes without service degradation",
      "Achieve 99.99% service availability with automated health checks",
      "Maintain ACID data guarantees across critical financial workflows"
    ]
  },
  {
    id: "serv-cloud-devops",
    slug: "cloud-and-devops",
    title: "Cloud & DevOps Engineering",
    category: "Cloud & Infrastructure",
    shortDescription: "Cloud-native architectures, Kubernetes orchestration, Infrastructure as Code (IaC), and automated GitOps CI/CD pipelines.",
    fullDescription: "We accelerate your delivery velocity while fortifying infrastructure security and reducing cloud expenditure. From multi-region AWS and GCP deployments to automated zero-trust security postures, our DevOps engineers build automated foundations that empower development teams.",
    iconName: "Cloud",
    capabilities: [
      "Infrastructure as Code with Terraform & Pulumi",
      "Kubernetes (EKS, GKE) Cluster Design & Maintenance",
      "GitOps Continuous Deployment (ArgoCD, GitHub Actions)",
      "Zero-Trust Network Architecture & Vault Secrets Management",
      "Cloud FinOps & Resource Cost Optimization"
    ],
    deliverables: [
      "Modular Terraform infrastructure modules",
      "Kubernetes Helm charts and deployment manifests",
      "Prometheus & Grafana centralized observability stack",
      "Automated security scanning in CI/CD pipeline"
    ],
    techStack: ["AWS", "Google Cloud", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "ArgoCD"],
    businessImpact: [
      "Reduce deployment lead time from days to under 15 minutes",
      "Achieve significant cloud cost reductions through automated sizing",
      "Guarantee automated disaster recovery with multi-zone failovers"
    ]
  },
  {
    id: "serv-enterprise-soft",
    slug: "enterprise-software",
    title: "Enterprise Software & Systems Integration",
    category: "Enterprise & Business",
    shortDescription: "Scalable enterprise ERP/CRM extensions, custom business engines, and legacy system modernization.",
    fullDescription: "Modern enterprises require software that adapts to their unique operational logic rather than forcing rigid vendor constraints. Survetra designs custom enterprise portals, middleware integration fabrics, and legacy modernization roadmaps that streamline mission-critical business operations.",
    iconName: "Layers",
    capabilities: [
      "Custom ERP / CRM System Architecture",
      "Legacy Monolith to Microservices Modernization",
      "Enterprise Middleware & Service Bus Integration",
      "Role-Based Access Control (RBAC) & SAML/SSO Integration",
      "Automated Business Workflow Engines"
    ],
    deliverables: [
      "Production-grade enterprise web portals",
      "Secure bidirectional integration adapters",
      "Comprehensive compliance audit logs",
      "Executive role administration dashboards"
    ],
    techStack: ["Spring Boot", "Next.js", "PostgreSQL", "Keycloak", "ActiveMQ", "Docker"],
    businessImpact: [
      "Eliminate repetitive manual data entry across disparate systems",
      "Enforce compliance and data governance with end-to-end audit trails",
      "Modernize legacy platforms without disrupting ongoing business"
    ]
  },
  {
    id: "serv-payment-int",
    slug: "payment-integrations",
    title: "Payment Integrations & FinTech",
    category: "Enterprise & Business",
    shortDescription: "Secure payment gateway integrations, multi-currency checkout, escrow wallets, and PCI-DSS compliant workflows.",
    fullDescription: "From dynamic restaurant bill splitting to digital wallet ecosystems and recurring global subscription billing, Survetra builds bulletproof financial technology integrations with strict idempotency, fraud detection, and reconciliation automation.",
    iconName: "CreditCard",
    capabilities: [
      "Stripe, Razorpay, Adyen, and PayPal Integrations",
      "Proprietary Digital Wallet & Ledger Architecture",
      "Automated Multi-Party Split Payments & Payouts",
      "Idempotent Webhook Processing & Reconciliation",
      "PCI-DSS Level 1 Architectural Compliance"
    ],
    deliverables: [
      "Secure payment checkout UI and tokenization flows",
      "Double-entry bookkeeping ledger backend",
      "Automated settlement and refund processing services",
      "Fraud telemetry and dispute management integration"
    ],
    techStack: ["Stripe API", "Razorpay", "Spring Boot", "PostgreSQL", "Redis", "Kafka"],
    businessImpact: [
      "Zero lost transactions via idempotent state machine processing",
      "Support multiple currencies and regional payment methods",
      "Accelerate merchant payout reconciliation times"
    ]
  },
  {
    id: "serv-digital-trans",
    slug: "digital-transformation",
    title: "Digital Transformation & Strategy",
    category: "Enterprise & Business",
    shortDescription: "End-to-end digital roadmaps, tech stack audits, UX modernization, and enterprise agile operating models.",
    fullDescription: "Digital transformation is not merely about writing code—it is about orchestrating people, processes, and technology toward tangible commercial outcomes. Survetra partners with executive leadership to audit current architecture, identify high-leverage digital opportunities, and implement scalable technology foundations.",
    iconName: "Compass",
    capabilities: [
      "Technology Stack & Architecture Health Audits",
      "Digital Product Roadmap Planning",
      "Customer Journey Mapping & UX Overhauls",
      "Data Governance & Modernization Strategies",
      "Continuous Delivery Culture Adoption"
    ],
    deliverables: [
      "Comprehensive architecture assessment report",
      "Phased transformation execution roadmap",
      "Executive technical KPI scorecards",
      "Hands-on engineering enablement workshops"
    ],
    techStack: ["Modern Cloud Architectures", "API-First Systems", "Data Lakes", "Micro-frontends"],
    businessImpact: [
      "De-risk major technology investments with phased execution",
      "Improve customer retention through modernized digital interfaces",
      "Transform engineering velocity from quarterly to daily deployments"
    ]
  },
  {
    id: "serv-custom-soft",
    slug: "custom-software-solutions",
    title: "Custom Software Solutions",
    category: "Core Engineering",
    shortDescription: "Bespoke digital products designed from the ground up for high-growth startups and established industry leaders.",
    fullDescription: "When off-the-shelf software falls short of your ambitious operational vision, Survetra engineers tailored software solutions built to your exact specifications. We take full ownership of the product lifecycle from initial discovery and prototyping to production launch and ongoing optimization.",
    iconName: "Code2",
    capabilities: [
      "Turnkey Product Development from Concept to Scale",
      "Rapid Interactive Prototyping & MVP Builds",
      "High-Performance Domain-Specific Algorithms",
      "Complex Multi-Tenant SaaS Architecture",
      "Long-Term Maintenance & SLA Support"
    ],
    deliverables: [
      "Full intellectual property ownership of source code",
      "Scalable multi-tenant cloud deployment",
      "Comprehensive test suites & documentation",
      "Dedicated continuous maintenance support"
    ],
    techStack: ["Next.js", "Spring Boot", "Python", "PostgreSQL", "AWS / GCP"],
    businessImpact: [
      "Differentiate your business with proprietary technology assets",
      "Avoid recurring per-seat licensing fees of generic software",
      "Scale architecture smoothly alongside customer growth"
    ]
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: "ind-food-restaurant",
    slug: "food-and-restaurant-technology",
    name: "Food & Restaurant Technology",
    tagline: "Intelligent hospitality ecosystems and seamless digital dining operations",
    description: "From cloud kitchens to multi-location restaurant chains, we engineer connected ecosystems that streamline table ordering, kitchen routing, inventory depletion, and delivery dispatch.",
    iconName: "UtensilsCrossed",
    keySolutions: [
      "Contactless QR Table Ordering & Mobile Web Menus",
      "Intelligent Kitchen Display System (KDS) Routing",
      "Automated Ingredient Depletion & Procurement",
      "Digital Wallet, Loyalty & Split Payments",
      "Multi-Brand Cloud Kitchen Operations"
    ],
    featuredProducts: ["Tiffzy"],
    impactHighlights: [
      { label: "Kitchen prep time reduction", value: "32%" },
      { label: "Table turnover acceleration", value: "24%" },
      { label: "Inventory shrinkage decrease", value: "18%" }
    ]
  },
  {
    id: "ind-fintech",
    slug: "financial-technology",
    name: "Financial Technology & Payments",
    tagline: "High-security financial backends, payment orchestration, and ledger systems",
    description: "We build compliant, idempotent financial software that handles millions of transactions with zero margin for error, supporting multi-gateway routing, digital wallets, and automated reconciliation.",
    iconName: "Landmark",
    keySolutions: [
      "PCI-DSS Compliant Multi-Gateway Payment Routing",
      "Double-Entry General Ledger Core Systems",
      "Automated Real-Time Fraud & Anomaly Detection",
      "Digital Wallets & Stored-Value Accounts",
      "Automated Regulatory & Tax Reporting"
    ],
    impactHighlights: [
      { label: "Transaction uptime", value: "99.99%" },
      { label: "Settlement processing speed", value: "< 2.5s" },
      { label: "Chargeback dispute reduction", value: "45%" }
    ]
  },
  {
    id: "ind-enterprise",
    slug: "enterprise-solutions",
    name: "Enterprise & Cloud Platforms",
    tagline: "Scalable cloud-native backbones and digital workflow orchestration",
    description: "Empowering large enterprises with modern distributed microservices, automated cloud infrastructure, and integrated business portals that eliminate operational friction.",
    iconName: "Building2",
    keySolutions: [
      "Custom ERP & Multi-Department Portals",
      "Event-Driven Integration Architecture",
      "Automated Kubernetes GitOps Workflows",
      "Zero-Trust Identity & Access Management",
      "Enterprise Data Warehousing & Analytics"
    ],
    impactHighlights: [
      { label: "Process automation rate", value: "70%" },
      { label: "Infrastructure spend optimization", value: "35%" },
      { label: "Release frequency increase", value: "8x" }
    ]
  },
  {
    id: "ind-social-digital",
    slug: "social-and-digital-platforms",
    name: "Social & Digital Platforms",
    tagline: "High-throughput community applications and low-latency interactive media",
    description: "Architecting interactive digital consumer platforms with distributed social graphs, low-latency video streaming, real-time messaging, and creator monetization.",
    iconName: "Share2",
    keySolutions: [
      "Distributed Social Graph & Feed Recommendations",
      "Low-Latency Adaptive Video Streaming (HLS/DASH)",
      "End-to-End Encrypted Group Messaging",
      "Creator Monetization & Virtual Gifting",
      "AI-Powered Content Moderation"
    ],
    featuredProducts: ["SocialSea"],
    impactHighlights: [
      { label: "Daily active interactions", value: "10M+" },
      { label: "P99 Feed query response", value: "< 45ms" },
      { label: "Toxic content auto-flagging", value: "99.2%" }
    ]
  },
  {
    id: "ind-supply-chain",
    slug: "supply-chain-logistics",
    name: "Supply Chain & Logistics",
    tagline: "Real-time fleet tracking, automated warehousing, and route optimization",
    description: "Bridging physical logistics and digital intelligence with predictive stock replenishment, dynamic delivery routing, and end-to-end supply chain transparency.",
    iconName: "Truck",
    keySolutions: [
      "Real-time Fleet Telemetry & GPS Dispatch",
      "Dynamic Route Optimization & Multi-Drop Planning",
      "Predictive Warehouse Inventory Depletion",
      "Supplier Procurement & RFQ Management",
      "Cold-Chain & Environmental Sensor Ingestion"
    ],
    impactHighlights: [
      { label: "Fuel & transit cost savings", value: "22%" },
      { label: "On-time delivery performance", value: "98.7%" },
      { label: "Stockout event reduction", value: "40%" }
    ]
  },
  {
    id: "ind-healthcare",
    slug: "healthcare-technology",
    name: "Healthcare & Life Sciences",
    tagline: "Secure, HIPAA-compliant patient experiences and intelligent clinical data systems",
    description: "Engineering secure digital health applications, telemedicine platforms, and patient engagement portals with strict adherence to medical privacy and data protection standards.",
    iconName: "Activity",
    keySolutions: [
      "HIPAA-Compliant Patient Portals & Telehealth",
      "Secure Electronic Health Record (EHR) Integrations",
      "Clinical Trial Enrollment & Survey Pipelines",
      "Diagnostic Image Archival & Processing",
      "Predictive Patient Appointment Scheduling"
    ],
    impactHighlights: [
      { label: "Patient check-in wait time drop", value: "50%" },
      { label: "Data privacy compliance score", value: "100%" },
      { label: "Telehealth session stability", value: "99.9%" }
    ]
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "cs-1",
    slug: "scaling-cloud-kitchen-operations-with-tiffzy",
    title: "Transforming 80+ Cloud Kitchen Outlets into an Automated High-Volume Network",
    clientName: "Apex Culinary Group",
    industry: "Food & Restaurant Technology",
    challenge: "Apex Culinary operated 80+ virtual kitchen hubs across 6 metropolitan cities. Disparate POS terminals, manual inventory spreadsheets, and disconnected delivery drivers caused frequent order errors, high ingredient shrinkage (14%), and average kitchen ticket times exceeding 28 minutes during peak rushes.",
    solution: "Survetra deployed the Tiffzy ecosystem across all locations. We unified digital ordering channels into an intelligent Kitchen Display System (KDS), implemented automated recipe-level ingredient depletion, and linked regional suppliers to automated restocking thresholds.",
    results: [
      "Reduced average kitchen ticket prep time from 28 mins to 17 mins (-39%)",
      "Decreased monthly food wastage and inventory shrinkage by 65%",
      "Processed over 1.8M orders in the first 6 months with 99.98% platform uptime",
      "Eliminated manual reconciliation with automated multi-channel financial settlement"
    ],
    metrics: [
      { label: "Ticket Prep Time", value: "-39%" },
      { label: "Food Wastage Saved", value: "$420K" },
      { label: "Orders Handled", value: "1.8M+" },
      { label: "System Availability", value: "99.98%" }
    ],
    testimonialQuote: "Tiffzy transformed our entire operational reality. What used to be chaotic dinner rush ticket mismanagement is now a calm, automated kitchen assembly line.",
    testimonialAuthor: "Marcus Vance, Chief Operating Officer, Apex Culinary Group",
    technologiesUsed: ["Spring Boot", "Next.js", "PostgreSQL", "Redis", "Kafka", "Docker"],
    coverGradient: "from-amber-500/20 via-orange-600/10 to-transparent"
  },
  {
    id: "cs-2",
    slug: "distributed-streaming-architecture-for-socialsea",
    title: "Architecting a Sub-50ms Global Social Feed for Millions of Active Community Members",
    clientName: "SocialSea Network",
    industry: "Social & Digital Platforms",
    challenge: "Social platforms face extreme data velocity. SocialSea required a media ingestion and feed distribution engine capable of handling tens of thousands of video uploads per hour while maintaining sub-50ms query response times and instant real-time reactions.",
    solution: "Survetra architected a hybrid event-driven microservices topology using Go and Java/Spring Boot, with Cassandra for persistent timeline storage, Redis for fast-access caching, and an automated multi-bitrate HLS encoding pipeline backed by AWS CloudFront.",
    results: [
      "Maintained P99 feed generation latency below 42ms worldwide",
      "Scaled to 45,000 active concurrent WebSocket messaging connections",
      "Reduced video transcoding costs by 48% via intelligent GPU spot clusters",
      "Zero data loss during peak viral spike events"
    ],
    metrics: [
      { label: "P99 Feed Latency", value: "< 42ms" },
      { label: "Concurrent Connections", value: "45K+" },
      { label: "Transcoding Savings", value: "48%" },
      { label: "Data Loss Incidents", value: "0" }
    ],
    testimonialQuote: "The engineering team at Survetra delivered an infrastructure that effortlessly shrugs off viral traffic spikes without breaking a sweat.",
    testimonialAuthor: "Elena Rostova, VP of Infrastructure, SocialSea Platform",
    technologiesUsed: ["Go", "Spring Boot", "Cassandra", "Redis", "AWS CloudFront", "WebRTC"],
    coverGradient: "from-violet-600/20 via-purple-800/10 to-transparent"
  },
  {
    id: "cs-3",
    slug: "enterprise-cloud-modernization-financial-services",
    title: "Migrating a Legacy Core Banking Portal to an Event-Driven Cloud Platform",
    clientName: "Horizon Capital Partners",
    industry: "Financial Technology",
    challenge: "Horizon Capital was encumbered by a 14-year-old monolithic Java EE system running on physical on-premise servers. Deployments required 6-hour maintenance downtime windows, and reporting queries routinely locked operational tables.",
    solution: "Survetra designed a phased strangler-fig migration strategy. We decomposed the monolith into containerized Spring Boot microservices orchestrated on AWS EKS, introduced Apache Kafka for asynchronous transaction journaling, and migrated the database to PostgreSQL with read replicas.",
    results: [
      "Achieved 100% zero-downtime continuous deployments via blue-green releases",
      "Decreased end-of-day financial reconciliation batch time from 4.5 hours to 18 minutes",
      "Reduced annual infrastructure and licensing overhead by 52%",
      "Passed rigorous financial security audits without a single non-conformance flag"
    ],
    metrics: [
      { label: "Deployment Downtime", value: "0 min" },
      { label: "Reconciliation Speed", value: "15x Faster" },
      { label: "Infra Cost Reduction", value: "52%" },
      { label: "Security Audit Score", value: "100%" }
    ],
    testimonialQuote: "Survetra executed the migration without a single minute of customer-facing outage. Their technical rigor is extraordinary.",
    testimonialAuthor: "Devon Reed, Chief Technology Officer, Horizon Capital",
    technologiesUsed: ["Java 17", "Spring Boot", "AWS EKS", "Apache Kafka", "PostgreSQL", "Terraform"],
    coverGradient: "from-blue-600/20 via-indigo-900/10 to-transparent"
  }
];

export const LEADERSHIP_DATA: TeamMember[] = [
  {
    id: "lead-1",
    name: "Vikramaditya Sharma",
    role: "Chief Executive Officer & Founder",
    category: "Executive Leadership",
    bio: "Technologist and entrepreneur with over 16 years of leadership experience building scalable software products and driving enterprise digital transformations across global markets.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com"
  },
  {
    id: "lead-2",
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    category: "Executive Leadership",
    bio: "Former principal distributed systems architect with extensive expertise in high-concurrency event-driven backends, cloud-native infrastructure, and enterprise AI systems.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "lead-3",
    name: "Arjun Nair",
    role: "VP of Product Engineering",
    category: "Technology & Engineering",
    bio: "Leads engineering delivery across Survetra's product ecosystem, focusing on architectural resilience, CI/CD automation, and high-velocity engineering cultures.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "lead-4",
    name: "Claire Moreau",
    role: "Head of Product Design & UX",
    category: "Product & Design",
    bio: "Pioneers human-centered design systems, design tokens, and immersive multi-platform user journeys across our enterprise and consumer product portfolios.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    linkedinUrl: "https://linkedin.com"
  }
];

export const JOBS_DATA: JobOpening[] = [
  {
    id: "job-1",
    slug: "staff-ai-systems-engineer",
    title: "Staff AI Systems Engineer",
    department: "AI & Innovation",
    location: "Bengaluru, India / Remote Friendly",
    employmentType: "Full-time",
    experienceLevel: "Staff / Lead",
    overview: "We are seeking a Staff AI Systems Engineer to spearhead our autonomous agent frameworks and production RAG infrastructure. You will architect deterministic tool execution layers, optimize vector search retrieval, and scale LLM inference pipelines.",
    responsibilities: [
      "Architect and scale multi-agent orchestration frameworks for enterprise workflows.",
      "Design hybrid vector and keyword search retrieval pipelines using pgvector and Qdrant.",
      "Optimize local and cloud LLM inference throughput, latency, and memory footprints.",
      "Collaborate directly with product leadership to turn cutting-edge AI research into production-grade systems."
    ],
    requirements: [
      "7+ years of software engineering experience with deep expertise in Python and Java/Go.",
      "Proven track record deploying production AI systems (LLMs, RAG, agents) at scale.",
      "Extensive knowledge of embeddings, vector index tuning (HNSW, IVF), and prompt evaluation frameworks.",
      "Strong fundamentals in distributed systems, concurrency, and API security."
    ],
    benefits: [
      "Competitive compensation package with equity options",
      "Flexible hybrid/remote working arrangements",
      "Comprehensive medical insurance for employee and dependents",
      "Generous annual learning, conference, and equipment stipend"
    ]
  },
  {
    id: "job-2",
    slug: "senior-backend-engineer-java",
    title: "Senior Backend Engineer (Java / Spring Boot)",
    department: "Core Engineering",
    location: "Hyderabad, India / Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    overview: "Join our Core Engineering team to build high-throughput microservices for our flagship products (Tiffzy and SocialSea). You will design resilient database schemas, event-driven messaging queues, and mission-critical payment gateways.",
    responsibilities: [
      "Design, implement, and maintain Java 17/21 microservices using Spring Boot 3.",
      "Optimize PostgreSQL relational queries, indexing, and Flyway database migrations.",
      "Implement event-driven streaming pipelines using Apache Kafka and Redis.",
      "Ensure 99.99% system availability through automated testing, monitoring, and tracing."
    ],
    requirements: [
      "5+ years of production experience with Java, Spring Boot, Spring Security, and Hibernate/JPA.",
      "Deep understanding of relational database modeling, transaction isolation levels, and caching strategies.",
      "Experience with Docker, Kubernetes, and cloud platforms (AWS or GCP).",
      "Passion for clean code, automated unit/integration testing, and API documentation."
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Flexible working schedule and generous paid time off",
      "Health and wellness allowances",
      "Mentorship and accelerated career progression paths"
    ]
  },
  {
    id: "job-3",
    slug: "senior-frontend-engineer-react-nextjs",
    title: "Senior Frontend Engineer (React & Next.js)",
    department: "Product Engineering",
    location: "Bengaluru, India / Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    overview: "We are looking for a Senior Frontend Engineer who obsesses over pixel-perfection, fluid 60fps animations, and lightning-fast Core Web Vitals. You will build world-class web applications using Next.js App Router, TypeScript, and Tailwind CSS.",
    responsibilities: [
      "Build modular, accessible, and responsive user interfaces with Next.js and Tailwind CSS.",
      "Collaborate with UI/UX designers to translate Figma design systems into reusable component code.",
      "Optimize bundle sizes, server rendering, dynamic imports, and asset loading for peak performance.",
      "Write thorough unit and end-to-end tests to guarantee visual and functional stability."
    ],
    requirements: [
      "5+ years of modern web development experience with React, TypeScript, and CSS frameworks.",
      "Thorough command of Next.js 14+ App Router, Server Components, and client state management.",
      "Strong understanding of web accessibility (WCAG 2.1 AA), semantic HTML, and browser rendering engines.",
      "Experience with Framer Motion, micro-interactions, and design systems."
    ],
    benefits: [
      "Top-tier compensation and performance rewards",
      "Ergonomic home office equipment setup allowance",
      "Full health, dental, and vision insurance coverage",
      "Annual team offsites and global hackathons"
    ]
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: "art-1",
    slug: "engineering-sub-second-kitchen-ticket-routing-tiffzy",
    title: "Engineering Sub-Second Kitchen Ticket Routing in High-Volume Restaurant Networks",
    excerpt: "How we designed an event-driven state machine in Tiffzy to orchestrate high-throughput kitchen display routing across 500+ commercial kitchens.",
    category: "Architecture",
    readTime: "6 min read",
    publishedDate: "October 24, 2026",
    authorName: "Sarah Jenkins",
    authorRole: "Chief Technology Officer",
    tags: ["Distributed Systems", "Spring Boot", "Kafka", "Restaurant Tech"],
    content: `
Modern commercial kitchens operate in environments of relentless temporal pressure. When a customer taps 'Submit Order' on a tabletop QR interface or third-party delivery dispatch, that transaction must undergo validation, inventory allocation, split-payment confirmation, and station-specific routing—all within hundreds of milliseconds.

In this deep dive, we explore how Survetra engineered the core order routing backbone of Tiffzy.

### The Challenge of Distributed Kitchens

Traditional legacy point-of-sale systems rely on monolithic client-server architectures with polling print servers. During peak meal rushes, print queues stall, network timeouts cause ghost tickets, and kitchen line cooks are left guessing order sequences.

To solve this, Tiffzy adopted an event-driven state machine pattern built on Java 17 and Spring Boot 3, backed by Apache Kafka for append-only log durability and Redis for sub-millisecond state caching.

### Deconstructing the Order Topology

Each incoming order is treated as an immutable sequence of lifecycle events:
1. \`OrderInitiatedEvent\`
2. \`PaymentSecuredEvent\`
3. \`InventoryReservedEvent\`
4. \`TicketDispatchedToStationsEvent\`

Instead of broadcasting a raw order payload to every kitchen screen, our intelligent router evaluates station capabilities (e.g., Grill, Fryer, Cold Prep, Expeditor) and dispatches partitioned sub-tickets simultaneously. If one station experiences a delay, the expeditor screen automatically adjusts target plating intervals.

### Zero-Downtime Reliability

By decoupling order ingestion from screen display rendering using durable Kafka partitions, kitchens can continue functioning even during momentary internet drops. Offline local storage buffers state updates and syncs seamlessly once connectivity is re-established.
    `
  },
  {
    id: "art-2",
    slug: "architecting-deterministic-enterprise-ai-agents",
    title: "Moving Beyond Prompts: Architecting Deterministic Enterprise AI Agents",
    excerpt: "Why probabilistic language models require deterministic state validation, tool guardrails, and audit trails before entering mission-critical enterprise workflows.",
    category: "AI & Innovation",
    readTime: "8 min read",
    publishedDate: "November 02, 2026",
    authorName: "Vikramaditya Sharma",
    authorRole: "Chief Executive Officer & Founder",
    tags: ["Artificial Intelligence", "Autonomous Agents", "Enterprise RAG", "Security"],
    content: `
Large Language Models excel at syntactic fluency, semantic summarization, and creative reasoning. However, when applied to enterprise tasks—such as executing financial refunds, modifying supply chain orders, or granting access permissions—raw probabilistic generation is fundamentally unsuitable without deterministic guardrails.

### The Need for Determinism

An enterprise cannot afford an AI model 'hallucinating' a financial transaction or executing an API call with malformed parameters. At Survetra, we approach AI agent architecture with a strict rule: **The LLM is a reasoning engine, not an execution authority.**

### Our Three-Tier Agent Safety Model

1. **Reasoning & Tool Selection (Probabilistic Layer):**
The model receives the user's objective, contextual documents retrieved via hybrid RAG, and an OpenAPI schema of authorized tools. It formulates a proposed action plan.

2. **Validation & Schema Constraint (Deterministic Layer):**
Before any tool is executed, the proposed payload is strictly validated against JSON Schemas and domain invariants. If a field fails validation or exceeds authorized transaction limits, the execution halts immediately.

3. **Audit Ledger & Verification (Compliance Layer):**
Every input, reasoning trace, tool invocation, and returned response is persisted to an immutable cryptographic audit log. This provides 100% auditability for regulatory compliance.
    `
  },
  {
    id: "art-3",
    slug: "optimizing-core-web-vitals-nextjs-14",
    title: "Squeezing Every Millisecond: Next.js Architecture for 99+ Core Web Vitals",
    excerpt: "Practical architectural strategies for achieving near-perfect Lighthouse scores and sub-second Largest Contentful Paint across enterprise web applications.",
    category: "Engineering",
    readTime: "5 min read",
    publishedDate: "November 10, 2026",
    authorName: "Claire Moreau",
    authorRole: "Head of Product Design & UX",
    tags: ["Next.js", "Performance", "Frontend", "Web Vitals"],
    content: `
Performance is not a cosmetic enhancement; it is a core commercial metric. Studies consistently show that every 100ms decrease in page load speed translates directly into higher conversion rates, improved search engine indexing, and lower bounce rates.

In building the Survetra platform and client web applications, we established a non-negotiable benchmark: sub-second First Contentful Paint (FCP) and a 95+ score on Core Web Vitals across mobile networks.

### Critical Techniques Implemented

- **React Server Components (RSC) First:** By defaulting to Server Components, we keep massive JavaScript libraries out of the client browser bundle. Only truly interactive widgets ship client-side JavaScript.
- **Dynamic Font Loading & Zero Layout Shift:** We utilize Next.js font optimization with display swap and custom fallback metrics to eliminate Cumulative Layout Shift (CLS) entirely.
- **Adaptive Image Optimization:** Modern WebP and AVIF formats with explicit intrinsic dimensions and priority hints for above-the-fold hero visuals.
    `
  }
];

export const COMPANY_INFO = {
  name: "Survetra Services",
  legalName: "Survetra Services Private Limited",
  tagline: "Engineering the Future. Building What Matters.",
  description: "Survetra Services builds intelligent digital products, scalable software platforms and technology solutions that help businesses move forward.",
  foundedYear: "2024",
  headquarters: "Bengaluru, Karnataka, India",
  email: "contact@survetra.com",
  phone: "+91 (80) 4120-8900",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM IST",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/survetra-services",
    twitter: "https://twitter.com/SurvetraHQ",
    github: "https://github.com/survetra-services"
  }
};
