package com.survetra.repository;

import com.survetra.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface JobApplicationRepository extends JpaRepository<JobApplication, UUID> {
    List<JobApplication> findAllByOrderByCreatedAtDesc();
    List<JobApplication> findByStatusOrderByCreatedAtDesc(String status);
    long countByStatus(String status);
}

