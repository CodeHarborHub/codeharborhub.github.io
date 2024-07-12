---
id: websockets-for-real-time-communication
title: WebSockets for Real-Time Communication
sidebar_label: Web Sockets
---

## Introduction

WebSockets are a powerful technology for enabling real-time communication between clients and servers...

**Purpose:** WebSocket is a protocol that provides full-duplex communication channels over a single TCP connection. Unlike HTTP, WebSocket enables continuous two-way communication between the client and the server.

**Connection:** WebSocket allows for long-lived connections that can send data both from the client to the server and vice versa. Once established, a WebSocket connection remains open until either the client or server decides to close it.

**Usage:** WebSocket is particularly useful for real-time applications where low-latency communication is critical, such as online gaming, financial trading platforms, chat applications, live sport score updates, and collaborative editing tools.

## Difference between HTTP & Websocket
**Connection Nature:** HTTP is stateless and request-response based, while WebSocket provides full-duplex communication with a persistent connection.

**Communication Overhead:** HTTP requests are heavier in terms of header information compared to WebSocket, which maintains a lightweight header after the initial handshake.

**Usage Scenarios:** HTTP is suitable for scenarios where data exchange is initiated by the client in a request-response fashion (like fetching web pages or making API calls). WebSocket is ideal for applications requiring real-time, bi-directional communication with low latency.

## WebSocket API

The WebSocket API provides methods and events for establishing and managing WebSocket connections...

## WebSocket Protocol

Unlike HTTP, WebSockets provide full-duplex communication over a single, long-lived connection...

## Implementing WebSockets

### Using WebSocket in Node.js

```javascript
// Example Node.js WebSocket server
// Example Node.js WebSocket server

const WebSocket = require('ws');

// Create a WebSocket server instance
const wss = new WebSocket.Server({ port: 8080 });

// WebSocket server listening event
wss.on('listening', () => {
  console.log('WebSocket server is listening on port 8080');
});

// WebSocket connection event
wss.on('connection', (ws) => {
  console.log('A new client connected');

  // Send a welcome message to the client
  ws.send('Welcome to the WebSocket server!');

  // WebSocket message event
  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);

    // Broadcast the received message to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`Broadcast: ${message}`);
      }
    });
  });

  // WebSocket close event
  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // WebSocket error event
  ws.on('error', (error) => {
    console.error(`WebSocket error: ${error}`);
  });
});

// Handle WebSocket server errors
wss.on('error', (error) => {
  console.error(`WebSocket server error: ${error}`);
});
```

Client-Side Example:
To interact with this WebSocket server from a client, you would typically use JavaScript in a web browser:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>WebSocket Client</title>
  <script>
    const ws = new WebSocket('ws://localhost:8080');

    // WebSocket open event
    ws.addEventListener('open', () => {
      console.log('Connected to WebSocket server');
    });

    // WebSocket message event
    ws.addEventListener('message', (event) => {
      console.log(`Received message from server: ${event.data}`);
    });

    // WebSocket close event
    ws.addEventListener('close', () => {
      console.log('Disconnected from WebSocket server');
    });

    // Function to send a message to the WebSocket server
    function sendMessage() {
      const message = document.getElementById('message').value;
      ws.send(message);
    }
  </script>
</head>
<body>
  <h1>WebSocket Client</h1>
  <input type="text" id="message" placeholder="Enter message">
  <button onclick="sendMessage()">Send</button>
</body>
</html>
```
## When to Use HTTP/REST Instead:

**Stateless Operations:** If your application involves primarily stateless operations (like retrieving data from a database or serving static resources), HTTP/REST is more appropriate.

**Caching and Proxies:** HTTP has built-in support for caching and works seamlessly with proxies, making it suitable for content delivery networks (CDNs) and distributed systems.

**Compatibility:** HTTP endpoints are easier to integrate with existing infrastructure and can be accessed from a wide range of clients (browsers, mobile apps, etc.).

## Conclusion
While HTTP/REST is excellent for many types of client-server interactions and resource fetching, WebSocket is indispensable for real-time applications and scenarios where low-latency, bidirectional communication is necessary. Choosing between them depends on the specific requirements and nature of your application.
