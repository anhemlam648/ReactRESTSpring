package com.example.apispring.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TaskDto {
    private Long taskId;
    private String taskName;
    private String description;
    private String status;
    private LocalDateTime startTime;
    private LocalDateTime deadline;
    private Long categoryId;
    private Long creatorId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}