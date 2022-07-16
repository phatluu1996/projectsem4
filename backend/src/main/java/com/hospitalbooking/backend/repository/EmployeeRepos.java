package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepos extends JpaRepository<Employee, Long>, JpaSpecificationExecutor {
    boolean existsByEmail(String email);

    Employee getEmpByEmail(String email);
}
