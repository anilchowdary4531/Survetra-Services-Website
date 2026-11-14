package com.survetra.repository;

import com.survetra.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ArticleRepository extends JpaRepository<Article, UUID> {
    Optional<Article> findBySlugAndIsDeletedFalse(String slug);
    List<Article> findByIsDeletedFalseOrderByCreatedAtDesc();
    List<Article> findByStatusAndIsDeletedFalseOrderByCreatedAtDesc(String status);
    long countByStatusAndIsDeletedFalse(String status);
}

