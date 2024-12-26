package com.paf.socialmedia.controller;

import com.paf.socialmedia.document.Notification;
import com.paf.socialmedia.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/notifications")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;

    // Get a notification by its ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getNotificationById(@PathVariable String id){
        return notificationService.getNotificationById(id);
    }

    // Get all notifications
    @GetMapping
    public ResponseEntity<?> getNotifications(){
        return notificationService.getNotifications();
    }

    // Get unread notifications for a specific user
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUnreadNotificationsByUserId(@PathVariable String id){
        return notificationService.getUnreadNotificationsByUserId(id);
    }

    // Save a new notification
    @PostMapping
    public ResponseEntity<?> saveNotification(@RequestBody Notification notification){
        return notificationService.saveNotification(notification);
    }

    // Update a notification by its ID
    @PutMapping("/{id}")
    public ResponseEntity<?> updateNotificationById(@PathVariable String id, @RequestBody Notification notification){
        return  notificationService.updateNotificationById(id,notification);
    }

    // Delete a notification by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNotificationById(@PathVariable String id){
        return notificationService.deleteNotificationById(id);
    }
}

