- **STRING MANIPULATION :** Play with strings
    1. **`strings`** : used to extract readable text strings from binary files. When you run **`strings`** on a file, it scans through the binary data looking for sequences of printable characters and displays them. This is often useful for extracting human-readable information from compiled executables or other binary files.
        
        ```bash
        strings data.txt
        ```
        
    2. **`env`** : Environment variables in Linux are dynamic values that can affect the behavior of processes and programs running in the operating system.
        
        ```bash
        # display env variables
        
        $ env
        
        $ echo $PATH
        
        /usr/local/sbin:/usr/local/bin:/usr/sbin:/bin
        
        # This returns a list of paths separated by a colon that your system searches when it runs a command.
        
        # Modify the path variable 
        
        export PATH=$PATH:/path/to/new/directory
        
        ```
        
    3. **`cut`** : It is used for cutting out sections from each line of a file or from piped data.
        
        
        - **`c, --characters=LIST`**: Select only these characters.
        - **`f, --fields=LIST`**: Select only these fields.
        - **`d, --delimiter=DELIM`**: Use DELIM instead of TAB for field delimiter.
        
        ```bash
        # Extract 5th character from each line
        cut -c 5 sample.txt
        
        # Extract characters 3-7 and 12-16 from each line of a file:
        cut -c 3-7,12-16 filename.txt
        
        # Extract the first and third fields (using a comma as the delimiter) from a file
        # By default it 'd' is TAB
        cut -f 1,3 -d , filename.csv
        
        # Extract the second field (using a comma as the delimiter) from 
        # the output of another command:
        echo "John,Doe,25" | cut -f 2 -d ,
        ```
        
    4. **`head`** : By default the head command will show you the first 10 lines in a file.
        - The -n flag stands for number of lines.
        
        ```bash
        head -n 15 /var/log/syslog # diaplay first 15 lines
        head -c 15 /var/log/syslog # display first 15 characters
        
        ```
        
    5. **`tail`** : It is similar to head command as it prints the last 10 lines of a file
        
        ```bash
        tail -3 filename # display last 3 lines 
        tail +3 filename # skips first 2 lines 
        ```
        
    6. **`paste`** : The paste command is similar to the cat command, it merges lines together in a file.
        - **EXAMPLES**
        
        ```bash
        # Display the first 5 lines (head) and the last 5 lines (tail) of a file
        paste <(head -n 5 filename.txt) <(tail -n 5 filename.txt)
        
        # Display the first 3 lines (head) and the last 3 lines (tail) of the ls command
        paste <(ls | head -n 3) <(ls | tail -n 3)
        ```
        
    7. **`expand`** : To converts your TABs to spaces, use the expand command.(it doesn’t remove space).
    8. **`unexpand`** : Opposite of expand 
        
        ```bash
        expand sample.txt > result.txt
        unexpand -a result.txt
        
        tr -s '\t' ' ' < input.txt > output.txt #It will reove tabs & make a single space
        tr -s '\n' ' ' < sample.txt # This change the newline into a space 
        tr -s ';' ' ' < sample.txt # This will change semicolon to space
        
        **NOTE- This will not change them temporarily, you need to save the output**
        ```
        
    9. **`sort`** : sort a file
        - **`-r, --reverse`**: Reverse the result of comparisons.
        - **`-n, --numeric-sort`**: Sort numerically.
        - **`-u, --unique`**: Output only unique lines.
        
        ```bash
        sort filename.txt
        
        # sort the file and '-m' merge the file 
        sort -m file1.txt file2.txt file3.txt > sorted_output.txt
        
        ```
        
    10. **`tr`** : The tr (translate) command allows you to translate a set of characters into another set of characters.
        
        ```bash
        tr a-z A-Z # coverts the lowecase to uppercase
        
        hello
        
        HELLO
        
        echo "123abc456" | tr -d '0-9' # Delete digits from string
        ```
        
    11. **`split`** : This will split it into different files, by default it will split them once they reach a 1000 line limit.
        
        ```bash
        # his splits input.txt into files each containing 100 lines.
        split -l 100 input.txt
        
        -l NUMBER: Split the file into chunks of NUMBER lines.
        -b SIZE[K|M|G]: Split the file into chunks of specified size.
        ```
        
    12. **`join`** : The join command allows you to join multiple files together by a common field:
        
        ```bash
        $ join -1 2 -2 1 file1.txt file2.txt
        
        1 John Doe
        
        2 Jane Doe
        
        3 Mary Sue
        ```
        
    13. **`uniq`** : The **`uniq`** (unique) command is another useful tool for parsing text.
        
        ```bash
        uniq reading.txt # remove duplicates
        
        uniq -c reading.txt # get the count of how many occurrences of a line
        
        uniq -u reading.txt # get unique values (occur only one time)
        
        uniq -d reading.txt # get duplicate values
        
        **Note** : uniq does not detect duplicate lines unless they are adjacent.
        
        # To overcome this limitation of uniq we can use sort in combination with uniq:
        sort reading.txt | uniq
        ```
        
    14. **`wc`** : The **`wc`** command stands for "word count" and is used to count the number of lines, words, and characters in a file.
        
        ```bash
        wc myfile.txt
        
        -l: Count lines.
        -w: Count words.
        -c: Count characters.
        ```
        
    15. **`nl`** : used to number lines in a file
        
        ```bash
        $ nl file1.txt
        
        1. i
        2. like
        3. turtles
        ```
        
    

## Additional resource

You can read the blog to get a complete guide to master Linux. 

[Read Blog](https://medium.com/@rajveer_0101/the-ultimate-guide-to-linux-mastery-c691c09b437c)

[![blog](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*gmCUTP8AXcgZm4-08wUH8g.jpeg)](https://medium.com/@rajveer_0101/the-ultimate-guide-to-linux-mastery-c691c09b437c)

