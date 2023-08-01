package com.ecommerce.backend.serviceimpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.Comment;
import com.ecommerce.backend.model.Post;
import com.ecommerce.backend.repository.CommentRepository;
import com.ecommerce.backend.service.CommentService;

import jakarta.transaction.Transactional;

@Service
public class CommentServiceImpl implements CommentService {

  @Autowired
  private CommentRepository commentRepository;

  @Override
  public Comment saveComment(Comment comment) {
    LocalDateTime taipeiLocalDateTime = LocalDateTime.now();
    comment.setCreateTime(taipeiLocalDateTime);
    return commentRepository.save(comment);
  }

  @Override
  public List<Comment> getAllComments(){
    return commentRepository.findAll();
  }

  @Override
  public List<Comment> getCommentByPost(Post post) {
    return commentRepository.findByPost(post);
  }

  @Override
  public Optional<Comment> getCommentById(Integer id) {
    return commentRepository.findById(id);
  }

  @Override
  @Transactional
  public void deleteComment(Integer id) {
    commentRepository.deleteCommentById(id);
  }

  @Override
  public List<Comment> getCommentsByPost(Post post) {
    return commentRepository.findAllByPostOrderByCreateTimeDesc(post);
  }

}
