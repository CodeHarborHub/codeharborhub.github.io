---
id: convert-1d-array-into-2d-array
title: Convert 1D Array Into 2D Array
sidebar_label: 2022 Convert 1D Array Into 2D Array
tags:
  - Array
  - Matrix
  - LeetCode
description: "This is a solution to the Convert 1D Array Into 2D Array problem on LeetCode."
sidebar_position: 2022
---

## Problem Description

You are given a 0-indexed 1-dimensional (1D) integer array `original`, and two integers, `m` and `n`. You are tasked with creating a 2-dimensional (2D) array with `m` rows and `n` columns using all the elements from `original`.

The elements from indices 0 to `n - 1` (inclusive) of `original` should form the first row of the constructed 2D array, the elements from indices `n` to `2 * n - 1` (inclusive) should form the second row of the constructed 2D array, and so on.

Return an `m x n` 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

### Examples

**Example 1:**

```
Input: original = [1,2,3,4], m = 2, n = 2
Output: [[1,2],[3,4]]
Explanation: The constructed 2D array should contain 2 rows and 2 columns.
The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.
The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.

```

**Example 2:**

```

Input: original = [1,2,3], m = 1, n = 3
Output: [[1,2,3]]
Explanation: The constructed 2D array should contain 1 row and 3 columns.
Put all three elements in original into the first row of the constructed 2D array.

```

**Example 3:**

```

Input: original = [1,2], m = 1, n = 1
Output: []
Explanation: There are 2 elements in original.
It is impossible to fit 2 elements in a 1x1 2D array, so return an empty 2D array.

```

### Constraints

- `1 <= original.length <= 5 * 10^4`
- `1 <= original[i] <= 10^5`
- `1 <= m, n <= 4 * 10^4`

### Approach

To solve this problem:
1. Verify if the total number of elements in the 1D array `original` is equal to `m * n`.
   - If not, return an empty 2D array since it's impossible to create a 2D array of the given dimensions.
2. Initialize an empty 2D array `result` with `m` rows.
3. Iterate through the `original` array, filling the `result` array row by row.
   - Use integer division and modulus to determine the correct row and column positions.

This approach ensures that the solution is constructed in linear time `O(n)`, where `n` is the length of the `original` array.

#### C++ Solution

```cpp
class Solution {
public:
    vector<vector<int>> construct2DArray(vector<int>& original, int m, int n) {
        if (original.size() != m * n) {
            return {};
        }
        
        vector<vector<int>> result(m, vector<int>(n));
        for (int i = 0; i < original.size(); ++i) {
            result[i / n][i % n] = original[i];
        }
        
        return result;
    }
};

```

#### Java

```java

public class Solution {

    public static int[][] construct2DArray(int[] original, int m, int n) {
        // Check if the total number of elements in the original array equals m * n
        if (original.length != m * n) {
            return new int[0][0]; // Return an empty 2D array if it's impossible to form the 2D array
        }

        // Initialize the 2D array with the specified number of rows and columns
        int[][] result = new int[m][n];

        // Fill the 2D array with elements from the original array
        for (int i = 0; i < original.length; i++) {
            result[i / n][i % n] = original[i];
        }

        // Return the constructed 2D array
        return result;
    }

    public static void main(String[] args) {
        // Test cases
        int[] original1 = {1, 2, 3, 4};
        int m1 = 2, n1 = 2;
        System.out.println(Arrays.deepToString(construct2DArray(original1, m1, n1)));

        int[] original2 = {1, 2, 3};
        int m2 = 1, n2 = 3;
        System.out.println(Arrays.deepToString(construct2DArray(original2, m2, n2)));

        int[] original3 = {1, 2};
        int m3 = 1, n3 = 1;
        System.out.println(Arrays.deepToString(construct2DArray(original3, m3, n3)));
    }
}
```
