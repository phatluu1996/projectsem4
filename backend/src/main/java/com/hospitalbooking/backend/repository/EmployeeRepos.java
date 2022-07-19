package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepos extends JpaRepository<Employee, Long>, JpaSpecificationExecutor {
    boolean existsByEmail(String email);

    Employee getEmpByEmail(String email);

    @Query(value = "SELECT COUNT(1) \n" +
                    "FROM [user] U, employee EMP\n" +
                    "WHERE 1=1\n" +
                    "AND U.id = EMP.user_id\n" +
                    "AND U.retired = 0\n" +
                    "AND EMP.retired = 0", nativeQuery = true)
    int totalEmployee();
}
