package com.example.apispring.mapper;


import com.example.apispring.dto.UserDto;
import com.example.apispring.entity.User;

public class UserMapper {
    public static UserDto mapToUserDto(User user){
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setAccessLevel(user.getAccessLevel());
        userDto.setCreatedAt(user.getCreatedAt());
        userDto.setUpdatedAt(user.getUpdatedAt());
        return userDto;
    }
    public static User mapToUser(UserDto userDto){
        User user = new User();
        user.setUserId(userDto.getUserId());
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setAccessLevel(userDto.getAccessLevel());
        user.setCreatedAt(userDto.getCreatedAt());
        user.setUpdatedAt(userDto.getUpdatedAt());
        return user;
    }
}
