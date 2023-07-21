package com.ecommerce.backend.serviceimpl;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.Member;
import com.ecommerce.backend.model.Post;
import com.ecommerce.backend.repository.PostRepository;
import com.ecommerce.backend.service.PostService;

@Service
public class PostServiceImpl implements PostService {

  @Autowired
  private PostRepository postRepository;

  @Override
  public Post savePost(Post post) {
    LocalDateTime taipeiLocalDateTime = LocalDateTime.now();
    post.setCreateTime(taipeiLocalDateTime);

    return postRepository.save(post);
  }

  @Override
  public List<Post> getPostByUser(Member user) {
    List<Post> newPosts = postRepository.findByUser(user);
    return newPosts;
  }

  @Override
  public Post getPostById(Integer id) {
    Post newPost = postRepository.findById(id);
    return newPost;
  }

}
