package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.*;
import com.hospitalbooking.backend.repository.*;
import com.hospitalbooking.backend.security.jwt.JwtUtils;
import com.hospitalbooking.backend.security.payload.request.LoginRequest;
import com.hospitalbooking.backend.security.payload.request.RegisterRequest;
import com.hospitalbooking.backend.security.payload.response.JwtResponse;
import com.hospitalbooking.backend.security.payload.response.MessageResponse;
import com.hospitalbooking.backend.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AuthorizeController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepos userRepos;

    @Autowired
    private PatientRepos patientRepos;

    @Autowired
    private EmployeeRepos employeeRepos;

    @Autowired
    private AddressRepos addressRepos;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authorize(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        User optional = userRepos.getById(userDetails.getId());

        String headerName = "";
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        if(roles.get(0).equals("ROLE_ADMIN")){
            headerName = "Admin";
        }else if(roles.get(0).equals("ROLE_DOCTOR")){
            headerName = optional.getEmployee().getFirstName() + " " + optional.getEmployee().getLastName();
        }else if(roles.get(0).equals("ROLE_USER")){
            headerName = optional.getPatient().getFirstName() + " " + optional.getPatient().getLastName();
        }else {
            return ResponseEntity.ok(new MessageResponse("Error authorize !", false));
        }

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                headerName,
                roles));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        if (userRepos.existsByUsername(registerRequest.getUsername())) {
            return ResponseEntity
                    .ok()
                    .body(new MessageResponse("Username is already in use!", false));
        }

        if (patientRepos.existsByEmail(registerRequest.getEmail()) || employeeRepos.existsByEmail(registerRequest.getEmail())) {
            return ResponseEntity
                    .ok()
                    .body(new MessageResponse("Email is already in use!",false));
        }

        // Create new user's account
        Patient patient;

        User user = new User(registerRequest.getUsername(),
            encoder.encode(registerRequest.getPassword())
        );
        user.setRetired(false);

        String strRoles = registerRequest.getRole();
        if (strRoles == null) {
            return ResponseEntity
                    .ok()
                    .body(new MessageResponse("Role is not found.",false));
        } else {
            user.setRole("USER");

            patient = new Patient();
            patient.setFirstName(registerRequest.getFirstName());
            patient.setLastName(registerRequest.getLastName());
            patient.setcId(registerRequest.getcId());
            patient.setEmail(registerRequest.getEmail());
            patient.setAddress(registerRequest.getAddress());
            patient.setPhoneNumber(registerRequest.getPhone());
            patient.setUser(user);

            addressRepos.save(patient.getAddress());
            userRepos.save(patient.getUser());
            patientRepos.save(patient);

        }

//        StringBuilder linkReset = new StringBuilder();
//        linkReset.append("http://localhost:3000/activateAccount?id=");
//        linkReset.append(user.getId());
//
//        Map<String, Object> emailMap = new HashMap<>();
//        emailMap.put("username", registerRequest.getUserFirstName()+" "+registerRequest.getUserLastName());
//        emailMap.put("changePasswordlink", linkReset.toString());

//        String templateHtml = emailService.templateResolve("confirm_account", emailMap);
//        emailService.sendSimpleMessage(signUpRequest.getEmail(), null, "Confirm account", templateHtml);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!", true));
    }
}
