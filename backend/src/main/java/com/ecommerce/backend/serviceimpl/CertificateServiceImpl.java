package com.ecommerce.backend.serviceimpl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.Certificate;
import com.ecommerce.backend.repository.CertificateRepository;
import com.ecommerce.backend.service.CertificateService;

@Service
public class CertificateServiceImpl implements CertificateService {
    
    @Autowired
    private CertificateRepository certificateRepository;


    @Override
    public Certificate saveCertificate(Certificate certificate) {
        certificate.setCertificateId(UUID.randomUUID().toString().replaceAll("-", ""));
        certificateRepository.save(certificate);
        return certificate;
    }
}
