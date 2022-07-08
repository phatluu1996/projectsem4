package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "patient")
public class Patient extends UserProfile{


//    @OneToOne(fetch = FetchType.LAZY,
//            cascade =  CascadeType.ALL,
//            mappedBy = "patient")
//    @JoinColumn(name = "doctor_id", nullable = true)
//    @JsonIgnoreProperties("patient")
    @OneToOne
    @JsonIgnoreProperties(value = "patient", allowSetters = true)
    private User user;

    @OneToMany
    @JoinColumn(name = "patient_id", referencedColumnName = "id")
    @JsonIgnoreProperties("patient")
    private List<Appointment> appointments;

    public Patient() {
        super();
    }

    public Patient(List<Appointment> appointments) {
        this.appointments = appointments;
    }

    public Patient(Long id, String cId, String firstName, String lastName, String gender, Date dateOfBirth, String email, String phoneNumber , String image, Address address, boolean retired, List<Appointment> appointments) {
        super(id, cId, firstName, lastName, gender, dateOfBirth, email, phoneNumber,image, address, retired);
        this.appointments = appointments;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
        this.appointments = appointments;
    }
}
