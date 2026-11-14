package com.survetra.service;

import com.survetra.dto.FormDtos;
import com.survetra.model.*;
import com.survetra.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class ContentService {

    private final ProductRepository productRepository;
    private final ServiceRepository serviceRepository;
    private final IndustryRepository industryRepository;
    private final CaseStudyRepository caseStudyRepository;
    private final TeamMemberRepository teamMemberRepository;
    private final JobOpeningRepository jobOpeningRepository;
    private final JobApplicationRepository jobApplicationRepository;
    private final ArticleRepository articleRepository;
    private final EnquiryRepository enquiryRepository;
    private final ProjectRepository projectRepository;
    private final MediaAssetRepository mediaAssetRepository;
    private final SiteSettingRepository siteSettingRepository;
    private final NavigationItemRepository navigationItemRepository;

    public ContentService(
            ProductRepository productRepository,
            ServiceRepository serviceRepository,
            IndustryRepository industryRepository,
            CaseStudyRepository caseStudyRepository,
            TeamMemberRepository teamMemberRepository,
            JobOpeningRepository jobOpeningRepository,
            JobApplicationRepository jobApplicationRepository,
            ArticleRepository articleRepository,
            EnquiryRepository enquiryRepository,
            ProjectRepository projectRepository,
            MediaAssetRepository mediaAssetRepository,
            SiteSettingRepository siteSettingRepository,
            NavigationItemRepository navigationItemRepository) {
        this.productRepository = productRepository;
        this.serviceRepository = serviceRepository;
        this.industryRepository = industryRepository;
        this.caseStudyRepository = caseStudyRepository;
        this.teamMemberRepository = teamMemberRepository;
        this.jobOpeningRepository = jobOpeningRepository;
        this.jobApplicationRepository = jobApplicationRepository;
        this.articleRepository = articleRepository;
        this.enquiryRepository = enquiryRepository;
        this.projectRepository = projectRepository;
        this.mediaAssetRepository = mediaAssetRepository;
        this.siteSettingRepository = siteSettingRepository;
        this.navigationItemRepository = navigationItemRepository;
    }

    // Public Queries
    @Transactional(readOnly = true)
    public List<Product> getPublishedProducts() {
        return productRepository.findByIsDeletedFalseOrderBySortOrderAsc();
    }

    @Transactional(readOnly = true)
    public Optional<Product> getProductBySlug(String slug) {
        return productRepository.findBySlugAndIsDeletedFalse(slug);
    }

    @Transactional(readOnly = true)
    public List<ServiceEntity> getAllServices() {
        return serviceRepository.findByIsDeletedFalseOrderBySortOrderAsc();
    }

    @Transactional(readOnly = true)
    public Optional<ServiceEntity> getServiceBySlug(String slug) {
        return serviceRepository.findBySlugAndIsDeletedFalse(slug);
    }

    @Transactional(readOnly = true)
    public List<Industry> getAllIndustries() {
        return industryRepository.findByIsDeletedFalseOrderBySortOrderAsc();
    }

    @Transactional(readOnly = true)
    public Optional<Industry> getIndustryBySlug(String slug) {
        return industryRepository.findBySlugAndIsDeletedFalse(slug);
    }

    @Transactional(readOnly = true)
    public List<CaseStudy> getAllCaseStudies() {
        return caseStudyRepository.findByIsDeletedFalseOrderBySortOrderAsc();
    }

    @Transactional(readOnly = true)
    public Optional<CaseStudy> getCaseStudyBySlug(String slug) {
        return caseStudyRepository.findBySlugAndIsDeletedFalse(slug);
    }

    @Transactional(readOnly = true)
    public List<TeamMember> getAllTeamMembers() {
        return teamMemberRepository.findByIsDeletedFalseOrderBySortOrderAsc();
    }

    @Transactional(readOnly = true)
    public List<JobOpening> getActiveJobs() {
        return jobOpeningRepository.findByStatusAndIsDeletedFalseOrderBySortOrderAsc("OPEN");
    }

    @Transactional(readOnly = true)
    public Optional<JobOpening> getJobBySlug(String slug) {
        return jobOpeningRepository.findBySlugAndIsDeletedFalse(slug);
    }

    @Transactional(readOnly = true)
    public List<Article> getPublishedArticles() {
        return articleRepository.findByStatusAndIsDeletedFalseOrderByCreatedAtDesc("PUBLISHED");
    }

    @Transactional(readOnly = true)
    public Optional<Article> getArticleBySlug(String slug) {
        return articleRepository.findBySlugAndIsDeletedFalse(slug);
    }

    @Transactional(readOnly = true)
    public List<Project> getPublishedProjects() {
        return projectRepository.findByIsDeletedFalseOrderBySortOrderAsc();
    }

    // Submissions
    public Enquiry createEnquiry(FormDtos.EnquiryRequest request, String ipAddress) {
        Enquiry enquiry = new Enquiry();
        enquiry.setFullName(request.getFullName());
        enquiry.setBusinessEmail(request.getBusinessEmail());
        enquiry.setPhone(request.getPhone());
        enquiry.setCompany(request.getCompany());
        enquiry.setCategory(request.getCategory());
        enquiry.setSubject(request.getSubject());
        enquiry.setMessage(request.getMessage());
        enquiry.setIpAddress(ipAddress);
        enquiry.setStatus("NEW");
        return enquiryRepository.save(enquiry);
    }

    public JobApplication createJobApplication(FormDtos.JobApplicationRequest request) {
        JobApplication application = new JobApplication();
        application.setJobOpeningId(request.getJobOpeningId());
        application.setApplicantName(request.getApplicantName());
        application.setEmail(request.getEmail());
        application.setPhone(request.getPhone());
        application.setPositionApplied(request.getPositionApplied());
        application.setResumeUrl(request.getResumeUrl());
        application.setCoverLetter(request.getCoverLetter());
        application.setStatus("SUBMITTED");
        return jobApplicationRepository.save(application);
    }

    // Admin Dashboard KPI
    @Transactional(readOnly = true)
    public FormDtos.DashboardStatsDto getDashboardStats() {
        long totalEnquiries = enquiryRepository.count();
        long newEnquiries = enquiryRepository.countByStatus("NEW");
        long publishedProducts = productRepository.countByStatusAndIsDeletedFalse("Production") + productRepository.countByStatusAndIsDeletedFalse("Beta");
        long publishedProjects = projectRepository.countByIsDeletedFalse();
        long activeJobs = jobOpeningRepository.countByStatusAndIsDeletedFalse("OPEN");
        long publishedArticles = articleRepository.countByStatusAndIsDeletedFalse("PUBLISHED");

        return new FormDtos.DashboardStatsDto(
                totalEnquiries,
                newEnquiries,
                publishedProducts,
                publishedProjects,
                activeJobs,
                publishedArticles
        );
    }

    // Admin Mutators
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(UUID id) {
        productRepository.findById(id).ifPresent(p -> {
            p.setDeleted(true);
            productRepository.save(p);
        });
    }

    public ServiceEntity saveService(ServiceEntity service) {
        return serviceRepository.save(service);
    }

    public void deleteService(UUID id) {
        serviceRepository.findById(id).ifPresent(s -> {
            s.setDeleted(true);
            serviceRepository.save(s);
        });
    }

    public List<Enquiry> getAllEnquiries() {
        return enquiryRepository.findAllByOrderByCreatedAtDesc();
    }

    public void updateEnquiryStatus(UUID id, String status) {
        enquiryRepository.findById(id).ifPresent(e -> {
            e.setStatus(status);
            enquiryRepository.save(e);
        });
    }

    public List<JobApplication> getAllJobApplications() {
        return jobApplicationRepository.findAllByOrderByCreatedAtDesc();
    }

    public void updateJobApplicationStatus(UUID id, String status) {
        jobApplicationRepository.findById(id).ifPresent(a -> {
            a.setStatus(status);
            jobApplicationRepository.save(a);
        });
    }

    public List<MediaAsset> getAllMedia() {
        return mediaAssetRepository.findAllByOrderByCreatedAtDesc();
    }

    public MediaAsset saveMedia(MediaAsset asset) {
        return mediaAssetRepository.save(asset);
    }

    public void deleteMedia(UUID id) {
        mediaAssetRepository.deleteById(id);
    }
}

