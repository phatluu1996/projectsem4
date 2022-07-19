package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.constant.UserRole;
import com.hospitalbooking.backend.models.Patient;
import com.hospitalbooking.backend.models.User;
import com.hospitalbooking.backend.repository.AddressRepos;
import com.hospitalbooking.backend.repository.PatientRepos;
import com.hospitalbooking.backend.repository.UserRepos;
import com.hospitalbooking.backend.specification.DBSpecification;
import com.hospitalbooking.backend.utils.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class PatientController {
    @Autowired
    private PatientRepos patientRepos;
    @Autowired
    private AddressRepos addressRepos;
    @Autowired
    private UserRepos userRepos;
    @Autowired
    private PasswordEncoder encoder;

    @GetMapping("/get-patient/{username}")
    public ResponseEntity<Patient> getByUserId(@PathVariable String username){
        User user = userRepos.getUserByUsername(username);
        if(!user.isRetired()){
            Patient patient = patientRepos.getPatientByUser(user);
            return new ResponseEntity<>(patient, HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/patients/{id}")
    public ResponseEntity<Patient> one(@PathVariable Long id){
        return patientRepos.findById(id).map(patient -> new ResponseEntity<>(patient, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/patients-user/{username}")
    public ResponseEntity<Patient> oneByUsername(@PathVariable String username){
        return userRepos.findByUsername(username).map(user -> new ResponseEntity<>(user.getPatient(), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/patients")
    public ResponseEntity<List<Patient>> all(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(patientRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping(value = "/patients")
    public ResponseEntity<Patient> add(@RequestBody Patient patient) throws IOException {
        if(patient.getImage() != null && !patient.getImage().isEmpty()){
            String fileName =patient.getFirstName()+patient.getLastName()+patient.getcId()+".png";
            String filePath = FileUploadUtil.UPLOAD_DIR + fileName;
            FileUploadUtil.saveFile(patient.getImage(),fileName);
            patient.setImageByteArr(patient.getImage());
            patient.setImage(filePath);
        }
        addressRepos.save(patient.getAddress());
        User user = patient.getUser();
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole(UserRole.PATIENT);
        User savedUser = userRepos.save(user);
        patient.setUser(savedUser);
        patient.setCreatedAt(new Date());
        return new ResponseEntity<>(patientRepos.save(patient), HttpStatus.OK);
    }

    @PutMapping("/patients/{id}")
    public ResponseEntity<Patient> update(@RequestBody Patient patient, @PathVariable Long id){
        Optional<Patient> patientById = patientRepos.findById(id);
        return patientById.map(model -> {
            patient.setId(model.getId());
            //img update
            if(patient.getImage() != null && !patient.getImage().isEmpty() && !patient.getImage().equals(model.getImage())){
                try {
                    String fileName =patient.getFirstName()+patient.getLastName()+patient.getcId()+".png";
                    String filePath = FileUploadUtil.UPLOAD_DIR + fileName;
                    FileUploadUtil.saveFile(patient.getImage(),fileName);
                    patient.setImageByteArr(patient.getImage());
                    patient.setImage(filePath);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
            //user update
            User user = patient.getUser();
            addressRepos.save(patient.getAddress());
            if(!user.getPassword().equals(model.getUser().getPassword())){
                user.setPassword(encoder.encode(user.getPassword()));
            }
            user.setRole(UserRole.PATIENT);
            User savedUser = userRepos.save(user);
            patient.setUser(savedUser);
            addressRepos.save(patient.getAddress());
            return new ResponseEntity<>(patientRepos.save(patient), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/patients/{id}")
    public ResponseEntity<Patient> delete(@PathVariable Long id){
        Optional<Patient> optional = patientRepos.findById(id);
        return optional.map(model -> {
            User user = model.getUser();
            user.setRetired(true);
            userRepos.save(user);
            model.setRetired(true);
            return new ResponseEntity<>(patientRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
