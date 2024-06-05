---
id: fascinating-number
title: Fascinating Number Problem (Geeks for Geeks)
sidebar_label: 0002 - Fascinating Number 
tags:
  - Beginner
  - String
  - Find
  - Multiplication
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Fascinating Number problem on Geeks for Geeks."
---

This tutorial contains a complete walk-through of the Fascinating Number problem from the Geeks for Geeks website. It features the implementation of the solution code in two programming languages: Python and C++.

## Problem Description

Given a number N. Your task is to check whether it is fascinating or not.

Fascinating Number: When a number(should contain 3 digits or more) is multiplied by 2 and 3, and when both these products are concatenated with the original number, then it results in all digits from 1 to 9 present exactly once.

## Examples

**Example 1:**

```
Input: N = 192
Output: Fascinating
Explanation: After multiplication with 2 and 3, and concatenating with original number, number will become 192384576 which contains all digits from 1 to 9.
```

**Example 2:**

```
Input: N = 853
Output: Not Fascinating
Explanation: It's not a fascinating number.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `fascinating()` which takes the integer n parameters and returns boolean (True or False) denoting the answer.

Expected Time Complexity: $O(1)$
Expected Auxiliary Space: $O(1)$

## Constraints

`100 <= N <= 2*10^9`

## Problem Explanation

The problem is to determine if a given number N is a fascinating number. A fascinating number is defined as follows:

1. The number must have at least three digits.
2. Multiply the number by 2 and 3 to get two products.
3. Concatenate the original number, the product of the number and 2, and the product of the number and 3 into a single string.
4. The concatenated string should contain all digits from 1 to 9 exactly once, with no other digits present (e.g., no zeros).

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@iamanolive"/>
  ```py
  class Solution:
  
  	def fascinating(self, n):
		m2 = n * 2
		m3 = n * 3
		num = str(n) + str(m2) + str(m3)
		num = "".join(sorted(num))
		zero_count = num.count("0")
		if (num.find("123456789") == -1):
			return False
		elif (len(num) - zero_count > 9):
			return False
		else: 
			return True
	```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@iamanolive"/>

  ```cpp
  class Solution {
  public:
  	bool fascinating(int n) {
	  int m2 = n * 2;
	  int m3 = n * 3;
	  string num = to_string(n) + to_string(m2) + to_string(m3);
	  sort(num.begin(), num.end());
	  if (num.find("123456789") == string::npos)
	    return false;
	  else if (num.length() - num.find("123456789") > 9)
	    return false;
	  else return true;
	}
};
```

  </TabItem>  
</Tabs>


## Example Walkthrough

For N = 192:
1. Original number: 192
2. Multiply by 2: 192 × 2 = 384
3. Multiply by 3: 192 × 3 = 576
4. Concatenate: "192" + "384" + "576" = "192384576"
5. Check if the concatenated string contains all digits from 1 to 9 exactly once: "192384576" contains each digit from 1 to 9 exactly once.

Therefore, 192 is a fascinating number.

## Solution Logic:

1. Compute the Products: Multiply the number N by 2 and 3 to get two new numbers.
2. Concatenate the Results: Convert the original number and the two products to strings and concatenate them.
3. Sort and Check Digits: Sort the concatenated string and check if it contains the sequence "123456789" exactly once.
4. Verify Length: Ensure there are no extra digits (like zero or repetitions). The total length of digits should be exactly 9, excluding any zeros.

## Time Complexity

The time complexity is $O(1)$ because the operations involve a fixed number of steps regardless of the size of N:

* Multiplication and string concatenation are constant time operations.
* Sorting a string of fixed length (at most 9 characters) is a constant time operation.
* Checking for the sequence "123456789" in a fixed-length string is also a constant time operation.

## Space Complexity

The space complexity is $O(1)$ as well since the operations use a constant amount of extra space for storing the products and concatenated strings.

## References

- **Geeks for Geeks Problem:** [Geeks for Geeks Problem](https://www.geeksforgeeks.org/problems/fascinating-number3751/1?page=1&difficulty=School&sortBy=difficulty)
- **Solution Link:** [Fascinating Number on Geeks for Geeks](https://www.geeksforgeeks.org/problems/fascinating-number3751/1?page=1&difficulty=School&sortBy=difficulty)
- **Authors LeetCode Profile:** [Anoushka](https://www.geeksforgeeks.org/user/iamanolive/)