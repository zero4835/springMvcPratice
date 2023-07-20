package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.Member;
import com.ecommerce.backend.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    Post findByUser(Member user);
}