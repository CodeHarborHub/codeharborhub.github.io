---
id: read-n-characters-given
title: Read N characters Given
sidebar_label: 0157-Read N Characters Given
tags:
  - Leet code
description: "Solution to leetocde 157"
---

### Problem Description

Given a file and assume that you can only read the file using a given method read4, implement a method to read n characters.

### Examples

Example 1:

```
Input: file = "abc", n = 4
Output: 3
Explanation: After calling your read method, buf should contain "abc". We read a total of 3 characters from the file, so return 3. Note that "abc" is the file's content, not buf. buf is the destination buffer that you will have to write the results to.
```

Example 2:

```
Input: file = "abcde", n = 5
Output: 5
Explanation: After calling your read method, buf should contain "abcde". We read a total of 5 characters from the file, so return 5.
```

Example 3:

```
Input: file = "abcdABCD1234", n = 12
Output: 12
Explanation: After calling your read method, buf should contain "abcdABCD1234". We read a total of 12 characters from the file, so return 12.
```

Example 4:

```
Input: file = "leetcode", n = 5
Output: 5
Explanation: After calling your read method, buf should contain "leetc". We read a total of 5 characters from the file, so return 5.
```

### Note:

- Consider that you cannot manipulate the file directly, the file is only accesible for read4 but not for read.
- The read function will only be called once for each test case.
- You may assume the destination buffer array, buf, is guaranteed to have enough space for storing n characters.

### Algorithm

1. **Initialization**:

   - `buf4`: A temporary buffer that stores the characters read by `read4`.
   - `i4`: Index for iterating over `buf4`.
   - `n4`: Number of characters actually read by `read4`.
   - `i`: Index for iterating over the destination buffer `buf`.

2. **Reading Characters**:

   - The loop continues until `i` (number of characters written to `buf`) reaches `n` (the requested number of characters).
   - If all characters in `buf4` are consumed (`i4 == n4`), `read4` is called again to refill `buf4` and reset `i4`.
   - If `read4` returns 0 (`n4 == 0`), it means the end of the file has been reached, and the function returns the number of characters read so far.
   - Characters from `buf4` are copied to `buf` one by one, and both indices (`i` and `i4`) are incremented accordingly.

3. **Return**:
   - The function returns the total number of characters read, which is the value of `i`.

### Code Implementation

### C++

```cpp

class Solution {
 public:
  /**
   * @param buf Destination buffer
   * @param n   Number of characters to read
   * @return    The number of actual characters read
   */
  int read(char* buf, int n) {
    char* buf4 = new char[4];
    int i4 = 0;  // buf4's index
    int n4 = 0;  // buf4's size
    int i = 0;   // buf's index

    while (i < n) {
      if (i4 == n4) {      // All the characters in the buf4 are consumed.
        i4 = 0;            // Reset the buf4's index.
        n4 = read4(buf4);  // Read <= 4 characters from the file to the buf4.
        if (n4 == 0)       // Reach the EOF.
          return i;
      }
      buf[i++] = buf4[i4++];
    }

    return i;
  }
};
```

### Python

```python
class Solution:
    def __init__(self):
        self.buf4 = [''] * 4  # Temporary buffer to store characters read by read4
        self.i4 = 0           # Index for iterating over buf4
        self.n4 = 0           # Number of characters actually read by read4

    def read4(self, buf4):
        # This method is provided in the parent class or environment.
        pass

    def read(self, buf, n):
        i = 0  # Index for the destination buffer buf

        while i < n:
            if self.i4 == self.n4:
                self.n4 = self.read4(self.buf4)
                self.i4 = 0
                if self.n4 == 0:
                    break

            while i < n and self.i4 < self.n4:
                buf[i] = self.buf4[self.i4]
                i += 1
                self.i4 += 1

        return i
```

### Java

```java
/**
 * The read4 API is defined in the parent class Reader4.
 *     int read4(char[] buf4);
 */

public class Solution extends Reader4 {
    private char[] buf4 = new char[4];
    private int i4 = 0;
    private int n4 = 0;

    /**
     * @param buf Destination buffer
     * @param n   Number of characters to read
     * @return    The number of actual characters read
     */
    public int read(char[] buf, int n) {
        int i = 0;

        while (i < n) {
            if (i4 == n4) {
                n4 = read4(buf4);
                i4 = 0;
                if (n4 == 0) {
                    break;
                }
            }

            while (i < n && i4 < n4) {
                buf[i++] = buf4[i4++];
            }
        }

        return i;
    }
}
```

### JavaScript

```javascript
/**
 * Definition for read4 API
 * read4 = function(buf4) {
 *     // Reads 4 characters at a time and writes to buf4
 *     // Returns the number of characters actually read
 * }
 */

var Solution = function () {
  this.buf4 = new Array(4);
  this.i4 = 0;
  this.n4 = 0;
};

/**
 * @param {character[]} buf Destination buffer
 * @param {number} n Number of characters to read
 * @return {number} The number of actual characters read
 */
Solution.prototype.read = function (buf, n) {
  let i = 0;

  while (i < n) {
    if (this.i4 === this.n4) {
      this.n4 = read4(this.buf4);
      this.i4 = 0;
      if (this.n4 === 0) {
        break;
      }
    }

    while (i < n && this.i4 < this.n4) {
      buf[i++] = this.buf4[this.i4++];
    }
  }

  return i;
};
```
