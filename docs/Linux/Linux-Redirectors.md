1. **`>` (Output Redirection):**
    - Redirects the standard output (**stdout**) of a command to a file. If the file exists, it is overwritten.
    
    ```bash
    
    command > output.txt
    ```
    
2. **`>>` (Append Output):**
    - Appends the standard output of a command to a file. If the file doesn't exist, it is created.
    
    ```bash
    
    command >> output.txt
    ```
    
3. **`<` (Input Redirection):**
    - Redirects the standard input (**stdin**) of a command from a file.
    
    ```bash
    
    command < input.txt
    ```
    
4. **`|` (Pipe):**
    - Redirects the output of one command as the input to another command.
    
    ```bash
    
    command1 | command2
    
    ls | sort | tee sorted_file_list.tx
    ```
    
5. **`2>` (Standard Error Redirection):**
    - Redirects the standard error (**stderr**) of a command to a file.
    
    ```bash
    
    command 2> error.txt
    ```
    
6. **`2>>` (Append Standard Error):**
    - Appends the standard error of a command to a file.
    
    ```bash
    
    command 2>> error.txt
    ```
    
7. **`&>` (Redirect Standard Output and Error):**
    - Redirects both standard output and standard error to a file.
    
    ```bash
    
    command &> output_and_error.txt
    ```
    
8. **`2>&1` (Merge Standard Error with Standard Output):**
    - Redirects standard error to the same location as standard output.
    
    ```bash
    
    command 2>&1
    ```
    
9. **`/dev/null` (Null Device):**
    - Discards data. Useful for suppressing output.
    
    ```bash
    
    command > /dev/null
    
    ls /fake/directory 2> /dev/null
    ```
    
10. **`tee` (Split Output):**
    - Reads from standard input and writes to standard output and files simultaneously.
    
    ```bash
    
    command | tee output.txt
    
    ls | tee peanuts.txt banan.txt
    ```