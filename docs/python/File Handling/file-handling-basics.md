---
id: file-handling-basics
title: File Handling Basics
sidebar_label: File Handling Basics
sidebar_position: 1
tags: [python, file handling, io, programming, python file handling, python io]
description: In this tutorial, you will learn how to read from and write to files in python. We will learn how to read text files, binary files, and write to text files using python.
---

# Python File Handling Basics

When working with computer applications, data often needs to be stored and retrieved from a persistent medium like a disk file. Python provides built-in functions and methods to handle file input and output operations efficiently.

## Input and Output Streams

Python uses standard input/output streams (`stdin` and `stdout`) to interact with input and output devices. The `input()` function reads input from the standard input stream (usually the keyboard), while the `print()` function sends output to the standard output stream (typically the display monitor).

```python
name = input("Enter your name: ")
print("Hello,", name)
```

## The `open()` Function

The `open()` function in Python is used to create a file object, which is then used to perform various file operations. It takes parameters such as the file name, access mode, and buffering options.

### Syntax

```python
file_object = open(file_name [, access_mode] [, buffering])
```
**Here are the parameter details**
```
- `file_name`: The name of the file to be accessed.
- `access_mode`: The mode in which the file should be opened (e.g., read, write, append).
- `buffering`: Optional parameter for buffering options.
```

### File Opening Modes

Python supports various file opening modes, each serving a different purpose:

| Mode | Description                                                      |
|------|------------------------------------------------------------------|
| r  | Read mode (default).                                             |
| rb | Read mode in binary format.                                      |
| r+ | Read and write mode.                                             |
| rb+| Read and write mode in binary format.                            |
| w  | Write mode (creates a new file or overwrites existing content).  |
| wb | Write mode in binary format.                                     |
| w+ | Write and read mode.                                             |
| wb+| Write and read mode in binary format.                            |
| a  | Append mode (writes data at the end of the file).                |
| ab | Append mode in binary format.                                    |
| a+ | Append and read mode.                                            |
| ab+| Append and read mode in binary format.                           |
| x  | Exclusive creation mode (fails if the file already exists).      |

### Example

```python
# Open a file
file_obj = open("example.txt", "w")
file_obj.write("Hello, World!")
file_obj.close()
```

In this example, we create a new file named "example.txt" in write mode, write the string "Hello, World!" to it, and then close the file.
