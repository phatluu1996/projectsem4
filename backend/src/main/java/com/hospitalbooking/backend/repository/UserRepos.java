package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepos extends JpaRepository<User, Long>, JpaSpecificationExecutor {
    Optional<User> findByUsername(String username);
    User getById(Long id);
    User getUserByUsername(String username);
    boolean existsByUsername(String username);
    Boolean existsByResetPassword(String token);
}
