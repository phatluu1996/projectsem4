package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.EmployeeLeave;
import com.hospitalbooking.backend.repository.EmployeeLeaveRepos;
import com.hospitalbooking.backend.repository.EmployeeRepos;
import com.hospitalbooking.backend.specification.DBSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EmployeeLeaveController {
    @Autowired
    private EmployeeLeaveRepos employeeLeaveRepos;

    @GetMapping("/leaves/{id}")
    public ResponseEntity<EmployeeLeave> one(@PathVariable Long id){
        return employeeLeaveRepos.findById(id).map(employeeLeave -> new ResponseEntity<>(employeeLeave, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/leaves")
    public ResponseEntity<List<EmployeeLeave>> all(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(employeeLeaveRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping("/leaves")
    public ResponseEntity<EmployeeLeave> add(@RequestBody EmployeeLeave employeeLeave){
        return new ResponseEntity<>(employeeLeaveRepos.save(employeeLeave), HttpStatus.OK);
    }

    @PutMapping("/leaves/{id}")
    public ResponseEntity<EmployeeLeave> update(@RequestBody EmployeeLeave employeeLeave, @PathVariable Long id){
        Optional<EmployeeLeave> optional = employeeLeaveRepos.findById(id);
        return optional.map(model -> {
            employeeLeave.setId(model.getId());
            return new ResponseEntity<>(employeeLeaveRepos.save(employeeLeave), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/leaves/{id}")
    public ResponseEntity<EmployeeLeave> delete(@PathVariable Long id){
        Optional<EmployeeLeave> optional = employeeLeaveRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(employeeLeaveRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
