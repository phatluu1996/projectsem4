package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.Instant;


@Entity
@Table(name = "doc_schedule")
public class DoctorSchedule {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties("doctorSchedules")
    private Doctor doctor;
    @Column(name = "start_time")
    private String start;
    @Column(name = "end_time")
    private String end;
    @Column(name = "availableDays", length = 13, columnDefinition = "nvarchar(13)")
    private String availableDays;
    @Column(name = "message", columnDefinition = "text")
    private String message;
    @Column(name = "retired")
    private boolean retired;

    public DoctorSchedule() {
    }

    public DoctorSchedule(Long id, Doctor doctor, String start, String end, String availableDays, String message, boolean retired) {
        this.id = id;
        this.doctor = doctor;
        this.start = start;
        this.end = end;
        this.availableDays = availableDays;
        this.message = message;
        this.retired = retired;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public String getAvailableDays() {
        return availableDays;
    }

    public void setAvailableDays(String availableDays) {
        this.availableDays = availableDays;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }
}
