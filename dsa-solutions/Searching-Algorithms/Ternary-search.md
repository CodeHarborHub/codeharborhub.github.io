---
id: Ternary-Search
title: Ternary Search (Geeks for Geeks)
sidebar_label: Ternary Search
tags:
  - Intermediate
  - Search Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Ternary Search problem on Geeks for Geeks."
---

## What is Ternary Search?

Ternary Search is a divide-and-conquer search algorithm used to find the position of a target value within a sorted array. It divides the array into three parts and determines which part the target value belongs to, reducing the search space by one third each time.

## Algorithm for Ternary Search

1. Divide the array into three parts by calculating two midpoints.
2. Compare the target value with the values at these midpoints.
3. If the target value matches either midpoint, return the index.
4. If the target value is less than the first midpoint, repeat the process on the left third.
5. If the target value is greater than the first midpoint but less than the second midpoint, repeat the process on the middle third.
6. If the target value is greater than the second midpoint, repeat the process on the right third.
7. If the target value is not found, return -1.

## How does Ternary Search work?

- It calculates two midpoints to divide the array into three parts.
- It compares the target value with the elements at the midpoints.
- Based on the comparison, it reduces the search space to one of the three parts and repeats the process.

## Problem Description

Given a sorted array and a target element, implement the Ternary Search algorithm to find the index of the target element in the array. If the element is not present, return -1.

## Examples

**Example 1:**
Input:
list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 5
Output: 4

**Example 2:**
Input:
list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 10
Output: -1

## Your task

Complete the function ternary_search() which takes two integers n, k and an array arr, as input parameters and returns an integer denoting the answer. Return -1 if the number is not found in the array. You don't have to print answers or take inputs.

Expected Time Complexity: $O(\log_3 n)$
Expected Auxiliary Space: $O(1)$

## Constraints

- $1 <= n <= 10^6$
- $1 <= k <= 10^6$
- $1 <= arr[i] <= 10^9$

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  
```python
  def ternary_search(arr, target):
      left, right = 0, len(arr) - 1

      while left <= right:
          mid1 = left + (right - left) // 3
          mid2 = right - (right - left) // 3

          if arr[mid1] == target:
              return mid1
          if arr[mid2] == target:
              return mid2

          if target < arr[mid1]:
              right = mid1 - 1
          elif target > arr[mid2]:
              left = mid2 + 1
          else:
              left = mid1 + 1
              right = mid2 - 1

      return -1
```
  </TabItem>

  <TabItem value="C++" label="C++">
  
```cpp

  #include <iostream>
  #include <vector>

  int ternary_search(const std::vector<int>& arr, int target) {
      int left = 0, right = arr.size() - 1;

      while (left <= right) {
          int mid1 = left + (right - left) / 3;
          int mid2 = right - (right - left) / 3;

          if (arr[mid1] == target) {
              return mid1;
          }
          if (arr[mid2] == target) {
              return mid2;
          }

          if (target < arr[mid1]) {
              right = mid1 - 1;
          } else if (target > arr[mid2]) {
              left = mid2 + 1;
          } else {
              left = mid1 + 1;
              right = mid2 - 1;
          }
      }

      return -1;
  }

  int main() {
      std::vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
      int target = 5;
      std::cout << "Index: " << ternary_search(arr, target) << std::endl;
      return 0;
  }
```
  </TabItem>

  <TabItem value="Java" label="Java">
  
```java
  public class TernarySearch {
      public static int ternarySearch(int[] arr, int target) {
          int left = 0, right = arr.length - 1;

          while (left <= right) {
              int mid1 = left + (right - left) / 3;
              int mid2 = right - (right - left) / 3;

              if (arr[mid1] == target) {
                  return mid1;
              }
              if (arr[mid2] == target) {
                  return mid2;
              }

              if (target < arr[mid1]) {
                  right = mid1 - 1;
              } else if (target > arr[mid2]) {
                  left = mid2 + 1;
              } else {
                  left = mid1 + 1;
                  right = mid2 - 1;
              }
          }

          return -1;
      }

      public static void main(String[] args) {
          int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
          int target = 5;
          System.out.println("Index: " + ternarySearch(arr, target));
      }
  }
```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  
```javascript
  function ternarySearch(arr, target) {
      let left = 0, right = arr.length - 1;

      while (left <= right) {
          let mid1 = left + Math.floor((right - left) / 3);
          let mid2 = right - Math.floor((right - left) / 3);

          if (arr[mid1] === target) {
              return mid1;
          }
          if (arr[mid2] === target) {
              return mid2;
          }

          if (target < arr[mid1]) {
              right = mid1 - 1;
          } else if (target > arr[mid2]) {
              left = mid2 + 1;
          } else {
              left = mid1 + 1;
              right = mid2 - 1;
          }
      }

      return -1;
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target = 5;
  console.log("Index:", ternarySearch(arr, target));
```
  </TabItem>
</Tabs>

## Complexity Analysis

- **Time Complexity**: $O(\log_3 n)$, where $n$ is the number of elements in the array. The search space is divided into three parts each time, leading to a logarithmic time complexity base 3.
- **Space Complexity**: $O(1)$, as no extra space is required apart from the input array.

## Advantages and Disadvantages

**Advantages:**
- Faster than binary search for large arrays due to reducing the search space by one third each time.
- Efficient for large datasets.

**Disadvantages:**
- Requires the array to be sorted.
- More complex to implement compared to binary search.
- Not significantly faster than binary search for small datasets.

## References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/ternary-search/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/ternary-search/problem)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)
