---
id: lesson-1
title: "File Handling in C"
sidebar_label: File Handling
sidebar_position: 1
description: "Learn File Handling in C"
tags: [courses,intermediate-level,File Handling,Introduction]
---
 
 

File handling in C allows you to perform operations on files such as creating, reading, writing, and closing files. It provides a mechanism to store and retrieve data in a persistent manner.

#### Introduction to File Handling

Files are used to store data permanently on a storage device. In C, file handling is achieved using the functions provided by the standard library in `stdio.h`.


#### Flowchart: File Handling
:::note
1. **Start**
2. **Open file** using `fopen`
3. **Check if file opened successfully**
   - If successful, proceed to the next step
   - If not, print an error message and **exit**
4. **Perform file operations** (read, write)
5. **Close the file** using `fclose`
6. **End**
:::

```
 +--------------------------+
 | Start                    |
 +--------------------------+
            |
            v
 +--------------------------+
 | Open file using fopen    |
 +--------------------------+
            |
            v
 +--------------------------+
 | Check if file opened     |
 | successfully             |
 +--------------------------+
            |
          /   \
       Yes     No
        |       |
        v       v
+------------------+  +--------------------------+
| Perform file     |  | Print error message and |
| operations       |  | exit                    |
+------------------+  +--------------------------+
        |
        v
+--------------------------+
| Close the file using     |
| fclose                   |
+--------------------------+
        |
        v
+--------------------------+
| End                      |
+--------------------------+
```

#### File Operations

1. **Opening a File**:
   - Files must be opened before performing any operation on them.
   - The `fopen` function is used to open a file.

   ```c
   FILE *fptr;
   fptr = fopen("filename.txt", "mode");
   ```
   :::note
   - **Modes**:
     - `"r"`: Opens a file for reading.
     - `"w"`: Opens a file for writing (creates a new file or truncates an existing file).
     - `"a"`: Opens a file for appending (writes data at the end of the file).
     - `"r+"`: Opens a file for reading and writing.
     - `"w+"`: Opens a file for reading and writing (creates a new file or truncates an existing file).
     - `"a+"`: Opens a file for reading and appending.
     :::

2. **Closing a File**:
   - Use `fclose` to close a file after all operations are done.

   ```c
   fclose(fptr);
   ```

3. **Reading from a File**:
   - Use functions like `fgetc`, `fgets`, `fread` to read data from a file.

   ```c
   char ch;
   ch = fgetc(fptr); // Reads a character from the file
   ```

4. **Writing to a File**:
   - Use functions like `fputc`, `fputs`, `fwrite` to write data to a file.

   ```c
   fputc('A', fptr); // Writes a character to the file
   ```

#### File Pointers and File Modes

- **File Pointer**: A file pointer is a pointer to the structure `FILE`. It is used to keep track of the file being accessed.
- **File Modes**: Different modes define the purpose of opening a file (read, write, append, etc.).

#### Working with Binary Files

- Binary files store data in binary format, which is efficient and faster to read and write compared to text files.
- Use `"rb"`, `"wb"`, `"ab"`, `"rb+"`, `"wb+"`, `"ab+"` modes for binary files.

 

#### Example : Reading and Writing Text Files

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fptr;
    char filename[100], c;

    // Reading a file
    printf("Enter the filename to read: ");
    scanf("%s", filename);

    fptr = fopen(filename, "r");
    if (fptr == NULL) {
        printf("Cannot open file %s \n", filename);
        return 1;
    }

    // Reading file contents and displaying on console
    c = fgetc(fptr);
    while (c != EOF) {
        printf("%c", c);
        c = fgetc(fptr);
    }

    fclose(fptr);

    // Writing to a file
    printf("\nEnter the filename to write: ");
    scanf("%s", filename);

    fptr = fopen(filename, "w");
    if (fptr == NULL) {
        printf("Cannot open file %s \n", filename);
        return 1;
    }

    printf("Enter content to write (Ctrl+D to end):\n");
    while ((c = getchar()) != EOF) {
        fputc(c, fptr);
    }

    fclose(fptr);
    return 0;
}
```

**Output**:
```
Enter the filename to read: input.txt
<contents of input.txt displayed>
Enter the filename to write: output.txt
Enter content to write (Ctrl+D to end):
<user inputs content, ends with Ctrl+D>
```
