---
id: MATLAB String
title: String
sidebar_label: MATLAB String
sidebar_position: 6
tags: [MATLAB, String]
description: In this tutorial, you will learn about String in MATLAB. Strings are arrays of characters enclosed in single quotes (`'`). Starting from MATLAB R2016b, strings are also supported as a data type (`string`).

---
# MATLAB Strings

### Creating and Manipulating Strings

In MATLAB, strings are arrays of characters enclosed in single quotes (`'`). Starting from MATLAB R2016b, strings are also supported as a data type (`string`).

#### Example 1: Creating and Displaying Strings

```matlab
% Creating strings
str1 = 'Hello, ';
str2 = 'MATLAB!';

% Concatenating strings
fullStr = [str1 str2];

% Displaying the concatenated string
disp(fullStr);
```

**Output:**
```
Hello, MATLAB!
```

#### Example 2: String Operations

```matlab
% Extracting a substring
sentence = 'The quick brown fox jumps over the lazy dog';
substr = extractBetween(sentence, 5, 9);

% Converting to uppercase
upperSentence = upper(sentence);

% Finding the position of a substring
pos = strfind(sentence, 'brown');

% Displaying results
disp(substr);
disp(upperSentence);
disp(pos);
```

**Output:**
```
quick
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
10
```

### String Functions in MATLAB

MATLAB provides a variety of functions for working with strings. Here are a few commonly used ones:

- `strcat`: Concatenates strings.
- `strcmp`: Compares strings.
- `strsplit`: Splits strings based on delimiter.
- `sprintf` or `fprintf`: Formats strings like in C programming.

#### Example : Using `sprintf` for Formatting

```matlab
% Formatting strings
name = 'Alice';
age = 30;
height = 1.75;

% Creating a formatted string
str = sprintf('Name: %s, Age: %d, Height: %.2f meters', name, age, height);

% Displaying formatted string
disp(str);
```

**Output:**
```
Name: Alice, Age: 30, Height: 1.75 meters
```

### String Arrays (Introduced in R2016b)

Starting from MATLAB R2016b, strings can be stored in string arrays, which are more flexible for handling multiple strings.

#### Example : String Arrays

```matlab
% Creating a string array
names = ["Alice", "Bob", "Charlie", "David"];

% Accessing elements
disp(names(2));  % Accessing the second element

% Concatenating string arrays
fullNames = strcat(names, " Johnson");

% Displaying results
disp(fullNames);
```

**Output:**
```
Bob
  "Alice Johnson"
  "Bob Johnson"
  "Charlie Johnson"
  "David Johnson"
```

### Conclusion

MATLAB provides robust support for working with strings, whether as character arrays or as string objects. Understanding these fundamentals allows for effective manipulation and analysis of textual data within MATLAB programs.