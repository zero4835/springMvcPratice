package com.ecommerce.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "skill")
public class Skill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "skill_id", unique = true, nullable = false)
	private Long skillId;
	@NonNull
	@Column(name = "name", nullable = false, length = 50)
	private String name;
	@NonNull
	@Column(name = "type", nullable = false, length = 50)
	private String type;

}
