---
id: lesson-1
title: "Network Programming in Ruby"
sidebar_label: Intro to Network Programming
sidebar_position: 1
description: "Network Programming in Ruby"
tags: [courses,Advance-level,Introduction]
---  
    

Network programming involves writing software that communicates over a network, typically using protocols like TCP/IP and UDP. Ruby provides libraries and classes to facilitate network communication.

#### **1. Introduction to Network Programming**

Network programming in Ruby generally involves working with sockets, which allow for communication between processes over a network. Ruby's standard library includes `Socket`, which provides fundamental networking functionalities.

#### **2. Working with Sockets**

**Sockets** are endpoints for sending and receiving data across a network. Ruby's `Socket` library allows you to create and use sockets for network communication.

**Example**: Basic TCP Client and Server

**TCP Server**:
```ruby
require 'socket'

server = TCPServer.new('localhost', 2000) # Create a server listening on port 2000

loop do
  client = server.accept     # Wait for a client to connect
  client.puts "Hello from server!" # Send a message to the client
  client.close               # Close the connection
end
```

**TCP Client**:
```ruby
require 'socket'

client = TCPSocket.new('localhost', 2000) # Connect to the server
puts client.gets              # Read the response from the server
client.close                 # Close the connection
```

**Output for TCP Client**:
```bash
Hello from server!
```
