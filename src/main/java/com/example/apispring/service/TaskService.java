package com.example.apispring.service;
import com.example.apispring.dto.TaskDto;
import com.example.apispring.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TaskService {
//    TaskDto createTaskDto (TaskDto taskDto);
//    List<TaskDto> getAllTasks(TaskDto taskDto);
    boolean createTaskDto (TaskDto taskDto);
    boolean updateTaskDto (TaskDto taskDto);
    TaskDto getTaskById(Long taskId);
}
