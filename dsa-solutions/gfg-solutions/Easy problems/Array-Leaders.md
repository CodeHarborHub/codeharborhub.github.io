---
id: array-leaders
title: Array Leaders
sidebar_label: Array-Leaders
tags:
  - Array
  - Data Structure
description: "This tutorial covers the solution to the Array Leaders problem from the GeeksforGeeks website."
---
## Problem Description

Given an array `arr` of `n` positive integers, your task is to find all the leaders in the array. An element of the array is considered a leader if it is greater than all the elements on its right side or if it is equal to the maximum element on its right side. The rightmost element is always a leader.

## Examples

**Example 1:**

```
Input:
arr = [16, 17, 4, 3, 5, 2]
Output: 17, 5, 2
Explanation: The leaders are 17, 5, and 2.
```

**Example 2:**

```
Input:
arr = [1, 2, 3, 4, 0]
Output: 4, 0
Explanation: The leaders are 4 and 0.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `leaders()` which takes the array `arr[]` and its size `n` as input parameters and returns a list of integers containing the leaders in the array.

Expected Time Complexity: $O(n)$

Expected Auxiliary Space: $O(n)$

## Constraints

* `1 ≤ n ≤ 10^7`
* `0 ≤ arr[i] ≤ 10^7`

## Problem Explanation

The task is to find all the leaders in the array, where a leader is an element that is greater than or equal to all the elements to its right. The rightmost element is always a leader.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```python
  class Solution:
      def leaders(self, arr, n):
          leaders = []
          max_from_right = arr[-1]
          leaders.append(max_from_right)
          
          for i in range(n-2, -1, -1):
              if arr[i] >= max_from_right:
                  leaders.append(arr[i])
                  max_from_right = arr[i]
          
          return leaders[::-1]

  # Example usage
  if __name__ == "__main__":
      solution = Solution()
      arr = [16, 17, 4, 3, 5, 2]
      print(solution.leaders(arr, len(arr)))  # Expected output: [17, 5, 2]
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```cpp
  //{ Driver Code Starts
  #include <bits/stdc++.h>
  using namespace std;

  // } Driver Code Ends
  class Solution {
  public:
      vector<int> leaders(int n, int arr[]) {
          vector<int> leaders;
          int max_from_right = arr[n-1];
          leaders.push_back(max_from_right);
          
          for (int i = n-2; i >= 0; i--) {
              if (arr[i] >= max_from_right) {
                  leaders.push_back(arr[i]);
                  max_from_right = arr[i];
              }
          }
          
          reverse(leaders.begin(), leaders.end());
          return leaders;
      }
  };

  //{ Driver Code Starts.
  int main() {
      long long t;
      cin >> t; // testcases
      while (t--) {
          long long n;
          cin >> n; // total size of array

          int arr[n];

          // inserting elements in the array
          for (long long i = 0; i < n; i++) {
              cin >> arr[i];
          }
          Solution obj;
          // calling leaders() function
          vector<int> v = obj.leaders(n, arr);

          // printing elements of the vector
          for (auto it = v.begin(); it != v.end(); it++) {
              cout << *it << " ";
          }

          cout << endl;
      }
  }
  // } Driver Code Ends
  ```

  </TabItem>

  <TabItem value="Javascript" label="Javascript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```javascript
  class Solution {
  leaders(arr, n) {
    let leaders = [];
    let maxFromRight = arr[n - 1];
    leaders.push(maxFromRight);
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] >= maxFromRight) {
        leaders.push(arr[i]);
        maxFromRight = arr[i];
      }
    }
    return leaders.reverse();
  }
}

  ```

  </TabItem>

  <TabItem value="Typescript" label="Typescript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```typescript
class Solution {
  leaders(arr: number[], n: number): number[] {
    let leaders: number[] = [];
    let maxFromRight: number = arr[n - 1];
    leaders.push(maxFromRight);
    for (let i: number = n - 2; i >= 0; i--) {
      if (arr[i] >= maxFromRight) {
        leaders.push(arr[i]);
        maxFromRight = arr[i];
      }
    }
    return leaders.reverse();
  }
}

                  
  ```

  </TabItem>

  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```java
import java.util.ArrayList;
import java.util.Collections;

public class Solution {
  public ArrayList<Integer> leaders(ArrayList<Integer> arr, int n) {
    ArrayList<Integer> leaders = new ArrayList<Integer>();
    int maxFromRight = arr.get(n - 1);
    leaders.add(maxFromRight);
    for (int i = n - 2; i >= 0; i--) {
      if (arr.get(i) >= maxFromRight) {
        leaders.add(arr.get(i));
        maxFromRight = arr.get(i);
      }
    }
    Collections.reverse(leaders);
    return leaders;
  }
}

  ```

  </TabItem>
</Tabs>


## Solution Logic:

1. Traverse the array from right to left.
2. Keep track of the maximum element encountered so far.
3. If the current element is greater than or equal to the maximum element, it is a leader.
4. Add the leader to the result list and update the maximum element.
5. Return the result list in reverse order.

## Time Complexity

* The function iterates through the array once, so the time complexity is $O(n)$.

## Space Complexity

* The function uses additional space for the result list, so the auxiliary space complexity is $O(n)$.