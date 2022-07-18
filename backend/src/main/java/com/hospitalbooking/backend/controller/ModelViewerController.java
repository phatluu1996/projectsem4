package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/modelviewer")
public class ModelViewerController {

    @GetMapping("/model")
    public ResponseEntity view(@RequestParam("type") String type){
        switch (type){
            case "appointment"://http://localhost:8080/api/modelviewer/model?type=appointment
                return new ResponseEntity<>(new Appointment(), HttpStatus.OK);

            case "asset"://http://localhost:8080/api/modelviewer/model?type=asset
                return new ResponseEntity<>(new Asset(), HttpStatus.OK);

            case "department"://http://localhost:8080/api/modelviewer/model?type=department
                return new ResponseEntity<>(new Department(), HttpStatus.OK);

            case "doctor"://http://localhost:8080/api/modelviewer/model?type=doctor
                ArrayList<DoctorSchedule> list1 = new ArrayList<>();
                list1.add(new DoctorSchedule());
                ArrayList<Appointment> list2 = new ArrayList<>();
                Doctor doctor = new Doctor();
                doctor.setDoctorSchedules(list1);
                doctor.setAppointments(list2);
                doctor.setEmployee(new Employee());
                return new ResponseEntity<>(doctor, HttpStatus.OK);

            case "doctor-schedule"://http://localhost:8080/api/modelviewer/model?type=doctor-schedule
                return new ResponseEntity<>(new DoctorSchedule(), HttpStatus.OK);

            case "doctor-education"://http://localhost:8080/api/modelviewer/model?type=doctor-education
                return new ResponseEntity<>(new DoctorEducationDetail(), HttpStatus.OK);

            case "doctor-experience"://http://localhost:8080/api/modelviewer/model?type=doctor-experience
                return new ResponseEntity<>(new DoctorExperienceDetail(), HttpStatus.OK);

            case "employee"://http://localhost:8080/api/modelviewer/model?type=employee
                return new ResponseEntity<>(new Employee(), HttpStatus.OK);

            case "employee-leave"://http://localhost:8080/api/modelviewer/model?type=employee-leave
                return new ResponseEntity<>(new EmployeeLeave(), HttpStatus.OK);

            case "patient"://http://localhost:8080/api/modelviewer/model?type=patient
                return new ResponseEntity<>(new Patient(), HttpStatus.OK);

            case "user"://http://localhost:8080/api/modelviewer/model?type=user
                return new ResponseEntity<>(new User(), HttpStatus.OK);

            case "address"://http://localhost:8080/api/modelviewer/model?type=address
                return new ResponseEntity<>(new Address(), HttpStatus.OK);

            case "salary"://http://localhost:8080/api/modelviewer/model?type=salary
                return new ResponseEntity<>(new EmployeeSalary(), HttpStatus.OK);

            default:
                return new ResponseEntity<>(null, HttpStatus.OK);
        }
    }
}
