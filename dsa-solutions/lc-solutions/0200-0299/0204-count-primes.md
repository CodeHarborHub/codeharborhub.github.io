---
id: count-primes
title: Count Primes
sidebar_label: 0204 - Count Primes
tags:
- Array
- Math
- Enumeration
- Number Theory

description: "This is a solution to the Count Primes problem on LeetCode."
---

## Problem Description
Given an integer n, return the number of prime numbers that are strictly less than n.

### Examples

**Example 1:**
```
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

```
**Example 2:**
```
Input: n = 0
Output: 0
```
**Example 3:**
```
Input: n = 1
Output: 0
```

### Constraints
- `0 <= n <= 5 * 10^6`

## Solution for Count Primes Problem
  
### Brute Force 
- Iterate through all numbers from 2 up to n-1 (since we need to find primes less than n).
- For each number, check if it is a prime by counting its divisors.

<Tabs>
  <TabItem value="Brute Force" label="Brute Force">

#### Implementation

```jsx live
function primeCounter(n) {
 function isPrime(n) {
        let count = 0;
        if (n === 1) {
            return false;
        }
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                count++;
            }
        }
        if (count > 1) {
            return false;
        }
        return true;
    }

    function countPrimes(n) {
        let count = 0;
        for (let i = 2; i < n; i++) {
            if (isPrime(i)) {
                count++;
            }
        }
        return count;
    }

  const input = 10
  const output = countPrimes(input)
  return (
    <div>
      <p>
        <b>Input: </b>{ JSON.stringify(input)}
      </p>
      <p>
        <b>Output:</b> {output.toString()}
      </p>
    </div>
  );
}
```
#### Complexity Analysis

- Time Complexity: $ O(n^2) $ is the time complexity, because two nested loops are used , one is from 2 to n and second is used to check whether a number is prime or not which also takes $ O(n)$ complexity
- Space Complexity: $ O(1) $


### Optimized Approach - Sieve of Eratosthenes Algorithm
#### Intuition
The Sieve of Eratosthenes is an efficient algorithm to find all prime numbers up to a given limit n. The basic idea is to iteratively mark the multiples of each prime starting from 2. By the end of the algorithm, the numbers that remain unmarked are prime.

#### Steps
- Create a list of boolean values: Initialize an array is_prime of size n with all values set to true. is_prime[i] will be true if i is a prime number, false otherwise.
- Mark non-primes: Starting from the first prime number (2), mark all its multiples as non-prime. Move to the next number and repeat until you've processed numbers up to the square root of n.
- Count primes: The numbers which remain marked as true in the is_prime array are primes.

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
 function countPrimes(n) {
        if (n <= 2) return 0;

        // Step 1: Initialize the array with true values
        let is_prime = new Array(n).fill(true);
        is_prime[0] = is_prime[1] = false; // 0 and 1 are not primes

        // Step 2: Mark non-primes
        for (let i = 2; i * i < n; i++) {
            if (is_prime[i]) {
                for (let j = i * i; j < n; j += i) {
                    is_prime[j] = false;
                }
            }
        }

        // Step 3: Count primes
        let count = 0;
        for (let i = 2; i < n; i++) {
            if (is_prime[i]) {
                count++;
            }
        }
        return count;
    }


    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function countPrimes(n: number): number {
    if (n <= 2) return 0;

    // Step 1: Initialize the array with true values
    const isPrime: boolean[] = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not primes

    // Step 2: Mark non-primes
    for (let i = 2; i * i < n; ++i) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Step 3: Count primes
    let count = 0;
    for (let i = 2; i < n; ++i) {
        if (isPrime[i]) {
            ++count;
        }
    }
    return count;
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   def count_primes(n: int) -> int:
    if n <= 2:
        return 0

    # Step 1: Initialize the array with True values
    is_prime = [True] * n
    is_prime[0] = is_prime[1] = False  # 0 and 1 are not primes

    # Step 2: Mark non-primes
    for i in range(2, int(n ** 0.5) + 1):
        if is_prime[i]:
            for j in range(i * i, n, i):
                is_prime[j] = False

    # Step 3: Count primes
    count = sum(is_prime[2:])
    return count

    ```

  </TabItem>
 <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
```
public class Solution {
    public int countPrimes(int n) {
        if (n <= 2) return 0;

        // Step 1: Initialize the array with true values
        boolean[] isPrime = new boolean[n];
        for (int i = 2; i < n; i++) {
            isPrime[i] = true;
        }

        // Step 2: Mark non-primes
        for (int i = 2; i * i < n; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j < n; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        // Step 3: Count primes
        int count = 0;
        for (int i = 2; i < n; i++) {
            if (isPrime[i]) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.countPrimes(10)); // Output: 4 (primes are 2, 3, 5, 7)
    }
}

```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
    int countPrimes(int n) {
        if (n <= 2) return 0;

        // Step 1: Initialize the array with true values
        vector<bool> is_prime(n, true);
        is_prime[0] = is_prime[1] = false; // 0 and 1 are not primes

        // Step 2: Mark non-primes
        for (int i = 2; i * i < n; ++i) {
            if (is_prime[i]) {
                for (int j = i * i; j < n; j += i) {
                    is_prime[j] = false;
                }
            }
        }

        // Step 3: Count primes
        int count = 0;
        for (int i = 2; i < n; ++i) {
            if (is_prime[i]) {
                ++count;
            }
        }
        return count;
    }
    ```

  </TabItem>
  </Tabs>

#### Complexity Analysis
- Time Complexity: $ O(N*log(logn))$
 - Space Complexity: $ O(N)$
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Count Primes](https://leetcode.com/problems/count-primes/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/count-primes/solutions)

