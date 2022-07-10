package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.constant.EmployeeRole;
import com.hospitalbooking.backend.models.Employee;
import com.hospitalbooking.backend.models.User;
import com.hospitalbooking.backend.repository.AddressRepos;
import com.hospitalbooking.backend.repository.EmployeeRepos;
import com.hospitalbooking.backend.repository.UserRepos;
import com.hospitalbooking.backend.specification.DBSpecification;
import com.hospitalbooking.backend.utils.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

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
    private PasswordEncoder encoder;

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> one(@PathVariable Long id){
        return employeeRepos.findById(id).map(employee -> new ResponseEntity<>(employee, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> allExceptDoctor(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE).and((root, cq, cb) -> cb.notEqual(root.get("employeeRole"), EmployeeRole.DOCTOR));
        return new ResponseEntity<>(employeeRepos.findAll(spec), HttpStatus.OK);
    }

    @GetMapping("/employees-doctors")
    public ResponseEntity<List<Employee>> all(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(employeeRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping("/employees")
    public ResponseEntity<Employee> add(@RequestBody Employee employee) throws IOException {
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
        Employee savedEmployee = employeeRepos.save(employee);
        return new ResponseEntity<>(savedEmployee, HttpStatus.OK);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> update(@RequestBody Employee employee, @PathVariable Long id){
        Optional<Employee> optional = employeeRepos.findById(id);
        return optional.map(model -> {
            if(employee.getImage() != null && !employee.getImage().isEmpty()){
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
            user.setPassword(encoder.encode(user.getPassword()));
            User savedUser = userRepos.save(user);
            employee.setUser(savedUser);
            Employee savedEmployee = employeeRepos.save(employee);
            return new ResponseEntity<>(savedEmployee, HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Employee> delete(@PathVariable Long id){
        Optional<Employee> optional = employeeRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(employeeRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
