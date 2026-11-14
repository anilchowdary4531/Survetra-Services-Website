import { MetadataRoute } from "next";
import { getProducts, getServices, getCaseStudies, getArticles, getJobOpenings } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://survetra.com";

  const staticRoutes = [
    "",
    "/about",
    "/leadership",
    "/services",
    "/industries",
    "/products",
    "/case-studies",
    "/innovation",
    "/insights",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const [products, services, caseStudies, articles, jobs] = await Promise.all([
    getProducts(),
    getServices(),
    getCaseStudies(),
    getArticles(),
    getJobOpenings(),
  ]);

  const productRoutes = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articleRoutes = articles.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const jobRoutes = jobs.map((j) => ({
    url: `${baseUrl}/careers/${j.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...articleRoutes,
    ...jobRoutes,
  ];
}

