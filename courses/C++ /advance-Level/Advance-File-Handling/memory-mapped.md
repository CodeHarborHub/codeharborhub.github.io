---
id: lesson-2
title: "Working with Memory-Mapped Files"
sidebar_label: Working with Memory-Mapped Files
sidebar_position: 2
description: "Learn Working with Memory-Mapped Files"
tags: [courses,Advance-level,Introduction]
---   
  

Memory-mapped files allow for efficient file access by mapping a file's contents to memory. This technique is useful for large files and random access patterns.

##### Example: Memory-Mapped File Access

```cpp
#include <iostream>
#include <fcntl.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <unistd.h>

int main() {
    int fd = open("largefile.txt", O_RDONLY);
    if (fd == -1) {
        std::cerr << "Failed to open file" << std::endl;
        return 1;
    }

    struct stat sb;
    if (fstat(fd, &sb) == -1) {
        std::cerr << "Failed to get file size" << std::endl;
        close(fd);
        return 1;
    }

    size_t fileSize = sb.st_size;
    char *mapped = static_cast<char *>(mmap(NULL, fileSize, PROT_READ, MAP_PRIVATE, fd, 0));
    if (mapped == MAP_FAILED) {
        std::cerr << "Failed to map file" << std::endl;
        close(fd);
        return 1;
    }

    // Access the file content through the mapped memory
    std::cout.write(mapped, fileSize);

    if (munmap(mapped, fileSize) == -1) {
        std::cerr << "Failed to unmap file" << std::endl;
    }

    close(fd);
    return 0;
}
```
:::tip
- **File Locking**: Use file locking mechanisms to prevent concurrent write operations.
- **Buffered I/O**: Implement buffering to reduce the number of I/O operations.
- **Asynchronous I/O**: Utilize asynchronous I/O for non-blocking operations.
- **Memory Mapping**: Use memory-mapped files for efficient access to large files.
:::


