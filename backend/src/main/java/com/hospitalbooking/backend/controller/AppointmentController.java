package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.Appointment;
import com.hospitalbooking.backend.models.Doctor;
import com.hospitalbooking.backend.models.Patient;
import com.hospitalbooking.backend.repository.AppointmentRepos;
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
public class AppointmentController {
    
    @Autowired
    private AppointmentRepos appointmentRepos;

    @Autowired
    private PatientRepos patientRepos;

    @GetMapping("/appointments/{id}")
    public ResponseEntity<Appointment> one(@PathVariable Long id){
        return appointmentRepos.findById(id).map(appointment -> new ResponseEntity<>(appointment, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/appointments")
    public ResponseEntity<List<Appointment>> all(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<List<Appointment>>(appointmentRepos.findAll(spec), HttpStatus.OK);
    }

    @GetMapping("/appointments-doctor/{id}")
    public ResponseEntity<List<Appointment>> allByDoctor(@PathVariable Long id){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE).and((root, cq, cb) -> cb.equal(root.get("doctor").get("id"), id));
        return new ResponseEntity<List<Appointment>>(appointmentRepos.findAll(spec), HttpStatus.OK);
    }

    @GetMapping("/appointments-patient/{id}")
    public ResponseEntity<List<Appointment>> allByPatient(@PathVariable Long id){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE).and((root, cq, cb) -> cb.equal(root.join("patient").get("id"), id));;
        return new ResponseEntity<List<Appointment>>(appointmentRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping("/appointments")
    public ResponseEntity<Appointment> add(@RequestBody Appointment appointment){

        return new ResponseEntity<>(appointmentRepos.save(appointment), HttpStatus.OK);
    }

    @PutMapping("/appointments/{id}")
    public ResponseEntity<Appointment> update(@RequestBody Appointment appointment, @PathVariable Long id){
        Optional<Appointment> optional = appointmentRepos.findById(id);
        return optional.map(model -> {
            appointment.setId(model.getId());
            Patient patient = appointment.getPatient();
            patientRepos.findById(patient.getId()).map(pat -> {
                pat.setEmail(patient.getEmail());
                pat.setPhoneNumber(patient.getPhoneNumber());
                return patientRepos.save(pat);
            });
            return new ResponseEntity<>(appointmentRepos.save(appointment), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/appointments/{id}")
    public ResponseEntity<Appointment> delete(@PathVariable Long id){
        Optional<Appointment> optional = appointmentRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(appointmentRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
