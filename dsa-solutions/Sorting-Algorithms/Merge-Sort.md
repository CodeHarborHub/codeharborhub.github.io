---
id: Merge-Sort
title: Merge Sort (Geeks for Geeks)
sidebar_label: Merge Sort
tags:
  - Beginner
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Merge Sort problem on Geeks for Geeks."
---

## 1. What is Merge Sort?

Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The $merge(arr, l, m, r)$ is a key process that assumes that $arr[l..m]$ and $arr[m+1..r]$ are sorted and merges the two sorted sub-arrays into one.

## 2. Algorithm for Merge Sort

1. If the array has more than one element:
   - Find the middle point to divide the array into two halves.
   - Call mergeSort for the first half.
   - Call mergeSort for the second half.
   - Merge the two halves sorted in the previous steps.

## 3. How does Merge Sort work?

- Merge Sort repeatedly divides the array into halves until it can no more be divided.
- It then combines the smaller sorted arrays into larger ones until the whole array is merged and sorted.

## 4. Problem Description

Given an array of integers, implement the Merge Sort algorithm to sort the array in ascending order.

## 5. Examples

**Example 1:**
```
Input: [12, 11, 13, 5, 6, 7]
Output: [5, 6, 7, 11, 12, 13]
```

**Example 2:**
```
Input: [38, 27, 43, 3, 9, 82, 10]
Output: [3, 9, 10, 27, 38, 43, 82]
```
## Your Task:

You don't need to take the input or print anything. Your task is to complete the function merge() which takes arr[], l, m, r as its input parameters and modifies arr[] in-place such that it is sorted from position l to position r, and function mergeSort() which uses merge() to sort the array in ascending order using merge sort algorithm.

Expected Time Complexity: $O(nlogn)$
Expected Auxiliary Space: $O(n)$

**Explanation of Example 1:**
- The initial array is $[12, 11, 13, 5, 6, 7]$.
- The array is divided into two halves: $[12, 11, 13] and [5, 6, 7]$.
- The first half $[12, 11, 13]$ is further divided into $[12]$ and $[11, 13]$.
- $[11, 13]$ is divided into $[11]$ and $[13]$, and then merged to $[11, 13]$.
- $[12]$ and $[11, 13]$ are merged to form $[11, 12, 13]$.
- Similarly, $[5, 6, 7]$ is divided and merged to form $[5, 6, 7]$.
- Finally, $[11, 12, 13]$ and $[5, 6, 7]$ are merged to form the sorted array $[5, 6, 7, 11, 12, 13]$.

## 6. Constraints

- $1 <= N <= 10^5$
- $1 <= arr[i] <= 10^5$

## 7. Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  def merge_sort(arr):
      if len(arr) > 1:
          mid = len(arr) // 2
          L = arr[:mid]
          R = arr[mid:]

          merge_sort(L)
          merge_sort(R)

          i = j = k = 0

          while i < len(L) and j < len(R):
              if L[i] < R[j]:
                  arr[k] = L[i]
                  i += 1
              else:
                  arr[k] = R[j]
                  j += 1
              k += 1

          while i < len(L):
              arr[k] = L[i]
              i += 1
              k += 1

          while j < len(R):
              arr[k] = R[j]
              j += 1
              k += 1

  # Example usage:
  arr = [12, 11, 13, 5, 6, 7]
  merge_sort(arr)
  print(arr)
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  #include <vector>

  void merge(std::vector<int>& arr, int left, int mid, int right) {
      int n1 = mid - left + 1;
      int n2 = right - mid;

      std::vector<int> L(n1), R(n2);

      for (int i = 0; i < n1; ++i)
          L[i] = arr[left + i];
      for (int j = 0; j < n2; ++j)
          R[j] = arr[mid + 1 + j];

      int i = 0, j = 0, k = left;
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          } else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }

      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }

      while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }

  void mergeSort(std::vector<int>& arr, int left, int right) {
      if (left < right) {
          int mid = left + (right - left) / 2;

          mergeSort(arr, left, mid);
          mergeSort(arr, mid + 1, right);

          merge(arr, left, mid, right);
      }
  }

  int main() {
      std::vector<int> arr = {12, 11, 13, 5, 6, 7};
      mergeSort(arr, 0, arr.size() - 1);

      for (int num : arr)
          std::cout << num << " ";
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```java
  public class MergeSort {
      public static void merge(int[] arr, int left, int mid, int right) {
          int n1 = mid - left + 1;
          int n2 = right - mid;

          int[] L = new int[n1];
          int[] R = new int[n2];

          for (int i = 0; i < n1; ++i)
              L[i] = arr[left + i];
          for (int j = 0; j < n2; ++j)
              R[j] = arr[mid + 1 + j];

          int i = 0, j = 0, k = left;
          while (i < n1 && j < n2) {
              if (L[i] <= R[j]) {
                  arr[k] = L[i];
                  i++;
              } else {
                  arr[k] = R[j];
                  j++;
              }
              k++;
          }

          while (i < n1) {
              arr[k] = L[i];
              i++;
              k++;
          }

          while (j < n2) {
              arr[k] = R[j];
              j++;
              k++;
          }
      }

      public static void mergeSort(int[] arr, int left, int right) {
          if (left < right) {
              int mid = left + (right - left) / 2;

              mergeSort(arr, left, mid);
              mergeSort(arr, mid + 1, right);

              merge(arr, left, mid, right);
          }
      }

      public static void main(String[] args) {
          int[] arr = {12, 11, 13, 5, 6, 7};
          mergeSort(arr, 0, arr.length - 1);

          for (int num : arr)
              System.out.print(num + " ");
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```javascript
  function merge(left, right) {
      let result = [];
      let i = 0;
      let j = 0;

      while (i < left.length && j < right.length) {
          if (left[i] < right[j]) {
              result.push(left[i]);
              i++;
          } else {
              result.push(right[j]);
              j++;
          }
      }

      return result.concat(left.slice(i)).concat(right.slice(j));
  }

  function mergeSort(arr) {
      if (arr.length <= 1) {
          return arr;
      }

      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));

      return merge(left, right);
  }

  // Example usage:
  const arr = [12, 11, 13, 5, 6, 7];
  console.log(mergeSort(arr));
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

-

 **Time Complexity**: $O(n log n)$ in all cases (best, average, and worst) due to the divide and conquer approach.
- **Space Complexity**: $O(n)$ due to the additional arrays used for merging.

## 9. Advantages and Disadvantages

**Advantages:**
- Guarantees $O(n log n)$ time complexity for all cases.
- Stable sort (does not change the relative order of equal elements).
- Efficient for large datasets.

**Disadvantages:**
- Requires $O(n)$ additional space, which can be significant for large arrays.
- The recursive implementation may lead to a large call stack for very large arrays.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/merge-sort/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/merge-sort/problem)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)