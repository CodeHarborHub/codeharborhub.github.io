---
id: lesson-1
title: "Network Programming in C"
sidebar_label: Network Programming
sidebar_position: 1
description: "Learn Network Programming in C"
tags: [courses,Advance-level,Introduction]
---   

Network programming involves creating applications that communicate over a network, such as the internet or a local network. This section covers the basics of network programming, including sockets, the client-server model, and TCP/IP communication.

#### 1. Introduction to Network Programming

- **Network Programming**: Involves creating software that communicates over a network. It is essential for developing applications that rely on data exchange between different systems.

- **Protocols**: Standard rules for data communication. Common protocols include TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).

- **Sockets**: Endpoints for sending or receiving data across a network. They are fundamental to network programming.

#### 2. Sockets and Socket Programming

- **Socket**: A software abstraction that allows programs to communicate over a network. Sockets provide a programming interface for network communication.

- **Socket Programming Basics**:
  - **Creating a Socket**: Use `socket()` function.
  - **Binding**: Associate a socket with a specific address and port using `bind()`.
  - **Listening**: Prepare a socket to accept incoming connections using `listen()`.
  - **Accepting Connections**: Accept connections from clients using `accept()`.
  - **Sending and Receiving Data**: Use `send()` and `recv()` for data transmission.
  - **Closing a Socket**: Close a socket with `close()`.

**Example of a Basic TCP Server and Client in C**

- **TCP Server Example**:
  ```c
  // server.c
  #include <stdio.h>
  #include <stdlib.h>
  #include <string.h>
  #include <unistd.h>
  #include <arpa/inet.h>

  #define PORT 8080

  int main() {
      int server_fd, new_socket;
      struct sockaddr_in address;
      int addrlen = sizeof(address);
      char buffer[1024] = {0};
      const char *hello = "Hello from server";

      // Create socket file descriptor
      if ((server_fd = socket(AF_INET, SOCK_STREAM, 0)) == 0) {
          perror("socket failed");
          exit(EXIT_FAILURE);
      }

      // Set socket options
      int opt = 1;
      if (setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR | SO_REUSEPORT, &opt, sizeof(opt))) {
          perror("setsockopt");
          exit(EXIT_FAILURE);
      }

      address.sin_family = AF_INET;
      address.sin_addr.s_addr = INADDR_ANY;
      address.sin_port = htons(PORT);

      // Bind the socket
      if (bind(server_fd, (struct sockaddr *)&address, sizeof(address)) < 0) {
          perror("bind failed");
          exit(EXIT_FAILURE);
      }

      // Listen for incoming connections
      if (listen(server_fd, 3) < 0) {
          perror("listen");
          exit(EXIT_FAILURE);
      }

      // Accept incoming connection
      if ((new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t*)&addrlen)) < 0) {
          perror("accept");
          exit(EXIT_FAILURE);
      }

      // Read data from client
      read(new_socket, buffer, 1024);
      printf("Message from client: %s\n", buffer);

      // Send response to client
      send(new_socket, hello, strlen(hello), 0);
      printf("Hello message sent\n");

      // Close socket
      close(new_socket);
      close(server_fd);

      return 0;
  }
  ```

- **TCP Client Example**:
  ```c
  // client.c
  #include <stdio.h>
  #include <stdlib.h>
  #include <string.h>
  #include <unistd.h>
  #include <arpa/inet.h>

  #define PORT 8080

  int main() {
      int sock = 0;
      struct sockaddr_in serv_addr;
      char *hello = "Hello from client";
      char buffer[1024] = {0};

      // Create socket file descriptor
      if ((sock = socket(AF_INET, SOCK_STREAM, 0)) < 0) {
          perror("Socket creation error");
          exit(EXIT_FAILURE);
      }

      serv_addr.sin_family = AF_INET;
      serv_addr.sin_port = htons(PORT);

      // Convert IPv4 and IPv6 addresses from text to binary form
      if (inet_pton(AF_INET, "127.0.0.1", &serv_addr.sin_addr) <= 0) {
          perror("Invalid address/ Address not supported");
          exit(EXIT_FAILURE);
      }

      // Connect to server
      if (connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0) {
          perror("Connection failed");
          exit(EXIT_FAILURE);
      }

      // Send data to server
      send(sock, hello, strlen(hello), 0);
      printf("Hello message sent\n");

      // Read response from server
      read(sock, buffer, 1024);
      printf("Message from server: %s\n", buffer);

      // Close socket
      close(sock);

      return 0;
  }
  ```

**Output**:

- **Server Output**:
  ```
  Message from client: Hello from client
  Hello message sent
  ```

- **Client Output**:
  ```
  Hello message sent
  Message from server: Hello from server
  ```

#### 3. Client-Server Model

- **Client**: Initiates the connection to the server and requests services.
- **Server**: Waits for incoming connections from clients, processes requests, and sends responses.

**Steps**:
1. **Server**:
   - Creates a socket.
   - Binds to an address and port.
   - Listens for incoming connections.
   - Accepts connections and processes client requests.

2. **Client**:
   - Creates a socket.
   - Connects to the server’s address and port.
   - Sends requests and receives responses.
