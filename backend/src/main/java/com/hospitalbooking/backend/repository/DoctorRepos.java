package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepos extends JpaRepository<Doctor, Long>, JpaSpecificationExecutor {
    @Query(value = "SELECT COUNT(1) \n" +
                    "FROM mediap.user U\n" +
                    "WHERE 1=1\n" +
                    "AND U.retired = 0\n" +
                    "AND EXISTS (\n" +
                    "\tSELECT 1\n" +
                    "\tFROM mediap.doctor DOC, mediap.employee EMP\n" +
                    "\tWHERE 1=1\n" +
                    "\tAND DOC.employee_id = EMP.id\n" +
                    "\tAND U.id = EMP.user_id\n" +
                    "\tAND DOC.retired = 0\n" +
                    "\tAND EMP.retired = 0\n" +
                    ")", nativeQuery = true)
    int totalDoctor();
}
