package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.constant.EmployeeRole;
import com.hospitalbooking.backend.constant.UserRole;
import com.hospitalbooking.backend.models.*;
import com.hospitalbooking.backend.repository.*;
import com.hospitalbooking.backend.specification.DBSpecification;
import com.hospitalbooking.backend.utils.FileUploadUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import javax.xml.ws.Response;
import java.io.IOException;
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
    private DoctorScheduleRepos doctorSchedule;
    @Autowired
    private UserRepos userRepos;
    @Autowired
    private EmployeeRepos employeeRepos;

    @Autowired
    private AddressRepos addressRepos;

    @Autowired
    private PasswordEncoder encoder;

    @GetMapping("/doctors/{id}")
    public ResponseEntity<Doctor> one(@PathVariable Long id){
        return doctorRepos.findById(id).map(doctor -> new ResponseEntity<>(doctor, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/doctors-user/{username}")
    public ResponseEntity<Doctor> oneByUsername(@PathVariable String username){
        return userRepos.findByUsername(username).map(user -> new ResponseEntity<>(user.getEmployee().getDoctor(), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/doctors")
    public ResponseEntity<List<Doctor>> all(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(doctorRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping("/doctors")
    public ResponseEntity<Doctor> add(@RequestBody Doctor doctor) throws IOException {
        if(doctor.getEmployee().getImage() != null && !doctor.getEmployee().getImage().isEmpty()){
            String fileName = doctor.getEmployee().getFirstName()+doctor.getEmployee().getLastName()+doctor.getEmployee().getcId()+".png";
            String filePath = FileUploadUtil.UPLOAD_DIR + fileName;
            FileUploadUtil.saveFile(doctor.getEmployee().getImage(),fileName);
            doctor.getEmployee().setImageByteArr(doctor.getEmployee().getImage());
            doctor.getEmployee().setImage(filePath);
        }
        addressRepos.save(doctor.getEmployee().getAddress());
        User user = doctor.getEmployee().getUser();
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole(UserRole.DOCTOR);
        User savedUser = userRepos.save(user);
        doctor.getEmployee().setUser(savedUser);
        Employee saveEmployee = employeeRepos.save(doctor.getEmployee());
        doctor.setEmployee(saveEmployee);
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
            if(doctor.getEmployee().getImage() != null && !doctor.getEmployee().getImage().isEmpty() && !doctor.getEmployee().getImage().equals(model.getEmployee().getImage())){
                try {
                    String fileName = doctor.getEmployee().getFirstName()+doctor.getEmployee().getLastName()+" - " +doctor.getEmployee().getcId()+".png";
                    String filePath = FileUploadUtil.UPLOAD_DIR + fileName;
                    FileUploadUtil.saveFile(doctor.getEmployee().getImage(),fileName);
                    doctor.getEmployee().setImageByteArr(doctor.getEmployee().getImage());
                    doctor.getEmployee().setImage(filePath);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            addressRepos.save(doctor.getEmployee().getAddress());
            User user = doctor.getEmployee().getUser();
            if(!user.getPassword().equals(model.getEmployee().getUser().getPassword())){
                user.setPassword(encoder.encode(user.getPassword()));
            }
            user.setRole(UserRole.DOCTOR);
            User savedUser = userRepos.save(user);
            doctor.getEmployee().setUser(savedUser);
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
            Employee employee = model.getEmployee();
            employee.setRetired(true);
            employeeRepos.save(employee);
            User user = model.getEmployee().getUser();
            user.setRetired(true);
            userRepos.save(user);
            model.setRetired(true);
            for (int i = 0; i < model.getDoctorSchedules().size(); i++) {
                DoctorSchedule schedule = model.getDoctorSchedules().get(i);
                schedule.setRetired(true);
                doctorSchedule.save(schedule);
            }
            return new ResponseEntity<>(doctorRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
