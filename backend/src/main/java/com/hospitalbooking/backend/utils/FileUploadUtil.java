package com.hospitalbooking.backend.utils;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;



public class FileUploadUtil {

    public static String UPLOAD_DIR = "src/main/resources/static/storage/" ;

    public static byte[] saveFile(String base64, String name) throws IOException {
        byte[] decodedFile =Base64.getMimeDecoder().decode(base64.split(",")[1]);
        Path uploadPath = Paths.get(UPLOAD_DIR);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        try {
            File file = new File(UPLOAD_DIR + name);
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            fileOutputStream.write(decodedFile);
            fileOutputStream.close();
        }catch (IOException ioe){
            throw new IOException("Could not save image file: " + name, ioe);
        }
        return  decodedFile;
    }
}
