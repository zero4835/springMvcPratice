package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long>{

}