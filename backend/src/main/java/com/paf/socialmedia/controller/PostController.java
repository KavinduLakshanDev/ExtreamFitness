package com.paf.socialmedia.controller;

import com.paf.socialmedia.document.Post;
import com.paf.socialmedia.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    // Save a new post
    @PostMapping
    public ResponseEntity<?> savePost(@RequestBody Post post){
        return postService.savePost(post);
    }

    // Get all posts
    @GetMapping
    public ResponseEntity<?> getPosts(){
        return postService.getPosts();
    }

    // Get posts by user ID
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getPostsByUserId(@PathVariable String id){
        return postService.getPostsByUserId(id);
    }

    // Get a post by its ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(@PathVariable String id){
        return postService.getPostById(id);
    }

    // Update a post by its ID
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePostById(@PathVariable String id, @RequestBody Post post){
        return  postService.updatePostById(id,post);
    }

    // Like a post by its ID
    @PutMapping("/like/{id}")
    public ResponseEntity<?> likePostById(@PathVariable String id, @RequestBody Post post){
        return  postService.likePostById(id,post);
    }

    // Delete a post by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePostById(@PathVariable String id){
        return postService.deletePostById(id);
    }
}

