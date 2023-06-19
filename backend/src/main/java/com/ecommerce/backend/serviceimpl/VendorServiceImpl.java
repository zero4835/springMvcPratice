package com.ecommerce.backend.serviceimpl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.Vendor;
import com.ecommerce.backend.repository.VendorRepository;
import com.ecommerce.backend.service.VendorService;

@Service
public class VendorServiceImpl implements VendorService {

    @Autowired
    private VendorRepository vendorRepository;

    @Override
    public Vendor saveVendor(Vendor vendor) {
        vendor.setVendorId(UUID.randomUUID().toString().replaceAll("-", ""));
        vendorRepository.save(vendor);
        return vendor;
    }

}
