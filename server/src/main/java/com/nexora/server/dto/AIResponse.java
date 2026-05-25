package com.nexora.server.dto;

import java.util.List;

public class AIResponse {

    private String filename;
    private List<String> skills_detected;
    private Integer readiness_score;
    private String content_preview;

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public List<String> getSkills_detected() {
        return skills_detected;
    }

    public void setSkills_detected(List<String> skills_detected) {
        this.skills_detected = skills_detected;
    }

    public Integer getReadiness_score() {
        return readiness_score;
    }

    public void setReadiness_score(Integer readiness_score) {
        this.readiness_score = readiness_score;
    }

    public String getContent_preview() {
        return content_preview;
    }

    public void setContent_preview(String content_preview) {
        this.content_preview = content_preview;
    }
}