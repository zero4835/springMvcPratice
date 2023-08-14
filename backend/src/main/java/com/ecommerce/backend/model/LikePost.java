package com.ecommerce.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import lombok.*;

@Data
@Entity
@Table(name = "like_post")
public class LikePost {
  @EmbeddedId
  @Column(name = "post_like_id", unique = true, nullable = false, length = 100)
  private LikePostId id;

  @ManyToOne
  @JsonIgnore
  @JoinColumn(name = "mid")
  private Member user;

  @ManyToOne
  @JoinColumn(name = "post_id")
  private Post post;

  public LikePost() {
  }

  public LikePost(Member user, Post post, LikePostId id) {
      this.user = user;
      this.post = post;
      this.id = id;
  }

  @Embeddable
  public static class LikePostId implements Serializable {
    @Column(name = "mid")
    private Integer userId;
    @Column(name = "post_id")
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
