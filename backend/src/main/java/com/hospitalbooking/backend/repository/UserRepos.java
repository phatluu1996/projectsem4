package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepos extends JpaRepository<User, Long> {
}
