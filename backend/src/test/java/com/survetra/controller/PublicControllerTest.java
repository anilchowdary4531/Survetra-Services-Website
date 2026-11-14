package com.survetra.controller;

import com.survetra.dto.AuthDtos;
import com.survetra.dto.FormDtos;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("dev")
public class PublicControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testGetProductsReturnsOk() throws Exception {
        mockMvc.perform(get("/api/v1/public/products"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").isArray());
    }

    @Test
    void testGetServicesReturnsOk() throws Exception {
        mockMvc.perform(get("/api/v1/public/services"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    void testSubmitContactEnquiry() throws Exception {
        FormDtos.EnquiryRequest request = new FormDtos.EnquiryRequest();
        request.setFullName("Test Client");
        request.setBusinessEmail("test.client@enterprise.com");
        request.setPhone("+91 9876543210");
        request.setCompany("Test Enterprise Corp");
        request.setCategory("GENERAL");
        request.setSubject("Architecture Scoping Inquiry");
        request.setMessage("Testing the contact form submission API.");

        mockMvc.perform(post("/api/v1/public/enquiries")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.enquiryId").isNotEmpty());
    }

    @Test
    void testSubmitJobApplication() throws Exception {
        FormDtos.JobApplicationRequest request = new FormDtos.JobApplicationRequest();
        request.setApplicantName("Candidate One");
        request.setEmail("candidate@test.com");
        request.setPhone("+91 9988776655");
        request.setPositionApplied("Staff AI Systems Engineer");
        request.setResumeUrl("https://survetra.com/resumes/candidate.pdf");
        request.setCoverLetter("Excited about the role.");

        mockMvc.perform(post("/api/v1/public/applications")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.applicationId").isNotEmpty());
    }

    @Test
    void testAdminEndpointWithoutTokenIsUnauthorized() throws Exception {
        mockMvc.perform(get("/api/v1/admin/dashboard/stats"))
                .andExpect(status().isForbidden());
    }
}

