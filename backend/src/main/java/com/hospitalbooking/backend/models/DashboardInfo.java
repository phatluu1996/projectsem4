package com.hospitalbooking.backend.models;

import java.util.List;

public class DashboardInfo {
    private int totalPatient;
    private int totalEmployee;
    private int totalDoctor;
    private int totalPending;

    private int[] patientMonth;

    private int[] patientYear;

    public DashboardInfo(int totalPatient, int totalEmployee, int totalDoctor, int totalPending, int[] patientMonth, int[] patientYear) {
        this.totalPatient = totalPatient;
        this.totalEmployee = totalEmployee;
        this.totalDoctor = totalDoctor;
        this.totalPending = totalPending;
        this.patientMonth = patientMonth;
        this.patientYear = patientYear;
    }

    public DashboardInfo() {
    }

    public int getTotalPatient() {
        return totalPatient;
    }

    public void setTotalPatient(int totalPatient) {
        this.totalPatient = totalPatient;
    }

    public int getTotalEmployee() {
        return totalEmployee;
    }

    public void setTotalEmployee(int totalEmployee) {
        this.totalEmployee = totalEmployee;
    }

    public int getTotalDoctor() {
        return totalDoctor;
    }

    public void setTotalDoctor(int totalDoctor) {
        this.totalDoctor = totalDoctor;
    }

    public int getTotalPending() {
        return totalPending;
    }

    public void setTotalPending(int totalPending) {
        this.totalPending = totalPending;
    }

    public int[] getPatientMonth() {
        return patientMonth;
    }

    public void setPatientMonth(int[] patientMonth) {
        this.patientMonth = patientMonth;
    }

    public int[] getPatientYear() {
        return patientYear;
    }

    public void setPatientYear(int[] patientYear) {
        this.patientYear = patientYear;
    }
}
