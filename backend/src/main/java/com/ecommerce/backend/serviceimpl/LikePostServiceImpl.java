package com.ecommerce.backend.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.LikePost;
import com.ecommerce.backend.model.Post;
import com.ecommerce.backend.repository.LikePostRepo;
import com.ecommerce.backend.service.LikePostService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class LikePostServiceImpl implements LikePostService {

  @Autowired
  private LikePostRepo likePostRepo;

  public LikePostServiceImpl(LikePostRepo likePostRepo) {
        this.likePostRepo = likePostRepo;
    }

  public void saveLikePost(LikePost likePostEntity) {
    likePostRepo.save(likePostEntity);
  }

  public List<LikePost> getAllLikePosts() {
    return likePostRepo.findAll();
  }

  public void deleteLikePost(LikePost likePostEntity) {
    likePostRepo.delete(likePostEntity);
  }

  // public void deleteAllLikePosts() {
  // likePostRepo.deleteAll();
  // }

  public void deleteAllLikePostByPost(Post post) {
    likePostRepo.deleteAllByPost(post);
  }
}
