---
id: Insertion-Sort
title: Insertion Sort (Geeks for Geeks)
sidebar_label: Insertion Sort
tags:
  - Beginner
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Insertion Sort problem on Geeks for Geeks."
---

## 1. What is Insertion Sort?

Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## 2. Algorithm for Insertion Sort

1. Start with the first element (consider it as sorted).
2. Pick the next element.
3. Compare the picked element with the elements in the sorted part of the array.
4. Shift all the elements in the sorted part that are greater than the picked element to one position to their right.
5. Insert the picked element at its correct position.
6. Repeat steps 2-5 until the entire array is sorted.

## 3. How does Insertion Sort work?

- Insertion Sort works by dividing the list into a sorted and an unsorted part.
- It iteratively takes one element from the unsorted part and inserts it into the correct position in the sorted part.

## 4. Problem Description

Given an array of integers, implement the Insertion Sort algorithm to sort the array in ascending order.

## 5. Examples

**Example 1:**
```
Input: [12, 11, 13, 5, 6]
Output: [5, 6, 11, 12, 13]
```

**Example 2:**
```
Input: [31, 41, 59, 26, 41, 58]
Output: [26, 31, 41, 41, 58, 59]
```

**Explanation of Example 1:**
- The initial array is [12, 11, 13, 5, 6].
- First pass: [11, 12, 13, 5, 6].
- Second pass: [11, 12, 13, 5, 6].
- Third pass: [5, 11, 12, 13, 6].
- Fourth pass: [5, 6, 11, 12, 13].

## 6. Constraints

- $The array can have any number of elements.$
- $All elements in the array are integers.$

## 7. Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  def insertion_sort(arr):
      for i in range(1, len(arr)):
          key = arr[i]
          j = i - 1
          while j >= 0 and key < arr[j]:
              arr[j + 1] = arr[j]
              j -= 1
          arr[j + 1] = key
      return arr

  # Example usage:
  arr = [12, 11, 13, 5, 6]
  insertion_sort(arr)
  print(arr)
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  #include <vector>

  void insertionSort(std::vector<int>& arr) {
      int n = arr.size();
      for (int i = 1; i < n; i++) {
          int key = arr[i];
          int j = i - 1;
          while (j >= 0 && arr[j] > key) {
              arr[j + 1] = arr[j];
              j--;
          }
          arr[j + 1] = key;
      }
  }

  int main() {
      std::vector<int> arr = {12, 11, 13, 5, 6};
      insertionSort(arr);
      for (int num : arr)
          std::cout << num << " ";
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```java
  public class InsertionSort {
      public static void insertionSort(int[] arr) {
          int n = arr.length;
          for (int i = 1; i < n; i++) {
              int key = arr[i];
              int j = i - 1;
              while (j >= 0 && arr[j] > key) {
                  arr[j + 1] = arr[j];
                  j = j - 1;
              }
              arr[j + 1] = key;
          }
      }

      public static void main(String[] args) {
          int[] arr = {12, 11, 13, 5, 6};
          insertionSort(arr);
          for (int num : arr)
              System.out.print(num + " ");
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```javascript
  function insertionSort(arr) {
      let n = arr.length;
      for (let i = 1; i < n; i++) {
          let key = arr[i];
          let j = i - 1;
          while (j >= 0 && arr[j] > key) {
              arr[j + 1] = arr[j];
              j = j - 1;
          }
          arr[j + 1] = key;
      }
      return arr;
  }

  // Example usage:
  let arr = [12, 11, 13, 5, 6];
  insertionSort(arr);
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
- Efficient for small datasets.
- Adaptive: Efficient for data sets that are already substantially sorted.

**Disadvantages:**
- Inefficient for large datasets due to $O(n^2)$ time complexity.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/insertion-sort/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/insertionsort1/problem)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)