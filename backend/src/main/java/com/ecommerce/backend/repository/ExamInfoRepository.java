package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.ExamInfo;

@Repository
public interface ExamInfoRepository extends JpaRepository<ExamInfo, Long>{

}
