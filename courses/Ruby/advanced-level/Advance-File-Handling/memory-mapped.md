---
id: lesson-2
title: "Using Memory-Mapped Files"
sidebar_label: Memory-Mapped Files
sidebar_position: 2
description: "Using Memory-Mapped Files"
tags: [courses,Advance-level,Introduction]
--- 
 

Memory-mapped files allow a file to be mapped into the memory space of a process. This approach can be efficient for large files and can provide a way to access file contents as if they were in memory.

**Example**: Memory-Mapped Files with `mmap`

```ruby
require 'mmap'

File.open('large_file.txt', 'r') do |file|
  length = file.size
  map = Mmap.new(file.fileno, length, Mmap::ACCESS_READ)

  # Access the mapped file
  puts map[0..100] # Read the first 100 bytes

  map.close
end
```

**Note**: The `mmap` gem provides memory-mapped file capabilities. Install it via `gem install mmap`.

#### **File I/O Performance Optimization**

To optimize file I/O performance, consider using buffering and minimizing the number of I/O operations. 

**Example**: Buffered Writing

```ruby
File.open('buffered_output.txt', 'w') do |file|
  file.sync = false # Disable auto-flushing

  (1..1000000).each do |i|
    file.write("Line #{i}\n")
    file.flush if i % 1000 == 0 # Manually flush buffer periodically
  end
end
```

**Example**: Using `IO#readpartial` for Efficient Reading

```ruby
File.open('large_file.txt', 'r') do |file|
  buffer = ""
  while file.readpartial(1024, buffer)
    # Process the buffer
    puts buffer
    buffer.clear
  end
end
```

:::tip
1. **Avoid Reading Entire Files into Memory**:
   - For large files, process data in chunks to avoid high memory usage.

2. **Implement Proper File Locking**:
   - Use file locking mechanisms to prevent concurrent access issues, especially in multi-process applications.

3. **Optimize I/O Operations**:
   - Use buffering to reduce the number of I/O operations and improve performance. Consider memory-mapped files for large datasets. 

4. **Efficient File Processing**:
   - Process large files efficiently by reading and writing in chunks. Avoid loading entire files into memory.

5. **File Locking**:
   - Use file locking to prevent data corruption in concurrent file access scenarios.

6. **Performance Optimization**:
   - Optimize file I/O operations by using techniques such as buffering and memory-mapped files for better performance.
:::