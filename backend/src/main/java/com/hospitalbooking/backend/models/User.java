package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import static com.hospitalbooking.backend.constant.UserRole.*;

@Entity
@Table(name = "[user]")
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "username", length = 100, columnDefinition = "nvarchar(100)")
    private String username;
    @Column(name = "password", length = 100, columnDefinition = "nvarchar(100)")
    private String password;
    @Column(name = "role", length = 20)
    private String role;
    @Column(name = "reset_password", length = 255)
    private String resetPassword;

//    @ManyToOne
//    @JoinColumn(name = "employee_id", referencedColumnName = "id")
//    private Employee employee;

    @OneToOne(fetch = FetchType.EAGER, optional = false)
    @JsonIgnoreProperties("user")
    private Employee employee;

    @OneToOne(fetch = FetchType.EAGER, optional = false)
    @JsonIgnoreProperties("user")
    private Patient patient;

    @Column(name = "retired")
    private boolean retired;

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User(Long id, String username, String password, String role, String resetPassword, Employee employee, Patient patient, boolean retired) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.resetPassword = resetPassword;
        this.employee = employee;
        this.patient = patient;
        this.retired = retired;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getResetPassword() {
        return resetPassword;
    }

    public void setResetPassword(String resetPassword) {
        this.resetPassword = resetPassword;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Object getProfile(){
        return role == PATIENT ? patient : employee;
    }
}
