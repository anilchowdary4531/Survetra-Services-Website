package com.survetra.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.util.UUID;

public class FormDtos {

    public static class EnquiryRequest {
        @NotBlank(message = "Full name is required")
        private String fullName;

        @NotBlank(message = "Business email is required")
        @Email(message = "Invalid email format")
        private String businessEmail;

        private String phone;
        private String company;

        private String category = "GENERAL";

        @NotBlank(message = "Subject is required")
        private String subject;

        @NotBlank(message = "Message is required")
        private String message;

        public EnquiryRequest() {}

        public String getFullName() { return fullName; }
        public void setFullName(String fullName) { this.fullName = fullName; }

        public String getBusinessEmail() { return businessEmail; }
        public void setBusinessEmail(String businessEmail) { this.businessEmail = businessEmail; }

        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }

        public String getCompany() { return company; }
        public void setCompany(String company) { this.company = company; }

        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }

        public String getSubject() { return subject; }
        public void setSubject(String subject) { this.subject = subject; }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }

    public static class JobApplicationRequest {
        private UUID jobOpeningId;

        @NotBlank(message = "Applicant name is required")
        private String applicantName;

        @NotBlank(message = "Email is required")
        @Email(message = "Invalid email format")
        private String email;

        @NotBlank(message = "Phone is required")
        private String phone;

        @NotBlank(message = "Position is required")
        private String positionApplied;

        @NotBlank(message = "Resume URL is required")
        private String resumeUrl;

        private String coverLetter;

        public JobApplicationRequest() {}

        public UUID getJobOpeningId() { return jobOpeningId; }
        public void setJobOpeningId(UUID jobOpeningId) { this.jobOpeningId = jobOpeningId; }

        public String getApplicantName() { return applicantName; }
        public void setApplicantName(String applicantName) { this.applicantName = applicantName; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }

        public String getPositionApplied() { return positionApplied; }
        public void setPositionApplied(String positionApplied) { this.positionApplied = positionApplied; }

        public String getResumeUrl() { return resumeUrl; }
        public void setResumeUrl(String resumeUrl) { this.resumeUrl = resumeUrl; }

        public String getCoverLetter() { return coverLetter; }
        public void setCoverLetter(String coverLetter) { this.coverLetter = coverLetter; }
    }

    public static class DashboardStatsDto {
        private long totalEnquiries;
        private long newEnquiries;
        private long publishedProducts;
        private long publishedProjects;
        private long activeJobs;
        private long publishedArticles;
        private String platformSla = "Operational";

        public DashboardStatsDto() {}

        public DashboardStatsDto(long totalEnquiries, long newEnquiries, long publishedProducts, long publishedProjects, long activeJobs, long publishedArticles) {
            this.totalEnquiries = totalEnquiries;
            this.newEnquiries = newEnquiries;
            this.publishedProducts = publishedProducts;
            this.publishedProjects = publishedProjects;
            this.activeJobs = activeJobs;
            this.publishedArticles = publishedArticles;
            this.platformSla = "Operational";
        }

        public long getTotalEnquiries() { return totalEnquiries; }
        public void setTotalEnquiries(long totalEnquiries) { this.totalEnquiries = totalEnquiries; }

        public long getNewEnquiries() { return newEnquiries; }
        public void setNewEnquiries(long newEnquiries) { this.newEnquiries = newEnquiries; }

        public long getPublishedProducts() { return publishedProducts; }
        public void setPublishedProducts(long publishedProducts) { this.publishedProducts = publishedProducts; }

        public long getPublishedProjects() { return publishedProjects; }
        public void setPublishedProjects(long publishedProjects) { this.publishedProjects = publishedProjects; }

        public long getActiveJobs() { return activeJobs; }
        public void setActiveJobs(long activeJobs) { this.activeJobs = activeJobs; }

        public long getPublishedArticles() { return publishedArticles; }
        public void setPublishedArticles(long publishedArticles) { this.publishedArticles = publishedArticles; }

        public String getPlatformSla() { return platformSla; }
        public void setPlatformSla(String platformSla) { this.platformSla = platformSla; }
    }
}

