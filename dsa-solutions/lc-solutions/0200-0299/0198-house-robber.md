---
id: house-robber
title: House Robber
sidebar_label: 0198 House Robber
tags:
- Dynamic Programming
- Array
- C++
- Java
- Python
description: "This document provides a solution to the House Robber problem, where houses are arranged in a line."
---

## Problem
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

### Example 1:
Input: nums = [1,2,3,1]  
Output: 4  
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.

### Example 2:
Input: nums = [2,7,9,3,1]  
Output: 12  
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12.

### Constraints:
- $1 <= nums.length <= 100$  
- $0 <= nums[i] <= 400$  

## Solution
There is some frustration when people publish their perfect fine-grained algorithms without sharing any information about how they were derived. This is an attempt to change the situation. There is not much more explanation but it's rather an example of higher-level improvements. Converting a solution to the next step shouldn't be as hard as attempting to come up with the perfect algorithm at first attempt.

This particular problem and most others can be approached using the following sequence:

1. Find recursive relation
2. Recursive (top-down)
3. Recursive + memo (top-down)
4. Iterative + memo (bottom-up)
5. Iterative + N variables (bottom-up)

### Step 1. Figure out recursive relation
A robber has 2 options: 
a) rob current house i; 
b) don't rob current house.  
If option "a" is selected it means she can't rob the previous i-1 house but can safely proceed to the one before previous i-2 and gets all cumulative loot that follows.  
If option "b" is selected the robber gets all the possible loot from the robbery of i-1 and all the following buildings.  
So it boils down to calculating what is more profitable:
- robbery of the current house + loot from houses before the previous
- loot from the previous house robbery and any loot captured before that

rob(i) = Math.max(rob(i - 2) + currentHouseValue, rob(i - 1))

### Step 2. Recursive (top-down)
Converting the recurrent relation from Step 1 shouldn't be very hard.

```java
public int rob(int[] nums) {
    return rob(nums, nums.length - 1);
}

private int rob(int[] nums, int i) {
    if (i < 0) {
        return 0;
    }
    return Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1));
}
```

This algorithm will process the same i multiple times and it needs improvement.

### Step 3. Recursive + memo (top-down)
```java
int[] memo;
public int rob(int[] nums) {
    memo = new int[nums.length + 1];
    Arrays.fill(memo, -1);
    return rob(nums, nums.length - 1);
}

private int rob(int[] nums, int i) {
    if (i < 0) {
        return 0;
    }
    if (memo[i] >= 0) {
        return memo[i];
    }
    int result = Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1));
    memo[i] = result;
    return result;
}
```
Much better, this should run in O(n) time. Space complexity is O(n) as well, because of the recursion stack, let's try to get rid of it.

### Step 4. Iterative + memo (bottom-up)
```java
public int rob(int[] nums) {
    if (nums.length == 0) return 0;
    int[] memo = new int[nums.length + 1];
    memo[0] = 0;
    memo[1] = nums[0];
    for (int i = 1; i < nums.length; i++) {
        int val = nums[i];
        memo[i + 1] = Math.max(memo[i], memo[i - 1] + val);
    }
    return memo[nums.length];
}
```

### Step 5. Iterative + 2 variables (bottom-up)
We can notice that in the previous step we use only memo[i] and memo[i-1], so going just 2 steps back. We can hold them in 2 variables instead. This optimization is met in Fibonacci sequence creation and some other problems.

```java
public int rob(int[] nums) {
    if (nums.length == 0) return 0;
    int prev1 = 0;
    int prev2 = 0;
    for (int num : nums) {
        int tmp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = tmp;
    }
    return prev1;
}
```

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>

```cpp
#include <bits/stdc++.h>
using namespace std;

int rob(vector<int>& nums) {
    int n = nums.size();
    if (n == 0) return 0;
    int prev1 = 0, prev2 = 0;
    for (int num : nums) {
        int tmp = prev1;
        prev1 = max(prev2 + num, prev1);
        prev2 = tmp;
    }
    return prev1;
}

int main() {
    vector<int> nums = {2, 7, 9, 3, 1};
    cout << rob(nums); // Output: 12
    return 0;
}
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>

```java
public class HouseRobber {
    public int rob(int[] nums) {
        if (nums.length == 0) return 0;
        int prev1 = 0;
        int prev2 = 0;
        for (int num : nums) {
            int tmp = prev1;
            prev1 = Math.max(prev2 + num, prev1);
            prev2 = tmp;
        }
        return prev1;
    }

    public static void main(String[] args) {
        HouseRobber hr = new HouseRobber();
        int[] nums = {2, 7, 9, 3, 1};
        System.out.println(hr.rob(nums)); // Output: 12
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>

```python
def rob(nums):
    if not nums:
        return 0
    prev1, prev2 = 0, 0
    for num in nums:
        tmp = prev1
        prev1 = max(prev2 + num, prev1)
        prev2 = tmp
    return prev1

nums = [2, 7, 9, 3, 1]
print(rob(nums))  # Output: 12
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: O(N)

> **Reason**: We are running a simple iterative loop, two times. Therefore total time complexity will be O(N) + O(N) ≈ O(N)

### Space Complexity: O(1)

> **Reason**: We are not using extra space.

## References

- **LeetCode Problem**: [House Robber](https://leetcode.com/problems/house-robber/)

- **Author's GeeksforGeeks Profile:** [Vipul Lakum](https://leetcode.com/u/vipul_lakum_02/)