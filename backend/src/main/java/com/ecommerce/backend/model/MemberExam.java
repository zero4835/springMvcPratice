package com.ecommerce.backend.model;

import java.sql.Date;

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
@Table(name = "member_exam")
public class MemberExam {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "member_exam_id", unique = true, nullable = false)
	private Long memberExamId;
	@ManyToOne
	@JoinColumn(name = "mid")
	@NonNull
	private Member member;
	@ManyToOne
	@JoinColumn(name = "exam_id")
	private ExamInfo examInfo;
	@Column(name = "join_time")
	private Date joinTime;
	
}