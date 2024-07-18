---
id:  Count-Lattice-Points-Inside-a-Circle
title:  Count Lattice Points Inside a Circle
sidebar_label: 2249-Count Lattice Points Inside a Circle
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

Given a 2D integer array circles where circles[i] = [xi, yi, ri] represents the center (xi, yi) and radius ri of the ith circle drawn on a grid, return the number of lattice points that are present inside at least one circle.

### Examples

**Example 1:**

Input: circles = [[2,2,1]]
Output: 5
Explanation:
The figure above shows the given circle.
The lattice points present inside the circle are (1, 2), (2, 1), (2, 2), (2, 3), and (3, 2) and are shown in green.
Other points such as (1, 1) and (1, 3), which are shown in red, are not considered inside the circle.
Hence, the number of lattice points present inside at least one circle is 5.

**Example 2:**

Input: circles = [[2,2,2],[3,4,1]]
Output: 16
Explanation:
The figure above shows the given circles.
There are exactly 16 lattice points which are present inside at least one circle. 
Some of them are (0, 2), (2, 0), (2, 4), (3, 2), and (4, 4).




### Constraints

- `1 <= circles.length <= 200`
- `circles[i].length == 3`
- `1 <= xi, yi <= 100`
- `1 <= ri <= min(xi, yi)`

### Approach

- For each circle, we iterate over a square grid that bounds the circle.
- For each point in this bounding grid, we check if it lies within the circle 
- Use a set to keep track of unique lattice points that fall within any circle.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

struct Point {
    int x, y;
    bool operator==(const Point& other) const {
        return x == other.x && y == other.y;
    }
};

namespace std {
    template <>
    struct hash<Point> {
        size_t operator()(const Point& point) const {
            return hash<int>()(point.x) ^ hash<int>()(point.y);
        }
    };
}

bool isInsideCircle(int x, int y, int cx, int cy, int r) {
    int dx = x - cx;
    int dy = y - cy;
    return dx * dx + dy * dy <= r * r;
}

int countLatticePoints(vector<vector<int>>& circles) {
    unordered_set<Point> points;
    
    for (const auto& circle : circles) {
        int cx = circle[0], cy = circle[1], r = circle[2];
        
        for (int x = cx - r; x <= cx + r; ++x) {
            for (int y = cy - r; y <= cy + r; ++y) {
                if (isInsideCircle(x, y, cx, cy, r)) {
                    points.insert({x, y});
                }
            }
        }
    }
    
    return points.size();
}

int main() {
    vector<vector<int>> circles = {{2, 2, 1}, {3, 4, 1}};
    cout << countLatticePoints(circles) << endl; // Output: 16
    return 0;
}


```

### Java Solution

```java
import java.util.HashSet;
import java.util.Set;

public class LatticePointsInCircles {

    static class Point {
        int x, y;

        Point(int x, int y) {
            this.x = x;
            this.y = y;
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj) return true;
            if (obj == null || getClass() != obj.getClass()) return false;
            Point point = (Point) obj;
            return x == point.x && y == point.y;
        }

        @Override
        public int hashCode() {
            return 31 * x + y;
        }
    }

    private static boolean isInsideCircle(int x, int y, int cx, int cy, int r) {
        int dx = x - cx;
        int dy = y - cy;
        return dx * dx + dy * dy <= r * r;
    }

    public static int countLatticePoints(int[][] circles) {
        Set<Point> points = new HashSet<>();

        for (int[] circle : circles) {
            int cx = circle[0], cy = circle[1], r = circle[2];

            for (int x = cx - r; x <= cx + r; ++x) {
                for (int y = cy - r; y <= cy + r; ++y) {
                    if (isInsideCircle(x, y, cx, cy, r)) {
                        points.add(new Point(x, y));
                    }
                }
            }
        }

        return points.size();
    }

    public static void main(String[] args) {
        int[][] circles = {{2, 2, 1}, {3, 4, 1}};
        System.out.println(countLatticePoints(circles)); // Output: 16
    }
}


```

### Python Solution

```python
def countLatticePoints(circles):
    points = set()
    
    for x, y, r in circles:
        for i in range(x - r, x + r + 1):
            for j in range(y - r, y + r + 1):
                if (i - x) ** 2 + (j - y) ** 2 <= r ** 2:
                    points.add((i, j))
    
    return len(points)

# Example usage
circles = [[2, 2, 1]]
print(countLatticePoints(circles))  # Output: 5

circles = [[2, 2, 2], [3, 4, 1]]
print(countLatticePoints(circles))  # Output: 16



```

### Complexity Analysis

### Time Complexity: $O(n*r*r)$

> **Reason**:where n is the number of circles and r is the average radius of the circles.

### Space Complexity: $O(n*r*r)$

> **Reason**: where n is the number of circles and r is the average radius of the circles. This accounts for the storage of unique lattice points within all circles.

