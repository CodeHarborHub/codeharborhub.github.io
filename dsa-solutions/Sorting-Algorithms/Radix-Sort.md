---
id: Radix-Sort
title: Radix Sort (Geeks for Geeks)
sidebar_label: Radix Sort
tags:
  - Intermediate
  - Sorting Algorithm
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Radix Sort problem"
---

## 1. What is Radix Sort?

Radix Sort is a non-comparative integer sorting algorithm that sorts numbers by processing individual digits. It processes digits starting from the least significant digit to the most significant digit (LSD Radix Sort).

## 2. Algorithm for Radix Sort

1. Find the maximum number in the array to determine the number of digits.
2. Start from the least significant digit and use a stable sorting algorithm to sort the array based on the current digit.
3. Repeat the process for each digit until all digits are processed.

## 3. How does Radix Sort work?

- Radix Sort processes each digit of the numbers starting from the least significant digit.
- It uses Counting Sort as a subroutine to sort the digits, ensuring the algorithm remains stable.
- By processing each digit and leveraging the stability of Counting Sort, Radix Sort ensures the overall order is maintained.

## 4. Problem Description

Given an array of integers, implement the Radix Sort algorithm to sort the array in ascending order.

## 5. Examples

**Example 1:**
Input: [170, 45, 75, 90, 802, 24, 2, 66]
Output: [2, 24, 45, 66, 75, 90, 170, 802]

**Example 2:**
Input: [3, 6, 9, 1, 4, 7, 8, 2, 5]
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


## 6. Constraints

- The array can have any number of elements.
- All elements in the array are non-negative integers.

## 7. Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>

```python
    
 def counting_sort(arr, exp):
      n = len(arr)
      output = [0] * n
      count = [0] * 10
      
      for i in range(n):
          index = arr[i] // exp
          count[index % 10] += 1
      
      for i in range(1, 10):
          count[i] += count[i - 1]
      
      i = n - 1
      while i >= 0:
          index = arr[i] // exp
          output[count[index % 10] - 1] = arr[i]
          count[index % 10] -= 1
          i -= 1
      
      for i in range(n):
          arr[i] = output[i]
  
  def radix_sort(arr):
      max_val = max(arr)
      exp = 1
      while max_val // exp > 0:
          counting_sort(arr, exp)
          exp *= 10
      return arr

  # Example usage:
  arr = [170, 45, 75, 90, 802, 24, 2, 66]
  radix_sort(arr)
  print(arr)
```

</TabItem>
  <TabItem value="C++" label="C++">
    
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
void countingSort(std::vector<int>& arr, int exp) {
int n = arr.size();
std::vector<int> output(n);
int count[10] = {0};
for (int i = 0; i < n; i++) {
    int index = (arr[i] / exp) % 10;
    count[index]++;
}
for (int i = 1; i < 10; i++) {
    count[i] += count[i - 1];
}

for (int i = n - 1; i >= 0; i--) {
    int index = (arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
}

for (int i = 0; i < n; i++) {
    arr[i] = output[i];
}
}

void radixSort(std::vector<int>& arr) {
int maxVal = *max_element(arr.begin(), arr.end());
for (int exp = 1; maxVal / exp > 0; exp *= 10) {
countingSort(arr, exp);
}
}

int main() {
std::vector<int> arr = {170, 45, 75, 90, 802, 24, 2, 66};
radixSort(arr);
for (int num : arr) {
std::cout << num << " ";
}
return 0;
}
``` 

</TabItem>

<TabItem value="Java" label="Java">
  
```java
  
 import java.util.Arrays;

 public class RadixSort {
    public static void countingSort(int[] arr, int exp) {
        int n = arr.length;
        int[] output = new int[n];
        int[] count = new int[10];
        Arrays.fill(count, 0);

        for (int i = 0; i < n; i++) {
            int index = (arr[i] / exp) % 10;
            count[index]++;
        }

        for (int i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (int i = n - 1; i >= 0; i--) {
            int index = (arr[i] / exp) % 10;
            output[count[index] - 1] = arr[i];
            count[index]--;
        }

        for (int i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }

    public static void radixSort(int[] arr) {
        int maxVal = Arrays.stream(arr).max().getAsInt();
        for (int exp = 1; maxVal / exp > 0; exp *= 10) {
            countingSort(arr, exp);
        }
    }

    public static void main(String[] args) {
        int[] arr = {170, 45, 75, 90, 802, 24, 2, 66};
        radixSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}

```
</TabItem>
<TabItem value="JavaScript" label="JavaScript">

```javascript
  function countingSort(arr, exp) {
      let n = arr.length;
      let output = new Array(n).fill(0);
      let count = new Array(10).fill(0);
  for (let i = 0; i < n; i++) {
      let index = Math.floor(arr[i] / exp) % 10;
      count[index]++;
  }

  for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
      let index = Math.floor(arr[i] / exp) % 10;
      output[count[index] - 1] = arr[i];
      count[index]--;
  }

  for (let i = 0; i < n; i++) {
      arr[i] = output[i];
  }
}

function radixSort(arr) {
let maxVal = Math.max(...arr);
for (let exp = 1; Math.floor(maxVal / exp) > 0; exp *= 10) {
countingSort(arr, exp);
}
return arr;
}

// Example usage:
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
radixSort(arr);
console.log(arr);
```

</TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity**:
- Best case: $O(nk)$
- Average case: $O(nk)$
- Worst case: $O(nk)$
- where n is the number of elements and k is the number of digits in the largest number.

- **Space Complexity**: $O(n + k)$

## 9. Advantages and Disadvantages

**Advantages:**
- Radix Sort is efficient for sorting large lists of numbers.
- It is not comparison-based and can outperform comparison-based algorithms for large datasets with small keys.

**Disadvantages:**
- Radix Sort requires additional memory for sorting.
- It is less flexible as it is designed specifically for integers and strings.
