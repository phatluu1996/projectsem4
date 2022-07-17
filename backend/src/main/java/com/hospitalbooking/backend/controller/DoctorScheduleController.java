package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.constant.AppointmentStatus;
import com.hospitalbooking.backend.models.Appointment;
import com.hospitalbooking.backend.models.Doctor;
import com.hospitalbooking.backend.models.DoctorSchedule;
import com.hospitalbooking.backend.repository.AppointmentRepos;
import com.hospitalbooking.backend.repository.DoctorScheduleRepos;
import com.hospitalbooking.backend.repository.UserRepos;
import com.hospitalbooking.backend.specification.DBSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DoctorScheduleController {
    @Autowired
    DoctorScheduleRepos doctorScheduleRepos;

    @Autowired
    UserRepos userRepos;

    @Autowired
    AppointmentRepos appointmentRepos;

    @GetMapping("/schedules/{id}")
    public ResponseEntity<DoctorSchedule> one(@PathVariable Long id){
        return doctorScheduleRepos.findById(id).map(doctorSchedule -> new ResponseEntity<>(doctorSchedule, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/schedules")
    public ResponseEntity<List<DoctorSchedule>> all(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(doctorScheduleRepos.findAll(spec), HttpStatus.OK);
    }

    @GetMapping("/schedules-doctor/{username}")
    public ResponseEntity<List<DoctorSchedule>> allByDoctorUsername(@PathVariable String username){
        return userRepos.findByUsername(username).map(user ->
            new ResponseEntity<>(user.getEmployee().getDoctor().getDoctorSchedules(false), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
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
            DoctorSchedule saveSchedule = doctorScheduleRepos.save(doctorSchedule);
            Doctor doctor = saveSchedule.getDoctor();
            List<Appointment> appointments = doctor.getAppointments(false);
            appointments.forEach(appointment -> {
                if(appointment.getDateEnd().after(new Date()) && appointment.getDate().after(new Date()) && (appointment.getStatus().equals(AppointmentStatus.PENDING) || appointment.getStatus().equals(AppointmentStatus.APPROVED))){ //Filter incoming appointment
                    if(doctor.getDoctorSchedules().stream().noneMatch(schedule -> schedule.getAvailableDays().contains( String.valueOf(appointment.getDate().getDay())))){ //Check if schedule was change available days
                        if(appointment.getStatus().equals(AppointmentStatus.PENDING)){
                            appointment.setStatus(AppointmentStatus.REJECTED);
                        }else{
                            appointment.setStatus(AppointmentStatus.CANCELED);
                        }
                        appointment.setMessage("Rejected due to doctor 's schedules changing");
                        appointmentRepos.save(appointment);
                    }else{
                        List<DoctorSchedule> getMatchSchedule = doctor.getDoctorSchedules().stream().filter(schedule -> schedule.getAvailableDays().contains( String.valueOf(appointment.getDate().getDay()))).collect(Collectors.toList()); //Get all schedule that
                        if(getMatchSchedule.stream().noneMatch(schedule ->{
                            String scheStartHour = schedule.getStart().split("T")[1].split(":")[0];
                            String scheStartMinute = schedule.getStart().split("T")[1].split(":")[1];
                            String scheEndHour = schedule.getEnd().split("T")[1].split(":")[0];
                            String scheEndMinute = schedule.getEnd().split("T")[1].split(":")[1];
                            String appStartHour = String.valueOf(appointment.getDate().getHours());
                            String appStartMinute = String.valueOf(appointment.getDate().getHours());
                            String appEndHour = String.valueOf(appointment.getDateEnd().getHours());
                            String appEndMinute = String.valueOf(appointment.getDateEnd().getHours());

                            Date scheStartDate = new Date();
                            scheStartDate.setHours(Integer.parseInt(scheStartHour));
                            scheStartDate.setHours(Integer.parseInt(scheStartMinute));
                            Date scheEndDate = new Date();
                            scheStartDate.setHours(Integer.parseInt(scheEndHour));
                            scheStartDate.setHours(Integer.parseInt(scheEndMinute));

                            Date appStartDate = new Date();
                            scheStartDate.setHours(Integer.parseInt(appStartHour));
                            scheStartDate.setHours(Integer.parseInt(appStartMinute));
                            Date appEndDate = new Date();
                            scheStartDate.setHours(Integer.parseInt(appEndHour));
                            scheStartDate.setHours(Integer.parseInt(appEndMinute));

                            return (appStartDate.after(scheStartDate) || appStartDate.equals(scheStartDate))
                            || (appEndDate.before(scheEndDate) || appEndDate.equals(scheEndDate)) ;
                        })){
                            if(appointment.getStatus().equals(AppointmentStatus.PENDING)){
                                appointment.setStatus(AppointmentStatus.REJECTED);
                            }else{
                                appointment.setStatus(AppointmentStatus.CANCELED);
                            }
                            appointment.setMessage("Rejected due to doctor 's schedules changing");
                            appointmentRepos.save(appointment);
                        }
                    }
                }
            });

            return new ResponseEntity<>(saveSchedule, HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/schedules/{id}")
    public ResponseEntity<DoctorSchedule> delete(@PathVariable Long id){
        Optional<DoctorSchedule> optional = doctorScheduleRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(doctorScheduleRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
