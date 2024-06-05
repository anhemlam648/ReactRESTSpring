package com.example.apispring.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RoleDto {
    private Long roleId;
    private String name;

    @Override
    public String toString() {
        return "RoleDto{" +
                "roleId=" + roleId +
                ", name='" + name + '\'' +
                '}';
    }
}
