package com.ecommerce.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.model.Comment;
import com.ecommerce.backend.model.Post;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {

  List<Comment> findByPost(Post post);

  Optional<Comment> findById(Integer id);

  void deleteCommentById(Integer id);

  List<Comment> findAllByPostOrderByCreateTimeDesc(Post post);

}
