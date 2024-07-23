---
id: lesson-2
title: "Setting up the Development Environment"
sidebar_label: Setting up 
sidebar_position: 2
description: "Setting up the Development Environment"
tags: [courses,beginner-level,C,Introduction]
--- 
 

To write and compile C programs, you need a C compiler and a text editor or an integrated development environment (IDE). Here’s how you can set up a C development environment:

1. **Install a C Compiler**:
   - **Windows**: Install MinGW (Minimalist GNU for Windows) which includes the GCC compiler.
   - **Linux**: GCC (GNU Compiler Collection) is typically pre-installed. If not, you can install it using your package manager (e.g., `sudo apt install gcc` on Ubuntu).
   - **macOS**: Install Xcode Command Line Tools which include the GCC compiler (`xcode-select --install`).

2. **Install a Text Editor or IDE**:
   - **Text Editors**: Notepad++, Sublime Text, Visual Studio Code.
   - **IDEs**: Code::Blocks, Eclipse CDT, CLion.

#### Writing and Compiling Your First C Program

1. **Writing Your First C Program**:
   - Open your text editor or IDE and write the following C program:

      ```c title="hello.c"
      #include <stdio.h>
         
      int main() {
          printf("Hello, World!\n");
          return 0;
      }
      ```

   - Save the file with a `.c` extension, for example, `hello.c`.

2. **Compiling Your C Program**:
   - Open your terminal or command prompt.
   - Navigate to the directory where you saved your `hello.c` file.
   - Compile the program using the C compiler. For GCC, you can use the following command:

      ```sh
      gcc hello.c -o hello
      ```

   - This command compiles `hello.c` and creates an executable file named `hello`.

3. **Running Your C Program**:
   - After compiling, run the executable file by typing the following command in your terminal or command prompt:

      ```sh
      ./hello
      ```

4. **Output**:
   - You should see the output `Hello, World!` printed on the screen.

      ```
      Hello, World!
      ``` 