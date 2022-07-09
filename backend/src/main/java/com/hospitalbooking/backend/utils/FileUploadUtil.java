package com.hospitalbooking.backend.utils;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.xml.bind.DatatypeConverter;
import java.awt.image.BufferedImage;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Base64;

public class FileUploadUtil {

    @Value("${upload.path}")
    public static String UPLOAD_DIR ;

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
