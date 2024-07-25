---
id: largest-number
title: Largest Number(LeetCode)
sidebar_label: 0179-Largest Number
tags:
  - Array
  - String
  - Greedy
  - Sorting
description: Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
---

## Problem Statement

Given a list of non-negative integers `nums`, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

### Examples

**Example 1:**

```plaintext
Input: nums = [10,2]
Output: "210"
```

**Example 2:**

```plaintext
Input: nums = [3,30,34,5,9]
Output: "9534330"
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 109`

## Solution

The goal of this approach is to arrange a set of numbers such that they form the largest possible number when concatenated. The idea is to use a custom string comparator to determine the order of concatenation.

### Approach 

#### Algorithm

1. Convert Integers to Strings:
Convert the array of integers to an array of strings to facilitate custom sorting.
2. Custom Comparator:
Define a custom comparator to compare two strings (`str1` and `str2`). The comparator should decide the order based on the concatenated result of the strings:
* If `str1 + str2` is greater than `str2 + str1`, then `str1` should come before `str2`.
* Otherwise, `str2` should come before `str1`.
3. Sort the Array:
Use the custom comparator to sort the array of strings.
4. Handle Edge Cases:
If the largest number after sorting is '0', the result should be '0' (to handle cases like `[0, 0]`).
5. Build the Result:
Append all the sorted strings to form the final result.
6. Return the Result:
Convert the `StringBuilder` to a string and return it.

#### Implementation

```Java
import java.util.Arrays;
import java.util.Comparator;

public class Solution {
    public String largestNumber(int[] num) {
        if (num == null || num.length == 0)
            return "";

        // Convert int array to String array for sorting
        String[] s_num = new String[num.length];
        for (int i = 0; i < num.length; i++)
            s_num[i] = String.valueOf(num[i]);

        // Custom comparator to decide the order of strings
        Comparator<String> comp = new Comparator<String>() {
            @Override
            public int compare(String str1, String str2) {
                String s1 = str1 + str2;
                String s2 = str2 + str1;
                return s2.compareTo(s1); // Reverse order
            }
        };

        Arrays.sort(s_num, comp);

        // Handle the edge case where the largest number is '0'
        if (s_num[0].charAt(0) == '0')
            return "0";

        // Build the result
        StringBuilder sb = new StringBuilder();
        for (String s : s_num)
            sb.append(s);

        return sb.toString();
    }
}

```

### Complexity Analysis

- **Time complexity**: $O(n k log n)$ -  where k is the average length of the strings.
- **Space complexity**: $O(N)$

### Conclusion

This approach efficiently solves the problem of forming the largest possible number by leveraging custom sorting based on string concatenation. It handles edge cases and ensures the correct order of numbers for the maximum concatenated value. The time complexity of `O(n k log n)` is reasonable given the constraints, and the space complexity is `O(n)`, which is manageable for typical input sizes.
