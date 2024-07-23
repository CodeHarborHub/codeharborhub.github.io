---
id: lesson-2
title: "Error Handling in File Operations"
sidebar_label: Error Handling in File Operations
sidebar_position: 2
description: "Learn Error Handling in File Operations"
tags: [courses,intermediate-level,File Handling,Introduction]
--- 

   - **Checking Return Values**: Many functions used in file operations return a value indicating success or failure. Always check these return values to handle errors properly.
   
   - **Example**:
     ```c
     #include <stdio.h>
     #include <stdlib.h>

     int main() {
         FILE *file = fopen("example.txt", "w");
         if (file == NULL) {
             perror("Error opening file");
             exit(EXIT_FAILURE);
         }

         if (fprintf(file, "Hello, world!") < 0) {
             perror("Error writing to file");
             fclose(file);
             exit(EXIT_FAILURE);
         }

         if (fclose(file) != 0) {
             perror("Error closing file");
             exit(EXIT_FAILURE);
         }

         return 0;
     }
     ```

   **Output**:
   - If the file operations succeed, there will be no error messages.
   - If an error occurs, `perror` will print an appropriate message.


### Summary

- **Syntax Errors**: Detected at compile-time due to incorrect code syntax.
- **Runtime Errors**: Occur during program execution and need careful handling.
- **Logical Errors**: Result in incorrect behavior due to flawed logic.
- **`errno` and `perror`**: Useful tools for diagnosing and reporting errors in C programs.
- **File Operations**: Always check return values to handle errors appropriately.