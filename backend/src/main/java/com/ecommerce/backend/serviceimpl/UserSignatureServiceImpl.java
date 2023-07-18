package com.ecommerce.backend.serviceimpl;

import java.security.Signature;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.UserSignature;
import com.ecommerce.backend.repository.UserSignatureRepository;
import com.ecommerce.backend.service.UserSignatureService;

@Service
public class UserSignatureServiceImpl implements UserSignatureService{

  @Autowired
  private UserSignatureRepository userSignatureRepository;

  @Override
  public UserSignature saveSignature(UserSignature userSignature){
    userSignatureRepository.save(userSignature);
    return userSignature;
  }
}
