package com.ecommerce.backend.service;

public interface JWTService {
    
    public String createToken();
    public Integer getUserIdFromToken();
    public boolean tokenCheckAdmin();
    public boolean checkToken();

}
