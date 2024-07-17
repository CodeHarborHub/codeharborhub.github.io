---
id: Count-Number-of-Rectangles-Containing-Each-Point
title: Count Number of Rectangles Containing Each Point
sidebar_label: 2250-Count Number of Rectangles Containing Each Point
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given a 2D integer array `rectangles` where `rectangles[i] = [li, hi]` indicates that the `i`-th rectangle has a length of `li` and a height of `hi`. You are also given a 2D integer array `points` where `points[j] = [xj, yj]` is a point with coordinates `(xj, yj)`.

The `i`-th rectangle has its bottom-left corner point at the coordinates (0, 0) and its top-right corner point at `(li, hi)`.

Return an integer array `count` of length `points.length` where `count[j]` is the number of rectangles that contain the `j`-th point.

The `i`-th rectangle contains the `j`-th point if `0 <= xj <= li` and `0 <= yj <= hi`. Note that points that lie on the edges of a rectangle are also considered to be contained by that rectangle.

### Examples

*Example 1:*

```plaintext
Input: rectangles = [[1,2],[2,3],[2,5]], points = [[2,1],[1,4]]
Output: [2,1]
Explanation: 
The first rectangle contains no points.
The second rectangle contains only the point (2, 1).
The third rectangle contains the points (2, 1) and (1, 4).
The number of rectangles that contain the point (2, 1) is 2.
The number of rectangles that contain the point (1, 4) is 1.
Therefore, we return [2, 1].
```

*Example 2:*

```plaintext
Input: rectangles = [[1,1],[2,2],[3,3]], points = [[1,3],[1,1]]
Output: [1,3]
Explanation:
The first rectangle contains only the point (1, 1).
The second rectangle contains only the point (1, 1).
The third rectangle contains the points (1, 3) and (1, 1).
The number of rectangles that contain the point (1, 3) is 1.
The number of rectangles that contain the point (1, 1) is 3.
Therefore, we return [1, 3].
```

### Constraints

- `1 <= rectangles.length, points.length <= 5 * 10^4`
- `rectangles[i].length == points[j].length == 2`
- `1 <= li, xj <= 10^9`
- `1 <= hi, yj <= 100`
- All the rectangles are unique.
- All the points are unique.

### Approach

1. **Sort Rectangles by Height:** First, sort the rectangles by their height in ascending order.
2. **Group Rectangles by Height:** Create a list of rectangles grouped by their height.
3. **Sort Points:** Sort the points by their y-coordinate in ascending order.
4. **Use Binary Search:** For each point, use binary search to quickly find the count of rectangles that can contain that point based on the x-coordinate.
5. **Iterate Efficiently:** As we iterate through each point, maintain a dynamic list of valid rectangle lengths that can contain the current point, and use this list to count rectangles.

### Solution

#### C++ Solution

```cpp
#include <vector>
#include <algorithm>
using namespace std;

vector<int> countRectangles(vector<vector<int>>& rectangles, vector<vector<int>>& points) {
    sort(rectangles.begin(), rectangles.end(), [](const vector<int>& a, const vector<int>& b) {
        return a[1] < b[1];
    });

    vector<pair<int, int>> points_with_index;
    for (int i = 0; i < points.size(); ++i) {
        points_with_index.emplace_back(points[i][0], points[i][1]);
    }

    sort(points_with_index.begin(), points_with_index.end(), [](const pair<int, int>& a, const pair<int, int>& b) {
        return a.second < b.second;
    });

    vector<int> result(points.size());
    vector<int> rectangle_lengths;
    int rect_index = 0;

    for (const auto& point : points_with_index) {
        int x = point.first;
        int y = point.second;

        while (rect_index < rectangles.size() && rectangles[rect_index][1] <= y) {
            rectangle_lengths.push_back(rectangles[rect_index][0]);
            ++rect_index;
        }

        auto it = lower_bound(rectangle_lengths.begin(), rectangle_lengths.end(), x);
        result[&point - &points_with_index[0]] = rectangle_lengths.end() - it;
    }

    return result;
}

// Example usage:
int main() {
    vector<vector<int>> rectangles = {{1, 2}, {2, 3}, {2, 5}};
    vector<vector<int>> points = {{2, 1}, {1, 4}};
    vector<int> result = countRectangles(rectangles, points);
    for (int count : result) {
        cout << count << " ";
    }
    // Output: 2 1
    return 0;
}
```

#### Java Solution

```java
import java.util.*;

public class CountRectangles {
    public static int[] countRectangles(int[][] rectangles, int[][] points) {
        Arrays.sort(rectangles, Comparator.comparingInt(a -> a[1]));

        int[][] pointsWithIndex = new int[points.length][3];
        for (int i = 0; i < points.length; i++) {
            pointsWithIndex[i][0] = points[i][0];
            pointsWithIndex[i][1] = points[i][1];
            pointsWithIndex[i][2] = i;
        }

        Arrays.sort(pointsWithIndex, Comparator.comparingInt(a -> a[1]));

        int[] result = new int[points.length];
        List<Integer> rectangleLengths = new ArrayList<>();
        int rectIndex = 0;

        for (int[] point : pointsWithIndex) {
            int x = point[0];
            int y = point[1];
            int originalIndex = point[2];

            while (rectIndex < rectangles.length && rectangles[rectIndex][1] <= y) {
                rectangleLengths.add(rectangles[rectIndex][0]);
                rectIndex++;
            }

            int count = rectangleLengths.size() - Collections.binarySearch(rectangleLengths, x);
            if (count < 0) {
                count = ~count;
            }
            result[originalIndex] = rectangleLengths.size() - count;
        }

        return result;
    }

    // Example usage:
    public static void main(String[] args) {
        int[][] rectangles = {{1, 2}, {2, 3}, {2, 5}};
        int[][] points = {{2, 1}, {1, 4}};
        int[] result = countRectangles(rectangles, points);
        System.out.println(Arrays.toString(result));  // Output: [2, 1]
    }
}
```

#### Python Solution

```python
from collections import defaultdict
from bisect import bisect_left

def countRectangles(rectangles, points):
    rectangles.sort(key=lambda x: x[1])  # Sort by height
    points_with_index = sorted([(p[0], p[1], i) for i, p in enumerate(points)], key=lambda x: x[1])

    result = [0] * len(points)
    rectangle_lengths = []
    rect_index = 0

    for x, y, original_index in points_with_index:
        # Add all rectangles with height >= y to the list
        while rect_index < len(rectangles) and rectangles[rect_index][1] <= y:
            rectangle_lengths.append(rectangles[rect_index][0])
            rect_index += 1

        # Count rectangles with length >= x
        result[original_index] = len(rectangle_lengths) - bisect_left(rectangle_lengths, x)

    return result

# Example usage:
rectangles = [[1, 2], [2, 3], [2, 5]]
points = [[2, 1], [1, 4]]
print(countRectangles(rectangles, points))  # Output: [2, 1]
```

### Complexity Analysis

- **Time Complexity:** $O((n+m) \log n)$
  - *Reason:* where `n` is the number of rectangles and `m` is the number of points, due to sorting and binary search operations.

- **Space Complexity:** $O(n+m)$
  - *Reason:* where `n` is the number of rectangles and `m` is the number of points, primarily due to storing rectangles, points with indices, and auxiliary data structures like lists or arrays.
