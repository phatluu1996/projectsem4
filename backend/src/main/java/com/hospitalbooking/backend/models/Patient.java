package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

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
    @OneToOne(fetch = FetchType.EAGER, optional = false)
    @JsonIgnoreProperties("patient")
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

    public Patient(Long id, String cId, String firstName, String lastName, String gender, Date dateOfBirth, String email, String phoneNumber, Address address, boolean retired, List<Appointment> appointments) {
        super(id, cId, firstName, lastName, gender, dateOfBirth, email, phoneNumber, address, retired);
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
