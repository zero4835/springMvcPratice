package com.ecommerce.backend.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "members")
public class Member {

	@Id
	@Column(name = "mid", unique = true, nullable = false, length = 50)
	private String mid;
	@NonNull
    @NotEmpty
	@Column(name = "email", unique = true, nullable = false, length = 50)
	private String email;
	@NonNull
    @NotEmpty
	@Column(name = "password", nullable = false, length = 50)
	private String password;
	@NonNull
    @NotEmpty
	@Column(name = "first_name", nullable = false, length = 50)
	private String firstName;
	@NonNull
    @NotEmpty
	@Column(name = "last_name", nullable = false, length = 50)
	private String lastName;
	@Column(name = "create_time")
	private Date createTime;
	@Column(name = "update_time")
	private Date updateTime;

}
