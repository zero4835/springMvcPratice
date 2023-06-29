package com.ecommerce.backend.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.Company;
import com.ecommerce.backend.repository.CompanyRepository;
import com.ecommerce.backend.service.CompanyService;

@Service
public class CompanyServiceImpl  implements CompanyService{
    
    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public Company saveCompany(Company company) {
        companyRepository.save(company);
        return company;
    }
}
