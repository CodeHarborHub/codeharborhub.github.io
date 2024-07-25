---
id: is-binary-number-multiple-of-3
title: Is Binary Number Multiple Of 3
sidebar_label: 0109-Is Binary Number Multiple Of 3
tags:
  - Mathematical
  - Bit Magic
  - Data Structures
  - Algorithms
description: "A solution to the problem of finding whether given binary number is divisible by 3 or not"
---

In this page, we will solve the problem of finding whether given binary number is divisible by 3 or not.

## Problem Description

Given a number in its binary form find if the given binary number is a multiple of 3. It is recommended to finish the task using one traversal of input binary number.

### Examples

**Example 1:**

```plaintext
Input: S = "0011"
Output: 1
Explanation: "0011" is 3, which is divisible by 3.
```

**Example 2:**

```plaintext
Input: S = "100"
Output: 0
Explanation: "100"'s decimal equivalent is 4, which is not divisible by 3.
```


### Constraints

- $1 \leq$ |S| $\leq10^5$

## Solution

### Intuition and Approach

The problem can be solved using two approaches one by converting the given binary string to decimal number and then find whether the given number is divisible by three or not 
and another approach is by using Bit manipulation
<Tabs>
 <tabItem value="Binary to Decimal" label="Binary to Decimal">

### Approach: Binary to Decimal

1. The simplest approach is to convert the binary number into a decimal equivalent. And check if it is divisible by 3 or not.
2. For converting the binary string to decimal we will traverse the given string backwards and then 
    - if '1' we will add the power of 2 to the res
    - if '0' we will do nothing
3. After traversing whole list we will check whether the decimal number res is divisible by 3 or not
#### Code in Python
```python
class Solution:
	def isDivisible(self, s):
    ans=0
    for i in range(len(s)-1,-1,-1):
        if s[i]=='1':
            ans+=2**(len(s)-1-i)    
  return int(ans%3==0)
```

#### Complexity Analysis

- **Time Complexity:** $O(S)$
- **Space Complexity:** $O(1)$

</tabItem>

<tabItem value="Bit Manipulation" label="Bit Manipulation">

### Approach: Binary to Decimal

1. we will initialize variable
   - odd_sum is initialized to 0. This variable will store the count of '1's at odd positions (considering positions starting from 0 when counting from the rightmost bit).
   - even_sum is initialized to 0. This variable will store the count of '1's at even positions (considering positions starting from 0 when counting from the rightmost bit).
2. The for loop iterates through each bit of the reversed binary string. enumerate(reversed(s)) gives both the index i and the bit bit.s[::-1] is used to process the string from right to left, which corresponds to the least significant bit first.
3. We then update sums based on bit position:
   - For each bit, if the bit is '1':
   - If the index i is even (0, 2, 4, ...), it corresponds to an odd position in the original string. Therefore, odd_sum is incremented by 1.
   - If the index i is odd (1, 3, 5, ...), it corresponds to an even position in the original string. Therefore, even_sum is incremented by 1.
4. Next we will check divisibility by 3: After iterating through the entire binary string, the function calculates (odd_sum - even_sum) % 3.
   The difference between odd_sum and even_sum is taken modulo 3 to check if it is divisible by 3.
   - If (odd_sum - even_sum) % 3 == 0 is true, the binary number is divisible by 3, and the function returns 1 (integer representation of True).
   - Otherwise, it returns 0 (integer representation of False).
#### Code in Python
```python
class Solution:
  def isDivisible(self, s):
		# code here
		odd_sum = 0
    even_sum = 0
    for i, bit in enumerate(s[::-1]):
      if bit == '1':
        if i % 2 == 0:
          odd_sum += 1
        else:
          even_sum += 1
    return int((odd_sum - even_sum) % 3 == 0)
```

#### Complexity Analysis

- **Time Complexity:** $O(log10​(n))$
- **Space Complexity:** $O(1)$

</tabItem>

</Tabs>
