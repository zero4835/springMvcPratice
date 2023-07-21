package com.ecommerce.backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "post")
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "post_id", unique = true, nullable = false, length = 50)
  private Integer id;

  @NonNull
  @NotEmpty
  @Column(name = "title", unique = true, length = 100)
  private String title;

  @NonNull
  @NotEmpty
  @Column(name = "content", length = 1000)
  private String content;

  @ManyToOne
  @JoinColumn(name = "mid")
  private Member user;

  @ManyToOne
  @JoinColumn(name = "board_id")
  private Board board;

  @Column(name = "post_create_time")
  private LocalDateTime createTime;
}
