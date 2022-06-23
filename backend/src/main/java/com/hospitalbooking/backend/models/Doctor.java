package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "[doctor]")
public class Doctor {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name", length = 250, columnDefinition = "nvarchar(250)")
    private String firstName;
    @Column(name = "last_name", length = 250, columnDefinition = "nvarchar(250)")
    private String lastName;
    @Column(name = "gender", length = 20)
    private String gender;
    @Column(name = "birth_day", length = 20)
    private Date birthDay;
    @Column(name = "email", length = 255)
    private String email;
    @Column(name = "phone_number", length = 15)
    private String phoneNumber;
    @Column(name = "short_biography", columnDefinition = "text")
    private String shortBiography;
    @Column(name = "status")
    private boolean status;

    @OneToOne(mappedBy = "doctor")
    private User user;

    @OneToOne(mappedBy = "doctor")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;
    @OneToMany
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties("doctor")
    private List<DoctorSchedule> doctorSchedules;
    @OneToMany
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties("doctor")
    private List<Appointment> appointments;
    @OneToMany
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties("doctor")
    private List<DoctorEducationDetail> educationDetails;
    @OneToMany
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties("doctor")
    private List<DoctorExperienceDetail> experienceDetails;
    @Column(name = "retired")
    private boolean retired;

    public Doctor() {
    }

    public Doctor(Long id, String firstName, String lastName, String gender, Date birthDay, String email, String phoneNumber, String shortBiography, boolean status, Employee employee, User user, Address address, List<DoctorSchedule> doctorSchedules, List<Appointment> appointments, List<DoctorEducationDetail> educationDetails, List<DoctorExperienceDetail> experienceDetails, boolean retired) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDay = birthDay;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.shortBiography = shortBiography;
        this.status = status;
        this.employee = employee;
        this.user = user;
        this.address = address;
        this.doctorSchedules = doctorSchedules;
        this.appointments = appointments;
        this.educationDetails = educationDetails;
        this.experienceDetails = experienceDetails;
        this.retired = retired;
    }

    public Doctor(Long id, String firstName, String lastName, String gender, Date birthDay, String email, String phoneNumber, String shortBiography, boolean status, Employee employee, User user, Address address, List<DoctorEducationDetail> educationDetails, List<DoctorExperienceDetail> experienceDetails, boolean retired) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDay = birthDay;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.shortBiography = shortBiography;
        this.status = status;
        this.employee = employee;
        this.user = user;
        this.address = address;
        this.educationDetails = educationDetails;
        this.experienceDetails = experienceDetails;
        this.retired = retired;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getShortBiography() {
        return shortBiography;
    }

    public void setShortBiography(String shortBiography) {
        this.shortBiography = shortBiography;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public List<DoctorSchedule> getDoctorSchedules() {
        return doctorSchedules;
    }

    public void setDoctorSchedules(List<DoctorSchedule> doctorSchedules) {
        this.doctorSchedules = doctorSchedules;
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
        this.appointments = appointments;
    }

    public List<DoctorEducationDetail> getEducationDetails() {
        return educationDetails;
    }

    public void setEducationDetails(List<DoctorEducationDetail> educationDetails) {
        this.educationDetails = educationDetails;
    }

    public List<DoctorExperienceDetail> getExperienceDetails() {
        return experienceDetails;
    }

    public void setExperienceDetails(List<DoctorExperienceDetail> experienceDetails) {
        this.experienceDetails = experienceDetails;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }
}
