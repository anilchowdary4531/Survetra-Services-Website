package com.survetra.model;

import jakarta.persistence.*;

@Entity
@Table(name = "industries")
public class Industry extends BaseEntity {

    @Column(nullable = false, unique = true, length = 100)
    private String slug;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(nullable = false, length = 255)
    private String tagline;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(name = "icon_name", nullable = false, length = 50)
    private String iconName;

    @Column(name = "key_solutions", columnDefinition = "TEXT")
    private String keySolutions;

    @Column(name = "featured_products", columnDefinition = "TEXT")
    private String featuredProducts;

    @Column(name = "impact_highlights", columnDefinition = "TEXT")
    private String impactHighlights;

    @Column(nullable = false, length = 50)
    private String status = "PUBLISHED";

    @Column(name = "sort_order")
    private Integer sortOrder = 0;

    @Column(name = "is_deleted")
    private boolean isDeleted = false;

    public Industry() {}

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTagline() { return tagline; }
    public void setTagline(String tagline) { this.tagline = tagline; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getIconName() { return iconName; }
    public void setIconName(String iconName) { this.iconName = iconName; }

    public String getKeySolutions() { return keySolutions; }
    public void setKeySolutions(String keySolutions) { this.keySolutions = keySolutions; }

    public String getFeaturedProducts() { return featuredProducts; }
    public void setFeaturedProducts(String featuredProducts) { this.featuredProducts = featuredProducts; }

    public String getImpactHighlights() { return impactHighlights; }
    public void setImpactHighlights(String impactHighlights) { this.impactHighlights = impactHighlights; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Integer getSortOrder() { return sortOrder; }
    public void setSortOrder(Integer sortOrder) { this.sortOrder = sortOrder; }

    public boolean isDeleted() { return isDeleted; }
    public void setDeleted(boolean deleted) { isDeleted = deleted; }
}

