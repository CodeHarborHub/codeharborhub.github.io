---
id: max-points-on-a-line.md
title: Max Points on a Line
sidebar_label: 0149- Max Points on a Line
tags:
  - Leetcode
description: "This is a solution to the Max Point on a Line on LeetCode."
---

### Problem Satement

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

### Examples

**Example 1:**

```
Input: points = [[1,1],[2,2],[3,3]]
Output: 3
```

**Example 2:**

```
Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
```

### Constraints:

- $1 <= points.length <= 300$
- $points[i].length == 2$
- $-10^4 <= xi, yi <= 10^4$
- All the points are unique.

### Algorithm Explanation

1. **Input Handling**:

   - If there are 2 or fewer points, all points will always lie on the same line, so we can directly return the number of points.

2. **Initialization**:

   - Initialize `maxi` to 2, since at least two points can define a line.

3. **Iterate through each pair of points**:

   - Use a nested loop to select pairs of points `(i, j)` where `i < j`.

4. **Count points on the line**:

   - For each pair `(i, j)`, initialize a count of 2 (since the pair itself constitutes two points on the line).
   - Check every other point `k` to see if it lies on the line defined by `(i, j)`.
   - To determine if three points are collinear, use the slope comparison:
     `(y2 - y1) \times (x1 - x3) = (y1 - y3) \times (x2 - x1)`
     This equation avoids division and thus floating-point inaccuracies.

5. **Update Maximum Count**:

   - Update `maxi` if the current line defined by points `(i, j)` has more points than the previously recorded maximum.

6. **Return Result**:
   - After checking all pairs, return the maximum number of collinear points found.

### Code Implementation

#### C++ Implementation

```cpp
class Solution {
public:
    int maxPoints(vector<vector<int>>& points) {
        int n = points.size();

        if(n <= 2)
            return n;

        int maxi = 2;
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                int count = 2;
                for(int k = 0; k < n; k++) {
                    if(k != i && k != j) {
                        if((points[j][1] - points[i][1]) * (points[i][0] - points[k][0]) ==
                           (points[i][1] - points[k][1]) * (points[j][0] - points[i][0])) {
                            count++;
                        }
                    }
                }
                maxi = max(maxi, count);
            }
        }
        return maxi;
    }
};
```

#### Python Implementation

```python
class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        n = len(points)

        if n <= 2:
            return n

        maxi = 2
        for i in range(n):
            for j in range(i + 1, n):
                count = 2
                for k in range(n):
                    if k != i and k != j:
                        if (points[j][1] - points[i][1]) * (points[i][0] - points[k][0]) == \
                           (points[i][1] - points[k][1]) * (points[j][0] - points[i][0]):
                            count += 1
                maxi = max(maxi, count)
        return maxi
```

#### Java Implementation

```java
class Solution {
    public int maxPoints(int[][] points) {
        int n = points.length;

        if (n <= 2)
            return n;

        int maxi = 2;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int count = 2;
                for (int k = 0; k < n; k++) {
                    if (k != i && k != j) {
                        if ((points[j][1] - points[i][1]) * (points[i][0] - points[k][0]) ==
                            (points[i][1] - points[k][1]) * (points[j][0] - points[i][0])) {
                            count++;
                        }
                    }
                }
                maxi = Math.max(maxi, count);
            }
        }
        return maxi;
    }
}
```

#### JavaScript Implementation

```javascript
var maxPoints = function (points) {
  let n = points.length;

  if (n <= 2) return n;

  let maxi = 2;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let count = 2;
      for (let k = 0; k < n; k++) {
        if (k !== i && k !== j) {
          if (
            (points[j][1] - points[i][1]) * (points[i][0] - points[k][0]) ===
            (points[i][1] - points[k][1]) * (points[j][0] - points[i][0])
          ) {
            count++;
          }
        }
      }
      maxi = Math.max(maxi, count);
    }
  }
  return maxi;
};
```
