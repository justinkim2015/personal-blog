package com.portfolio.justin.models;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Post {
	
	@Id
	@GeneratedValue
	private long id;
	private String title;
	private String body;
	
	@CreatedDate
	private LocalDateTime createdAt;
	
	public Post() {
	}

	public Post(String title, String body) {
		super();
		this.title = title;
		this.body = body;
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

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public LocalDateTime getCreatedDate() {
		return createdAt;
	}

	public void setCreatedDate(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}
