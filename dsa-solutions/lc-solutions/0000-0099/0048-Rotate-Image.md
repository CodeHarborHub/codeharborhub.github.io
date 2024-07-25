---
id: 48-rotate-image
title: Rotate Image (LeetCode)
sidebar_label: 0048-RotateImage
tags:
  - Array
  - Math
  - Matrix
description: given an 2D matrix which is representing an image, rotate the image by 90 degrees.
---

## Problem Description

- You are given an `n x n` 2D `matrix` representing an image, rotate the image by 90 degrees (clockwise).
- You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO not allocate another 2D matrix and do the rotation.

### Examples

#### Example 1

```plaintext
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
```

#### Example 2:

```plaintext
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output:  [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

### Constraints:

- <code>$n == \text{matrix.length} == \text{matrix[i].length}$</code>
- <code>$1 \leq n \leq 20$</code>
- <code>$-1000 \leq \text{matrix[i][j]} \leq 1000$</code>

### Approach

**1. Initialize Variables:** `n` The dimension of the matrix (assuming it is an n x n matrix).

**2. Transpose the Matrix:** Loop through each element of the matrix and swap elements symmetrically around the diagonal.

**3. Reverse Each Row:** Loop through each row and reverse the elements in place.

### Solution Codes

#### Codes in Different Languages

<Tabs>
  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ayushchaware08"/>

```cpp
class Solution {
public:
    void rotate(vector<vector<	int>>& matrix) {
        vector<int> ans;

        int row = matrix.size();    // no of rows
        int col = matrix[0].size(); // no of cols

        int count = 0;         // no of ele
        int total = row * col; // total ele

        int startingrow = 0;
        int startingcol = 0;
        int endingrow = row - 1;
        int endingcol = col - 1;

        while (count < total) {
            // print starting row -> ending col
            for (int index = startingcol; count < total && index <= endingcol;
                 index++) {
                ans.push_back(matrix[index][endingrow]);
                count++;
            }
            endingrow--; //++

            // print ending col -> ending row
            for (int index = startingrow; count < total && index <= endingrow;
                 index++) {
                ans.push_back(matrix[endingcol][index]);
                count++;
            }
            endingcol--;

            // ending row -> starting col
            for (int index = endingcol; count < total && index >= startingcol;
                 index--) {
                ans.push_back(matrix[index][startingrow]);
                count++;
            }
            startingrow++;

            // sarting column -> starting row
            for (int index = endingrow; count < total && index >= startingrow;
                 index--) {
                ans.push_back(matrix[startingcol][index]);
                count++;
            }
            startingcol++;
        }

    }
};
```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@ayushchaware08"/>

```py
	class Solution:
 def rotate(self, matrix):
     ans = []
     # number of rows
     row = len(matrix)
     # number of columns
     col = len(matrix[0])

     count = 0
     total = row * col

     starting_row = 0
     starting_col = 0
     ending_row = row - 1
     ending_col = col - 1

     while count < total:
         #starting row -> ending col
         for index in range(starting_col, ending_col + 1):
             if count < total:
                 ans.append(matrix[index][ending_row])
                 count += 1
         ending_row -= 1

         # ending col -> ending row
         for index in range(starting_row, ending_row + 1):
             if count < total:
                 ans.append(matrix[ending_col][index])
                 count += 1
         ending_col -= 1

         # ending row -> starting col
         for index in range(ending_col, starting_col - 1, -1):
             if count < total:
                 ans.append(matrix[index][starting_row])
                 count += 1
         starting_row += 1

         # starting column -> starting row
         for index in range(ending_row, starting_row - 1, -1):
             if count < total:
                 ans.append(matrix[starting_col][index])
                 count += 1
         starting_col += 1

     return ans
```

  </TabItem>
  <TabItem value="Java" label="Java"> 
  <SolutionAuthor name="@ayushchaware08"/>

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
 public List<Integer> rotate(int[][] matrix) {
     List<Integer> ans = new ArrayList<>();

     // number of rows
     int row = matrix.length;
     // number of columns
     int col = matrix[0].length;

     int count = 0;
     int total = row * col;

     int startingRow = 0;
     int startingCol = 0;
     int endingRow = row - 1;
     int endingCol = col - 1;

     while (count < total) {
         // starting row -> ending col
         for (int index = startingCol; count < total && index <= endingCol; index++) {
             ans.add(matrix[index][endingRow]);
             count++;
         }
         endingRow--;

         // ending col -> ending row
         for (int index = startingRow; count < total && index <= endingRow; index++) {
             ans.add(matrix[endingCol][index]);
             count++;
         }
         endingCol--;

         // ending row -> starting col
         for (int index = endingCol; count < total && index >= startingCol; index--) {
             ans.add(matrix[index][startingRow]);
             count++;
         }
         startingRow++;

         // starting column -> starting row
         for (int index = endingRow; count < total && index >= startingRow; index--) {
             ans.add(matrix[startingCol][index]);
             count++;
         }
         startingCol++;
     }

     return ans;
 }
}
```

  </TabItem>  
</Tabs>

### Conclusion

The above solution will help you to rotate an 2D Array (Image) with

- Time Complexity: $O(n^2)$
- Space Complexity: $O(1)$
