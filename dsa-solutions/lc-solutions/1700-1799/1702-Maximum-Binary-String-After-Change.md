---
id: maximum-binary-string-after-change
title: Maximum Binary String After Change
sidebar_label: 1702. Maximum Binary String After Change
tags:
- String
- Greedy
- C++
- Python
- Java
description: "This is a solution to the Maximum Binary String After Change problem on LeetCode."
---

## Problem Description
You are given a binary string `binary` consisting of only `0's` or `1's`. You can apply each of the following operations any number of times:

1. If the number contains the substring `"00"`, you can replace it with `"10"`. For example, `"00010" -> "10010"`.
2. If the number contains the substring `"10"`, you can replace it with `"01"`. For example, `"00010" -> "00001"`.

Return the maximum binary string you can obtain after any number of operations. Binary string `x` is greater than binary string `y` if `x`'s decimal representation is greater than `y`'s decimal representation.

### Examples

**Example 1:**
```
Input: binary = "000110"
Output: "111011"
Explanation: A valid transformation sequence can be:
"000110" -> "000101" 
"000101" -> "100101" 
"100101" -> "110101" 
"110101" -> "110011" 
"110011" -> "111011"
```

**Example 2:**
```
Input: binary = "01"
Output: "01"
Explanation: "01" cannot be transformed any further.
```

### Constraints
- `1 <= binary.length <= 10^5`
- `binary` consists of '0' and '1'.

## Solution for 1702. Maximum Binary String After Change 

### Approach 
- Divide the string into two parts: leading ones and the rest.
- For the rest part, we can always use `"10" -> "01"` to put all ones to the end of the string and hence move all zeros ahead of these ones.
- For all the zeros, apply `"00" -> "10"` from left to right, till only one `"0"` remains; it is the maximum.

## Code in Different Languages
<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
  ```python
  class Solution:
      def maximumBinaryString(self, binary: str) -> str:
          leading_ones = binary.find('0')
          if leading_ones < 0:
              return binary
          n = len(binary)
          zeros = binary.count('0')
          rest_ones = n - leading_ones - zeros
          return '1' * (leading_ones + zeros - 1) + '0' + '1' * rest_ones
  ```
  </TabItem>
  
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
  ```java
  public class Solution {
      public String maximumBinaryString(String binary) {
          int leadingOnes = binary.indexOf("0");
          if (leadingOnes < 0) {
              return binary;
          }
          int zeros = 0, restOnes = 0;
          for (int i = leadingOnes; i < binary.length(); ++i) {
              char c = binary.charAt(i);
              if (c == '0') {
                  ++zeros;
              } else {
                  ++restOnes;
              }
          }
          return "1".repeat(leadingOnes + zeros - 1) + "0" + "1".repeat(restOnes);
      }
  }
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
  ```cpp
  class Solution {
  public:
      string maximumBinaryString(string s) {
          // support variables
          int zeros = 0, i = 0, len = s.size();
          // moving the pointer after the first leading 1s
          while (s[i] == '1') i++; 
          // counting the 0s
          for (int j = i; j < len; j++) zeros += s[j] == '0';
          // edge case: not enough 0s to make any move convenient
          if (zeros < 2) return s;
          // turning all the zeros but one into 1s
          while (--zeros) s[i++] = '1';
          s[i++] = '0';
          // setting all the remaining original 1s to the end
          while (i < len) s[i++] = '1';
          return s;
      }
  };
  ```
  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(N)$
- Space Complexity: $O(N)$

## References

- **LeetCode Problem**: [Maximum Binary String After Change](https://leetcode.com/problems/maximum-binary-string-after-change/description/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/maximum-binary-string-after-change/solutions/)
