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
@Table(name = "exam_info")
public class ExamInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "exam_id", unique = true, nullable = false)
	private String examId;
	@ManyToOne
	@JoinColumn(name = "certificate_id")
	@NonNull
	private Certificate certificate;
	@ManyToOne
	@JoinColumn(name = "vendor_id")
	@NonNull
	private Vendor vendor;
	@NonNull
	@Column(name = "exam_date")
	private Date examDate;
	@NonNull
	@Column(name = "publish_date")
	private Date publishDate;
	
}
