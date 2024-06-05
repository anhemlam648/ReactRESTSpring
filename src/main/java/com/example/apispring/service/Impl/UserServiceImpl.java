package com.example.apispring.service.Impl;


import com.example.apispring.dto.LoginDto;
import com.example.apispring.dto.TaskDto;
import com.example.apispring.dto.UserDto;
import com.example.apispring.entity.Role;
import com.example.apispring.entity.User;
import com.example.apispring.mapper.UserMapper;
//import com.example.apispring.payloadreponse.LoginMesage;
import com.example.apispring.payloadreponse.LoginMesage;
import com.example.apispring.repository.RoleRepository;
import com.example.apispring.repository.UserRepository;
import com.example.apispring.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private HttpSession httpSession;

    @Autowired
    private RoleRepository roleRepository;
//    @Override
//    public boolean createUserDto(UserDto userDto) {
//        User user = UserMapper.mapToUser(userDto);
//        user.setPassword(this.passwordEncoder.encode(userDto.getPassword()));
//        User usersave = userRepository.save(user);
//        return usersave != null;
//    }
    @Override
    public boolean createUserDto(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        user.setPassword(this.passwordEncoder.encode(userDto.getPassword()));
        User usersave = userRepository.save(user);
        if(usersave != null){
            Role defaulRole = roleRepository.findById(2L).orElse(null);
            if(defaulRole != null){
                usersave.getRoles().add(defaulRole);
                userRepository.save(usersave);
            }else{
                return false;
            }
            return true;
        }
        return false;
    }

    @Override
    public LoginMesage LoginUser(LoginDto loginDto) {
        Optional<User> optionalUser = userRepository.findByEmail(loginDto.getEmail());
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            String encodedPassword = user.getPassword();
            if (passwordEncoder.matches(loginDto.getPassword(), encodedPassword)) {
                return new LoginMesage("Đăng nhập thành công", true, user.getName(), user.getUserId());
            } else {
                return new LoginMesage("Vui lòng kiểm tra lại tài khoản hoặc mật khẩu", false, null, null);
            }
        } else {
            return new LoginMesage("Email không tìm thấy", false, null,null);
        }
    }

    @Override
    public UserDto getUserById(Long userId) {
        Optional<User> optionaluser = this.userRepository.findById(userId);
        if(optionaluser.isPresent()){
            User user = optionaluser.get();
            return UserMapper.mapToUserDto(user);
        }
        else {
            return null;
        }
    }

    @Override
    public Boolean deleteUserById(Long userId) {
        Optional<User> deleteUser = this.userRepository.findById(userId);
        if(deleteUser.isPresent()){
            userRepository.delete(deleteUser.get());
            return true;
        }
        return false;
    }

    @Override
    public String getUserRole(Long userId) {
            Optional<User> userOptional = userRepository.findById(userId);
            if (userOptional.isPresent()) {
                User user = userOptional.get();
                Set<Role> roles = user.getRoles();
                if (roles != null && !roles.isEmpty()) {
                    for (Role role : roles) {
                        if ("ADMIN".equals(role.getName())) {
                            return "ADMIN";
                        }
                    }
                }
            }
            return "USER"; // set mặc định là User
        }



    public List<UserDto> getAllUser() {
        List<UserDto> userDtos = this.userRepository.findAll().stream()
                .map(UserMapper::mapToUserDto)
                .collect(Collectors.toList());
        return userDtos;
    }
}
