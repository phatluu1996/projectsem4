package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepos extends JpaRepository<Department, Long>, JpaSpecificationExecutor {
}
