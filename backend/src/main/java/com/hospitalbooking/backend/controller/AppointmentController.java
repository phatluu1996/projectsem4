package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.constant.AppointmentStatus;
import com.hospitalbooking.backend.models.Appointment;
import com.hospitalbooking.backend.models.Patient;
import com.hospitalbooking.backend.repository.AppointmentRepos;
import com.hospitalbooking.backend.repository.PatientRepos;
import com.hospitalbooking.backend.repository.UserRepos;
import com.hospitalbooking.backend.security.payload.response.MessageResponse;
import com.hospitalbooking.backend.specification.DBSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
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

    @Autowired
    private UserRepos userRepos;

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

    @GetMapping("/appointments-doctor/{username}")
    public ResponseEntity<List<Appointment>> allByDoctor(@PathVariable String username){
        return userRepos.findByUsername(username).map(user ->
                        new ResponseEntity<>(user.getEmployee().getDoctor().getAppointments(false), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/appointments-patient/{username}")
    public ResponseEntity<List<Appointment>> allByPatient(@PathVariable String username){
        return userRepos.findByUsername(username).map(user ->
                        new ResponseEntity<>(user.getPatient().getAppointments(false), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/appointments/cancel/{id}")
    public ResponseEntity<Appointment> cancelByDoctor(@PathVariable Long id) {
        Optional<Appointment> optional = appointmentRepos.findById(id);
        return optional.map(model -> {
            model.setStatus(AppointmentStatus.CANCELED);
            return new ResponseEntity<>(appointmentRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @GetMapping("/appointments-pending")
    public ResponseEntity<List<Appointment>> allPending(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE).and((root, cq, cb) -> cb.equal(root.get("status"), AppointmentStatus.PENDING));
        return new ResponseEntity<List<Appointment>>(appointmentRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping("/appointments")
    public ResponseEntity add(@RequestBody Appointment appointment){
        //find if exist any appointment that have the same date and time
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE)
                .and((root, cq, cb) -> cb.equal(root.join("doctor").get("id"), appointment.getDoctor().getId()))
                .and((root, cq, cb) -> cb.notEqual(root.get("status"), AppointmentStatus.REJECTED))
                .and((root, cq, cb) -> cb.notEqual(root.get("status"), AppointmentStatus.CANCELED));
        List<Appointment> duplicateList = appointmentRepos.findAll(spec);
        if(duplicateList.size() > 0 && duplicateList.stream().anyMatch(app -> {
            Timestamp start = new Timestamp(app.getDate().getTime());
            Timestamp end = new Timestamp(app.getDateEnd().getTime());
            Timestamp startApp = new Timestamp(appointment.getDate().getTime());
            Timestamp endApp = new Timestamp(appointment.getDateEnd().getTime());
            start.setNanos(0);
            end.setNanos(0);
            startApp.setNanos(0);
            endApp.setNanos(0);
            return start.toInstant().equals(startApp.toInstant())
                    && end.toInstant().equals(endApp.toInstant());
        })){
            return new ResponseEntity(new MessageResponse("Fail !", false), HttpStatus.OK);
        }else{
            appointmentRepos.save(appointment);
            return new ResponseEntity(new MessageResponse("Done !", true), HttpStatus.OK);
        }
    }

    @PutMapping("/appointments/{id}")
    public ResponseEntity update(@RequestBody Appointment appointment, @PathVariable Long id){
        //find if exist any appointment that have the same date and time
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE)
                .and((root, cq, cb) -> cb.equal(root.join("doctor").get("id"), appointment.getDoctor().getId()))
                .and((root, cq, cb) -> cb.notEqual(root.get("status"), AppointmentStatus.REJECTED))
                .and((root, cq, cb) -> cb.notEqual(root.get("status"), AppointmentStatus.CANCELED));
        List<Appointment> duplicateList = appointmentRepos.findAll(spec);
        if(duplicateList.size() > 0 && duplicateList.stream().anyMatch(app -> {
            Timestamp start = new Timestamp(app.getDate().getTime());
            Timestamp end = new Timestamp(app.getDateEnd().getTime());
            Timestamp startApp = new Timestamp(appointment.getDate().getTime());
            Timestamp endApp = new Timestamp(appointment.getDateEnd().getTime());
            start.setNanos(0);
            end.setNanos(0);
            startApp.setNanos(0);
            endApp.setNanos(0);
            return app.getId() != appointment.getId()
                    && start.toInstant().equals(startApp.toInstant())
                    && end.toInstant().equals(endApp.toInstant());
        })){
            return new ResponseEntity(new MessageResponse("Fail !", false), HttpStatus.OK);
        }else{
            Optional<Appointment> optional = appointmentRepos.findById(id);
            return optional.map(model -> {
                appointment.setId(model.getId());
                Patient patient = appointment.getPatient();
                patientRepos.findById(patient.getId()).map(pat -> {
                    pat.setEmail(patient.getEmail());
                    pat.setPhoneNumber(patient.getPhoneNumber());
                    return patientRepos.save(pat);
                });
                appointmentRepos.save(appointment);
                return new ResponseEntity(new MessageResponse("Done !", true), HttpStatus.OK);
            }).orElseGet(() -> new ResponseEntity(new MessageResponse("Fail !", false), HttpStatus.OK));
        }
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
