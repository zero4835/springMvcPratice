package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long>{

}