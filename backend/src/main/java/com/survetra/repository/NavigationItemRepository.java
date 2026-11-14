package com.survetra.repository;

import com.survetra.model.NavigationItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface NavigationItemRepository extends JpaRepository<NavigationItem, UUID> {
    List<NavigationItem> findByIsVisibleTrueOrderBySortOrderAsc();
    List<NavigationItem> findByLocationAndIsVisibleTrueOrderBySortOrderAsc(String location);
}

