---
id: partition-the-array
title: Partition The Array (Geeks for Geeks)
sidebar_label: Partition-The-Array
tags:
  - Intermediate
  - Geeks for Geeks
  - CPP
  - Python
  - DSA

description: "This is a solution to the Partition The Array Problem  on Geeks for Geeks."
---

## Problem Description

Given an array of N integers, you have to find if it is possible to partition the array with following rules:

Each element should belong to exactly one partition.
Each partition should have atleast K elements.
Absolute difference between any pair of elements in the same partition should not exceed M. 


## Examples

**Example:**
**Input:** `arr[] = {1, 5, 11, 5}`
**Output:** true 
**Explanation:** The array can be partitioned as {1, 5, 5} and {11}

**Input:** `arr[] = {1, 5, 3}`
**Output:** false 
**Explanation:** The array cannot be partitioned into equal sum sets.

## Your Task
You don't need to read input or print anything. Your task is to complete the function partitionArray() which takes the number of elements N, integer K, integer M and array A[ ] as input parameters and returns true if we can partition the array such that all rules are satisfied, else returns false.

Expected Time Complexity: $O(N * Log(N))$
Expected Auxiliary Space: $O(N)$

## Constraints

- `1 ≤ N ≤ 2*105`
- `1 ≤ K ≤ N`
- `1 ≤ M ≤ 109`
- `1 ≤ A[i] ≤ 109`

## Problem Explanation

Given an array of N integers, you have to find if it is possible to partition the array with following rules:

**Steps 1** Each element should belong to exactly one partition.
**Steps 2** Each partition should have atleast K elements.
**Steps 3** Absolute difference between any pair of elements in the same partition should not exceed M.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python

class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        ans = 0
        for i in range(0, len(nums), 2):
            ans += nums[i]
        return ans

  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int sum = 0;
        for(int i=0; i<nums.size(); i+=2) {
            sum += nums[i];
        }
        return sum;
    }
};
  ```
  </TabItem>
</Tabs>

## Solution Logic

Partition The Array Can be implemented in the further mentioned technique via which solution is as follows : 

**Sorting the Array:** The function first sorts the input list nums in ascending order. Sorting ensures that the smallest numbers are paired together.

**Initializing the Sum:** A variable ans is initialized to 0. This will accumulate the sum of the minimum values from each pair.

**Summing Minimum Pair Values:** The function iterates through the sorted list in steps of 2 (i.e., it considers pairs of elements).
For each pair, it adds the first element (which is the minimum of the pair due to sorting) to ans.
**Returning the Result:** After iterating through the list, the function returns the accumulated sum ans.

## Time Complexity

$O(N * Log(N))$.

## Space Complexity

$O(N)$.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/problems/array-partition/1)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/array-partition/description/)
- **Author's Geeks for Geeks Profile:**  | [DaminiChachane](https://leetcode.com/u/divcxl15/) |

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
