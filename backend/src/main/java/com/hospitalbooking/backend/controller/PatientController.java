package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.Patient;
import com.hospitalbooking.backend.models.User;
import com.hospitalbooking.backend.repository.AddressRepos;
import com.hospitalbooking.backend.repository.PatientRepos;
import com.hospitalbooking.backend.repository.UserRepos;
import com.hospitalbooking.backend.specification.DBSpecification;
import com.hospitalbooking.backend.utils.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    public ResponseEntity<Patient> add(@RequestBody Patient patient) {
        addressRepos.save(patient.getAddress());
        User user = patient.getUser();
        user.setPassword(encoder.encode(user.getPassword()));
        User savedUser = userRepos.save(user);
        patient.setUser(savedUser);
        return new ResponseEntity<>(patientRepos.save(patient), HttpStatus.OK);
    }
//=======
//    @PostMapping(value = "/patients",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public ResponseEntity<Patient> add(@RequestParam(name = "firstName",required = false) String firstName,@RequestParam(name = "image",required = false) MultipartFile multipartFile) throws IOException {
//        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
//        addressRepos.save(patient.getAddress());
//        User user = userRepos.save(patient.getUser());
//        patient.setUser(user);
//        patient.setImage(fileName);
//        patientRepos.save(patient);
//
//        String uploadDir = "user-photos/" + user.getId();
//        FileUploadUtil.saveFile(uploadDir,fileName,multipartFile);

//        return new ResponseEntity<>(HttpStatus.OK);
//>>>>>>> Stashed changes
//    }

    @PutMapping("/patients/{id}")
    public ResponseEntity<Patient> update(@RequestBody Patient patient, @PathVariable Long id){
        Optional<Patient> patientById = patientRepos.findById(id);
        return patientById.map(model -> {
            patient.setId(model.getId());
            userRepos.save(model.getUser());
            addressRepos.save(patient.getAddress());
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
