---
id: networking-programming
title: Network Programming
sidebar_label: Network Programming
sidebar_position: 1
tags: [python, networking, socket programming, TCP, UDP, network protocols]
description: In this tutorial, you will learn about network programming in Python. We will cover the basics of sockets, higher-level network protocols, and the corresponding Python modules for these protocols.
---

# Python - Network Programming

The threading module in Python's standard library is capable of handling multiple threads and their interaction within a single process. Communication between two processes running on the same machine is handled by Unix domain sockets, whereas for the processes running on different machines connected with TCP (Transmission Control Protocol), Internet domain sockets are used.

![Image](https://www.tutorialspoint.com/python/images/network_programming.jpg)

Python's standard library consists of various built-in modules that support interprocess communication and networking. Python provides two levels of access to the network services. At a low level, you can access the basic socket support in the underlying operating system, which allows you to implement clients and servers for both connection-oriented and connectionless protocols.

Python also has libraries that provide higher-level access to specific application-level network protocols, such as FTP, HTTP, and so on.

## Network Protocols and Corresponding Python Modules

| Protocol | Common Function | Port No | Python Module |
|----------|-----------------|---------|---------------|
| HTTP     | Web pages       | 80      | `httplib`, `urllib`, `xmlrpclib` |
| NNTP     | Usenet news     | 119     | `nntplib` |
| FTP      | File transfers  | 20      | `ftplib`, `urllib` |
| SMTP     | Sending email   | 25      | `smtplib` |
| POP3     | Fetching email  | 110     | `poplib` |
| IMAP4    | Fetching email  | 143     | `imaplib` |
| Telnet   | Command lines   | 23      | `telnetlib` |
| Gopher   | Document transfers | 70   | `gopherlib`, `urllib` |
