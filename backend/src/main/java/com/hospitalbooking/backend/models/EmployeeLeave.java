package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "[employee_leave]")
public class EmployeeLeave {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "start_from")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date startFrom;

    @Column(name = "leave_day")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private int leaveDay;

    @Column(name = "leave_reason", length = 250, columnDefinition = "nvarchar(250)")
    private String leaveReason;

    @Column(name = "leave_type", length = 30, columnDefinition = "nvarchar(30)")
    private String leaveType;

    @Column(name = "retired")
    private boolean retired;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    @JsonIgnoreProperties("leaves")
    private Employee employee;

    public EmployeeLeave() {
    }

    public EmployeeLeave(Long id, Date startFrom, int leaveDay, String leaveReason, String leaveType, boolean retired, Employee employee) {
        Id = id;
        this.startFrom = startFrom;
        this.leaveDay = leaveDay;
        this.leaveReason = leaveReason;
        this.leaveType = leaveType;
        this.retired = retired;
        this.employee = employee;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Date getStartFrom() {
        return startFrom;
    }

    public void setStartFrom(Date startFrom) {
        this.startFrom = startFrom;
    }

    public int getLeaveDay() {
        return leaveDay;
    }

    public void setLeaveDay(int leaveDay) {
        this.leaveDay = leaveDay;
    }

    public String getLeaveReason() {
        return leaveReason;
    }

    public void setLeaveReason(String leaveReason) {
        this.leaveReason = leaveReason;
    }

    public String getLeaveType() {
        return leaveType;
    }

    public void setLeaveType(String leaveType) {
        this.leaveType = leaveType;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
