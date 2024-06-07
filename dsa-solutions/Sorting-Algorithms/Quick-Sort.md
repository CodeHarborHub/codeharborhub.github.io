---
id: Quick-Sort
title: Quick Sort (Geeks for Geeks)
sidebar_label: Quick Sort
tags:
  - Beginner
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Quick Sort problem on Geeks for Geeks."
---

## 1. What is Quick Sort?

Quick Sort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. There are different versions of Quick Sort that pick the pivot in different ways:
- Always pick the first element as the pivot.
- Always pick the last element as the pivot.
- Pick a random element as the pivot.
- Pick the median as the pivot.

## 2. Algorithm for Quick Sort

1. Choose a pivot element from the array.
2. Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
3. Recursively apply the above steps to the sub-arrays.
4. Combine the results to get the sorted array.

## 3. How does Quick Sort work?

- Quick Sort recursively sorts elements before and after partition.
- It selects a pivot and partitions the array such that elements less than the pivot come before it, and elements greater than the pivot come after it.

## 4. Problem Description

Given an array of integers, implement the Quick Sort algorithm to sort the array in ascending order.

## 5. Examples

**Example 1:**
```
Input: [10, 7, 8, 9, 1, 5]
Output: [1, 5, 7, 8, 9, 10]
```

**Example 2:**
```
Input: [38, 27, 43, 3, 9, 82, 10]
Output: [3, 9, 10, 27, 38, 43, 82]
```

**Explanation of Example 1:**
- The initial array is [10, 7, 8, 9, 1, 5].
- Select 5 as the pivot.
- Partition the array: [1, 5, 8, 9, 10, 7].
- Recursively sort the left part [1] and the right part [8, 9, 10, 7].
- The final sorted array is [1, 5, 7, 8, 9, 10].

## 6. Constraints

- $The array can have any number of elements.$
- $All elements in the array are integers.$

## 7. Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  def partition(arr, low, high):
      pivot = arr[high]
      i = low - 1
      for j in range(low, high):
          if arr[j] < pivot:
              i += 1
              arr[i], arr[j] = arr[j], arr[i]
      arr[i + 1], arr[high] = arr[high], arr[i + 1]
      return i + 1

  def quick_sort(arr, low, high):
      if low < high:
          pi = partition(arr, low, high)
          quick_sort(arr, low, pi - 1)
          quick_sort(arr, pi + 1, high)

  # Example usage:
  arr = [10, 7, 8, 9, 1, 5]
  quick_sort(arr, 0, len(arr) - 1)
  print(arr)
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  #include <vector>

  int partition(std::vector<int>& arr, int low, int high) {
      int pivot = arr[high];
      int i = low - 1;
      for (int j = low; j < high; j++) {
          if (arr[j] < pivot) {
              i++;
              std::swap(arr[i], arr[j]);
          }
      }
      std::swap(arr[i + 1], arr[high]);
      return i + 1;
  }

  void quickSort(std::vector<int>& arr, int low, int high) {
      if (low < high) {
          int pi = partition(arr, low, high);
          quickSort(arr, low, pi - 1);
          quickSort(arr, pi + 1, high);
      }
  }

  int main() {
      std::vector<int> arr = {10, 7, 8, 9, 1, 5};
      quickSort(arr, 0, arr.size() - 1);
      for (int num : arr)
          std::cout << num << " ";
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```java
  public class QuickSort {
      public static int partition(int[] arr, int low, int high) {
          int pivot = arr[high];
          int i = (low - 1);
          for (int j = low; j < high; j++) {
              if (arr[j] < pivot) {
                  i++;
                  int temp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = temp;
              }
          }
          int temp = arr[i + 1];
          arr[i + 1] = arr[high];
          arr[high] = temp;
          return i + 1;
      }

      public static void quickSort(int[] arr, int low, int high) {
          if (low < high) {
              int pi = partition(arr, low, high);
              quickSort(arr, low, pi - 1);
              quickSort(arr, pi + 1, high);
          }
      }

      public static void main(String[] args) {
          int[] arr = {10, 7, 8, 9, 1, 5};
          quickSort(arr, 0, arr.length - 1);
          for (int num : arr)
              System.out.print(num + " ");
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```javascript
  function partition(arr, low, high) {
      let pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
          if (arr[j] < pivot) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]];
          }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
  }

  function quickSort(arr, low, high) {
      if (low < high) {
          let pi = partition(arr, low, high);
          quickSort(arr, low, pi - 1);
          quickSort(arr, pi + 1, high);
      }
  }

  // Example usage:
  let arr = [10, 7, 8, 9, 1, 5];
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity**:
  - Best case: $O(n log n)$
  - Average case: $O(n log n)$
  - Worst case: $O(n^2)$ (occurs when the smallest or largest element is always chosen as the pivot)

- **Space Complexity**: $O(log n)$ for the recursive stack space.

## 9. Advantages and Disadvantages

**Advantages:**
- In-place sorting algorithm.
- Average-case time complexity is $O(n log n)$.

**Disadvantages:**
- Worst-case time complexity is $O(n^2)$, although this can be mitigated with good pivot selection strategies like randomized or median-of-three.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/quick-sort/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/quicksort1/problem)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)