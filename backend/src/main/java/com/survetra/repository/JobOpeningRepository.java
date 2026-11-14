package com.survetra.repository;

import com.survetra.model.JobOpening;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface JobOpeningRepository extends JpaRepository<JobOpening, UUID> {
    Optional<JobOpening> findBySlugAndIsDeletedFalse(String slug);
    List<JobOpening> findByIsDeletedFalseOrderBySortOrderAsc();
    List<JobOpening> findByStatusAndIsDeletedFalseOrderBySortOrderAsc(String status);
    long countByStatusAndIsDeletedFalse(String status);
}

