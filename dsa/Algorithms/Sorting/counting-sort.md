---
id: counting-sort
title: Counting Sort
sidebar_label: Counting Sort
tags: [python, java, c++, javascript, programming, algorithms, sorting, data structures, tutorial, in-depth]
description: In this tutorial, we will learn about Counting Sort and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Counting Sort

Counting Sort is a non-comparison-based sorting algorithm that works efficiently for sorting integers or objects that can be represented as integers within a specific range. This tutorial will cover the basics of Counting Sort, its applications, and how to implement it in Python, Java, C++, and JavaScript. We will also delve into various optimizations and advanced use cases.

## Introduction to Counting Sort

Counting Sort is a stable, non-comparison-based sorting algorithm that was introduced by Harold H. Seward in 1954. It works by counting the occurrences of each unique element in the input array and then using this count information to place the elements in the correct position in the output array.

## How Counting Sort Works

- **Step 1: Find the Range**: Determine the range of the input data (i.e., the minimum and maximum values).
- **Step 2: Count Occurrences**: Create a count array to store the count of each unique element.
- **Step 3: Accumulate Counts**: Modify the count array such that each element at each index stores the sum of previous counts.
- **Step 4: Place Elements**: Build the output array by placing elements at their correct positions using the count array.


## Pseudocode for Counting Sort

Here is the pseudocode for Counting Sort:

```
function countingSort(arr):
    find the maximum element (max) in arr
    create a count array of size max + 1 and initialize it with zeros

    for each element in arr:
        increment the count of element in count array

    for each index in count array:
        accumulate the counts

    for each element in arr (in reverse order):
        place the element in the output array using the count array
        decrement the count of element in count array

    return output array
```

## Implementing Counting Sort

### Python Implementation

```python
def counting_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    output = [0] * len(arr)
    
    for num in arr:
        count[num] += 1

    for i in range(1, len(count)):
        count[i] += count[i - 1]

    for num in reversed(arr):
        output[count[num] - 1] = num
        count[num] -= 1

    return output

arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print(f"Sorted array is: {sorted_arr}")
```

### Java Implementation

```java
import java.util.Arrays;

public class CountingSort {

    public static void countingSort(int[] arr) {
        int max = Arrays.stream(arr).max().getAsInt();
        int[] count = new int[max + 1];
        int[] output = new int[arr.length];

        for (int num : arr) {
            count[num]++;
        }

        for (int i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }

        for (int i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i]] - 1] = arr[i];
            count[arr[i]]--;
        }

        System.arraycopy(output, 0, arr, 0, arr.length);
    }

    public static void main(String[] args) {
        int[] arr = {4, 2, 2, 8, 3, 3, 1};
        countingSort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}
```

### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void countingSort(vector<int>& arr) {
    int max_val = *max_element(arr.begin(), arr.end());
    vector<int> count(max_val + 1, 0);
    vector<int> output(arr.size(), 0);

    for (int num : arr) {
        count[num]++;
    }

    for (int i = 1; i < count.size(); i++) {
        count[i] += count[i - 1];
    }

    for (int i = arr.size() - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    for (int i = 0; i < arr.size(); i++) {
        arr[i] = output[i];
    }
}

int main() {
    vector<int> arr = {4, 2, 2, 8, 3, 3, 1};
    countingSort(arr);
    cout << "Sorted array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    return 0;
}
```

### JavaScript Implementation

```javascript
function countingSort(arr) {
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);
    let output = new Array(arr.length);

    arr.forEach(num => count[num]++);

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}

let arr = [4, 2, 2, 8, 3, 3, 1];
let sortedArr = countingSort(arr);
console.log("Sorted array:", sortedArr);
```

## Time Complexity Analysis

- **Best Case**: $O(n + k)$ (where n is the number of elements and k is the range of the input)
- **Worst Case**: $O(n + k)$
- **Average Case**: $O(n + k)$

## Space Complexity Analysis

- **Space Complexity**: $O(n + k)$ (for the count and output arrays)

## Applications of Counting Sort

- **Sorting Integers**: Counting Sort is ideal for sorting integers or objects that can be represented as integers.
- **Large Data Sets**: Efficient for sorting large data sets with a limited range of values.
- **Stability**: Maintains the relative order of equal elements, making it suitable for sorting data with multiple keys.

## Optimizations and Variations

### Improved Counting Sort

Improved Counting Sort can be implemented to handle negative numbers by offsetting the count array to accommodate the negative values.

### Radix Sort

Counting Sort can be used as a subroutine in Radix Sort, which sorts numbers digit by digit.

## Practical Considerations

### Stability

Counting Sort is a stable sorting algorithm, meaning it maintains the relative order of equal elements.

### Use Cases

- When the range of input data (k) is not significantly larger than the number of elements (n).
- When stability is required in sorting.

## Conclusion

In this tutorial, we covered the fundamentals of Counting Sort, its implementation in Python, Java, C++, and JavaScript, and various optimizations and applications. Counting Sort is a powerful and efficient sorting algorithm for specific use cases, particularly when the range of input values is limited. By mastering Counting Sort, you can handle sorting tasks effectively in your projects.