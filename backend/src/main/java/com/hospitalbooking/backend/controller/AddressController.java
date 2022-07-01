package com.hospitalbooking.backend.controller;


import com.hospitalbooking.backend.models.Address;
import com.hospitalbooking.backend.repository.AddressRepos;
import com.hospitalbooking.backend.specification.DBSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AddressController {
    @Autowired
    private AddressRepos addressRepos;

    @GetMapping("/address")
    public ResponseEntity<List<Address>> all(){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(addressRepos.findAll(spec), HttpStatus.OK);
    }

    @GetMapping("/address/{id}")
    public ResponseEntity <Address> one(@PathVariable Long id){
        return addressRepos.findById(id).map(address -> new ResponseEntity<>(address, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/address")
    public ResponseEntity<Address> add(@RequestBody Address address){
        return new ResponseEntity<>(addressRepos.save(address), HttpStatus.OK);
    }
}
