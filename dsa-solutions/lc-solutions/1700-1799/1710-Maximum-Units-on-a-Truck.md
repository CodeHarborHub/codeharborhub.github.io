---
id: maximum-units-on-a-truck
title: Maximum Units on a Truck
sidebar_label: 1710. Maximum Units on a Truck
tags: [Array, Simulation, C++, Python, Java]
description: "This is a solution to the Maximum Units on a Truck problem on LeetCode."
---

## Problem Description

You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where `boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]`:

- `numberOfBoxesi` is the number of boxes of type `i`.
- `numberOfUnitsPerBoxi` is the number of units in each box of the type `i`.
You are also given an integer `truckSize`, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed `truckSize`.

Return the maximum total number of units that can be put on the truck.

### Examples

**Example 1:**

```
Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
Output: 8
Explanation: There are:
- 1 box of the first type that contains 3 units.
- 2 boxes of the second type that contain 2 units each.
- 3 boxes of the third type that contain 1 unit each.
You can take all the boxes of the first and second types, and one box of the third type.
The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

```

**Example 2:**

```
Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
Output: 91

```

### Constraints

- `1 <= boxTypes.length <= 1000`
- `1 <= numberOfBoxesi, numberOfUnitsPerBoxi <= 1000`
- `1 <= truckSize <= 10^6`

## Solution for 1710. Maximum Units on a Truck


### Approach 

The given constraints for numberOfUnitsPerBox are small enough that we can use an approach similar to counting sort to reduce the time complexity to $O(N)$.

Here, we can declare an array freq of `size=1000` (which is maximum number of units per box) where `freq[i]` will denote the number of boxes that can hold `i` number of units. We can iterate through the given boxTypes array and populate the freq array. Then we can iterate over the freq array and greedily choose starting from `i=1000` till we run out of truckSize or pick all available boxes. 

### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```python
           def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
    freq, max_units = [0]*1001, 0
    for box in boxTypes:
        freq[box[1]] += box[0]
    for units in range(1000,0,-1):
        if truckSize < 0: break
        max_units += min(truckSize, freq[units]) * units
        truckSize -= freq[units]
    return max_units

    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```java
          class Solution {
	public int maximumUnits(int[][] boxTypes, int truckSize) {
		Arrays.sort(boxTypes, Comparator.comparingInt(o -> -o[1]));
		int ans = 0, i = 0, n = boxTypes.length;
		while (i < n && truckSize > 0) {
			int maxi = Math.min(boxTypes[i][0], truckSize);
			ans += maxi * boxTypes[i][1];
			i++;
			truckSize -= maxi;
		}
		return ans;
	}
}
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```cpp
         int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {
	int freq[1001]{0}, maxUnits = 0;   // freq[i] = number of boxes that can hold i units
	for(auto& box : boxTypes) freq[box[1]] += box[0];
	// greedily choose starting from max units till either truckSize runs out or you choose all boxes
	for(int units = 1000; truckSize > 0 && ~units; --units) { 
		maxUnits += min(truckSize, freq[units]) * units;
		truckSize -= freq[units];
	}
	return maxUnits;
}
    ```
</TabItem>
</Tabs>

### Complexity Analysis

- Time Complexity: $ O(N) $
- Space Complexity: $ O(1)$

## References

- **LeetCode Problem**: [Where Will the Ball Fall](https://leetcode.com/problems/maximum-units-on-a-truck/description/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/)
