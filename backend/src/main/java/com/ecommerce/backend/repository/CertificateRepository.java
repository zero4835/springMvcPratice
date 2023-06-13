package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.Certificate;

@Repository
public interface CertificateRepository extends JpaRepository<Certificate, Long>{

}
