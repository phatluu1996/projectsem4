package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "[employee_salary]")
public class EmployeeSalary {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "salary_month")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date salaryMonth;

    @Column(name = "create_time")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createTime;

    @Column(name = "basic_salary")
    private double basicSalary;

    @Column(name = "net_salary")
    private double netSalary;

    @Column(name = "tds")
    private double tds;

    @Column(name = "hra")
    private double hra;

    @Column(name = "conveyance")
    private double conveyance;

    @Column(name = "otherAllowance")
    private double otherAllowance;

    @Column(name = "loan")
    private double loan;

    @Column(name = "providentFund")
    private double providentFund;

    @Column(name = "esi")
    private double esi;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    private Employee employee;

    @Column(name = "retired")
    private boolean retired;

    public EmployeeSalary(Long id, Date salaryMonth, Date createTime, double basicSalary, double netSalary, double tds, double hra, double conveyance, double otherAllowance, double loan, double providentFund, double esi, Employee employee, boolean retired) {
        Id = id;
        this.salaryMonth = salaryMonth;
        this.createTime = createTime;
        this.basicSalary = basicSalary;
        this.netSalary = netSalary;
        this.tds = tds;
        this.hra = hra;
        this.conveyance = conveyance;
        this.otherAllowance = otherAllowance;
        this.loan = loan;
        this.providentFund = providentFund;
        this.esi = esi;
        this.employee = employee;
        this.retired = retired;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Date getSalaryMonth() {
        return salaryMonth;
    }

    public void setSalaryMonth(Date salaryMonth) {
        this.salaryMonth = salaryMonth;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public double getBasicSalary() {
        return basicSalary;
    }

    public void setBasicSalary(double basicSalary) {
        this.basicSalary = basicSalary;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }

    public double getNetSalary() {
        return netSalary;
    }

    public void setNetSalary(double netSalary) {
        this.netSalary = netSalary;
    }

    public double getTds() {
        return tds;
    }

    public void setTds(double tds) {
        this.tds = tds;
    }

    public double getHra() {
        return hra;
    }

    public void setHra(double hra) {
        this.hra = hra;
    }

    public double getConveyance() {
        return conveyance;
    }

    public void setConveyance(double conveyance) {
        this.conveyance = conveyance;
    }

    public double getOtherAllowance() {
        return otherAllowance;
    }

    public void setOtherAllowance(double otherAllowance) {
        this.otherAllowance = otherAllowance;
    }

    public double getLoan() {
        return loan;
    }

    public void setLoan(double loan) {
        this.loan = loan;
    }

    public double getProvidentFund() {
        return providentFund;
    }

    public void setProvidentFund(double providentFund) {
        this.providentFund = providentFund;
    }

    public double getEsi() {
        return esi;
    }

    public void setEsi(double esi) {
        this.esi = esi;
    }
}
