---
id:  Maximum-Product-After-K-Increments
title:  Maximum Product After K Increments
sidebar_label: 2233-Maximum Product After K Increments
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given an array of non-negative integers nums and an integer k. In one operation, you may choose any element from nums and increment it by 1.

Return the maximum product of nums after at most k operations.

### Examples

**Example 1:**

Input: nums = [0,4], k = 5
Output: 20
Explanation: Increment the first number 5 times.
Now nums = [5, 4], with a product of 5 * 4 = 20.
It can be shown that 20 is maximum product possible, so we return 20.
Note that there may be other ways to increment nums to have the maximum product.

**Example 2:**

Input: nums = [6,3,3,2], k = 2
Output: 216
Explanation: Increment the second number 1 time and increment the fourth number 1 time.
Now nums = [6, 4, 3, 3], with a product of 6 * 4 * 3 * 3 = 216.
It can be shown that 216 is maximum product possible, so we return 216.
Note that there may be other ways to increment nums to have the maximum product.


### Constraints

- `1 <= nums.length, k <= 105`
- `0 <= nums[i] <= 106`
### Approach

Use a Min-Heap: Convert the array into a min-heap to efficiently manage the smallest element.
Perform Increments: For each of the 
k operations:
- Extract the smallest element from the heap.
- Increment this element by 1.
- Push the incremented element back into the heap.
Calculate the Product: After completing all increments, compute the product of all elements in the heap.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int maxProduct(vector<int>& nums, int k) {
    const int MOD = 1e9 + 7;
    priority_queue<int, vector<int>, greater<int>> minHeap(nums.begin(), nums.end());

    for (int i = 0; i < k; ++i) {
        int minVal = minHeap.top();
        minHeap.pop();
        minHeap.push(minVal + 1);
    }

    long long product = 1;
    while (!minHeap.empty()) {
        product = (product * minHeap.top()) % MOD;
        minHeap.pop();
    }

    return product;
}

int main() {
    vector<int> nums1 = {0, 4};
    int k1 = 5;
    cout << maxProduct(nums1, k1) << endl;  // Output: 20

    vector<int> nums2 = {6, 3, 3, 2};
    int k2 = 2;
    cout << maxProduct(nums2, k2) << endl;  // Output: 216

    return 0;
}



```

### Java Solution

```java
import java.util.PriorityQueue;

public class MaxProduct {
    public static int maxProduct(int[] nums, int k) {
        final int MOD = 1_000_000_007;
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.add(num);
        }

        for (int i = 0; i < k; ++i) {
            int minVal = minHeap.poll();
            minHeap.add(minVal + 1);
        }

        long product = 1;
        while (!minHeap.isEmpty()) {
            product = (product * minHeap.poll()) % MOD;
        }

        return (int) product;
    }

    public static void main(String[] args) {
        int[] nums1 = {0, 4};
        int k1 = 5;
        System.out.println(maxProduct(nums1, k1));  // Output: 20

        int[] nums2 = {6, 3, 3, 2};
        int k2 = 2;
        System.out.println(maxProduct(nums2, k2));  // Output: 216
    }
}


```

### Python Solution

```python
import heapq

def maxProduct(nums, k):
    MOD = 10**9 + 7
    heapq.heapify(nums)  # Turn nums into a min-heap

    for _ in range(k):
        min_val = heapq.heappop(nums)
        heapq.heappush(nums, min_val + 1)
    
    product = 1
    for num in nums:
        product = (product * num) % MOD

    return product

# Example usage
print(maxProduct([0, 4], 5))  # Output: 20
print(maxProduct([6, 3, 3, 2], 2))  # Output: 216


```

### Complexity Analysis

### Time Complexity: $O(n+k*logn)$

> **Reason**:$O(n)$ for heapifying the array and $O(k*logn)$ for k increment operations

### Space Complexity: $O(n)$

> **Reason**: due to the storage required for the heap.

