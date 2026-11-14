package com.survetra.repository;

import com.survetra.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {
    Optional<Product> findBySlugAndIsDeletedFalse(String slug);
    List<Product> findByIsDeletedFalseOrderBySortOrderAsc();
    List<Product> findByStatusAndIsDeletedFalseOrderBySortOrderAsc(String status);
    long countByStatusAndIsDeletedFalse(String status);
}

