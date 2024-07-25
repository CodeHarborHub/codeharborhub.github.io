---
id: find-the-minimum-area-to-cover-all-ones-i
title:  Find the Minimum Area to Cover All Ones I
sidebar_label: 3195. Find the Minimum Area to Cover All Ones I
tags:
- Array
- Matrix


description: "This is a solution to the Find the Minimum Area to Cover All Ones I problem on LeetCode."
---

## Problem Description
You are given a 2D binary array grid. Find a rectangle with horizontal and vertical sides with the smallest area, such that all the 1's in grid lie inside this rectangle.

Return the minimum possible area of the rectangle.


### Examples

**Example 1:**

![image](https://assets.leetcode.com/uploads/2024/05/08/examplerect0.png)
```
Input: grid = [[0,1,0],[1,0,1]]

Output: 6

```

**Example 2:**
```
Input: grid = [[1,0],[0,0]]

Output: 1
```

### Constraints

-  `1 <= grid.length, grid[i].length <= 1000`
-`grid[i][j] is either 0 or 1.`
- `The input is generated such that there is at least one 1 in grid.`

## Solution for Find the Minimum Area to Cover All Ones I Problem
### Approach 

1. **Initialization**:
    - Use four variables `st`, `end`, `top`, and `bottom` to track the minimum and maximum column and row indices of the 1's in the grid:
      - `st`: The leftmost column index containing a 1 (initialized to infinity).
      - `end`: The rightmost column index containing a 1 (initialized to negative infinity).
      - `top`: The topmost row index containing a 1 (initialized to infinity).
      - `bottom`: The bottommost row index containing a 1 (initialized to negative infinity).

2. **Iterate Through the Grid**:
    - Loop through each cell in the grid. For each cell that contains a 1:
        - Update `st` to be the minimum of `st` and the current column index `j`.
        - Update `end` to be the maximum of `end` and the current column index `j`.
        - Update `top` to be the minimum of `top` and the current row index `i`.
        - Update `bottom` to be the maximum of `bottom` and the current row index `i`.

3. **Check for Edge Case**:
    - After iterating through the grid, if `st` is still infinity (no 1's were found), return 0. This indicates that there are no 1's in the grid.

4. **Calculate the Area**:
    - Compute the height of the rectangle as `bottom - top + 1`.
    - Compute the width of the rectangle as `end - st + 1`.
    - Return the area as `height * width`.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
     function   minimumArea(grid) {
        let st = Infinity;
        let end = -Infinity;
        let top = Infinity;
        let bottom = -Infinity;
        
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    st = Math.min(st, j);
                    end = Math.max(end, j);
                    top = Math.min(top, i);
                    bottom = Math.max(bottom, i);
                }
            }
        }
        
        if (st === Infinity || end === -Infinity || top === Infinity || bottom === -Infinity) {
            return 0;
        }

        const height = bottom - top + 1;
        const width = end - st + 1;
        
        return height * width;
    }
      const input =[[0,1,0],[1,0,1]]
      const output = minimumArea(input) ;
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $ O(n^2) $ because of sorting, where n is the size of array
    - Space Complexity: $ O(1) $ 

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
 class Solution {
    minimumArea(grid) {
        let st = Infinity;
        let end = -Infinity;
        let top = Infinity;
        let bottom = -Infinity;
        
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    st = Math.min(st, j);
                    end = Math.max(end, j);
                    top = Math.min(top, i);
                    bottom = Math.max(bottom, i);
                }
            }
        }
        
        if (st === Infinity || end === -Infinity || top === Infinity || bottom === -Infinity) {
            return 0;
        }

        const height = bottom - top + 1;
        const width = end - st + 1;
        
        return height * width;
    }
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
 class Solution {
    minimumArea(grid: number[][]): number {
        let st = Infinity;
        let end = -Infinity;
        let top = Infinity;
        let bottom = -Infinity;
        
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    st = Math.min(st, j);
                    end = Math.max(end, j);
                    top = Math.min(top, i);
                    bottom = Math.max(bottom, i);
                }
            }
        }
        
        if (st === Infinity || end === -Infinity || top === Infinity || bottom === -Infinity) {
            return 0;
        }

        const height = bottom - top + 1;
        const width = end - st + 1;
        
        return height * width;
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
 class Solution:
    def minimumArea(self, grid: List[List[int]]) -> int:
        st = float('inf')
        end = float('-inf')
        top = float('inf')
        bottom = float('-inf')
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    st = min(st, j)
                    end = max(end, j)
                    top = min(top, i)
                    bottom = max(bottom, i)
        
        if st == float('inf') or end == float('-inf') or top == float('inf') or bottom == float('-inf'):
            return 0

        height = bottom - top + 1
        width = end - st + 1
        
        return height * width

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
 public class Solution {
    public int minimumArea(int[][] grid) {
        int st = Integer.MAX_VALUE;
        int end = Integer.MIN_VALUE;
        int top = Integer.MAX_VALUE;
        int bottom = Integer.MIN_VALUE;
        
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    st = Math.min(st, j);
                    end = Math.max(end, j);
                    top = Math.min(top, i);
                    bottom = Math.max(bottom, i);
                }
            }
        }
        
        if (st == Integer.MAX_VALUE || end == Integer.MIN_VALUE || top == Integer.MAX_VALUE || bottom == Integer.MIN_VALUE) {
            return 0;
        }

        int height = bottom - top + 1;
        int width = end - st + 1;
        
        return height * width;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
  class Solution {
public:
    int minimumArea(vector<vector<int>>& grid) {
        int st = INT_MAX;
        int end = INT_MIN;
        int top = INT_MAX;
        int bottom = INT_MIN;
        
        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0; j < grid[0].size(); j++) {
                if (grid[i][j] == 1) {
                    st = min(st, j);
                    end = max(end, j);
                    top = min(top, i);
                    bottom = max(bottom, i);
                }
            }
        }
        
        if (st == INT_MAX || end == INT_MIN || top == INT_MAX || bottom == INT_MIN) {
            return 0;
        }

        int height = bottom - top + 1;
        int width = end - st + 1;
        
        return height * width;
    }
};

    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Find the Minimum Area to Cover All Ones I](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/description/)

