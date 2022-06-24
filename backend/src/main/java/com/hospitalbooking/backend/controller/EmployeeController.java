package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.Employee;
import com.hospitalbooking.backend.repository.EmployeeRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeRepos employeeRepos;

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> one(@PathVariable Long id){
        return employeeRepos.findById(id).map(employee -> new ResponseEntity<>(employee, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> all(){
        return new ResponseEntity<>(employeeRepos.findAll(), HttpStatus.OK);
    }

    @PostMapping("/employees")
    public ResponseEntity<Employee> add(@RequestBody Employee employee){
        return new ResponseEntity<>(employeeRepos.save(employee), HttpStatus.OK);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> update(@RequestBody Employee employee, @PathVariable Long id){
        Optional<Employee> optional = employeeRepos.findById(id);
        return optional.map(model -> {
            employee.setId(model.getId());
            return new ResponseEntity<>(employeeRepos.save(employee), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Employee> delete(@PathVariable Long id){
        Optional<Employee> optional = employeeRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(model, HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
