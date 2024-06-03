package com.example.apispring.controller;

import com.example.apispring.dto.TaskDto;
import com.example.apispring.entity.Task;
import com.example.apispring.service.Impl.TaskServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(taskDtos);
        }
    }

    @PostMapping("/add")
    @ResponseBody
    public ResponseEntity createTask(@RequestBody() TaskDto taskDto) {
        boolean isSuccess = this.taskServiceimpl.createTaskDto(taskDto);
        System.out.println("GỌI " + isSuccess);
        if (isSuccess) {
            return ResponseEntity.ok(isSuccess);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(isSuccess);
    }

    @GetMapping("/task/{taskId}")
    @ResponseBody
    public ResponseEntity getTaskById(@PathVariable Long taskId) {
        TaskDto taskDto = this.taskServiceimpl.getTaskById(taskId);
        if (taskDto != null) {
            return ResponseEntity.ok(taskDto);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found");
        }
    }

    @PutMapping("/update/{taskId}")
    @ResponseBody
    public ResponseEntity updateTask(@PathVariable Long taskId, @RequestBody TaskDto taskDto) {
        taskDto.setTaskId(taskId);
        boolean isSuccess = this.taskServiceimpl.updateTaskDto(taskDto);
        System.out.println("Gọi update Task " + isSuccess);
        if (isSuccess) {
            return ResponseEntity.ok(isSuccess);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(isSuccess);
        }
    }

    @DeleteMapping("/delete/{taskId}")
    @ResponseBody
    public ResponseEntity deleteTask(@PathVariable Long taskId) {
        boolean isSuccess = this.taskServiceimpl.deleteTaskById(taskId);
        System.out.println("Gọi delete Task " + isSuccess);
        if (isSuccess) {
            return ResponseEntity.ok(isSuccess);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(isSuccess);
        }
    }

//    @GetMapping("/search")
//    @ResponseBody
//    public ResponseEntity searchTask(@RequestParam(required = false) String taskName) {
//        List<TaskDto> searchTask = this.taskServiceimpl.searchTask(taskName);
//        if (!searchTask.isEmpty()) {
//            return ResponseEntity.ok(searchTask);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("task not found");
//        }
//    }
        @GetMapping("/search")
        @ResponseBody
        public ResponseEntity searchTask(@RequestParam(required = false) String taskName) {
            if (taskName != null && !taskName.isEmpty()) {
                List<TaskDto> searchTask = this.taskServiceimpl.searchTask(taskName);
                if (!searchTask.isEmpty()) {
                    return ResponseEntity.ok(searchTask);
                } else {
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
                }
            } else {
                return ResponseEntity.badRequest().build();
            }
      }

      @GetMapping("/filtertask")
      @ResponseBody
      public ResponseEntity<List<TaskDto>> filterTask(@RequestParam String categoryName){
        List<TaskDto> categoryTask = taskServiceimpl.filterTask(categoryName);
          if(!categoryTask.isEmpty()){
              return ResponseEntity.ok(categoryTask);
          }
          else {
              return ResponseEntity.noContent().build();
          }

      }
      @GetMapping("/creator/{userId}")
      @ResponseBody
      public ResponseEntity<List<TaskDto>> getTaskbyCreator(@PathVariable Long creatorId){
        List<TaskDto> taskList = taskServiceimpl.findTasksByCreator(creatorId);
        if(!taskList.isEmpty()){
            return ResponseEntity.ok(taskList);
        }else {
            return ResponseEntity.noContent().build();
        }
      }

}
