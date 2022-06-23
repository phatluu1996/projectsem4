package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepos extends JpaRepository<Employee, Long> {
}
