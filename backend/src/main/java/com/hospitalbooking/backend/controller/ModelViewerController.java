package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/modelviewer")
public class ModelViewerController {

    @GetMapping("/model")
    public ResponseEntity view(@RequestParam("type") String type){
        switch (type){
            case "appointment":
                return new ResponseEntity<>(new Appointment(), HttpStatus.OK);

            case "asset":
                return new ResponseEntity<>(new Asset(), HttpStatus.OK);

            case "department":
                return new ResponseEntity<>(new Department(), HttpStatus.OK);

            case "doctor":
                return new ResponseEntity<>(new Doctor(), HttpStatus.OK);

            case "doctor-schedule":
                return new ResponseEntity<>(new DoctorSchedule(), HttpStatus.OK);

            case "doctor-education":
                return new ResponseEntity<>(new DoctorEducationDetail(), HttpStatus.OK);

            case "doctor-experience":
                return new ResponseEntity<>(new DoctorExperienceDetail(), HttpStatus.OK);

            case "employee":
                return new ResponseEntity<>(new Employee(), HttpStatus.OK);

            case "employee-leave":
                return new ResponseEntity<>(new EmployeeLeave(), HttpStatus.OK);

            case "patient":
                return new ResponseEntity<>(new Patient(), HttpStatus.OK);

            case "user":
                return new ResponseEntity<>(new User(), HttpStatus.OK);

            case "address":
                return new ResponseEntity<>(new Address(), HttpStatus.OK);

            default:
                return new ResponseEntity<>(null, HttpStatus.OK);
        }
    }
}
