---
id: heaters
title: Heaters
sidebar_label: 0475-heaters
tags:
  - Array
  - Binary Search
  - Two Pointers
  - Sorting
description: "This is a solution to the heaters problem on LeetCode."
---

## Problem Description

Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.

Every house can be warmed, as long as the house is within the heater's warm radius range. 

Given the positions of `houses` and `heaters` on a horizontal line, return the minimum radius standard of heaters so that those heaters could cover all houses.

Notice that all the `heaters` follow your radius standard, and the warm radius will the same.

### Examples

**Example 1:**

```
Input: houses = [1,2,3,4], heaters = [1,4]
Output: 1
Explanation: The two heaters were placed at positions 1 and 4. We need to use a radius 1 standard, then all the houses can be warmed.
```

**Example 2:**

```
Input: houses = [1,5], heaters = [2]
Output: 3
```

### Constraints

- `1 <= houses.length, heaters.length <= 3 * 104`
- `1 <= houses[i], heaters[i] <= 109`

### Approach: 

1. Sort and Binary Search
- Sort Heaters array and perform binary search on the house
- If the returned index is greater or equal to zero, ,that means the house is located right on heater, we can ignore it
- If the returned index is smaller than 0, we can have find the left and right heater for this house and get the radius (left will be i -1th and right will be ith position)
- The min of the radii will compare with the res, and the max of them is our temporary res

2. Sort and Two Pointers
- If we sort both arrays, we just need to find the first heater that is closest to the house
- Then the result is simply the max of distance between the house-heater and the previous res
- To find the closest heater, we use while loop until we get the heater that is closer than previous heater


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@tanyagupta01"/>

```cpp
class Solution {
 public:
  int findRadius(vector<int>& houses, vector<int>& heaters) {
    ranges::sort(houses);
    ranges::sort(heaters);

    int ans = 0;
    int i = 0;  // heaters' index (currently used)

    for (const int house : houses) {
      while (i + 1 < heaters.size() &&
             house - heaters[i] > heaters[i + 1] - house)
        ++i;  // The next heater is better.
      ans = max(ans, abs(heaters[i] - house));
    }

    return ans;
  }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@tanyagupta01"/>

```java
class Solution {
  public int findRadius(int[] houses, int[] heaters) {
    Arrays.sort(houses);
    Arrays.sort(heaters);

    int ans = 0;
    int i = 0; // heaters' index (currently used)

    for (final int house : houses) {
      while (i + 1 < heaters.length && house - heaters[i] > heaters[i + 1] - house)
        ++i; // The next heater is better.
      ans = Math.max(ans, Math.abs(heaters[i] - house));
    }

    return ans;
  }
}
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: max(O(mlogm),O(nlogn)), where 𝑚 = ∣houses| and n = |heaters|

### Space Complexity: O(1)

## References

- **LeetCode Problem**: [Heaters](https://leetcode.com/problems/heaters/description/)

- **Solution Link**: [Heaters](https://leetcode.com/problems/heaters/solutions/)
