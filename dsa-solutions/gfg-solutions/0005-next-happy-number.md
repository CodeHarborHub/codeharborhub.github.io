---
id: next-happy-number
title: Next Happy Number (Geeks for Geeks)
sidebar_label: 0004 - Next Happy Number
tags:
  - intermediate
  - Fibonacci
  - Dynamic Programming
  - Mathematics
  - Algorithms
---

This tutorial contains a complete walk-through of the Next Happy Number problem from the Geeks for Geeks website. It features the implementation of the solution code in three programming languages: Python, C++, and Java.

## Problem Statement

For a given non-negative integer N, find the next smallest Happy Number. A number is called Happy if it leads to 1 after a sequence of steps, where at each step the number is replaced by the sum of squares of its digits. If we start with a Happy Number and keep replacing it with the sum of squares of its digits, we eventually reach 1.

## Examples

**Example 1:**

```
input:
N = 8

Output:
10
```

Explanation:
Next happy number after 8 is 10 since
$[ 1 * 1 + 0 * 0 = 1]$

**Example 2**

```
Input:
N = 10

Output:
13
```

Explanation:

After 10, 13 is the smallest happy number because
$[1 * 1 + 3 * 3 = 10]$, so we replace 13 by 10 and $[1 * 1 + 0 * 0 = 1]$.

## Task

You don't need to read input or print anything. Your task is to complete the function `nextHappy()` which takes an integer N as input parameters and returns an integer, the next Happy number after N.

## Constraints

-  $(1 \leq N \leq 10^5)$


## Solution Approach

### Intuition

To solve the problem, we need to:

1. Identify the next number greater than N.
2. Check if it is a Happy Number.
3. Repeat the process until we find the next Happy Number.

A number is identified as Happy if, by repeatedly replacing it with the sum of squares of its digits, we eventually reach 1.

### Steps

1. Implement a helper function to determine if a number is Happy.
2. Start checking numbers greater than N, using the helper function to identify the next Happy Number.

### Detailed Explanation

The numbers that, when you repeatedly sum the squares of their digits, eventually result in 1 are known as "happy numbers."

Here are examples of how to determine if numbers less than 10 are happy numbers:

- **Number 1:**

  $[1 ^ 2 = 1]$
  Since we have already reached 1, the process stops here. 1 is a happy number.

- **Number 2:**

  $[2^2 = 4]$
  $[4^2 = 16]$
  $[1^2 + 6^2 = 37]$
  $[3^2 + 7^2 = 58]$
  $[5^2 + 8^2 = 89]$
  $[8^2 + 9^2 = 145]$
  $[1^2 + 4^2 + 5^2 = 42]$
  $[4^2 + 2^2 = 20]$
  $[2^2 + 0^2 = 4]$

  Since we have reached 4 again, the process will continue in an infinite loop. 2 is not a happy number.

- **Number 3:**

  Similar to the above steps, 3 will also enter a loop and is not a happy number.

- **Number 4:**

  Similar to the above steps, 4 will also enter a loop and is not a happy number.

- **Number 5:**

  Similar to the above steps, 5 will also enter a loop and is not a happy number.

- **Number 6:**

  Similar to the above steps, 6 will also enter a loop and is not a happy number.

- **Number 7:**

  $[7^2 = 49]$
  $[4^2 + 9^2 = 97]$
  $[9^2 + 7^2 = 130]$
  $[1^2 + 3^2 + 0^2 = 10]$
  $[1^2 + 0^2 = 1]$
  
  Since we have reached 1, the process stops here. 7 is a happy number.

- **Number 8:**

  Similar to the above steps, 8 will also enter a loop and is not a happy number.

- **Number 9:**

  Similar to the above steps, 9 will also enter a loop and is not a happy number.

Based on this analysis, the numbers less than 10 that result in 1 when you repeatedly sum the squares of their digits are: 1 and 7.

### Implementation

#### Code (C++):

```cpp
#include <iostream>

class Solution {
public:
    bool solve(int n) {
        if (n == 1 || n == 7) return true;
        if (n == 2 || n == 4 || n == 8 || n == 3 || n == 9 || n == 5 || n == 6) return false;
        int sq_sum = 0;
        while (n) {
            int x = n % 10;
            sq_sum += (x * x);
            n /= 10;
        }
        return solve(sq_sum);
    }

    int nextHappy(int n) {
        while (true) {
            n++;
            if (solve(n)) return n;
        }
    }
};

int main() {
    Solution sol;
    int N = 8;
    std::cout << "Next happy number after " << N << " is: " << sol.nextHappy(N) << std::endl;
    return 0;
}

```

#### Code(Python)

```python
class Solution:
    def solve(self, n: int) -> bool:
        if n == 1 or n == 7:
            return True
        if n in {2, 4, 8, 3, 9, 5, 6}:
            return False
        sq_sum = 0
        while n > 0:
            x = n % 10
            sq_sum += (x * x)
            n //= 10
        return self.solve(sq_sum)

    def nextHappy(self, n: int) -> int:
        while True:
            n += 1
            if self.solve(n):
                return n

# Example usage
sol = Solution()
N = 8
print(f"Next happy number after {N} is: {sol.nextHappy(N)}")

```

#### Code (Java)

```java
public class Solution {
    public boolean solve(int n) {
        if (n == 1 || n == 7) return true;
        if (n == 2 || n == 4 || n == 8 || n == 3 || n == 9 || n == 5 || n == 6) return false;
        int sq_sum = 0;
        while (n > 0) {
            int x = n % 10;
            sq_sum += (x * x);
            n /= 10;
        }
        return solve(sq_sum);
    }

    public int nextHappy(int n) {
        while (true) {
            n++;
            if (solve(n)) return n;
        }
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int N = 8;
        System.out.println("Next happy number after " + N + " is: " + sol.nextHappy(N));
    }
}

```

### Complexity

- **Time Complexity:** $O(klog_{10}N)$ due to the operations on digits of the numbers.

#### Explanation :

- We will be able to determine whether a number is happy or not after recursively calling the solve function and adding the square of its digits for a maximum of 15-20 times (you can check for any random value less than 10^5). Let's denote this value as x.
- The time taken to add the square of the digits is log10(n). Furthermore, as we are checking until we find the happy number, let's denote the number of iterations as c = (happy number>n) -n
- Let's denote x\*c=k;
  Therefore, TC: (klog10(n))
- The value of k won't even reach 10^4 or 10^5. You can try this approach with any random value.

- **Space Complexity:** $O(1)$ since we only use a fixed amount of extra space for the set to store seen numbers.

## Conclusion

To find the next Happy Number after a given integer N, we can implement a solution that iteratively checks each number greater than N until a Happy Number is found. This solution efficiently identifies Happy Numbers using a helper function to compute the sum of squares of digits and a set to track previously seen numbers to avoid infinite loops.

## References

- **GeeksforGeeks Problem:** [Geeks for Geeks Problem](https://www.geeksforgeeks.org/problems/fibonacci-sum/0)
- **Solution Link:** [Fibonacci Sum on Geeks for Geeks](https://www.geeksforgeeks.org/problems/fibonacci-sum/0)
- **Authors GeeksforGeeks Profile:** [Vipul](https://www.geeksforgeeks.org/user/lakumvipwjge/)

