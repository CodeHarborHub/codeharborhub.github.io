---
id: renaming-and-deleting
title: Renaming and Deleting Files in Python
sidebar_label: Renaming and Deleting Files
sidebar_position: 4
tags: [python, file handling, os module, file operations]
description: Learn how to rename and delete files in Python using the os module.
---

# Python - Renaming and Deleting Files

Python's `os` module provides methods that help you perform file-processing operations, such as renaming and deleting files.

To use this module, you need to import it first and then you can call any related functions.

## `rename()` Method

The `rename()` method takes two arguments: the current filename and the new filename.

### Syntax

```python
os.rename(current_file_name, new_file_name)
```

### Example

Following is an example to rename an existing file "test1.txt" to "test2.txt":

```python
#!/usr/bin/python3
import os
# Rename a file from test1.txt to test2.txt
os.rename("test1.txt", "test2.txt")
```

## `remove()` Method

You can use the `remove()` method to delete files by supplying the name of the file to be deleted as the argument.

### Syntax

```python
os.remove(file_name)
```

### Example

Following is an example to delete an existing file "test2.txt":

```python
#!/usr/bin/python3
import os
# Delete file test2.txt
os.remove("test2.txt")
```

This guide covers the basic usage of the `rename()` and `remove()` methods in the `os` module for renaming and deleting files in Python.