---
id: Selection-Sort
title: Selection Sort (Geeks for Geeks)
sidebar_label: Selection Sort
tags:
  - Beginner
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Selection Sort problem on Geeks for Geeks."
---

## 1. What is Selection Sort?

Selection Sort is a simple comparison-based sorting algorithm. It works by dividing the input list into two parts: a sorted sublist of items which is built up from left to right, and a sublist of the remaining unsorted items. The algorithm repeatedly selects the smallest (or largest) element from the unsorted sublist, swaps it with the leftmost unsorted element, and moves the sublist boundaries one element to the right.

## 2. Algorithm for Selection Sort

1. Start with the first element as the minimum.
2. Traverse through the list to find the minimum element in the unsorted part.
3. Swap the found minimum element with the first element.
4. Move the boundary of the sorted part one element to the right.
5. Repeat steps 2-4 for all elements in the list until the entire array is sorted.

## 3. How does Selection Sort work?

- Selection Sort works by repeatedly finding the minimum element from the unsorted part of the list and placing it at the beginning.
- This process is repeated for each position in the list until it is completely sorted.

## 4. Problem Description

Given an array of integers, implement the Selection Sort algorithm to sort the array in ascending order.

## 5. Examples
 
**Example 1:**
```
Input: [64, 25, 12, 22, 11]
Output: [11, 12, 22, 25, 64]
```

**Example 2:**
```
Input: [29, 10, 14, 37, 13]
Output: [10, 13, 14, 29, 37]
```

**Explanation of Example 1:**
- The initial array is [64, 25, 12, 22, 11].
- First pass: [11, 25, 12, 22, 64].
- Second pass: [11, 12, 25, 22, 64].
- Third pass: [11, 12, 22, 25, 64].
- Continue until the array is sorted: [11, 12, 22, 25, 64].

## 6. Constraints

- $The array can have any number of elements.$
- $All elements in the array are integers.$

## 7. Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  def selection_sort(arr):
      n = len(arr)
      for i in range(n):
          min_idx = i
          for j in range(i + 1, n):
              if arr[j] < arr[min_idx]:
                  min_idx = j
          arr[i], arr[min_idx] = arr[min_idx], arr[i]
      return arr

  # Example usage:
  arr = [64, 25, 12, 22, 11]
  selection_sort(arr)
  print(arr)
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  #include <vector>

  void selectionSort(std::vector<int>& arr) {
      int n = arr.size();
      for (int i = 0; i < n - 1; i++) {
          int min_idx = i;
          for (int j = i + 1; j < n; j++) {
              if (arr[j] < arr[min_idx]) {
                  min_idx = j;
              }
          }
          std::swap(arr[min_idx], arr[i]);
      }
  }

  int main() {
      std::vector<int> arr = {64, 25, 12, 22, 11};
      selectionSort(arr);
      for (int num : arr)
          std::cout << num << " ";
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```java
  public class SelectionSort {
      public static void selectionSort(int[] arr) {
          int n = arr.length;
          for (int i = 0; i < n - 1; i++) {
              int min_idx = i;
              for (int j = i + 1; j < n; j++) {
                  if (arr[j] < arr[min_idx]) {
                      min_idx = j;
                  }
              }
              int temp = arr[min_idx];
              arr[min_idx] = arr[i];
              arr[i] = temp;
          }
      }

      public static void main(String[] args) {
          int[] arr = {64, 25, 12, 22, 11};
          selectionSort(arr);
          for (int num : arr)
              System.out.print(num + " ");
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```javascript
  function selectionSort(arr) {
      let n = arr.length;
      for (let i = 0; i < n - 1; i++) {
          let min_idx = i;
          for (let j = i + 1; j < n; j++) {
              if (arr[j] < arr[min_idx]) {
                  min_idx = j;
              }
          }
          [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
      }
      return arr;
  }

  // Example usage:
  let arr = [64, 25, 12, 22, 11];
  selectionSort(arr);
  console.log(arr);
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity**:
  - Best case: $O(n^2)$
  - Average case: $O(n^2)$
  - Worst case: $O(n^2)$

- **Space Complexity**: $O(1)$ (in-place sorting)

## 9. Advantages and Disadvantages

**Advantages:**
- Simple to understand and implement.
- Performs well on small datasets.

**Disadvantages:**
- Inefficient for large datasets due to $O(n^2)$ time complexity.
- Does not adapt to the existing order of elements.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/selection-sort/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/insertionsort1/problem)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)