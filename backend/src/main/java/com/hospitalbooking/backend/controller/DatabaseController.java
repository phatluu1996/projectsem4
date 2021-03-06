package com.hospitalbooking.backend.controller;

import com.hospitalbooking.backend.constant.*;
import com.hospitalbooking.backend.models.*;
import com.hospitalbooking.backend.repository.*;
import com.hospitalbooking.backend.specification.DBSpecification;
import org.aspectj.util.FileUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
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
import java.util.*;
import java.util.stream.Collectors;

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
    private AppointmentRepos appointmentRepos;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private Environment env;

    //http://localhost:8080/api/admin-data
    @GetMapping("/admin-data")
    public ResponseEntity initAllData(){
        initAdminData();
        ImportSampleData.importAll(addressRepos, userRepos, doctorRepos, patientRepos, employeeRepos, doctorScheduleRepos, encoder);
        return new ResponseEntity<>("Done !", HttpStatus.OK);
    }

    public void initAdminData() {
        //Department
        Department[] departments = new Department[] {
                new Department((long)1,"Neurosurgery", "Neurosurgery or neurological surgery, known in common parlance as brain surgery, is the medical specialty concerned with the surgical treatment of disorders which affect any portion of the nervous system including the brain, spinal cord and peripheral nervous system", true, false),
                new Department((long)2,"Anesthesiology", "Anesthesiology, anaesthesiology, or anaesthesia is the medical specialty concerned with the total perioperative care of patients before, during and after surgery. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine.", true, false),
                new Department((long)3,"Cardiology", "Cardiology (from Greek ????????????? kardi??, \"heart\" and -?????????? -logia, \"study\") is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology", true, false),
                new Department((long)4,"Dietetics & nutrition", "Nutrition and Dietetics, a subdiscipline of Medicine, is the science that focuses on everything related to food and its effect on our health and overall wellbeing. Nutritionists and dietitians aim to improve people's health and help them make better dietary choices.", true, false),
                new Department((long)5,"Andrology", "Andrology (from Ancient Greek: ?????????, an??r, genitive ?????????????, andros, \"man\"; and -??????????, -logia) is a name for the medical specialty that deals with male health, particularly relating to the problems of the male reproductive system and urological problems that are unique to men.", true, false),
                new Department((long)6,"Gynecology", "Gynaecology or gynecology (see spelling differences) is the area of medicine that involves the treatment of women's diseases, especially those of the reproductive organs. It is often paired with the field of obstetrics, forming the combined area of obstetrics and gynecology (OB-GYN).", true, false),
                new Department((long)7,"Gastroenterology", "Gastroenterology is the branch of medicine focused on the digestive system and its disorders. Advanced endoscopy, sometimes called interventional or surgical endoscopy, is a sub-specialty of gastroenterology that focuses on advanced endoscopic techniques for the treatment of pancreatic, hepatobiliary, and gastrointestinal disease.", true, false),
                new Department((long)8,"Hematology", "Hematology (always spelled haematology in British English) is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood. It involves treating diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, bone marrow, platelets, blood vessels, spleen, and the mechanism of coagulation", true, false),
                new Department((long)9,"Odantology", "Odontology applies the study of teeth to assist in criminal investigations. To enter the odontology field, you typically need to undergo extensive education and training. Understanding the responsibilities of an odontologist can help you decide whether you want to start a career in this field", true, false),
                new Department((long)10,"Ophthalmology", "Ophthalmology (/????f????l??m??l??d??i/)[1] is a branch of medicine that deals with the diagnosis and treatment of eye disorders.[2] An ophthalmologist is a physician who specializes in eye care.[3] The credentials include a degree in medicine, followed by additional four to five years of residency training in ophthalmology", true, false),
                new Department((long)11,"Traumatology & Orthopeclics", "Orthopedic surgery ??? branch of surgery concerned with conditions involving the musculoskeletal system. Orthopedic surgeons use both surgical and nonsurgical means to treat musculoskeletal injuries, sports injuries, degenerative diseases, infections, bone tumours, and congenital limb deformities. Trauma surgery and traumatology is a sub-specialty dealing with the operative management of fractures, major trauma and the multiply-injured patient", true, false)
        };

        ArrayList<Department> savedDepartment = new ArrayList<Department>();
        for (int i = 0; i < departments.length; i++) {
            if(!departmentRepos.existsById((long)i + 1)){
                savedDepartment.add(departmentRepos.save(departments[i]));
            }
        }

        //Admin
        if(!userRepos.existsByUsername("duyle")){
            Address adminAddress =  addressRepos.save(new Address(null, "590 CMT8 ,ph?????ng 11", "70000", "Ho Chi Minh City", "T??n B??nh","Vietnam", false));
            User adminUser = userRepos.save(new User("duyle", encoder.encode("123456789Aa@"), UserRole.ADMIN));
            Employee adminEmployee = employeeRepos.save(new Employee(null, "ed9a1111-1d0d-49d2-9d31-185c7d2c8167", "Duy", "L?? B??", Gender.Male, new Date("1990/05/25"), "administrator@mediap.com", "361-218-1685", null, "https://randomuser.me/api/portraits/men/62.jpg", adminAddress, false, EmployeeRole.ADMIN, true, 10, new Date(), adminUser, true));
        }

        if(!userRepos.existsByUsername("nhulieu")) {
            //Reception
            Address receptionAddress = addressRepos.save(new Address(null, "192 T??? Quang B???u", "70000", "Ho Chi Minh City", "8", "Vietnam", false));
            User receptionUser = userRepos.save(new User("nhulieu", encoder.encode("123456789Aa@"), UserRole.RECEPTIONIST));
            Employee receptionEmployee = employeeRepos.save(new Employee(null, "ed9a5502-1d0d-235y-9d31-185c7d2c8167", "Nh??", "Li??u Qu???nh", Gender.Female, new Date("1994/ 01/ 10"), "lieu.nhu@mediap.com", "706-678-3230", null, "https://healthcareuniformsaustralia.com.au/wp-content/uploads/2019/02/receptionist_portrait.jpg", receptionAddress, false, EmployeeRole.RECEPTIONIST, true, 2, new Date(), receptionUser, true));
        }

        if(!userRepos.existsByUsername("khoale")) {
            //Reception
            Address patientAddress = addressRepos.save(new Address(null, "50 Hu???nh V??n B??nh", "70000", "Ho Chi Minh City", "Ph?? Nhu???n", "Vietnam", false));
            User patientUser = userRepos.save(new User("khoale", encoder.encode("123456789Aa@"), UserRole.PATIENT));
            Patient patient = patientRepos.save(new Patient(null, "ed9a5502-267d-49d2-9d31-156c7d2t8167", "Khoa", "L?? Qu???c Anh", Gender.Male, new Date("1987/ 04/ 23"), "khoa.le@gmail.com", "567-167-6784", null, "https://randomuser.me/api/portraits/men/65.jpg", patientAddress, false, patientUser, null, true));
        }

        if(!userRepos.existsByUsername("bachnguyen")) {
            //Patient
            Address patientAddress = addressRepos.save(new Address(null, "100 Hu???nh V??n B??nh", "70000", "Ho Chi Minh City", "Ph?? Nhu???n", "Vietnam", false));
            User patientUser = userRepos.save(new User("bachnguyen", encoder.encode("123456789Aa@"), UserRole.PATIENT));
            Patient patient = patientRepos.save(new Patient(null, "f5fffa8f-2f80-4250-8bd4-76t982f5b48c", "B???ch", "Nguy???n Thanh", Gender.Male, new Date("1997/04/23"), "bach.nguyen@gmail.com", "675-890-3674", null, "https://randomuser.me/api/portraits/men/63.jpg", patientAddress, false, patientUser, null, true));
        }

        if(!userRepos.existsByUsername("nguyenphuc")) {
            Address doctorAddress = addressRepos.save(new Address(null, "69 Tr?????ng Sa",  "70000", "Ho Chi Minh City", "T??n B??nh", "Vietnam", false));
            User doctorUser = userRepos.save(new User("nguyenphuc", encoder.encode("123456789Aa@"), UserRole.DOCTOR));
            Employee doctorEmployee = employeeRepos.save(new Employee(null, "e2eeda8f-4f23-4250-1bd4-76a982f5b48c", "Ph??c", "Nguy???n Thi??n", Gender.Male, new Date("1997/05/10"), "nguyen.phuc@mediap.com", "189-678-4518", null, "https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 8, new Date(), doctorUser));
            Doctor doctor = doctorRepos.save(new Doctor(null, "", savedDepartment.get(0), doctorEmployee, null, null, null, null, false, true));
        }
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

    @GetMapping("/dashboard-info")
    public ResponseEntity dashboardInfo() {
        long totalPatient = patientRepos.count(DBSpecification.createSpecification(Boolean.FALSE));
        long totalDoctor = doctorRepos.count(DBSpecification.createSpecification(Boolean.FALSE));
        long totalEmployee = employeeRepos.count(DBSpecification.createSpecification(Boolean.FALSE));
        Specification<?> spec1 = DBSpecification.createSpecification(Boolean.FALSE)
                .and((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("status"), AppointmentStatus.PENDING));
        int totalAppointment = appointmentRepos.findAll(spec1).size();

        int[] dataPatientYear = {0,0,0,0,0,0,0,0,0,0,0,0};

        Specification<?> spec2 = DBSpecification.createSpecification(Boolean.FALSE);
        List<Patient> patients = patientRepos.findAll(spec2);
        patients.forEach(patient -> {
            for (int i = 0; i < 12; i++) {
                if (patient.getCreatedAt().getMonth() == i) {
                    dataPatientYear[i]++;
                }
            }
        });

        int[] dataPatientMonth = new int[30];
        for(int i = 0; i < 30; i++){
            dataPatientMonth[i] = 0;
        }

        List<Patient> patientMonth = patientRepos.findAll(spec2);
        patientMonth.forEach(patient -> {
            for(int j = 0; j < 30; j++) {
                if (patient.getCreatedAt().getDate() == j+1 && patient.getCreatedAt().getMonth() == 5) {
                    dataPatientMonth[j]++;
                }
            }
        });

        Pageable pageable = PageRequest.of(0, 5, Sort.Direction.DESC, "createdAt").first();
        Page<Appointment> top5NewAppointment = appointmentRepos.findAll(spec1, pageable);

        Specification<?> docSpec = DBSpecification.createSpecification(Boolean.FALSE);
        List<Doctor> doctors = doctorRepos.findAll(docSpec);
        doctors = doctors.stream().filter(doctor -> doctor.getDoctorSchedules().stream().anyMatch(doctorSchedule -> doctorSchedule.getAvailableDays().contains(String.valueOf(new Date().getDay())))).collect(Collectors.toList());

        Specification<?> patSpec = DBSpecification.createSpecification(Boolean.FALSE);
        List<Patient> newPatients = patientRepos.findAll(patSpec);
        newPatients = newPatients.stream().filter(patient -> patient.getCreatedAt().getMonth() == Calendar.JULY).collect(Collectors.toList());

        Specification<?> empSpec = DBSpecification.createSpecification(Boolean.FALSE);
        float countAllEmployee = employeeRepos.count(empSpec);

        float countDoctor = (doctorRepos.count(empSpec)*100)/countAllEmployee;

        Specification<?> recepSpec = DBSpecification.createSpecification(Boolean.FALSE).and((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("employeeRole"), EmployeeRole.RECEPTIONIST));
        float countReceptionist = (employeeRepos.count(recepSpec)*100)/countAllEmployee;

        Specification<?> nurseSpec = DBSpecification.createSpecification(Boolean.FALSE).and((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("employeeRole"), EmployeeRole.NURSE));
        float countNurse = (employeeRepos.count(nurseSpec)*100)/countAllEmployee;

        Specification<?> accountantSpec = DBSpecification.createSpecification(Boolean.FALSE).and((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("employeeRole"), EmployeeRole.ACCOUNTANT));
        float countAccountant = (employeeRepos.count(accountantSpec)*100)/countAllEmployee;

        float countOther = 100 - countDoctor - countReceptionist - countNurse - countAccountant;

        return new ResponseEntity(new DashboardInfo((int)totalPatient, (int)totalEmployee, (int)totalDoctor, totalAppointment, dataPatientMonth, dataPatientYear, top5NewAppointment, newPatients, doctors, countDoctor, countReceptionist, countNurse, countAccountant, countOther), HttpStatus.OK);
    }
}
