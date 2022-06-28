package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepos extends JpaRepository<Appointment, Long>, JpaSpecificationExecutor {
}
