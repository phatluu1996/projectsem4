package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepos extends JpaRepository<Patient, Long>, JpaSpecificationExecutor {
    Boolean existsByEmail(String username);
}
