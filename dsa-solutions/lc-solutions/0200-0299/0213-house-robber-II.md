---
id: house-robber-II
title: House Robber II
sidebar_label: 0213 House Robber II
tags:
- Dynamic Programming
- Circular Array
- C++
- Java
- Python
description: "This document provides a solution to the House Robber II problem, where houses are arranged in a circle."
---

## Problem

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

### Examples

**Example 1:**

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

**Example 2:**

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

**Example 3:**

Input: nums = [1,2,3]
Output: 3

### Constraints

- $1 <= nums.length <= 100$
- $0 <= nums[i] <= 1000$

### Approach 

The approach to solving this problem can be summarized as:

- Make two reduced arrays - arr1(arr-last element) and arr2(arr-first element).

- Find the maximum of non-adjacent elements as mentioned in article DP5 on arr1 and arr2 separately. Let’s call the answers we got ans1 and ans2 respectively.

- Return max(ans1, ans2) as our final answer.

### Solution

This problem can be solved using dynamic programming. The approach is to make two reduced arrays: one excluding the first element and one excluding the last element. Then, find the maximum sum of non-adjacent elements in both reduced arrays separately. Return the maximum of these two sums as the final answer.

#### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
    ```cpp
#include <bits/stdc++.h>

using namespace std;

long long int solve(vector<int>& arr){
    int n = arr.size();
    long long int prev = arr[0];
    long long int prev2 =0;
    
    for(int i=1; i<n; i++){
        long long int pick = arr[i];
        if(i>1)
            pick += prev2;
        long long int nonPick = 0 + prev;
        
        long long int cur_i = max(pick, nonPick);
        prev2 = prev;
        prev= cur_i;
    }
    return prev;
}

long long int robStreet(int n, vector<int> &arr){
    vector<int> arr1;
    vector<int> arr2;
    
    if(n==1)
       return arr[0];
    
    for(int i=0; i<n; i++){
        if(i!=0) arr1.push_back(arr[i]);
        if(i!=n-1) arr2.push_back(arr[i]);
    }
    
    long long int ans1 = solve(arr1);
    long long int ans2 = solve(arr2);
    
    return max(ans1,ans2);
}

int main() {
    vector<int> arr{1,5,1,2,6};
    int n=arr.size();
    cout<<robStreet(n,arr);
}
    ```

</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>

```java
import java.util.*;

public class HouseRobberII {
    public static long solve(List<Integer> arr) {
        int n = arr.size();
        long prev = arr.get(0);
        long prev2 = 0;

        for (int i = 1; i < n; i++) {
            long pick = arr.get(i);
            if (i > 1)
                pick += prev2;
            long nonPick = 0 + prev;

            long cur_i = Math.max(pick, nonPick);
            prev2 = prev;
            prev = cur_i;
        }
        return prev;
    }

    public static long robStreet(int n, List<Integer> arr) {
        List<Integer> arr1 = new ArrayList<>();
        List<Integer> arr2 = new ArrayList<>();

        if (n == 1)
            return arr.get(0);

        for (int i = 0; i < n; i++) {
            if (i != 0)
                arr1.add(arr.get(i));
            if (i != n - 1)
                arr2.add(arr.get(i));
        }

        long ans1 = solve(arr1);
        long ans2 = solve(arr2);

        return Math.max(ans1, ans2);
    }

    public static void main(String[] args) {
        List<Integer> arr = Arrays.asList(1, 5, 1, 2, 6);
        int n = arr.size();
        System.out.println(robStreet(n, arr));
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>

```python
def solve(arr):
    n = len(arr)
    prev = arr[0]
    prev2 = 0
    
    for i in range(1, n):
        pick = arr[i]
        if i > 1:
            pick += prev2
        non_pick = 0 + prev
        
        cur_i = max(pick, non_pick)
        prev2 = prev
        prev = cur_i
    
    return prev

def rob_street(n, arr):
    arr1 = arr[1:]  # Excluding the first element
    arr2 = arr[:-1]  # Excluding the last element
    
    ans1 = solve(arr1)
    ans2 = solve(arr2)
    
    return max(ans1, ans2)

arr = [1, 5, 1, 2, 6]
print(rob_street(len(arr), arr))
```
</TabItem>
</Tabs>


### Complexity Analysis

#### Time Complexity: O(N)

> **Reason**: We are running a simple iterative loop, two times. Therefore total time complexity will be O(N) + O(N) ≈ O(N)

#### Space Complexity: O(1)

> **Reason**: We are not using extra space.

This solution efficiently handles the circular nature of the problem, ensuring that adjacent houses are not robbed in the same night. The time complexity of this solution is O(N), where N is the number of elements in the input array.

### References

- **LeetCode Problem**: [House Robber II](https://leetcode.com/problems/house-robber-ii/)

- **Authors GeeksforGeeks Profile:** [Vipul lakum](https://leetcode.com/u/vipul_lakum_02/)
