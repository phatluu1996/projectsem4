package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.Appointment;
import com.hospitalbooking.backend.repository.AppointmentRepos;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/appointments/{id}")
    public ResponseEntity<Appointment> one(@PathVariable Long id){
        return appointmentRepos.findById(id).map(appointment -> new ResponseEntity<>(appointment, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/appointments")
    public ResponseEntity<List<Appointment>> all(){
        return new ResponseEntity<>(appointmentRepos.findAll(), HttpStatus.OK);
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
            return new ResponseEntity<>(appointmentRepos.save(appointment), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/appointments/{id}")
    public ResponseEntity<Appointment> delete(@PathVariable Long id){
        Optional<Appointment> optional = appointmentRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(model, HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
