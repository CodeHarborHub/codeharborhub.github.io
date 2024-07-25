---
id: equilibrium-point
title: Equilibrium Point
sidebar_label: 0018 - Equilibrium Point
tags:
  - Easy
  - Array
  - GeeksforGeeks
  - CPP
  - DSA
description: "This tutorial covers the solution to the Equilibrium Point problem from the GeeksforGeeks website, featuring implementations in Python and C++."
---
## Problem Description

Given an array `arr` of non-negative numbers, the task is to find the first equilibrium point in the array. The equilibrium point in an array is an index (or position) such that the sum of all elements before that index is equal to the sum of elements after it.

**Note:** Return equilibrium point in 1-based indexing. Return -1 if no such point exists.

## Examples

**Example 1:**

```
Input:
arr = [1, 3, 5, 2, 2]
Output: 3
Explanation: The equilibrium point is at position 3 as the sum of elements before it (1+3) is equal to the sum of elements after it (2+2).
```

**Example 2:**

```
Input:
arr = [1]
Output: 1
Explanation: Since there's only one element, it is the equilibrium point.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `equilibriumPoint()` which takes the array `arr` as input and returns the 1-based index of the equilibrium point. If no such point exists, return -1.

Expected Time Complexity: $O(N)$

Expected Auxiliary Space: $O(1)$

## Constraints

* `1 ≤ N ≤ 10^6`
* `0 ≤ arr[i] ≤ 10^8`

## Problem Explanation

The task is to find the first index in the array where the sum of elements before it is equal to the sum of elements after it. The solution should be efficient in terms of both time and space complexity.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@arunimad6yuq"/>

  ```py
  class Solution:
      def equilibriumPoint(self, arr):
          total_sum = sum(arr)
          left_sum = 0
          
          for i, num in enumerate(arr):
              total_sum -= num
              if left_sum == total_sum:
                  return i + 1
              left_sum += num
          
          return -1

  # Example usage
  if __name__ == "__main__":
      solution = Solution()
      print(solution.equilibriumPoint([1, 3, 5, 2, 2]))  # Expected output: 3
      print(solution.equilibriumPoint([1]))  # Expected output: 1
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@arunimad6yuq"/>

  ```cpp
  //{ Driver Code Starts
  // Initial Template for C++
  #include <bits/stdc++.h>
  using namespace std;

  // } Driver Code Ends
  class Solution {
  public:
      // Function to find equilibrium point in the array.
      // arr: input array
      int equilibriumPoint(vector<long long> &arr) {
          long long total_sum = accumulate(arr.begin(), arr.end(), 0LL);
          long long left_sum = 0;
          
          for (int i = 0; i < arr.size(); i++) {
              total_sum -= arr[i];
              if (left_sum == total_sum) {
                  return i + 1; // 1-based index
              }
              left_sum += arr[i];
          }
          
          return -1;
      }
  };

  //{ Driver Code Starts.
  int main() {
      int t;
      cin >> t;
      cin.ignore(); // To discard any leftover newline characters
      while (t--) {
          vector<long long> arr;
          string input;
          getline(cin, input); // Read the entire line for the array elements
          stringstream ss(input);
          long long number;
          while (ss >> number) {
              arr.push_back(number);
          }

          Solution ob;
          cout << ob.equilibriumPoint(arr) << endl;
      }
  }
  // } Driver Code Ends
  ```

  </TabItem>
</Tabs>

## Example Walkthrough

**Example 1:**

For the input array:
```
arr = [1, 3, 5, 2, 2]
```
1. The equilibrium point is at position 3 because the sum of elements before it (1+3) is equal to the sum of elements after it (2+2).

**Example 2:**

For the input array:
```
arr = [1]
```
1. Since there's only one element, it is the equilibrium point.

## Solution Logic:

1. Calculate the total sum of the array.
2. Initialize the left sum to zero.
3. Traverse the array:
    - Subtract the current element from the total sum to get the right sum.
    - If the left sum equals the right sum, return the current index (1-based).
    - Add the current element to the left sum.
4. If no equilibrium point is found, return -1.

## Time Complexity

* The function traverses the array once, so the time complexity is $O(N)$.

## Space Complexity

* The function uses a few extra variables, so the auxiliary space complexity is $O(1)$.

## References

- **GeeksforGeeks Problem:** [Equilibrium Point](https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
