package com.example.apispring.controller;

import com.example.apispring.dto.TaskDto;
import com.example.apispring.service.Impl.TaskServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping ("/tasks")
//@CrossOrigin(origins = "*")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {
    @Autowired
    private TaskServiceImpl taskServiceimpl;

    @GetMapping("/list")
    @ResponseBody
    public ResponseEntity<List<TaskDto>> getAllTasks() {
        List<TaskDto> taskDtos = this.taskServiceimpl.getAllTasks();
        if (taskDtos != null) {
            return ResponseEntity.ok(taskDtos);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(taskDtos) ;
        }
    }

}
