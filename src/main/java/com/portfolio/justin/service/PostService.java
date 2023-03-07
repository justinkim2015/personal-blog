package com.portfolio.justin.service;

import com.portfolio.justin.repositories.PostRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class PostService {
    private PostRepository postRepository;
}
