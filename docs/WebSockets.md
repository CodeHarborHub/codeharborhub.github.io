# WebSockets for Real-Time Communication

## Introduction

WebSockets are a powerful technology for enabling real-time communication between clients and servers...

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


Client-Side Example:
To interact with this WebSocket server from a client, you would typically use JavaScript in a web browser:

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



