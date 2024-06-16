---
id: working-with-web-sockets
title: Working with Web Sockets in Java
sidebar_label: Working with Web Sockets
sidebar_position: 5
tags: [java, networking, web sockets]
description: In this tutorial, we will learn about working with web sockets in Java. We will learn about how to create a web socket client and server in Java using the `WebSocket` API.
---

# Working with Websockets in Java

## Introduction

Websockets provide a full-duplex communication channel over a single, long-lived connection between a client and a server. Java provides libraries for implementing both websocket clients and servers.

## 1. Websocket Server

### Using Tyrus (Reference Implementation for JSR 356)

Tyrus is the reference implementation for JSR 356, the Java API for websocket. You can create a websocket server using Tyrus.

1. Add Tyrus dependency to your `pom.xml`:

    ```xml
    <dependency>
        <groupId>org.glassfish.tyrus</groupId>
        <artifactId>tyrus-server</artifactId>
        <version>1.17</version>
    </dependency>
    ```

2. Implement a websocket endpoint:

    ```java
    import javax.websocket.*;
    import javax.websocket.server.*;

    @ServerEndpoint("/websocket")
    public class MyWebSocketServer {

        @OnOpen
        public void onOpen(Session session) {
            System.out.println("Client connected");
        }

        @OnMessage
        public String onMessage(String message) {
            System.out.println("Received message: " + message);
            return "Server received: " + message;
        }

        @OnClose
        public void onClose(Session session) {
            System.out.println("Connection closed");
        }
    }
    ```

### Using Spring Framework

Spring Framework provides support for building websocket servers with the `WebSocketHandler` interface.

1. Add Spring Websocket dependency to your `pom.xml`:

    ```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-websocket</artifactId>
    </dependency>
    ```

2. Implement a WebSocketHandler:

    ```java
    import org.springframework.web.socket.*;
    import org.springframework.web.socket.handler.TextWebSocketHandler;

    public class MyWebSocketHandler extends TextWebSocketHandler {

        @Override
        public void afterConnectionEstablished(WebSocketSession session) throws Exception {
            System.out.println("Connection established");
        }

        @Override
        protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
            System.out.println("Received message: " + message.getPayload());
            session.sendMessage(new TextMessage("Server received: " + message.getPayload()));
        }
    }
    ```

## 2. Websocket Client

### Using Tyrus

You can create a websocket client using Tyrus.

1. Add Tyrus dependency to your `pom.xml` (same as server):

2. Implement a websocket client:

    ```java
    import javax.websocket.*;
    import java.net.URI;

    @ClientEndpoint
    public class MyWebSocketClient {

        @OnOpen
        public void onOpen(Session session) {
            System.out.println("Connected to server");
            session.getAsyncRemote().sendText("Hello, Server");
        }

        @OnMessage
        public void onMessage(String message) {
            System.out.println("Received message from server: " + message);
        }

        @OnClose
        public void onClose(Session session) {
            System.out.println("Connection closed");
        }

        public static void main(String[] args) {
            String uri = "ws://localhost:8080/websocket";
            WebSocketContainer container = ContainerProvider.getWebSocketContainer();
            try {
                container.connectToServer(MyWebSocketClient.class, URI.create(uri));
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
    }
    ```

### Using Spring Framework

1. Add Spring Websocket dependency to your `pom.xml` (same as server):

2. Implement a WebSocketHandler:

    ```java
    import org.springframework.web.socket.*;
    import org.springframework.web.socket.handler.TextWebSocketHandler;

    public class MyWebSocketHandler extends TextWebSocketHandler {

        @Override
        public void afterConnectionEstablished(WebSocketSession session) throws Exception {
            System.out.println("Connected to server");
            session.sendMessage(new TextMessage("Hello, Server"));
        }

        @Override
        protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
            System.out.println("Received message from server: " + message.getPayload());
        }

        @Override
        public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
            System.out.println("Connection closed");
        }
    }
    ```

## 3. Best Practices

- **Keep Messages Lightweight:** Minimize the size of messages exchanged over the websocket connection to improve performance.
- **Handle Errors Gracefully:** Implement error handling mechanisms to deal with connection failures, timeouts, and other issues.
- **Use Secure Websockets (WSS):** For secure communication, use WSS (Websockets over HTTPS) instead of WS.

## Conclusion

Websockets provide a powerful mechanism for real-time communication between clients and servers. In Java, you can implement websocket servers and clients using libraries like Tyrus and Spring Websocket. Understanding how to use these libraries effectively will enable you to build robust and scalable websocket-based applications.
