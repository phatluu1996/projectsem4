package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.EmployeeLeave;
import com.hospitalbooking.backend.models.EmployeeSalary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeSalaryRepos extends JpaRepository<EmployeeSalary, Long>, JpaSpecificationExecutor {
}