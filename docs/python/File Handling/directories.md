---
id: directories
title: Directories in Python
sidebar_label: Directories
sidebar_position: 5
tags: [python, file handling, os module, directory operations]
description: Learn how to create, remove, and change directories in Python using the os module.
---

# Python - Directories

All files are contained within various directories, and Python has no problem handling these too. The `os` module has several methods that help you create, remove, and change directories.

## `mkdir()` Method

You can use the `mkdir()` method of the `os` module to create directories in the current directory. You need to supply an argument to this method, which contains the name of the directory to be created.

### Syntax

```python
os.mkdir("newdir")
```

### Example

Following is an example to create a directory `test` in the current directory:

```python
#!/usr/bin/python3
import os

# Create a directory "test"
os.mkdir("test")
```

## `chdir()` Method

You can use the `chdir()` method to change the current directory. The `chdir()` method takes an argument, which is the name of the directory that you want to make the current directory.

### Syntax

```python
os.chdir("newdir")
```

### Example

Following is an example to go into the `/home/newdir` directory:

```python
import os

# Changing a directory to "/home/newdir"
os.chdir("/home/newdir")
```

## `getcwd()` Method

The `getcwd()` method displays the current working directory.

### Syntax

```python
os.getcwd()
```

### Example

Following is an example to get the current directory:

```python
#!/usr/bin/python3
import os

# This would give the location of the current directory
os.getcwd()
```

## `rmdir()` Method

The `rmdir()` method deletes the directory, which is passed as an argument in the method. Before removing a directory, all the contents in it should be removed.

### Syntax

```python
os.rmdir('dirname')
```

### Example

Following is an example to remove the `/tmp/test` directory. It is required to give the fully qualified name of the directory; otherwise, it would search for that directory in the current directory.

```python
#!/usr/bin/python3
import os

# This would remove "/tmp/test" directory.
os.rmdir("/tmp/test")
```

This guide covers the basic usage of the `mkdir()`, `chdir()`, `getcwd()`, and `rmdir()` methods in the `os` module for handling directories in Python.
