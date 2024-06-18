---
id: Harshad-Number
title: Harshad-Number
sidebar_label: 3099 -Harshad-Number
tags:
  - Array
  - Sorting
  - Enumeration
description: "This is a solution to the Harshad Number problem on LeetCode."
---

## Problem statement:

An integer divisible by the sum of its digits is said to be a Harshad number. You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.

**Example 1:**

Input: x = 18
Output: 9

Explanation:
The sum of digits of x is 9. 18 is divisible by 9. So 18 is a Harshad number and the answer is 9.

**Example 2:**

Input: x = 23
Output: -1

Explanation:
The sum of digits of x is 5. 23 is not divisible by 5. So 23 is not a Harshad number and the answer is -1.

Constraints:
`1 <= x <= 100`

## Solutions:

### Intuition

When faced with the problem of identifying whether a number is a Harshad number (also known as a Niven number), the initial thought is to break down the number into its individual digits, sum those digits, and then check if the original number is divisible by the sum of its digits without a remainder. This process involves basic arithmetic operations and iterating over each digit of the number.

### Approach

        1. **Summing the Digits**: First, we need a method to sum the digits of the given number. This can be done by repeatedly dividing the number by 10 and adding the remainder to a sum variable until the number becomes `0`.

        2. **Checking Divisibility**: Once we have the sum of the digits, we check if the original number is divisible by this sum. If the modulus (%) operation of the number divided by the sum of its digits equals 0, it is a Harshad number; otherwise, it is not.

        3. **Returning the Result**: If the number is a Harshad number, we return the sum of its digits as specified in the problem statement. If it's not, we return -1 (or an appropriate value indicating it's not a Harshad number).

## Code

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
            class Solution {
        public:
            int sumOfTheDigitsOfHarshadNumber(int x) {
                int sum = 0;
                int n = x;
                
                while(n != 0){
                    sum = sum + n % 10;
                    n = n/10;
                }
                
                if(x % sum == 0){
                  return sum;  
                } 
                return -1;
            }
        };
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
              class Solution {
            public int sumOfTheDigitsOfHarshadNumber(int x) {
                int sum = 0;
                int a = x;
                while (a > 0) {
                    sum += a % 10;
                    a /= 10;
                }
                if (x % sum == 0)
                    return sum;
                return -1;
            }
        }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
          class Solution(object):
          def sumOfTheDigitsOfHarshadNumber(self, x):
              sum_number = 0
              temp = x
              while temp > 0:
                  sum_number += temp % 10
                  temp //= 10
              if x % sum_number == 0:
                  return sum_number
              return -1
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      int sumOfTheDigitsOfHarshadNumber(int x) {
      int sumNumber = 0;
      int temp = x;
      while (temp) {
          sumNumber += temp % 10;
          temp /= 10;
      }
      if (x % sumNumber == 0)
          return sumNumber;
      return -1;
  }
      ```
    </TabItem>
</Tabs>

## Complexity

### Time complexity:

The time complexity is $O(k)$, where k is the number of digits in the number. This is because we need to iterate over each digit to sum them, and the number of iterations is proportional to the number of digits in the number.

### Space complexity:

The space complexity is $O(1)$, as the space required does not grow with the input size. We only need a fixed amount of variables to store the sum of the digits, the temporary value of the number as we reduce it, and possibly the original number if we need to return the sum of its digits.
