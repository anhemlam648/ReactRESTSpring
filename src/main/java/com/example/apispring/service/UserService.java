package com.example.apispring.service;

import com.example.apispring.dto.LoginDto;
import com.example.apispring.dto.TaskDto;
import com.example.apispring.dto.UserDto;
import com.example.apispring.payloadreponse.LoginMesage;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    boolean createUserDto (UserDto userDto);
    LoginMesage LoginUser(LoginDto loginDto);
    UserDto getUserById(Long userId);
    Boolean deleteUserById(Long userId);
    String getUserRole(Long userId);
}
