---
id: Partition-equal-subset-sum
title: Partition Equal Subset Sum
sidebar_label: 0416 - Partition Equal Subset Sum
tags:
  - Dynamic Programming
  - C++
  - Java
  - Python
description: "This document provides a solution to the Partition Equal Subset Sum problem."
---

## Problem

Given an integer array `nums`, return `true` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or `false` otherwise.

### Examples

**Example 1:**

Input: nums = [1,5,11,5]  
Output: true  
Explanation: The array can be partitioned as [1, 5, 5] and [11].

**Example 2:**

Input: nums = [1,2,3,5]  
Output: false  
Explanation: The array cannot be partitioned into equal sum subsets.

### Constraints

- $1 \leq \text{nums.length} \leq 200$
- $1 \leq \text{nums}[i] \leq 100$

### Approach

The following are the two main steps to solve this problem:

1. Calculate the sum of the array. If the sum is odd, there cannot be two subsets with an equal sum, so return `false`.
2. If the sum of the array elements is even, calculate `sum / 2` and find a subset of the array with a sum equal to `sum / 2`.

The first step is simple. The second step is crucial and can be solved either using recursion or Dynamic Programming.

### Solution

This problem can be solved using dynamic programming. We need to find whether the sum of some elements of the array make it equal to `sum / 2`; if yes, then we return `true`, otherwise `false`.

#### Code in Different Languages

```cpp title="C++"
using namespace std;

bool isSubsetSum(int arr[], int n, int sum, vector<vector<int>>& dp) {
    if (sum == 0)
        return true;
    if (n == 0 && sum != 0)
        return false;

    if (dp[n][sum] != -1)
        return dp[n][sum];

    if (arr[n - 1] > sum)
        return isSubsetSum(arr, n - 1, sum, dp);

    return dp[n][sum] = isSubsetSum(arr, n - 1, sum, dp) || isSubsetSum(arr, n - 1, sum - arr[n - 1], dp);
}

bool findPartition(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++)
        sum += arr[i];

    if (sum % 2 != 0)
        return false;

    vector<vector<int>> dp(n + 1, vector<int>(sum + 1, -1));
    return isSubsetSum(arr, n, sum / 2, dp);
}

int main() {
    int arr[] = {3, 1, 5, 9, 12};
    int n = sizeof(arr) / sizeof(arr[0]);

    if (findPartition(arr, n))
        cout << "Can be divided into two subsets of equal sum";
    else
        cout << "Cannot be divided into two subsets of equal sum";

    int arr2[] = {3, 1, 5, 9, 14};
    int n2 = sizeof(arr2) / sizeof(arr2[0]);

    if (findPartition(arr2, n2))
        cout << endl << "Can be divided into two subsets of equal sum";
    else
        cout << endl << "Cannot be divided into two subsets of equal sum";

    return 0;
}
```

```java title="Java"
import java.util.Arrays;

class PartitionEqualSubsetSum {
    static int isSubsetSum(int arr[], int n, int sum, int[][] dp) {
        if (sum == 0)
            return 1;
        if (n == 0 && sum != 0)
            return 0;

        if (dp[n][sum] != -1)
            return dp[n][sum];

        if (arr[n - 1] > sum)
            return isSubsetSum(arr, n - 1, sum, dp);

        if (isSubsetSum(arr, n - 1, sum, dp) != 0 || isSubsetSum(arr, n - 1, sum - arr[n - 1], dp) != 0)
            return dp[n][sum] = 1;
        return dp[n][sum] = 0;
    }

    static int findPartition(int arr[], int n) {
        int sum = 0;
        for (int i = 0; i < n; i++)
            sum += arr[i];

        if (sum % 2 != 0)
            return 0;

        int dp[][] = new int[n + 1][sum + 1];
        for (int[] row : dp)
            Arrays.fill(row, -1);

        return isSubsetSum(arr, n, sum / 2, dp);
    }

    public static void main(String[] args) {
        int arr[] = {3, 1, 5, 9, 12};
        int n = arr.length;

        if (findPartition(arr, n) == 1)
            System.out.println("Can be divided into two subsets of equal sum");
        else
            System.out.println("Cannot be divided into two subsets of equal sum");

        int arr2[] = {3, 1, 5, 9, 14};
        int n2 = arr2.length;

        if (findPartition(arr2, n2) == 1)
            System.out.println("Can be divided into two subsets of equal sum");
        else
            System.out.println("Cannot be divided into two subsets of equal sum");
    }
}
```

```python title="Python"
def isSubsetSum(arr, n, sum, dp):
    if sum == 0:
        return True
    if n == 0 and sum != 0:
        return False

    if dp[n][sum] != -1:
        return dp[n][sum]

    if arr[n - 1] > sum:
        return isSubsetSum(arr, n - 1, sum, dp)

    dp[n][sum] = isSubsetSum(arr, n - 1, sum, dp) or isSubsetSum(arr, n - 1, sum - arr[n - 1], dp)
    return dp[n][sum]

def findPartition(arr, n):
    sum = 0
    for i in range(n):
        sum += arr[i]

    if sum % 2 != 0:
        return False

    dp = [[-1] * (sum + 1) for _ in range(n + 1)]
    return isSubsetSum(arr, n, sum // 2, dp)

arr = [3, 1, 5, 9, 12]
n = len(arr)

if findPartition(arr, n):
    print("Can be divided into two subsets of equal sum")
else:
    print("Cannot be divided into two subsets of equal sum")

arr2 = [3, 1, 5, 9, 14]
n2 = len(arr2)

if findPartition(arr2, n2):
    print("Can be divided into two subsets of equal sum")
else:
    print("Cannot be divided into two subsets of equal sum")
```

### Complexity Analysis

#### Time Complexity: $O(\text{sum} \times N)$

> **Reason**: The maximum iterations possible are sum * N.

#### Space Complexity: $O(\text{sum} \times N)$

> **Reason**: We are using an extra array for `dp`.

### References

- **LeetCode Problem**: Partition Equal Subset Sum