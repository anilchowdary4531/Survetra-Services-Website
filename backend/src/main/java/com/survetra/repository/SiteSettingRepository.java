package com.survetra.repository;

import com.survetra.model.SiteSetting;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface SiteSettingRepository extends JpaRepository<SiteSetting, UUID> {
    Optional<SiteSetting> findBySettingKey(String settingKey);
    List<SiteSetting> findByCategory(String category);
}

