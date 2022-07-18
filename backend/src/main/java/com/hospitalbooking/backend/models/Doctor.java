package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Table(name = "[doctor]")
public class Doctor{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "short_biography", columnDefinition = "text")
    private String shortBiography;

    @ManyToOne
    @JoinColumn(name = "department_id", referencedColumnName = "id")
    private Department department;

    @OneToOne
    @JsonIgnoreProperties(value = "doctor", allowSetters = true)
    private Employee employee;

    @OneToMany
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties(value = {"doctor", "employee"}, allowSetters = true)
    private List<DoctorSchedule> doctorSchedules;
    @OneToMany
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties(value = {"doctor", "employee"}, allowSetters = true)
    private List<Appointment> appointments;
    @OneToMany
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties(value = {"doctor", "employee"},allowSetters = true)
    private List<DoctorEducationDetail> educationDetails;
    @OneToMany
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties(value = "doctor", allowSetters = true)
    private List<DoctorExperienceDetail> experienceDetails;
    @Column(name = "retired")
    private boolean retired;

    public Doctor() {
    }

    public Doctor(Long id, String shortBiography, Department department, Employee employee, List<DoctorSchedule> doctorSchedules, List<Appointment> appointments, List<DoctorEducationDetail> educationDetails, List<DoctorExperienceDetail> experienceDetails, boolean retired) {
        this.id = id;
        this.shortBiography = shortBiography;
        this.department = department;
        this.employee = employee;
        this.doctorSchedules = doctorSchedules;
        this.appointments = appointments;
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

    public String getShortBiography() {
        return shortBiography;
    }

    public void setShortBiography(String shortBiography) {
        this.shortBiography = shortBiography;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public List<DoctorSchedule> getDoctorSchedules() {
        return doctorSchedules.stream().filter(m -> !m.isRetired()).collect(Collectors.toList());
    }


    public void setDoctorSchedules(List<DoctorSchedule> doctorSchedules) {
        this.doctorSchedules = doctorSchedules;
    }

    public List<Appointment> getAppointments() {
        return appointments.stream().filter(m -> !m.isRetired()).collect(Collectors.toList());
    }

    public List<Appointment> getAppointments(boolean includeRetired) {
        if(includeRetired){
            return appointments;
        }
        return appointments.stream().filter(m -> !m.isRetired()).collect(Collectors.toList());
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
