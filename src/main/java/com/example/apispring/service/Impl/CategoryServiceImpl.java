package com.example.apispring.service.Impl;

import com.example.apispring.dto.CategoryDto;
import com.example.apispring.entity.Category;
import com.example.apispring.mapper.CategoryMapper;
import com.example.apispring.repository.CategoryRepository;
import com.example.apispring.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public boolean createCategory(CategoryDto categoryDto) {
        Category category = CategoryMapper.mapToCategory(categoryDto);
        Category categoriessave = categoryRepository.save(category);
        return categoriessave != null;
    }

    public List<CategoryDto> getAllCategory(){
        List<CategoryDto> categoryDtos = categoryRepository.findAll()
                .stream().map(CategoryMapper::mapToCategoryDto)
                .collect(Collectors.toList());
        return categoryDtos;

    }
}
