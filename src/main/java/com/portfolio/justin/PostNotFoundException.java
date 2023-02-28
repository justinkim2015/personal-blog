package com.portfolio.justin;

public class PostNotFoundException extends RuntimeException {

	PostNotFoundException(Long id) {
		super("Could not find post" + id);
	}
}
