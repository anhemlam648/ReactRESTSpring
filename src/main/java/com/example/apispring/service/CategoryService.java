package com.example.apispring.service;

import com.example.apispring.dto.CategoryDto;
import com.example.apispring.dto.TaskDto;
import com.example.apispring.entity.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {
    boolean createCategory (CategoryDto categoryDto);
    boolean updateCategoryDto (CategoryDto categoryDto);
    CategoryDto getCategoryById(Long categoryId);
    boolean deleteCategoryById(Long categoryId);
}
