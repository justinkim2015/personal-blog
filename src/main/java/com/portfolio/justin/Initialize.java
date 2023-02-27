package com.portfolio.justin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.portfolio.justin.models.Post;
import com.portfolio.justin.repositories.PostRepository;

@Component
public class Initialize implements CommandLineRunner {

	private final PostRepository repository;

	@Autowired
	public Initialize(PostRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Post("First", "This is my first post"));
		this.repository.save(new Post("Second", "This is my second post"));
		this.repository.save(new Post("Third", "This is my third post"));
		this.repository.save(new Post("Fourth", "This is my fourth post"));
		this.repository.save(new Post("Five-th", "This is my five-th pos... wait did I spell that right?"));
	}
}
