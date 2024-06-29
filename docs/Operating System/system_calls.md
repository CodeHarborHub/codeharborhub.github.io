---
id: system-calls
title: system-calls
sidebar_label: System calls
sidebar_position: 17
tags: [operating_system, create database, commands]
description: System calls are the interface between a running program and the operating system.
---
# System Calls

## Introduction
System calls are the interface between a running program and the operating system. They allow user-level processes to request services from the kernel, such as file manipulation, process control, and communication.

## Key Concepts

### 1. Definition
A system call is a function that provides the programmatic interface to the services provided by the operating system.

### 2. User Mode vs. Kernel Mode
- **User Mode**: The mode in which user applications run. Limited access to system resources.
- **Kernel Mode**: The mode in which the operating system runs. Full access to all system resources.

### 3. System Call Interface
The system call interface acts as a boundary between user programs and the operating system kernel. It provides a set of services that programs can use to perform operations.

## Types of System Calls

### 1. Process Control
- **fork()**: Creates a new process by duplicating the calling process.
- **exec()**: Replaces the current process image with a new process image.
- **exit()**: Terminates the calling process.
- **wait()**: Waits for a child process to terminate.

### 2. File Management
- **open()**: Opens a file.
- **close()**: Closes a file descriptor.
- **read()**: Reads data from a file.
- **write()**: Writes data to a file.
- **lseek()**: Repositions the read/write file offset.
- **unlink()**: Removes a directory entry.

### 3. Device Management
- **ioctl()**: Controls device parameters.
- **read()**: Reads data from a device.
- **write()**: Writes data to a device.

### 4. Information Maintenance
- **getpid()**: Gets the process ID.
- **alarm()**: Sets an alarm clock for delivery of a signal.
- **sleep()**: Suspends execution for an interval of time.
- **gettimeofday()**: Gets the current time.

### 5. Communication
- **pipe()**: Creates a unidirectional data channel.
- **shmget()**: Allocates a shared memory segment.
- **shmat()**: Attaches a shared memory segment.
- **semget()**: Gets a semaphore set identifier.

## System Call Implementation

### 1. System Call Handler
When a system call is invoked, control is transferred to the system call handler in the kernel, which performs the requested service and returns control to the user program.

### 2. Software Interrupt
System calls are typically implemented using software interrupts or traps. This involves an interrupt instruction that switches the CPU to kernel mode and transfers control to a predefined interrupt handler.

### 3. Parameter Passing
Parameters for system calls can be passed in several ways:
- **Registers**: Parameters are passed via CPU registers.
- **Stack**: Parameters are pushed onto the stack.
- **Memory**: Parameters are stored in a memory block, and the address of the block is passed.

## Examples of System Calls

### 1. Linux
- **fork()**: Creates a new process.
- **execve()**: Executes a program.
- **mmap()**: Maps files or devices into memory.
- **kill()**: Sends a signal to a process.

### 2. Windows
- **CreateProcess()**: Creates a new process.
- **ReadFile()**: Reads data from a file.
- **WriteFile()**: Writes data to a file.
- **CreateFile()**: Opens a file.

## System Call Optimization

### 1. System Call Batching
Combining multiple system calls into a single call to reduce overhead.

### 2. Fast System Calls
Using specialized CPU instructions to reduce the overhead of switching between user mode and kernel mode.

### 3. Asynchronous System Calls
Allowing system calls to be non-blocking, so a process can continue execution without waiting for the system call to complete.

## Security Considerations

### 1. Access Control
Ensuring that only authorized processes can make certain system calls.

### 2. Input Validation
Validating parameters passed to system calls to prevent buffer overflows and other vulnerabilities.

### 3. Privilege Escalation
Preventing unauthorized processes from gaining elevated privileges through system calls.

## Conclusion
System calls are a critical aspect of operating system functionality, providing the necessary interface between user programs and the kernel. Understanding how system calls work and how they are implemented is essential for system programming and OS development.

---

System calls are the bridge between user applications and the operating system, enabling programs to perform essential operations and interact with hardware.
