---
id: lesson-1
title: "WebSockets for Real-time Communication"
sidebar_label: websocket
sidebar_position: 1
description: "Learn to WebSockets for Real-time Communication."
tags: [courses,advance-level,websocket,Introduction]
---  
  

WebSockets provide a full-duplex communication channel over a single, long-lived connection, enabling real-time interaction between a client and a server. Unlike HTTP, WebSocket communication can happen in both directions, simultaneously, which makes it ideal for real-time applications like chat systems, gaming, live updates, and more.

**Basic Steps:**

1. **Establish a WebSocket Connection:**
   ```javascript
   var socket = new WebSocket('ws://example.com/socketserver');

   socket.onopen = function(event) {
     console.log('WebSocket connection opened:', event);
   };

   socket.onmessage = function(event) {
     console.log('Message from server:', event.data);
   };

   socket.onclose = function(event) {
     console.log('WebSocket connection closed:', event);
   };

   socket.onerror = function(event) {
     console.error('WebSocket error:', event);
   };
   ```

2. **Send Data to the Server:**
   ```javascript
   socket.send('Hello, Server!');
   ```

3. **Close the Connection:**
   ```javascript
   socket.close();
   ```

**Example Usage:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>WebSocket Example</title>
</head>
<body>
  <script>
    var socket = new WebSocket('ws://example.com/socketserver');

    socket.onopen = function(event) {
      console.log('WebSocket connection opened:', event);
      socket.send('Hello, Server!');
    };

    socket.onmessage = function(event) {
      console.log('Message from server:', event.data);
    };

    socket.onclose = function(event) {
      console.log('WebSocket connection closed:', event);
    };

    socket.onerror = function(event) {
      console.error('WebSocket error:', event);
    };
  </script>
</body>
</html>
```