package com.hospitalbooking.backend.models;

import javax.persistence.*;

@Entity
@Table(name = "department")
public class Department {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "department_name", length = 250, columnDefinition = "nvarchar(250)")
    private String name;
    @Column(name = "department_desc", columnDefinition = "text")
    private String description;
    @Lob
    @Column(nullable = true)
    private String imageByteArr;
    @Column(name = "status")
    private boolean status;
    @Column(name = "retired")
    private boolean retired;

    public Department() {
    }

    public Department(String name, String description, boolean status, boolean retired) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.retired = retired;
    }

    public Department(Long id, String name, String description, boolean status, boolean retired) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.retired = retired;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
    }

    public String getImageByteArr() {
        return imageByteArr;
    }

    public void setImageByteArr(String imageByteArr) {
        this.imageByteArr = imageByteArr;
    }
}
