package com.hospitalbooking.backend.models;

public class DashboardInfo {
    private int totalPatient;
    private int totalEmployee;
    private int totalDoctor;
    private int totalPending;

    public DashboardInfo(int totalPatient, int totalEmployee, int totalDoctor, int totalPending) {
        this.totalPatient = totalPatient;
        this.totalEmployee = totalEmployee;
        this.totalDoctor = totalDoctor;
        this.totalPending = totalPending;
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
}
