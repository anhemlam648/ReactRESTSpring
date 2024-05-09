package com.example.apispring.controller;

import com.example.apispring.dto.LoginDto;
import com.example.apispring.dto.UserDto;
import com.example.apispring.payloadreponse.LoginMesage;
import com.example.apispring.service.Impl.UserServiceImpl;
import com.example.apispring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserServiceImpl userServiceImpl;

    @Autowired
    private UserService userService;
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

    @PostMapping("/add")
    @ResponseBody
    public ResponseEntity RegisterUser(@RequestBody() UserDto userDto){
        boolean isSuccess = this.userServiceImpl.createUserDto(userDto);
        System.out.println("Received JSON: " + userDto.toString());
        if(isSuccess){
            return ResponseEntity.ok(isSuccess);
        }else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(isSuccess);

        }
    }

    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<?> LoginUser(@RequestBody LoginDto loginDto){

        LoginMesage loginMesage = userService.LoginUser(loginDto);
        return ResponseEntity.ok(loginMesage);

    }

    @GetMapping("/users/{userId}")
    @ResponseBody
    public ResponseEntity getUserById(@PathVariable Long userId){
       UserDto userDto = this.userServiceImpl.getUserById(userId);
        if(userDto != null){
            return ResponseEntity.ok(userDto);
        }else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("user not found");

        }
    }
    @DeleteMapping("/delete/{userId}")
    @ResponseBody
    public ResponseEntity deleteUser(@PathVariable Long userId){
        boolean isSuccess = this.userServiceImpl.deleteUserById(userId);
        System.out.println("Gọi delete User" + isSuccess);
        if(isSuccess){
            return ResponseEntity.ok(isSuccess);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(isSuccess);
        }
    }

}
