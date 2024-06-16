---
id: 119-pascals-triangle-ii
title: Pascal's Triangle II
sidebar_label: 0119-Pascal's Triangle II
tags:
  - C++
  - Java
  - Python
description: "Return the kth row of Pascal's triangle."
---

## Problem Description

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

### Examples

**Example 1:**

```
Input: rowIndex = 3
Output: [1,3,3,1]
```

**Example 2:**

```
Input: rowIndex = 0
Output: 1
```

### Constraints

- $0 <= rowIndex <= 33$

---

## Solution for Balanced Binary Tree Problem

<Tabs>
 <tabItem value="LinearSolution" label="LinearSolution">

### Approach 

To generate the kth row of Pascal's Triangle, we can use a single list to iteratively build up the row. By updating the list from the end to the beginning, we ensure that we are always using values from the previous row (or the initial state).


#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Vipullakum007"/>
   ```java
   class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> row = new ArrayList<>(rowIndex + 1);
        for (int i = 0; i <= rowIndex; i++) {
            row.add(0);
        }
        row.set(0, 1);

        for (int i = 1; i <= rowIndex; i++) {
            for (int j = i; j > 0; j--) {
                row.set(j, row.get(j) + row.get(j - 1));
            }
        }

        return row;
    }
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
   ```python
    class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        row = [1] * (rowIndex + 1)
        for i in range(2, rowIndex + 1):
            for j in range(i - 1, 0, -1):
                row[j] += row[j - 1]
        return row
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
   ```cpp
   class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> row(rowIndex + 1, 1);
        for (int i = 2; i <= rowIndex; i++) {
            for (int j = i - 1; j > 0; j--) {
                row[j] += row[j - 1];
            }
        }
        return row;
    }
};
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**:  $O(k^2)$, where k is the given rowIndex. This is because we have nested loops, one iterating up to rowIndex and the other iterating backward up to i.
- **Space Complexity**: $O(k)$, where k is the given rowIndex. This is the space required to store the rowIndexth row.

</tabItem>
</Tabs>
---
