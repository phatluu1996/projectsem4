package com.hospitalbooking.backend.security.services;

import com.hospitalbooking.backend.config.EmailConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;


import javax.validation.Valid;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.util.Map;


@Service
public class EmailService {
    @Autowired
    private EmailConfiguration emailConfiguration;

    @Autowired
    private TemplateEngine templateEngine;

    private String emailFrom = "mediapp.com <d998d46ca6-ff2360@inbox.mailtrap.io>";

    public JavaMailSender getJavaMailSender() {
        JavaMailSenderImpl mailSenderImpl = new JavaMailSenderImpl();
        mailSenderImpl.setHost(emailConfiguration.getHost());
        mailSenderImpl.setPort(emailConfiguration.getPort());
        mailSenderImpl.setUsername(emailConfiguration.getUsername());
        mailSenderImpl.setPassword(emailConfiguration.getPassword());
        return mailSenderImpl;
    }

    public void sendSimpleMessage(String to, @DefaultValue(value = "") String from, String subject, String text) {
        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom(from == null ? emailFrom : from);
            messageHelper.setTo(to);
            messageHelper.setSubject(subject);
            messageHelper.setText(text, true);
        };
        getJavaMailSender().send(messagePreparator);
        System.out.printf("An email has been sent to " + to);
    }

    public void replyFeedback(String to, @DefaultValue(value = "") String from, String subject, String text){
        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom(from == null ? emailFrom : from);
            messageHelper.setTo(to);
            messageHelper.setSubject(subject);
            messageHelper.setText(text, true);
        };
        getJavaMailSender().send(messagePreparator);
        System.out.printf("An email has been sent to " + to);
    }

    public void sendSimpleMessage(String to, @DefaultValue(value = "") String from, String subject, String text, String attachmentName, File attachment, File qrcode) {
        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, StandardCharsets.UTF_8.name());
            messageHelper.setFrom(from == null ? emailFrom : from);
            messageHelper.setTo(to);
            messageHelper.setSubject(subject);
            messageHelper.setText(text, true);
            messageHelper.getEncoding();
            messageHelper.addAttachment(attachmentName, attachment);
            messageHelper.addAttachment("qrcode.png",qrcode);
        };
        getJavaMailSender().send(messagePreparator);
        System.out.printf("An email has been sent to " + to);
    }

    public String templateResolve(String templateName, Map<String, Object> map){
        Context ctx = new Context();
        if (map != null) {
            for (Map.Entry<String, Object> stringObjectEntry : map.entrySet()) {
                Map.Entry pair = (Map.Entry) stringObjectEntry;
                ctx.setVariable(pair.getKey().toString(), pair.getValue());
            }
        }

        return templateEngine.process(templateName, ctx);
    }
}