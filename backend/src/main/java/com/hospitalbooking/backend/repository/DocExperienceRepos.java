package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Doctor;
import com.hospitalbooking.backend.models.DoctorEducationDetail;
import com.hospitalbooking.backend.models.DoctorExperienceDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface DocExperienceRepos extends JpaRepository<DoctorExperienceDetail, Long>, JpaSpecificationExecutor {
}
