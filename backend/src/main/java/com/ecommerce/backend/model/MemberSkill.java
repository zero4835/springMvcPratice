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
@Table(name = "member_skill")
public class MemberSkill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "member_skill_id", unique = true, nullable = false)
	private Long memberSkillId;
	@ManyToOne
	@JoinColumn(name = "mid")
	@NonNull
	private Member member;
	@ManyToOne
	@JoinColumn(name = "skill_id")
	@NonNull
	private Skill skill;

}
