---
id: super-ugly-number
title: Super Ugly Number (LeetCode)
sidebar_label: 0313-Super Ugly Number
tags:
  - Array
  - Math
  - Dynammic Programming
description: This is the solution of question Super Ugly Number on leetcode
sidebar_position: 0313
---

## Problem Description

A super ugly number is a positive integer whose prime factors are in the array primes.

Given an integer `n` and an array of integers primes, return the `nth` super ugly number.

The `nth` super ugly number is guaranteed to fit in a 32-bit signed integer.

### Example 1

```
Input: n = 12, primes = [2,7,13,19]
Output: 32
Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19].

```

### Example 2

```
Input: n = 1, primes = [2,3,5]
Output: 1
Explanation: 1 has no prime factors, therefore all of its prime factors are in the array primes = [2,3,5].

```

### Constraints

- `1 <= n <= 10^5`
- `1 <= primes.length <= 100`
- `2 <= primes[i] <= 1000`
- `primes[i] is guaranteed to be a prime number.`
- `All the values of primes are unique and sorted in ascending order.`


## Approach
To solve the problem of finding the nth super ugly number given a list of prime numbers, here's the approach I would take:
1. Initialize a list or array to store the super ugly numbers.
2. Since the first super ugly number is always 1, add it to the list.
3. Create a separate list to keep track of the indices for each prime number in the given list. Initialize all indices to 0.
4. Iterate from `1` to `n` (exclusive) to find the remaining super ugly numbers.
For each iteration:
a. Find the minimum value among the products of each prime number with its corresponding super ugly number at the respective index.
b. Add the minimum value to the list of super ugly numbers.
c. Update the indices for the prime numbers that contributed to the minimum value by incrementing them.
d. Repeat steps a-c until all n super ugly numbers are found.
Return the nth super ugly number from the list.
This approach takes advantage of the fact that each super ugly number can be obtained by multiplying a prime number with a previously generated super ugly number. By keeping track of the indices for each prime number, we can efficiently generate the super ugly numbers in ascending order.

### Solution Code

#### Python

```python
class Solution(object):
    def nthSuperUglyNumber(self, n, primes):
        size = len(primes)
        ugly, dp, index, ugly_nums = 1, [1], [0] * size, [1] * size
        for i in range(1, n):
            # compute possibly ugly numbers and update index
            for j in range(0, size):
                if ugly_nums[j] == ugly:
                    ugly_nums[j] = dp[index[j]] * primes[j]
                    index[j] += 1
            # get the minimum
            ugly = min(ugly_nums)
            dp.append(ugly)
        return dp[-1]

```

#### C++
```c++
// Finds the nth super ugly number given a list of prime numbers.

class Solution {
public:
    int nthSuperUglyNumber(int n, vector<int>& primes) {
        if (n == 1)
            return 1;

        int numPrimes = primes.size();  // Number of prime numbers
        vector<int> primeIndices(numPrimes, 0);  // Indices to track prime number multiples

        int superUgly[n];  // Array to store super ugly numbers
        // memset(superUgly, 0, sizeof(superUgly));  // Initialize the array (commented out since it's unnecessary)
        superUgly[0] = 1;  // First super ugly number is always 1

        for (int i = 1; i < n; i++) {
            long minVal = INT_MAX;  // Minimum value among the prime number multiples

            // Find the minimum value among the prime number multiples
            for (int j = 0; j < numPrimes; j++) {
                minVal = min(minVal, (long)primes[j] * superUgly[primeIndices[j]]);
            }

            superUgly[i] = (int)minVal;  // Store the minimum value as the next super ugly number

            // Increment the indices for prime number multiples that contribute to the minimum value
            for (int j = 0; j < numPrimes; j++) {
                if (minVal == (long)primes[j] * superUgly[primeIndices[j]]) {
                    primeIndices[j]++;
                }
            }

            // cout<<superUgly[i]<<",";  // Print the current super ugly number (commented out for clarity)
        }

        return superUgly[n - 1];  // Return the nth super ugly number
    }
};

```

#### Java
```Java
public int nthSuperUglyNumber(int n, int[] primes) {
        int[] ugly = new int[n];
        int[] idx = new int[primes.length];
        int[] val = new int[primes.length];
        Arrays.fill(val, 1);

        int next = 1;
        for (int i = 0; i < n; i++) {
            ugly[i] = next;
            
            next = Integer.MAX_VALUE;
            for (int j = 0; j < primes.length; j++) {
                //skip duplicate and avoid extra multiplication
                if (val[j] == ugly[i]) val[j] = ugly[idx[j]++] * primes[j];
                //find next ugly number
                next = Math.min(next, val[j]);
            }
        }

        return ugly[n - 1];
    }
        
```




#### Conclusion
- Time Complexity
The time complexity is $o(kn)$.

- Space Complexity
The space complexity is $O(n)$.
