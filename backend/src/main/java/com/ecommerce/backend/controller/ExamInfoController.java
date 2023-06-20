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

import com.ecommerce.backend.model.ExamInfo;
import com.ecommerce.backend.repository.ExamInfoRepository;
import com.ecommerce.backend.service.ExamService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ExamInfoController{

    @Autowired
    private ExamInfoRepository examInfoRepository;
    
    @Autowired
    private ExamService examInfoService;

    @GetMapping("/exams")
    public Collection<ExamInfo> exams() {
        return examInfoRepository.findAll();
    }

    @PostMapping("/exams")
    public ResponseEntity<ExamInfo> createExam(@Valid @RequestBody ExamInfo examInfo) 
    throws Exception {
        ExamInfo result = examInfoService.saveExam(examInfo);
        return ResponseEntity.ok().body(result);
    }
}
