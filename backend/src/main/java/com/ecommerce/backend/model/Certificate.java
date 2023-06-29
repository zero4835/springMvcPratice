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
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "certificate_id", unique = true, nullable = false)
	private Integer certificateId;
	@NonNull
	@Column(name = "name", unique = true, nullable = false, length = 50)
	private String name;
	@ManyToOne
	@JoinColumn(name = "skill_id", nullable = false)
	@NonNull
	private Skill skill;
	@ManyToOne
	@JoinColumn(name = "company_id", nullable = false)
	@NonNull
	private Company company;

	@Override
	public String toString() {
		return "certificate{" +
			"id=" + certificateId +
			", name='" + name + '\'' +
			", skill='" + skill + '\'' +
			", company='" + company + '\'' +
			'}';
	}

}