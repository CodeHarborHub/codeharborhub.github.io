---
id: Bubble-Sort
title: Bubble Sort (Geeks for Geeks)
sidebar_label: Bubble Sort
tags:
  - Beginner
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Bubble Sort problem on Geeks for Geeks."
---

## 1. What is Bubble Sort?

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted.

## 2. Algorithm for Bubble Sort

1. Start with the first element and compare it with the second element.
2. If the first element is greater than the second element, swap them.
3. Move to the next pair and repeat the process until the end of the list.
4. Repeat steps 1-3 for all elements in the list until no swaps are needed.

## 3. How does Bubble Sort work?

- Bubble Sort works by repeatedly swapping adjacent elements if they are in the wrong order.
- The largest element "bubbles up" to its correct position in each iteration.

## 4. Problem Description

Given an array of integers, implement the Bubble Sort algorithm to sort the array in ascending order.

## 5. Examples

**Example 1:**
```
Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]
```

**Example 2:**
```
Input: [5, 1, 4, 2, 8]
Output: [1, 2, 4, 5, 8]
```

**Explanation of Example 1:**
- The initial array is [64, 34, 25, 12, 22, 11, 90].
- First pass: [34, 25, 12, 22, 11, 64, 90].
- Second pass: [25, 12, 22, 11, 34, 64, 90].
- Continue until the array is sorted: [11, 12, 22, 25, 34, 64, 90].

## 6. Constraints

- $The array can have any number of elements.$
- $All elements in the array are integers.$

## 7. Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  def bubble_sort(arr):
      n = len(arr)
      for i in range(n):
          for j in range(0, n-i-1):
              if arr[j] > arr[j+1]:
                  arr[j], arr[j+1] = arr[j+1], arr[j]
      return arr

  # Example usage:
  arr = [64, 34, 25, 12, 22, 11, 90]
  bubble_sort(arr)
  print(arr)
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  #include <vector>

  void bubbleSort(std::vector<int>& arr) {
      int n = arr.size();
      for (int i = 0; i < n - 1; i++) {
          for (int j = 0; j < n - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  std::swap(arr[j], arr[j + 1]);
              }
          }
      }
  }

  int main() {
      std::vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
      bubbleSort(arr);
      for (int num : arr)
          std::cout << num << " ";
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```java
  public class BubbleSort {
      public static void bubbleSort(int[] arr) {
          int n = arr.length;
          for (int i = 0; i < n - 1; i++) {
              for (int j = 0; j < n - i - 1; j++) {
                  if (arr[j] > arr[j + 1]) {
                      int temp = arr[j];
                      arr[j] = arr[j + 1];
                      arr[j + 1] = temp;
                  }
              }
          }
      }

      public static void main(String[] args) {
          int[] arr = {64, 34, 25, 12, 22, 11, 90};
          bubbleSort(arr);
          for (int num : arr)
              System.out.print(num + " ");
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```javascript
  function bubbleSort(arr) {
      let n = arr.length;
      for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              }
          }
      }
      return arr;
  }

  // Example usage:
  let arr = [64, 34, 25, 12, 22, 11, 90];
  bubbleSort(arr);
  console.log(arr);
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity**:
  - Best case: $O(n)$ (when the array is already sorted)
  - Average case: $O(n^2)$
  - Worst case: $O(n^2)$

- **Space Complexity**: $O(1)$ (in-place sorting)

## 9. Advantages and Disadvantages

**Advantages:**
- Simple to understand and implement.
- Works well with small datasets.

**Disadvantages:**
- Inefficient for large datasets due to $O(n^2)$ time complexity.
- Requires multiple passes through the list.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/bubble-sort/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/bubble-sort/problem)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)