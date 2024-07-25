---
id: lesson-1
title: "Advanced File Handling in Ruby"
sidebar_label: Introduction
sidebar_position: 1
description: "Advanced File Handling in Ruby"
tags: [courses,Advance-level,Introduction]
---     

Advanced file handling involves techniques for working efficiently with files, particularly when dealing with large files or when needing to perform high-performance I/O operations.

#### **1. Working with Large Files**

When dealing with large files, it's crucial to process the file in chunks rather than loading the entire file into memory. This approach helps manage memory usage and improves performance.

**Example**: Reading a Large File Line by Line

```ruby
File.open('large_file.txt', 'r') do |file|
  while line = file.gets
    # Process each line
    puts line
  end
end
```

**Example**: Writing to a Large File in Chunks

```ruby
File.open('large_file_output.txt', 'w') do |file|
  (1..1000000).each do |i|
    file.write("Line #{i}\n")
  end
end
```

#### **2. File Locking Mechanisms**

File locking is used to prevent multiple processes from accessing a file simultaneously, which can lead to data corruption. Ruby does not have built-in file locking, but you can use system calls or libraries for this purpose.

**Example**: File Locking with `flock`

```ruby
require 'fcntl'

file = File.open('lockfile.txt', 'r+')
file.flock(File::LOCK_EX) # Exclusive lock

# Perform file operations
file.write("Some important data")

file.flock(File::LOCK_UN) # Unlock the file
file.close
```
:::note
`flock` is used for advisory locking, which means it's up to cooperating processes to respect the locks.
:::