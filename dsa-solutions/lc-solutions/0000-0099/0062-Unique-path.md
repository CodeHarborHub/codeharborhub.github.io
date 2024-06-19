---
id: Unique Path
title: Unique Path
sidebar_label: 62-Unique Path
tags:
- Recursion
- Dynamic Programming
- Java
- Cpp
- Python
description: "Given a mxn matrix , one is standing at (0,0) return the no of possible unique paths to reach (m-1,n-1), one can only move right and down."
---

## Problem

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.


### Examples

**Example 1:**

**Input**: m = 3, n = 7
**Output**: 28


**Example 2:**

**Input**: m = 3, n = 2
**Output**: 3
**Explanation**: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

### Constraints

- `1 <= m,n <= 100`



---

## Approach

In this we will try to count the no of ways the man can reach the end of matrix if standing at a given point , for this we will use dp in this.

### Steps:

1.Declare a 2-D array of size N X M

2.Create a recursive function with parameters as row and column index and 2-D array

3.Call this recursive function for N-1 and M-1
4.In the recursive function
If N == 1 or M == 1 then return 1
If the value of this recursive function is not stored in the 2-D array then call the recursive function for (N-1, M, dp) and (N, M-1, dp) and assign the sum of answers of these functions in the 2-D array and return this value
else return the value of this function stored in the 2-D array 
Print the answer

### Solution

#### Java Solution

```java
import java.util.Arrays;

public class GFG {
 

    static int numberOfPaths(int n, int m, int DP[][])
    {
 
        if (n == 1 || m == 1)
            return DP[n][m] = 1;
 
        if (DP[n][m] == 0)
            DP[n][m] = numberOfPaths(n - 1, m, DP)
                       + numberOfPaths(n, m - 1, DP);
 
        return DP[n][m];
    }
 


```
### C++ Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

int numberOfPaths(int n, int m, int DP[4][4])
{
 
    if (n == 1 || m == 1)
        return DP[n][m] = 1;
 
    if (DP[n][m] == 0)
        DP[n][m] = numberOfPaths(n - 1, m, DP)
                   + numberOfPaths(n, m - 1, DP);
 
    return DP[n][m];
}
```
### Python Solution

```python
class Solution:
def numberOfPaths(n, m, DP):
 
    if (n == 1 or m == 1):
        DP[n][m] = 1
        return 1
 
    if (DP[n][m] == 0):
        DP[n][m] = numberOfPaths(n - 1, m, DP) + numberOfPaths(n, m - 1, DP)
 
    return DP[n][m]
```

### Complexity Analysis
**Time Complexity:** O(m * n)
>where m and n are the dimensions of the matrix. 

**Space Complexity:** O(n*m)
>Reason: We are using the extra space in the form of dp array.

### References
**LeetCode Problem:** Unique Paths