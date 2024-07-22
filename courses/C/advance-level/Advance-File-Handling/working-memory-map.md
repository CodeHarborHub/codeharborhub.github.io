---
id: lesson-2
title: "Working with Memory-Mapped Files"
sidebar_label: Working with Memory-Mapped Files
sidebar_position: 2
description: "Learn Working with Memory-Mapped Files in C"
tags: [courses,Advance-level,Introduction]
---   

Memory-mapped files allow you to map a file into memory and access it as if it were an array. This can be more efficient than traditional file I/O.

- **Using `mmap()`**:
  - **Description**: Maps a file or a portion of a file into memory.
  - **Example**:
    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <sys/mman.h>
    #include <fcntl.h>
    #include <unistd.h>
    #include <string.h>

    int main() {
        int fd = open("file.txt", O_RDWR | O_CREAT, 0666);
        if (fd < 0) {
            perror("open");
            exit(EXIT_FAILURE);
        }

        // Resize file to 100 bytes
        ftruncate(fd, 100);

        // Map file to memory
        char *mapped = mmap(NULL, 100, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
        if (mapped == MAP_FAILED) {
            perror("mmap");
            close(fd);
            exit(EXIT_FAILURE);
        }

        // Write data to the mapped memory
        strcpy(mapped, "Hello, memory-mapped file!");

        // Unmap and close
        munmap(mapped, 100);
        close(fd);
        return 0;
    }
    ```

- **Advantages**:
  - **Efficiency**: Direct access to file data without additional I/O calls.
  - **Simplicity**: Treats file data like an array.

- **Considerations**:
  - **File Size**: Be cautious with very large files as mapping the entire file may not be feasible.
  - **Concurrency**: Ensure proper synchronization if multiple processes or threads are accessing the memory-mapped file.

### Summary

- **File Locking Mechanisms**: Use `flock()` or `fcntl()` to manage file access in concurrent environments.
- **File I/O Performance Optimization**: Use buffering and efficient access patterns to enhance performance.
- **Handling Large Files**: Read/write in chunks and manage memory efficiently.
- **Memory-Mapped Files**: Map files into memory for efficient access and manipulation.
