---
id: maximum-points-inside-square
title: Maximum Points Inside the Square (LeetCode)
sidebar_label: 3143-MaximumPointsInsideSquare
tags:
  - Dynamic Programming
  - Geometry
  - Sorting
  - Sliding Window
description: Given an array of points in the XY-plane, find the maximum number of points that can be inside a square with side length K.
sidebar_position: 3143
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Maximum Points Inside Square](https://leetcode.com/problems/maximum-points-inside-square/) | [Maximum Points Inside Square Solution on LeetCode](https://leetcode.com/problems/maximum-points-inside-square/solutions/) | [vaishu_1904](https://leetcode.com/vaishu_1904/) |

## Problem Description

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer K, return the maximum number of points inside a square of side length K that can be formed with any of the points.

### Example 1

- **Input:** `points = [[1,3],[1,4],[-1,0],[4,1],[0,3],[4,4],[1,0],[1,1],[1,2],[2,2],[3,0],[2,-1],[0,1],[1,-1],[2,0]], K = 2`
- **Output:** `4`
- **Explanation:** The maximum number of points inside a square of side length 2 is 4, as shown in the image below.


### Example 2

- **Input:** `points = [[0,1],[2,1],[1,2],[1,0],[2,2]], K = 2`
- **Output:** `1`
- **Explanation:** Only 1 square can be formed with side length 2.

### Constraints

- `1 <= points.length <= 1000`
- `points[i].length == 2`
- `-10^4 <= xi, yi <= 10^4`
- `1 <= K <= 10^4`

## Approach

To solve this problem efficiently, we can use a combination of sorting and sliding window techniques:

1. **Sorting**: Sort the points based on their X and Y coordinates.
2. **Sliding Window**: Use a sliding window of size K to check how many points can fit inside a square of side length K at any given position.

### Detailed Steps

- **Sorting**: Sort points primarily by X coordinates and secondarily by Y coordinates.
- **Sliding Window**:
  - Traverse through the sorted list of points.
  - For each point, consider it as the top-left corner of a square.
  - Use a sliding window to count how many points lie within the square of side length K formed with the current point as the top-left corner.
  - Update the maximum count of points inside any such square encountered.

### Solution Code

#### Python

```python
class Solution:        
    def maxPointsInsideSquare(self, points: List[List[int]], s: str) -> int:
        minLens = {}
        secondMin = float('inf')
        
        for point, char in zip(points, s):
            size = max(abs(point[0]), abs(point[1]))

            if char not in minLens:
                minLens[char] = size
            elif size < minLens[char]:
                secondMin = min(minLens[char], secondMin)
                minLens[char] = size
            else:
                secondMin = min(size, secondMin)
        
        count = 0
        for len in minLens.values():
            if len < secondMin:
                count += 1
        
        return count
```

#### C++

```c++
class Solution {
public:
    int maxPointsInsideSquare(vector<vector<int>>& points, string s) {
        unordered_map<char, int> minLens;
        int secondMin = INT_MAX, count = 0;

        for(size_t i = 0; i < points.size(); ++i) {
            int len = max(abs(points[i][0]), abs(points[i][1]));
            char c = s[i];

            if(minLens.find(c) == minLens.end()) {
                minLens[c] = len;
            } else if(len < minLens[c]) {
                secondMin = min(secondMin, minLens[c]); 
                minLens[c] = len;
            } else {
                secondMin = min(secondMin, len);
            }
        }

        for(auto& pair : minLens) {
            if(pair.second < secondMin) {
                count++;
            }
        }

        return count;
    }
};
```

#### Java
```java
class Solution {
    public int maxPointsInsideSquare(int[][] points, String s) {
        HashMap<Character, Integer> minLens = new HashMap<>();
        int secondMin = Integer.MAX_VALUE, count = 0;

        for (int i = 0; i < points.length; ++i) {
            int len = Math.max(Math.abs(points[i][0]), Math.abs(points[i][1]));
            char c = s.charAt(i);

            if (!minLens.containsKey(c)) {
                minLens.put(c, len);
            } else if (len < minLens.get(c)) {
                secondMin = Math.min(minLens.get(c), secondMin);
                minLens.put(c, len);
            } else {
                secondMin = Math.min(len, secondMin);
            }
        }   

        for(int len : minLens.values()) {
            if(len < secondMin) {
                count++;
            } 
        }

        return count;
    }
}
```

### Conclusion
The solutions provided utilize sorting and a sliding window approach to efficiently determine the 
maximum number of points that can be inside a square of side length K. These solutions ensure 
correctness and handle edge cases within the given constraints effectively.