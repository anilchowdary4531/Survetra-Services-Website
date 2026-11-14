package com.survetra.controller;

import com.survetra.dto.FormDtos;
import com.survetra.model.*;
import com.survetra.service.AuditLogService;
import com.survetra.service.ContentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin")
@SecurityRequirement(name = "BearerAuth")
@Tag(name = "Administration Console API", description = "Protected endpoints for managing website content, leads, recruitment, and security logs.")
public class AdminController {

    private final ContentService contentService;
    private final AuditLogService auditLogService;

    public AdminController(ContentService contentService, AuditLogService auditLogService) {
        this.contentService = contentService;
        this.auditLogService = auditLogService;
    }

    @GetMapping("/dashboard/stats")
    @Operation(summary = "Executive Dashboard KPI Stats", description = "Returns real database counters for enquiries, products, projects, jobs, and uptime.")
    public ResponseEntity<FormDtos.DashboardStatsDto> getDashboardStats() {
        return ResponseEntity.ok(contentService.getDashboardStats());
    }

    // Products Management
    @GetMapping("/products")
    @Operation(summary = "Admin: List All Products (including draft)")
    public ResponseEntity<List<Product>> getAdminProducts() {
        return ResponseEntity.ok(contentService.getPublishedProducts());
    }

    @PostMapping("/products")
    @Operation(summary = "Admin: Create or Update Product")
    public ResponseEntity<Product> saveProduct(@RequestBody Product product, Authentication auth) {
        Product saved = contentService.saveProduct(product);
        auditLogService.log(
                null,
                auth.getName(),
                "PRODUCT_SAVED",
                "PRODUCT",
                saved.getId().toString(),
                null,
                "Product created/updated: " + saved.getName()
        );
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/products/{id}")
    @Operation(summary = "Admin: Delete Product")
    public ResponseEntity<Map<String, Object>> deleteProduct(@PathVariable UUID id, Authentication auth) {
        contentService.deleteProduct(id);
        auditLogService.log(
                null,
                auth.getName(),
                "PRODUCT_DELETED",
                "PRODUCT",
                id.toString(),
                null,
                "Product soft-deleted"
        );
        return ResponseEntity.ok(Map.of("success", true, "id", id));
    }

    // Services Management
    @GetMapping("/services")
    @Operation(summary = "Admin: List All Services")
    public ResponseEntity<List<ServiceEntity>> getAdminServices() {
        return ResponseEntity.ok(contentService.getAllServices());
    }

    @PostMapping("/services")
    @Operation(summary = "Admin: Create or Update Service")
    public ResponseEntity<ServiceEntity> saveService(@RequestBody ServiceEntity service, Authentication auth) {
        ServiceEntity saved = contentService.saveService(service);
        auditLogService.log(
                null,
                auth.getName(),
                "SERVICE_SAVED",
                "SERVICE",
                saved.getId().toString(),
                null,
                "Service saved: " + saved.getTitle()
        );
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/services/{id}")
    @Operation(summary = "Admin: Delete Service")
    public ResponseEntity<Map<String, Object>> deleteService(@PathVariable UUID id, Authentication auth) {
        contentService.deleteService(id);
        auditLogService.log(
                null,
                auth.getName(),
                "SERVICE_DELETED",
                "SERVICE",
                id.toString(),
                null,
                "Service soft-deleted"
        );
        return ResponseEntity.ok(Map.of("success", true, "id", id));
    }

    // Enquiries Management
    @GetMapping("/enquiries")
    @Operation(summary = "Admin: List All Enquiries")
    public ResponseEntity<List<Enquiry>> getEnquiries() {
        return ResponseEntity.ok(contentService.getAllEnquiries());
    }

    @PatchMapping("/enquiries/{id}/status")
    @Operation(summary = "Admin: Update Enquiry Status")
    public ResponseEntity<Map<String, Object>> updateEnquiryStatus(
            @PathVariable UUID id,
            @RequestBody Map<String, String> payload,
            Authentication auth) {
        String status = payload.get("status");
        contentService.updateEnquiryStatus(id, status);
        auditLogService.log(
                null,
                auth.getName(),
                "ENQUIRY_STATUS_UPDATED",
                "ENQUIRY",
                id.toString(),
                null,
                "Status set to: " + status
        );
        return ResponseEntity.ok(Map.of("success", true, "id", id, "status", status));
    }

    // Job Applications Management
    @GetMapping("/applications")
    @Operation(summary = "Admin: List Job Applications")
    public ResponseEntity<List<JobApplication>> getJobApplications() {
        return ResponseEntity.ok(contentService.getAllJobApplications());
    }

    @PatchMapping("/applications/{id}/status")
    @Operation(summary = "Admin: Update Application Status")
    public ResponseEntity<Map<String, Object>> updateApplicationStatus(
            @PathVariable UUID id,
            @RequestBody Map<String, String> payload,
            Authentication auth) {
        String status = payload.get("status");
        contentService.updateJobApplicationStatus(id, status);
        auditLogService.log(
                null,
                auth.getName(),
                "APPLICATION_STATUS_UPDATED",
                "JOB_APPLICATION",
                id.toString(),
                null,
                "Status set to: " + status
        );
        return ResponseEntity.ok(Map.of("success", true, "id", id, "status", status));
    }

    // Media Assets
    @GetMapping("/media")
    @Operation(summary = "Admin: List Media Assets")
    public ResponseEntity<List<MediaAsset>> getMediaAssets() {
        return ResponseEntity.ok(contentService.getAllMedia());
    }

    @PostMapping("/media")
    @Operation(summary = "Admin: Register Media Asset")
    public ResponseEntity<MediaAsset> saveMediaAsset(@RequestBody MediaAsset asset, Authentication auth) {
        asset.setUploadedBy(auth.getName());
        MediaAsset saved = contentService.saveMedia(asset);
        auditLogService.log(
                null,
                auth.getName(),
                "MEDIA_UPLOADED",
                "MEDIA_ASSET",
                saved.getId().toString(),
                null,
                "Uploaded asset: " + saved.getFileName()
        );
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/media/{id}")
    @Operation(summary = "Admin: Delete Media Asset")
    public ResponseEntity<Map<String, Object>> deleteMediaAsset(@PathVariable UUID id, Authentication auth) {
        contentService.deleteMedia(id);
        auditLogService.log(
                null,
                auth.getName(),
                "MEDIA_DELETED",
                "MEDIA_ASSET",
                id.toString(),
                null,
                "Deleted media asset"
        );
        return ResponseEntity.ok(Map.of("success", true, "id", id));
    }

    // Audit Logs
    @GetMapping("/audit-logs")
    @Operation(summary = "Admin: Retrieve Security & System Audit Logs")
    public ResponseEntity<List<AuditLog>> getAuditLogs() {
        return ResponseEntity.ok(auditLogService.getRecentLogs());
    }
}

