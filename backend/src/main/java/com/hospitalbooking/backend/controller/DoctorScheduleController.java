package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.DoctorSchedule;
import com.hospitalbooking.backend.repository.DoctorScheduleRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DoctorScheduleController {
    @Autowired
    DoctorScheduleRepos doctorScheduleRepos;

    @GetMapping("/schedules/{id}")
    public ResponseEntity<DoctorSchedule> one(@PathVariable Long id){
        return doctorScheduleRepos.findById(id).map(doctorSchedule -> new ResponseEntity<>(doctorSchedule, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/schedules")
    public ResponseEntity<List<DoctorSchedule>> all(){
        return new ResponseEntity<>(doctorScheduleRepos.findAll(), HttpStatus.OK);
    }

    @PostMapping("/schedules")
    public ResponseEntity<DoctorSchedule> add(@RequestBody DoctorSchedule doctorSchedule){
        return new ResponseEntity<>(doctorScheduleRepos.save(doctorSchedule), HttpStatus.OK);
    }

    @PutMapping("/schedules/{id}")
    public ResponseEntity<DoctorSchedule> update(@RequestBody DoctorSchedule doctorSchedule, @PathVariable Long id){
        Optional<DoctorSchedule> optional = doctorScheduleRepos.findById(id);
        return optional.map(model -> {
            doctorSchedule.setId(model.getId());
            return new ResponseEntity<>(doctorScheduleRepos.save(doctorSchedule), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/schedules/{id}")
    public ResponseEntity<DoctorSchedule> delete(@PathVariable Long id){
        Optional<DoctorSchedule> optional = doctorScheduleRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(model, HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
