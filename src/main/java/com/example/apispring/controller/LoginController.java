package com.example.apispring.controller;

import com.example.apispring.dto.UserDto;
import com.example.apispring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private UserService userService;
//    @PostMapping(path = "/checklogin")
//    public ResponseEntity<?> loginUser(@ResponseBody UserDto userDto){
//        LoginUser loginUser =
//    }
}
