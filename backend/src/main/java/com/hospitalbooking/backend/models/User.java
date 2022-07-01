package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

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

    @ManyToOne
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    private Doctor doctor;

    @Column(name = "retired")
    private boolean retired;

    public User() {
    }

    public User(Long id, String username, String password, String role, String resetPassword, boolean retired, Doctor doctor) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.resetPassword = resetPassword;
        this.retired = retired;
        this.doctor = doctor;
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

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }
}
