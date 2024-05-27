package com.example.apispring.service;

import com.example.apispring.dto.CommentDto;
import org.springframework.stereotype.Service;

@Service
public interface CommentService {
    boolean createCommentDto(CommentDto commentDto);
}
