---
id: search-a-2D-matrix
title: Search a 2D matrix
difficulty: Medium
sidebar_label: 0074-search2Dmatrix
tags:
  - Array
  - Binary Search
  - Matrix
---

## Problem

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Search a 2D matrix](https://leetcode.com/problems/search-a-2d-matrix/) | [Search a 2D matrix Solution on LeetCode](https://leetcode.com/problems/search-a-2d-matrix/solutions/) |  [Leetcode Profile](https://leetcode.com/u/debangi_29/) |

## Problem Description

You are given an $m \times n$ integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in $O(log(m * n))$ time complexity.
 

### Examples

#### Example 1:

**Input**: 
```
Matrix = [[1,3,5,7], [10,11,16,20], [23,30,34,60]]
Target = 3
```

**Output**: true

#### Example 2:
**Input**: 
```
Matrix = [[1,3,5,7], [10,11,16,20], [23,30,34,60]]
Target = 13
```

**Output**: false


### Constraints

- $m == \text{matrix.length}$
- $n == \text{matrix}[i].\text{length}$
- $1 \leq m, n \leq 100$
- $-10^{4} \leq \text{matrix}[i][j], \text{target} \leq 10^{4}$

### Approach

The steps are as follows:

- Place the 2 pointers i.e. low and high: Initially, we will place the pointers. The pointer low will point to 0 and the high will point to (NxM)-1.

- Calculate the ‘mid’: Now, inside the loop, we will calculate the value of ‘mid’ using the following formula:
mid = (low+high) // 2 ( ‘//’ refers to integer division)

- Eliminate the halves based on the element at index mid: To get the element, we will convert index ‘mid’ to the corresponding cell using the above formula. Here no. of columns of the matrix = M.
row = mid / M, col = mid % M.
    - If matrix[row][col] == target: We should return true here, as we have found the ‘target’.

    - If matrix[row][col] < target: In this case, we need bigger elements. So, we will eliminate the left half and consider the right half (low = mid+1).
    - If matrix[row][col] > target: In this case, we need smaller elements. So, we will eliminate the right half and consider the left half (high = mid-1).

- Steps 2-3 will be inside a while loop and the loop will end once low crosses high
(i.e. low > high). If we are out of the loop, we can say the target does not exist in the matrix. So, we will return false.

### Solution Code

#### Python

```
class Solution:
  def searchMatrix(matrix, target):
    n = len(matrix)
    m = len(matrix[0])

    # apply binary search:
    low = 0
    high = n * m - 1
    while low <= high:
        mid = (low + high) // 2
        row = mid // m
        col = mid % m
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] < target:
            low = mid + 1
        else:
            high = mid - 1
    return False

```

#### Java

```
class Solution {
  public static boolean searchMatrix(ArrayList<ArrayList<Integer>> matrix, int target) {
        int n = matrix.size();
        int m = matrix.get(0).size();

        //apply binary search:
        int low = 0, high = n * m - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int row = mid / m, col = mid % m;
            if (matrix.get(row).get(col) == target) return true;
            else if (matrix.get(row).get(col) < target) low = mid + 1;
            else high = mid - 1;
        }
        return false;
    }
}
```

#### C++

```
class Solution {
 public:
  bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int n = matrix.size();
    int m = matrix[0].size();

    //apply binary search:
    int low = 0, high = n * m - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        int row = mid / m, col = mid % m;
        if (matrix[row][col] == target) return true;
        else if (matrix[row][col] < target) low = mid + 1;
        else high = mid - 1;
    }
    return false;
}
};

```

### Conclusion

Complexity Analysis

- Time Complexity: $O(log(N.M))$, where N = given row number, M = given column number.

    Reason: We are applying binary search on the imaginary 1D array of size NxM.

- Space Complexity: $O(1)$ as we are not using any extra space.
