package com.survetra.controller;

import com.survetra.dto.FormDtos;
import com.survetra.model.*;
import com.survetra.service.AuditLogService;
import com.survetra.service.ContentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/public")
@Tag(name = "Public Portal API", description = "Public endpoints for published products, studios, career opportunities, and inquiries.")
public class PublicController {

    private final ContentService contentService;
    private final AuditLogService auditLogService;

    public PublicController(ContentService contentService, AuditLogService auditLogService) {
        this.contentService = contentService;
        this.auditLogService = auditLogService;
    }

    @GetMapping("/products")
    @Operation(summary = "List Published Products", description = "Returns active proprietary products like Tiffzy and SocialSea.")
    public ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok(contentService.getPublishedProducts());
    }

    @GetMapping("/products/{slug}")
    @Operation(summary = "Product Details by Slug")
    public ResponseEntity<Product> getProductBySlug(@PathVariable String slug) {
        return contentService.getProductBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/services")
    @Operation(summary = "List Engineering Services & Studios")
    public ResponseEntity<List<ServiceEntity>> getServices() {
        return ResponseEntity.ok(contentService.getAllServices());
    }

    @GetMapping("/services/{slug}")
    @Operation(summary = "Service Practice Details by Slug")
    public ResponseEntity<ServiceEntity> getServiceBySlug(@PathVariable String slug) {
        return contentService.getServiceBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/industries")
    @Operation(summary = "List Industry Solutions")
    public ResponseEntity<List<Industry>> getIndustries() {
        return ResponseEntity.ok(contentService.getAllIndustries());
    }

    @GetMapping("/industries/{slug}")
    @Operation(summary = "Industry Details by Slug")
    public ResponseEntity<Industry> getIndustryBySlug(@PathVariable String slug) {
        return contentService.getIndustryBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/case-studies")
    @Operation(summary = "List Client Case Studies")
    public ResponseEntity<List<CaseStudy>> getCaseStudies() {
        return ResponseEntity.ok(contentService.getAllCaseStudies());
    }

    @GetMapping("/case-studies/{slug}")
    @Operation(summary = "Case Study Details by Slug")
    public ResponseEntity<CaseStudy> getCaseStudyBySlug(@PathVariable String slug) {
        return contentService.getCaseStudyBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/careers")
    @Operation(summary = "List Active Job Openings")
    public ResponseEntity<List<JobOpening>> getCareers() {
        return ResponseEntity.ok(contentService.getActiveJobs());
    }

    @GetMapping("/careers/{slug}")
    @Operation(summary = "Job Opening Details by Slug")
    public ResponseEntity<JobOpening> getCareerBySlug(@PathVariable String slug) {
        return contentService.getJobBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/insights")
    @Operation(summary = "List Technical Insights & Articles")
    public ResponseEntity<List<Article>> getInsights() {
        return ResponseEntity.ok(contentService.getPublishedArticles());
    }

    @GetMapping("/insights/{slug}")
    @Operation(summary = "Article Details by Slug")
    public ResponseEntity<Article> getInsightBySlug(@PathVariable String slug) {
        return contentService.getArticleBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/team")
    @Operation(summary = "List Leadership & Team Members")
    public ResponseEntity<List<TeamMember>> getTeam() {
        return ResponseEntity.ok(contentService.getAllTeamMembers());
    }

    @GetMapping("/projects")
    @Operation(summary = "List Featured Client Projects")
    public ResponseEntity<List<Project>> getProjects() {
        return ResponseEntity.ok(contentService.getPublishedProjects());
    }

    @PostMapping("/enquiries")
    @Operation(summary = "Submit Business Enquiry", description = "Persists inbound enterprise inquiry and creates an audit event.")
    public ResponseEntity<Map<String, Object>> submitEnquiry(
            @Valid @RequestBody FormDtos.EnquiryRequest request,
            HttpServletRequest servletRequest) {

        String ip = servletRequest.getRemoteAddr();
        Enquiry saved = contentService.createEnquiry(request, ip);

        auditLogService.log(
                null,
                request.getBusinessEmail(),
                "ENQUIRY_SUBMITTED",
                "ENQUIRY",
                saved.getId().toString(),
                ip,
                "Inquiry received for subject: " + request.getSubject()
        );

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "Your inquiry has been received. Our team will contact you shortly.",
                "enquiryId", saved.getId()
        ));
    }

    @PostMapping("/applications")
    @Operation(summary = "Submit Career Application", description = "Persists candidate application with resume verification.")
    public ResponseEntity<Map<String, Object>> submitJobApplication(
            @Valid @RequestBody FormDtos.JobApplicationRequest request,
            HttpServletRequest servletRequest) {

        JobApplication application = contentService.createJobApplication(request);

        auditLogService.log(
                null,
                request.getEmail(),
                "JOB_APPLICATION_SUBMITTED",
                "JOB_APPLICATION",
                application.getId().toString(),
                servletRequest.getRemoteAddr(),
                "Application submitted for: " + request.getPositionApplied()
        );

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "Application submitted successfully! Our recruiting team will review it.",
                "applicationId", application.getId()
        ));
    }
}

