package com.paf.socialmedia.controller;

import com.paf.socialmedia.document.PostShare;
import com.paf.socialmedia.service.PostShareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/postshare")
public class PostShareController {
    @Autowired
    private PostShareService postShareService;

    // Save a new shared post
    @PostMapping
    public ResponseEntity<?> savePost(@RequestBody PostShare postShare){
        return postShareService.savePost(postShare);
    }

    // Get all shared posts
    @GetMapping
    public ResponseEntity<?> getPosts(){
        return postShareService.getPosts();
    }

    // Get shared posts by user ID
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getsharedPostsByUserId(@PathVariable String id){
        return postShareService.getsharedPostsByUserId(id);
    }

    // Get a shared post by its ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(@PathVariable String id){
        return postShareService.getPostById(id);
    }

    // Update a shared post by its ID
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePostById(@PathVariable String id, @RequestBody PostShare postShare){
        return  postShareService.updatePostById(id,postShare);
    }

    // Delete a shared post by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePostById(@PathVariable String id){
        return postShareService.deletePostById(id);
    }
}

