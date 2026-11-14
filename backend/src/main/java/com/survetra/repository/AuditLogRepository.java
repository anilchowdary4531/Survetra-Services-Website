package com.survetra.repository;

import com.survetra.model.AuditLog;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface AuditLogRepository extends JpaRepository<AuditLog, UUID> {
    List<AuditLog> findAllByOrderByCreatedAtDesc();
    List<AuditLog> findTop50ByOrderByCreatedAtDesc();
}

