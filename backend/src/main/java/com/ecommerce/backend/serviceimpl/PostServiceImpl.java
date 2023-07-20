package com.ecommerce.backend.serviceimpl;

import java.util.Date;

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
    post.setCreateTime(new Date());
    return postRepository.save(post);
  }

  @Override
  public Post getPostByUser(Member user) {
    Post newPost = postRepository.findByUser(user);
    return newPost;
  }

}
