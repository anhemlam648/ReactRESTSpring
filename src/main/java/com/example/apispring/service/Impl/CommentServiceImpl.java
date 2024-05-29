package com.example.apispring.service.Impl;

import com.example.apispring.dto.CommentDto;
import com.example.apispring.entity.Comment;
import com.example.apispring.mapper.CommentMapper;
import com.example.apispring.repository.CommentRepository;
import com.example.apispring.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public boolean createCommentDto(CommentDto commentDto) {
        Comment comment = CommentMapper.mapToComment(commentDto);
        Comment saveComment = commentRepository.save(comment);
        return saveComment != null;
    }

    @Override
    public List<CommentDto> getCommentsByTaskId(Long taskId) {
        List<Comment> comments = commentRepository.findByTaskTaskId(taskId);
        return comments.stream()
                .map(CommentMapper::mapToCommentDto)
                .collect(Collectors.toList());
    }
}
