---
id: socket-programming
title: Python - Socket Programming
sidebar_label: Socket Programming
sidebar_position: 2
tags: [python, socket, networking, programming, python socket, client-server]
description: This tutorial covers the basics of socket programming in Python, including how to create server and client sockets, and transfer data between them.
---

# Python - Socket Programming

The `socket` module in the standard library includes functionality required for communication between server and client at the hardware level. This module provides access to the BSD socket interface and is available on all operating systems such as Linux, Windows, and MacOS.

## What are Sockets?

Sockets are the endpoints of a bidirectional communications channel. They may communicate within a process, between processes on the same machine, or between processes on different continents. A socket is identified by the combination of an IP address and port number, and should be properly configured at both ends to begin communication.

![connection image](https://www.tutorialspoint.com/python/images/connection.jpg)

![ip address image](https://www.tutorialspoint.com/python/images/ip_address.jpg)

### Connection Types

Sockets may be implemented over different channel types: Unix domain sockets, TCP, UDP, etc. The `socket` library provides specific classes for handling common transports as well as a generic interface for handling others.

The term "socket programming" implies programmatically setting up sockets to send and receive data. There are two types of communication protocols:

1. **Connection-oriented protocol**: TCP (Transmission Control Protocol)
2. **Connection-less protocol**: UDP (User Datagram Protocol)

| Protocol | Description |
| -------- | ----------- |
| TCP      | A reliable connection-oriented protocol. Data is transmitted in packets by the server and assembled in the same order of transmission by the receiver. |
| UDP      | A connectionless protocol. It is less reliable because sockets do not require establishing any connection or termination process for transferring data. |

## The Python `socket` Module

This module includes the `Socket` class. A socket object represents the pair of hostname and port number. The constructor method has the following signature:

### Syntax
```python
socket.socket(socket_family, socket_type, protocol=0)
```

### Parameters
- `family`: AF_INET by default. Other values - AF_INET6, AF_UNIX, AF_CAN, or AF_RDS.
- `socket_type`: Should be `SOCK_STREAM` (the default), `SOCK_DGRAM`, `SOCK_RAW`, or another `SOCK_` constant.
- `protocol`: Number is usually zero and may be omitted.

### Return Type
This method returns a socket object. Once you have the socket object, you can use the required methods to create your client or server program.

## Server Socket Methods

The socket instantiated on the server is called a server socket. Following methods are available to the socket object on the server:

| Method | Description |
| ------ | ----------- |
| `bind()` | Binds the socket to specified IP address and port number. |
| `listen()` | Starts server and runs into a listen loop looking for connection requests from clients. |
| `accept()` | When a connection request is intercepted, accepts it and identifies the client socket with its address. |

### Example: Creating a Server Socket

```python
import socket

server = socket.socket()
server.bind(('localhost', 12345))
server.listen()
client, addr = server.accept()
print("Connection request from: " + str(addr))
```

By default, the server is bound to the local machine's IP address `localhost`, listening at an arbitrary empty port number.

## Client Socket Methods

A similar socket is set up on the client end. It mainly sends a connection request to the server socket listening at its IP address and port number.

| Method   | Description |
| -------- | ----------- |
| `connect()` | Takes a two-item tuple (IP address and port number of the server). |
| `send()`    | Sends data to the socket it has established a connection with. |
| `sendall()` | Continues to send data from bytes until all data has been sent or an error occurs. |
| `sendto()`  | Used in case of UDP protocol. |
| `recv()`    | Retrieves data sent to the client. |
| `recvfrom()`| Used in case of UDP protocol. |

### Example: Creating a Client Socket

```python
import socket

obj = socket.socket()
obj.connect(('localhost', 12345))
message = input("Type message: ")
while message != 'q':
    obj.send(message.encode())
    data = obj.recv(1024).decode()
    print('Received from server: ' + data)
    message = input("Type message: ")
obj.close()
```

## Python - Socket Server

To write Internet servers, we use the `socket` function available in the `socket` module to create a socket object. A socket object is then used to call other functions to set up a socket server.

### Example: Server Code

```python
import socket

host = "127.0.0.1"
port = 5001
server = socket.socket()
server.bind((host, port))
server.listen()
conn, addr = server.accept()
print("Connection from: " + str(addr))
while True:
    data = conn.recv(1024).decode()
    if not data:
        break
    data = str(data).upper()
    print("From client: " + str(data))
    data = input("Type message: ")
    conn.send(data.encode())
conn.close()
```

## Python - Socket Client

Let us write a simple client program, which opens a connection to a given port (5001) and a given localhost. 

The socket.connect(hosname, port) opens a TCP connection to hostname on the port. Once you have a socket open, you can read from it like any IO object. When done, remember to close it, as you would close a file.

The following code is a very simple client that connects to a given host and port, reads any available data from the socket, and then exits when 'q' is entered.

### Example: Client Code

```python
import socket

host = '127.0.0.1'
port = 5001
obj = socket.socket()
obj.connect((host, port))
message = input("Type message: ")
while message != 'q':
    obj.send(message.encode())
    data = obj.recv(1024).decode()
    print('Received from server: ' + data)
    message = input("Type message: ")
obj.close()
```

## Server-Client Interaction

Run the server code first to start listening. Then start the client code to send a request. The interaction follows these steps:

1. Server starts and listens for a connection.
2. Client sends a request.
3. Server accepts the request and identifies the client address.
4. Data exchange occurs between server and client.

![server_client_interaction](https://www.tutorialspoint.com/python/images/server_client_interaction.jpg)



## Python File Transfer with Socket Module

The following programs demonstrate how socket communication can be used to transfer a file from server to client.

### Server Code

```python
import socket

host = "127.0.0.1"
port = 5001
server = socket.socket()
server.bind((host, port))
server.listen()
conn, addr = server.accept()
data = conn.recv(1024).decode()
filename = 'test.txt'
f = open(filename, 'rb')
while True:
    l = f.read(1024)
    if not l:
        break
    conn.send(l)
    print('Sent', repr(l))
f.close()
print('File transferred')
conn.close()
```

### Client Code

```python
import socket

s = socket.socket()
host = "127.0.0.1"
port = 5001

s.connect((host, port))
s.send("Hello server!".encode())

with open('recv.txt', 'wb') as f:
    while True:
        print('Receiving data...')
        data = s.recv(1024)
        if not data:
            break
        f.write(data)
f.close()
print('Successfully received')
s.close()
print('Connection closed')
```

## The Python `socketserver` Module

The `socketserver` module in Python's standard library is a framework for simplifying the task of writing network servers. 

| Class | Description |
| ----- | ----------- |
| `TCPServer` | Uses the internet TCP protocol, provides continuous streams of data between the client and server. |
| `UDPServer` | Meant to be used for UDP protocol. |
| `UnixDatagramServer` | Uses Unix domain sockets; not available on non-Unix platforms. |

### Example: Server Code with `socketserver`

```python
import socketserver

class MyTCPHandler(socketserver.BaseRequestHandler):
    def handle(self):
        self.data = self.request.recv(1024).strip()
        host, port = self.client_address
        print("{}:{} wrote:".format(host, port))
        print(self.data.decode())
        msg = input("Enter text: ")
        self.request.sendall(msg.encode())

if __name__ == "__main__":
    HOST, PORT = "localhost", 9999
    with socketserver.TCPServer((HOST, PORT), MyTCPHandler) as server:
        server.serve_forever()
```

### Example: Client Code

```python
import socket

HOST, PORT = "localhost", 9999

while True:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.connect((HOST, PORT))
        data = input("Enter text: ")
        sock.sendall(bytes(data + "\n", "utf-8"))
        received = str(sock.recv(1024), "utf-8")
        print("Sent: {}".format(data))
        print("Received: {}".format(received))
```

Run the server code in one terminal and the client code in multiple terminals to simulate concurrent communication between the server and multiple clients.

## Conclusion

In this tutorial, we covered the basics of socket programming in Python, including how to create server and client sockets, transfer data, and use the `socketserver` module for simplifying network server tasks.

Next, we'll delve into more advanced topics in socket programming.