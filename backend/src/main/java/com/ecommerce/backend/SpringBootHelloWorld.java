package com.ecommerce.backend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

// when use RestController return str else if use Controller return .Html
@Controller
@RequestMapping("/login")
public class SpringBootHelloWorld {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}
	

	@GetMapping("/x")
	public String hello(){
		// when use GetMapping return Template/XXX.html if RestMapping return str.
		return "Hey, Spring Boot ªº Hello World !";
	}
	
	@GetMapping("/index")
	public String helloIndex(){
		// return Template/index.html
		return "index";
	}

}