package com.survetra.model;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product extends BaseEntity {

    @Column(nullable = false, unique = true, length = 100)
    private String slug;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(nullable = false, length = 255)
    private String tagline;

    @Column(nullable = false, length = 100)
    private String category;

    @Column(name = "short_description", nullable = false, columnDefinition = "TEXT")
    private String shortDescription;

    @Column(name = "full_description", nullable = false, columnDefinition = "TEXT")
    private String fullDescription;

    @Column(nullable = false, length = 50)
    private String status = "In Development";

    @Column(length = 50)
    private String badge;

    @Column(columnDefinition = "TEXT")
    private String features;

    @Column(name = "tech_stack", columnDefinition = "TEXT")
    private String techStack;

    @Column(columnDefinition = "TEXT")
    private String metrics;

    @Column(name = "external_url", length = 255)
    private String externalUrl;

    @Column(name = "demo_url", length = 255)
    private String demoUrl;

    @Column(name = "sort_order")
    private Integer sortOrder = 0;

    @Column(name = "meta_title", length = 255)
    private String metaTitle;

    @Column(name = "meta_description", length = 500)
    private String metaDescription;

    @Column(name = "is_deleted")
    private boolean isDeleted = false;

    public Product() {}

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTagline() { return tagline; }
    public void setTagline(String tagline) { this.tagline = tagline; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getShortDescription() { return shortDescription; }
    public void setShortDescription(String shortDescription) { this.shortDescription = shortDescription; }

    public String getFullDescription() { return fullDescription; }
    public void setFullDescription(String fullDescription) { this.fullDescription = fullDescription; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getBadge() { return badge; }
    public void setBadge(String badge) { this.badge = badge; }

    public String getFeatures() { return features; }
    public void setFeatures(String features) { this.features = features; }

    public String getTechStack() { return techStack; }
    public void setTechStack(String techStack) { this.techStack = techStack; }

    public String getMetrics() { return metrics; }
    public void setMetrics(String metrics) { this.metrics = metrics; }

    public String getExternalUrl() { return externalUrl; }
    public void setExternalUrl(String externalUrl) { this.externalUrl = externalUrl; }

    public String getDemoUrl() { return demoUrl; }
    public void setDemoUrl(String demoUrl) { this.demoUrl = demoUrl; }

    public Integer getSortOrder() { return sortOrder; }
    public void setSortOrder(Integer sortOrder) { this.sortOrder = sortOrder; }

    public String getMetaTitle() { return metaTitle; }
    public void setMetaTitle(String metaTitle) { this.metaTitle = metaTitle; }

    public String getMetaDescription() { return metaDescription; }
    public void setMetaDescription(String metaDescription) { this.metaDescription = metaDescription; }

    public boolean isDeleted() { return isDeleted; }
    public void setDeleted(boolean deleted) { isDeleted = deleted; }
}

