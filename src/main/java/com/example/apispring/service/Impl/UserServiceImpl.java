package com.example.apispring.service.Impl;


import com.example.apispring.dto.UserDto;
import com.example.apispring.mapper.UserMapper;
import com.example.apispring.repository.UserRepository;
import com.example.apispring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public boolean createUserDto(UserDto userDto) {
        return false;
    }

    public List<UserDto> getAllUser() {
        List<UserDto> userDtos = this.userRepository.findAll().stream()
                .map(UserMapper::mapToUserDto)
                .collect(Collectors.toList());
        return userDtos;
    }
}
