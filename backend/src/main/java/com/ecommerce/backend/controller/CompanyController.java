package com.ecommerce.backend.controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.model.Company;
import com.ecommerce.backend.repository.CompanyRepository;
import com.ecommerce.backend.service.CompanyService;

import jakarta.validation.Valid;


@RestController
@CrossOrigin("*")
public class CompanyController {
    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CompanyService companyService;

    @GetMapping("/companys")
    public Collection<Company> getAllCompanys() {
        return companyRepository.findAll();
    }

    @PostMapping("/companys")
    public ResponseEntity<Company> createCompany(@Valid @RequestBody Company company)
    throws Exception {
        Company result = companyService.saveCompany(company);
        return ResponseEntity.ok().body(result);
    }
}