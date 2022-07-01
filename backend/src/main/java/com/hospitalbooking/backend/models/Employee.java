package com.hospitalbooking.backend.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "[employee]")
public class Employee {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "cId", length = 30, columnDefinition = "nvarchar(30)")
    private String cId;

    @Column(name = "employee_role", length = 50, columnDefinition = "nvarchar(50)")
    private String employeeRole;

    @Column(name = "joining_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date joiningDate;

    @Column(name = "first_name", length = 250, columnDefinition = "nvarchar(250)")
    private String firstName;
    @Column(name = "last_name", length = 250, columnDefinition = "nvarchar(250)")
    private String lastName;
    @Column(name = "gender", length = 20, columnDefinition = "nvarchar(20)")
    private String gender;
    @Column(name = "birth_day")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateOfBirth;
    @Column(name = "email", length = 250, columnDefinition = "nvarchar(250)")
    private String email;
    @Column(name = "phone_number", length = 15, columnDefinition = "nvarchar(15)")
    private String phoneNumber;
    @Column(name = "status")
    private boolean status;

    @Column(name = "remaining_leave")
    private int remainingLeave;

    @OneToMany
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    @JsonIgnoreProperties("employee")
    private List<EmployeeLeave> leaves;

    @ManyToOne
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @Column(name = "retired")
    private boolean retired;

    public Employee() {
    }

    public Employee(Long id, String cId, String employeeRole, Date joiningDate, String firstName, String lastName, String gender, Date birthDay, String email, String phoneNumber, boolean status, int remainingLeave, List<EmployeeLeave> leaves, Address address, boolean retired) {
        Id = id;
        this.cId = cId;
        this.employeeRole = employeeRole;
        this.joiningDate = joiningDate;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = birthDay;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.status = status;
        this.remainingLeave = remainingLeave;
        this.leaves = leaves;
        this.address = address;
        this.retired = retired;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public String getEmployeeRole() {
        return employeeRole;
    }

    public void setEmployeeRole(String employeeRole) {
        this.employeeRole = employeeRole;
    }

    public Date getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(Date joiningDate) {
        this.joiningDate = joiningDate;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }

    public List<EmployeeLeave> getLeaves() {
        return leaves;
    }

    public void setLeaves(List<EmployeeLeave> leaves) {
        this.leaves = leaves;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
