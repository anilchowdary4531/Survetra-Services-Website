package com.survetra.repository;

import com.survetra.model.Enquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface EnquiryRepository extends JpaRepository<Enquiry, UUID> {
    List<Enquiry> findAllByOrderByCreatedAtDesc();
    List<Enquiry> findByStatusOrderByCreatedAtDesc(String status);
    long countByStatus(String status);
}

