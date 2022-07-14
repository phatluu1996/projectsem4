package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.constant.EmployeeRole;
import com.hospitalbooking.backend.constant.Gender;
import com.hospitalbooking.backend.constant.UserRole;
import com.hospitalbooking.backend.models.Address;
import com.hospitalbooking.backend.models.Employee;
import com.hospitalbooking.backend.models.User;
import com.hospitalbooking.backend.repository.*;
import org.aspectj.util.FileUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.Date;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DatabaseController {
    private static final Logger LOGGER= LoggerFactory.getLogger(DatabaseController.class);

    @Autowired
    private UserRepos userRepos;

    @Autowired
    private DoctorRepos doctorRepos;

    @Autowired
    private EmployeeRepos employeeRepos;

    @Autowired
    private PatientRepos patientRepos;

    @Autowired
    private DepartmentRepos departmentRepos;

    @Autowired
    private AddressRepos addressRepos;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private Environment env;

    //http://localhost:8080/api/admin-data
    @GetMapping("/admin-data")
    public ResponseEntity initAdminData() {
        //Admin
        if(!userRepos.existsByUsername("admin")){
            Address adminAddress =  addressRepos.save(new Address(null, "590 CMT8 ,phường 11", "70000", "Ho Chi Minh City", "Tân Bình","Vietnam", false));
            User adminUser = userRepos.save(new User("admin", encoder.encode("123456789Aa@"), UserRole.ADMIN));
            Employee adminEmployee = employeeRepos.save(new Employee(null, "297097185", "Duy", "Lê Bá", Gender.Male, new Date(1990, 05, 25), "administrator@mediap.com", "361-218-1685", null, null, adminAddress, false, EmployeeRole.ADMIN, true, 10, new Date(), adminUser));
        }

        if(!userRepos.existsByUsername("reception")) {
            //Reception
            Address receptionAddress = addressRepos.save(new Address(null, "192 Tạ Quang Bửu", "70000", "Ho Chi Minh City", "Quận 8", "Vietnam", false));
            User receptionUser = userRepos.save(new User("reception", encoder.encode("123456789Aa@"), UserRole.RECEPTIONIST));
            Employee receptionEmployee = employeeRepos.save(new Employee(null, "786851420", "Như", "Liêu Quỳnh", Gender.Female, new Date(1994, 1, 10), "lieu.nhu@mediap.com", "706-678-3230", null, null, receptionAddress, false, EmployeeRole.RECEPTIONIST, true, 2, new Date(), receptionUser));
        }


        return new ResponseEntity<>("Done !", HttpStatus.OK);
    }

    @GetMapping("client-data")
    public ResponseEntity initClientData(){
        return new ResponseEntity<>("Done !", HttpStatus.OK);
    }

    //http://localhost:8080/api/drop-all-table?dbtype=mysql
    //http://localhost:8080/api/drop-all-table?dbtype=sqlserver
    @GetMapping("/drop-all-table")
    public ResponseEntity dropDb(@RequestParam("dbtype") String dbtype) {
        String URL = env.getProperty("spring.datasource.url");
        String USER = env.getProperty("spring.datasource.username");
        String PASS = env.getProperty("spring.datasource.password");
        InputStream inputStream = null;
        String script = "";
        String slitRegex = "GO";
        try {
            if(dbtype.equals("sqlserver")){
                File importFile = ResourceUtils.getFile("classpath:data/drop_all_tables_sqlserver.sql");
                if(importFile.canRead()){
                    script = FileUtil.readAsString(importFile);
                }
            }else if(dbtype.equals("mysql")){
                slitRegex = ";";
                File importFile = ResourceUtils.getFile("classpath:data/drop_all_tables_mysql.sql");
                if(importFile.canRead()){
                    script = FileUtil.readAsString(importFile);
                }
            }else{
                return new ResponseEntity<>("Nothing to drop !", HttpStatus.OK);
            }

            Connection conn = DriverManager.getConnection(URL, USER, PASS);
            Statement stmt = conn.createStatement();
            String[] statements = script.split(slitRegex);
            for (int i = 0; i < statements.length; i++) {
                String statement = statements[i];
                stmt.executeUpdate(statement);
            }
            return new ResponseEntity<>("Done !", HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.ok().body(e.getStackTrace());
        }
    }
}
