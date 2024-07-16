---
id: lesson-2
title: "Server-Sent Events (SSE)"
sidebar_label: SSE
sidebar_position: 2
description: "Learn to Server-Sent Events (SSE) ."
tags: [courses,advance-level,SSE,Introduction]
---  
  

Server-Sent Events (SSE) enable servers to push updates to the client over a single HTTP connection. This is useful for applications that need real-time updates from the server, such as live news feeds, stock price updates, or real-time notifications.

**Basic Steps:**

1. **Establish an SSE Connection:**
   ```javascript
   var eventSource = new EventSource('http://example.com/events');

   eventSource.onmessage = function(event) {
     console.log('New message from server:', event.data);
   };

   eventSource.onerror = function(event) {
     console.error('SSE error:', event);
   };
   ```

2. **Handle Different Event Types:**
   ```javascript
   eventSource.addEventListener('customEvent', function(event) {
     console.log('Custom event data:', event.data);
   });
   ```

**Example Usage:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Server-Sent Events Example</title>
</head>
<body>
  <script>
    var eventSource = new EventSource('http://example.com/events');

    eventSource.onmessage = function(event) {
      console.log('New message from server:', event.data);
    };

    eventSource.onerror = function(event) {
      console.error('SSE error:', event);
    };

    eventSource.addEventListener('customEvent', function(event) {
      console.log('Custom event data:', event.data);
    });
  </script>
</body>
</html>
```
