package com.example.apispring.service.Impl;


import com.example.apispring.dto.LoginDto;
import com.example.apispring.dto.UserDto;
import com.example.apispring.entity.User;
import com.example.apispring.mapper.UserMapper;
//import com.example.apispring.payloadreponse.LoginMesage;
import com.example.apispring.payloadreponse.LoginMesage;
import com.example.apispring.repository.UserRepository;
import com.example.apispring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public boolean createUserDto(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        user.setPassword(this.passwordEncoder.encode(userDto.getPassword()));
        User usersave = userRepository.save(user);
        return usersave != null;
    }

    @Override
    public LoginMesage LoginUser(LoginDto loginDto) {
        Optional<User> optionalUser = userRepository.findByEmail(loginDto.getEmail());
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            String encodedPassword = user.getPassword();
            if (passwordEncoder.matches(loginDto.getPassword(), encodedPassword)) {
                return new LoginMesage("Login success", true);
            } else {
                return new LoginMesage("Password not match", false);
            }
        } else {
            return new LoginMesage("Email not exists", false);
        }
    }

    public List<UserDto> getAllUser() {
        List<UserDto> userDtos = this.userRepository.findAll().stream()
                .map(UserMapper::mapToUserDto)
                .collect(Collectors.toList());
        return userDtos;
    }
}
