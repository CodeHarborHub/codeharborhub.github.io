---
title: 'Node JS'
sidebar_label: Node JS
authors: [hitesh-gahanolia]
tags: [javascript , framework , node ]
date: 2024-06-13 12:29
hide_table_of_contents: true
---

Node.js is an open-source framework for building fast and scalable server-side JavaScript applications. Ryan Dahl created the Node.js framework in 2009. Built on the V8 JavaScript runtime, it uses an event-driven, non-blocking I/O model, which makes Node.js lightweight, efficient, and ideal for data-intensive concurrent applications on distributed devices.

Some of the world's leading companies use Node.js in production, including Netflix, Paypal, Walmart, and Uber.

Node.js also provides access to a large library of JavaScript modules, greatly simplifying the development of Node.js web applications. It allows developers to create command-line tools and server-side scripts using JavaScript.

## History of Node.js
In beginning, the web was simply displaying text files over networks via computer network protocols. Over time, the web expanded with the protocol's DNA, HTML, and HTTP.

JavaScript is a programming language created by Netscape in 1995, as a programming tool for manipulating web pages in Netscape Navigator. Netscape's business model involved selling web servers, including an environment called LiveWire that could render dynamic web pages using server-side JavaScript. Unfortunately, LiveWire was not very successful.

In 2009, a software engineer at Google, Ryan Dahl, created Node.js. In its first version, it only supported macOS and Linux, but eventually, other operating systems were also supported. Ryan Dahl led the development and maintenance of Node.js and was later supported by Joyent.


## Why to learn Node.js?
Node.js is famous due to the use of JavaScript across the entire stack, asynchronous programming model for handling multiple requests simultaneously, fast execution due to the V8 engine, large and active community support, scalability for real-time applications, cross-platform compatibility, and its role in enabling full-stack development. All these features make Node.js very fast and popular.

Well before getting deep down in the Node.js tutorial there is a certain requirement.

### Node.js Features

![imagae](https://www.ifourtechnolab.com/pics/why-nodejs---ifour.webp)

## What is Node.js Used For?

### Data Streaming:
 Node.js provides strong support for HTTP streaming, which makes Node.js ideal for building live streaming applications such as live sports or news channels that require live updates.

### Server-side rendering:
 Server-side HTML rendering is a good idea for websites with mostly static content. Server-side HTML rendering means that Node.js can do all the work before sending the response back to the client, allowing users to view content immediately instead of waiting for node.js to render everything in JavaScript after receiving a request from the client.

### Command Line Tools:
 Node.js can be used to build command line tools. While Node is usually associated with websites and web applications, Node.js is also great for building command-line tools and allows you to automate repetitive tasks or build a tool that requires block operations such as a file downloader.

### Desktop Apps:
 Node-WebKit is an application runtime environment based on Chromium and Node.js that allows developers to use Node.js as a backend for their desktop programs. Node-WebKit uses a modified version of the Node.js V8 engine, so you can build other types of Chrome apps and not just standalone Node.js apps.


### Embedded systems:
 JavaScript was used to program microcontrollers and IoT device prototypes but hardware programming is quickly emerging as a major use case for Node.js. There is now even a port of Node.js with much lower system requirements, called low.js, which allows Node.js to run on low-cost, power-efficient microcontroller boards.

### Single-threaded
In Node.js all requests are single-threaded and collected in an event loop. The event loop is what allows Node.js to perform all non-blocking operations. This means that everything from receiving the request to performing the tasks to sending the response to the client is executed in a single thread. This feature prevents reloading and reduces context switching time.

### Highly Scalable:
 Node.js applications are highly scalable because they run asynchronously. Node.js can efficiently handle concurrent requests while balancing all active CPU cores. This feature of Node.js is very beneficial for developers.

Cross-Platform Compatibility: Node.js can be used on a wide variety of systems, from Windows to Mac OS, Linux, and even mobile platforms.

### JavaScript:
 Most developers already have a good understanding of JavaScript, how it works, and other basic and advanced concepts related to it. Node.js allows developers to use JavaScript for backend development. This is convenient because developers don't have to switch between multiple programming languages and can make full-stack projects by only knowing JavaScript.

### Fast Data Streaming:
 Node.js is built on Google Chrome's V8 JavaScript engine, which makes your code run faster. The engine compiles JavaScript code into machine code. This allows Node.js to run significantly faster and provides fast data flow for web applications. Concepts like asynchronous programming and how it works with non-blocking I/O operations make Node.js efficient.

### No buffering:
 Node.js works with data streams, which are aggregated data. Therefore, the user can get the data more easily and quickly because there is no need to wait for the entire operation to complete. It reduces the overall time required for processing. Because of this, there is little or no data buffering with Node.js.

### Asynchronous:
 Node.js is asynchronous by default i.e. that a server built using Node.js does not need to wait for the date from an API. In other words, Node.js works in a non-blocking way, that does not block the execution of any further operation. Asynchronous and non-blocking I/O improves both response time and user experience.

### Event-driven:
 The concept of event-driven is similar to the concept of callback functions in asynchronous programming. In Node.js, callback functions, also known as event handlers, are executed when an event is triggered or completed. Callback functions require fewer resources on the server side and consume less memory. This feature of Node.js makes the application lightweight.

## Working of Node.js
Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

Node.js basically works on two concept

- Asynchronous
- Non-blocking I/O

### 1.Non-blocking I/o
Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.

### 2. Asynchronous
Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.

To implement the concept of the system to handle the request  node.js uses the concept of Libuv.

Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.

Libuv implements two extremely important features of node.js  

- Event loop
- Thread pool

#### Event loop:

The event loop contains a single thread and is responsible for handling easy tasks like executing callbacks and network I/O. When the program is to initialize all the top-level code is executed, the code is not in the callback function. All the applications code that is inside callback functions will run in the event loop. EventLoop is the heart of node.js. When we start our node application the event loop starts running right away. Most of the work is done in the event loop.

Nodejs use event-driven-architecture.

Events are emitted.
Event loop picks them up.
Callbacks are called.

#### Event queue :
As soon as the request is sent the thread places the request into a queue. It is known as an event queue. The process like app receiving HTTP request or server or a timer will emit event as soon as they are done with the work and event loop will pick up these events and call the callback functions that are associated with each event and response is sent to the client. 

The event loop is an indefinite loop that continuously receives the request and processes them. It checks the queue and waits for the incoming request indefinitely.

#### Thread pool
Though node.js is single-threaded it internally maintains a thread pool. When non-blocking requests are accepted there are processed in an event loop, but while accepting blocking requests it checks for available threads in a thread pool, assigns a thread to the client’s request which is then processed and send back to the event loop, and response is sent to the respective client.

The thread pool size can be change:

process.env.UV_THREADPOOL_SIZE = 1;

![image](https://media.geeksforgeeks.org/wp-content/uploads/20210916203407/WorkingofNodejs1.png)

## Conclusion
- Ryan Dahl created Node.js in 2009 because common HTTP servers like Apache have a limited ability to handle concurrent connections.
- Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of the browser.
- Asynchronous nature, event-driven architecture, single-threaded working, scalability, multiple platform compatibility, quick data streaming, and minimum buffering are some of the key features of Node.js.
- Business giants like LinkedIn, Uber, and Netflix are using Node.js for their websites and applications.
- Node.js is used for data streaming applications, command-line tools, embedded systems, desktop apps, and server-side rendering.
- JavaScript is a lightweight, client-side scripting language and Node.js is a V8-based server-side programming language.
- JavaScript follows the Java programming language standard whereas Node.js is written in C++.