package com.survetra.repository;

import com.survetra.model.ServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ServiceRepository extends JpaRepository<ServiceEntity, UUID> {
    Optional<ServiceEntity> findBySlugAndIsDeletedFalse(String slug);
    List<ServiceEntity> findByIsDeletedFalseOrderBySortOrderAsc();
    List<ServiceEntity> findByCategoryAndIsDeletedFalseOrderBySortOrderAsc(String category);
}

