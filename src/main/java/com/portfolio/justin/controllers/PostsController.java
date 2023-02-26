package com.portfolio.justin.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.justin.models.Post;
import com.portfolio.justin.repositories.PostRepository;

@RestController
public class PostsController {
    private final PostRepository postRepository;

    public PostsController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping("/")
    public String greeting() {
        return "Hello";
    }

    @GetMapping("/posts")
    public List<Post> getPosts() {
        return postRepository.findAll();
    }
}
