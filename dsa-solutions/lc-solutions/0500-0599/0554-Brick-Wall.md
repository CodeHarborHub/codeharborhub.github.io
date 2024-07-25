---
id: Brick-Wall
title: Brick-Wall
sidebar_label:  Brick-Wall
tags:
  - hashmap
  - LeetCode
  - Java
  - Python
  - C++
description: This is a solution to the. Brick-Wall problem  on LeetCode
---

## Problem Description

There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height `(i.e., one unit)` but they can be of different widths. The total width of each row is the same.

Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.

Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line.

### Examples

**Example 1:**

```

Input: wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
Output: 2

```

**Example 2:**


```
Input: wall = [[1],[1],[1]]
Output: 3
```
### Constraints

-  $1 \leq \text{nums.length} \leq  105$


---

## Solution for Brick-Wall

### Intuition

   - The intuition is, for each gap, keep a counter of how many times the position of the gap appears in the wall. After that, we can just return the length of the wall minus the maximum number of gaps (the more gaps the better, and length of wall minus number of gaps is the number of bricks that we cross).



### Approach
 
   -  Create an empty dictionary called edge_counts.
   - Loop through each row in the wall list:
     a. Create a variable called edge_pos and set it to 0.
     b. Loop through each brick width in the current row up to the second to last brick (since the last brick cannot form an edge).
     i. Add the current brick width to edge_pos.
     ii. Add 1 to the value in the edge_counts dictionary at the key of edge_pos, or add a new key-value pair with key edge_pos and value 1 if it doesn't exist.
   - Return the difference between the length of the wall    list and the maximum value in the edge_counts dictionary. If the edge_counts dictionary is empty,    return the length of the wall list.






#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@parikhitkurmi"/>
    
   ```python
//python

class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        edge_counts = {}
        for row in wall:
            edge_pos = 0
            for brick_width in row[:-1]:
                edge_pos += brick_width
                edge_counts[edge_pos] = edge_counts.get(edge_pos, 0) + 1
        return len(wall) - max(edge_counts.values(), default=0)


```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@parikhitkurmi"/>

   ```java
//java
class Solution {
    public int leastBricks(List<List<Integer>> wall) {
        Map<Integer, Integer> map = new HashMap<>();
        int maxUntouched = 0;

        for (List<Integer> row : wall) {
            int brickEnd = 0;

            for (int i = 0; i < row.size() - 1; i++) {
                brickEnd += row.get(i);     // row.get(i) = brick size
                map.put(brickEnd, map.getOrDefault(brickEnd, 0) + 1);
                maxUntouched = Math.max(maxUntouched, map.get(brickEnd));
            }
        }

        return wall.size() - maxUntouched;
    }
}

// TC: O(m * n), O(n)
// m -> height of the wall
// n -> width of the wall
```
</TabItem>
<TabItem value="C++" label="C++">
<SolutionAuthor name="@parikhitkurmi"/>

   ```cpp
//cpp

class Solution {
public:
    int leastBricks(vector<vector<int>>& wall) {
        unordered_map<int, int> m;
        int res = wall.size(), n = wall.size();
        
        for (auto row : wall) {
            
            int curr_width = 0;
            for (int i = 0; i < row.size()-1; i++) {
                
                curr_width += row[i];
                res = min(res, n - (++m[curr_width]));
            }
        }
        return res;
    }
};

```

  </TabItem>
</Tabs>





## References

- **LeetCode Problem:** [Brick-Wall](https://leetcode.com/problems/brick-wall/)
- **Solution Link:** [Brick-Wall](https://leetcode.com/problems/brick-wall/submissions/)
- **Authors GeeksforGeeks Profile:** [parikhit kurmi](https://www.geeksforgeeks.org/user/sololeveler673/)
- **Authors Leetcode:** [parikhit kurmi](https://leetcode.com/u/parikhitkurmi14/)