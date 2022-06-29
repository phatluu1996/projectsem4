package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.User;
import com.hospitalbooking.backend.repository.EmployeeRepos;
import com.hospitalbooking.backend.repository.PatientRepos;
import com.hospitalbooking.backend.repository.UserRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserRepos userRepos;

    @GetMapping("/users/{id}")
    public ResponseEntity<User> one(@PathVariable Long id){
        return userRepos.findById(id).map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> all(){
        return new ResponseEntity<>(userRepos.findAll(), HttpStatus.OK);
    }

    @PostMapping("/users")
    public ResponseEntity<User> add(@RequestBody User user){
        return new ResponseEntity<>(userRepos.save(user), HttpStatus.OK);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> update(@RequestBody User user, @PathVariable Long id){
        Optional<User> optional = userRepos.findById(id);
        return optional.map(model -> {
            user.setId(model.getId());
            return new ResponseEntity<>(userRepos.save(user), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<User> delete(@PathVariable Long id){
        Optional<User> optional = userRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(userRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
