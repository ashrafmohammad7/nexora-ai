package com.nexora.server.controller;

import com.nexora.server.dto.AIResponse;
import com.nexora.server.service.AIService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/ai")
public class AIController {

    private final AIService aiService;

    public AIController(AIService aiService) {
        this.aiService = aiService;
    }

    @PostMapping("/analyze")
    public AIResponse analyzeResume(
            @RequestParam("file") MultipartFile file
    ) throws Exception {

        return aiService.analyzeResume(file);
    }
}