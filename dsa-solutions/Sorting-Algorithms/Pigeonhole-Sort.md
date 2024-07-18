---
id: Pigeonhole-Sort
title: Pigeonhole Sort (Geeks for Geeks)
sidebar_label: Pigeonhole Sort
tags:
  - Beginner
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Pigeonhole Sort problem on Geeks for Geeks."
---

## 1. What is Pigeonhole Sort?

Pigeonhole Sort is a non-comparison-based sorting algorithm that is efficient when the range of possible key values is close to the number of elements to be sorted. It works by placing each element into a corresponding "pigeonhole" based on its value and then collecting the elements in order.

## 2. Algorithm for Pigeonhole Sort

1. Find the minimum and maximum values in the array.
2. Calculate the range of values and create an array of pigeonholes.
3. Iterate through the input array and place each element into its corresponding pigeonhole.
4. Collect the elements from the pigeonholes in order, overwriting the original array.

## 3. How does Pigeonhole Sort work?

- Pigeonhole Sort distributes the elements into a number of buckets (pigeonholes) equal to the range of values.
- Each element is placed in its respective bucket based on its value.
- The elements are then collected from the buckets in order to produce a sorted array.

## 4. Problem Description

Given an array of integers with a known and limited range, implement the Pigeonhole Sort algorithm to sort the array in ascending order.

## 5. Examples

**Example 1:**
```
Input: [8, 3, 2, 7, 4, 6, 8]
Output: [2, 3, 4, 6, 7, 8, 8]
```

**Example 2:**
```
Input: [5, 9, 1, 2, 8, 3, 7, 6, 4]
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

**Explanation of Example 1:**
- The initial array is [8, 3, 2, 7, 4, 6, 8].
- Create pigeonholes for each value in the range [2, 8].
- Place each element in its corresponding pigeonhole:
  - 8 -> pigeonhole 8
  - 3 -> pigeonhole 3
  - 2 -> pigeonhole 2
  - 7 -> pigeonhole 7
  - 4 -> pigeonhole 4
  - 6 -> pigeonhole 6
  - 8 -> pigeonhole 8
- Collect the elements from the pigeonholes in order: [2, 3, 4, 6, 7, 8, 8].

## 6. Constraints

- The input array can contain any integers within a known and limited range.
- The size of the array can range from 1 to $10^5$ elements.
- The sorting should be done in-place with O(1) additional space.
- The algorithm should maintain stability, meaning the relative order of equal elements should be preserved.

### Pigeonhole Sort in Java

```java
import java.util.Arrays;

public class PigeonholeSort {
    public static void pigeonholeSort(int[] arr) {
        int min = Arrays.stream(arr).min().orElse(Integer.MIN_VALUE);
        int max = Arrays.stream(arr).max().orElse(Integer.MAX_VALUE);
        int range = max - min + 1;

        // Create pigeonholes
        int[] holes = new int[range];

        // Populate the pigeonholes
        for (int num : arr) {
            holes[num - min]++;
        }

        // Collect elements from pigeonholes
        int index = 0;
        for (int i = 0; i < range; i++) {
            while (holes[i]-- > 0) {
                arr[index++] = i + min;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {8, 3, 2, 7, 4, 6, 8};
        pigeonholeSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```

### Pigeonhole Sort in Python

```python
def pigeonhole_sort(arr):
    min_val = min(arr)
    max_val = max(arr)
    range_of_values = max_val - min_val + 1

    # Create pigeonholes
    holes = [0] * range_of_values

    # Populate the pigeonholes
    for num in arr:
        holes[num - min_val] += 1

    # Collect elements from pigeonholes
    index = 0
    for i in range(range_of_values):
        while holes[i] > 0:
            arr[index] = i + min_val
            index += 1
            holes[i] -= 1

# Example usage
arr = [8, 3, 2, 7, 4, 6, 8]
pigeonhole_sort(arr)
print(arr)
```

## 8. Complexity Analysis

- **Time Complexity**:
  - Best case: $O(n + k)$ where $k$ is the range of values (when the array is nearly sorted or uniformly distributed)
  - Average case: $O(n + k)$
  - Worst case: $O(n + k)$ (when all elements fall into the same pigeonhole)

- **Space Complexity**: $O(n + k)$ where $n$ is the number of elements and $k$ is the range of values

## 9. Advantages and Disadvantages

**Advantages:**
- Efficient for sorting when the range of possible key values $k$ is not significantly larger than the number of elements $n$.
- Simple to implement and understand.

**Disadvantages:**
- Space complexity can be an issue for large ranges of values.
- Not suitable for datasets where the range $k$ is much larger than $n$, as it would lead to inefficient memory usage.
- Performs poorly with highly skewed or clustered distributions of elements.

## 10. References

- **GFG Article on Pigeonhole Sort:** [Geeks for Geeks Cocktail Sort](https://www.geeksforgeeks.org/pigeonhole-sort/)
- **Wikipedia Article on Pigeonhole Sort:** [Pigeonhole Sort - Wikipedia](https://en.wikipedia.org/wiki/Pigeonhole_sort)
