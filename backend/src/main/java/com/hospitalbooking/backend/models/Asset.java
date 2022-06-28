package com.hospitalbooking.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "asset")
public class Asset {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "asset_name", length = 250, columnDefinition = "nvarchar(250)")
    private String assetName;

    @Column(name = "purchase_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date purchaseDate;

    @Column(name = "manufacture", length = 250, columnDefinition = "nvarchar(250)")
    private String manufacture;

    @Column(name = "model", length = 250, columnDefinition = "nvarchar(250)")
    private String model;

    @Column(name = "serial_number", length = 250, columnDefinition = "nvarchar(250)")
    private String serial_number;

    @Column(name = "supplier", length = 250, columnDefinition = "nvarchar(250)")
    private String supplier;

    @Column(name = "warranty")
    private int warranty;

    @Column(name = "cost")
    private int cost;

    @Column(name = "description", columnDefinition = "text")
    private String description;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    @JsonIgnoreProperties("assets")
    private Employee employee;

    @Column(name = "retired")
    private boolean retired;

    public Asset() {
    }

    public Asset(Long id, String assetName, Date purchaseDate, String manufacture, String model, String serial_number, String supplier, int warranty, int cost, String description, Employee employee, boolean retired) {
        this.id = id;
        this.assetName = assetName;
        this.purchaseDate = purchaseDate;
        this.manufacture = manufacture;
        this.model = model;
        this.serial_number = serial_number;
        this.supplier = supplier;
        this.warranty = warranty;
        this.cost = cost;
        this.description = description;
        this.employee = employee;
        this.retired = retired;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAssetName() {
        return assetName;
    }

    public void setAssetName(String assetName) {
        this.assetName = assetName;
    }

    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public String getManufacture() {
        return manufacture;
    }

    public void setManufacture(String manufacture) {
        this.manufacture = manufacture;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSerial_number() {
        return serial_number;
    }

    public void setSerial_number(String serial_number) {
        this.serial_number = serial_number;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public int getWarranty() {
        return warranty;
    }

    public void setWarranty(int warranty) {
        this.warranty = warranty;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
}
