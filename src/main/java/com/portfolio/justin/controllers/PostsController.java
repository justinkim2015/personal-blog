package com.portfolio.justin.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.justin.PostNotFoundException;
import com.portfolio.justin.models.Post;
import com.portfolio.justin.repositories.PostRepository;

@RestController
public class PostsController {
    private final PostRepository postRepository;

    public PostsController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping("/posts")
    public List<Post> getPosts() {
        return postRepository.findAll();
    }
    
    @GetMapping("/posts/{id}")
    Post getPost(@PathVariable Long id) {
      
        return postRepository.findById(id)
        	      .orElseThrow(() -> new PostNotFoundException(id));
    }
    
    @PostMapping("/posts")
    public ResponseEntity createPost(@RequestBody Post post) throws URISyntaxException {
    	Post savedPost = postRepository.save(post);
    	return ResponseEntity.created(new URI("/posts/" + savedPost.getId())).body(savedPost);
    }
  }
