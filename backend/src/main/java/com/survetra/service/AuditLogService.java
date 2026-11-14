package com.survetra.service;

import com.survetra.model.AuditLog;
import com.survetra.repository.AuditLogRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AuditLogService {

    private final AuditLogRepository auditLogRepository;

    public AuditLogService(AuditLogRepository auditLogRepository) {
        this.auditLogRepository = auditLogRepository;
    }

    public void log(UUID userId, String userEmail, String action, String entityType, String entityId, String ipAddress, String details) {
        AuditLog entry = new AuditLog(userId, userEmail, action, entityType, entityId, ipAddress, details);
        auditLogRepository.save(entry);
    }

    public List<AuditLog> getRecentLogs() {
        return auditLogRepository.findTop50ByOrderByCreatedAtDesc();
    }
}

