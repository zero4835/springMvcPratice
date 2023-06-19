package com.ecommerce.backend.serviceimpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.Certificate;
import com.ecommerce.backend.repository.CertificateRepository;
import com.ecommerce.backend.service.CertificateService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CertificateServiceImpl implements CertificateService {
    
    @Autowired
    private CertificateRepository certificateRepository;


    @Override
    public Certificate saveCertificate(Certificate certificate) {
        certificateRepository.save(certificate);
        return certificate;
    }
}
