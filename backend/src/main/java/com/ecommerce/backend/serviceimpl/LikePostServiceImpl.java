package com.ecommerce.backend.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.LikePost;
import com.ecommerce.backend.model.Post;
import com.ecommerce.backend.repository.LikePostRepository;
import com.ecommerce.backend.service.LikePostService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class LikePostServiceImpl implements LikePostService {

  @Autowired
  private LikePostRepository likePostRepo;

  @Override
  public LikePost saveLikePost(LikePost likePost) {
    likePostRepo.save(likePost);
    return likePost;
  }

  @Override
  public List<LikePost> getAllLikePosts() {
    return likePostRepo.findAll();
  }

  @Override
  public void deleteLikePost(LikePost likePost) {
    likePostRepo.delete(likePost);
  }

  // public void deleteAllLikePosts() {
  // likePostRepo.deleteAll();
  // }

  @Override
  public void deleteAllLikePostByPost(Post post) {
    likePostRepo.deleteAllByPost(post);
  }
}
