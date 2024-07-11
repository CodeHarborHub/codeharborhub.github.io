---
id: Gnome-Sort
title: Gnome Sort (Geeks for Geeks)
sidebar_label: Gnome Sort
tags:
  - Beginner
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Gnome Sort problem on Geeks for Geeks."
---

## 1. What is Gnome Sort?

Gnome Sort is a straightforward comparison-based sorting algorithm. It iteratively steps through the list, compares each pair of adjacent elements, and swaps them if they are in the wrong order. The algorithm moves forward if elements are in the correct order, but steps backward and continues swapping until the elements are ordered correctly when a pair is out of order. This process is repeated until the entire list is sorted.

## 2. Algorithm for Gnome Sort

1. Start with the first element.
2. If the current element is in the correct order (greater than or equal to the previous element), move to the next element.
3. If the current element is in the wrong order (less than the previous element), swap them and move one step back.
4. Repeat steps 2-3 until the end of the list is reached.
5. If the beginning of the list is reached, move forward and continue the process.

## 3. How does Gnome Sort work?

- Gnome Sort works by repeatedly comparing and swapping adjacent elements if they are in the wrong order.
- If a swap is made, it steps backward to ensure the order of all previous elements.
- It progresses forward only when elements are in the correct order, sorting the list step by step.

## 4. Problem Description

Given an array of integers, implement the Gnome Sort algorithm to sort the array in ascending order.

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
- First pass: [34, 64, 25, 12, 22, 11, 90].
- After correcting: [34, 25, 64, 12, 22, 11, 90].
- Continue until the array is sorted: [11, 12, 22, 25, 34, 64, 90].

## 6. Constraints

- The input array can contain any integers, positive or negative.
- The size of the array can range from 1 to $10^5$ elements.
- The sorting should be done in-place with $O(1)$ additional space.
- The algorithm should maintain stability, meaning the relative order of equal elements should be preserved.


## 7. Implementation
### Gnome Sort in Java

```java
public class GnomeSort {
    public static void gnomeSort(int[] arr) {
        int index = 0;
        int n = arr.length;

        while (index < n) {
            if (index == 0 || arr[index] >= arr[index - 1]) {
                index++;
            } else {
                int temp = arr[index];
                arr[index] = arr[index - 1];
                arr[index - 1] = temp;
                index--;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        gnomeSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

### Gnome Sort in Python

```python
def gnome_sort(arr):
    index = 0
    n = len(arr)

    while index < n:
        if index == 0 or arr[index] >= arr[index - 1]:
            index += 1
        else:
            arr[index], arr[index - 1] = arr[index - 1], arr[index]
            index -= 1

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
gnome_sort(arr)
print(arr)
```

## 8. Complexity Analysis

- **Time Complexity**:
  - Best case: $O(n)$ (when the array is already sorted)
  - Average case: $O(n^2)$
  - Worst case: $O(n^2)$

- **Space Complexity**: $O(1)$ (in-place sorting)

## 9. Advantages and Disadvantages

**Advantages:**
- Simple to understand and implement.
- Requires minimal additional space, making it space-efficient.
- Suitable for small datasets or nearly sorted arrays.

**Disadvantages:**
- Inefficient for large datasets due to $O(n^2)$ time complexity.
- Can perform poorly with datasets containing many duplicate values.
- Requires multiple backward steps when elements are out of order.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/gnome-sort-a-stupid-one/)
-  **Wikipedia Article on Gnome Sort:** [Gnome Sort - Wikipedia](https://en.wikipedia.org/wiki/Gnome_sort)

