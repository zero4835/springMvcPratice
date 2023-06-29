package com.ecommerce.backend.serviceimpl;

import java.util.UUID;
import java.sql.Date;

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
        java.util.Date utilDate = new java.util.Date();
        java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
        examInfo.setExamDate(sqlDate);
        examInfoRepository.save(examInfo);
        return examInfo;
    }
}
