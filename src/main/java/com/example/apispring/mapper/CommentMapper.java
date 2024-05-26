package com.example.apispring.mapper;

import com.example.apispring.dto.CommentDto;
import com.example.apispring.entity.Comment;
import com.example.apispring.entity.User;

public class CommentMapper {
    public static CommentDto mapToCommentDto (Comment comment){
       CommentDto commentDto = new CommentDto();
       commentDto.setId(comment.getId());
       commentDto.setContent(commentDto.getContent());
       if(comment.getCreator() != null){
           commentDto.setCreatorId(comment.getCreator().getUserId());
       }else{
           commentDto.setCreatorId(null);
       }
      return commentDto;
    }

    public static Comment mapToComment (CommentDto commentDto){
        Comment comment = new Comment();
        comment.setId(commentDto.getId());
        comment.setContent(commentDto.getContent());
        if(commentDto.getCreatorId() != null){
            User user = new User();
            user.setUserId(commentDto.getCreatorId());
            comment.setCreator(user);
        }
        return comment;
    }

}
