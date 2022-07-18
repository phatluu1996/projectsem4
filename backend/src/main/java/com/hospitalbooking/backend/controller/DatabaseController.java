package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.constant.EmployeeRole;
import com.hospitalbooking.backend.constant.Gender;
import com.hospitalbooking.backend.constant.ImportSampleData;
import com.hospitalbooking.backend.constant.UserRole;
import com.hospitalbooking.backend.models.*;
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
import java.util.ArrayList;
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
    private DoctorScheduleRepos doctorScheduleRepos;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private Environment env;

    //http://localhost:8080/api/all-data
    @GetMapping("/all-data")
    public ResponseEntity initAllData(){
        initAdminData();
        ImportSampleData.importAll(addressRepos, userRepos, doctorRepos, patientRepos, employeeRepos, doctorScheduleRepos, encoder);
        return new ResponseEntity<>("Done !", HttpStatus.OK);
    }

    //http://localhost:8080/api/admin-data
    @GetMapping("/admin-data")
    public ResponseEntity initAdminData() {
        //Department
        Department[] departments = new Department[] {
                new Department((long)1,"Neurosurgery", "Neurosurgery or neurological surgery, known in common parlance as brain surgery, is the medical specialty concerned with the surgical treatment of disorders which affect any portion of the nervous system including the brain, spinal cord and peripheral nervous system", true, false),
                new Department((long)2,"Anesthesiology", "Anesthesiology, anaesthesiology, or anaesthesia is the medical specialty concerned with the total perioperative care of patients before, during and after surgery. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine.", true, false),
                new Department((long)3,"Cardiology", "Cardiology (from Greek καρδίᾱ kardiā, \"heart\" and -λογία -logia, \"study\") is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology", true, false),
                new Department((long)4,"Dietetics & nutrition", "Nutrition and Dietetics, a subdiscipline of Medicine, is the science that focuses on everything related to food and its effect on our health and overall wellbeing. Nutritionists and dietitians aim to improve people's health and help them make better dietary choices.", true, false),
                new Department((long)5,"Andrology", "Andrology (from Ancient Greek: ἀνήρ, anēr, genitive ἀνδρός, andros, \"man\"; and -λογία, -logia) is a name for the medical specialty that deals with male health, particularly relating to the problems of the male reproductive system and urological problems that are unique to men.", true, false),
                new Department((long)6,"Gynecology", "Gynaecology or gynecology (see spelling differences) is the area of medicine that involves the treatment of women's diseases, especially those of the reproductive organs. It is often paired with the field of obstetrics, forming the combined area of obstetrics and gynecology (OB-GYN).", true, false),
                new Department((long)7,"Gastroenterology", "Gastroenterology is the branch of medicine focused on the digestive system and its disorders. Advanced endoscopy, sometimes called interventional or surgical endoscopy, is a sub-specialty of gastroenterology that focuses on advanced endoscopic techniques for the treatment of pancreatic, hepatobiliary, and gastrointestinal disease.", true, false),
                new Department((long)8,"Hematology", "Hematology (always spelled haematology in British English) is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood. It involves treating diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, bone marrow, platelets, blood vessels, spleen, and the mechanism of coagulation", true, false),
                new Department((long)9,"Odantology", "Odontology applies the study of teeth to assist in criminal investigations. To enter the odontology field, you typically need to undergo extensive education and training. Understanding the responsibilities of an odontologist can help you decide whether you want to start a career in this field", true, false),
                new Department((long)10,"Ophthalmology", "Ophthalmology (/ˌɒfθælˈmɒlədʒi/)[1] is a branch of medicine that deals with the diagnosis and treatment of eye disorders.[2] An ophthalmologist is a physician who specializes in eye care.[3] The credentials include a degree in medicine, followed by additional four to five years of residency training in ophthalmology", true, false),
                new Department((long)11,"Traumatology & Orthopeclics", "Orthopedic surgery – branch of surgery concerned with conditions involving the musculoskeletal system. Orthopedic surgeons use both surgical and nonsurgical means to treat musculoskeletal injuries, sports injuries, degenerative diseases, infections, bone tumours, and congenital limb deformities. Trauma surgery and traumatology is a sub-specialty dealing with the operative management of fractures, major trauma and the multiply-injured patient", true, false)
        };

        ArrayList<Department> savedDepartment = new ArrayList<Department>();
        for (int i = 0; i < departments.length; i++) {
            if(!departmentRepos.existsById((long)i + 1)){
                savedDepartment.add(departmentRepos.save(departments[i]));
            }
        }

        //Admin
        if(!userRepos.existsByUsername("duyle")){
            Address adminAddress =  addressRepos.save(new Address(null, "590 CMT8 ,phường 11", "70000", "Ho Chi Minh City", "Tân Bình","Vietnam", false));
            User adminUser = userRepos.save(new User("duyle", encoder.encode("123456789Aa@"), UserRole.ADMIN));
            Employee adminEmployee = employeeRepos.save(new Employee(null, "297097185", "Duy", "Lê Bá", Gender.Male, new Date("1990/05/25"), "administrator@mediap.com", "361-218-1685", null, "https://randomuser.me/api/portraits/men/62.jpg", adminAddress, false, EmployeeRole.ADMIN, true, 10, new Date(), adminUser));
        }

        if(!userRepos.existsByUsername("nhulieu")) {
            //Reception
            Address receptionAddress = addressRepos.save(new Address(null, "192 Tạ Quang Bửu", "70000", "Ho Chi Minh City", "8", "Vietnam", false));
            User receptionUser = userRepos.save(new User("nhulieu", encoder.encode("123456789Aa@"), UserRole.RECEPTIONIST));
            Employee receptionEmployee = employeeRepos.save(new Employee(null, "851478620", "Như", "Liêu Quỳnh", Gender.Female, new Date("1994/ 01/ 10"), "lieu.nhu@mediap.com", "706-678-3230", null, "https://healthcareuniformsaustralia.com.au/wp-content/uploads/2019/02/receptionist_portrait.jpg", receptionAddress, false, EmployeeRole.RECEPTIONIST, true, 2, new Date(), receptionUser));
        }

        if(!userRepos.existsByUsername("khoale")) {
            //Reception
            Address patientAddress = addressRepos.save(new Address(null, "50 Huỳnh Văn Bánh", "70000", "Ho Chi Minh City", "Phú Nhuận", "Vietnam", false));
            User patientUser = userRepos.save(new User("khoale", encoder.encode("123456789Aa@"), UserRole.PATIENT));
            Patient patient = patientRepos.save(new Patient(null, "428610785", "Khoa", "Lê Quốc Anh", Gender.Male, new Date("1987/ 04/ 23"), "khoa.le@gmail.com", "567-167-6784", null, "https://randomuser.me/api/portraits/men/65.jpg", patientAddress, false, patientUser, null));
        }

        if(!userRepos.existsByUsername("bachnguyen")) {
            //Patient
            Address patientAddress = addressRepos.save(new Address(null, "100 Huỳnh Văn Bánh", "70000", "Ho Chi Minh City", "Phú Nhuận", "Vietnam", false));
            User patientUser = userRepos.save(new User("bachnguyen", encoder.encode("123456789Aa@"), UserRole.PATIENT));
            Patient patient = patientRepos.save(new Patient(null, "428610785", "Bạch", "Nguyễn Thanh", Gender.Male, new Date("1997/04/23"), "bach.nguyen@gmail.com", "675-890-3674", null, "https://randomuser.me/api/portraits/men/63.jpg", patientAddress, false, patientUser, null));
        }

        if(!userRepos.existsByUsername("nguyenphuc")) {
            Address doctorAddress = addressRepos.save(new Address(null, "69 Trường Sa",  "70000", "Ho Chi Minh City", "Tân Bình", "Vietnam", false));
            User doctorUser = userRepos.save(new User("nguyenphuc", encoder.encode("123456789Aa@"), UserRole.DOCTOR));
            Employee doctorEmployee = employeeRepos.save(new Employee(null, "786851420", "Phúc", "Nguyễn Thiên", Gender.Male, new Date("1997/05/10"), "nguyen.phuc@mediap.com", "189-678-4518", null, "https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 8, new Date(), doctorUser));
            Doctor doctor = doctorRepos.save(new Doctor(null, "", savedDepartment.get(0), doctorEmployee, null, null, null, null, false));
//            doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "start", "end", "", "", false));
        }

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
