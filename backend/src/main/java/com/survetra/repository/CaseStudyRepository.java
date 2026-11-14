package com.survetra.repository;

import com.survetra.model.CaseStudy;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CaseStudyRepository extends JpaRepository<CaseStudy, UUID> {
    Optional<CaseStudy> findBySlugAndIsDeletedFalse(String slug);
    List<CaseStudy> findByIsDeletedFalseOrderBySortOrderAsc();
}

