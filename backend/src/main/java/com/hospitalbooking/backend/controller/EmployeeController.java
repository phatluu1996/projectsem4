package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.constant.EmployeeRole;
import com.hospitalbooking.backend.models.Doctor;
import com.hospitalbooking.backend.models.Employee;
import com.hospitalbooking.backend.models.User;
import com.hospitalbooking.backend.repository.AddressRepos;
import com.hospitalbooking.backend.repository.DoctorRepos;
import com.hospitalbooking.backend.repository.EmployeeRepos;
import com.hospitalbooking.backend.repository.UserRepos;
import com.hospitalbooking.backend.security.payload.response.MessageResponse;
import com.hospitalbooking.backend.specification.DBSpecification;
import com.hospitalbooking.backend.utils.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeRepos employeeRepos;

    @Autowired
    private UserRepos userRepos;

    @Autowired
    private AddressRepos addressRepos;

    @Autowired
    private DoctorRepos doctorRepos;

    @Autowired
    private PasswordEncoder encoder;

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> one(@PathVariable Long id){
        return employeeRepos.findById(id).map(employee -> new ResponseEntity<>(employee, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/employees-user/{username}")
    public ResponseEntity<Employee> oneByUsername(@PathVariable String username){
        return userRepos.findByUsername(username).map(user -> new ResponseEntity<>(user.getEmployee(), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> allExceptDoctor(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE).and((root, cq, cb) -> cb.notEqual(root.get("employeeRole"), EmployeeRole.DOCTOR));
        return new ResponseEntity<>(employeeRepos.findAll(spec), HttpStatus.OK);
    }

    @GetMapping("/employees-admin")
    public ResponseEntity<List<Employee>> allForAdmin(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE).and((root, cq, cb) -> cb.notEqual(root.get("employeeRole"), EmployeeRole.ADMIN)).and((root, cq, cb) -> cb.notEqual(root.get("employeeRole"), EmployeeRole.DOCTOR));
        return new ResponseEntity<>(employeeRepos.findAll(spec), HttpStatus.OK);
    }

    @GetMapping("/employees-doctors")
    public ResponseEntity<List<Employee>> allIncludeDoctor(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(employeeRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping("/employees")
    public ResponseEntity add(@RequestBody Employee employee) throws IOException {
        if(employee.getImage() != null && !employee.getImage().isEmpty()){
            String fileName = employee.getFirstName()+employee.getLastName()+employee.getcId()+".png";
            String filePath = FileUploadUtil.UPLOAD_DIR + fileName;
            FileUploadUtil.saveFile(employee.getImage(),fileName);
            employee.setImageByteArr(employee.getImage());
            employee.setImage(filePath);
        }
        addressRepos.save(employee.getAddress());
        User user = employee.getUser();
        user.setPassword(encoder.encode(user.getPassword()));
        User savedUser = userRepos.save(user);
        employee.setUser(savedUser);
        employee.setJoiningDate(new Date());
        if (userRepos.existsByUsername(employee.getUser().getUsername()) && employee.getEmployeeRole() == EmployeeRole.RECEPTIONIST) {
            return ResponseEntity.ok(new MessageResponse("Username is already in use!", false));
        }

        if (employeeRepos.existsByEmail(employee.getEmail()) && employee.getEmployeeRole() == EmployeeRole.RECEPTIONIST) {
            return ResponseEntity.ok(new MessageResponse("Email is already in use!",false));
        }

        Employee savedEmployee = employeeRepos.save(employee);

        return ResponseEntity.ok(new MessageResponse("Done",true));
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> update(@RequestBody Employee employee, @PathVariable Long id){
        Optional<Employee> optional = employeeRepos.findById(id);
        return optional.map(model -> {
            if(employee.getImage() != null && !employee.getImage().isEmpty() && !employee.getImage().equals(model.getImage())){
                try {
                    String fileName = employee.getFirstName()+employee.getLastName()+employee.getcId()+".png";
                    String filePath = FileUploadUtil.UPLOAD_DIR + fileName;
                    FileUploadUtil.saveFile(employee.getImage(),fileName);
                    employee.setImageByteArr(employee.getImage());
                    employee.setImage(filePath);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            employee.setId(model.getId());
            addressRepos.save(employee.getAddress());
            User user = employee.getUser();
            if(!user.getPassword().equals(model.getUser().getPassword())){
                user.setPassword(encoder.encode(user.getPassword()));
            }
            User savedUser = userRepos.save(user);
            employee.setUser(savedUser);
            employee.setJoiningDate(new Date());
            employee.setCreatedAt(new Date());
            Employee savedEmployee = employeeRepos.save(employee);
            return new ResponseEntity<>(savedEmployee, HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Employee> delete(@PathVariable Long id){
        Optional<Employee> optional = employeeRepos.findById(id);
        return optional.map(model -> {
            if(model.getDoctor() != null){
                Doctor doctor = model.getDoctor();
                doctor.setRetired(true);
                doctorRepos.save(doctor);
            }
            User user = model.getUser();
            user.setRetired(true);
            userRepos.save(user);
            model.setRetired(true);
            return new ResponseEntity<>(employeeRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
