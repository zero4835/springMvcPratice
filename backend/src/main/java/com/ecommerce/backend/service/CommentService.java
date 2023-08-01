package com.ecommerce.backend.service;

import java.util.List;
import java.util.Optional;

import com.ecommerce.backend.model.Comment;
import com.ecommerce.backend.model.Post;

public interface CommentService {

  public Comment saveComment(Comment comment);

  public List<Comment> getAllComments();

  public List<Comment> getCommentByPost(Post post);

  public Optional<Comment> getCommentById(Integer id);

  public void deleteComment(Integer id);

  public List<Comment> getCommentsByPost(Post post);
}
