package com.ecommerce.backend.controller;

import java.util.List;
import java.util.Optional;

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

import com.ecommerce.backend.model.Comment;
import com.ecommerce.backend.model.Member;
import com.ecommerce.backend.model.Post;
import com.ecommerce.backend.service.CommentService;
import com.ecommerce.backend.service.JWTService;
import com.ecommerce.backend.service.MemberService;
import com.ecommerce.backend.service.PostService;
import com.mysql.cj.util.StringUtils;

@RestController
@CrossOrigin("*")
@RequestMapping("/comment")
public class CommentController {

  @Autowired
  private CommentService commentService;

  @Autowired
  private MemberService memberService;

  @Autowired
  private PostService postService;

  @Autowired
  private JWTService jwtService;

  private String convertToRelativeUrl(String imageUrl) {
    return imageUrl.replace("C:/Users/ROUSER6/Desktop/E-commerce/frontend/public", "");
  }

  @GetMapping("/")
  public ResponseEntity<List<Comment>> getAllComment() {
    return ResponseEntity.ok().body(commentService.getAllComments());
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getCommentById(@PathVariable Integer id) {
    Optional<Comment> comments = commentService.getCommentById(id);

    if (!comments.isPresent())
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    return ResponseEntity.ok().body(comments);
  }

  @GetMapping("/post/{postid}")
  public ResponseEntity<List<Comment>> getAllCommentByPost(@PathVariable Integer postid) {
    // 根據 postid 獲取 Post 物件（假設你有對應的方法來獲取 Post 物件）
    Post post = postService.getPostById(postid);

    List<Comment> comments = commentService.getCommentsByPost(post);
    comments.forEach(comment -> comment.getUser().setImgUrl(convertToRelativeUrl(comment.getUser().getImgUrl())));
    return ResponseEntity.ok().body(comments);
  }

  @PostMapping("/")
  public ResponseEntity<?> saveComment(@RequestBody Comment comment,
      @RequestHeader(name = "Authorization", required = false) String token) {
    if (StringUtils.isNullOrEmpty(token)) {
      return ResponseEntity.status(HttpStatus.FORBIDDEN).body("please login");
    }
    if (jwtService.checkToken(token.split(" ")[1])) {
      return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }

    int id = jwtService.getUserIdFromToken(token.split(" ")[1]);
    Member member = memberService.getMemberbyId(id);

    if (member.getEmail().equals(comment.getUser().getEmail())) {
      if (comment != null && comment.getContent() != "") {
        Comment newComment = commentService.saveComment(comment);
        return new ResponseEntity<Comment>(newComment, null, HttpStatus.CREATED);
      }
    }
    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteCommentById(@PathVariable Integer id) {
    commentService.deleteComment(id);
    return ResponseEntity.status(HttpStatus.GONE).body(null);
  }

}
