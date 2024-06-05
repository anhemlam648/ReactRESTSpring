package com.example.apispring.mapper;

import com.example.apispring.dto.RoleDto;
import com.example.apispring.entity.Role;

public class RoleMapper {
    public static RoleDto mapToRoleDto (Role role){
        RoleDto roleDto = new RoleDto();
        roleDto.setRoleId(role.getRoleId());
        roleDto.setName(role.getName());
        return roleDto;
    }
    public static Role mapToRole (RoleDto roleDto){
        Role role = new Role();
        role.setRoleId(roleDto.getRoleId());
        role.setName(roleDto.getName());
        return role;
    }
}
