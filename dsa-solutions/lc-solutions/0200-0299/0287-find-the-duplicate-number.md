---
id: find-the-duplicate-number
title: Find the Duplicate Number
sidebar_label: 0287-Find the Duplicate Number
tags:
  - Array
  - Two Pointers
  - Binary Search
  - Bit Manipulation
description: Given an array of N + 1 size, where each element is between 1 and N. Assuming there is only one duplicate number, your task is to find the duplicate number.
---

## Problem Description

Given an array of integers `nums` of `n + 1` size, where each element is in the range `[1, n]` inclusive. Assuming there is only one duplicate number, your task is to find the duplicate number.

Note You must solve the problem **without modifying** the array `nums` and uses only constant extra space

### Examples

**Example 1:**

```plaintext
Input: nums = [1,3,4,2,2]
Output: 2
```

**Example 2:**

```plaintext
Input: nums = nums = [3,1,3,4,2]
Output: 3
```

**Example 3:**

```plaintext
Input: nums = nums = [3,3,3,3,3]
Output: 3
```

### Constraints

- `1 <= n <= 105`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- All the integers in `nums` appear only **once** except for **precisely one integer** which appears **two or more times**.

## Solution

The algorithm implemented in the code to find the duplicate number in an array follows the Floyd's Tortoise and Hare (Cycle Detection) method. Here's a concise explanation:

## Approach

### 1. Cycle Detection (Finding Intersection Point):

- Use two pointers, slow and fast.
- Both pointers start at the first element of the array.
- Move the slow pointer by one step (slow = nums[slow]).
- Move the fast pointer by two steps (fast = nums[nums[fast]]).
- Continue this process until the two pointers meet. This meeting point is guaranteed due to the presence of a cycle (the duplicate number causes the cycle).

### 2. Finding the Entrance to the Cycle (Duplicate Number):

- Once the intersection point is found, reset the fast pointer to the start of the array.
- Move both pointers one step at a time (slow = nums[slow] and fast = nums[fast]) until they meet again.
- The meeting point is the start of the cycle and is the duplicate number.

### Why it Works

- The array can be visualized as a linked list where each element points to the next element indicated by the value at its index.
- The presence of a duplicate means that there is a cycle in this "linked list".
- Floyd's Tortoise and Hare algorithm is used to detect this cycle and find the entry point of the cycle, which corresponds to the duplicate number.

### Implementation

### C++

```C++
class Solution {
  int findDuplicate(vector < int > & nums) {
    int slow = nums[0];
    int fast = nums[0];
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow != fast);
    fast = nums[0];
    while (slow != fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
    return slow;
  }
}
```

### Java

```Java
class Solution {
    public int findDuplicate(int[] nums) {
        int slow = nums[0];
        int fast = nums[0];
        do {
        slow = nums[slow];
        fast = nums[nums[fast]];
        } while (slow != fast);

        fast = nums[0];
        while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
        }
        return slow;
    }
}
```

### Complexity Analysis

- **Time complexity**: O(N), Since we traversed through the array only once.
- **Space complexity**: O(1), as the operations are performed in-place without using extra space.
