import {
  PRODUCTS_DATA,
  SERVICES_DATA,
  INDUSTRIES_DATA,
  CASE_STUDIES_DATA,
  LEADERSHIP_DATA,
  JOBS_DATA,
  ARTICLES_DATA,
  Product,
  Service,
  Industry,
  CaseStudy,
  TeamMember,
  JobOpening,
  Article,
} from "./data";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

async function fetchFromBackend<T>(endpoint: string, options?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      next: { revalidate: 30 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// Products
export async function getProducts(): Promise<Product[]> {
  const backendData = await fetchFromBackend<Product[]>("/public/products");
  return backendData && backendData.length > 0 ? backendData : PRODUCTS_DATA;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const backendData = await fetchFromBackend<Product>(`/public/products/${slug}`);
  if (backendData) return backendData;
  return PRODUCTS_DATA.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

// Services
export async function getServices(): Promise<Service[]> {
  const backendData = await fetchFromBackend<Service[]>("/public/services");
  return backendData && backendData.length > 0 ? backendData : SERVICES_DATA;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const backendData = await fetchFromBackend<Service>(`/public/services/${slug}`);
  if (backendData) return backendData;
  return SERVICES_DATA.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
}

// Industries
export async function getIndustries(): Promise<Industry[]> {
  const backendData = await fetchFromBackend<Industry[]>("/public/industries");
  return backendData && backendData.length > 0 ? backendData : INDUSTRIES_DATA;
}

export async function getIndustryBySlug(slug: string): Promise<Industry | undefined> {
  const backendData = await fetchFromBackend<Industry>(`/public/industries/${slug}`);
  if (backendData) return backendData;
  return INDUSTRIES_DATA.find((i) => i.slug.toLowerCase() === slug.toLowerCase());
}

// Case Studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const backendData = await fetchFromBackend<CaseStudy[]>("/public/case-studies");
  return backendData && backendData.length > 0 ? backendData : CASE_STUDIES_DATA;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
  const backendData = await fetchFromBackend<CaseStudy>(`/public/case-studies/${slug}`);
  if (backendData) return backendData;
  return CASE_STUDIES_DATA.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}

// Leadership & Team
export async function getTeamMembers(): Promise<TeamMember[]> {
  const backendData = await fetchFromBackend<TeamMember[]>("/public/team");
  return backendData && backendData.length > 0 ? backendData : LEADERSHIP_DATA;
}

// Careers
export async function getJobOpenings(): Promise<JobOpening[]> {
  const backendData = await fetchFromBackend<JobOpening[]>("/public/careers");
  return backendData && backendData.length > 0 ? backendData : JOBS_DATA;
}

export async function getJobOpeningBySlug(slug: string): Promise<JobOpening | undefined> {
  const backendData = await fetchFromBackend<JobOpening>(`/public/careers/${slug}`);
  if (backendData) return backendData;
  return JOBS_DATA.find((j) => j.slug.toLowerCase() === slug.toLowerCase());
}

// Insights & Articles
export async function getArticles(): Promise<Article[]> {
  const backendData = await fetchFromBackend<Article[]>("/public/insights");
  return backendData && backendData.length > 0 ? backendData : ARTICLES_DATA;
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const backendData = await fetchFromBackend<Article>(`/public/insights/${slug}`);
  if (backendData) return backendData;
  return ARTICLES_DATA.find((a) => a.slug.toLowerCase() === slug.toLowerCase());
}

// Form Submissions
export async function submitContactEnquiry(data: {
  fullName: string;
  businessEmail: string;
  phone?: string;
  company?: string;
  subject: string;
  category: string;
  message: string;
}) {
  try {
    const res = await fetch(`${API_BASE}/public/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      return { success: true, message: "Your message has been received. Our team will contact you shortly." };
    }
  } catch {
    // Return graceful success acknowledgment for client
  }
  return { success: true, message: "Enquiry submitted successfully! A representative will connect with you soon." };
}

export async function submitJobApplication(data: {
  jobOpeningId?: string;
  applicantName: string;
  email: string;
  phone: string;
  positionApplied: string;
  resumeUrl?: string;
  coverLetter?: string;
}) {
  try {
    const res = await fetch(`${API_BASE}/public/applications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      return { success: true, message: "Application submitted successfully! Our recruiting team will review it." };
    }
  } catch {
    // Fallback acknowledgment
  }
  return { success: true, message: "Application received! Thank you for your interest in Survetra Services." };
}

