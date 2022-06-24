package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.Doctor;
import com.hospitalbooking.backend.repository.DoctorRepos;
import com.hospitalbooking.backend.repository.EmployeeRepos;
import com.hospitalbooking.backend.repository.UserRepos;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import javax.xml.ws.Response;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DoctorController {
    private static final Logger LOGGER= LoggerFactory.getLogger(DoctorController.class);

    @Autowired
    private DoctorRepos doctorRepos;
    @Autowired
    private UserRepos userRepos;
    @Autowired
    private EmployeeRepos employeeRepos;

    @GetMapping("/doctors/{id}")
    public ResponseEntity<Doctor> one(@PathVariable Long id){
//        return new ResponseEntity<Doctor>(new Doctor(), HttpStatus.OK);
        return doctorRepos.findById(id).map(doctor -> new ResponseEntity<>(doctor, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/doctors")
    public ResponseEntity<List<Doctor>> all(){
        return new ResponseEntity<>(doctorRepos.findAll(), HttpStatus.OK);
    }

    @PostMapping("/doctors")
    public ResponseEntity<Doctor> add(@RequestBody Doctor doctor){
        return new ResponseEntity<>(doctorRepos.save(doctor), HttpStatus.OK);
    }

    @PutMapping("/doctors/{id}")
    public ResponseEntity<Doctor> update(@RequestBody Doctor doctor, @PathVariable Long id){
        Optional<Doctor> optional = doctorRepos.findById(id);
        return optional.map(model -> {
            doctor.setId(model.getId());
            return new ResponseEntity<>(doctorRepos.save(doctor), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/doctors/{id}")
    public ResponseEntity<Doctor> delete(@PathVariable Long id){
        Optional<Doctor> optional = doctorRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(model, HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
