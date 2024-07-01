---
id: rectangle-area
title: Rectangle Area
sidebar_label: 0223 Rectangle Area
tags:
- Geometry
- Math
description: "This gives solution to the problem rectangle area"
---

## Problem

Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

The first rectangle is defined by its bottom-left corner `(ax1, ay1)` and its top-right corner `(ax2, ay2).`

The second rectangle is defined by its bottom-left corner `(bx1, by1)` and its top-right corner `(bx2, by2).`

### Examples

**Example 1:**

**Input:** `rax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2`  
**Output:** `45`  

**Example 2:**

**Input:** ` ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2`  
**Output:** `16`  

### Constraints

- `104 <= ax1 <= ax2 <= 104`
- `104 <= ay1 <= ay2 <= 104`
- `104 <= bx1 <= bx2 <= 104`
- `104 <= by1 <= by2 <= 104`

---

## Approach
Find area of both rectangle and subtract the common region.

### Solution

#### Java

```java
class Solution {
    public int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        int areaA = Math.abs(ax1 - ax2) * Math.abs(ay1 - ay2);
        int areaB = Math.abs(bx1 - bx2) * Math.abs(by1 - by2);
        
        int intersectionWidth = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));
        int intersectionHeight = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));
        int intersectionArea = intersectionWidth * intersectionHeight;
        
        return areaA + areaB - intersectionArea;
    }
}
```
### C++
```cpp
class Solution {
public:
    int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        int ans=(ax2-ax1)*(ay2-ay1)+(bx2-bx1)*(by2-by1);
        int rem=(min(ax2,bx2)-max(ax1,bx1))*(min(ay2,by2)-max(ay1,by1));
        if(bx1>=ax2||by1>=ay2||bx2<=ax1||by2<=ay1)rem=0;
        if(rem<0)rem=0;
        return ans-rem;
    }
};
```
### Python
```python
class Solution:
    def computeArea(self, ax1: int, ay1: int, ax2: int, ay2: int, bx1: int, by1: int, bx2: int, by2: int) -> int:
        a1=(ax2-ax1)*(ay2-ay1)
        a2=(bx2-bx1)*(by2-by1)
        x1=max(ax1,bx1)
        x2=min(ax2,bx2)
        y1=max(ay1,by1)
        y2=min(ay2,by2)
        if x2-x1<0 or y2-y1<0: #No intersection will occur if one of the side is negative
            return a1+a2
        a3=(x2-x1)*(y2-y1)
        return a1+a2-a3
```
### Complexity Analysis

#### Time Complexity: O(1)
### Space Complexity: O(1)

