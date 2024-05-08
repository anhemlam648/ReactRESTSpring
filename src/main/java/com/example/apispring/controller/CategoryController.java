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
    public ResponseEntity createCategory(@RequestBody() CategoryDto categoryDto) {
        boolean isSuccess = this.categoryServiceImpl.createCategory(categoryDto);
        System.out.println("Gọi Category " + isSuccess);
        if (isSuccess) {
            return ResponseEntity.ok(isSuccess);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(isSuccess) ;
    }

    @GetMapping("/categorys/{categoryId}")
    @ResponseBody
    public ResponseEntity getCategoryById(@PathVariable Long categoryId) {
        CategoryDto categoryDto = this.categoryServiceImpl.getCategoryById(categoryId);
        if (categoryDto != null) {
            return ResponseEntity.ok(categoryDto);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("category not found");
        }
    }
    @PutMapping("/update/{categoryId}")
    @ResponseBody
    public ResponseEntity updateCategory(@PathVariable Long categoryId ,@RequestBody() CategoryDto categoryDto) {
        categoryDto.setCategoryId(categoryId);
        boolean isSuccess = this.categoryServiceImpl.createCategory(categoryDto);
        System.out.println("Gọi update Category " + isSuccess);
        if (isSuccess) {
            return ResponseEntity.ok(isSuccess);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(isSuccess) ;
    }
    @DeleteMapping("/delete/{categoryId}")
    @ResponseBody
    public ResponseEntity deleteCategory(@PathVariable Long categoryId) {
        boolean isSuccess = this.categoryServiceImpl.deleteCategoryById(categoryId);
        System.out.println("Gọi delete Category " + isSuccess);
        if (isSuccess) {
            return ResponseEntity.ok(isSuccess);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(isSuccess);
        }
    }
}
