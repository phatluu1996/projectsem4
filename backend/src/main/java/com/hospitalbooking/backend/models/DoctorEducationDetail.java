package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "doc_edu_detail")
public class DoctorEducationDetail {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column(name = "instiution", length = 250, columnDefinition = "nvarchar(250)")
    private String instiution;
    @Column(name = "subject", length = 250, columnDefinition = "nvarchar(250)")
    private String subject;
    @Column(name = "start_period")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date start;
    @Column(name = "end_period")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date end;
    @Column(name = "degree", length = 100, columnDefinition = "nvarchar(100)")
    private String degree;
    @Column(name = "grade", length = 100, columnDefinition = "nvarchar(100)")
    private String grade;
    @Column(name = "retired")
    private boolean retired;

    @ManyToOne
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    @JsonIgnoreProperties("educationDetails")
    private Doctor doctor;

    public DoctorEducationDetail() {
    }

    public DoctorEducationDetail(Long id, String instiution, String subject, Date start, Date end, String degree, String grade, boolean retired, Doctor doctor) {
        Id = id;
        this.instiution = instiution;
        this.subject = subject;
        this.start = start;
        this.end = end;
        this.degree = degree;
        this.grade = grade;
        this.retired = retired;
        this.doctor = doctor;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getInstiution() {
        return instiution;
    }

    public void setInstiution(String instiution) {
        this.instiution = instiution;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
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

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }
}
