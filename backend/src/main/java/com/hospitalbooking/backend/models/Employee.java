package com.hospitalbooking.backend.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
    private Date joiningDate;

    @Column(name = "first_name", length = 250, columnDefinition = "nvarchar(250)")
    private String firstName;
    @Column(name = "last_name", length = 250, columnDefinition = "nvarchar(250)")
    private String lastName;
    @Column(name = "gender", length = 20, columnDefinition = "nvarchar(20)")
    private String gender;
    @Column(name = "birth_day", length = 20, columnDefinition = "nvarchar(20)")
    private Date birthDay;
    @Column(name = "email", length = 250, columnDefinition = "nvarchar(250)")
    private String email;
    @Column(name = "phone_number", length = 15, columnDefinition = "nvarchar(15)")
    private String phoneNumber;
    @Column(name = "status")
    private boolean status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinTable(name = "employee_doctor",
            joinColumns =
                    { @JoinColumn(name = "employee_id", referencedColumnName = "id") },
            inverseJoinColumns =
                    { @JoinColumn(name = "doctor_id", referencedColumnName = "id") })
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "department_id", referencedColumnName = "id")
    private Department department;

    @Column(name = "remaining_leave")
    private int remainingLeave;

    @OneToMany
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    @JsonIgnoreProperties("employee")
    private List<EmployeeLeave> leaves;

    @Column(name = "retired")
    private boolean retired;

    public Employee() {
    }

    public Employee(Long id, String cId, String employeeRole, Date joiningDate, String firstName, String lastName, String gender, Date birthDay, String email, String phoneNumber, boolean status, Doctor doctor, Department department, int remainingLeave, boolean retired) {
        Id = id;
        this.cId = cId;
        this.employeeRole = employeeRole;
        this.joiningDate = joiningDate;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDay = birthDay;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.status = status;
        this.doctor = doctor;
        this.department = department;
        this.remainingLeave = remainingLeave;
        this.retired = retired;
    }


    public Employee(Long id, String cId, String employeeRole, Date joiningDate, String firstName, String lastName, String gender, Date birthDay, String email, String phoneNumber, boolean status, Department department, int remainingLeave, boolean retired) {
        Id = id;
        this.cId = cId;
        this.employeeRole = employeeRole;
        this.joiningDate = joiningDate;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDay = birthDay;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.status = status;
        this.department = department;
        this.remainingLeave = remainingLeave;
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

    public Date getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(Date birthDay) {
        this.birthDay = birthDay;
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

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
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
}
