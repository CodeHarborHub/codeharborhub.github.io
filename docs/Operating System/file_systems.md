---
id: file_systems
title: file_systems
sidebar_label: File Systems
sidebar_position: 11
tags: [operating_system, create database, commands]
description: A file system is a method and data structure that the operating system uses to control how data is stored and retrieved.
---

# File Systems

## Introduction
A file system is a method and data structure that the operating system uses to control how data is stored and retrieved. Without a file system, information placed in a storage medium would be one large body of data with no way to tell where one piece of information stops and the next begins.

## Key Concepts

### 1. File
A file is a collection of related information that is recorded on secondary storage. A file can contain programs, data, or both.

### 2. Directory
A directory is a special type of file that contains a list of files and other directories. Directories help in organizing files into a hierarchical structure.

### 3. Path
The path specifies the location of a file or directory in the file system. Paths can be absolute (starting from the root directory) or relative (starting from the current directory).

## File Attributes
Files have attributes that provide additional information about the file:
- **Name**: The human-readable name of the file.
- **Type**: The type of the file (e.g., text, binary, executable).
- **Location**: The location of the file on the storage medium.
- **Size**: The size of the file in bytes.
- **Protection**: Access control information (e.g., read, write, execute permissions).
- **Timestamps**: Information about the file's creation, modification, and last access times.

## File Operations
Common file operations include:
- **Create**: Creating a new file.
- **Open**: Opening an existing file for reading or writing.
- **Close**: Closing an open file.
- **Read**: Reading data from a file.
- **Write**: Writing data to a file.
- **Delete**: Deleting a file.
- **Rename**: Changing the name of a file.

## Directory Structure

### Single-Level Directory
All files are contained in a single directory. This simple structure can lead to name conflicts and is not scalable for larger systems.

### Two-Level Directory
There is a separate directory for each user. This structure solves the name conflict issue but still has limitations in organizing a large number of files.

### Tree-Structured Directory
Directories are organized in a tree structure, allowing for a hierarchical organization of files. Each directory can contain files and subdirectories.

### Acyclic-Graph Directory
Directories form an acyclic graph, allowing shared subdirectories and files. This structure enables better organization and sharing but requires handling of link deletion and cycles.

### General Graph Directory
Allows for arbitrary links between directories and files, creating a general graph structure. This structure offers maximum flexibility but requires sophisticated algorithms to manage.

## File Allocation Methods

### Contiguous Allocation
Files are stored in contiguous blocks of memory. This method is simple and efficient for sequential access but can lead to fragmentation and difficulty in file size extension.

### Linked Allocation
Files are stored as linked lists of blocks. Each block contains a pointer to the next block. This method eliminates fragmentation but can be inefficient for direct access.

### Indexed Allocation
An index block is created, which contains pointers to the actual data blocks of the file. This method supports both sequential and direct access but requires extra space for the index block.

## Free Space Management

### Bit Vector
A bit vector is used to represent the free and allocated blocks. Each bit in the vector represents a block; 0 indicates free and 1 indicates allocated.

### Linked List
Free blocks are linked together, forming a list. Each free block contains a pointer to the next free block.

### Grouping
Similar to linked list but with a group of free blocks stored together. The first block of the group points to the next group of free blocks.

### Counting
Stores the address of the first free block and the number of free contiguous blocks that follow it.

## Disk Scheduling Algorithms

### First-Come, First-Served (FCFS)
Processes disk requests in the order they arrive. Simple but can lead to inefficient use of the disk.

### Shortest Seek Time First (SSTF)
Selects the request that is closest to the current head position. Reduces seek time but can lead to starvation of some requests.

### SCAN (Elevator Algorithm)
The disk arm moves in one direction, fulfilling requests until it reaches the end, then reverses direction. Provides a more uniform wait time.

### C-SCAN (Circular SCAN)
Similar to SCAN, but when the disk arm reaches the end, it returns to the beginning and starts again. Provides a more uniform wait time.

### LOOK and C-LOOK
Similar to SCAN and C-SCAN but the disk arm only goes as far as the last request in each direction before reversing or restarting.

## Conclusion
File systems are a critical component of operating systems, providing a structured way to store, manage, and retrieve data. Understanding the various aspects of file systems, including file operations, directory structures, allocation methods, and disk scheduling algorithms, is essential for efficient data management and system performance.

---

A well-designed file system ensures efficient storage, quick access, and effective management of data, contributing significantly to the overall performance and usability of an operating system.
