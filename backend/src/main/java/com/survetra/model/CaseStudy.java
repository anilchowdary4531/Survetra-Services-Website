package com.survetra.model;

import jakarta.persistence.*;

@Entity
@Table(name = "case_studies")
public class CaseStudy extends BaseEntity {

    @Column(nullable = false, unique = true, length = 100)
    private String slug;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(name = "client_name", nullable = false, length = 150)
    private String clientName;

    @Column(nullable = false, length = 100)
    private String industry;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String challenge;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String solution;

    @Column(columnDefinition = "TEXT")
    private String results;

    @Column(columnDefinition = "TEXT")
    private String metrics;

    @Column(name = "technologies_used", columnDefinition = "TEXT")
    private String technologiesUsed;

    @Column(name = "testimonial_quote", columnDefinition = "TEXT")
    private String testimonialQuote;

    @Column(name = "testimonial_author", length = 200)
    private String testimonialAuthor;

    @Column(nullable = false, length = 50)
    private String status = "PUBLISHED";

    @Column(name = "sort_order")
    private Integer sortOrder = 0;

    @Column(name = "is_deleted")
    private boolean isDeleted = false;

    public CaseStudy() {}

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }

    public String getIndustry() { return industry; }
    public void setIndustry(String industry) { this.industry = industry; }

    public String getChallenge() { return challenge; }
    public void setChallenge(String challenge) { this.challenge = challenge; }

    public String getSolution() { return solution; }
    public void setSolution(String solution) { this.solution = solution; }

    public String getResults() { return results; }
    public void setResults(String results) { this.results = results; }

    public String getMetrics() { return metrics; }
    public void setMetrics(String metrics) { this.metrics = metrics; }

    public String getTechnologiesUsed() { return technologiesUsed; }
    public void setTechnologiesUsed(String technologiesUsed) { this.technologiesUsed = technologiesUsed; }

    public String getTestimonialQuote() { return testimonialQuote; }
    public void setTestimonialQuote(String testimonialQuote) { this.testimonialQuote = testimonialQuote; }

    public String getTestimonialAuthor() { return testimonialAuthor; }
    public void setTestimonialAuthor(String testimonialAuthor) { this.testimonialAuthor = testimonialAuthor; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Integer getSortOrder() { return sortOrder; }
    public void setSortOrder(Integer sortOrder) { this.sortOrder = sortOrder; }

    public boolean isDeleted() { return isDeleted; }
    public void setDeleted(boolean deleted) { isDeleted = deleted; }
}

