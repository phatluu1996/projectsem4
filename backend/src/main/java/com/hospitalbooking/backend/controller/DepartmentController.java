package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.Department;
import com.hospitalbooking.backend.repository.DepartmentRepos;
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
public class DepartmentController {

    @Autowired
    private DepartmentRepos departmentRepos;

    @GetMapping("/departments/{id}")
    public ResponseEntity<Department> one(@PathVariable Long id){
        return departmentRepos.findById(id).map(department -> new ResponseEntity<>(department, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/departments")
    public ResponseEntity<List<Department>> all(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(departmentRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping("/departments")
    public ResponseEntity<Department> add(@RequestBody Department department){
        return new ResponseEntity<>(departmentRepos.save(department), HttpStatus.OK);
    }

    @PutMapping("/departments/{id}")
    public ResponseEntity<Department> update(@RequestBody Department department, @PathVariable Long id){
        Optional<Department> optional = departmentRepos.findById(id);
        return optional.map(model -> {
            department.setId(model.getId());
            return new ResponseEntity<>(departmentRepos.save(department), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/departments/{id}")
    public ResponseEntity<Department> delete(@PathVariable Long id){
        Optional<Department> optional = departmentRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(departmentRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
