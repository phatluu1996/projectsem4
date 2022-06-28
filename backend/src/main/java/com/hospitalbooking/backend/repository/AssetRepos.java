package com.hospitalbooking.backend.repository;

import com.hospitalbooking.backend.models.Asset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetRepos extends JpaRepository<Asset, Long>, JpaSpecificationExecutor {
}
