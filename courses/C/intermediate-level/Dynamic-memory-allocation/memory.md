---
id: lesson-2
title: "Memory Management Techniques"
sidebar_label: Memory Management
sidebar_position: 2
description: "Memory Management Techniques"
tags: [courses,intermediate-level,Memory Management,Introduction]
---
  

1. **Allocating Memory**:
   - Use `malloc` or `calloc` to allocate memory dynamically based on the program's needs.

2. **Resizing Memory**:
   - Use `realloc` to adjust the size of an existing memory block.

3. **Deallocating Memory**:
   - Use `free` to release memory that is no longer needed to avoid memory leaks.

4. **Error Handling**:
   - Always check the return value of memory allocation functions to ensure they are not `NULL`.

#### Common Memory-Related Issues

1. **Memory Leaks**:
   - Occur when dynamically allocated memory is not freed.
   - Can cause a program to consume more memory over time.

   **Example**:

   ```c
   int *ptr = (int *)malloc(sizeof(int) * 100);
   // Use the allocated memory
   free(ptr); // Prevent memory leak
   ```

2. **Dangling Pointers**:
   - Pointers that refer to memory that has been freed.
   - Can cause undefined behavior when dereferenced.

   **Example**:

   ```c
   int *ptr = (int *)malloc(sizeof(int));
   free(ptr);
   ptr = NULL; // Avoid dangling pointer
   ```

3. **Double Free**:
   - Occurs when trying to free the same memory block more than once.
   - Can lead to undefined behavior or program crashes.

   **Example**:

   ```c
   int *ptr = (int *)malloc(sizeof(int));
   free(ptr);
   // free(ptr); // Double free - should be avoided
   ```

 