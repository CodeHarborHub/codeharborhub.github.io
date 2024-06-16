---
id: Find-triplet-with-zero-sum
title: Find Triplet with Zero Sum
sidebar_label: 0023 Find Triplet with Zero Sum
tags:
- Array
- Sorting
- Two Pointers
- JavaScript
- TypeScript
- Python
- Java
- C++
description: "This document explores different approaches to solving the problem of finding a triplet in an array that sums up to zero, including solutions in JavaScript, TypeScript, Python, Java, and C++."
---

## Problem Statement

Given an array `arr[]` of distinct integers of size N, the task is to find if there are any three elements in `arr[]` whose sum is equal to zero.

### Examples

**Example 1:**

```
Input:
N = 5
arr[] = {-1, 0, 1, 2, -1, -4}

Output:
True

Explanation:
The triplets {-1, 0, 1} and {-1, -1, 2} both have a sum of zero.
```

**Example 2:**

```
Input:
N = 3
arr[] = {1, 2, 3}

Output:
False

Explanation:
No triplet has a sum of zero.
```

### Your Task
You don't need to read input or print anything. Your task is to complete the function `findTriplet()` which takes the integer `N` and integer array `arr[]` as parameters and returns true if there is a triplet with a sum of zero, otherwise false.

**Expected Time Complexity:** $O(N^2)$  
**Expected Auxiliary Space:** $O(1)$

### Constraints


- $1 ≤ N ≤ 10^5$  
- $-10^3 ≤ arr[i] ≤ 10^3$

## Solution

### Approach

We can solve this problem using sorting and the two-pointer technique. Here's a step-by-step approach:

1. Sort the array.
2. Iterate through the array using a for loop, fixing one element at a time.
3. Use two pointers to find the other two elements that sum up to zero with the fixed element:
   - One pointer starts from the next element after the fixed element.
   - The other pointer starts from the end of the array.
4. Adjust the pointers based on the sum of the three elements:
   - If the sum is zero, return true.
   - If the sum is less than zero, move the left pointer to the right.
   - If the sum is greater than zero, move the right pointer to the left.
5. If no triplet is found, return false.

### Implementation

<Tabs>
  <TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    bool findTriplet(int arr[], int n) {
        sort(arr, arr + n);
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1, right = n - 1;
            while (left < right) {
                int sum = arr[i] + arr[left] + arr[right];
                if (sum == 0) return true;
                if (sum < 0) left++;
                else right--;
            }
        }
        return false;
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
function findTriplet(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) return true;
            if (sum < 0) left++;
            else right--;
        }
    }
    return false;
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
function findTriplet(arr: number[]): boolean {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) return true;
            if (sum < 0) left++;
            else right--;
        }
    }
    return false;
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
class Solution:
    def findTriplet(self, arr: List[int], n: int) -> bool:
        arr.sort()
        for i in range(n - 2):
            left, right = i + 1, n - 1
            while left < right:
                total = arr[i] + arr[left] + arr[right]
                if total == 0:
                    return True
                if total < 0:
                    left += 1
                else:
                    right -= 1
        return False
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
class Solution {
    public boolean findTriplet(int[] arr, int n) {
        Arrays.sort(arr);
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1, right = n - 1;
            while (left < right) {
                int sum = arr[i] + arr[left] + arr[right];
                if (sum == 0) return true;
                if (sum < 0) left++;
                else right--;
            }
        }
        return false;
    }
}
```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(N^2)$, where N is the length of the array. We iterate through the array and for each element, we use the two-pointer technique which takes linear time.
- **Space Complexity:** $O(1)$, as we only use a constant amount of extra space for variables.

---

## References

- **GeeksforGeeks Problem:** [Find Triplet with Zero Sum](https://www.geeksforgeeks.org/find-triplet-sum-zero/)
- **Authors GeeksforGeeks Profile:** [Vipul lakum](https://www.geeksforgeeks.org/user/lakumvipwjge/)