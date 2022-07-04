package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.Doctor;
import com.hospitalbooking.backend.models.DoctorEducationDetail;
import com.hospitalbooking.backend.models.DoctorExperienceDetail;
import com.hospitalbooking.backend.repository.*;
import com.hospitalbooking.backend.specification.DBSpecification;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import javax.xml.ws.Response;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DoctorController {
    private static final Logger LOGGER= LoggerFactory.getLogger(DoctorController.class);

    @Autowired
    private DoctorRepos doctorRepos;
    @Autowired
    private DocEducationRepos docEducationRepos;
    @Autowired
    private DocExperienceRepos docExperienceRepos;
    @Autowired
    private UserRepos userRepos;
    @Autowired
    private EmployeeRepos employeeRepos;

    @Autowired
    private AddressRepos addressRepos;

    @GetMapping("/doctors/{id}")
    public ResponseEntity<Doctor> one(@PathVariable Long id){
        return doctorRepos.findById(id).map(doctor -> new ResponseEntity<>(doctor, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/doctors")
    public ResponseEntity<List<Doctor>> all(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(doctorRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping("/doctors")
    public ResponseEntity<Doctor> add(@RequestBody Doctor doctor){
        addressRepos.save(doctor.getEmployee().getAddress());
        employeeRepos.save(doctor.getEmployee());
        doctor.getEducationDetails().forEach(educationDetail -> {
            docEducationRepos.save(educationDetail);
        });
        doctor.getExperienceDetails().forEach(experienceDetail -> {
            docExperienceRepos.save(experienceDetail);
        });
        return new ResponseEntity<>(doctorRepos.save(doctor), HttpStatus.OK);
    }

    @PutMapping("/doctors/{id}")
    public ResponseEntity<Doctor> update(@RequestBody Doctor doctor, @PathVariable Long id){
        Optional<Doctor> optional = doctorRepos.findById(id);
        return optional.map(model -> {
            addressRepos.save(doctor.getEmployee().getAddress());
            employeeRepos.save(doctor.getEmployee());
            List<DoctorEducationDetail> removeEdu = new ArrayList<>();
            doctor.getEducationDetails().forEach(educationDetail -> {
                docEducationRepos.save(educationDetail);
            });

            doctor.setEducationDetails(doctor.getEducationDetails().stream().filter(m -> !m.isRetired()).collect(Collectors.toList()));

            List<DoctorExperienceDetail> removeExp = new ArrayList<>();
            doctor.getExperienceDetails().forEach(experienceDetail -> {
                docExperienceRepos.save(experienceDetail);
            });

            doctor.setExperienceDetails(doctor.getExperienceDetails().stream().filter(m -> !m.isRetired()).collect(Collectors.toList()));

            doctor.setId(model.getId());
            return new ResponseEntity<>(doctorRepos.save(doctor), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/doctors/{id}")
    public ResponseEntity<Doctor> delete(@PathVariable Long id){
        Optional<Doctor> optional = doctorRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(doctorRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
