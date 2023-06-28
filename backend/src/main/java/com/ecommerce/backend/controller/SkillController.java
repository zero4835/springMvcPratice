package com.ecommerce.backend.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.model.Skill;
import com.ecommerce.backend.repository.SkillRepository;
import com.ecommerce.backend.service.SkillService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
public class SkillController {
    @Autowired
    private SkillRepository skillRepository;
    @Autowired
    private SkillService skillService;

    @GetMapping("/skills")
    public Collection<Skill> skills() {
        return skillRepository.findAll();
    }
    
    @PostMapping("/skills")
    public ResponseEntity<Skill> createSkill(@Valid @RequestBody Skill skill) 
    throws Exception {
        Skill result = skillService.saveSkill(skill);
        return ResponseEntity.ok().body(result);
    }
}
