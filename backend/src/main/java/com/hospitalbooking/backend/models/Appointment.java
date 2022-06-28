package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.Instant;
import java.util.Date;

@Entity
@Table(name = "appointment")
public class Appointment {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "department_id", referencedColumnName = "id")
    private Department department;

    @ManyToOne
    @JoinColumn(name = "patient_id", referencedColumnName = "id")
    @JsonIgnoreProperties("appointments")
    private Patient patient;
    @ManyToOne
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties("appointments")
    private Doctor doctor;
    @Column(name = "date")
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
    private Date date;
    @Column(name = "status")
    private boolean status;

    @Column(name = "message", columnDefinition = "text")
    private String message;
    @Column(name = "retired")
    private boolean retired;

    public Appointment() {
    }

    public Appointment(Long id, Patient patient, Doctor doctor, Date date, boolean status, boolean retired) {
        this.id = id;
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.status = status;
        this.retired = retired;
    }

    public Appointment(Long id, Department department, Patient patient, Doctor doctor, Date date, boolean status, boolean retired) {
        this.id = id;
        this.department = department;
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.status = status;
        this.retired = retired;
    }

    public Appointment(Long id, Department department, Patient patient, Doctor doctor, Date date, boolean status, String message, boolean retired) {
        this.id = id;
        this.department = department;
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.status = status;
        this.message = message;
        this.retired = retired;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
