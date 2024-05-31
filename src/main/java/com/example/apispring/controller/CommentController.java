package com.example.apispring.controller;

import com.example.apispring.dto.CommentDto;
import com.example.apispring.service.CommentService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/add")
    public ResponseEntity<Object> createComment(@RequestBody CommentDto commentDto, HttpSession httpSession) {
        Long userId = (Long) httpSession.getAttribute("userId");
        if(userId != null){
            return ResponseEntity.ok(userId);
        }
//        else {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(userId);
//        }
//        return userId;
        boolean isSuccess = commentService.createCommentDto(commentDto);
        System.out.printf("GỌI" + isSuccess);
        if (isSuccess) {
            return ResponseEntity.ok().body(isSuccess);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @GetMapping("/task/{taskId}")
    public ResponseEntity<List<CommentDto>> getCommentsByTaskId(@PathVariable Long taskId) {
        List<CommentDto> comments = commentService.getCommentsByTaskId(taskId);
        return ResponseEntity.ok(comments);
    }
}
