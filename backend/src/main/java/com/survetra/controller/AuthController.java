package com.survetra.controller;

import com.survetra.dto.AuthDtos;
import com.survetra.model.User;
import com.survetra.repository.UserRepository;
import com.survetra.security.JwtUtils;
import com.survetra.service.AuditLogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@Tag(name = "Authentication", description = "Admin authentication and token management")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final UserRepository userRepository;
    private final AuditLogService auditLogService;

    public AuthController(
            AuthenticationManager authenticationManager,
            JwtUtils jwtUtils,
            UserRepository userRepository,
            AuditLogService auditLogService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.userRepository = userRepository;
        this.auditLogService = auditLogService;
    }

    @PostMapping("/login")
    @Operation(summary = "Authenticate Administrator", description = "Validates admin credentials and returns a secure JWT bearer token.")
    public ResponseEntity<AuthDtos.AuthResponse> login(
            @Valid @RequestBody AuthDtos.LoginRequest request,
            HttpServletRequest servletRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User record not found"));

        String primaryRole = user.getRoles().isEmpty() ? "SUPER_ADMIN" : user.getRoles().iterator().next().getName();
        String token = jwtUtils.generateToken(user.getEmail(), user.getId(), primaryRole);

        AuthDtos.UserDto userDto = new AuthDtos.UserDto(
                user.getId(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                primaryRole
        );

        auditLogService.log(
                user.getId(),
                user.getEmail(),
                "ADMIN_LOGIN_SUCCESS",
                "AUTHENTICATION",
                user.getId().toString(),
                servletRequest.getRemoteAddr(),
                "JWT issued successfully"
        );

        return ResponseEntity.ok(new AuthDtos.AuthResponse(token, userDto));
    }

    @GetMapping("/me")
    @Operation(summary = "Current User Profile", description = "Retrieves profile of the authenticated session.")
    public ResponseEntity<AuthDtos.UserDto> getCurrentUser(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(401).build();
        }

        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String primaryRole = user.getRoles().isEmpty() ? "SUPER_ADMIN" : user.getRoles().iterator().next().getName();

        return ResponseEntity.ok(new AuthDtos.UserDto(
                user.getId(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                primaryRole
        ));
    }
}

