package com.example.apispring.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long userId;
    private String name;
    private String email;
    private String password;
    private String accessLevel;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
