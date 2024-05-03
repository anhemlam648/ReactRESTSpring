package com.example.apispring.controller;


import com.example.apispring.dto.CategoryDto;
import com.example.apispring.service.Impl.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/category")
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
}
