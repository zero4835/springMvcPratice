package com.ecommerce.backend.service;

import com.ecommerce.backend.model.Member;
import com.ecommerce.backend.model.Post;

public interface PostService {

  public Post savePost(Post post);

  public Post getPostByUser(Member user);

}
