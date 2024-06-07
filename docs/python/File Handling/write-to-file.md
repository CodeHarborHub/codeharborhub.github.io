---
id: write-to-file
title: Write to File
sidebar_label: Write to File
sidebar_position: 2
tags: [python, file handling, io, programming, python file handling, python io]
description: Learn how to write data to files in Python, including writing to a new file, writing in binary mode, appending to an existing file, and writing in reading and writing modes.
---

# Python - Write to File

To write data to a file in Python, you need to open a file using the `open()` function, which returns a file object. This file object interacts with input and output streams, enabling file operations.

## Writing to a New File

After obtaining the file object with `open()`, you can use the `write()` method to write strings to the file. It's important to note that Python strings can contain binary data, not just text. The `write()` method does not automatically add a newline character ('\n').

### Syntax for `write()` method

```python
fileObject.write(string)
```

### Example

```python
# Open a file
fo = open("foo.txt", "w")
fo.write("Python is a great language.\nYeah, it's great!!\n")

# Close the opened file
fo.close()
```

The above code creates a file named "foo.txt," writes the given content into it, and then closes the file.

## Writing to a New File in Binary Mode

To handle files with different types of data such as media files, executables, or pictures, use binary mode by adding a 'b' prefix to the read/write mode.

```python
f = open('test.bin', 'wb')
data = b"Hello World"
f.write(data)
f.close()
```

Text strings can be converted to bytes using the `encode()` function.

```python
data = "Hello World".encode('utf-8')
```

## Writing to an Existing File

Opening an existing file in 'w' mode erases its previous contents. To add data without erasing, use 'a' for append mode.

```python
# Open a file in append mode
fo = open("foo.txt", "a")
text = "TutorialsPoint has a fabulous Python tutorial"
fo.write(text)

# Close the opened file
fo.close()
```

## Writing to a File in Reading and Writing Modes

In 'w+' mode, write and read operations can't be performed simultaneously without closing the file. Use the `seek()` method to move the read/write pointer within the file.

### Syntax for `seek()` method

```python
fileObject.seek(offset[, whence])
```

#### Parameters

- `offset`: The position of the read/write pointer within the file.
- `whence`: Optional parameter that defaults to 0 (absolute file positioning). Other values are 1 (seek relative to the current position) and 2 (seek relative to the file's end).

### Example

The following program opens the file in w+ mode (read-write mode), adds some data, seeks a certain position in the file, and overwrites its earlier contents with new text.

```python
# Open a file in read-write mode
fo = open("foo.txt", "w+")
fo.write("This is a rat race")
fo.seek(10, 0)
data = fo.read(3)
fo.seek(10, 0)
fo.write('cat')
fo.close()
```

This program demonstrates the use of the `seek()` method for simultaneous read/write operations in a file.
