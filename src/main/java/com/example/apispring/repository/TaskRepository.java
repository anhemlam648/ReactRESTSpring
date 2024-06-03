package com.example.apispring.repository;

import com.example.apispring.dto.TaskDto;
import com.example.apispring.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository <Task, Long> {
//    @Query("SELECT t.taskId, t.createdAt, t.deadline, t.description, t.startTime, t.status, t.taskName, t.updatedAt, t.category.categoryId, t.creator.userId FROM Task t")
//    List<Object[]> findAll();
//    List<Task> findByTaskName(String taskName);
    List<Task> findByTaskNameContainingIgnoreCase(String taskName);
    List<Task> findByCategoryCategoryName(String categoryName);
    List<Task> findByCreatorUserId (Long creatorId);
}
