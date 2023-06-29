package com.ecommerce.backend.controller;

import java.util.Collection;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.model.Certificate;
import com.ecommerce.backend.repository.CertificateRepository;
import com.ecommerce.backend.service.CertificateService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
public class CertificateController {

    @Autowired
    private CertificateRepository certificateRepository;

    @Autowired
    private CertificateService certificateSevices;
    

    @GetMapping("/certificates")
    public Collection<Certificate> certificates(){
        return certificateRepository.findAll();
    }

    @PostMapping("/certificates")
    public ResponseEntity<Certificate> creatCertificate(@Valid @RequestBody Certificate certificate) 
    throws Exception {
        Certificate result = certificateSevices.saveCertificate(certificate);
        return ResponseEntity.ok().body(result);
    }
}
