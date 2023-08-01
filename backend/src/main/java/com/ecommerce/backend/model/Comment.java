package com.ecommerce.backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "comment")
public class Comment {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "comment_id", unique = true, nullable = false, length = 100)
  private Integer id;

  @NonNull
  @NotEmpty
  @Column(name = "content", length = 10000)
  private String content;

  @ManyToOne
  @JoinColumn(name = "mid")
  private Member user;

  @ManyToOne
  @JoinColumn(name = "post_id")
  private Post post;

  @Column(name = "comment_create_time")
  private LocalDateTime createTime;
}
