---
id: lesson-2
title: "Building Simple Client-Server Applications"
sidebar_label: Client-Server
sidebar_position: 2
description: "Building Simple Client-Server Applications"
tags: [courses,Advance-level,Introduction]
---  
     
In a client-server model, the server listens for incoming connections and handles requests, while the client connects to the server and sends requests.

**Example**: Basic HTTP Server

**HTTP Server**:
```ruby
require 'socket'

server = TCPServer.new(8080)

loop do
  client = server.accept
  request = client.gets
  puts request
  client.puts "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nHello World"
  client.close
end
```

**HTTP Client**:
```ruby
require 'socket'

client = TCPSocket.new('localhost', 8080)
client.puts "GET / HTTP/1.1\r\nHost: localhost\r\n\r\n"
response = client.read
puts response
client.close
```

**Output for HTTP Client**:
```bash
HTTP/1.1 200 OK
Content-Type: text/plain

Hello World
```

####  Understanding TCP/IP and UDP Protocols

**TCP (Transmission Control Protocol)**:
- Connection-oriented protocol.
- Ensures data is reliably delivered in order.
- Provides flow control and error recovery.

**UDP (User Datagram Protocol)**:
- Connectionless protocol.
- Does not guarantee delivery, order, or error recovery.
- Used for applications that need faster communication and can handle occasional data loss.

**Example**: Basic UDP Client and Server

**UDP Server**:
```ruby
require 'socket'

server = UDPSocket.new
server.bind('localhost', 2000)

loop do
  message, sender = server.recvfrom(1024)
  puts "Received message: #{message}"
  server.send("Message received", 0, sender[3], sender[1])
end
```

**UDP Client**:
```ruby
require 'socket'

client = UDPSocket.new
client.send("Hello UDP Server", 0, 'localhost', 2000)
response, _ = client.recvfrom(1024)
puts response
client.close
```

**Output for UDP Client**:
```bash
Message received
```

:::tip

1. **Handle Exceptions Gracefully**:
   - Network programming involves many potential points of failure, such as network issues or connection timeouts. Always handle exceptions to prevent your application from crashing.

2. **Use Asynchronous I/O for Better Performance**:
   - For applications that need to handle many simultaneous connections, consider using asynchronous I/O to improve performance.

3. **Secure Network Communication**:
   - For sensitive data, use secure protocols (e.g., TLS/SSL) and validate input to protect against attacks such as injection and man-in-the-middle. 

4. **Socket Types**:
   - Understand the difference between TCP (reliable, connection-oriented) and UDP (unreliable, connectionless) sockets to choose the right protocol for your application.

5. **Client-Server Model**:
   - In network programming, clearly define the roles and responsibilities of the client and server. Ensure proper handling of requests and responses.

6. **Error Handling**:
   - Network programming is prone to various errors due to network instability or incorrect configurations. Implement robust error handling to manage these issues effectively.
:::