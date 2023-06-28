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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.model.Vendor;
import com.ecommerce.backend.repository.VendorRepository;
import com.ecommerce.backend.service.VendorService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
public class VendorController {

    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private VendorService vendorService;

    @GetMapping("/vendors")
    public Collection<Vendor> vendors() {
        return vendorRepository.findAll();
    }

    @GetMapping("/vendor/{id}")
    public ResponseEntity<?> getVendor(@PathVariable long id) {
        Optional<Vendor> vendor = vendorRepository.findById(id);
        return vendor.map(response -> ResponseEntity.ok().body(vendor))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/vendors")
    public ResponseEntity<Vendor> createVendor(@Valid @RequestBody Vendor vendor) throws Exception {
        Vendor result = vendorService.saveVendor(vendor);
        return ResponseEntity.ok().body(result);
    }

}
