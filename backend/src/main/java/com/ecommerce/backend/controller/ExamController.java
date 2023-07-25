package com.ecommerce.backend.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.model.ExamInfo;
import com.ecommerce.backend.repository.ExamInfoRepository;
import com.ecommerce.backend.service.ExamService;

import jakarta.validation.Valid;
@CrossOrigin("*")
@RestController
public class ExamController {

    @Autowired
    private ExamInfoRepository examInfoRepository;

    @Autowired
    private ExamService examService;

    @GetMapping("/exams")
    public Collection<ExamInfo> exams() {
        return examInfoRepository.findAll();
    }

    @PostMapping("/exams")
    public ResponseEntity<ExamInfo> createExam(@Valid @RequestBody ExamInfo examInfo) 
    throws Exception {
        ExamInfo result = examService.saveExam(examInfo);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/exams/{id}")
    public ResponseEntity<?> deleteExam(@PathVariable Long id){
        examInfoRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
