package com.ecommerce.backend.controller;

import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ecommerce.backend.repository.MemberRepository;
import com.ecommerce.backend.service.JWTService;
import com.ecommerce.backend.service.MemberService;

import jakarta.validation.Valid;

import com.ecommerce.backend.model.Member;

@RestController
@CrossOrigin("*")
public class MemberController {

  @Autowired
  private MemberRepository memberRepository;

  @Autowired
  private MemberService memberService;

  @Autowired
  private JWTService jwtService;

  @GetMapping("/members")
  public List<Member> members() {
    return memberRepository.findAll();
  }

  @GetMapping("/member/{id}")
  public ResponseEntity<?> getMember(@PathVariable Long id) {
    Optional<Member> memberOptional = memberRepository.findById(id);

    if (memberOptional.isPresent()) {
      Member member = memberOptional.get();
      String imageUrl = member.getImgUrl();
      String relativeImageUrl = imageUrl.replace("C:/Users/ROUSER6/Desktop/E-commerce/frontend/public", "");
      member.setImgUrl(relativeImageUrl);
      return ResponseEntity.ok().body(member);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping("/members")
  public ResponseEntity<Member> createMember(@RequestParam("email") String email,
      @RequestParam("password") String password,
      @RequestParam("firstName") String firstName,
      @RequestParam("lastName") String lastName,
      @RequestParam("imgUrl") MultipartFile file) throws Exception {
    if (file != null && !file.isEmpty()) {
      // 存入的圖片檔名不可為中文或是有空白建
      String fileName = file.getOriginalFilename();
      String uploadDir = "C:/Users/ROUSER6/Desktop/E-commerce/frontend/public/images";
      String filePath = uploadDir + "/" + fileName.replaceAll("\\s", ""); // 去除空格
      file.transferTo(Paths.get(filePath));
      Member member = new Member(email, password, firstName, lastName, filePath);
      Member result = memberService.saveMember(member);
      System.out.println(email + " " + password + " " + firstName + " " + lastName + " " + filePath);
      return ResponseEntity.ok().body(result);
    } else {
      Member member = new Member(email, password, firstName, lastName, "");
      Member result = memberService.saveMember(member);
      return ResponseEntity.ok().body(result);
    }
  }

  @PutMapping("/member/{id}")
  public ResponseEntity<Member> updateMember(@Valid @RequestBody Member member, @PathVariable Long id) {
    Optional<Member> memberOptional = memberRepository.findById(id);

    if (memberOptional.isPresent()) {
      Member newMember = memberOptional.get();
      newMember.setEmail(member.getEmail());
      newMember.setPassword(member.getPassword());
      newMember.setFirstName(member.getFirstName());
      newMember.setLastName(member.getLastName());
      newMember.setImgUrl(member.getImgUrl());
      Member result = memberService.saveMember(newMember);
      return ResponseEntity.ok().body(result);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/member/{id}")
  public ResponseEntity<?> deleteMember(@PathVariable Long id) {
    memberRepository.deleteById(id);
    return ResponseEntity.ok().build();
  }

  /*
   * @PostMapping("/login")
   * public ResponseEntity<String> login(@RequestBody Member member)
   * throws Exception {
   * Member userAccount = memberService.getMemberbyEmail(member.getEmail());
   * if (userAccount == null) {
   * return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
   * } else if (userAccount.getPassword().equals(member.getPassword())) {
   * String token = jwtService.createToken(userAccount.getMid(),
   * userAccount.getEmail());
   * System.out.println("Generated token: " + token); // Add this debug output
   * return new ResponseEntity<>(token, HttpStatus.OK);
   * } else {
   * return new ResponseEntity<>("Wrong password", HttpStatus.FORBIDDEN);
   * }
   * }
   */

  @PostMapping("/login")
  public ResponseEntity<Map<String, String>> login(@RequestBody Member member)
      throws Exception {
    Member userAccount = memberService.getMemberbyEmail(member.getEmail());
    if (userAccount == null) {
      return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    } else if (userAccount.getPassword().equals(member.getPassword())) {
      String token = jwtService.createToken(userAccount.getMid(), userAccount.getEmail());
      String firstName = userAccount.getFirstName();
      Map<String, String> response = new HashMap<>();
      response.put("token", token);
      response.put("firstName", firstName);
      return new ResponseEntity<>(response, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }
  }

  @GetMapping("/getIdbyToken")
  public ResponseEntity<Member> getIdbyToken(@RequestHeader("Authorization") String token) {
    // "Bearer XXXXXXXX"
    if (jwtService.checkToken(token.split(" ")[1])) {
      return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }

    int id = jwtService.getUserIdFromToken(token.split(" ")[1]);
    Member member = memberService.getMemberbyId(id);
    return new ResponseEntity<>(member, HttpStatus.OK);
  }
}
