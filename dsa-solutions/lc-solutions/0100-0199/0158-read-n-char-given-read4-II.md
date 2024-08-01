---
id: read-n-characters-given-read4-II
title: Read N characters Given Read4 -II
sidebar_label: 0158-Read N Characters Given Read4 -II
tags:
  - Leet code
description: "Solution to leetocde 157"
---

### Problem Description

#### Method read4:

The  API read4 reads 4 consecutive characters from the file, then writes those characters into the buffer array buf.

The return value is the number of actual characters read.

- Note that read4() has its own file pointer, much like FILE *fp in C.

#### Definition of read4:
```
    Parameter:  char[] buf
    Returns:    int
```
- Note: buf[] is destination not source, the results from read4 will be copied to buf[]

Below is a high level example of how read4 works:

- File file("abcdefghijk"); // File is "abcdefghijk", initially file pointer (fp) points to 'a'
- char[] buf = new char[4]; // Create buffer with enough space to store characters
- read4(buf); // read4 returns 4. Now buf = "abcd", fp points to 'e'
- read4(buf); // read4 returns 4. Now buf = "efgh", fp points to 'i'
- read4(buf); // read4 returns 3. Now buf = "ijk", fp points to end of file
 

#### Method read:

By using the read4 method, implement the method read that reads n characters from the file and store it in the buffer array buf. Consider that you cannot manipulate the file directly.

- The return value is the number of actual characters read.

#### Definition of read:
```
    Parameters:	char[] buf, int n
    Returns:	int
```
- Note: buf[] is destination not source, you will need to write the results to buf[]
 
### Examples

***Example 1:***
```
File file("abc");
Solution sol;
// Assume buf is allocated and guaranteed to have enough space for storing all characters from the file.
sol.read(buf, 1); // After calling your read method, buf should contain "a". We read a total of 1 character from the file, so return 1.
sol.read(buf, 2); // Now buf should contain "bc". We read a total of 2 characters from the file, so return 2.
sol.read(buf, 1); // We have reached the end of file, no more characters can be read. So return 0.
```

***Example 2:***
```
File file("abc");
Solution sol;
sol.read(buf, 4); // After calling your read method, buf should contain "abc". We read a total of 3 characters from the file, so return 3.
sol.read(buf, 1); // We have reached the end of file, no more characters can be read. So return 0.
 ```


#### Note:

Consider that you cannot manipulate the file directly, the file is only accesible for read4 but not for read.
The read function may be called multiple times.
Please remember to RESET your class variables declared in Solution, as static/class variables are persisted across multiple test cases. Please see here for more details.
You may assume the destination buffer array, buf, is guaranteed to have enough space for storing n characters.
It is guaranteed that in a given test case the same buffer buf is called by read.



### Code Implementation

### C++

```cpp
/**
 * The read4 API is defined in the parent class Reader4.
 *     int read4(char *buf4);
 */

class Solution {
 public:
  /**
   * @param buf Destination buffer
   * @param n   Number of characters to read
   * @return    The number of actual characters read
   */
  int read(char* buf, int n) {
    int i = 0;  // buf's index

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

 private:
  char* buf4 = new char[4];
  int i4 = 0;  // buf4's index
  int n4 = 0;  // buf4's size
};
```

### Python

```python
# The read4 API is already defined for you.
# Def read4(buf4: List[str]) -> int:

class Solution:
  def read(self, buf: List[str], n: int) -> int:
    i = 0  # buf's index

    while i < n:
      if self.i4 == self.n4:  # All the characters in the buf4 are consumed.
        self.i4 = 0  # Reset the buf4's index.
        # Read <= 4 characters from the file to the buf4.
        self.n4 = read4(self.buf4)
        if self.n4 == 0:  # Reach the EOF.
          return i
      buf[i] = self.buf4[self.i4]
      i += 1
      self.i4 += 1

    return i

  buf4 = [' '] * 4
  i4 = 0  # buf4's index
  n4 = 0  # buf4's size
```

### Java

```java
/**
 * The read4 API is defined in the parent class Reader4.
 *     int read4(char[] buf4);
 */

public class Solution extends Reader4 {
  /**
   * @param buf Destination buffer
   * @param n   Number of characters to read
   * @return    The number of actual characters read
   */
  public int read(char[] buf, int n) {
    int i = 0; // buf's index

    while (i < n) {
      if (i4 == n4) {     // All the characters in the buf4 are consumed.
        i4 = 0;           // Reset the buf4's index.
        n4 = read4(buf4); // Read <= 4 characters from the file to the buf4.
        if (n4 == 0)      // Reach the EOF.
          return i;
      }
      buf[i++] = buf4[i4++];
    }

    return i;
  }

  private char[] buf4 = new char[4];
  private int i4 = 0; // buf4's index
  private int n4 = 0; // buf4's size
}
```


#### Source 
(https://leetcode.ca/all/158.html)
