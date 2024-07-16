---
id: average-height-of-buildings
title: Average Height of Buildings in Each Segment
sidebar_label: 2015 Average Height of Buildings in Each Segment
tags:
  - Data Structures
  - Sweep Line
  - LeetCode
description: "This is a solution to the Average Height of Buildings in Each Segment problem on LeetCode."
sidebar_position: 2015
---

## Problem Description

A perfectly straight street is represented by a number line. The street has building(s) on it and is represented by a 2D integer array `buildings`, where `buildings[i] = [starti, endi, heighti]`. This means that there is a building with `heighti` in the half-closed segment `[starti, endi)`.

You want to describe the heights of the buildings on the street with the minimum number of non-overlapping segments. The street can be represented by the 2D integer array `street` where `street[j] = [leftj, rightj, averagej]` describes a half-closed segment `[leftj, rightj)` of the road where the average heights of the buildings in the segment is `averagej`.

For example, if `buildings = [[1,5,2],[3,10,4]]`, the street could be represented by `street = [[1,3,2],[3,5,3],[5,10,4]]` because:
- From 1 to 3, there is only the first building with an average height of 2 / 1 = 2.
- From 3 to 5, both the first and the second building are there with an average height of (2+4) / 2 = 3.
- From 5 to 10, there is only the second building with an average height of 4 / 1 = 4.

Given `buildings`, return the 2D integer array `street` as described above (excluding any areas of the street where there are no buildings). You may return the array in any order.

The average of `n` elements is the sum of the `n` elements divided (integer division) by `n`.

A half-closed segment `[a, b)` is the section of the number line between points `a` and `b` including point `a` and not including point `b`.

### Examples

**Example 1:**

```

Input: buildings = [[1,4,2],[3,9,4]]
Output: [[1,3,2],[3,4,3],[4,9,4]]
Explanation:
From 1 to 3, there is only the first building with an average height of 2 / 1 = 2.
From 3 to 4, both the first and the second building are there with an average height of (2+4) / 2 = 3.
From 4 to 9, there is only the second building with an average height of 4 / 1 = 4.

```

**Example 2:**
```
Input: buildings = [[1,3,2],[2,5,3],[2,8,3]]
Output: [[1,3,2],[3,8,3]]
Explanation:
From 1 to 2, there is only the first building with an average height of 2 / 1 = 2.
From 2 to 3, all three buildings are there with an average height of (2+3+3) / 3 = 2.
From 3 to 5, both the second and the third building are there with an average height of (3+3) / 2 = 3.
From 5 to 8, there is only the last building with an average height of 3 / 1 = 3.
The average height from 1 to 3 is the same so we can group them into one segment.
The average height from 3 to 8 is the same so we can group them into one segment.
```

**Example 3:**

```
Input: buildings = [[1,2,1],[5,6,1]]
Output: [[1,2,1],[5,6,1]]
Explanation:
From 1 to 2, there is only the first building with an average height of 1 / 1 = 1.
From 2 to 5, there are no buildings, so it is not included in the output.
From 5 to 6, there is only the second building with an average height of 1 / 1 = 1.
We cannot group the segments together because an empty space with no buildings separates the segments.
```

### Constraints
- `1 <= buildings.length <= 10^5`
- `buildings[i].length == 3`
- `0 <= starti < endi <= 10^8`
- `1 <= heighti <= 10^5`

### Approach

The problem can be solved using a sweep line algorithm. We can process the events of adding and removing buildings at their respective start and end points, maintaining the current active set of buildings, and calculating the average height for each segment.

#### C++

``` cpp
class Solution {
public:
    vector<vector<int>> averageHeightOfBuildings(vector<vector<int>>& buildings) {
        map<int, int> height, cnt;
        for (auto& v : buildings) {
            int s = v[0], e = v[1], h = v[2];
            cnt[s]++, cnt[e]--;
            height[s] += h, height[e] -= h;
        }
        vector<vector<int>> ans;
        int i = 0, h = 0, n = 0;
        for (auto& [j, _] : cnt) {
            if (n) {
                vector<int> t = {i, j, h / n};
                if (ans.size() && ans.back()[1] == i && ans.back()[2] == t[2]) {
                    ans.back()[1] = j;
                } else {
                    ans.push_back(t);
                }
            }
            i = j;
            h += height[j];
            n += cnt[j];
        }
        return ans;
    }
};
```

#### Java

``` java
class Solution {
    public int[][] averageHeightOfBuildings(int[][] buildings) {
        TreeMap<Integer, Integer> height = new TreeMap<>();
        TreeMap<Integer, Integer> cnt = new TreeMap<>();
        for (var v : buildings) {
            int s = v[0], e = v[1], h = v[2];
            cnt.put(s, cnt.getOrDefault(s, 0) + 1);
            cnt.put(e, cnt.getOrDefault(e, 0) - 1);
            height.put(s, height.getOrDefault(s, 0) + h);
            height.put(e, height.getOrDefault(e, 0) - h);
        }
        int i = 0, h = 0, n = 0;
        List<int[]> res = new ArrayList<>();
        for (int j : cnt.keySet()) {
            if (n > 0) {
                int[] t = new int[] {i, j, h / n};
                int k = res.size() - 1;
                if (k >= 0 && res.get(k)[1] == i && res.get(k)[2] == t[2]) {
                    res.get(k)[1] = j;
                } else {
                    res.add(t);
                }
            }
            h += height.get(j);
            n += cnt.get(j);
            i = j;
        }
        int[][] ans = new int[res.size()][3];
        for (i = 0; i < ans.length; ++i) {
            ans[i] = res.get(i);
        }
        return ans;
    }
}
```