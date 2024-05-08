package com.example.apispring.service.Impl;

import com.example.apispring.dto.TaskDto;
import com.example.apispring.entity.Category;
import com.example.apispring.entity.Task;
import com.example.apispring.entity.User;
import com.example.apispring.mapper.TaskMapper;
import com.example.apispring.repository.CategoryRepository;
import com.example.apispring.repository.TaskRepository;
import com.example.apispring.repository.UserRepository;
import com.example.apispring.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;
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

    @Override
    public boolean updateTaskDto(TaskDto taskDto) {
        Optional<Task> optionalTask = this.taskRepository.findById(taskDto.getTaskId());
        if(optionalTask.isPresent()){
            Task task = optionalTask.get();
            task.setTaskName(taskDto.getTaskName());
            task.setDescription(taskDto.getDescription());
            task.setStatus(taskDto.getStatus());
            task.setStartTime(taskDto.getStartTime());
            task.setDeadline(taskDto.getDeadline());
            task.setCreatedAt(taskDto.getCreatedAt());
            task.setUpdatedAt(taskDto.getUpdatedAt());
            // cap nhat User
            Optional<User> optionalUser = this.userRepository.findById(taskDto.getCreatorId());
            optionalUser.ifPresent(task::setCreator);
            // cap nhat Category
            Optional<Category> optionalCategory = this.categoryRepository.findById(taskDto.getCategoryId());
            optionalCategory.ifPresent(task::setCategory);
            taskRepository.save(task);
            return true;
        }
        return false;
    }

    @Override
    public TaskDto getTaskById(Long taskId) {
        Optional<Task> optionalTask = taskRepository.findById(taskId);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            return TaskMapper.mapToTaskDto(task);
        } else {
            return null;
        }
    }

    @Override
    public boolean deleteTaskById(Long taskId) {
        Optional<Task> deleteTask = taskRepository.findById(taskId);
        if(deleteTask.isPresent()){
            taskRepository.delete(deleteTask.get());
            return true;
        }
        return false;
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
