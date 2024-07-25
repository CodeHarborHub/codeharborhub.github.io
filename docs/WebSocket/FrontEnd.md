---
id: web-socket-client
title: WebSocket Client
sidebar_label: WebSocket Client
sidebar_position: 3
tags: [Express.js,JavaScript,React.Js,WebSocket,WebSocket Client,Socket.io,Framework]
description: WebSocket Client.
---


## How to Connect in JavaScript

1. **Include Socket.io Client Library**: First, include the Socket.io client library in your frontend HTML file. You can either download it and include it locally or use a CDN. Here's how to include it via CDN:

   ```html
   <script src="https://cdn.socket.io/4.4.1/socket.io.min.js"></script>
   ```

2. **Connect to the WebSocket Server**: In your JavaScript file (typically your frontend JavaScript file), connect to the WebSocket server using the `io` object provided by Socket.io. `https://localhost:5000` with your actual server URL and port.

   ```javascript
   // Assuming this is your frontend JavaScript file
   
   // Connect to the WebSocket server
   const socket = io('https://localhost:5000', {
       withCredentials: true,  // if using credentials like cookies
       transports: ['websocket'] // explicitly request only websocket, not polling
   });

   // Event listener for connection established
   socket.on('connect', () => {
       console.log('Connected to WebSocket server');
   });

   // Event listener for disconnection
   socket.on('disconnect', () => {
       console.log('Disconnected from WebSocket server');
   });

   // Example: Sending a message to the server
   function sendMessage(message) {
       socket.emit('chat message', message);
   }

   // Example: Handling incoming messages from the server
   socket.on('chat message', (msg) => {
       console.log('Message received: ' + msg);
       // Handle the received message here
   });
   ```

3. **Interact with WebSocket Events**: You can now interact with the WebSocket events (`connect`, `disconnect`, and any custom events like `chat message`) as shown in the example above. Replace `'chat message'` with your specific event names and handle the data accordingly.

4. **Ensure CORS is Configured**: Make sure your server (`https://localhost:5000` in your case) is properly configured to allow WebSocket connections from your frontend domain (`https://localhost:3000`).

5. **Run Your Frontend Application**: Start your frontend application by opening your HTML file in a web browser or running your frontend JavaScript application using a development server.
 

## How to Connect in React.Js

To connect to a WebSocket server using Socket.io in a React.js application, you can follow a similar approach as described earlier. Here's a step-by-step guide on how to integrate Socket.io with React.js:

### 1. Set Up Your React Application

Assuming you already have a React.js application created, you can start by installing the necessary dependencies:

```bash
npm install socket.io-client
```

### 2. Create a WebSocket Connection in React Component

- React component where you want to establish the WebSocket connection (for example, in `App.js` or any other component like `Home.js`):

```javascript
import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://localhost:5000', {
    transports: ['websocket'], // explicitly request WebSocket transport
});

const App = () => {
    useEffect(() => {
        // Connect to WebSocket server
        socket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        // Handle disconnection
        socket.on('disconnect', () => {
            console.log('Disconnected from WebSocket server');
        });

        // Example: Handling incoming messages from the server
        socket.on('chat message', (msg) => {
            console.log('Message received: ', msg);
            // Handle the received message here
        });

        return () => {
            // Disconnect the socket when component unmounts
            socket.disconnect();
        };
    }, []); // Empty dependency array ensures this effect runs only once

    // Example function to send a message to the server
    const sendMessage = (message) => {
        socket.emit('chat message', message);
    };

    return (
        <div>
            <h1>React WebSocket Example</h1>
            {/* Your UI components here */}
        </div>
    );
};

export default App;
```

### 3. Explanation

- **Socket.io Client**: Import `socket.io-client` and create a WebSocket connection to your server (`https://localhost:5000` in this example).

- **useEffect Hook**: Use `useEffect` to handle lifecycle events (`connect`, `disconnect`) and to set up event listeners (`socket.on`). The `useEffect` hook is used here with an empty dependency array (`[]`) to ensure that the connection setup and event listeners are only set up once when the component mounts.

- **Sending Messages**: Use `socket.emit` to send messages to the server. In the example, `sendMessage` function is used to emit a `chat message` event with a message payload.

- **Handling Incoming Messages**: Use `socket.on` to listen for events emitted from the server (`'chat message'` in this case). When a message is received, you can handle it within the callback function.

- **Cleanup**: Use the cleanup function returned by `useEffect` to disconnect the socket when the component unmounts, ensuring no memory leaks or unexpected behavior.

### 4. Run Your React Application

Start your React application using:

```bash
npm start
```

This will run your React application and establish a WebSocket connection to your Socket.io server (`https://localhost:5000`). Ensure that your Socket.io server is properly configured with CORS settings to allow connections from your React application's domain (`https://localhost:3000`).
 
 ### Documentstion 
- How to connect client side please visit at [Socket.io Docs Client](https://socket.io/docs/v4/client-installation/)
