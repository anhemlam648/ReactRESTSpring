package com.example.apispring.service.Impl;

import com.example.apispring.dto.TaskDto;
import com.example.apispring.entity.Task;
import com.example.apispring.mapper.TaskMapper;
import com.example.apispring.repository.TaskRepository;
import com.example.apispring.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public boolean createTaskDto(TaskDto taskDto) {
        Task task = TaskMapper.mapToTask(taskDto);
        Task savedTask = taskRepository.save(task);
//        return TaskMapper.mapToTaskDto(savedTask);
        return savedTask != null;
    }

    public List<TaskDto> getAllTasks() {
        List<TaskDto> taskDtos = taskRepository.findAll().stream()
                .map(TaskMapper::mapToTaskDto)
                .collect(Collectors.toList());
        return taskDtos;
    }
//    @Override
//    public List<TaskDto> getAllTasks() {
//        List<TaskDto> taskDtos = taskRepository.findAll().stream()
//                .map(TaskMapper::mapToTaskDto)
//                .collect(Collectors.toList());
//        return taskDtos;
//    }
}
