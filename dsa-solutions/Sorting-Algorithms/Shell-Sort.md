---
id: Shell-Sort
title: Shell Sort (Geeks for Geeks)
sidebar_label: Shell Sort
tags:
  - Beginner
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Shell Sort problem on Geeks for Geeks."
---

## 1. What is Shell Sort?

Shell Sort is an in-place comparison-based sorting algorithm. It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared.

## 2. Algorithm for Shell Sort

1. Start with a large gap between elements and reduce the gap until there is no gap.
2. Perform a gapped insertion sort for each gap size. The algorithm uses insertion sort to sort elements that are a certain gap distance apart.
3. Reduce the gap and repeat the process until the gap becomes zero.

## 3. How does Shell Sort work?

- Shell Sort works by comparing elements that are far apart, then progressively reducing the gap between elements.
- This allows elements to move quickly towards their correct position.

## 4. Problem Description

Given an array of integers, implement the Shell Sort algorithm to sort the array in ascending order.

## 5. Examples

**Example 1:**
```
Input: [12, 34, 54, 2, 3]
Output: [2, 3, 12, 34, 54]
```

**Example 2:**
```
Input: [37, 45, 29, 8, 12, 88, -3]
Output: [-3, 8, 12, 29, 37, 45, 88]
```

**Explanation of Example 1:**
- The initial array is [12, 34, 54, 2, 3].
- With a gap of 2, the array becomes [12, 34, 2, 3, 54].
- With a gap of 1, the array becomes [2, 3, 12, 34, 54].

## 6. Constraints

- $The array can have any number of elements.$
- $All elements in the array are integers.$

## 7. Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  def shell_sort(arr):
      n = len(arr)
      gap = n // 2
      while gap > 0:
          for i in range(gap, n):
              temp = arr[i]
              j = i
              while j >= gap and arr[j - gap] > temp:
                  arr[j] = arr[j - gap]
                  j -= gap
              arr[j] = temp
          gap //= 2
      return arr

  # Example usage:
  arr = [12, 34, 54, 2, 3]
  shell_sort(arr)
  print(arr)
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  #include <vector>

  void shellSort(std::vector<int>& arr) {
      int n = arr.size();
      for (int gap = n / 2; gap > 0; gap /= 2) {
          for (int i = gap; i < n; i++) {
              int temp = arr[i];
              int j;
              for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                  arr[j] = arr[j - gap];
              }
              arr[j] = temp;
          }
      }
  }

  int main() {
      std::vector<int> arr = {12, 34, 54, 2, 3};
      shellSort(arr);
      for (int num : arr)
          std::cout << num << " ";
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```java
  public class ShellSort {
      public static void shellSort(int[] arr) {
          int n = arr.length;
          for (int gap = n / 2; gap > 0; gap /= 2) {
              for (int i = gap; i < n; i++) {
                  int temp = arr[i];
                  int j;
                  for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                      arr[j] = arr[j - gap];
                  }
                  arr[j] = temp;
              }
          }
      }

      public static void main(String[] args) {
          int[] arr = {12, 34, 54, 2, 3};
          shellSort(arr);
          for (int num : arr)
              System.out.print(num + " ");
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```javascript
  function shellSort(arr) {
      let n = arr.length;
      for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
          for (let i = gap; i < n; i++) {
              let temp = arr[i];
              let j;
              for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                  arr[j] = arr[j - gap];
              }
              arr[j] = temp;
          }
      }
      return arr;
  }

  // Example usage:
  let arr = [12, 34, 54, 2, 3];
  shellSort(arr);
  console.log(arr);
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity**:
  - Best case: $O(n log n)$
  - Average case: $O(n^(3/2))$
  - Worst case: $O(n^2)$

- **Space Complexity**: $O(1)$ (in-place sorting)

## 9. Advantages and Disadvantages

**Advantages:**
- More efficient than bubble sort and insertion sort for large lists.
- Simple to understand and implement.

**Disadvantages:**
- More complex than bubble sort and insertion sort.
- The performance depends on the gap sequence used.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/shellsort/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/sorting/problem)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)
