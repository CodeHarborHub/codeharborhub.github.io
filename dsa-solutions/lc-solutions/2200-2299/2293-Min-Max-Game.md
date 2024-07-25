---
id:  Min-Max-Game
title: Min Max Game
sidebar_label: 2293-Min Max Game
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given a 0-indexed integer array nums whose length is a power of 2.

Apply the following algorithm on nums:

Let n be the length of nums. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n / 2.
For every even index i where `0 <= i < n / 2`, assign the value of newNums[i] as min(nums[2 * i], nums[2 * i + 1]).
For every odd index i where `0 <= i < n / 2`, assign the value of newNums[i] as max(nums[2 * i], nums[2 * i + 1]).
Replace the array nums with newNums.
Repeat the entire process starting from step 1.
Return the last number that remains in nums after applying the algorithm.

### Examples

**Example 1:**

Input: nums = [1,3,5,2,4,8,2,2]
Output: 1
Explanation: The following arrays are the results of applying the algorithm repeatedly.
First: nums = [1,5,4,2]
Second: nums = [1,4]
Third: nums = [1]
1 is the last remaining number, so we return 1.

**Example 2:**

Input: nums = [3]
Output: 3
Explanation: 3 is already the last remaining number, so we return 3.
 



### Constraints

- `1 <= nums.length <= 1024`
- `1 <= nums[i] <= 109`
- `nums.length is a power of 2.`
### Approach

Initialize: Start with the array nums.

Iterate and Reduce:

- While nums has more than 1 element:
- Create newNums with half the length.
- For each even index, assign the minimum of the corresponding pair from nums.
- For each odd index, assign the maximum.
- Replace nums with newNums.
Return: Return the last remaining element in nums.
### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <vector>
#include <algorithm>
using namespace std;

int minMaxGame(vector<int>& nums) {
    while (nums.size() > 1) {
        vector<int> newNums(nums.size() / 2);
        for (int i = 0; i < newNums.size(); ++i) {
            if (i % 2 == 0) {
                newNums[i] = min(nums[2 * i], nums[2 * i + 1]);
            } else {
                newNums[i] = max(nums[2 * i], nums[2 * i + 1]);
            }
        }
        nums = newNums;
    }
    return nums[0];
}

// Example usage:
#include <iostream>
int main() {
    vector<int> nums1 = {1, 3, 5, 2, 4, 8, 2, 2};
    cout << minMaxGame(nums1) << endl;  // Output: 1

    vector<int> nums2 = {3};
    cout << minMaxGame(nums2) << endl;  // Output: 3
    return 0;
}


```

### Java Solution

```java
public class MinMaxGame {
    public static int minMaxGame(int[] nums) {
        while (nums.length > 1) {
            int[] newNums = new int[nums.length / 2];
            for (int i = 0; i < newNums.length; i++) {
                if (i % 2 == 0) {
                    newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
                } else {
                    newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
                }
            }
            nums = newNums;
        }
        return nums[0];
    }

    public static void main(String[] args) {
        int[] nums1 = {1, 3, 5, 2, 4, 8, 2, 2};
        System.out.println(minMaxGame(nums1));  // Output: 1

        int[] nums2 = {3};
        System.out.println(minMaxGame(nums2));  // Output: 3
    }
}


```

### Python Solution

```python
def minMaxGame(nums):
    while len(nums) > 1:
        newNums = []
        for i in range(len(nums) // 2):
            if i % 2 == 0:
                newNums.append(min(nums[2 * i], nums[2 * i + 1]))
            else:
                newNums.append(max(nums[2 * i], nums[2 * i + 1]))
        nums = newNums
    return nums[0]

# Example usage:
nums1 = [1, 3, 5, 2, 4, 8, 2, 2]
print(minMaxGame(nums1))  # Output: 1

nums2 = [3]
print(minMaxGame(nums2))  # Output: 3


```

### Complexity Analysis

### Time Complexity: $O(n*logn)$

> **Reason**:Each iteration halves the array length, and there are logn iterations .Each iteration involves $O(n)$ operations, leading to a total time complexity of $O(n*logn)$.

### Space Complexity: $O(n)$

> **Reason**: The space complexity is primarily determined by the storage of intermediate arrays, which in the worst case is proportional to the size of the input array n.


