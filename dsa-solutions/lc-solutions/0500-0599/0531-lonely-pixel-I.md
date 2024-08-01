---
id: Lonely-Pixel-I
title: Lonely Pixel I
sidebar_label: 0531- Lonely Pixel I
tags:
  - Array
  - Hash Table
  - Matrix
description: "Given an m x n picture consisting of black 'B' and white 'W' pixels, return the number of black lonely pixels."
---

## Problem
Given an m x n picture consisting of black 'B' and white 'W' pixels, return the number of black lonely pixels.

A black lonely pixel is a character 'B' that located at a specific position where the same row and same column don't have any other black pixels.

### Examples

**Example 1:**

**Input:** `picture = "[["W","W","B"],["W","B","W"],["B","W","W"]]"`  
**Output:** `3`  
**Explanation:** All the three 'B's are black lonely pixels.

**Example 2:**

**Input:** ` picture = "[["B","B","B"],["B","B","W"],["B","B","B"]]"`  
**Output:** `0`  

### Constraints
- m == picture.length
- n == picture[i].length
- `1 <= m, n <= 500`
- picture[i][j] is 'W' or 'B'.

---

## Approach

According to the problem description, we need to count the number of black pixels in each row and column, which are recorded in the arrays rows and cols respectively. Then we traverse each black pixel, check whether there is only one black pixel in its row and column. If so, we increment the answer by one.

### Steps:

1. Initialize two arrays, `rows` and `cols`, to count the number of 'B' pixels in each row and column, respectively.
2. Iterate through the 2D array to populate the `rows` and `cols` arrays with the count of 'B' pixels for each row and column.
3. Initialize a counter `ans` to keep track of the number of lonely pixels.
Iterate through the 2D array again. For each 'B' pixel, check if it is a lonely pixel by verifying if `rows[i]` and `cols[j]` are both equal to 1.
4. Return the count of lonely pixels.

### Solution

#### Java Solution

```java
class Solution {
    public int findLonelyPixel(char[][] picture) {
        int m = picture.length, n = picture[0].length;
        int[] rows = new int[m];
        int[] cols = new int[n];
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (picture[i][j] == 'B') {
                    ++rows[i];
                    ++cols[j];
                }
            }
        }
        int ans = 0;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (picture[i][j] == 'B' && rows[i] == 1 && cols[j] == 1) {
                    ++ans;
                }
            }
        }
        return ans;
    }
}
```
#### C++ Solution 

```cpp
class Solution {
public:
    int findLonelyPixel(vector<vector<char>>& picture) {
        int m = picture.size(), n = picture[0].size();
        vector<int> rows(m);
        vector<int> cols(n);
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (picture[i][j] == 'B') {
                    ++rows[i];
                    ++cols[j];
                }
            }
        }
        int ans = 0;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (picture[i][j] == 'B' && rows[i] == 1 && cols[j] == 1) {
                    ++ans;
                }
            }
        }
        return ans;
    }
};
```
#### Python Solution

```python
class Solution:
    def findLonelyPixel(self, picture: List[List[str]]) -> int:
        rows = [0] * len(picture)
        cols = [0] * len(picture[0])
        for i, row in enumerate(picture):
            for j, x in enumerate(row):
                if x == "B":
                    rows[i] += 1
                    cols[j] += 1
        ans = 0
        for i, row in enumerate(picture):
            for j, x in enumerate(row):
                if x == "B" and rows[i] == 1 and cols[j] == 1:
                    ans += 1
        return ans
```
### Complexity Analysis
**Time Complexity:** O(m x n)
>Reason: We iterate over each element in the picture array to count the number of 'B' pixels in each row and column.

**Space Complexity:** O(m + n)
>Reason: We use two additional arrays, `rows` and `cols`, each of size mm and nn respectively, to count the number of 'B' pixels in each row and column.

### References
**LeetCode Problem:** Lonely Pixel I
