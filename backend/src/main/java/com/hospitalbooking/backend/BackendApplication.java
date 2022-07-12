package com.hospitalbooking.backend;

import com.hospitalbooking.backend.models.Department;
import com.hospitalbooking.backend.repository.DepartmentRepos;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Autowired
    DepartmentRepos departmentRepos;

//    @Bean
//    InitializingBean sendDatabase() {
//        return () -> {
//            departmentRepos.save(new Department((long)1,"Dentist", "Dentists", true, false));
//            departmentRepos.save(new Department((long)2,"Cardiologist", "Cardiologist", true, false));
//        };
//    }
}
