package com.example.apispring.mapper;

import com.example.apispring.dto.CategoryDto;
import com.example.apispring.dto.TaskDto;
import com.example.apispring.entity.Category;
import com.example.apispring.entity.Task;

public class CategoryMapper {
    public static CategoryDto mapToCategoryDto(Category category) {
            CategoryDto categoryDto = new CategoryDto();
            categoryDto.setCategoryId(category.getCategoryId());
            categoryDto.setCategoryName(category.getCategoryName());
            return categoryDto;
    }

    public static Category mapToCategory(CategoryDto categoryDto) {
            Category category = new Category();
            category.setCategoryId(categoryDto.getCategoryId());
            category.setCategoryName(categoryDto.getCategoryName());
            return category;
    }
}
