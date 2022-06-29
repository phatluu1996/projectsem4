package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.Patient;
import com.hospitalbooking.backend.repository.PatientRepos;
import com.hospitalbooking.backend.specification.DBSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class PatientController {
    @Autowired
    private PatientRepos patientRepos;

    @GetMapping("/patients/{id}")
    public ResponseEntity<Patient> one(@PathVariable Long id){
        return patientRepos.findById(id).map(patient -> new ResponseEntity<>(patient, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/patients")
    public ResponseEntity<List<Patient>> all(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(patientRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping("/patients")
    public ResponseEntity<Patient> add(@RequestBody Patient patient){
        return new ResponseEntity<>(patientRepos.save(patient), HttpStatus.OK);
    }

    @PutMapping("/patients/{id}")
    public ResponseEntity<Patient> update(@RequestBody Patient patient, @PathVariable Long id){
        Optional<Patient> optional = patientRepos.findById(id);
        return optional.map(model -> {
            patient.setId(model.getId());
            return new ResponseEntity<>(patientRepos.save(patient), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/patients/{id}")
    public ResponseEntity<Patient> delete(@PathVariable Long id){
        Optional<Patient> optional = patientRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(patientRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
