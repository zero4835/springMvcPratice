package com.ecommerce.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "certificate")
public class Certificate {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "certificate_id", unique = true, nullable = false)
	private Long certificateId;
	@NonNull
	@Column(name = "name", unique = true, nullable = false, length = 50)
	private String name;
	@ManyToOne
	@JoinColumn(name = "skill_id")
	@NonNull
	private Skill skill;
	@ManyToOne
	@JoinColumn(name = "company_id")
	@NonNull
	private Company company;

}