---
id: web-socket-server
title: WebSocket Server
sidebar_label: WebSocket Server
sidebar_position: 2
tags: [Express.js,JavaScript,React.Js,WebSocket,WebSocket Server,Socket.io,Framework]
description: WebSocket Server.
---

## Why we will use `socket.io`

If you want to configure CORS for your Socket.io server without using additional packages like `cors`, you can directly configure it within the `socketio` initialization options.

```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Configure Socket.io with CORS
const io = new Server(server, {
    cors: {
        origin: "https://localhost:3000", // Allow from specific origin
        methods: ["GET", "POST"] // Allow only GET and POST methods
    }
});

// Socket.io connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Example: Handle incoming messages
    socket.on('chat message', (msg) => {
        console.log('Message received: ' + msg);
        io.emit('chat message', msg); // Broadcast message to all connected clients
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### Explanation:

1. **Socket.io Server Initialization:**
   - Instead of importing `socket.io`, we're using `{ Server }` from `socket.io`. This allows us to directly configure the server options when creating the instance.

2. **CORS Configuration:**
   - The `cors` option within `Server` constructor allows specifying CORS settings.
   - `origin`: Specifies the allowed origin. In this example, it allows requests from `https://localhost:3000`.
   - `methods`: Specifies the allowed HTTP methods. Here, only `GET` and `POST` methods are allowed.

3. **Socket.io Connection Handling:**
   - Handles socket connections (`io.on('connection', ...)`) and disconnections (`socket.on('disconnect', ...)`).
   - Includes an example of handling incoming messages (`socket.on('chat message', ...)`), echoing them back to all clients (`io.emit('chat message', ...)`).

4. **Server Startup:**
   - Starts the HTTP server (`server.listen(...)`), specifying the port number (`PORT`) to listen on.

This setup allows you to control CORS directly within the Socket.io server configuration, without needing additional middleware like `cors`. Adjust the `origin` and `methods` as per your specific requirements. Remember to handle client-side connections and events accordingly in your frontend application.

### Documentation

- How to connect and use the `socket.io` please visit at [Socket.io Docs](https://socket.io/docs/v4/)