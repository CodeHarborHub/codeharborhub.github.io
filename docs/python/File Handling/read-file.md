---
id: read-files
title: Read Files in Python
sidebar_label: Read Files
sidebar_position: 3
tags: [python, file handling, io, programming, python file handling, python io]
description: Learn how to read from files in Python, including text files, binary files, and different read modes.
---

# Read a File in Python

To programmatically read data from a file using Python, it must be opened first. Use the built-in `open()` function:

```python
file_object = open(file_name [, access_mode][, buffering])
```

Here are the parameter details:

- `file_name`: The name of the file you want to access.
- `access_mode`: Determines the mode in which the file is opened, e.g., read, write, append (optional, default is read mode).
- `buffering`: Specifies buffering options (optional).

These two statements are identical:

```python
fo = open("foo.txt", "r")
fo = open("foo.txt")
```

## Reading Text Files

To read data from the opened file, use the `read()` method of the File object:

```python
file_object.read([count])
```

Here, `count` is the number of bytes to be read from the file (optional). If `count` is missing, it reads until the end of the file.

> count − Number of bytes to be read.

### Example

```python
# Open a file
fo = open("foo.txt", "r")
text = fo.read()
print(text)

# Close the opened file
fo.close()
```

## Reading Binary Files

To handle files like media or executables, use binary mode by adding a 'b' prefix:

```python
f = open('test.bin', 'wb')
data = b"Hello World"
f.write(data)
f.close()
```

### Example

```python
f = open('test.bin', 'rb')
data = f.read()
print(data.decode(encoding='utf-8'))
```

## Reading Numbers from a File

### Integer Data

To write and read integer data in a binary file:

```python
n = 25
n_bytes = n.to_bytes(8, 'big')
f = open('test.bin', 'wb')
f.write(n_bytes)
```

To read back from the file:

```python
f = open('test.bin', 'rb')
data = f.read()
n = int.from_bytes(data, 'big')
print(n)
```

### Float Data

For floating point data, use the `struct` module:

```python
import struct
x = 23.50
data = struct.pack('f', x)
f = open('test.bin', 'wb')
f.write(data)
```

### Example

```python
f = open('test.bin', 'rb')
data = f.read()
x = struct.unpack('f', data)
print(x)
```

## Reading Using Reading and Writing (r+) Mode

To perform both read and write operations simultaneously:

```python
fo = open("foo.txt", "r+")
fo.seek(10, 0)
data = fo.read(3)
print(data)
fo.close()
```

The File object also supports the seek() function to rewind the stream to read from any desired byte position.

Following is the syntax for seek() method −
```
fileObject.seek(offset[, whence])
```
### Parameters

- offset − This is the position of the read/write pointer within the file.

- whence − This is optional and defaults to 0 which means absolute file positioning, other values are 1 which means seek relative to the current position and 2 means seek relative to the file's end.

## Simultaneous Read and Write

For simultaneous read and write, use 'r+' or 'w+' mode:

```python
fo = open("foo.txt", "r+")
fo.write("This is a rat race")
fo.seek(10, 0)
data = fo.read(3)
fo.seek(10, 0)
fo.write('cat')
fo.close()
```

## Read a File from Specific Offset

The `seek()` method sets the file's current position. Example:

Following is the syntax for seek() method −
```
fileObject.seek(offset[, whence])
```
### Parameters

- offset − This is the position of the read/write pointer within the file.

- whence − This is optional and defaults to 0 which means absolute file positioning, other values are 1 which means seek relative to the current position and 2 means seek relative to the file's end.

### Examples

```python
fo = open("foo.txt", "r+")
fo.seek(10, 0)
data = fo.read()
print(data)
fo.close()
```

This program reads from a specific offset and prints the data.

```
This is a cat race
```
