package com.example.apispring.service;

import com.example.apispring.dto.CommentDto;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CommentService {
    boolean createCommentDto(CommentDto commentDto);
    List<CommentDto> getCommentsByTaskId (Long taskId);
}
