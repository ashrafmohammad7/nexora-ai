package com.nexora.server.service;

import com.nexora.server.dto.AIResponse;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.MediaType;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class AIService {

    private final WebClient webClient;

    public AIService() {

        this.webClient = WebClient.builder()
                .baseUrl("http://127.0.0.1:8000")
                .build();
    }

    public AIResponse analyzeResume(MultipartFile file) throws Exception {

        MultipartBodyBuilder builder = new MultipartBodyBuilder();

        builder.part(
                "file",
                new ByteArrayResource(file.getBytes()) {

                    @Override
                    public String getFilename() {
                        return file.getOriginalFilename();
                    }
                }
        );

        return webClient.post()
                .uri("/analyze-resume")
                .contentType(MediaType.MULTIPART_FORM_DATA)
                .bodyValue(builder.build())
                .retrieve()
                .bodyToMono(AIResponse.class)
                .block();
    }
}