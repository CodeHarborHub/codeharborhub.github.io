---
id: zigzag-conversion
title: Zigzag Conversion (LeetCode)
sidebar_label: 0006-Zigzag Conversion
tags:
  - String
  - Java
  - C++
  - Python
description: Convert the given string into a zigzag pattern with a specified number of rows.
sidebar_position: 6
---

## Problem Statement

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

```plaintext
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

```python
string convert(string s, int numRows)
```

### Examples

**Example 1:**

Input:

```
s = "PAYPALISHIRING", numRows = 3
```

Output:

```
"PAHNAPLSIIGYIR"
```

**Example 2:**

Input:

```
s = "PAYPALISHIRING", numRows = 4
```

Output:

```
"PINALSIGYAHRPI"
```

Explanation:

```
P     I    N
A   L S  I G
Y A   H R
P     I
```

**Example 3:**

Input:

```
s = "A", numRows = 1
```

Output:

```
"A"
```

### Constraints

- 0 < s.length < 1001
- s consists of English letters (lower-case and upper-case), ',' and '.'.
- 0 < numRows < 1000

## Intuition

Just look at the top row what is the difference between each character, i.e., A and I, and I and Q = 8 (5*2-2 == number of rows * 2 - 2, the corner elements are excluded). Similarly for each row, i.e., B and J, the difference is 8.

The interesting part comes when the character in the diagonal has to be added, but even this has a pattern:

- There will be no character in between for row 0 and row n.
- There can be only one diagonal character, and the diagonal difference is original difference - 2 at each step or diff - (rowNumber\*2);

## Approach

1. Create an empty StringBuilder which is our answer.
2. Calculate the difference = numRows\*2 - 2.
3. Iterate over 0 to rowNumber in a for loop.
4. The first character will be row number or i (append to String).
5. Write a while loop in the above for loop:
   - The first character will be row number or i (append to String).
   - Calculate the diagonal difference if any and append to the String.
   - Increase the index by diff and return ans.

### Java Solution

```java
class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1) {
            return s;
        }

        StringBuilder answer = new StringBuilder();
        int n = s.length();
        int diff = 2 * (numRows - 1);
        int diagonalDiff = diff;
        int secondIndex;
        int index;
        for (int i = 0; i < numRows; i++) {
            index = i;

            while (index < n) {
                answer.append(s.charAt(index));
                if (i != 0 && i != numRows - 1) {
                    diagonalDiff = diff-2*i;
                    secondIndex = index + diagonalDiff;

                    if (secondIndex < n) {
                        answer.append(s.charAt(secondIndex));
                    }
                }
                index += diff;
            }
        }

        return answer.toString();
    }
}
```

### C++ Solution

```cpp
class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1) {
            return s;
        }

        stringstream answer;
        int n = s.length();
        int diff = 2 * (numRows - 1);
        int diagonalDiff = diff;
        int secondIndex;
        int index;
        for (int i = 0; i < numRows; i++) {
            index = i;

            while (index < n) {
                answer << s[index];
                if (i != 0 && i != numRows - 1) {
                    diagonalDiff = diff-2*i;
                    secondIndex = index + diagonalDiff;

                    if (secondIndex < n) {
                        answer << s[secondIndex];
                    }
                }
                index += diff;
            }
        }

        return answer.str();
    }
};
```

### Python Solution

```python
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        answer = ''
        n = len(s)
        diff = 2 * (numRows - 1)
        diagonal_diff = diff
        second_index = 0
        index = 0
        for i in range(numRows):
            index = i
            while index < n:
                answer += s[index]
                if i != 0 and i != numRows - 1:
                    diagonal_diff = diff - 2 * i
                    second_index = index + diagonal_diff
                    if second_index < n:
                        answer += s[second_index]
                index += diff
        return answer
```

### Complexity Analysis

#### Approach 1: Iterative Approach

- **Time Complexity**: $O(n)$, where n is the length of the input string `s`. We iterate through the entire string once.
- **Space Complexity**: $O(n)$, where n is the length of the input string `s`. We use a StringBuilder to store the output.

#### Approach 2: Using StringBuilder Rows

- **Time Complexity**: $O(n)$, where n is the length of the input string `s`. We iterate through the entire string once to fill the rows of the StringBuilder.
- **Space Complexity**:$O(n)$, where n is the length of the input string `s`. We use a StringBuilder to store the output.

#### Approach 3: Direct Construction

- **Time Complexity**: $O(n)$, where n is the length of the input string `s`. We iterate through the entire string once to construct the output string.
- **Space Complexity**: $O(n)$, where n is the length of the input string `s`. We use a StringBuilder to store the output.

#### Approach 4: Using Mathematical Formula

- **Time Complexity**: $O(n)$, where n is the length of the input string `s`. We iterate through the entire string once to construct the output string.
- **Space Complexity**: $O(n)$, where n is the length of the input string `s`. We use a StringBuilder to store the output.

### Conclusion

We explored four different approaches to solve the Zigzag Conversion problem, each offering a unique perspective and trade-offs in terms of simplicity and efficiency. All four approaches have a linear time complexity of $O(n)$, where n is the length of the input string `s`. The space complexity varies slightly among the approaches but remains linear in terms of the input size.
