---
id: number-of-lines-to-write-string
title: Number of Lines To Write String
sidebar_label: 806- Number of Lines To Write String
tags:
  - Array
  - String
description: Write the string ss across multiple lines with each line no wider than 100 pixels, counting the total number of lines and the width of the last line, given the widths of each letter.
sidebar_position: 0806
---

## Problem Description

You are given a string `s` of lowercase English letters and an array `widths` denoting how many pixels wide each lowercase English letter is. Specifically, `widths[0]` is the width of `'a'`, `widths[1]` is the width of 'b', and so on.

You are trying to write `s` across several lines, where each line is no longer than 100 pixels. Starting at the beginning of `s`, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in `s`, continue writing as many letters as you can on the second line. Continue this process until you have written all of `s`.

Return an array `result` of length 2 where:

- `result[0]` is the total number of lines.
- `result[1]` is the width of the last line in pixels.

### Example 1

- **Input:** `widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"`
- **Output:** `[3,60]`
- **Explanation:** `You can write s as follows:
abcdefghij  // 100 pixels wide
klmnopqrst  // 100 pixels wide
uvwxyz      // 60 pixels wide
There are a total of 3 lines, and the last line is 60 pixels wide.`

### Constraints

- `widths.length == 26`
- `2 <= widths[i] <= 10`

## Approach

We initialize variables sum to keep track of the running sum of widths and numOfLines to store the number of lines needed. We iterate through each character of the string s, calculate its width using the provided array widths, and update the sum. If adding the width of the current character doesn't exceed the maximum width, we continue adding to the sum. If it exceeds, we increment the numOfLines and reset the sum to the width of the current character. Finally, we return an array containing the number of lines and the remaining width.

### Solution Code

#### Java

```Java
class Solution {
    public int numberOfArithmeticSlices(int[] nums) {
        int arithmeticSliceCount = 0;
        int currentSliceLength = 0;
        int difference = 3000;
        for (int i = 0; i < nums.length - 1; ++i) {
            if (nums[i + 1] - nums[i] == difference) {
                ++currentSliceLength;
            } else {
                difference = nums[i + 1] - nums[i];
                currentSliceLength = 0;
            }
            arithmeticSliceCount += currentSliceLength;
        }
        return arithmeticSliceCount;
    }
}

```

- Time Complexity
  The time complexity is o(n).

- Space Complexity
  The space complexity is O(1).
