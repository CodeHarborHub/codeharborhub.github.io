---
id: fizz-buzz
title: Fizz Buzz(LeetCode)
sidebar_label: 0412-Fizz Buzz
tags:
  - Math
  - String
  - Simulation
description: Given an integer n, return a string array answer (1-indexed) where "FizzBuzz" if i is divisible by 3 and 5, "Fizz" if i is divisible by 3, "Buzz" if i is divisible by 5, i (as a string) if none of the above conditions are true.
---

## Problem Statement

Given an integer `n`, return a string array `answer` (1-indexed) where:

`answer[i] == "FizzBuzz"` if `i` is divisible by `3` and `5`.
`answer[i] == "Fizz"` if `i` is divisible by `3`.
`answer[i] == "Buzz"` if `i` is divisible by `5`.
`answer[i] == i` (as a string) if none of the above conditions are true. 

### Examples

**Example 1:**

```plaintext
Input: n = 3
Output: ["1","2","Fizz"]
```

**Example 2:**

```plaintext
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
```

**Example 3:**

```plaintext
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

### Constraints

- `1 <= n <= 104`

## Solution

The FizzBuzz problem is a classic programming task often used to teach and test fundamental coding skills. The problem statement is simple: for a given integer `n`, return a list of strings where each string corresponds to the numbers from 1 to `n` with the following rules:

* For multiples of 3, add "Fizz" instead of the number.
* For multiples of 5, add "Buzz" instead of the number.
* For multiples of both 3 and 5, add "FizzBuzz" instead of the number.
Here, we present three different approaches to solve the FizzBuzz problem in Java.

### Approach 1: Simple if-else

#### Algorithm

1. Create an empty list to store the results.
2. Loop from 1 to `n`.
3. For each number, check if it is divisible by 15, 3, or 5 using the modulus operator.
4. Add the appropriate string ("FizzBuzz", "Fizz", "Buzz", or the number itself) to the list.
5. Return the list.

#### Implementation

```Java
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> ans = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (i % 15 == 0) {
                ans.add("FizzBuzz");
            } else if (i % 3 == 0) {
                ans.add("Fizz");
            } else if (i % 5 == 0) {
                ans.add("Buzz");
            } else {
                ans.add(String.valueOf(i));
            }
        }
        return ans;                 
    }
}
```

### Approach 2: No Modulus Operator

#### Algorithm

1. Create an empty list to store the results.
2. Use two counters, `fizz` and `buzz`, initialized to 0.
3. Loop from 1 to `n`.
4. Increment `fizz` and `buzz` for each number.
5. Check the values of `fizz` and buzz to decide whether to add "Fizz", "Buzz", "FizzBuzz", or the number itself to the list.
6. Reset `fizz` and/or `buzz` when they reach their respective thresholds (3 and 5).
7. Return the list.
  
#### Implementation 

```Java
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> res = new ArrayList<>();
        int i = 1, fizz = 0, buzz = 0;
        while (i <= n) {
            fizz++; buzz++;
            if (fizz == 3 && buzz == 5) {
                res.add("FizzBuzz");
                fizz = buzz = 0;
            } else if (fizz == 3) {
                res.add("Fizz");
                fizz = 0;
            } else if (buzz == 5) {
                res.add("Buzz");
                buzz = 0;
            } else {
                res.add(String.valueOf(i));
            }
            i++;
        }
        return res;
    }
}
```

### Approach 3: Ternary Operator

#### Algorithm

1. Create an empty list to store the results.
2. Loop from 1 to `n`.
3. For each number, use the ternary operator to check if it is divisible by 15, 5, or 3, and add the appropriate string to the list.
4. Return the list.

#### Implementation 

```Java
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> ans = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            ans.add(
                i % 15 == 0 ? "FizzBuzz" :
                i % 5 == 0  ? "Buzz" :
                i % 3 == 0  ? "Fizz" :
                String.valueOf(i)
            );
        }
        return ans;
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(N)$


### Conclusion

The choice of approach can depend on coding style and specific constraints or preferences. The first approach is straightforward and easy to understand. The second approach is a creative way to avoid the modulus operator, while the third approach uses the ternary operator for a concise solution.
