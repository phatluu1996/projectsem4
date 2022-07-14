package com.hospitalbooking.backend.models;

import javax.persistence.*;

@Entity
@Table(name = "[address]")
public class Address {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "line", length = 250, columnDefinition = "nvarchar(250)")
    private String line;
    @Column(name = "postal_code", length = 10, columnDefinition = "nvarchar(10)")
    private String postalCode;
    @Column(name = "province", length = 150, columnDefinition = "nvarchar(150)")
    private String province;
    @Column(name = "district", length = 150, columnDefinition = "nvarchar(150)")
    private String district;
    @Column(name = "country", length = 150, columnDefinition = "nvarchar(150)")
    private String country;
    @Column(name = "retired")
    private boolean retired;

    public Address() {
    }

    public Address(Long id, String line, String postalCode, String province, String district, String country, boolean retired) {
        this.id = id;
        this.line = line;
        this.postalCode = postalCode;
        this.province = province;
        this.district = district;
        this.country = country;
        this.retired = retired;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLine() {
        return line;
    }

    public void setLine(String line) {
        this.line = line;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String city) {
        this.district = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }
}
