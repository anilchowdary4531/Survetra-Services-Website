package com.survetra.model;

import jakarta.persistence.*;

@Entity
@Table(name = "navigation_items")
public class NavigationItem extends BaseEntity {

    @Column(nullable = false, length = 100)
    private String label;

    @Column(nullable = false, length = 255)
    private String url;

    @Column(name = "sort_order")
    private Integer sortOrder = 0;

    @Column(nullable = false, length = 50)
    private String location = "Both";

    @Column(name = "is_visible", nullable = false)
    private boolean isVisible = true;

    public NavigationItem() {}

    public String getLabel() { return label; }
    public void setLabel(String label) { this.label = label; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }

    public Integer getSortOrder() { return sortOrder; }
    public void setSortOrder(Integer sortOrder) { this.sortOrder = sortOrder; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public boolean isVisible() { return isVisible; }
    public void setVisible(boolean visible) { isVisible = visible; }
}

