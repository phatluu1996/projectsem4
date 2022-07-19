package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Patient;
import com.hospitalbooking.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepos extends JpaRepository<Patient, Long>, JpaSpecificationExecutor {
    boolean existsByEmail(String email);

    Patient getPatientByUser(User user);

    @Query(value = "SELECT COUNT(1) \n" +
                    "FROM [user] U, patient P\n" +
                    "WHERE 1=1\n" +
                    "AND U.id = P.user_id\n" +
                    "AND U.retired = 0\n" +
                    "AND P.retired = 0", nativeQuery = true)
    int totalPatient();

}
