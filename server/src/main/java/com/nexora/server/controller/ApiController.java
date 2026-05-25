package com.nexora.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ApiController {

    @GetMapping("/api/status")
    public Map<String, String> status() {

        Map<String, String> response = new HashMap<>();

        response.put("status", "Backend Connected Successfully");
        response.put("service", "Nexora AI Spring Boot API");

        return response;
    }
}