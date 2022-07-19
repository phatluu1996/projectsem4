package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hospitalbooking.backend.utils.RandomRange;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

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
    @JsonIgnoreProperties(value = "patient", allowSetters = true)
    private List<Appointment> appointments;

    public Patient() {
        super();
    }

    public Patient(User user, List<Appointment> appointments) {
        this.user = user;
        this.appointments = appointments;
    }

    public Patient(Long id, String cId, String firstName, String lastName, String gender, Date dateOfBirth, String email, String phoneNumber, String image, String imageByteArr, Address address, boolean retired, User user, List<Appointment> appointments) {
        super(id, cId, firstName, lastName, gender, dateOfBirth, email, phoneNumber, image, imageByteArr, address, retired);
        this.user = user;
        this.appointments = appointments;
    }

    public Patient(Long id, String cId, String firstName, String lastName, String gender, Date dateOfBirth, String email, String phoneNumber, String image, String imageByteArr, Address address, boolean retired, User user, List<Appointment> appointments, boolean random) {
        super(id, cId, firstName, lastName, gender, dateOfBirth, email, phoneNumber, image, imageByteArr, address, retired);
        this.user = user;
        this.appointments = appointments;
        if(random){
            Date createDate = new Date();
            int randomMonth = RandomRange.range(0, 6);
            int randomDate = randomMonth == 6 ? RandomRange.range(1, createDate.getDate()) : RandomRange.range(1, 28);
            createDate.setMonth(randomMonth);
            createDate.setDate(randomDate);
            this.setCreatedAt(createDate);
            this.setUpdatedAt(createDate);
        }
    }



    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Appointment> getAppointments(boolean includeRetired) {
        if(includeRetired){
            return appointments;
        }
        return appointments.stream().filter(m -> !m.isRetired()).collect(Collectors.toList());
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
        this.appointments = appointments;
    }
}
