package com.ecommerce.backend.serviceimpl;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.Member;
import com.ecommerce.backend.repository.MemberRepository;
import com.ecommerce.backend.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public Member saveMember(Member member) {
        memberRepository.save(member);
        return member;
    }

}
