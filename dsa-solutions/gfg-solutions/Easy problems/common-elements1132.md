---
id: common-in-3-sorted-arrays
title: Common in 3 Sorted Arrays
sidebar_label: 0014 - Common in 3 Sorted Arrays
tags:
  - Easy
  - Array
  - GeeksforGeeks
  - CPP
  - Python
  - DSA
description: "This tutorial covers the solution to the Common in 3 Sorted Arrays problem from the GeeksforGeeks website, featuring implementations in Python and C++."
---
## Problem Description

Given three arrays sorted in increasing order. Find the elements that are common in all three arrays. Note: Handle duplicates without using any additional data structure.

## Examples

**Example 1:**

```
Input: 
A = [1, 5, 10, 20, 40, 80]
B = [6, 7, 20, 80, 100]
C = [3, 4, 15, 20, 30, 70, 80, 120]

Output: 20, 80
Explanation: 20 and 80 are the common elements.
```

**Example 2:**

```
Input:
A = [1, 2, 3, 4, 5]
B = [1, 2, 5, 7, 9]
C = [1, 3, 4, 5, 8]

Output: 1, 5
Explanation: 1 and 5 are the common elements.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `commonElements()` which takes the arrays `A[], B[], C[]` and their sizes `n1, n2, n3` as input parameters and returns a list of integers containing the common elements in sorted order.

Expected Time Complexity: $O(n1 + n2 + n3)$

Expected Auxiliary Space: $O(1)$

## Constraints

* `1 ≤ n1, n2, n3 ≤ 10^5`
* `The arrays can have up to 10^5 elements each.`
* `1 ≤ A[i], B[i], C[i] ≤ 10^9`

## Problem Explanation

The task is to find the common elements in three sorted arrays and handle duplicates without using any additional data structure.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@arunimad6yuq"/>

  ```py
  class Solution:
      def commonElements(self, A, B, C, n1, n2, n3):
          i, j, k = 0, 0, 0
          common = []
          
          while i < n1 and j < n2 and k < n3:
              if A[i] == B[j] == C[k]:
                  common.append(A[i])
                  i += 1
                  j += 1
                  k += 1
              elif A[i] < B[j]:
                  i += 1
              elif B[j] < C[k]:
                  j += 1
              else:
                  k += 1
              
              # Skip duplicates in A
              while i > 0 and i < n1 and A[i] == A[i-1]:
                  i += 1
              # Skip duplicates in B
              while j > 0 and j < n2 and B[j] == B[j-1]:
                  j += 1
              # Skip duplicates in C
              while k > 0 and k < n3 and C[k] == C[k-1]:
                  k += 1
          
          return common

  # Example usage
  if __name__ == "__main__":
      solution = Solution()
      A = [1, 5, 10, 20, 40, 80]
      B = [6, 7, 20, 80, 100]
      C = [3, 4, 15, 20, 30, 70, 80, 120]
      print(solution.commonElements(A, B, C, len(A), len(B), len(C)))  # Expected output: [20, 80]
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@arunimad6yuq"/>

  ```cpp
  //{ Driver Code Starts
  #include <bits/stdc++.h>
  using namespace std;

  // } Driver Code Ends
  class Solution {
  public:    
      vector<int> commonElements(int A[], int B[], int C[], int n1, int n2, int n3) {
          vector<int> common;
          int i = 0, j = 0, k = 0;

          while (i < n1 && j < n2 && k < n3) {
              if (A[i] == B[j] && B[j] == C[k]) {
                  common.push_back(A[i]);
                  i++;
                  j++;
                  k++;
              }
              else if (A[i] < B[j]) i++;
              else if (B[j] < C[k]) j++;
              else k++;

              // Skip duplicates in A
              while (i > 0 && i < n1 && A[i] == A[i-1]) i++;
              // Skip duplicates in B
              while (j > 0 && j < n2 && B[j] == B[j-1]) j++;
              // Skip duplicates in C
              while (k > 0 && k < n3 && C[k] == C[k-1]) k++;
          }

          return common;
      }
  };

  //{ Driver Code Starts.
  int main() {
      int t; cin >> t;
      while (t--) {
          int n1, n2, n3; 
          cin >> n1 >> n2 >> n3;
          int A[n1], B[n2], C[n3];
          
          for (int i = 0; i < n1; i++) cin >> A[i];
          for (int i = 0; i < n2; i++) cin >> B[i];
          for (int i = 0; i < n3; i++) cin >> C[i];
          
          Solution ob;
          vector<int> res = ob.commonElements(A, B, C, n1, n2, n3);
          if (res.size() == 0) 
              cout << -1;
          else
              for (int i = 0; i < res.size(); i++) 
                  cout << res[i] << " "; 
          cout << endl;
      }
  }
  // } Driver Code Ends
  ```

  </TabItem>
</Tabs>

## Example Walkthrough

**Example 1:**

For the arrays:
```
A = [1, 5, 10, 20, 40, 80]
B = [6, 7, 20, 80, 100]
C = [3, 4, 15, 20, 30, 70, 80, 120]
```

1. The common elements in A, B, and C are 20 and 80.

**Example 2:**

For the arrays:
```
A = [1, 2, 3, 4, 5]
B = [1, 2, 5, 7, 9]
C = [1, 3, 4, 5, 8]
```

1. The common elements in A, B, and C are 1 and 5.

## Solution Logic:

1. Use three pointers to iterate through the three arrays simultaneously.
2. Compare the current elements pointed by the three pointers.
3. If they are equal, add the element to the result and move all three pointers forward.
4. If they are not equal, move the pointer(s) with the smallest value forward.
5. Skip any duplicate elements to avoid repetition in the result.

## Time Complexity

* The function iterates through each array once, so the time complexity is $O(n1 + n2 + n3)$.

## Space Complexity

* The function uses constant space, $O(1)$, apart from the space used for the result vector.

## References

- -**gfg Problem:** [gfg Problem](https://www.geeksforgeeks.org/problems/common-elements1132/1)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)

