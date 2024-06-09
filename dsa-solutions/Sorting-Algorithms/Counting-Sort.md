---
id: Counting-Sort
title: Counting Sort (Geeks for Geeks)
sidebar_label: Counting Sort
tags:
  - Beginner
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Counting Sort problem on Geeks for Geeks."
---

## 1. What is Counting Sort?

Counting Sort is a non-comparison-based sorting algorithm. It works by counting the number of occurrences of each unique element in the input array. The algorithm uses this count information to place the elements in their correct positions in the output array.

## 2. Algorithm for Counting Sort

1. Find the maximum element in the input array.
2. Create a count array of size (maximum element + 1) and initialize all elements to 0.
3. Count the occurrences of each element in the input array and store it in the count array.
4. Modify the count array such that each element at each index stores the sum of previous counts.
5. Output each element from the input array into the correct sorted position in the output array.

## 3. How does Counting Sort work?

- Counting Sort calculates the position of each element in the sorted array by using the count array.
- The count array stores the count of each unique element.
- By iterating through the input array and the count array, elements are placed into their correct positions in the output array.

## 4. Problem Description

Given an array of integers, implement the Counting Sort algorithm to sort the array in ascending order.

## 5. Examples

**Example 1:**
```markdown
Input: [4, 2, 2, 8, 3, 3, 1]
Output: [1, 2, 2, 3, 3, 4, 8]

**Example 2:**
```markdown
Input: [7, 4, 4, 6, 2, 1, 5, 3, 8, 5]
Output: [1, 2, 3, 4, 4, 5, 5, 6, 7, 8]
```

**Explanation of Example 1:**
- The initial array is [4, 2, 2, 8, 3, 3, 1].
- Count array: [0, 1, 2, 2, 1, 0, 0, 0, 1]
- Sorted array: [1, 2, 2, 3, 3, 4, 8]

## 6. Constraints

- The array can have any number of elements.
- All elements in the array are non-negative integers.

## 7. Implementation

```java
public class CountingSort {
    public static void countingSort(int arr[]) {
        int largest = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            largest = Math.max(largest, arr[i]);
        }

        int count[] = new int[largest + 1];

        for (int i = 0; i < arr.length; i++) {
            count[arr[i]]++;
        }

        int j = 0;
        for (int i = 0; i < count.length; i++) {
            while (count[i] > 0) {
                arr[j] = i;
                j++;
                count[i]--;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {4, 2, 2, 8, 3, 3, 1};
        countingSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

## 8. Complexity Analysis

- **Time Complexity**:
  - Best case: $O(n + k)$  
  - Average case: $O(n + k)$  
  - Worst case: $O(n + k)$
  - where (n) is the number of elements in the input array and (k) is the range of the input.

- **Space Complexity**: $O(n + k)$

## 9. Advantages and Disadvantages

**Advantages:**
- Simple to implement.
- Efficient for sorting integers when the range of the input values is not significantly greater than the number of elements.

**Disadvantages:**
- Not suitable for sorting strings or floating-point numbers.
- The space complexity can be high if the range of input values is very large.

## 10. References

- **GFG Article on Counting Sort:** [Geeks for Geeks Counting Sort](https://www.geeksforgeeks.org/counting-sort/)
- **GFG Problem** [Counting Sort Problem](https://www.geeksforgeeks.org/problems/counting-sort/1)
- **Wikipedia Article on Counting Sort:** [Counting Sort - Wikipedia](https://en.wikipedia.org/wiki/Counting_sort)
