---
id: lesson-1
title: "Network Programming in C++"
sidebar_label: Network Programming
sidebar_position: 1
description: "Learn Network Programming in C++"
tags: [courses,Advance-level,Introduction]
---   
 

Network programming involves writing programs that communicate over a network, typically using sockets. Sockets provide a way for programs to exchange data, either locally on the same machine or over a network.

#### 1. Introduction to Network Programming

**Network Programming** allows computers to communicate over a network. It is essential for developing applications like web browsers, email clients, and chat applications.

#### 2. Sockets and Socket Programming

**Sockets** are endpoints for sending and receiving data. They can use various protocols, but the most common ones are TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).

##### Types of Sockets:
- **Stream Sockets (TCP)**: Provide reliable, connection-oriented communication.
- **Datagram Sockets (UDP)**: Provide connectionless, unreliable communication.

#### 3. Client-Server Model

The **Client-Server Model** is a common design pattern in network programming. The server provides services, and the client consumes these services.

##### Example Workflow:
1. **Server**: Listens for incoming connections.
2. **Client**: Connects to the server.
3. **Client and Server**: Exchange data.
