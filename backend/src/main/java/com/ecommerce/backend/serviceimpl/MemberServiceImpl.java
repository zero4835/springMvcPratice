package com.ecommerce.backend.serviceimpl;

import java.util.Optional;

import org.hibernate.internal.util.type.PrimitiveWrapperHelper.LongDescriptor;
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

    @Override
    public Member getMemberbyEmail(String email) {
        return memberRepository.findByEmail(email);
    }

    @Override
    public Member getMemberbyId(Integer id){
        Long longId = Long.valueOf(id);
        Optional<Member> optionalMember = memberRepository.findById(longId);
        return optionalMember.orElse(null);
    }

}
