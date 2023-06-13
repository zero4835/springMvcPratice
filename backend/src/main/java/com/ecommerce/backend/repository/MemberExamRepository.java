package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.MemberExam;

@Repository
public interface MemberExamRepository extends JpaRepository<MemberExam, Long>{

}
