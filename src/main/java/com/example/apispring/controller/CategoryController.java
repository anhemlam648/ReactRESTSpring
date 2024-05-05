package com.example.apispring.controller;


import com.example.apispring.dto.CategoryDto;
import com.example.apispring.dto.TaskDto;
import com.example.apispring.service.Impl.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/category")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
    @Autowired
    private CategoryServiceImpl categoryServiceImpl;



    @GetMapping("/list")
    @ResponseBody
    public ResponseEntity<List<CategoryDto>> getAllCategory(){
        List<CategoryDto> categoryDtos = this.categoryServiceImpl.getAllCategory();
        if(categoryDtos != null){
            return ResponseEntity.ok(categoryDtos);
        }
        else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(categoryDtos);
        }
    }
    @PostMapping("/add")
    @ResponseBody
    public ResponseEntity createTask(@RequestBody() CategoryDto categoryDto) {
        boolean isSuccess = this.categoryServiceImpl.createCategory(categoryDto);
        System.out.println("Gọi Category " + isSuccess);
        if (isSuccess) {
            return ResponseEntity.ok(isSuccess);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(isSuccess) ;
    }
}
