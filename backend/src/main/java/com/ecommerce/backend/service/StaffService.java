package com.ecommerce.backend.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.repository.StaffRepository;
import com.ecommerce.backend.model.StaffModel;

@Service
public class StaffService {
	
	@Autowired
	StaffRepository staffRepository;
	public void addStaff(StaffModel staffModel){
		staffRepository.addStaff(staffModel);
	}

}