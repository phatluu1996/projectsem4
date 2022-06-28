package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.EmployeeLeave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeLeaveRepos extends JpaRepository<EmployeeLeave, Long>, JpaSpecificationExecutor {
}
