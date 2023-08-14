package com.ecommerce.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "like_post")
public class LikePost {
  @EmbeddedId
  private LikePostId id;

  @ManyToOne
  @MapsId("mid")
  private Member user;

  @ManyToOne
  @MapsId("post_id")
  private Post post;

  public LikePost() {
  }

  public LikePost(Member user, Post post, LikePostId id) {
    this.user = user;
    this.post = post;
    this.id = id;
  }

  public LikePostId getId() {
    return id;
  }

  public void setId(LikePostId id) {
    this.id = id;
  }

  public Member getUser() {
    return user;
  }

  public void setUser(Member user) {
    this.user = user;
  }

  public Post getPost() {
    return post;
  }

  public void setPost(Post post) {
    this.post = post;
  }

  @Embeddable
  public static class LikePostId implements Serializable {
    private Integer userId;
    private Integer postId;

    public Integer getUserId() {
      return userId;
    }

    public void setUserId(Integer userId) {
      this.userId = userId;
    }

    public Integer getPostId() {
      return postId;
    }

    public void setPostId(Integer postId) {
      this.postId = postId;
    }
  }
}
