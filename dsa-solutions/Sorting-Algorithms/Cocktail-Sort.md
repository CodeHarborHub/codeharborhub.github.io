--
id: Cocktail-Sort
title: Cocktail Sort (Geeks for Geeks)
sidebar_label: Cocktail Sort
tags:
  - Intermediate
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Cocktail Sort problem on Geeks for Geeks."
---

## 1. What is Cocktail Sort?

Cocktail Sort is a variation of Bubble Sort. It traverses the list in both directions alternatively. This algorithm is also known as Bidirectional Bubble Sort or Shaker Sort.

## 2. Algorithm for Cocktail Sort

1. Start at the beginning of the list.
2. Traverse the list from left to right, swapping adjacent items if they are in the wrong order.
3. When the end of the list is reached, reverse the direction and traverse from right to left, again swapping adjacent items if they are in the wrong order.
4. Repeat steps 2 and 3 until the list is sorted.

## 3. How does Cocktail Sort work?

- It sorts in both directions in each pass through the list, which can help elements move into place faster.
- This bidirectional approach allows earlier elements to "bubble up" and later elements to "bubble down" in the same pass, potentially reducing the number of overall passes needed.

## 4. Problem Description

Given an array of integers, implement the Cocktail Sort algorithm to sort the array.

## 5. Examples

**Example 1:**

```
Input: [5, 1, 4, 2, 8, 0, 2]
Output: [0, 1, 2, 2, 4, 5, 8]
```
**Example 2:**
```
Input: [5, 1, 4, 2, 9, 8]
Output: [1, 2, 4, 5, 8, 9]
```

## 6. Constraints

- The array should contain at least one element.

## 7. Implementation

**Python**
```python
def cocktail_sort(arr):
    n = len(arr)
    swapped = True
    start = 0
    end = n - 1
    while swapped:
        swapped = False
        for i in range(start, end):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
        if not swapped:
            break
        swapped = False
        end -= 1
        for i in range(end - 1, start - 1, -1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
        start += 1
    return arr
```
```java
import java.util.Arrays;

public class CocktailSort {
    public static void cocktailSort(int[] arr) {
        boolean swapped = true;
        int start = 0;
        int end = arr.length - 1;

        while (swapped) {
            swapped = false;
            for (int i = start; i < end; i++) {
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
            swapped = false;
            end--;
            for (int i = end - 1; i >= start; i--) {
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
            start++;
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8, 0, 2};
        cocktailSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}

```

## 8. Complexity Analysis

- **Time Complexity**:
  - Best case: $O(n)$ (when the array is already sorted)
    Average case: $O(n^2)$
    Worst case: $O(n^2)$

- **Space Complexity**: $O(1)$ (in-place sorting)

## 9. Advantages and Disadvantages

**Advantages:**
- Cocktail Sort can be more efficient than Bubble Sort for certain types of input because it can        address issues where small elements are initially near the end of the list.
- Simple to understand and implement.

**Disadvantages:**
- Still has a worst-case time complexity of $O(n^2)$, making it inefficient on large lists compared to more advanced algorithms like Quick Sort, Merge Sort, or Heap Sort.
- The bidirectional approach does not significantly improve performance for most input cases.

## 10. References

- **GFG Article on Cocktail Sort:** [Geeks for Geeks Cocktail Sort](https://www.geeksforgeeks.org/cocktail-sort/)
- **Wikipedia Article on Cocktail Sort:** [Cocktail Sort - Wikipedia](https://en.wikipedia.org/wiki/cocktail_sort)
