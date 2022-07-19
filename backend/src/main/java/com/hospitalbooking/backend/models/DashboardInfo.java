package com.hospitalbooking.backend.models;

import org.springframework.data.domain.Page;

import java.util.List;

public class DashboardInfo {
    private int totalPatient;
    private int totalEmployee;
    private int totalDoctor;
    private int totalPending;

    private int[] patientMonth;

    private int[] patientYear;

    private Page<Appointment> appointments;

    private List<Patient> newPatients;

    private List<Doctor> doctors;

    private float countDoctor;
    private float countReceptionist;
    private float countNurse;
    private float countAccountant;
    private float countOther;

    public DashboardInfo(int totalPatient, int totalEmployee, int totalDoctor, int totalPending, int[] patientMonth, int[] patientYear, Page<Appointment> appointments, List<Patient> newPatients, List<Doctor> doctors, float countDoctor, float countReceptionist, float countNurse, float countAccountant, float countOther) {
        this.totalPatient = totalPatient;
        this.totalEmployee = totalEmployee;
        this.totalDoctor = totalDoctor;
        this.totalPending = totalPending;
        this.patientMonth = patientMonth;
        this.patientYear = patientYear;
        this.appointments = appointments;
        this.newPatients = newPatients;
        this.doctors = doctors;
        this.countDoctor = countDoctor;
        this.countReceptionist = countReceptionist;
        this.countNurse = countNurse;
        this.countAccountant = countAccountant;
        this.countOther = countOther;
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

    public Page<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(Page<Appointment> appointments) {
        this.appointments = appointments;
    }

    public List<Patient> getNewPatients() {
        return newPatients;
    }

    public void setNewPatients(List<Patient> newPatients) {
        this.newPatients = newPatients;
    }

    public List<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(List<Doctor> doctors) {
        this.doctors = doctors;
    }

    public float getCountDoctor() {
        return countDoctor;
    }

    public void setCountDoctor(float countDoctor) {
        this.countDoctor = countDoctor;
    }

    public float getCountReceptionist() {
        return countReceptionist;
    }

    public void setCountReceptionist(float countReceptionist) {
        this.countReceptionist = countReceptionist;
    }

    public float getCountNurse() {
        return countNurse;
    }

    public void setCountNurse(float countNurse) {
        this.countNurse = countNurse;
    }

    public float getCountAccountant() {
        return countAccountant;
    }

    public void setCountAccountant(float countAccountant) {
        this.countAccountant = countAccountant;
    }

    public float getCountOther() {
        return countOther;
    }

    public void setCountOther(float countOther) {
        this.countOther = countOther;
    }
}
