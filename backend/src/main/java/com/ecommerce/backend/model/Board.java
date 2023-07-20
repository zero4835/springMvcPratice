package com.ecommerce.backend.model;

import java.util  .Date;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "boards")
public class Board {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  // @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "board_id", unique = true, nullable = false, length = 50)
  private Integer id;

  @NonNull
  @NotEmpty
  @Column(name = "board_name", nullable = false, length = 50)
  private String boardName;

  @NonNull
  @NotEmpty
  @Column(name = "description", length = 500)
  private String description;

  @NonNull
  @Column(name = "icon_url", length = 1000)
  private String iconUrl;
  
  @Column(name = "board_create_time")
	private Date createTime;

}
