package com.survetra.repository;

import com.survetra.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProjectRepository extends JpaRepository<Project, UUID> {
    Optional<Project> findBySlugAndIsDeletedFalse(String slug);
    List<Project> findByIsDeletedFalseOrderBySortOrderAsc();
    long countByIsDeletedFalse();
}

