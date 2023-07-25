package com.ecommerce.backend.service;

import java.util.List;

import com.ecommerce.backend.model.Board;
import com.ecommerce.backend.model.Member;
import com.ecommerce.backend.model.Post;

public interface PostService {

  public Post savePost(Post post);

  public List<Post> getPostByUser(Member user);

  public Post getPostById(Integer id);

  public List<Post> getPostsByBoard(Board board);
}
