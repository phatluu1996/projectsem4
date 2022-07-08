package com.hospitalbooking.backend.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "[employee]")
public class Employee  extends UserProfile{
    @Column(name = "employee_role", length = 50, columnDefinition = "nvarchar(50)")
    private String employeeRole;
    @Column(name = "status")
    private boolean status;
    @Column(name = "remaining_leave")
    private int remainingLeave;
    @Column(name = "joining_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date joiningDate;

    @OneToOne(cascade =  CascadeType.ALL,
            mappedBy = "employee")
    @JoinColumn(name = "doctor_id", nullable = true)
    @JsonIgnoreProperties({"employee", "appointments"})
    private Doctor doctor;

    @OneToOne
    @JsonIgnoreProperties(value = {"employee", "patient"}, allowSetters = true)
    private User user;

    @OneToMany
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"employee","user"})
    private List<EmployeeLeave> leaves;

    public Employee() {
        super();
    }

    public Employee(String employeeRole, boolean status, int remainingLeave, Date joiningDate, List<EmployeeLeave> leaves) {
        this.employeeRole = employeeRole;
        this.status = status;
        this.remainingLeave = remainingLeave;
        this.joiningDate = joiningDate;
        this.leaves = leaves;
    }

    public Employee(Long id, String cId, String firstName, String lastName, String gender, Date dateOfBirth, String email, String phoneNumber, String image, Address address, boolean retired, String employeeRole, boolean status, int remainingLeave, Date joiningDate, List<EmployeeLeave> leaves) {
        super(id, cId, firstName, lastName, gender, dateOfBirth, email, phoneNumber,image, address, retired);
        this.employeeRole = employeeRole;
        this.status = status;
        this.remainingLeave = remainingLeave;
        this.joiningDate = joiningDate;
        this.leaves = leaves;
    }

    public String getEmployeeRole() {
        return employeeRole;
    }

    public void setEmployeeRole(String employeeRole) {
        this.employeeRole = employeeRole;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public int getRemainingLeave() {
        return remainingLeave;
    }

    public void setRemainingLeave(int remainingLeave) {
        this.remainingLeave = remainingLeave;
    }

    public Date getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(Date joiningDate) {
        this.joiningDate = joiningDate;
    }

    public List<EmployeeLeave> getLeaves() {
        return leaves;
    }

    public void setLeaves(List<EmployeeLeave> leaves) {
        this.leaves = leaves;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
