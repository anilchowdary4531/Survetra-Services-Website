package com.survetra.service;

import com.survetra.model.*;
import com.survetra.repository.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class DataInitializerService implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataInitializerService.class);

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final ProductRepository productRepository;
    private final ServiceRepository serviceRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${survetra.admin.initial-email:admin@survetra.com}")
    private String initialAdminEmail;

    @Value("${survetra.admin.initial-password:SurvetraAdmin@2026}")
    private String initialAdminPassword;

    public DataInitializerService(
            UserRepository userRepository,
            RoleRepository roleRepository,
            ProductRepository productRepository,
            ServiceRepository serviceRepository,
            PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.productRepository = productRepository;
        this.serviceRepository = serviceRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // 1. Provision Roles
        Role superAdminRole = roleRepository.findByName("SUPER_ADMIN")
                .orElseGet(() -> roleRepository.save(new Role("SUPER_ADMIN", "Full administrative control")));
        roleRepository.findByName("CONTENT_MANAGER")
                .orElseGet(() -> roleRepository.save(new Role("CONTENT_MANAGER", "Editorial management")));
        roleRepository.findByName("HR_MANAGER")
                .orElseGet(() -> roleRepository.save(new Role("HR_MANAGER", "Recruitment and candidate management")));
        roleRepository.findByName("BUSINESS_DEVELOPMENT_MANAGER")
                .orElseGet(() -> roleRepository.save(new Role("BUSINESS_DEVELOPMENT_MANAGER", "Inquiries and enterprise accounts")));

        // 2. Provision First Super Admin if not already present
        if (!userRepository.existsByEmail(initialAdminEmail)) {
            User admin = new User(
                    initialAdminEmail,
                    passwordEncoder.encode(initialAdminPassword),
                    "Suresh",
                    "Babu"
            );
            admin.setRoles(Set.of(superAdminRole));
            userRepository.save(admin);
            log.info("Secure First Admin provisioned for: {}", initialAdminEmail);
        }

        // 3. Seed Core Products in Dev if empty
        if (productRepository.count() == 0) {
            Product tiffzy = new Product();
            tiffzy.setSlug("tiffzy");
            tiffzy.setName("Tiffzy");
            tiffzy.setTagline("End-to-End Restaurant Technology & Food Service Management Ecosystem");
            tiffzy.setCategory("Restaurant & Commerce Technology");
            tiffzy.setShortDescription("A unified enterprise platform powering restaurant operations, dynamic ordering, kitchen workflow automation, multi-tier supply chain, and integrated digital wallets.");
            tiffzy.setFullDescription("Tiffzy is Survetra's flagship enterprise restaurant ecosystem, engineered to solve the complex operational challenges of modern food service providers, cloud kitchens, and multi-location franchises.");
            tiffzy.setStatus("Active");
            tiffzy.setBadge("Enterprise Suite");
            tiffzy.setTechStack("[\"Next.js\", \"Spring Boot\", \"PostgreSQL\", \"Kafka\", \"Redis\"]");
            tiffzy.setMetrics("[{\"label\": \"Order Ingestion\", \"value\": \"Real-Time\"}, {\"label\": \"Architecture\", \"value\": \"Cloud-Native\"}]");
            productRepository.save(tiffzy);

            Product socialSea = new Product();
            socialSea.setSlug("socialsea");
            socialSea.setName("SocialSea");
            socialSea.setTagline("High-Engagement Community Platform & Next-Gen Social Networking System");
            socialSea.setCategory("Social Media & Community Platforms");
            socialSea.setShortDescription("A real-time, low-latency social networking engine engineered for verified communities, rich multimedia feeds, short-form video streaming, and encrypted messaging.");
            socialSea.setFullDescription("SocialSea is Survetra's modern social platform designed to redefine authentic digital connections.");
            socialSea.setStatus("Beta");
            socialSea.setBadge("Consumer Platform");
            socialSea.setTechStack("[\"Next.js\", \"Go\", \"Spring Boot\", \"Cassandra\", \"WebRTC\"]");
            socialSea.setMetrics("[{\"label\": \"Feed Engine\", \"value\": \"Graph-Based\"}, {\"label\": \"Media Delivery\", \"value\": \"Adaptive HLS\"}]");
            productRepository.save(socialSea);

            log.info("Initialized default products portfolio.");
        }
    }
}

