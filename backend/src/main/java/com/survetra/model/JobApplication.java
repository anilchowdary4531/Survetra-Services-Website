package com.survetra.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "job_applications")
public class JobApplication extends BaseEntity {

    @Column(name = "job_opening_id")
    private UUID jobOpeningId;

    @Column(name = "applicant_name", nullable = false, length = 150)
    private String applicantName;

    @Column(nullable = false, length = 255)
    private String email;

    @Column(nullable = false, length = 50)
    private String phone;

    @Column(name = "position_applied", nullable = false, length = 200)
    private String positionApplied;

    @Column(name = "resume_url", nullable = false, length = 500)
    private String resumeUrl;

    @Column(name = "cover_letter", columnDefinition = "TEXT")
    private String coverLetter;

    @Column(nullable = false, length = 50)
    private String status = "SUBMITTED";

    @Column(name = "admin_notes", columnDefinition = "TEXT")
    private String adminNotes;

    public JobApplication() {}

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

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getAdminNotes() { return adminNotes; }
    public void setAdminNotes(String adminNotes) { this.adminNotes = adminNotes; }
}

