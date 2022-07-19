package com.hospitalbooking.backend.constant;

import com.hospitalbooking.backend.models.*;
import com.hospitalbooking.backend.repository.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;

public class ImportSampleData {
    public static void importAll(AddressRepos addressRepos, UserRepos userRepos, DoctorRepos doctorRepos, PatientRepos patientRepos, EmployeeRepos employeeRepos, DoctorScheduleRepos doctorScheduleRepos, PasswordEncoder encoder){
        {
            if(!userRepos.existsByUsername("patientuser0")) {
                Address patientAddress = addressRepos.save(new Address(null, "6605 Arups gate", "1726", "Aust-Agder", "Avaldsnes", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser0", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "7932a001-0290-4681-8bd8-75cccef31599", "Julianne", "Myrdal", "Female", new Date("1977/10/04"), "patient.julianne.myrdal@example.com", "48086815", null, "https://randomuser.me/api/portraits/women/91.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser1")) {
                Address patientAddress = addressRepos.save(new Address(null, "4433 Schlossstraße", "59620", "Sachsen", "Cottbus/Chosebuz", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser1", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "ed9a5502-1d0d-49d2-9d31-185c7d2c8167", "Jaroslav", "Hierl", "Male", new Date("1985/07/24"), "patient.jaroslav.hierl@example.com", "0175-7374265", null, "https://randomuser.me/api/portraits/men/26.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser2")) {
                Address patientAddress = addressRepos.save(new Address(null, "1733 Victoria Ave", "I3Z 1P9", "Québec", "Belmont", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser2", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "e2eefa8f-4f80-4250-8bd4-76a982f5b48c", "Thomas", "Ambrose", "Male", new Date("1950/04/26"), "patient.thomas.ambrose@example.com", "Y45 T29-1990", null, "https://randomuser.me/api/portraits/men/11.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser3")) {
                Address patientAddress = addressRepos.save(new Address(null, "8098 Fliederweg", "90407", "Hamburg", "Laupheim", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser3", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "64993167-3d09-42e1-8ef3-4cc4f497f5c8", "Moritz", "Griese", "Male", new Date("1950/06/18"), "patient.moritz.griese@example.com", "0174-7019689", null, "https://randomuser.me/api/portraits/men/69.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser4")) {
                Address patientAddress = addressRepos.save(new Address(null, "8254 Singasteinveien", "5031", "Nord-Trøndelag", "Jevnaker", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser4", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "2b48f1d1-87db-4ad4-ab3f-78b4f2fe0b49", "Martyna", "Trøan", "Female", new Date("1972/09/28"), "patient.martyna.troan@example.com", "46123127", null, "https://randomuser.me/api/portraits/women/71.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser5")) {
                Address patientAddress = addressRepos.save(new Address(null, "4655 Rue Louis-Blanqui", "39496", "Landes", "Créteil", "France", false));
                User patientUser = userRepos.save(new User("patientuser5", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "9d5f72bc-f271-46f5-a2fe-2265fbd64c22", "Théodore", "Girard", "Male", new Date("1953/12/12"), "patient.theodore.girard@example.com", "06-93-26-21-97", null, "https://randomuser.me/api/portraits/men/87.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser6")) {
                Address patientAddress = addressRepos.save(new Address(null, "2154 Mcclellan Rd", "5594", "Western Australia", "Townsville", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser6", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "aa0a7b45-65e7-498c-9515-2a3d138236fb", "Carolyn", "Gregory", "Female", new Date("1946/11/02"), "patient.carolyn.gregory@example.com", "0415-158-077", null, "https://randomuser.me/api/portraits/women/43.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser7")) {
                Address patientAddress = addressRepos.save(new Address(null, "7344 Micheletveien", "5281", "Aust-Agder", "Strømsnes", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser7", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "20aea85d-a696-499f-a3ed-24d838562001", "Susanna", "Uthaug", "Female", new Date("1946/05/30"), "patient.susanna.uthaug@example.com", "48218033", null, "https://randomuser.me/api/portraits/women/27.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser8")) {
                Address patientAddress = addressRepos.save(new Address(null, "6854 W Pecan St", "9399", "Tasmania", "Hobart", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser8", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "281400a7-876c-4e06-a90a-6d16388929fd", "Daisy", "Little", "Female", new Date("1989/09/12"), "patient.daisy.little@example.com", "0465-431-472", null, "https://randomuser.me/api/portraits/women/13.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser9")) {
                Address patientAddress = addressRepos.save(new Address(null, "7404 Park Lane", "47277", "Waterford", "Portlaoise", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser9", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "ca06cbe0-6d40-4f35-956f-29e07b45c575", "Brittany", "Gibson", "Female", new Date("1969/09/07"), "patient.brittany.gibson@example.com", "081-552-4119", null, "https://randomuser.me/api/portraits/women/39.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser10")) {
                Address patientAddress = addressRepos.save(new Address(null, "4176 Concession Road 6", "Y9X 3U4", "Yukon", "Sutton", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser10", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "a371c311-1cae-4295-a9e8-719b591c8d41", "Hunter", "Bélanger", "Male", new Date("1983/08/30"), "patient.hunter.belanger@example.com", "B59 P15-7658", null, "https://randomuser.me/api/portraits/men/43.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser11")) {
                Address patientAddress = addressRepos.save(new Address(null, "5972 Jørgen Moes gate", "8603", "Sogn og Fjordane", "Tælavåg", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser11", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "7b02f9df-1175-4dae-9cdc-57414e182e8f", "Lilje", "Smith", "Female", new Date("1993/01/30"), "patient.lilje.smith@example.com", "92440993", null, "https://randomuser.me/api/portraits/women/84.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser12")) {
                Address patientAddress = addressRepos.save(new Address(null, "6254 Johan Evjes vei", "8901", "Møre og Romsdal", "Ringvoll", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser12", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "38c2039e-9079-4b6f-847e-600b14534b68", "Finn", "Wang", "Male", new Date("1957/06/21"), "patient.finn.wang@example.com", "41191647", null, "https://randomuser.me/api/portraits/men/34.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser13")) {
                Address patientAddress = addressRepos.save(new Address(null, "9939 Pine Rd", "V3C 9A3", "Nova Scotia", "Hudson", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser13", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "e657e485-bdd5-4fb4-bc90-5233d6f9b029", "Marilou", "Mackay", "Female", new Date("1996/08/12"), "patient.marilou.mackay@example.com", "P42 A28-6638", null, "https://randomuser.me/api/portraits/women/43.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser14")) {
                Address patientAddress = addressRepos.save(new Address(null, "2024 Rolling Green Rd", "2719", "South Australia", "Devonport", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser14", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "fcead67e-e549-441f-8ef2-d75d6ce25893", "Bernice", "Green", "Female", new Date("1966/02/19"), "patient.bernice.green@example.com", "0474-436-613", null, "https://randomuser.me/api/portraits/women/8.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser15")) {
                Address patientAddress = addressRepos.save(new Address(null, "8809 Homestead Rd", "80893", "North Carolina", "Akron", "United States", false));
                User patientUser = userRepos.save(new User("patientuser15", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "f64be84d-e821-4c80-a385-f2fd06792248", "Neil", "Perry", "Male", new Date("1975/10/20"), "patient.neil.perry@example.com", "(707) 695-9623", null, "https://randomuser.me/api/portraits/men/98.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser16")) {
                Address patientAddress = addressRepos.save(new Address(null, "5934 St. Catherine St", "A9N 9F1", "New Brunswick", "Stratford", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser16", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "902838d1-bbca-49d5-b3a7-85dee99b8c15", "Sophie", "Patel", "Female", new Date("1971/09/27"), "patient.sophie.patel@example.com", "Q09 I09-2137", null, "https://randomuser.me/api/portraits/women/52.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser17")) {
                Address patientAddress = addressRepos.save(new Address(null, "8148 N Stelling Rd", "3255", "New South Wales", "Bathurst", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser17", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "49735c9d-3384-42aa-ad62-034877ee3123", "Annie", "Lawrence", "Female", new Date("1992/08/29"), "patient.annie.lawrence@example.com", "0443-235-517", null, "https://randomuser.me/api/portraits/women/42.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser18")) {
                Address patientAddress = addressRepos.save(new Address(null, "441 Dogwood Ave", "20309", "Minnesota", "Cary", "United States", false));
                User patientUser = userRepos.save(new User("patientuser18", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "1d155b9c-f38e-4cae-bb2f-ee98b27b21ee", "Jacob", "Rose", "Male", new Date("1957/11/08"), "patient.jacob.rose@example.com", "(523) 928-5733", null, "https://randomuser.me/api/portraits/men/56.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser19")) {
                Address patientAddress = addressRepos.save(new Address(null, "5841 Highfield Road", "68913", "Monaghan", "Kildare", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser19", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "d77d7ece-26f5-4623-a23a-86527c35fbd9", "Ron", "Brown", "Male", new Date("1993/01/19"), "patient.ron.brown@example.com", "081-159-6496", null, "https://randomuser.me/api/portraits/men/59.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser20")) {
                Address patientAddress = addressRepos.save(new Address(null, "1368 Quai Chauveau", "80857", "Ardèche", "Tourcoing", "France", false));
                User patientUser = userRepos.save(new User("patientuser20", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "c3f4e257-2b9c-4e6a-8c6d-df7721831075", "Malone", "Leroy", "Male", new Date("1986/03/27"), "patient.malone.leroy@example.com", "06-97-68-05-71", null, "https://randomuser.me/api/portraits/men/8.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser21")) {
                Address patientAddress = addressRepos.save(new Address(null, "8335 Tunveien", "1449", "Buskerud", "Gran", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser21", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "a17e6e40-9d02-4c88-8622-f49595907062", "Millian", "Horten", "Male", new Date("1978/11/04"), "patient.millian.horten@example.com", "99927158", null, "https://randomuser.me/api/portraits/men/76.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser22")) {
                Address patientAddress = addressRepos.save(new Address(null, "8006 Raiffeisenstraße", "60668", "Berlin", "Nassau", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser22", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "5ee9ddfc-1dd9-410c-9bbd-96e4f5ab6960", "Cilly", "Kehl", "Female", new Date("1979/06/29"), "patient.cilly.kehl@example.com", "0179-1321599", null, "https://randomuser.me/api/portraits/women/5.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser23")) {
                Address patientAddress = addressRepos.save(new Address(null, "5979 Boghall Road", "46148", "Dún Laoghaire–Rathdown", "Castlebar", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser23", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "0e1e409f-928c-498d-abee-5bc46da77c22", "Isabelle", "Woods", "Female", new Date("1949/04/12"), "patient.isabelle.woods@example.com", "081-991-2828", null, "https://randomuser.me/api/portraits/women/69.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser24")) {
                Address patientAddress = addressRepos.save(new Address(null, "4357 Dundas Rd", "O7J 8U2", "Québec", "Victoria", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser24", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "32060388-ef07-4bdd-aacc-c496e56efee5", "Emile", "Roy", "Male", new Date("1995/07/18"), "patient.emile.roy@example.com", "L63 X97-2798", null, "https://randomuser.me/api/portraits/men/34.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser25")) {
                Address patientAddress = addressRepos.save(new Address(null, "6167 Mockingbird Hill", "6422", "Western Australia", "Bathurst", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser25", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "6a8cbe96-ebfa-4fa7-a03d-5f894f4ba25b", "Melanie", "West", "Female", new Date("1969/08/09"), "patient.melanie.west@example.com", "0460-419-045", null, "https://randomuser.me/api/portraits/women/9.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser26")) {
                Address patientAddress = addressRepos.save(new Address(null, "9690 Am Sportplatz", "54910", "Thüringen", "Greven", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser26", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "ad4fa097-6293-4770-bf5d-e414e6a6a673", "Wolf-Rüdiger", "Guhl", "Male", new Date("1985/05/09"), "patient.wolf-rudiger.guhl@example.com", "0174-5827848", null, "https://randomuser.me/api/portraits/men/0.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser27")) {
                Address patientAddress = addressRepos.save(new Address(null, "6019 Parker Rd", "4741", "South Australia", "Hobart", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser27", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "bdaa3c7d-46f0-4a48-b753-f5f6f2aa2c01", "Mary", "Berry", "Female", new Date("1954/06/07"), "patient.mary.berry@example.com", "0472-557-191", null, "https://randomuser.me/api/portraits/women/52.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser28")) {
                Address patientAddress = addressRepos.save(new Address(null, "8274 Wellington St", "A8R 2V6", "New Brunswick", "Richmond", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser28", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "2b7b1e8c-c97d-4fb7-b5f4-0489f41e0ddf", "Marilou", "Grewal", "Female", new Date("2000/08/19"), "patient.marilou.grewal@example.com", "F09 Z76-2270", null, "https://randomuser.me/api/portraits/women/64.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser29")) {
                Address patientAddress = addressRepos.save(new Address(null, "9880 Balmoral St", "J7I 1Y6", "Alberta", "Deer Lake", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser29", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "a2a25ea7-7a89-4b4f-88e9-6304da95c3be", "Philip", "Addy", "Male", new Date("1976/04/12"), "patient.philip.addy@example.com", "I11 I75-4819", null, "https://randomuser.me/api/portraits/men/60.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser30")) {
                Address patientAddress = addressRepos.save(new Address(null, "1292 Homestead Rd", "80393", "South Carolina", "Knoxville", "United States", false));
                User patientUser = userRepos.save(new User("patientuser30", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "d74e2b12-0063-4610-90db-968b5171ab17", "Marilyn", "Lee", "Female", new Date("1993/12/26"), "patient.marilyn.lee@example.com", "(585) 857-2702", null, "https://randomuser.me/api/portraits/women/48.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser31")) {
                Address patientAddress = addressRepos.save(new Address(null, "6454 Prospect Rd", "98800", "Maine", "Shiloh", "United States", false));
                User patientUser = userRepos.save(new User("patientuser31", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "dcc5e046-4e6f-4ead-9184-d5ce314f47b4", "Misty", "Turner", "Female", new Date("1970/12/27"), "patient.misty.turner@example.com", "(483) 988-4482", null, "https://randomuser.me/api/portraits/women/84.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser32")) {
                Address patientAddress = addressRepos.save(new Address(null, "2761 Montebelloveien", "2609", "Vest-Agder", "Brønnsletten", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser32", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "2cf4a4ad-4cd3-4f3f-a02f-7eaff4a6ee1c", "Linus", "Holmedal", "Male", new Date("1962/06/29"), "patient.linus.holmedal@example.com", "49791105", null, "https://randomuser.me/api/portraits/men/88.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser33")) {
                Address patientAddress = addressRepos.save(new Address(null, "227 Concession Road 23", "S5O 1S1", "Nova Scotia", "Inverness", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser33", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "6faca893-f73b-4940-853d-5766354dbd04", "Gabriel", "Chan", "Male", new Date("1953/05/21"), "patient.gabriel.chan@example.com", "J65 P10-1073", null, "https://randomuser.me/api/portraits/men/43.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser34")) {
                Address patientAddress = addressRepos.save(new Address(null, "4178 Mühlenstraße", "37890", "Hessen", "Nordhorn", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser34", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "f84cc184-04c3-4315-b326-4374a4d61f04", "Dursun", "Balzer", "Male", new Date("1969/12/23"), "patient.dursun.balzer@example.com", "0172-4703854", null, "https://randomuser.me/api/portraits/men/71.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser35")) {
                Address patientAddress = addressRepos.save(new Address(null, "4805 Blossom Hill Rd", "3771", "Queensland", "Devonport", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser35", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "15363b59-3949-4f2e-b63b-b56f99c74e96", "Connor", "Steward", "Male", new Date("1953/03/08"), "patient.connor.steward@example.com", "0494-015-879", null, "https://randomuser.me/api/portraits/men/93.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser36")) {
                Address patientAddress = addressRepos.save(new Address(null, "9855 James St", "90469", "Virginia", "Bakersfield", "United States", false));
                User patientUser = userRepos.save(new User("patientuser36", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "f9ce0bbb-1c66-45a9-a581-bdee3514a3bb", "Alexander", "King", "Male", new Date("1978/04/27"), "patient.alexander.king@example.com", "(513) 441-5821", null, "https://randomuser.me/api/portraits/men/1.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser37")) {
                Address patientAddress = addressRepos.save(new Address(null, "3388 Saddle Dr", "79020", "New York", "Rio Rancho", "United States", false));
                User patientUser = userRepos.save(new User("patientuser37", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "60acbb20-c3ec-4698-a4d4-f1128181fe5a", "Minnie", "Thompson", "Female", new Date("1960/09/06"), "patient.minnie.thompson@example.com", "(346) 864-6217", null, "https://randomuser.me/api/portraits/women/76.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser38")) {
                Address patientAddress = addressRepos.save(new Address(null, "6682 Siriusveien", "0692", "Aust-Agder", "Hemnesberget", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser38", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "3595cb1b-9f9f-4a36-acd2-003099afb729", "Rawan", "Sirevåg", "Female", new Date("1978/08/16"), "patient.rawan.sirevag@example.com", "98440791", null, "https://randomuser.me/api/portraits/women/56.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser39")) {
                Address patientAddress = addressRepos.save(new Address(null, "6331 Fairview St", "9638", "New South Wales", "Devonport", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser39", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "42d6af6d-66ab-4ae2-bd58-637871867c64", "Miriam", "Payne", "Female", new Date("1949/03/20"), "patient.miriam.payne@example.com", "0469-481-411", null, "https://randomuser.me/api/portraits/women/46.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser40")) {
                Address patientAddress = addressRepos.save(new Address(null, "3301 Rue de Bonnel", "14337", "Sarthe", "Villeurbanne", "France", false));
                User patientUser = userRepos.save(new User("patientuser40", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "e16a0f50-f416-4ce8-ab72-461b2b956728", "Oscar", "Da Silva", "Male", new Date("1971/03/11"), "patient.oscar.dasilva@example.com", "06-50-04-94-20", null, "https://randomuser.me/api/portraits/men/61.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser41")) {
                Address patientAddress = addressRepos.save(new Address(null, "6483 Ringstraße", "83193", "Baden-Württemberg", "Königswinter", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser41", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "fe59c2f5-38ea-47e4-9428-3f4934e33d92", "Cord", "Fellner", "Male", new Date("1945/02/11"), "patient.cord.fellner@example.com", "0178-6476262", null, "https://randomuser.me/api/portraits/men/27.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser42")) {
                Address patientAddress = addressRepos.save(new Address(null, "6884 Drosselweg", "17272", "Saarland", "Gefrees", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser42", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "c5977f7a-4676-428b-85aa-e841d9a8cedb", "Gerlind", "Ackermann", "Female", new Date("1988/11/22"), "patient.gerlind.ackermann@example.com", "0177-6933267", null, "https://randomuser.me/api/portraits/women/13.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser43")) {
                Address patientAddress = addressRepos.save(new Address(null, "9398 Lakeview Ave", "S7P 9Z0", "Yukon", "Chesterville", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser43", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "b2350e8f-32be-4183-8d82-2df2ffcffcb1", "Dylan", "Slawa", "Male", new Date("1963/12/31"), "patient.dylan.slawa@example.com", "D60 Z06-8046", null, "https://randomuser.me/api/portraits/men/53.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser44")) {
                Address patientAddress = addressRepos.save(new Address(null, "7794 Waldstraße", "96414", "Niedersachsen", "Nortorf", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser44", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "a51c717a-cd66-4bda-a4ff-687436882c21", "Chantal", "Dahmen", "Female", new Date("1962/11/26"), "patient.chantal.dahmen@example.com", "0174-4217977", null, "https://randomuser.me/api/portraits/women/29.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser45")) {
                Address patientAddress = addressRepos.save(new Address(null, "8125 Rosteds gate", "1418", "Vest-Agder", "Skatval", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser45", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "72fdb4a7-7c70-4227-9ef2-49830754a4a8", "Linda", "Bøhler", "Female", new Date("1952/08/26"), "patient.linda.bohler@example.com", "49860351", null, "https://randomuser.me/api/portraits/women/35.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser46")) {
                Address patientAddress = addressRepos.save(new Address(null, "7487 Kobbernaglen", "4534", "Nord-Trøndelag", "Vossevangen", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser46", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "19993b9c-3c51-44c7-9163-5f3e8c5579b2", "Nanna", "Brunstad", "Female", new Date("1989/05/07"), "patient.nanna.brunstad@example.com", "47781791", null, "https://randomuser.me/api/portraits/women/23.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser47")) {
                Address patientAddress = addressRepos.save(new Address(null, "9714 Königsberger Straße", "34344", "Baden-Württemberg", "Gelsenkirchen", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser47", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "32934d1c-957a-4a68-b875-349e9b3846f7", "Hubertus", "Meiser", "Male", new Date("1995/12/10"), "patient.hubertus.meiser@example.com", "0171-4214218", null, "https://randomuser.me/api/portraits/men/6.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser48")) {
                Address patientAddress = addressRepos.save(new Address(null, "8117 Raiffeisenstraße", "86793", "Bremen", "Wörth an der Donau", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser48", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "8d0913fd-ce1f-419e-b7fb-0bd2bc1e699c", "Henri", "Fey", "Male", new Date("1999/08/16"), "patient.henri.fey@example.com", "0174-9880827", null, "https://randomuser.me/api/portraits/men/40.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser49")) {
                Address patientAddress = addressRepos.save(new Address(null, "5941 Hellerudsvingen", "3719", "Finnmark - Finnmárku", "Åsgrenda", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser49", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "e1ca213a-9f4d-4d17-8685-37449b51e409", "Viola", "Ryeng", "Female", new Date("1967/01/28"), "patient.viola.ryeng@example.com", "95054912", null, "https://randomuser.me/api/portraits/women/89.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser50")) {
                Address patientAddress = addressRepos.save(new Address(null, "9527 Pearse Street", "47877", "South Dublin", "Ennis", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser50", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "a4dfbad1-8c23-4e50-b15b-54a51de32d03", "Abigail", "Carlson", "Female", new Date("1980/03/17"), "patient.abigail.carlson@example.com", "081-820-3504", null, "https://randomuser.me/api/portraits/women/39.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser51")) {
                Address patientAddress = addressRepos.save(new Address(null, "5532 W Sherman Dr", "9081", "Victoria", "Kalgoorlie", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser51", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "d82199d8-c450-4906-aa93-c8797ac62ffe", "Roland", "Davis", "Male", new Date("1978/06/19"), "patient.roland.davis@example.com", "0435-399-288", null, "https://randomuser.me/api/portraits/men/30.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser52")) {
                Address patientAddress = addressRepos.save(new Address(null, "148 Hauptstraße", "59314", "Niedersachsen", "Stadtallendorf", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser52", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "39d721b2-606c-4c92-9a00-35ddacf5bd83", "Magnus", "Pelzer", "Male", new Date("1974/03/20"), "patient.magnus.pelzer@example.com", "0176-7210291", null, "https://randomuser.me/api/portraits/men/96.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser53")) {
                Address patientAddress = addressRepos.save(new Address(null, "4294 Church Street", "37624", "Donegal", "Skerries", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser53", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "229d9707-3db4-4136-94e1-5429efbfd2f6", "Karen", "Smythe", "Female", new Date("1970/11/17"), "patient.karen.smythe@example.com", "081-126-8649", null, "https://randomuser.me/api/portraits/women/75.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser54")) {
                Address patientAddress = addressRepos.save(new Address(null, "1372 E Little York Rd", "8221", "Queensland", "Bendigo", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser54", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "19033660-3c3b-4a0a-8568-76b70fda11b8", "Rene", "Chapman", "Male", new Date("1997/08/14"), "patient.rene.chapman@example.com", "0448-482-132", null, "https://randomuser.me/api/portraits/men/99.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser55")) {
                Address patientAddress = addressRepos.save(new Address(null, "9712 Dane St", "13642", "Nebraska", "Henderson", "United States", false));
                User patientUser = userRepos.save(new User("patientuser55", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "c59ecff1-4d3d-4ca9-a0bd-934c567ec44f", "Claire", "Lopez", "Female", new Date("2001/03/16"), "patient.claire.lopez@example.com", "(790) 766-9952", null, "https://randomuser.me/api/portraits/women/93.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser56")) {
                Address patientAddress = addressRepos.save(new Address(null, "4873 Pockrus Page Rd", "20941", "Rhode Island", "Coppell", "United States", false));
                User patientUser = userRepos.save(new User("patientuser56", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "c0ab658d-8d13-4f0d-86e3-5294241d5977", "Jimmy", "Collins", "Male", new Date("1981/08/01"), "patient.jimmy.collins@example.com", "(914) 582-8906", null, "https://randomuser.me/api/portraits/men/18.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser57")) {
                Address patientAddress = addressRepos.save(new Address(null, "5873 Rue Cyrus-Hugues", "62368", "Seine-Maritime", "Mulhouse", "France", false));
                User patientUser = userRepos.save(new User("patientuser57", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "eeb4bfd6-6c78-4c1e-98b5-ec4bbafb2981", "Gaspard", "Guillot", "Male", new Date("1962/09/03"), "patient.gaspard.guillot@example.com", "06-01-52-31-63", null, "https://randomuser.me/api/portraits/men/70.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser58")) {
                Address patientAddress = addressRepos.save(new Address(null, "1911 Rue Laure-Diebold", "44893", "Calvados", "Colombes", "France", false));
                User patientUser = userRepos.save(new User("patientuser58", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "2e5042f1-9e49-48a5-a26e-a47b1ba78d63", "Mélody", "Robin", "Female", new Date("1973/06/25"), "patient.melody.robin@example.com", "06-83-90-00-28", null, "https://randomuser.me/api/portraits/women/79.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser59")) {
                Address patientAddress = addressRepos.save(new Address(null, "8 Kastanienweg", "48578", "Thüringen", "Rottenburg A.D.Laaber", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser59", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "b162f178-a8ee-44cc-a3a1-1f4ef05f7546", "Imke", "Wüst", "Female", new Date("1969/06/26"), "patient.imke.wust@example.com", "0172-9603291", null, "https://randomuser.me/api/portraits/women/93.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser60")) {
                Address patientAddress = addressRepos.save(new Address(null, "56 Rue de Bonnel", "46482", "Côtes-D'Armor", "Fort-de-France", "France", false));
                User patientUser = userRepos.save(new User("patientuser60", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "3765ffca-6578-48ce-8bf0-e4b6c7f8c079", "Tristan", "Le Gall", "Male", new Date("1982/05/30"), "patient.tristan.legall@example.com", "06-19-67-94-78", null, "https://randomuser.me/api/portraits/men/9.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser61")) {
                Address patientAddress = addressRepos.save(new Address(null, "2617 Ringstraße", "63818", "Hamburg", "Dinklage", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser61", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "be7efecc-ea16-4099-b978-c07c52a70b58", "Guntram", "Eisele", "Male", new Date("1976/09/06"), "patient.guntram.eisele@example.com", "0172-7050111", null, "https://randomuser.me/api/portraits/men/6.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser62")) {
                Address patientAddress = addressRepos.save(new Address(null, "8435 Dieppe Ave", "W5N 4G2", "Ontario", "Dorchester", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser62", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "d863b32c-8e6e-46e2-a02b-488b2f290faf", "Delphine", "Macdonald", "Female", new Date("1978/06/04"), "patient.delphine.macdonald@example.com", "Q02 E27-0624", null, "https://randomuser.me/api/portraits/women/15.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser63")) {
                Address patientAddress = addressRepos.save(new Address(null, "71 Rue Baraban", "10897", "Val-D'Oise", "Grenoble", "France", false));
                User patientUser = userRepos.save(new User("patientuser63", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "c777ac60-4dfb-4405-9092-b9898c7c8c9b", "Flora", "Blanc", "Female", new Date("1965/07/30"), "patient.flora.blanc@example.com", "06-35-32-34-10", null, "https://randomuser.me/api/portraits/women/70.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser64")) {
                Address patientAddress = addressRepos.save(new Address(null, "6334 Hillcrest Rd", "88760", "Oregon", "Lubbock", "United States", false));
                User patientUser = userRepos.save(new User("patientuser64", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "8dfda131-43c0-483e-b0ff-c934c14f0ebd", "Alicia", "Taylor", "Female", new Date("1999/09/09"), "patient.alicia.taylor@example.com", "(747) 858-5966", null, "https://randomuser.me/api/portraits/women/84.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser65")) {
                Address patientAddress = addressRepos.save(new Address(null, "3217 St. Catherine St", "S8C 1I9", "Newfoundland and Labrador", "Bath", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser65", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "2ecb3990-d1e9-4ddc-9703-698426a71b7d", "Megan", "Taylor", "Female", new Date("1956/10/10"), "patient.megan.taylor@example.com", "G23 E67-0565", null, "https://randomuser.me/api/portraits/women/62.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser66")) {
                Address patientAddress = addressRepos.save(new Address(null, "6482 Lerchenweg", "36564", "Thüringen", "Dinklage", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser66", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "304e1fc4-9af4-427d-a4a2-da88979a1cc6", "Lothar", "Munz", "Male", new Date("1990/10/14"), "patient.lothar.munz@example.com", "0174-3126223", null, "https://randomuser.me/api/portraits/men/84.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser67")) {
                Address patientAddress = addressRepos.save(new Address(null, "3651 Photinia Ave", "8170", "Queensland", "Perth", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser67", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "3a96e9f4-200a-4b58-b992-a5d0d5987f9c", "Constance", "Weaver", "Female", new Date("1963/09/12"), "patient.constance.weaver@example.com", "0408-089-346", null, "https://randomuser.me/api/portraits/women/61.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser68")) {
                Address patientAddress = addressRepos.save(new Address(null, "2071 Parker Rd", "21867", "Alaska", "Plano", "United States", false));
                User patientUser = userRepos.save(new User("patientuser68", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "22176443-2bda-4988-9d13-eb4eced52740", "Ken", "Kelley", "Male", new Date("1968/04/02"), "patient.ken.kelley@example.com", "(834) 914-6024", null, "https://randomuser.me/api/portraits/men/29.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser69")) {
                Address patientAddress = addressRepos.save(new Address(null, "1560 Beethovenstraße", "26749", "Bayern", "Rödermark", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser69", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "51647f66-8682-4121-b2de-3be62601e68a", "Kristina", "Hofmeister", "Female", new Date("1995/11/29"), "patient.kristina.hofmeister@example.com", "0177-5549834", null, "https://randomuser.me/api/portraits/women/26.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser70")) {
                Address patientAddress = addressRepos.save(new Address(null, "6962 Station Road", "73593", "Limerick", "Ashbourne", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser70", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "d57a1ea5-af43-42ff-a0ea-3d985c0ef240", "Phil", "Omahony", "Male", new Date("1958/10/14"), "patient.phil.omahony@example.com", "081-673-1800", null, "https://randomuser.me/api/portraits/men/84.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser71")) {
                Address patientAddress = addressRepos.save(new Address(null, "5197 Richmond Park", "83201", "Mayo", "Carlow", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser71", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "ef9cccfb-bdbd-476d-ade8-d8e947eb1938", "Danielle", "Jones", "Female", new Date("1990/07/24"), "patient.danielle.jones@example.com", "081-478-5663", null, "https://randomuser.me/api/portraits/women/66.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser72")) {
                Address patientAddress = addressRepos.save(new Address(null, "2071 Bernhard Getz' gate", "5561", "Troms - Romsa", "Sistranda", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser72", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "5225c96d-2ebd-4af8-a39b-77c8a8d6b152", "Hasan", "Sundal", "Male", new Date("1992/07/15"), "patient.hasan.sundal@example.com", "96906675", null, "https://randomuser.me/api/portraits/men/5.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser73")) {
                Address patientAddress = addressRepos.save(new Address(null, "797 Beethovenstraße", "72277", "Sachsen-Anhalt", "Kandern", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser73", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "f68371aa-1fea-4fca-a651-233ba09d8a1a", "Fredi", "Eichinger", "Male", new Date("1988/01/06"), "patient.fredi.eichinger@example.com", "0171-3181590", null, "https://randomuser.me/api/portraits/men/58.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser74")) {
                Address patientAddress = addressRepos.save(new Address(null, "78 Edwards Rd", "9750", "South Australia", "Queanbeyan", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser74", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "3f41ba1d-365e-4b75-a76b-7ad149736f31", "Travis", "Schmidt", "Male", new Date("1969/06/02"), "patient.travis.schmidt@example.com", "0454-591-705", null, "https://randomuser.me/api/portraits/men/91.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser75")) {
                Address patientAddress = addressRepos.save(new Address(null, "9459 Maple Ave", "C9W 3Y3", "Newfoundland and Labrador", "Winfield", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser75", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "b453ae65-1cce-41e8-8ca0-646745a13f56", "Victoria", "Li", "Female", new Date("1985/09/24"), "patient.victoria.li@example.com", "I89 D80-8294", null, "https://randomuser.me/api/portraits/women/30.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser76")) {
                Address patientAddress = addressRepos.save(new Address(null, "4573 Rue Bataille", "39144", "Cantal", "Paris", "France", false));
                User patientUser = userRepos.save(new User("patientuser76", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "853c3544-a934-4975-95d5-2281b6b5f826", "Maëlys", "Bernard", "Female", new Date("1988/10/08"), "patient.maelys.bernard@example.com", "06-01-29-19-97", null, "https://randomuser.me/api/portraits/women/5.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser77")) {
                Address patientAddress = addressRepos.save(new Address(null, "3092 Lysebuveien", "3026", "Akershus", "Ilseng", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser77", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "a8a8d735-7f9a-4267-8f1d-d87e45205125", "Christopher", "Wik", "Male", new Date("1949/02/23"), "patient.christopher.wik@example.com", "44166150", null, "https://randomuser.me/api/portraits/men/16.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser78")) {
                Address patientAddress = addressRepos.save(new Address(null, "5105 Uhlandstraße", "22679", "Baden-Württemberg", "Jena", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser78", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "f201b1c7-4fd8-40d7-9962-975cc1049cbf", "Lidwina", "Holzwarth", "Female", new Date("1949/12/21"), "patient.lidwina.holzwarth@example.com", "0170-8613935", null, "https://randomuser.me/api/portraits/women/51.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser79")) {
                Address patientAddress = addressRepos.save(new Address(null, "4357 Crockett St", "60553", "Pennsylvania", "Athens", "United States", false));
                User patientUser = userRepos.save(new User("patientuser79", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "512ef393-5b83-4e6a-bc96-014692797579", "Willie", "Barrett", "Male", new Date("1978/08/21"), "patient.willie.barrett@example.com", "(915) 254-7881", null, "https://randomuser.me/api/portraits/men/66.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser80")) {
                Address patientAddress = addressRepos.save(new Address(null, "9370 Arups gate", "2054", "Rogaland", "Skålevik", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser80", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "3f6c11fa-25f2-4435-ae32-bc7be9ded9e2", "Sakarias", "Silva", "Male", new Date("1996/01/25"), "patient.sakarias.silva@example.com", "91443840", null, "https://randomuser.me/api/portraits/men/6.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser81")) {
                Address patientAddress = addressRepos.save(new Address(null, "7497 Place de la Mairie", "68885", "Hautes-Pyrénées", "Aubervilliers", "France", false));
                User patientUser = userRepos.save(new User("patientuser81", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "0e0ac936-370d-41c4-ae51-03c80a7b95b5", "Adèle", "Roche", "Female", new Date("1960/03/28"), "patient.adele.roche@example.com", "06-05-22-55-15", null, "https://randomuser.me/api/portraits/women/92.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser82")) {
                Address patientAddress = addressRepos.save(new Address(null, "2953 Killarney Road", "46491", "Galway", "Ballybofey-Stranorlar", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser82", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "a9fa8672-67cc-423b-bbcc-6841b2c8d6cd", "Mary", "Ross", "Female", new Date("1979/06/25"), "patient.mary.ross@example.com", "081-181-2181", null, "https://randomuser.me/api/portraits/women/62.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser83")) {
                Address patientAddress = addressRepos.save(new Address(null, "4774 Nordengstubben", "7791", "Oppland", "Ydstebøhamn", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser83", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "d984e5d6-fe38-477d-8c8c-3b036f89e2f4", "Christian", "Østvik", "Male", new Date("1979/09/02"), "patient.christian.ostvik@example.com", "40705144", null, "https://randomuser.me/api/portraits/men/55.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser84")) {
                Address patientAddress = addressRepos.save(new Address(null, "2188 Brock Rd", "D4T 8E9", "Manitoba", "Springfield", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser84", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "8be94aad-5ff8-47bf-a817-5342706dc583", "Thomas", "Lo", "Male", new Date("1981/09/11"), "patient.thomas.lo@example.com", "R53 B97-3374", null, "https://randomuser.me/api/portraits/men/24.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser85")) {
                Address patientAddress = addressRepos.save(new Address(null, "2256 Concession Road 6", "D8G 3Y5", "Newfoundland and Labrador", "Charlottetown", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser85", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "de23906a-6d34-4d5f-9d76-e396abf1a795", "Emma", "Harcourt", "Female", new Date("1982/03/13"), "patient.emma.harcourt@example.com", "S64 A02-5000", null, "https://randomuser.me/api/portraits/women/23.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser86")) {
                Address patientAddress = addressRepos.save(new Address(null, "2377 Finkenweg", "70869", "Schleswig-Holstein", "Neustadt an der Orla", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser86", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "50491eb4-2b7e-45a4-9e05-2e1f7ce8057e", "Willy", "Rist", "Male", new Date("1948/05/05"), "patient.willy.rist@example.com", "0177-7135781", null, "https://randomuser.me/api/portraits/men/57.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser87")) {
                Address patientAddress = addressRepos.save(new Address(null, "6400 Goethestraße", "81156", "Nordrhein-Westfalen", "Vetschau/Spreewald", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser87", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "18aab23e-bf31-4180-8816-2e0478934877", "Willibald", "Richter", "Male", new Date("1987/12/22"), "patient.willibald.richter@example.com", "0170-4024254", null, "https://randomuser.me/api/portraits/men/43.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser88")) {
                Address patientAddress = addressRepos.save(new Address(null, "8543 The Crescent", "99844", "South Dublin", "Duleek", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser88", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "63520c97-3bd1-4692-96fd-5e4679596999", "Jim", "Jordan", "Male", new Date("1971/09/27"), "patient.jim.jordan@example.com", "081-947-2958", null, "https://randomuser.me/api/portraits/men/92.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser89")) {
                Address patientAddress = addressRepos.save(new Address(null, "9623 Bay Ave", "V7S 1Q4", "Manitoba", "Sherbrooke", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser89", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "31c5f0a5-e171-4965-8858-f6936e121034", "Alexandre", "Jean-Baptiste", "Male", new Date("1984/09/08"), "patient.alexandre.jean-baptiste@example.com", "Y63 B45-5504", null, "https://randomuser.me/api/portraits/men/5.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser90")) {
                Address patientAddress = addressRepos.save(new Address(null, "5862 Pecan Acres Ln", "5178", "Victoria", "Maitland", "Australia", false));
                User patientUser = userRepos.save(new User("patientuser90", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "30062a06-9156-438d-b47b-957f6e8b465b", "Arnold", "Wagner", "Male", new Date("1960/01/31"), "patient.arnold.wagner@example.com", "0423-858-116", null, "https://randomuser.me/api/portraits/men/55.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser91")) {
                Address patientAddress = addressRepos.save(new Address(null, "3548 3rd St", "O3C 8E4", "Alberta", "Fauquier", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser91", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "941e4871-9e57-402e-8f31-b882b31730a6", "Logan", "Bergeron", "Male", new Date("1959/09/14"), "patient.logan.bergeron@example.com", "K19 W14-1389", null, "https://randomuser.me/api/portraits/men/13.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser92")) {
                Address patientAddress = addressRepos.save(new Address(null, "6742 Gartenweg", "65233", "Sachsen", "Lassan", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser92", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "64c59e3c-04b8-4d62-aae2-575d74ba5ffd", "Baldur", "Henrichs", "Male", new Date("1982/03/27"), "patient.baldur.henrichs@example.com", "0173-3846315", null, "https://randomuser.me/api/portraits/men/47.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser93")) {
                Address patientAddress = addressRepos.save(new Address(null, "4338 Herbert Road", "23386", "Kilkenny", "Portlaoise", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser93", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "5ce47b16-d874-4beb-93dd-705784c000f5", "Wesley", "Austin", "Male", new Date("1991/10/18"), "patient.wesley.austin@example.com", "081-170-9645", null, "https://randomuser.me/api/portraits/men/0.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser94")) {
                Address patientAddress = addressRepos.save(new Address(null, "8929 Rommibakken", "1833", "Sogn og Fjordane", "Leirvik", "Norway", false));
                User patientUser = userRepos.save(new User("patientuser94", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "2256d540-2ee5-429e-a949-86e07f7028db", "Sigurd", "Frøseth", "Male", new Date("1994/02/06"), "patient.sigurd.froseth@example.com", "41810850", null, "https://randomuser.me/api/portraits/men/5.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser95")) {
                Address patientAddress = addressRepos.save(new Address(null, "1384 Jones Road", "40454", "Limerick", "Ballina", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser95", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "28263aec-5a70-476f-a1ee-1909c0db5bce", "Judy", "Fox", "Female", new Date("1972/08/09"), "patient.judy.fox@example.com", "081-969-1497", null, "https://randomuser.me/api/portraits/women/18.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser96")) {
                Address patientAddress = addressRepos.save(new Address(null, "1396 Mittelweg", "70208", "Schleswig-Holstein", "Lauta", "Germany", false));
                User patientUser = userRepos.save(new User("patientuser96", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "31c888f9-30a4-4236-86be-b6354728d324", "Irma", "Eilers", "Female", new Date("1992/02/01"), "patient.irma.eilers@example.com", "0175-5061620", null, "https://randomuser.me/api/portraits/women/83.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser97")) {
                Address patientAddress = addressRepos.save(new Address(null, "1691 Dame Street", "80808", "South Dublin", "Kilcock", "Ireland", false));
                User patientUser = userRepos.save(new User("patientuser97", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "d469a8bc-be22-45bb-ac90-90c4ad580558", "Paige", "Horton", "Female", new Date("1956/07/12"), "patient.paige.horton@example.com", "081-936-6958", null, "https://randomuser.me/api/portraits/women/67.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser98")) {
                Address patientAddress = addressRepos.save(new Address(null, "9642 James St", "16180", "New York", "Pomona", "United States", false));
                User patientUser = userRepos.save(new User("patientuser98", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "bee9d44c-2580-4269-9222-7bda7a41b019", "Erica", "Adams", "Female", new Date("1950/01/01"), "patient.erica.adams@example.com", "(561) 248-9303", null, "https://randomuser.me/api/portraits/women/86.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("patientuser99")) {
                Address patientAddress = addressRepos.save(new Address(null, "7674 Park Rd", "T5V 6C1", "Nunavut", "Stratford", "Canada", false));
                User patientUser = userRepos.save(new User("patientuser99", encoder.encode("123456789"), UserRole.PATIENT));
                patientRepos.save(new Patient(null, "0bae68cb-f0ac-4415-9a27-447a3974ac77", "Annabelle", "Macdonald", "Female", new Date("1993/01/15"), "patient.annabelle.macdonald@example.com", "V83 I41-3514", null, "https://randomuser.me/api/portraits/women/21.jpg", patientAddress, false, patientUser, null, true));
            }

            if(!userRepos.existsByUsername("doctoruser0")) {
                Address doctorAddress = addressRepos.save(new Address(null, "6890 Northaven Rd", "61326", "Indiana", "Dayton", "United States", false));
                User doctorUser = userRepos.save(new User("doctoruser0", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "5159e9bd-8042-418a-9761-bf2f1beba80a", "Jessica", "Fowler", "Female", new Date("1954/07/11"), "doctor.jessica.fowler@example.com", "(822) 277-9636", null, "https://randomuser.me/api/portraits/women/87.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 3, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)7), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T04:00:00.709Z", "2022-07-18T14:00:00.437Z", "0/2/4/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser1")) {
                Address doctorAddress = addressRepos.save(new Address(null, "3148 Tannenweg", "14143", "Niedersachsen", "Wunsiedel", "Germany", false));
                User doctorUser = userRepos.save(new User("doctoruser1", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "2ca79ab8-24f9-4ada-b390-88fa1b7b5405", "Salih", "Kluth", "Male", new Date("1986/10/30"), "doctor.salih.kluth@example.com", "0171-0465796", null, "https://randomuser.me/api/portraits/men/59.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 2, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)5), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser2")) {
                Address doctorAddress = addressRepos.save(new Address(null, "754 W Campbell Ave", "5703", "South Australia", "Albury", "Australia", false));
                User doctorUser = userRepos.save(new User("doctoruser2", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "299e7d27-2223-4e66-b82a-fd0c2257fd04", "Billie", "Garza", "Female", new Date("1985/05/23"), "doctor.billie.garza@example.com", "0447-279-502", null, "https://randomuser.me/api/portraits/women/38.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 5, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)9), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser3")) {
                Address doctorAddress = addressRepos.save(new Address(null, "2498 Jones Road", "94598", "Waterford", "Cobh", "Ireland", false));
                User doctorUser = userRepos.save(new User("doctoruser3", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "a6763458-8b54-4e01-b9d7-894459a0ef48", "Caitlin", "Holland", "Female", new Date("1961/09/28"), "doctor.caitlin.holland@example.com", "081-341-5004", null, "https://randomuser.me/api/portraits/women/49.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 3, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)1), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser4")) {
                Address doctorAddress = addressRepos.save(new Address(null, "1485 Waldweg", "63553", "Bremen", "Trebsen/Mulde", "Germany", false));
                User doctorUser = userRepos.save(new User("doctoruser4", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "7f730cb9-4ac9-4914-a3ba-c70d53b30c66", "Liliane", "Schlegel", "Female", new Date("1965/10/20"), "doctor.liliane.schlegel@example.com", "0174-0264497", null, "https://randomuser.me/api/portraits/women/63.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 3, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)2), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser5")) {
                Address doctorAddress = addressRepos.save(new Address(null, "7083 Trasoppveien", "6486", "Oslo", "Haganes", "Norway", false));
                User doctorUser = userRepos.save(new User("doctoruser5", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "3bd75f3c-8c80-474a-9d36-f4335da7ba3a", "Vilma", "Iden", "Female", new Date("1989/08/20"), "doctor.vilma.iden@example.com", "45363312", null, "https://randomuser.me/api/portraits/women/28.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 1, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)2), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "0/1/2/3", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser6")) {
                Address doctorAddress = addressRepos.save(new Address(null, "1353 Wiesenstraße", "80054", "Niedersachsen", "Ketzin/Havel", "Germany", false));
                User doctorUser = userRepos.save(new User("doctoruser6", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "3a1b502b-b34b-4178-9cda-5d90a77acfc1", "Edeltrud", "Breier", "Female", new Date("1987/11/27"), "doctor.edeltrud.breier@example.com", "0179-5447424", null, "https://randomuser.me/api/portraits/women/66.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 1, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)5), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser7")) {
                Address doctorAddress = addressRepos.save(new Address(null, "154 Lone Wolf Trail", "80808", "Missouri", "Las Vegas", "United States", false));
                User doctorUser = userRepos.save(new User("doctoruser7", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "cc72c42b-e19b-455c-af65-4abe25764d2f", "Tanya", "Gregory", "Female", new Date("1959/09/05"), "doctor.tanya.gregory@example.com", "(610) 807-4376", null, "https://randomuser.me/api/portraits/women/28.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 5, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)6), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "0/1/2/3", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser8")) {
                Address doctorAddress = addressRepos.save(new Address(null, "6787 Lakeview Ave", "F1I 8V5", "Yukon", "Chatham", "Canada", false));
                User doctorUser = userRepos.save(new User("doctoruser8", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "fd760cb8-2241-4326-86e4-9d39598675eb", "Liam", "Denys", "Male", new Date("1981/11/06"), "doctor.liam.denys@example.com", "F75 P78-0743", null, "https://randomuser.me/api/portraits/men/35.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 0, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)6), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser9")) {
                Address doctorAddress = addressRepos.save(new Address(null, "1303 Pockrus Page Rd", "9082", "Victoria", "Traralgon", "Australia", false));
                User doctorUser = userRepos.save(new User("doctoruser9", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "d5a1a1f1-ad07-4b0e-b421-32a4db954664", "Franklin", "Wells", "Male", new Date("1984/07/06"), "doctor.franklin.wells@example.com", "0472-972-248", null, "https://randomuser.me/api/portraits/men/3.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 3, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)7), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser10")) {
                Address doctorAddress = addressRepos.save(new Address(null, "8486 Springfield Road", "50304", "Clare", "Dungarvan", "Ireland", false));
                User doctorUser = userRepos.save(new User("doctoruser10", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "80d832d9-d1b5-4e1e-9236-61da26ea4397", "Mason", "Gibson", "Male", new Date("1970/04/17"), "doctor.mason.gibson@example.com", "081-007-4003", null, "https://randomuser.me/api/portraits/men/28.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 5, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)6), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "0/1/2/3", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser11")) {
                Address doctorAddress = addressRepos.save(new Address(null, "3285 Quai Chauveau", "31496", "Pyrénées-Orientales", "Montpellier", "France", false));
                User doctorUser = userRepos.save(new User("doctoruser11", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "8d5964fa-7678-4076-8c33-ff0cdf32ea94", "Pierre", "Lecomte", "Male", new Date("1969/11/10"), "doctor.pierre.lecomte@example.com", "06-62-24-07-58", null, "https://randomuser.me/api/portraits/men/16.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 8, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)9), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T04:00:00.709Z", "2022-07-18T14:00:00.437Z", "0/2/4/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser12")) {
                Address doctorAddress = addressRepos.save(new Address(null, "3953 St. Catherine St", "P8V 4N7", "Saskatchewan", "Lloydminster", "Canada", false));
                User doctorUser = userRepos.save(new User("doctoruser12", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "7eed40ab-06a7-4c28-a51b-2aab641e888c", "Ethan", "Park", "Male", new Date("1987/10/02"), "doctor.ethan.park@example.com", "J14 R21-2045", null, "https://randomuser.me/api/portraits/men/98.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 4, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)7), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser13")) {
                Address doctorAddress = addressRepos.save(new Address(null, "8128 Dane St", "5537", "Northern Territory", "Tweed", "Australia", false));
                User doctorUser = userRepos.save(new User("doctoruser13", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "0a386415-2336-4890-89d1-9c37df9f425f", "Jeanne", "Walters", "Female", new Date("1987/08/31"), "doctor.jeanne.walters@example.com", "0439-448-687", null, "https://randomuser.me/api/portraits/women/51.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 3, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)7), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser14")) {
                Address doctorAddress = addressRepos.save(new Address(null, "2677 Mcclellan Rd", "34528", "Colorado", "Amarillo", "United States", false));
                User doctorUser = userRepos.save(new User("doctoruser14", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "7356b522-d7a1-420f-9679-eb7b3789f0b9", "Anne", "Perkins", "Female", new Date("1993/06/14"), "doctor.anne.perkins@example.com", "(296) 750-3302", null, "https://randomuser.me/api/portraits/women/0.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 9, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)5), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "0/1/2/3", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser15")) {
                Address doctorAddress = addressRepos.save(new Address(null, "7423 Plum St", "38982", "New York", "Austin", "United States", false));
                User doctorUser = userRepos.save(new User("doctoruser15", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "9251885e-4d94-4311-ba3f-4ce003fd9be6", "Ray", "Burns", "Male", new Date("1958/07/15"), "doctor.ray.burns@example.com", "(720) 484-2203", null, "https://randomuser.me/api/portraits/men/47.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 8, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)7), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T04:00:00.709Z", "2022-07-18T14:00:00.437Z", "0/2/4/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser16")) {
                Address doctorAddress = addressRepos.save(new Address(null, "4731 Karen Dr", "7759", "Victoria", "Toowoomba", "Australia", false));
                User doctorUser = userRepos.save(new User("doctoruser16", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "9ff01e21-7dcf-4a8f-9620-7ff2ff8e4c20", "Noelle", "Bowman", "Female", new Date("1995/04/15"), "doctor.noelle.bowman@example.com", "0470-250-771", null, "https://randomuser.me/api/portraits/women/77.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 9, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)10), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "0/1/2/3", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser17")) {
                Address doctorAddress = addressRepos.save(new Address(null, "9898 Stevens Creek Blvd", "15762", "Oklahoma", "Coral Springs", "United States", false));
                User doctorUser = userRepos.save(new User("doctoruser17", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "df95d49d-3da2-4417-a763-2cecb4606b81", "Rachel", "Lewis", "Female", new Date("1960/05/01"), "doctor.rachel.lewis@example.com", "(543) 991-0066", null, "https://randomuser.me/api/portraits/women/22.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 6, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)3), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T01:00:00.709Z", "2022-07-18T11:00:00.437Z", "0/1/3/5", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser18")) {
                Address doctorAddress = addressRepos.save(new Address(null, "1289 Lake of Bays Road", "X4N 1C1", "Alberta", "Windsor", "Canada", false));
                User doctorUser = userRepos.save(new User("doctoruser18", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "cbbe6ffb-b816-4f49-8006-ad5a328255d4", "Lucas", "Jean-Baptiste", "Male", new Date("1962/06/03"), "doctor.lucas.jean-baptiste@example.com", "D21 L55-9924", null, "https://randomuser.me/api/portraits/men/49.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 1, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)9), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "0/1/2/3", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser19")) {
                Address doctorAddress = addressRepos.save(new Address(null, "6904 Pierre Ave", "E7B 6S9", "Manitoba", "Springfield", "Canada", false));
                User doctorUser = userRepos.save(new User("doctoruser19", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "76fe3fda-1582-44c2-a9b1-a4b7f73b98cf", "Logan", "Lo", "Male", new Date("1975/10/13"), "doctor.logan.lo@example.com", "O95 F58-3632", null, "https://randomuser.me/api/portraits/men/72.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 4, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)9), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T01:00:00.709Z", "2022-07-18T11:00:00.437Z", "0/1/3/5", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser20")) {
                Address doctorAddress = addressRepos.save(new Address(null, "5035 Abbedisvingen", "6601", "Oppland", "Tyssedal", "Norway", false));
                User doctorUser = userRepos.save(new User("doctoruser20", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "e024aaf9-e5a8-429c-a3c9-1186600bce2c", "Othilie", "Mahamed", "Female", new Date("1956/12/17"), "doctor.othilie.mahamed@example.com", "48220220", null, "https://randomuser.me/api/portraits/women/68.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 4, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)11), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser21")) {
                Address doctorAddress = addressRepos.save(new Address(null, "6047 W 6th St", "7076", "South Australia", "Tamworth", "Australia", false));
                User doctorUser = userRepos.save(new User("doctoruser21", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "d71079ef-8404-4c7a-abfd-4e47ee5ed029", "Diane", "Ramirez", "Female", new Date("1945/01/30"), "doctor.diane.ramirez@example.com", "0446-199-838", null, "https://randomuser.me/api/portraits/women/70.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 2, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)9), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser22")) {
                Address doctorAddress = addressRepos.save(new Address(null, "4459 Königsberger Straße", "41852", "Thüringen", "Allstedt", "Germany", false));
                User doctorUser = userRepos.save(new User("doctoruser22", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "ef150f48-f101-4e26-8174-2d28a13733cc", "Mirella", "Eckart", "Female", new Date("1990/03/18"), "doctor.mirella.eckart@example.com", "0179-6684486", null, "https://randomuser.me/api/portraits/women/39.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 6, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)7), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "3/4/5/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser23")) {
                Address doctorAddress = addressRepos.save(new Address(null, "1324 Slimeveien", "3371", "Sogn og Fjordane", "Storforshei", "Norway", false));
                User doctorUser = userRepos.save(new User("doctoruser23", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "de77a755-f463-48c6-94a3-945f463187bb", "Einar", "Stormark", "Male", new Date("1970/03/09"), "doctor.einar.stormark@example.com", "42844918", null, "https://randomuser.me/api/portraits/men/55.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 3, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)10), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T01:00:00.709Z", "2022-07-18T11:00:00.437Z", "0/1/3/5", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser24")) {
                Address doctorAddress = addressRepos.save(new Address(null, "1972 Avondale Ave", "67638", "Louisiana", "Thousand Oaks", "United States", false));
                User doctorUser = userRepos.save(new User("doctoruser24", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "0d7fdc1c-4b5e-415f-bb3f-95f4631f89ee", "Ella", "Ruiz", "Female", new Date("2001/04/28"), "doctor.ella.ruiz@example.com", "(797) 441-0280", null, "https://randomuser.me/api/portraits/women/40.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 6, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)2), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T04:00:00.709Z", "2022-07-18T14:00:00.437Z", "0/2/4/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser25")) {
                Address doctorAddress = addressRepos.save(new Address(null, "5666 Stanley Way", "F4N 0H4", "Prince Edward Island", "Lloydminster", "Canada", false));
                User doctorUser = userRepos.save(new User("doctoruser25", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "2c2c8bcb-6bcd-463e-ae32-9950e8086f13", "Ava", "Clark", "Female", new Date("1977/03/28"), "doctor.ava.clark@example.com", "S17 Z19-2445", null, "https://randomuser.me/api/portraits/women/20.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 2, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)3), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T04:00:00.709Z", "2022-07-18T14:00:00.437Z", "0/2/4/6", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser26")) {
                Address doctorAddress = addressRepos.save(new Address(null, "5582 New Road", "55491", "Fingal", "Laytown-Bettystown-Mornington", "Ireland", false));
                User doctorUser = userRepos.save(new User("doctoruser26", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "2e014ffa-6d66-4d42-b2f6-073ab825eead", "Travis", "Bell", "Male", new Date("1976/10/16"), "doctor.travis.bell@example.com", "081-543-0294", null, "https://randomuser.me/api/portraits/men/73.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 5, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)2), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T01:00:00.709Z", "2022-07-18T11:00:00.437Z", "0/1/3/5", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser27")) {
                Address doctorAddress = addressRepos.save(new Address(null, "2784 Feldstraße", "72952", "Hessen", "Altensteig", "Germany", false));
                User doctorUser = userRepos.save(new User("doctoruser27", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "06a7d0b8-30e3-4058-971b-15031d3d3f8e", "Aloisia", "Theiß", "Female", new Date("1963/08/08"), "doctor.aloisia.theiss@example.com", "0177-8711180", null, "https://randomuser.me/api/portraits/women/45.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 4, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)2), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T01:00:00.709Z", "2022-07-18T11:00:00.437Z", "0/1/3/5", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser28")) {
                Address doctorAddress = addressRepos.save(new Address(null, "9568 W Campbell Ave", "27740", "Nebraska", "Pasadena", "United States", false));
                User doctorUser = userRepos.save(new User("doctoruser28", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "899cce05-0db7-48f1-b9e9-9ec974816de6", "Jessie", "Mills", "Female", new Date("1969/01/28"), "doctor.jessie.mills@example.com", "(786) 226-2773", null, "https://randomuser.me/api/portraits/women/75.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 2, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)1), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T01:00:00.709Z", "2022-07-18T11:00:00.437Z", "0/1/3/5", "", false));
            }

            if(!userRepos.existsByUsername("doctoruser29")) {
                Address doctorAddress = addressRepos.save(new Address(null, "2868 Hogan St", "50512", "New York", "Woodbridge", "United States", false));
                User doctorUser = userRepos.save(new User("doctoruser29", encoder.encode("123456789"), UserRole.DOCTOR));
                Employee doctorEmployee = employeeRepos.save(new Employee(null, "8595ef3d-efcf-4fc9-8fce-02aae06d88c3", "Vickie", "Mccoy", "Female", new Date("1996/02/16"), "doctor.vickie.mccoy@example.com", "(752) 510-8060", null, "https://randomuser.me/api/portraits/women/55.jpg", doctorAddress, false, EmployeeRole.DOCTOR, true, 7, new Date(), doctorUser));
                Doctor doctor = doctorRepos.save(new Doctor(null, "",new Department((long)4), doctorEmployee, null, null, null, null, false));
                doctorScheduleRepos.save(new DoctorSchedule(null, doctor, "2022-07-18T06:00:00.709Z", "2022-07-18T16:00:00.437Z", "0/1/2/3", "", false));
            }

            if(!userRepos.existsByUsername("employeeuser0")) {
                Address employeeAddress = addressRepos.save(new Address(null, "6544 Lakeshore Rd", "3244", "Queensland", "Adelaide", "Australia", false));
                User employeeUser = userRepos.save(new User("employeeuser0", encoder.encode("123456789"), UserRole.ADMIN));
                employeeRepos.save(new Employee(null, "4ec98d2c-4b77-4f48-b68d-f274c0bae6ca", "Nora", "Russell", "Female", new Date("1962/12/19"), "employee.nora.russell@example.com", "0411-927-701", null, "https://randomuser.me/api/portraits/women/85.jpg", employeeAddress, false, EmployeeRole.ADMIN, true, 3, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser1")) {
                Address employeeAddress = addressRepos.save(new Address(null, "4156 Micheletveien", "3036", "Nord-Trøndelag", "Vikeså", "Norway", false));
                User employeeUser = userRepos.save(new User("employeeuser1", encoder.encode("123456789"), UserRole.ADMIN));
                employeeRepos.save(new Employee(null, "203f2a9e-3e8d-4c66-9d24-2df8fe4d8656", "Malte", "Tveten", "Male", new Date("1971/05/30"), "employee.malte.tveten@example.com", "43956724", null, "https://randomuser.me/api/portraits/men/58.jpg", employeeAddress, false, EmployeeRole.ADMIN, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser2")) {
                Address employeeAddress = addressRepos.save(new Address(null, "7494 High Street", "19763", "Westmeath", "Portlaoise", "Ireland", false));
                User employeeUser = userRepos.save(new User("employeeuser2", encoder.encode("123456789"), UserRole.ADMIN));
                employeeRepos.save(new Employee(null, "65911f97-dcb8-4cbc-9aa1-49da7ef794d3", "Shawn", "Lopez", "Male", new Date("1976/06/08"), "employee.shawn.lopez@example.com", "081-808-5002", null, "https://randomuser.me/api/portraits/men/42.jpg", employeeAddress, false, EmployeeRole.ADMIN, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser3")) {
                Address employeeAddress = addressRepos.save(new Address(null, "7887 Rue Victor-Hugo", "10621", "Meuse", "Nîmes", "France", false));
                User employeeUser = userRepos.save(new User("employeeuser3", encoder.encode("123456789"), UserRole.ADMIN));
                employeeRepos.save(new Employee(null, "1c292326-a8af-4b84-b74a-23d10166a9fe", "Mae", "Roche", "Male", new Date("1963/11/27"), "employee.mae.roche@example.com", "06-78-40-03-83", null, "https://randomuser.me/api/portraits/men/61.jpg", employeeAddress, false, EmployeeRole.ADMIN, true, 5, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser4")) {
                Address employeeAddress = addressRepos.save(new Address(null, "4730 Rue de L'Abbé-Rousselot", "15023", "Eure", "Toulon", "France", false));
                User employeeUser = userRepos.save(new User("employeeuser4", encoder.encode("123456789"), UserRole.ADMIN));
                employeeRepos.save(new Employee(null, "d7b01ade-17c7-4d41-8491-e5f2dfddbb38", "Maëlle", "Lefevre", "Female", new Date("1948/11/30"), "employee.maelle.lefevre@example.com", "06-47-58-01-65", null, "https://randomuser.me/api/portraits/women/83.jpg", employeeAddress, false, EmployeeRole.ADMIN, true, 8, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser5")) {
                Address employeeAddress = addressRepos.save(new Address(null, "6419 Avenue de la République", "17574", "Finistère", "Rouen", "France", false));
                User employeeUser = userRepos.save(new User("employeeuser5", encoder.encode("123456789"), UserRole.RECEPTIONIST));
                employeeRepos.save(new Employee(null, "f2680260-278d-4238-a0d7-6537120f8f21", "Justin", "Menard", "Male", new Date("1974/05/10"), "employee.justin.menard@example.com", "06-91-83-62-53", null, "https://randomuser.me/api/portraits/men/53.jpg", employeeAddress, false, EmployeeRole.RECEPTIONIST, true, 7, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser6")) {
                Address employeeAddress = addressRepos.save(new Address(null, "4841 Schillerstraße", "36957", "Rheinland-Pfalz", "Kirn", "Germany", false));
                User employeeUser = userRepos.save(new User("employeeuser6", encoder.encode("123456789"), UserRole.RECEPTIONIST));
                employeeRepos.save(new Employee(null, "e33de0bf-1aa9-4ff8-8a9b-5f9d79b38287", "Hans-Ludwig", "Wahl", "Male", new Date("1967/07/20"), "employee.hans-ludwig.wahl@example.com", "0171-7348711", null, "https://randomuser.me/api/portraits/men/59.jpg", employeeAddress, false, EmployeeRole.RECEPTIONIST, true, 3, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser7")) {
                Address employeeAddress = addressRepos.save(new Address(null, "9031 Brugata", "8098", "Vestfold", "Svøo", "Norway", false));
                User employeeUser = userRepos.save(new User("employeeuser7", encoder.encode("123456789"), UserRole.RECEPTIONIST));
                employeeRepos.save(new Employee(null, "c1fa4a21-6140-4e46-858f-b2b5a824ded9", "Vera", "Skjolden", "Female", new Date("1997/06/29"), "employee.vera.skjolden@example.com", "46866713", null, "https://randomuser.me/api/portraits/women/11.jpg", employeeAddress, false, EmployeeRole.RECEPTIONIST, true, 1, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser8")) {
                Address employeeAddress = addressRepos.save(new Address(null, "9017 Balmoral St", "M2D 2W4", "Nunavut", "Chelsea", "Canada", false));
                User employeeUser = userRepos.save(new User("employeeuser8", encoder.encode("123456789"), UserRole.RECEPTIONIST));
                employeeRepos.save(new Employee(null, "1eff277e-3df1-4a5d-a695-6aff7562978d", "Alexis", "Kowalski", "Male", new Date("1954/12/14"), "employee.alexis.kowalski@example.com", "V91 U70-4999", null, "https://randomuser.me/api/portraits/men/22.jpg", employeeAddress, false, EmployeeRole.RECEPTIONIST, true, 4, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser9")) {
                Address employeeAddress = addressRepos.save(new Address(null, "5368 York St", "K3X 7X1", "British Columbia", "Trenton", "Canada", false));
                User employeeUser = userRepos.save(new User("employeeuser9", encoder.encode("123456789"), UserRole.RECEPTIONIST));
                employeeRepos.save(new Employee(null, "e03f07d0-05a1-4c1c-b884-a55b72923f21", "Ethan", "Tremblay", "Male", new Date("1986/11/02"), "employee.ethan.tremblay@example.com", "R24 U72-7635", null, "https://randomuser.me/api/portraits/men/31.jpg", employeeAddress, false, EmployeeRole.RECEPTIONIST, true, 6, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser10")) {
                Address employeeAddress = addressRepos.save(new Address(null, "2455 Denny Street", "16561", "Tipperary", "Blessington", "Ireland", false));
                User employeeUser = userRepos.save(new User("employeeuser10", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "38442a5c-e9f6-4960-9dde-933e426faaf6", "Amelia", "Willis", "Female", new Date("1960/12/19"), "employee.amelia.willis@example.com", "081-213-8300", null, "https://randomuser.me/api/portraits/women/62.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 4, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser11")) {
                Address employeeAddress = addressRepos.save(new Address(null, "9986 Rue de la Charité", "48992", "La Réunion", "Pau", "France", false));
                User employeeUser = userRepos.save(new User("employeeuser11", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "883cdb92-08a7-4788-bdb6-9228211d5f11", "Auguste", "Giraud", "Male", new Date("1946/01/19"), "employee.auguste.giraud@example.com", "06-50-91-56-13", null, "https://randomuser.me/api/portraits/men/26.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser12")) {
                Address employeeAddress = addressRepos.save(new Address(null, "8083 Northaven Rd", "91626", "Mississippi", "Mcallen", "United States", false));
                User employeeUser = userRepos.save(new User("employeeuser12", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "db58cf2b-21b7-4fbc-87bf-6441c8062825", "Dylan", "Neal", "Male", new Date("1991/03/13"), "employee.dylan.neal@example.com", "(336) 405-2709", null, "https://randomuser.me/api/portraits/men/16.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 6, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser13")) {
                Address employeeAddress = addressRepos.save(new Address(null, "1972 Rue du Moulin", "83210", "Aisne", "Bordeaux", "France", false));
                User employeeUser = userRepos.save(new User("employeeuser13", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "638fff26-7ffa-4976-b0f1-304fa153e155", "Romane", "Boyer", "Female", new Date("1948/12/06"), "employee.romane.boyer@example.com", "06-15-02-39-55", null, "https://randomuser.me/api/portraits/women/65.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 9, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser14")) {
                Address employeeAddress = addressRepos.save(new Address(null, "4321 Avenue Paul Eluard", "79977", "Guadeloupe", "Champigny-sur-Marne", "France", false));
                User employeeUser = userRepos.save(new User("employeeuser14", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "6f730753-6251-455f-80b1-9e5d272a707a", "Alix", "Blanchard", "Female", new Date("1970/01/21"), "employee.alix.blanchard@example.com", "06-25-43-01-72", null, "https://randomuser.me/api/portraits/women/69.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 8, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser15")) {
                Address employeeAddress = addressRepos.save(new Address(null, "2336 Høgdaveien", "5895", "Nordland", "Arendal", "Norway", false));
                User employeeUser = userRepos.save(new User("employeeuser15", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "d36132a1-12fa-4be7-8d1f-318648125284", "Amir", "Skansen", "Male", new Date("1960/07/29"), "employee.amir.skansen@example.com", "98827629", null, "https://randomuser.me/api/portraits/men/18.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser16")) {
                Address employeeAddress = addressRepos.save(new Address(null, "5380 Karen Dr", "2701", "South Australia", "Wollongong", "Australia", false));
                User employeeUser = userRepos.save(new User("employeeuser16", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "598d845f-aff5-425d-bd2a-05e89811f5d2", "Linda", "Pena", "Female", new Date("1968/04/17"), "employee.linda.pena@example.com", "0485-539-208", null, "https://randomuser.me/api/portraits/women/79.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser17")) {
                Address employeeAddress = addressRepos.save(new Address(null, "7713 Hamilton Ave", "4079", "Australian Capital Territory", "Albany", "Australia", false));
                User employeeUser = userRepos.save(new User("employeeuser17", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "1e64b180-2226-4c78-859e-dd64aa16d824", "Emily", "Morrison", "Female", new Date("1982/06/27"), "employee.emily.morrison@example.com", "0450-483-611", null, "https://randomuser.me/api/portraits/women/59.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 2, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser18")) {
                Address employeeAddress = addressRepos.save(new Address(null, "1080 Cherry St", "9580", "New South Wales", "Wollongong", "Australia", false));
                User employeeUser = userRepos.save(new User("employeeuser18", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "3281d52b-3b18-459d-a4a3-b806149a0324", "Beverly", "Cooper", "Female", new Date("1995/11/14"), "employee.beverly.cooper@example.com", "0459-226-071", null, "https://randomuser.me/api/portraits/women/77.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 5, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser19")) {
                Address employeeAddress = addressRepos.save(new Address(null, "9393 Feldstraße", "82151", "Saarland", "Wirges", "Germany", false));
                User employeeUser = userRepos.save(new User("employeeuser19", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "a4728ed5-431a-44e5-98f4-72d98744ea61", "Irma", "Heinrich", "Female", new Date("1970/08/09"), "employee.irma.heinrich@example.com", "0177-6189366", null, "https://randomuser.me/api/portraits/women/20.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser20")) {
                Address employeeAddress = addressRepos.save(new Address(null, "1884 Manor Road", "54627", "Westmeath", "Roscommon", "Ireland", false));
                User employeeUser = userRepos.save(new User("employeeuser20", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "065e0b1b-1e0b-4cb9-9016-83eb0d25cbc0", "Liam", "Crawford", "Male", new Date("1986/11/09"), "employee.liam.crawford@example.com", "081-403-1710", null, "https://randomuser.me/api/portraits/men/14.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser21")) {
                Address employeeAddress = addressRepos.save(new Address(null, "7527 School Lane", "22175", "Leitrim", "Killarney", "Ireland", false));
                User employeeUser = userRepos.save(new User("employeeuser21", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "e8765595-4572-406b-ad88-a59a0e1ba58b", "Katie", "Gibson", "Female", new Date("1978/12/19"), "employee.katie.gibson@example.com", "081-310-7553", null, "https://randomuser.me/api/portraits/women/27.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 3, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser22")) {
                Address employeeAddress = addressRepos.save(new Address(null, "2133 Galway Road", "40839", "Mayo", "Gorey", "Ireland", false));
                User employeeUser = userRepos.save(new User("employeeuser22", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "3496d54b-2ed2-491e-ace6-2f7e6e2f2448", "Holly", "Fields", "Female", new Date("1997/09/24"), "employee.holly.fields@example.com", "081-947-4571", null, "https://randomuser.me/api/portraits/women/21.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 2, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser23")) {
                Address employeeAddress = addressRepos.save(new Address(null, "5795 Oak Ridge Ln", "56193", "Minnesota", "Ontario", "United States", false));
                User employeeUser = userRepos.save(new User("employeeuser23", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "b6cd8d8e-aa76-4018-b37c-8fce025d053b", "Kristina", "Stevens", "Female", new Date("1980/07/16"), "employee.kristina.stevens@example.com", "(704) 797-7964", null, "https://randomuser.me/api/portraits/women/67.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 2, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser24")) {
                Address employeeAddress = addressRepos.save(new Address(null, "3806 Rue de L'Église", "11564", "Indre-et-Loire", "Avignon", "France", false));
                User employeeUser = userRepos.save(new User("employeeuser24", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "3d7ab8dd-30f4-4572-bf53-2ae074caa89b", "Nora", "Duval", "Female", new Date("1958/10/21"), "employee.nora.duval@example.com", "06-20-32-57-16", null, "https://randomuser.me/api/portraits/women/21.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 7, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser25")) {
                Address employeeAddress = addressRepos.save(new Address(null, "7257 Spring St", "98824", "South Dakota", "Woodbridge", "United States", false));
                User employeeUser = userRepos.save(new User("employeeuser25", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "52ab09a8-fe1e-4504-ab1b-acca3e6dbfcd", "Andre", "Mills", "Male", new Date("1994/11/21"), "employee.andre.mills@example.com", "(283) 263-2660", null, "https://randomuser.me/api/portraits/men/18.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 9, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser26")) {
                Address employeeAddress = addressRepos.save(new Address(null, "9675 Ole Vigs gate", "3038", "Aust-Agder", "Figgjo", "Norway", false));
                User employeeUser = userRepos.save(new User("employeeuser26", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "6be8e534-8224-468c-bd91-abd115f01a93", "Celin", "Lyshaug", "Female", new Date("1990/07/23"), "employee.celin.lyshaug@example.com", "48664606", null, "https://randomuser.me/api/portraits/women/5.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser27")) {
                Address employeeAddress = addressRepos.save(new Address(null, "7461 Valley View Ln", "6954", "Tasmania", "Gladstone", "Australia", false));
                User employeeUser = userRepos.save(new User("employeeuser27", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "3f43abe4-2d6e-4a5e-844b-8e479d1d5f48", "Seth", "Stewart", "Male", new Date("1980/01/17"), "employee.seth.stewart@example.com", "0402-964-732", null, "https://randomuser.me/api/portraits/men/52.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 1, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser28")) {
                Address employeeAddress = addressRepos.save(new Address(null, "7951 Parker Rd", "7750", "Tasmania", "Perth", "Australia", false));
                User employeeUser = userRepos.save(new User("employeeuser28", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "729b6613-9345-4dc8-9b3f-1b59a766396a", "Abigail", "Anderson", "Female", new Date("1965/12/16"), "employee.abigail.anderson@example.com", "0412-409-010", null, "https://randomuser.me/api/portraits/women/35.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 1, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser29")) {
                Address employeeAddress = addressRepos.save(new Address(null, "958 Cedar St", "J0L 5D9", "Alberta", "Radisson", "Canada", false));
                User employeeUser = userRepos.save(new User("employeeuser29", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "fcbc3c15-cb6c-44c5-aaf3-059bef60d0df", "Olivia", "Claire", "Female", new Date("1989/04/19"), "employee.olivia.claire@example.com", "U68 N01-5852", null, "https://randomuser.me/api/portraits/women/25.jpg", employeeAddress, false, EmployeeRole.NURSE, true, 9, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser30")) {
                Address employeeAddress = addressRepos.save(new Address(null, "1609 Rue Barrème", "42503", "Cher", "Dunkerque", "France", false));
                User employeeUser = userRepos.save(new User("employeeuser30", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "aee4f788-14da-4197-a39a-0296a6bfc66e", "Noa", "Louis", "Male", new Date("1945/04/06"), "employee.noa.louis@example.com", "06-32-01-20-40", null, "https://randomuser.me/api/portraits/men/69.jpg", employeeAddress, false, EmployeeRole.LABORATORIST, true, 9, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser31")) {
                Address employeeAddress = addressRepos.save(new Address(null, "1435 Park Avenue", "68757", "Westmeath", "Bandon", "Ireland", false));
                User employeeUser = userRepos.save(new User("employeeuser31", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "e08a86c8-0674-4756-a81d-12dc57e27b13", "Juan", "Nelson", "Male", new Date("1983/09/21"), "employee.juan.nelson@example.com", "081-429-3615", null, "https://randomuser.me/api/portraits/men/70.jpg", employeeAddress, false, EmployeeRole.LABORATORIST, true, 4, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser32")) {
                Address employeeAddress = addressRepos.save(new Address(null, "5640 W Belt Line Rd", "17923", "Missouri", "Saginaw", "United States", false));
                User employeeUser = userRepos.save(new User("employeeuser32", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "e135adc9-1895-4012-9b12-4539e0a3a01a", "Robert", "Romero", "Male", new Date("1962/08/28"), "employee.robert.romero@example.com", "(210) 204-6369", null, "https://randomuser.me/api/portraits/men/82.jpg", employeeAddress, false, EmployeeRole.LABORATORIST, true, 9, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser33")) {
                Address employeeAddress = addressRepos.save(new Address(null, "4214 Montée du Chemin-Neuf", "33236", "Haute-Marne", "Rouen", "France", false));
                User employeeUser = userRepos.save(new User("employeeuser33", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "59d13ece-0488-44bd-adde-7c887fd570e2", "Eléa", "Dupuis", "Female", new Date("1999/06/12"), "employee.elea.dupuis@example.com", "06-09-27-65-99", null, "https://randomuser.me/api/portraits/women/56.jpg", employeeAddress, false, EmployeeRole.LABORATORIST, true, 4, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser34")) {
                Address employeeAddress = addressRepos.save(new Address(null, "7353 Timber Wolf Trail", "11778", "Hawaii", "North Valley", "United States", false));
                User employeeUser = userRepos.save(new User("employeeuser34", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "cafbc08b-35a7-4f1d-981e-0e754647753f", "Billy", "Arnold", "Male", new Date("1960/03/20"), "employee.billy.arnold@example.com", "(593) 368-4415", null, "https://randomuser.me/api/portraits/men/9.jpg", employeeAddress, false, EmployeeRole.LABORATORIST, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser35")) {
                Address employeeAddress = addressRepos.save(new Address(null, "8533 Parker Rd", "28338", "Maine", "Ann Arbor", "United States", false));
                User employeeUser = userRepos.save(new User("employeeuser35", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "8a3e43c9-c51d-4014-ab44-0d3d47528a2a", "Zack", "Byrd", "Male", new Date("1953/08/22"), "employee.zack.byrd@example.com", "(615) 470-7285", null, "https://randomuser.me/api/portraits/men/36.jpg", employeeAddress, false, EmployeeRole.PHARMACIST, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser36")) {
                Address employeeAddress = addressRepos.save(new Address(null, "5271 Mekanikerveien", "0472", "Hordaland", "Tingnes", "Norway", false));
                User employeeUser = userRepos.save(new User("employeeuser36", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "13a492a2-6b44-43e0-aa57-9cda9c5f700d", "May", "Doan", "Female", new Date("1952/02/10"), "employee.may.doan@example.com", "43111357", null, "https://randomuser.me/api/portraits/women/67.jpg", employeeAddress, false, EmployeeRole.PHARMACIST, true, 2, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser37")) {
                Address employeeAddress = addressRepos.save(new Address(null, "2545 E Pecan St", "56323", "Arkansas", "Tucson", "United States", false));
                User employeeUser = userRepos.save(new User("employeeuser37", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "d9ab51e1-8f00-4545-9130-bdad04310dd6", "Lydia", "Nguyen", "Female", new Date("1977/09/04"), "employee.lydia.nguyen@example.com", "(864) 357-0107", null, "https://randomuser.me/api/portraits/women/85.jpg", employeeAddress, false, EmployeeRole.PHARMACIST, true, 8, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser38")) {
                Address employeeAddress = addressRepos.save(new Address(null, "6920 Daisy Dr", "4391", "Australian Capital Territory", "Melbourne", "Australia", false));
                User employeeUser = userRepos.save(new User("employeeuser38", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "4c4b8be8-85d8-4049-9715-3fdae1aab8aa", "Leslie", "Parker", "Female", new Date("1978/01/12"), "employee.leslie.parker@example.com", "0481-591-503", null, "https://randomuser.me/api/portraits/women/53.jpg", employeeAddress, false, EmployeeRole.PHARMACIST, true, 4, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser39")) {
                Address employeeAddress = addressRepos.save(new Address(null, "4244 Stanley Way", "H0N 2H6", "Alberta", "New Glasgow", "Canada", false));
                User employeeUser = userRepos.save(new User("employeeuser39", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "05424116-db29-4352-9e47-f7b3ae32e2ce", "Leanne", "Gill", "Female", new Date("1979/06/03"), "employee.leanne.gill@example.com", "D52 B55-9628", null, "https://randomuser.me/api/portraits/women/26.jpg", employeeAddress, false, EmployeeRole.PHARMACIST, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser40")) {
                Address employeeAddress = addressRepos.save(new Address(null, "4213 Poplar Dr", "5062", "Australian Capital Territory", "Traralgon", "Australia", false));
                User employeeUser = userRepos.save(new User("employeeuser40", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "9d776b69-9462-453d-98f0-062b2fd504b9", "Maurice", "Webb", "Male", new Date("1998/07/31"), "employee.maurice.webb@example.com", "0424-142-344", null, "https://randomuser.me/api/portraits/men/33.jpg", employeeAddress, false, EmployeeRole.ACCOUNTANT, true, 1, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser41")) {
                Address employeeAddress = addressRepos.save(new Address(null, "2130 Victoria Ave", "I0M 5K7", "Nova Scotia", "Flatrock", "Canada", false));
                User employeeUser = userRepos.save(new User("employeeuser41", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "dd0e7b1e-0f40-4405-b62c-a68e4a7368a8", "Oliver", "Mitchell", "Male", new Date("1971/06/16"), "employee.oliver.mitchell@example.com", "I87 A32-4311", null, "https://randomuser.me/api/portraits/men/92.jpg", employeeAddress, false, EmployeeRole.ACCOUNTANT, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser42")) {
                Address employeeAddress = addressRepos.save(new Address(null, "1185 Bay Ave", "V7U 3O6", "Newfoundland and Labrador", "Selkirk", "Canada", false));
                User employeeUser = userRepos.save(new User("employeeuser42", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "79f2c08b-4f18-4bc0-bf8f-f8d7f9f598b9", "Rose", "Bergeron", "Female", new Date("1994/05/23"), "employee.rose.bergeron@example.com", "F36 T22-4140", null, "https://randomuser.me/api/portraits/women/67.jpg", employeeAddress, false, EmployeeRole.ACCOUNTANT, true, 3, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser43")) {
                Address employeeAddress = addressRepos.save(new Address(null, "888 W 6th St", "3910", "New South Wales", "Darwin", "Australia", false));
                User employeeUser = userRepos.save(new User("employeeuser43", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "f90a52c5-d069-4427-8b44-7e03ee5e285e", "Marlene", "Newman", "Female", new Date("1997/12/18"), "employee.marlene.newman@example.com", "0453-412-313", null, "https://randomuser.me/api/portraits/women/57.jpg", employeeAddress, false, EmployeeRole.ACCOUNTANT, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser44")) {
                Address employeeAddress = addressRepos.save(new Address(null, "3701 Herbert Road", "31492", "Waterford", "Shannon", "Ireland", false));
                User employeeUser = userRepos.save(new User("employeeuser44", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "e0e3e6c2-e4cd-40d0-b7c2-ffb32742f718", "Kathleen", "Owens", "Female", new Date("1979/03/21"), "employee.kathleen.owens@example.com", "081-750-9681", null, "https://randomuser.me/api/portraits/women/0.jpg", employeeAddress, false, EmployeeRole.ACCOUNTANT, true, 0, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser45")) {
                Address employeeAddress = addressRepos.save(new Address(null, "7707 Ash Dr", "7137", "New South Wales", "Nowra", "Australia", false));
                User employeeUser = userRepos.save(new User("employeeuser45", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "75e372db-56ab-4e62-bb01-ee5f4e8c0b17", "Marcia", "Knight", "Female", new Date("1968/04/06"), "employee.marcia.knight@example.com", "0479-425-069", null, "https://randomuser.me/api/portraits/women/56.jpg", employeeAddress, false, EmployeeRole.OTHER, true, 6, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser46")) {
                Address employeeAddress = addressRepos.save(new Address(null, "6745 Jomfrubråtveien", "1324", "Telemark", "Alsvåg", "Norway", false));
                User employeeUser = userRepos.save(new User("employeeuser46", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "250590c3-9fec-425e-842b-11c3c300d0e4", "Vivian", "Takvam", "Female", new Date("1963/06/30"), "employee.vivian.takvam@example.com", "45022157", null, "https://randomuser.me/api/portraits/women/4.jpg", employeeAddress, false, EmployeeRole.OTHER, true, 3, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser47")) {
                Address employeeAddress = addressRepos.save(new Address(null, "2318 Eichenweg", "53813", "Thüringen", "Pirna", "Germany", false));
                User employeeUser = userRepos.save(new User("employeeuser47", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "78023e3f-ebe0-417a-9fb5-62f84850786e", "Daniela", "Wurst", "Female", new Date("1983/05/08"), "employee.daniela.wurst@example.com", "0175-4226530", null, "https://randomuser.me/api/portraits/women/73.jpg", employeeAddress, false, EmployeeRole.OTHER, true, 9, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser48")) {
                Address employeeAddress = addressRepos.save(new Address(null, "3874 Furer Nymos vei", "4320", "Nordland", "Bø", "Norway", false));
                User employeeUser = userRepos.save(new User("employeeuser48", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "e368e3b5-4be0-4876-81f2-3c27b45e772a", "Matteo", "Bauge", "Male", new Date("1991/08/01"), "employee.matteo.bauge@example.com", "99616770", null, "https://randomuser.me/api/portraits/men/80.jpg", employeeAddress, false, EmployeeRole.OTHER, true, 7, new Date(), employeeUser));
            }

            if(!userRepos.existsByUsername("employeeuser49")) {
                Address employeeAddress = addressRepos.save(new Address(null, "6578 Balders gate", "0518", "Telemark", "Skiptvet", "Norway", false));
                User employeeUser = userRepos.save(new User("employeeuser49", encoder.encode("123456789"), UserRole.OTHER));
                employeeRepos.save(new Employee(null, "80e41995-ec8f-4602-a2ae-6fb150c909ed", "Dylan", "Synnes", "Male", new Date("1962/06/15"), "employee.dylan.synnes@example.com", "98903214", null, "https://randomuser.me/api/portraits/men/70.jpg", employeeAddress, false, EmployeeRole.OTHER, true, 3, new Date(), employeeUser));
            }

        }
    }
}
