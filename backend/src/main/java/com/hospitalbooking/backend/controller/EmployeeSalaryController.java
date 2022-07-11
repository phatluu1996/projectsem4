package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.EmployeeSalary;
import com.hospitalbooking.backend.models.EmployeeSalary;
import com.hospitalbooking.backend.repository.EmployeeSalaryRepos;
import com.hospitalbooking.backend.specification.DBSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EmployeeSalaryController {
    @Autowired
    private EmployeeSalaryRepos employeeSalaryRepos;

    @GetMapping("/salaries/{id}")
    public ResponseEntity<EmployeeSalary> one(@PathVariable Long id){
        return employeeSalaryRepos.findById(id).map(employeeSalary -> new ResponseEntity<>(employeeSalary, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/salaries")
    public ResponseEntity<List<EmployeeSalary>> all(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(employeeSalaryRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping("/salaries")
    public ResponseEntity<EmployeeSalary> add(@RequestBody EmployeeSalary employeeSalary){
        employeeSalary.setCreateTime(new Date());
        return new ResponseEntity<>(employeeSalaryRepos.save(employeeSalary), HttpStatus.OK);
    }

    @PutMapping("/salaries/{id}")
    public ResponseEntity<EmployeeSalary> update(@RequestBody EmployeeSalary employeeSalary, @PathVariable Long id){
        Optional<EmployeeSalary> optional = employeeSalaryRepos.findById(id);
        return optional.map(model -> {
            employeeSalary.setId(model.getId());
            return new ResponseEntity<>(employeeSalaryRepos.save(employeeSalary), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/salaries/{id}")
    public ResponseEntity<EmployeeSalary> delete(@PathVariable Long id){
        Optional<EmployeeSalary> optional = employeeSalaryRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(employeeSalaryRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
