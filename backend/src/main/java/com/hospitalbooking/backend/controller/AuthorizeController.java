package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.constant.EmployeeRole;
import com.hospitalbooking.backend.constant.UserRole;
import com.hospitalbooking.backend.models.*;
import com.hospitalbooking.backend.repository.*;
import com.hospitalbooking.backend.security.RandomStringToken;
import com.hospitalbooking.backend.security.jwt.JwtUtils;
import com.hospitalbooking.backend.security.payload.request.LoginRequest;
import com.hospitalbooking.backend.security.payload.request.RegisterRequest;
import com.hospitalbooking.backend.security.payload.response.JwtResponse;
import com.hospitalbooking.backend.security.payload.response.MessageResponse;
import com.hospitalbooking.backend.security.services.EmailService;
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
import java.util.*;
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

    @Autowired
    private EmailService emailService;

    @PostMapping("/login")
    public ResponseEntity<?> authorize(@Valid @RequestBody LoginRequest loginRequest) {
        try{
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

            String avatar = "";

            if(roles.get(0).equals("ROLE_ADMIN")){
                headerName = optional.getEmployee().getLastName() + " " + optional.getEmployee().getFirstName();
                avatar = optional.getEmployee().getImageByteArr();
            }else if(roles.get(0).equals("ROLE_DOCTOR") || roles.get(0).equals("ROLE_RECEPTION")){
                headerName = optional.getEmployee().getLastName() + " " + optional.getEmployee().getFirstName();
                avatar = optional.getEmployee().getImageByteArr();
            }else if(roles.get(0).equals("ROLE_PATIENT")){
                headerName = optional.getPatient().getLastName() + " " + optional.getPatient().getFirstName();
                avatar = optional.getPatient().getImageByteArr();
            }else {
                return ResponseEntity.ok(new MessageResponse("Error authorize !", false));
            }

            return ResponseEntity.ok(new JwtResponse(jwt,
                    userDetails.getId(),
                    userDetails.getUsername(),
                    headerName,
                    avatar != null ? avatar :"" ,
                    roles));
        }catch(Exception e){
            return ResponseEntity.ok(new MessageResponse("Wrong username or password !", false));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        if (userRepos.existsByUsername(registerRequest.getUsername())) {
            return ResponseEntity.ok(new MessageResponse("Username is already in use!", false));
        }

        if (patientRepos.existsByEmail(registerRequest.getEmail()) || employeeRepos.existsByEmail(registerRequest.getEmail())) {
            return ResponseEntity.ok(new MessageResponse("Email is already in use!",false));
        }

        // Create new user's account
        Patient patient;

        User user = new User(registerRequest.getUsername(), encoder.encode(registerRequest.getPassword()), "");
        user.setRetired(false);

        String strRoles = registerRequest.getRole();
        if (strRoles == null) {
            return ResponseEntity.ok(new MessageResponse("Role is not found.",false));
        } else {
            user.setRole(UserRole.PATIENT);
            patient = new Patient();
            patient.setFirstName(registerRequest.getFirstName());
            patient.setLastName(registerRequest.getLastName());
            patient.setcId(registerRequest.getcId());
            patient.setEmail(registerRequest.getEmail());
            patient.setAddress(registerRequest.getAddress());
            patient.setPhoneNumber(registerRequest.getPhone());
            patient.setDateOfBirth(registerRequest.getDateOfBirth());
            patient.setGender(registerRequest.getGender());
            patient.setUser(user);
            patient.setCreatedAt(new Date());

            addressRepos.save(patient.getAddress());
            userRepos.save(patient.getUser());
            patientRepos.save(patient);

        }
        return ResponseEntity.ok(new MessageResponse("User registered successfully!", true));
    }

    @PostMapping("/forgetPassword")
    public ResponseEntity<?> forgetPassword (@Valid @RequestParam("email") String email,@RequestBody String body){
       System.out.print(employeeRepos.existsByEmail(email));
        if(employeeRepos.existsByEmail(email)){
             Employee employee = employeeRepos.getEmpByEmail(email);
             User  user = userRepos.getById(employee.getUser().getId());
            if(user.isRetired()){
                return ResponseEntity.ok().body(new MessageResponse("User has been deactivated!", false));
            }else {
                String token = new RandomStringToken().generateRandomString(10);
                user.setResetPassword(token);

                User result = userRepos.save(user);
                StringBuilder linkReset = new StringBuilder();
                linkReset.append("http://localhost:3000/resetPassword/");
                linkReset.append(result.getId());
                linkReset.append("/");
                linkReset.append(result.getResetPassword());

                Map<String, Object> emailMap = new HashMap<>();
//                emailMap.put("role", employee.getEmployeeRole());
//                emailMap.put("firstname", employee.getFirstName());
//                emailMap.put("lastname", employee.getLastName());
                emailMap.put("changePasswordlink", linkReset.toString());

                String templateHtml = emailService.templateResolve("forget_password", emailMap);
                emailService.sendSimpleMessage(email, null, "Forget Password", templateHtml);

                return ResponseEntity.ok(new MessageResponse("Successfully! Please check your email.", true));
            }
        }else {
            return ResponseEntity.ok().body(new MessageResponse("We don't have an user with this email!", false));
        }
    }
    @GetMapping("/getUserForget/{id}/{token}")
    public ResponseEntity<?> getUserForget (@PathVariable Long id, @PathVariable String token){
        if(userRepos.existsById(id)){
            if(userRepos.existsByResetPassword(token)){
                User user = userRepos.getByResetPassword(token);
                return ResponseEntity.ok().body(user);
            }else {
                return ResponseEntity.ok().body(new MessageResponse("Wrong! Please check email again.", false));
            }
        }else {
            return ResponseEntity.ok().body(new MessageResponse("Wrong! Please check email again.", false));
        }
    }

    @PostMapping("/changePasswordForget")
    public ResponseEntity<?> getUserForget (@Valid @RequestBody Object body){
        System.out.print(body);
        String password = ((LinkedHashMap) body).get("password").toString();
        String token = ((LinkedHashMap) body).get("token").toString();
        User newUser = userRepos.getByResetPassword(token);
        newUser.setResetPassword("");
        newUser.setPassword(encoder.encode(password));

        userRepos.save(newUser);

        return ResponseEntity.ok().body(new MessageResponse("Change Password success.", true));
    }
}
