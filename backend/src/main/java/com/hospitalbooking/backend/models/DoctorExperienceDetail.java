package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "doc_exp_detail")
public class DoctorExperienceDetail {
    @javax.persistence.Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column(name = "office_name", length = 250, columnDefinition = "nvarchar(250)")
    private String officeName;
    @Column(name = "country", length = 250, columnDefinition = "nvarchar(250)")
    private String country;
    @Column(name = "start_period")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date start;
    @Column(name = "end_period")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date end;
    @Column(name = "job_position", length = 100, columnDefinition = "nvarchar(100)")
    private String jopPosition;
    @ManyToOne
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties("experienceDetails")
    private Doctor doctor;
    @Column(name = "retired")
    private boolean retired;

    public DoctorExperienceDetail() {
    }

    public DoctorExperienceDetail(Long id, String officeName, String country, Date start, Date end, String jopPosition, Doctor doctor, boolean retired) {
        Id = id;
        this.officeName = officeName;
        this.country = country;
        this.start = start;
        this.end = end;
        this.jopPosition = jopPosition;
        this.doctor = doctor;
        this.retired = retired;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getOfficeName() {
        return officeName;
    }

    public void setOfficeName(String officeName) {
        this.officeName = officeName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public String getJopPosition() {
        return jopPosition;
    }

    public void setJopPosition(String jopPosition) {
        this.jopPosition = jopPosition;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }
}
