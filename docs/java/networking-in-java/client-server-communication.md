---
id: client-server-communication
title: Client-Server Communication in Java
sidebar_label: Client-Server Communication
sidebar_position: 1
tags: [java, networking, client-server, communication]
description: In this tutorial, we will learn about client-server communication in Java. We will learn about how to create a client-server application in Java using sockets and streams.
---

# Client-Server Communication in Java

## Introduction

Client-server communication is a foundational concept in network programming, where clients request services and servers provide them. Java provides robust libraries to facilitate this communication using sockets.

## 1. Basic Concepts

### Client-Server Architecture

In client-server architecture, the client initiates communication and requests a service, while the server processes the request and sends a response.

### Sockets

A socket is an endpoint for communication between two machines. Java's `java.net` package provides the `Socket` class for client-side communication and the `ServerSocket` class for server-side communication.

## 2. Creating a Simple Server

### Server Code

The server listens for incoming connections on a specified port.

```java
import java.io.IOException;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class SimpleServer {
    public static void main(String[] args) {
        int port = 12345;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server is listening on port " + port);
            while (true) {
                Socket socket = serverSocket.accept();
                System.out.println("New client connected");
                OutputStream output = socket.getOutputStream();
                output.write("Hello, Client!".getBytes());
                socket.close();
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
```

## 3. Creating a Simple Client

### Client Code

The client connects to the server using the server's IP address and port.

```java
import java.io.IOException;
import java.io.InputStream;
import java.net.Socket;

public class SimpleClient {
    public static void main(String[] args) {
        String hostname = "localhost";
        int port = 12345;
        try (Socket socket = new Socket(hostname, port)) {
            InputStream input = socket.getInputStream();
            byte[] buffer = new byte[1024];
            int bytesRead = input.read(buffer);
            System.out.println("Server response: " + new String(buffer, 0, bytesRead));
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
```

## 4. Handling Multiple Clients

### Multithreaded Server

To handle multiple clients concurrently, use a thread for each client connection.

```java
import java.io.IOException;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class MultithreadedServer {
    public static void main(String[] args) {
        int port = 12345;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server is listening on port " + port);
            while (true) {
                Socket socket = serverSocket.accept();
                System.out.println("New client connected");
                new ServerThread(socket).start();
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}

class ServerThread extends Thread {
    private Socket socket;

    public ServerThread(Socket socket) {
        this.socket = socket;
    }

    public void run() {
        try {
            OutputStream output = socket.getOutputStream();
            output.write("Hello, Client!".getBytes());
            socket.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
```

## 5. Using Data Streams

### Server with Data Streams

Use `DataInputStream` and `DataOutputStream` for reading and writing data in a more structured way.

```java
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class DataStreamServer {
    public static void main(String[] args) {
        int port = 12345;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server is listening on port " + port);
            while (true) {
                Socket socket = serverSocket.accept();
                new DataStreamServerThread(socket).start();
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}

class DataStreamServerThread extends Thread {
    private Socket socket;

    public DataStreamServerThread(Socket socket) {
        this.socket = socket;
    }

    public void run() {
        try (DataOutputStream output = new DataOutputStream(socket.getOutputStream());
             DataInputStream input = new DataInputStream(socket.getInputStream())) {

            String message = input.readUTF();
            System.out.println("Received: " + message);
            output.writeUTF("Hello, Client! Received your message: " + message);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
```

### Client with Data Streams

```java
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;

public class DataStreamClient {
    public static void main(String[] args) {
        String hostname = "localhost";
        int port = 12345;
        try (Socket socket = new Socket(hostname, port);
             DataOutputStream output = new DataOutputStream(socket.getOutputStream());
             DataInputStream input = new DataInputStream(socket.getInputStream())) {

            output.writeUTF("Hello, Server!");
            String response = input.readUTF();
            System.out.println("Server response: " + response);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
```

## 6. Using Object Streams

### Server with Object Streams

Object streams allow you to send and receive Java objects.

```java
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class ObjectStreamServer {
    public static void main(String[] args) {
        int port = 12345;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server is listening on port " + port);
            while (true) {
                Socket socket = serverSocket.accept();
                new ObjectStreamServerThread(socket).start();
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}

class ObjectStreamServerThread extends Thread {
    private Socket socket;

    public ObjectStreamServerThread(Socket socket) {
        this.socket = socket;
    }

    public void run() {
        try (ObjectOutputStream output = new ObjectOutputStream(socket.getOutputStream());
             ObjectInputStream input = new ObjectInputStream(socket.getInputStream())) {

            String message = (String) input.readObject();
            System.out.println("Received: " + message);
            output.writeObject("Hello, Client! Received your message: " + message);
        } catch (IOException | ClassNotFoundException ex) {
            ex.printStackTrace();
        }
    }
}
```

### Client with Object Streams

```java
import java.io.*;
import java.net.Socket;

public class ObjectStreamClient {
    public static void main(String[] args) {
        String hostname = "localhost";
        int port = 12345;
        try (Socket socket = new Socket(hostname, port);
             ObjectOutputStream output = new ObjectOutputStream(socket.getOutputStream());
             ObjectInputStream input = new ObjectInputStream(socket.getInputStream())) {

            output.writeObject("Hello, Server!");
            String response = (String) input.readObject();
            System.out.println("Server response: " + response);
        } catch (IOException | ClassNotFoundException ex) {
            ex.printStackTrace();
        }
    }
}
```

## Conclusion

Client-server communication in Java can be efficiently managed using sockets. By following these examples, you can create simple or complex client-server applications that handle multiple clients, use data streams for structured communication, and even transfer Java objects. Understanding these fundamental concepts and best practices will help you build robust and scalable networked applications.
