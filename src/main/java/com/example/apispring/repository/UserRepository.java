package com.example.apispring.repository;

import com.example.apispring.entity.Task;
import com.example.apispring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
//    Optional<User> findEmailandPassword (String email, String password);
    Optional<User> findByEmail(String email);

}
