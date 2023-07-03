package com.ecommerce.backend.service;

import com.ecommerce.backend.model.Member;

public interface MemberService {

    public Member saveMember(Member member);
    public Member getMemberbyEmail(String email);
    public Member getMemberbyId(Integer id);

}