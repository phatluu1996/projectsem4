package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Doctor;
import com.hospitalbooking.backend.models.DoctorEducationDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface DocEducationRepos extends JpaRepository<DoctorEducationDetail, Long>, JpaSpecificationExecutor {
}
