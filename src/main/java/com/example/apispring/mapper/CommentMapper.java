package com.example.apispring.mapper;

import com.example.apispring.dto.CommentDto;
import com.example.apispring.entity.Comment;
import com.example.apispring.entity.Task;
import com.example.apispring.entity.User;

public class CommentMapper {
    public static CommentDto mapToCommentDto(Comment comment) {
        CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setContent(comment.getContent());
        if (comment.getCreator() != null) {
            commentDto.setCreatorId(comment.getCreator().getUserId());
        } else {
            commentDto.setCreatorId(null);
        }
        if (comment.getTask() != null) {
            commentDto.setTaskId(comment.getTask().getTaskId());
        } else {
            commentDto.setTaskId(null);
        }
        return commentDto;
    }

    public static Comment mapToComment(CommentDto commentDto) {
        Comment comment = new Comment();
        comment.setId(commentDto.getId());
        comment.setContent(commentDto.getContent());
        if (commentDto.getCreatorId() != null) {
            User user = new User();
            user.setUserId(commentDto.getCreatorId());
            comment.setCreator(user);
        }
        if (commentDto.getTaskId() != null) {
            Task task = new Task();
            task.setTaskId(commentDto.getTaskId());
            comment.setTask(task);
        }
        return comment;
    }
}
