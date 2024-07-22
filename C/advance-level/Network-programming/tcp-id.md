---
id: lesson-2
title: "Basic TCP/IP Communication"
sidebar_label: Basic TCP/IP Communication
sidebar_position: 2
description: "Learn Basic TCP/IP Communication in C"
tags: [courses,Advance-level,Introduction]
---   
 

- **TCP**: A connection-oriented protocol that ensures reliable data delivery. It establishes a connection between client and server before data transmission.

- **IP**: Handles addressing and routing of data packets across networks.

:::note
**Key Functions**:
- `socket()`: Creates a new socket.
- `bind()`: Binds the socket to an address and port.
- `listen()`: Puts the socket in listening mode.
- `accept()`: Accepts incoming connections.
- `connect()`: Connects to a remote socket.
- `send()`: Sends data through the socket.
- `recv()`: Receives data from the socket.
- `close()`: Closes the socket.
:::

####  Simple Network Applications

- **Chat Application**: A simple application where multiple clients can chat with each other via a server.
- **File Transfer**: An application to send and receive files over a network.
- **HTTP Server**: A basic web server that handles HTTP requests and serves web pages.

### Summary

- **Network Programming**: Creating software to communicate over a network.
- **Sockets**: Essential for network communication, used to send and receive data.
- **Client-Server Model**: Server provides services, client requests services.
- **TCP/IP Communication**: Ensures reliable data transfer between networked systems.
- **Examples**: Basic TCP server and client to demonstrate network communication.
