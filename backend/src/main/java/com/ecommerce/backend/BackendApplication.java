package com.ecommerce.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.ecommerce.backend","com.ecommerce.backend.model","com.ecommerce.backend.controller","com.ecommerce.backend.service","com.ecommerce.backend.repository"})
@EntityScan({"com.ecommerce.backend","com.ecommerce.backend.model","com.ecommerce.backend.controller","com.ecommerce.backend.service","com.ecommerce.backend.repository"})
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
}
