package com.ecommerce.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.model.Board;
import com.ecommerce.backend.model.Member;
import com.ecommerce.backend.model.Post;
import com.ecommerce.backend.repository.PostRepository;
import com.ecommerce.backend.service.BoardService;
import com.ecommerce.backend.service.JWTService;
import com.ecommerce.backend.service.MemberService;
import com.ecommerce.backend.service.PostService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/post")
public class PostController {
  @Autowired
  private PostRepository postRepository;

  @Autowired
  private PostService postService;

  @Autowired
  private BoardService boardService;

  @Autowired
  private MemberService memberService;

  @Autowired
  private JWTService jwtService;

  private String convertToRelativeUrl(String imageUrl) {
    return imageUrl.replace("C:/Users/ROUSER6/Desktop/E-commerce/frontend/public", "");
  }

  @GetMapping("/")
  public List<Post> posts() {
    List<Post> postList = postRepository.findAll();
    for (Post post : postList) {
      post.getUser().setImgUrl(convertToRelativeUrl(post.getUser().getImgUrl()));
    }
    return postList;
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getPostById(@PathVariable Integer id) {
    Post newPost = postService.getPostById(id);
    if (newPost != null) {
      String imageUrl = newPost.getUser().getImgUrl();
      String relativeImageUrl = imageUrl.replace("C:/Users/ROUSER6/Desktop/E-commerce/frontend/public", "");
      newPost.getUser().setImgUrl(relativeImageUrl);

      String BoardImgUrl = newPost.getBoard().getIconUrl();
      String relativeBoardImageUrl = BoardImgUrl.replace("C:/Users/ROUSER6/Desktop/E-commerce/frontend/public", "");
      if (relativeBoardImageUrl.startsWith("./")) {
        relativeBoardImageUrl = relativeBoardImageUrl.substring(1);
      }
      newPost.getBoard().setIconUrl(relativeBoardImageUrl);

      return ResponseEntity.ok().body(newPost);
    }

    return ResponseEntity.notFound().build();
  }

  @GetMapping("/user")
  public List<Post> getPostsByUser(@RequestBody Member user) {
    List<Post> newPosts = postService.getPostByUser(user);

    return newPosts;
  }

  @GetMapping("/board/{id}")
  public ResponseEntity<List<Post>> getPostByBoardId(@PathVariable Integer id) {

    Board board = boardService.getBoardById(id);
    List<Post> posts = postService.getPostsByBoard(board);

    for (Post post : posts) {
      if (post.getContent().length() > 50) {
        post.setContent(post.getContent().substring(0, 50) + "...");
      }
      String imageUrl = post.getUser().getImgUrl();
      String relativeImageUrl = imageUrl.replace("C:/Users/ROUSER6/Desktop/E-commerce/frontend/public", "");
      post.getUser().setImgUrl(relativeImageUrl);

      String BoardImgUrl = post.getBoard().getIconUrl();
      String relativeBoardImageUrl = BoardImgUrl.replace("C:/Users/ROUSER6/Desktop/E-commerce/frontend/public", "");
      if (relativeBoardImageUrl.startsWith("./")) {
        relativeBoardImageUrl = relativeBoardImageUrl.substring(1);
      }
      post.getBoard().setIconUrl(relativeBoardImageUrl);
      
    }
    return new ResponseEntity<>(posts, HttpStatus.OK);
  }

  @PostMapping("/")
  public ResponseEntity<Post> createPost(@Valid @RequestBody Post post, @RequestHeader("Authorization") String token) {
    if (jwtService.checkToken(token.split(" ")[1])) {
      return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }

    int id = jwtService.getUserIdFromToken(token.split(" ")[1]);
    Member member = memberService.getMemberbyId(id);
    // Not use ==, be use equals()

    if (member.getEmail().equals(post.getUser().getEmail())) {
      Post newPost = postService.savePost(post);
      return ResponseEntity.ok().body(newPost);
    } else {
      return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deletePost(@PathVariable Long id) {
    postRepository.deleteById(id);
    return ResponseEntity.ok().build();
  }
}
