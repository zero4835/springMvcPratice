package com.ecommerce.backend.serviceimpl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.ExamInfo;
import com.ecommerce.backend.repository.ExamInfoRepository;
import com.ecommerce.backend.service.ExamService;

@Service
public class ExamServiceImpl implements ExamService{
    @Autowired
    private ExamInfoRepository examInfoRepository;

    @Override
    public ExamInfo saveExam(ExamInfo examInfo) {
        examInfo.setExamId(UUID.randomUUID().toString().replaceAll("-", ""));
        examInfoRepository.save(examInfo);
        return examInfo;
    }
}
