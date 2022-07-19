package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepos extends JpaRepository<Doctor, Long>, JpaSpecificationExecutor {
}
