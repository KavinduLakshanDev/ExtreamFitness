package com.paf.socialmedia.controller;

import com.paf.socialmedia.document.Comment;
import com.paf.socialmedia.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    // Get a comment by its ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getCommentById(@PathVariable String id){
        return commentService.getCommentById(id);
    }

    // Get all comments
    @GetMapping
    public ResponseEntity<?> getComments(){
        return commentService.getComments();
    }

    // Get comments associated with a specific post
    @GetMapping("/post/{id}")
    public ResponseEntity<?> getCommentsByPost(@PathVariable String id){
        return commentService.getCommentsByPost(id);
    }

    // Save a new comment
    @PostMapping
    public ResponseEntity<?> saveComment(@RequestBody Comment comment){
        return commentService.saveComment(comment);
    }

    // Update a comment by its ID
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCommentById(@PathVariable String id, @RequestBody Comment comment){
        return  commentService.updateCommentById(id,comment);
    }

    // Delete a comment by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCommentById(@PathVariable String id){
        return commentService.deleteCommentById(id);
    }
}

