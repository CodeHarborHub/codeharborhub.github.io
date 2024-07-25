---
id: count-pairs-with-given-sum
title: Count Pairs with Given Sum
sidebar_label: 0019 - Count Pairs with Given Sum
tags:
  - Easy
  - Array
  - Hashing
  - GeeksforGeeks
  - CPP
  - DSA
description: "This tutorial covers the solution to the Count Pairs with Given Sum problem from the GeeksforGeeks website, featuring implementations in Python and C++."
---
## Problem Description

Given an array `arr` and an integer `k`, find the number of pairs of elements in the array whose sum is `k`.

## Examples

**Example 1:**

```
Input:
arr = [1, 5, 7, 1]
k = 6
Output: 2
Explanation: The pairs are (1, 5) and (5, 1).
```

**Example 2:**

```
Input:
arr = [1, 1, 1, 1]
k = 2
Output: 6
Explanation: The pairs are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1), and (1, 1).
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `getPairsCount()` which takes the array `arr` and the integer `k` as input and returns the number of pairs in the array whose sum is equal to `k`.

Expected Time Complexity: $O(N)$

Expected Auxiliary Space: $O(N)$

## Constraints

* `1 ≤ N ≤ 10^6`
* `1 ≤ arr[i] ≤ 10^8`
* `1 ≤ k ≤ 10^8`

## Problem Explanation

The task is to find the number of pairs in the array whose sum equals `k`. The solution should be efficient in terms of both time and space complexity.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@arunimad6yuq"/>

  ```py
  class Solution:
      def getPairsCount(self, arr, k):
          count = 0
          freq = {}
          
          for num in arr:
              if k - num in freq:
                  count += freq[k - num]
              
              if num in freq:
                  freq[num] += 1
              else:
                  freq[num] = 1
          
          return count

  # Example usage
  if __name__ == "__main__":
      solution = Solution()
      print(solution.getPairsCount([1, 5, 7, 1], 6))  # Expected output: 2
      print(solution.getPairsCount([1, 1, 1, 1], 2))  # Expected output: 6
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@arunimad6yuq"/>

  ```cpp
  //{ Driver Code Starts
  // Initial template for C++

  #include <bits/stdc++.h>
  using namespace std;

  // } Driver Code Ends
  // User function template for C++

  class Solution {
  public:
      int getPairsCount(const vector<int>& arr, int k) {
          unordered_map<int, int> freq;
          int count = 0;
          
          for (int num : arr) {
              if (freq.find(k - num) != freq.end()) {
                  count += freq[k - num];
              }
              freq[num]++;
          }
          
          return count;
      }
  };

  //{ Driver Code Starts.

  int main() {
      int t;
      cin >> t;
      cin.ignore(); // Ignore the newline character after t
      while (t--) {
          vector<int> arr;
          int k;

          cin >> k;
          cin.ignore(); // Ignore the newline character after k

          string input;

          getline(cin, input); // Read the entire line for the array elements
          stringstream ss(input);
          int number;
          while (ss >> number) {
              arr.push_back(number);
          }

          Solution ob;
          auto ans = ob.getPairsCount(arr, k);
          cout << ans << "\n";
      }

      return 0;
  }
  // } Driver Code Ends
  ```

  </TabItem>
</Tabs>

## Example Walkthrough

**Example 1:**

For the input array:
```
arr = [1, 5, 7, 1]
k = 6
```
1. The pairs are (1, 5) and (5, 1). Hence, the output is 2.

**Example 2:**

For the input array:
```
arr = [1, 1, 1, 1]
k = 2
```
1. The pairs are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1), and (1, 1). Hence, the output is 6.

## Solution Logic:

1. Use a hash map to keep track of the frequency of each element.
2. Traverse the array:
    - For each element, check if `k - num` exists in the hash map.
    - If it does, add the frequency of `k - num` to the count.
    - Update the frequency of the current element in the hash map.
3. Return the count of pairs.

## Time Complexity

* The function traverses the array once and uses a hash map for constant time lookups, so the time complexity is $O(N)$.

## Space Complexity

* The function uses a hash map to store the frequency of elements, so the auxiliary space complexity is $O(N)$.

## References

- **GeeksforGeeks Problem:** [Count Pairs with Given Sum](https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1?page=1&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
