package com.ecommerce.backend.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.service.JWTService;
import com.ecommerce.backend.service.MemberService;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.JWTVerifier;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class JWTServiceImpl implements JWTService{

    @Autowired
    MemberService memberService;

    private static final String secret = "This magic String is secret";

    public void JWTService(MemberService memberService) {
        this.memberService = memberService;
    }

    public String createToken(Integer userId, String email) {
        Algorithm algorithm = Algorithm.HMAC256(secret);
        return JWT.create()
                .withClaim("mid", userId)
                .withClaim("email", email)
                .sign(algorithm);
    }

    public Integer getUserIdFromToken(String token) {
        Algorithm algorithm = Algorithm.HMAC256(secret);
        JWTVerifier verifier = JWT.require(algorithm).build();
        return verifier.verify(token).getClaim("mid").asInt();
    }


    public boolean checkToken(String token) {
        Algorithm algorithm = Algorithm.HMAC256(secret);
        JWTVerifier verifier = JWT.require(algorithm).build();
        try {
            // token is valid
            verifier.verify(token);
            return false;
        } catch (JWTVerificationException exception) {
            // token is invalid
            return true;
        }
    }
    
}
