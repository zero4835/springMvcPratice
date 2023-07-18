package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.UserSignature;

@Repository
public interface UserSignatureRepository extends JpaRepository<UserSignature, Long>{
  UserSignature findByMemberMid(String id);
}
