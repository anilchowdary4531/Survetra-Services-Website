package com.survetra.repository;

import com.survetra.model.TeamMember;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface TeamMemberRepository extends JpaRepository<TeamMember, UUID> {
    List<TeamMember> findByIsDeletedFalseOrderBySortOrderAsc();
    List<TeamMember> findByCategoryAndIsDeletedFalseOrderBySortOrderAsc(String category);
}

