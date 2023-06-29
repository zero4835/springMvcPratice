package com.ecommerce.backend.service;

public interface JWTService {
    
    public String createToken(Integer userId, String email);
    public Integer getUserIdFromToken(String token);
    public boolean checkToken(String token);

}
