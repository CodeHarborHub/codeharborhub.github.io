---
id: search-a-2d-matrix-ii
title: Search A 2D Matrix ii
sidebar_label: 0240-Search A 2D Matrix ii
tags:
    - DP
    - Leet code
description: "Solution to leetocde 240"
---

## Approach
The approach involves starting from the top-right corner of the matrix and iteratively narrowing down the search based on comparisons with the target.

1. Initialize `m` and `n` to the number of rows and columns in the matrix, respectively. Also, initialize `r` to 0 (the topmost row) and `c` to `n - 1` (the rightmost column).
2. Enter a while loop that continues as long as the current position is within the matrix (`r < m` and `c >= 0`).
3. Inside the loop, compare the element at the current position (`r, c`) with the target.
     - If they are equal, it means the target is found, and the function returns `true`.
     - If the element is greater than the target, update `c` to move to the left, narrowing down the search.
     - If the element is less than the target, update `r` to move downwards, narrowing down the search.
4. The loop continues until the search range is exhausted or the target is found.
5. If the loop completes without finding the target, the function returns `false`.

## Time Complexity
The time complexity of this code is `O(m + n)`, where `m` is the number of rows and `n` is the number of columns in the matrix. In each iteration of the while loop, either `r` is incremented or `c` is decremented, leading to a total of at most `m + n` iterations.

## Space Complexity
The space complexity of this code is `O(1)` because it uses only a constant amount of extra space for variables (`m`, `n`, `r`, `c`). The space usage does not depend on the size of the input matrix.

```cpp
class Solution {
public:
        bool searchMatrix(vector<vector<int>>& matrix, int target) {

                int m = matrix.size(), n = matrix[0].size(), r = 0, c = n - 1;

                while (r < m && c >= 0){

                        if (matrix[r][c] == target)
                                return true;
                        else if(matrix[r][c] > target)
                                c--;
                        else
                                r++;
                }

                return false;
        }
}
```
