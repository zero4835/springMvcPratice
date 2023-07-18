package com.ecommerce.backend.controller;

import java.util.List;
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
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.model.Member;
import com.ecommerce.backend.model.Skill;
import com.ecommerce.backend.model.UserSignature;
import com.ecommerce.backend.repository.UserSignatureRepository;
import com.ecommerce.backend.service.JWTService;
import com.ecommerce.backend.service.MemberService;
import com.ecommerce.backend.service.UserSignatureService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
public class UserSignatureController {

  @Autowired
  private UserSignatureRepository userSignatureRepository;

  @Autowired
  private UserSignatureService userSignatureService;

  @Autowired
  private MemberService memberService;

  @Autowired
  private JWTService jwtService;

  @GetMapping("/signature")
  public List<UserSignature> signature() {
    return userSignatureRepository.findAll();
  }

  @PostMapping("/signature")
  public ResponseEntity<UserSignature> createsignature(@RequestHeader("Authorization") String token,
      @Valid @RequestBody UserSignature userSignature)
      throws Exception {
    if (jwtService.checkToken(token.split(" ")[1])) {
      return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    } else {

      int id = jwtService.getUserIdFromToken(token.split(" ")[1]);
      Member member = memberService.getMemberbyId(id);
      System.out.println("UserSignature email: " + userSignature.getMember().getEmail());
      System.out.println("Token email: " + member.getEmail());

      // Not use ==
      if (member.getEmail().equals(userSignature.getMember().getEmail())) {
        UserSignature result = userSignatureService.saveSignature(userSignature);
        System.out.println("Saved UserSignature ID: " + result.getId());
        return ResponseEntity.ok().body(result);
      } else {
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
      }

    }
  }

  @PutMapping("/signature/{id}")
  public ResponseEntity<UserSignature> updatesignature(@Valid @RequestBody UserSignature userSignature) {
    UserSignature result = userSignatureRepository.save(userSignature);
    return ResponseEntity.ok().body(result);
  }

  @DeleteMapping("/signature/{id}")
  public ResponseEntity<?> deletesignature(@PathVariable Long id) {
    userSignatureRepository.deleteById(id);
    return ResponseEntity.ok().build();
  }

}
