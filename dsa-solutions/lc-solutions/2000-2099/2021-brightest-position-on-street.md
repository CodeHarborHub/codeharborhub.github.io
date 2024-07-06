---
id: brightest-position-on-street
title: Brightest Position on Street
sidebar_label: 2021 Brightest Position on Street
tags:
  - Array
  - Prefix Sum
  - LeetCode
  - C++
description: "This is a solution to the Brightest Position on Street problem on LeetCode."
sidebar_position: 2021
---

## Problem Description

A perfectly straight street is represented by a number line. The street has street lamp(s) on it and is represented by a 2D integer array `lights`. Each `lights[i] = [positioni, rangei]` indicates that there is a street lamp at `positioni` that lights up the area from `[positioni - rangei, positioni + rangei]` (inclusive).

The brightness of a position `p` is defined as the number of street lamp that light up the position `p`.

Given `lights`, return the brightest position on the street. If there are multiple brightest positions, return the smallest one.

### Examples

**Example 1:**

```
Input: lights = [[-3,2],[1,2],[3,3]]
Output: -1
Explanation:
The first street lamp lights up the area from [(-3) - 2, (-3) + 2] = [-5, -1].
The second street lamp lights up the area from [1 - 2, 1 + 2] = [-1, 3].
The third street lamp lights up the area from [3 - 3, 3 + 3] = [0, 6].

Position -1 has a brightness of 2, illuminated by the first and second street light.
Positions 0, 1, 2, and 3 have a brightness of 2, illuminated by the second and third street light.
Out of all these positions, -1 is the smallest, so return it.

```

**Example 2:**

```
Input: lights = [[1,0],[0,1]]
Output: 1
Explanation:
The first street lamp lights up the area from [1 - 0, 1 + 0] = [1, 1].
The second street lamp lights up the area from [0 - 1, 0 + 1] = [-1, 1].

Position 1 has a brightness of 2, illuminated by the first and second street light.
Return 1 because it is the brightest position on the street.

```

**Example 3:**

```
Input: lights = [[1,2]]
Output: -1
Explanation:
The first street lamp lights up the area from [1 - 2, 1 + 2] = [-1, 3].

Positions -1, 0, 1, 2, and 3 have a brightness of 1, illuminated by the first street light.
Out of all these positions, -1 is the smallest, so return it.

```


### Constraints

- `1 <= lights.length <= 10^5`
- `lights[i].length == 2`
- `-10^8 <= positioni <= 10^8`
- `0 <= rangei <= 10^8`

### Approach

We can solve this problem using a prefix sum approach to handle the range updates efficiently. We will mark the start and end of each light's range and then use a sweep line algorithm to determine the brightest position.

### Complexity

- **Time complexity**: $O(n \log n)$ due to sorting the events.
- **Space complexity**: $O(n)$ for storing the events.

#### C++ 

```cpp

class Solution {
public:
    int brightestPosition(vector<vector<int>>& lights) {
        map<int, int> events;
        
        for (const auto& light : lights) {
            int start = light[0] - light[1];
            int end = light[0] + light[1];
            events[start]++;
            events[end + 1]--;
        }
        
        int maxBrightness = 0, currentBrightness = 0, brightestPos = 0;
        
        for (const auto& event : events) {
            currentBrightness += event.second;
            if (currentBrightness > maxBrightness) {
                maxBrightness = currentBrightness;
                brightestPos = event.first;
            }
        }
        
        return brightestPos;
    }
};
```
