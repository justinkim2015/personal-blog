package com.portfolio.justin.models;

import java.time.LocalDateTime;

import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Post {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String title;
	private String content;
	
	@CreatedDate
	private LocalDateTime createdAt;
	
	public Post() {
	}

	public Post(String title, String content) {
		super();
		this.title = title;
		this.content = content;
		this.createdAt = LocalDateTime.now();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String body) {
		this.content = body;
	}

	public LocalDateTime getCreatedDate() {
		return createdAt;
	}

	public void setCreatedDate(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}
