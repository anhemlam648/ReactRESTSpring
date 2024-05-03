package com.example.apispring.controller;

import com.example.apispring.dto.UserDto;
import com.example.apispring.service.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserServiceImpl userServiceImpl;

    @GetMapping("/list")
    @ResponseBody
    public ResponseEntity<List<UserDto>> getAllUser(){
        List<UserDto> userDtos = this.userServiceImpl.getAllUser();
        if(userDtos != null){
            return ResponseEntity.ok(userDtos);
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(userDtos);
        }
    }
}
