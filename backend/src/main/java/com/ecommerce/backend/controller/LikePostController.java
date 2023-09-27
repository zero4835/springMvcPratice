package com.ecommerce.backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.service.JWTService;
import com.ecommerce.backend.service.LikePostService;
import com.ecommerce.backend.service.MemberService;
import com.ecommerce.backend.service.PostService;

import System.out.println;

import com.ecommerce.backend.model.LikePost;
import com.ecommerce.backend.model.Member;
import com.ecommerce.backend.model.Post;
import com.ecommerce.backend.repository.LikePostRepository;
import com.ecommerce.backend.repository.MemberRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/likePosts")
public class LikePostController {

  @Autowired
  public LikePostService likePostService;
  @Autowired
  public PostService postService;
  @Autowired
  public MemberService userService;
  @Autowired
  public JWTService jwtService;
  @Autowired
  public LikePostRepository likePostRepo;

  @GetMapping("/")
  public ResponseEntity<List<LikePost>> getAllLikePosts() {
    List<LikePost> likePosts = likePostService.getAllLikePosts();
    // List<LikePost> likePosts = likePostRepo.findAll();
    for (LikePost likePost : likePosts)
      System.out.printf("\nlikepost= ", likePost.getPost());
    return new ResponseEntity<>(likePosts, HttpStatus.OK);
  }

  @GetMapping("/token")
  public ResponseEntity<List<LikePost>> getAllLikePostsByToken(@RequestHeader("Authorization") String token) {

    if (jwtService.checkToken(token.split(" ")[1])) {
      return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
    int userId = jwtService.getUserIdFromToken(token.split(" ")[1]);

    List<LikePost> likePostEntities = likePostService.getAllLikePosts();
    List<LikePost> likePostEntitiesByUserId = new ArrayList<LikePost>();
    for (LikePost likePostEntity : likePostEntities) {
      if (likePostEntity.getId().getUserId().equals(userId)) {
        likePostEntitiesByUserId.add(likePostEntity);
      }
      if (likePostEntity.getPost() != null && likePostEntity.getPost().getContent().length() > 50) {
        likePostEntity.getPost().setContent(likePostEntity.getPost().getContent().substring(0, 50) + "...");
      }
    }
    return new ResponseEntity<>(likePostEntitiesByUserId, HttpStatus.OK);
  }

  @PostMapping("/{postId}")
  public ResponseEntity<LikePost> addLikePost(@PathVariable Integer postId,
      @RequestHeader("Authorization") String token) {

    if (jwtService.checkToken(token.split(" ")[1])) {
      return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
    int userId = jwtService.getUserIdFromToken(token.split(" ")[1]);
    LikePost.LikePostId likePostId = new LikePost.LikePostId();

    Member user = userService.getMemberbyId(userId);
    Post post = postService.getPostById(postId);
    System.out.println("Post before saving: " + post);

    likePostId.setUserId(userId);
    likePostId.setPostId(postId);

    LikePost likePost = new LikePost(user, post, likePostId);
    likePost = likePostService.saveLikePost(likePost);
    return new ResponseEntity<>(likePost, HttpStatus.CREATED);
  }

  @GetMapping("/{userId}")
    public ResponseEntity<List<LikePost>> getAllLikePostsByUserId(@PathVariable Integer userId) {
        List<LikePost> likePostEntities = likePostService.getAllLikePosts();
//        List<LikePostEntity> likePostEntitiesByUserId = likePostEntities.stream()
//                .filter(likePostEntity -> likePostEntity.getId().getUserId().equals(userId))
//                .toList();
        List<LikePost> likePostEntitiesByUserId = new ArrayList<LikePost>();
        for (LikePost likePostEntity : likePostEntities) {
            if (likePostEntity.getId().getUserId().equals(userId)) {
                likePostEntitiesByUserId.add(likePostEntity);
            }
        }
        return new ResponseEntity<>(likePostEntitiesByUserId, HttpStatus.OK);
    }

  @DeleteMapping("/{postId}")
  public ResponseEntity<LikePost> deleteLikePost(@PathVariable Integer postId,
      @RequestHeader("Authorization") String token) {
    if (jwtService.checkToken(token.split(" ")[1])) {
      return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
    int userId = jwtService.getUserIdFromToken(token.split(" ")[1]);

    LikePost.LikePostId likePostId = new LikePost.LikePostId();

    Member user = userService.getMemberbyId(userId);
    Post post = postService.getPostById(postId);
    likePostId.setUserId(userId);
    likePostId.setPostId(postId);

    LikePost likePost = new LikePost(user, post, likePostId);
    likePostService.deleteLikePost(likePost);

    return new ResponseEntity<>(likePost, HttpStatus.OK);
  }
}
