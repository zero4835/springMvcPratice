package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.backend.model.LikePost;
import com.ecommerce.backend.model.Post;

public interface LikePostRepo extends JpaRepository<LikePost, Integer> {
  void deleteAllByPost(Post post);
}
