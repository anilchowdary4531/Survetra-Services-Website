package com.survetra.model;

import jakarta.persistence.*;

@Entity
@Table(name = "articles")
public class Article extends BaseEntity {

    @Column(nullable = false, unique = true, length = 150)
    private String slug;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String excerpt;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(nullable = false, length = 100)
    private String category;

    @Column(name = "read_time", nullable = false, length = 50)
    private String readTime;

    @Column(name = "published_date", nullable = false, length = 50)
    private String publishedDate;

    @Column(name = "author_name", nullable = false, length = 150)
    private String authorName;

    @Column(name = "author_role", nullable = false, length = 150)
    private String authorRole;

    @Column(columnDefinition = "TEXT")
    private String tags;

    @Column(nullable = false, length = 50)
    private String status = "PUBLISHED";

    @Column(name = "sort_order")
    private Integer sortOrder = 0;

    @Column(name = "is_deleted")
    private boolean isDeleted = false;

    public Article() {}

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getExcerpt() { return excerpt; }
    public void setExcerpt(String excerpt) { this.excerpt = excerpt; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getReadTime() { return readTime; }
    public void setReadTime(String readTime) { this.readTime = readTime; }

    public String getPublishedDate() { return publishedDate; }
    public void setPublishedDate(String publishedDate) { this.publishedDate = publishedDate; }

    public String getAuthorName() { return authorName; }
    public void setAuthorName(String authorName) { this.authorName = authorName; }

    public String getAuthorRole() { return authorRole; }
    public void setAuthorRole(String authorRole) { this.authorRole = authorRole; }

    public String getTags() { return tags; }
    public void setTags(String tags) { this.tags = tags; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Integer getSortOrder() { return sortOrder; }
    public void setSortOrder(Integer sortOrder) { this.sortOrder = sortOrder; }

    public boolean isDeleted() { return isDeleted; }
    public void setDeleted(boolean deleted) { isDeleted = deleted; }
}

