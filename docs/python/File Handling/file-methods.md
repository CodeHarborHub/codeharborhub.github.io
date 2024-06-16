---
id: file-methods
title: File Methods in Python
sidebar_label: File Methods
sidebar_position: 6
tags: [python, file handling, file methods, os module]
description: Learn about different file methods in Python for handling file I/O operations.
---

# Python - File Methods

A file object is created using the `open()` function. The file class defines the following methods with which different file I/O operations can be done. The methods can be used with any file-like object such as a byte stream or network stream.


| Method Name      | Description                                                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **file.close()** | Close the file. A closed file cannot be read or written any more.                                                               |
| **file.flush()** | Flush the internal buffer, like stdio's fflush. This may be a no-op on some file-like objects.                                  |
| **file.fileno()** | Returns the integer file descriptor that is used by the underlying implementation to request I/O operations from the operating system. |
| **file.isatty()** | Returns True if the file is connected to a tty(-like) device, else False.                                                      |
| **file.next()**  | Returns the next line from the file each time it is being called.                                                               |
| **file.read([size])** | Reads at most size bytes from the file (less if the read hits EOF before obtaining size bytes).                            |
| **file.readline([size])** | Reads one entire line from the file. A trailing newline character is kept in the string.                              |
| **file.readlines([sizehint])** | Reads until EOF using readline() and returns a list containing the lines. If the optional sizehint argument is present, instead of reading up to EOF, whole lines totaling approximately sizehint bytes (possibly after rounding up to an internal buffer size) are read. |
| **file.seek(offset[, whence])** | Sets the file's current position.                                                                                |
| **file.tell()** | Returns the file's current position.                                                                                             |
| **file.truncate([size])** | Truncates the file's size. If the optional size argument is present, the file is truncated to (at most) that size.    |
| **file.write(str)** | Writes a string to the file. There is no return value.                                                                       |
| **file.writelines(sequence)** | Writes a sequence of strings to the file. The sequence can be any iterable object producing strings, typically a list of strings. |



## Examples

### Closing a File

```python
file = open("example.txt", "r")
# Perform operations with the file
file.close()
```

### Flushing a File

```python
file = open("example.txt", "w")
file.write("Hello, World!")
file.flush()
file.close()
```

### Getting the File Descriptor

```python
file = open("example.txt", "r")
print(file.fileno())
file.close()
```

### Checking if File is TTY

```python
file = open("example.txt", "r")
print(file.isatty())
file.close()
```

### Reading Next Line

```python
file = open("example.txt", "r")
print(file.next())
file.close()
```

### Reading a File

```python
file = open("example.txt", "r")
print(file.read(10))
file.close()
```

### Reading a Line

```python
file = open("example.txt", "r")
print(file.readline())
file.close()
```

### Reading All Lines

```python
file = open("example.txt", "r")
print(file.readlines())
file.close()
```

### Seeking in a File

```python
file = open("example.txt", "r")
file.seek(5)
print(file.read())
file.close()
```

### Telling Position in a File

```python
file = open("example.txt", "r")
print(file.tell())
file.close()
```

### Truncating a File

```python
file = open("example.txt", "w")
file.write("Hello, World!")
file.truncate(5)
file.close()
```

### Writing to a File

```python
file = open("example.txt", "w")
file.write("Hello, World!")
file.close()
```

### Writing Multiple Lines to a File

```python
file = open("example.txt", "w")
lines = ["Hello\n", "World\n"]
file.writelines(lines)
file.close()
```

This guide covers various file methods in Python, providing syntax and examples for each method to help you handle file operations effectively.