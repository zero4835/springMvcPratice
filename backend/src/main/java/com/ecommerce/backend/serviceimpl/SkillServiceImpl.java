package com.ecommerce.backend.serviceimpl;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.Skill;
import com.ecommerce.backend.repository.SkillRepository;
import com.ecommerce.backend.service.SkillService;

@Service
public class SkillServiceImpl  implements SkillService{

    @Autowired
    private SkillRepository skillRepository;

    @Override
    public Skill saveSkill(Skill skill) {
        skill.setSkillId(UUID.randomUUID().toString().replaceAll("-", ""));
        skillRepository.save(skill);
        return skill;
    }
}
