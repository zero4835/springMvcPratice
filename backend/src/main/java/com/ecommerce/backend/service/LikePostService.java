package com.ecommerce.backend.service;

import java.util.List;

import com.ecommerce.backend.model.LikePost;
import com.ecommerce.backend.model.Post;

public interface LikePostService {

  public void saveLikePost(LikePost likePostEntity);

  public List<LikePost> getAllLikePosts();

  public void deleteLikePost(LikePost likePostEntity);

  public void deleteAllLikePostByPost(Post post);

}
