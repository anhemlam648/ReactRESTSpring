package com.example.apispring.mapper;

import com.example.apispring.dto.TaskDto;
import com.example.apispring.entity.Category;
import com.example.apispring.entity.Task;
import com.example.apispring.entity.User;

public class TaskMapper {
    public static TaskDto mapToTaskDto(Task task) {
        TaskDto taskDto = new TaskDto();
        taskDto.setTaskId(task.getTaskId());
        taskDto.setTaskName(task.getTaskName());
        taskDto.setDescription(task.getDescription());
        taskDto.setStatus(task.getStatus());
        taskDto.setStartTime(task.getStartTime());
        taskDto.setDeadline(task.getDeadline());
        // Kiểm tra và gán categoryId, nếu category không null
        if (task.getCategory() != null) {
            taskDto.setCategoryId(task.getCategory().getCategoryId());
        } else {
            taskDto.setCategoryId(null); // Gán null nếu category là null
        }
        // Kiểm tra và gán creatorId, nếu creator không null
        if (task.getCreator() != null) {
            taskDto.setCreatorId(task.getCreator().getUserId());
        } else {
            taskDto.setCreatorId(null); // Gán null nếu creator là null
        }
        taskDto.setCreatedAt(task.getCreatedAt());
        taskDto.setUpdatedAt(task.getUpdatedAt());

        return taskDto;

    }

    public static Task mapToTask(TaskDto taskDto) {
        // Code ánh xạ từ TaskDto sang Task
        Task task = new Task();
        task.setTaskId(taskDto.getTaskId());
        task.setTaskName(taskDto.getTaskName());
        task.setDescription(taskDto.getDescription());
        task.setStatus(taskDto.getStatus());
        task.setStartTime(taskDto.getStartTime());
        task.setDeadline(taskDto.getDeadline());
        task.setCreatedAt(taskDto.getCreatedAt());
        task.setUpdatedAt(taskDto.getUpdatedAt());
        return task;
    }
}