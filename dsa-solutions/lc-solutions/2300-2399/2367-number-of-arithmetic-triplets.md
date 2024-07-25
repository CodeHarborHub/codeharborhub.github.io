---
id: number-of-arithmetic-triples
title:  Number of Arithmetic Triplets
sidebar_label: 2367-Number of Arithmetic Triplets
tags:
  - Array
  - HashTable
  - Two Pointers
description: "This is a solution to the Number of Arithmetic Triplets in leetcode"
---

## Problem Description

You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met

1. `i < j < k,`
2. nums[j] - nums[i] == diff, and
3. nums[k] - nums[j] == diff.

Return the number of unique arithmetic triplets.

 

 

### Examples

**Example 1:**

```
Input: nums = [0,1,4,6,7,10], diff = 3
Output: 2
Explanation:
(1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
(2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 

```
**Example 2:**
```
Input: nums = [4,5,6,7,8,9], diff = 2
Output: 2
Explanation:
(0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
(1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.

 ```
## Complexity Analysis

*** Time Complexity:** $O(n*n*n)$

*** Space Complexity:** $O(1)$

### Constraints

- `3 <= nums.length <= 200`
- `0 <= nums[i] <= 200`
- `1 <= diff <= 50`


### Solution
## Approach
The provided solution for finding arithmetic triplets in an array employs a brute-force approach. It iterates through all possible combinations of three distinct indices (i, j, k) within the array 'nums', ensuring that 'i < j < k'. For each combination, it checks if the difference between the elements at these indices matches the specified difference 'diff'. Specifically, it verifies if the difference between 'nums[j]' and 'nums[i]' equals 'diff' and if the difference between 'nums[k]' and 'nums[j]' also equals 'diff'. If both conditions are met, it counts this triplet as a valid arithmetic triplet. The nested loops ensure that all combinations are considered, making the solution straightforward but not optimal for large input sizes due to its O(n^3) time complexity.
## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int arithmeticTriplets(vector<int>& nums, int diff) {
        int c = 0;
        for (int i = 0; i < nums.size() - 2; i++) {
            for (int j = i + 1; j < nums.size() - 1; j++) {
                for (int k = j + 1; k < nums.size(); k++) {
                    if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) {
                        c++;
                    }
                }
            }
        }
        return c;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int arithmeticTriplets(int[] nums, int diff) {
        int c=0;
        for(int i=0;i<nums.length-2;i++){
            for(int j=i+1;j<nums.length-1;j++){
                for(int k=j+1;k<nums.length;k++){
                    if(nums[j]-nums[i]==diff && nums[k]-nums[j]==diff){
                        c++;
                    }
                }
            }
        }
        return c;
    }
}

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def arithmeticTriplets(self, nums, diff):
        c = 0
        for i in range(len(nums) - 2):
            for j in range(i + 1, len(nums) - 1):
                for k in range(j + 1, len(nums)):
                    if nums[j] - nums[i] == diff and nums[k] - nums[j] == diff:
                        c += 1
        return c


```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Number of Arithmetic Triplets](https://leetcode.com/problems/number-of-arithmetic-triplets/description/)

- **Solution Link**: [Number of Arithmetic Triplets](https://leetcode.com/problems/number-of-arithmetic-triplets/post-solution/?submissionId=1267331792)
