package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Appointment;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppointmentRepos extends JpaRepository<Appointment, Long>, JpaSpecificationExecutor {
    @Override
    boolean exists(Specification spec);

    @Override
    Optional<Appointment> findOne(Specification spec);

    @Override
    List<Appointment> findAll(Specification spec);
}
