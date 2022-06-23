package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.DoctorSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorScheduleRepos extends JpaRepository<DoctorSchedule, Long> {
}
