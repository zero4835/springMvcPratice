package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

}
