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

  private String convertToRelativeUrl(String imageUrl) {
    return imageUrl.replace("C:/Users/ROUSER6/Desktop/E-commerce/frontend/public", "");
  }

  @Override
  public Comment saveComment(Comment comment) {
    LocalDateTime taipeiLocalDateTime = LocalDateTime.now();
    comment.setCreateTime(taipeiLocalDateTime);
    comment.getUser().setImgUrl(convertToRelativeUrl(comment.getUser().getImgUrl()));
    commentRepository.save(comment);
    return comment;
  }

  @Override
  public List<Comment> getAllComments() {
    List<Comment> comments = commentRepository.findAll();
    comments.forEach(comment -> comment.getUser().setImgUrl(convertToRelativeUrl(comment.getUser().getImgUrl())));
    return comments;
  }

  @Override
  public List<Comment> getCommentByPost(Post post) {
    List<Comment> comments = commentRepository.findByPost(post);
    comments.forEach(comment -> comment.getUser().setImgUrl(convertToRelativeUrl(comment.getUser().getImgUrl())));
    return comments;
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
