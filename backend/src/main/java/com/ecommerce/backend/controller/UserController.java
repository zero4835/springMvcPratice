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
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.repository.MemberRepository;
import com.ecommerce.backend.service.MemberService;

import jakarta.validation.Valid;

import com.ecommerce.backend.model.Member;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private MemberService memberService;

    @GetMapping("/users")
    public List<Member> members() {
        return memberRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getMember(@PathVariable Long id) {
        Optional<Member> member = memberRepository.findById(id);
        return member.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/users")
    public ResponseEntity<Member> createMember(@Valid @RequestBody Member member) throws Exception {
        Member result = memberService.saveMember(member);
        return ResponseEntity.ok().body(result);
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<Member> updateMember(@Valid @RequestBody Member member) {
        Member result = memberRepository.save(member);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteMember(@PathVariable Long id){
        memberRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/test")
    public ResponseEntity<Member> test(@Valid @RequestBody Member member) throws Exception {
        Member result = memberService.saveMember(member);
        return ResponseEntity.ok().body(result);
    }
}