package com.hospitalbooking.backend.models;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
public class UserProfile{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "cId", length = 50, columnDefinition = "nvarchar(50)")
    private String cId;
    @Column(name = "first_name", length = 250, columnDefinition = "nvarchar(250)")
    private String firstName;
    @Column(name = "last_name", length = 250, columnDefinition = "nvarchar(250)")
    private String lastName;
    @Column(name = "gender", length = 20, columnDefinition = "nvarchar(20)")
    private String gender;
    @Column(name = "birth_day")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateOfBirth;
    @Column(name = "email", length = 250, columnDefinition = "nvarchar(250)")
    private String email;
    @Column(name = "phone_number", length = 15, columnDefinition = "nvarchar(15)")
    private String phoneNumber;
    @Lob
    @Column(nullable = true)
    private String image;
    @Lob
    @Column(nullable = true)
    private String imageByteArr;
    @ManyToOne
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;
    @Column(name = "retired")
    private boolean retired;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false, insertable = true)
    private Date createdAt;

    @Column(name = "updated_at", nullable = false, updatable = false, insertable = true)
    private Date updatedAt;

    public UserProfile() {
    }

    public UserProfile(Long id, String cId, String firstName, String lastName, String gender, Date dateOfBirth, String email, String phoneNumber, String image,String imageByteArr, Address address, boolean retired) {
        this.id = id;
        this.cId = cId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.image = image;
        this.imageByteArr = imageByteArr;
        this.address = address;
        this.retired = retired;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
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

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
