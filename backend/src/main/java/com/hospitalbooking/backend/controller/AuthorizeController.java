package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.models.User;
import com.hospitalbooking.backend.repository.UserRepos;
import com.hospitalbooking.backend.security.jwt.JwtUtils;
import com.hospitalbooking.backend.security.payload.request.LoginRequest;
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
import java.util.Optional;
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
    private PasswordEncoder encoder;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/authorize")
    public ResponseEntity<?> authorize(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
//        User user = userRepos.getById(userDetails.getId());

        Optional<User> optional = userRepos.findById(userDetails.getId());

        optional.map(model -> {
            String headerName = "";
            List<String> roles = userDetails.getAuthorities().stream()
                    .map(item -> item.getAuthority())
                    .collect(Collectors.toList());

            if(roles.get(0).equals("ROLE_ADMIN")){
                headerName = "Admin";
            }else if(roles.get(0).equals("ROLE_DOCTOR")){
                headerName = model.getEmployee().getFirstName() + " " + model.getEmployee().getLastName();
            }else {
                return ResponseEntity.ok(new MessageResponse("Error authorize !", false));
            }
            return ResponseEntity.ok(new JwtResponse(jwt,
                    userDetails.getId(),
                    userDetails.getUsername(),
                    headerName,
                    roles));
        });
        return ResponseEntity.ok(new MessageResponse("Error authorize !", false));
    }
}
