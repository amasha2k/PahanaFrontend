package org.example.pahanafrontend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"org.example.pahanafrontend", "org.example.pahanafrontend.controllers"})
public class PahanaFrontendApplication {

    public static void main(String[] args) {
        SpringApplication.run(PahanaFrontendApplication.class, args);
    }

}
