package com.survetra;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("dev")
class SurvetraBackendApplicationTests {

    @Test
    void contextLoads() {
        // Verifies complete Spring Boot context loading, JPA setup, and bean wiring
    }
}

