package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.repository.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class InitialLoaderController {
    private static final Logger LOGGER= LoggerFactory.getLogger(InitialLoaderController.class);

    @Autowired
    private UserRepos userRepos;

    @Autowired
    private DoctorRepos doctorRepos;

    @Autowired
    private EmployeeRepos employeeRepos;

    @Autowired
    private PatientRepos patientRepos;

    @Autowired
    private DepartmentRepos departmentRepos;

    @GetMapping("/load-initial")
    public ResponseEntity view() {
        
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
