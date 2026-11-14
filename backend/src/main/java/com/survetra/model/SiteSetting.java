package com.survetra.model;

import jakarta.persistence.*;

@Entity
@Table(name = "site_settings")
public class SiteSetting extends BaseEntity {

    @Column(name = "setting_key", nullable = false, unique = true, length = 100)
    private String settingKey;

    @Column(name = "setting_value", nullable = false, columnDefinition = "TEXT")
    private String settingValue;

    @Column(nullable = false, length = 50)
    private String category = "GENERAL";

    @Column(length = 255)
    private String description;

    public SiteSetting() {}

    public SiteSetting(String settingKey, String settingValue, String category, String description) {
        this.settingKey = settingKey;
        this.settingValue = settingValue;
        this.category = category;
        this.description = description;
    }

    public String getSettingKey() { return settingKey; }
    public void setSettingKey(String settingKey) { this.settingKey = settingKey; }

    public String getSettingValue() { return settingValue; }
    public void setSettingValue(String settingValue) { this.settingValue = settingValue; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}

