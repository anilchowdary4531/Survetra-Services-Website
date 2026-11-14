package com.survetra.repository;

import com.survetra.model.Industry;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface IndustryRepository extends JpaRepository<Industry, UUID> {
    Optional<Industry> findBySlugAndIsDeletedFalse(String slug);
    List<Industry> findByIsDeletedFalseOrderBySortOrderAsc();
}

