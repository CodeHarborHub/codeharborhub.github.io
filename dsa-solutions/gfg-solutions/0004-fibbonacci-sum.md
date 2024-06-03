---
id: fibonacci-sum
title: Fibonacci Sum (Geeks for Geeks)
sidebar_label: 0004 - Fibonacci Sum
tags:
  - intermediate
  - Fibonacci
  - Dynamic Programming
  - Mathematics
  - Algorithms
---

This tutorial contains a complete walk-through of the Fibonacci Sum problem from the Geeks for Geeks website. It features the implementation of the solution code in three programming languages: Python, C++, and Java.

## Problem Description

Given a positive number N, find the value of $f0 + f1 + f2 + ... + fN$ where fi indicates the ith Fibonacci number. Note that $f0 = 0, f1 = 1, f2 = 1, f3 = 2, f4 = 3, f5 = 5,$ and so on. Since the answer can be very large, return the result modulo $1000000007$.

## Examples

**Example 1:**

```
Input:
N = 3
Output:
4
Explanation:
0 + 1 + 1 + 2 = 4
```

**Example 2:**

```
Input:
N = 4
Output:
7
Explanation:
0 + 1 + 1 + 2 + 3 = 7
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `fibSum()` which takes an integer N as input parameter and returns the sum of all the Fibonacci numbers from f0 to fN.

Expected Time Complexity: $O(LogN)$  
Expected Auxiliary Space: $O(1)$

## Constraints

- $(1 \leq N \leq 100000)$

## Solution Approach

### Brute Force Approach

#### Intuition:

We can compute the sum of Fibonacci numbers from f0 to fN using a simple iterative method by adding up all Fibonacci numbers up to N.

#### Implementation:

1. Initialize `sum` to 0.
2. Use a loop to compute Fibonacci numbers up to N.
3. Add each Fibonacci number to `sum`.
4. Return the sum modulo $1000000007$.

#### Code (C++):

```cpp
#include <iostream>
#define MOD 1000000007
using namespace std;

class Solution {
public:
    int fibSum(int N) {
        if (N == 0) return 0;
        long long f0 = 0, f1 = 1, sum = 1;
        for (int i = 2; i <= N; ++i) {
            long long f2 = (f0 + f1) % MOD;
            sum = (sum + f2) % MOD;
            f0 = f1;
            f1 = f2;
        }
        return sum;
    }
};
```

### Complexity

- Time Complexity: $O(N)$, as we are iterating from 0 to N.
- Space Complexity: $O(1)$, as we are using a constant amount of extra space.

## Matrix Exponentiation Approach

#### Intuition:

To efficiently find the sum of the first N Fibonacci numbers, we use matrix exponentiation. By utilizing the transformation matrix and its properties, we can compute the required sum in logarithmic time.

#### Implementation:

1. Define a function to multiply two matrices.
2. Define a function to compute the power of a matrix.
3. Use the power function to compute the matrix exponentiation result.
4. Extract the result from the matrix to get the sum of the first N Fibonacci numbers.

#### Code (C++):

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    const int mod = 1e9 + 7;

    vector<vector<long long int>> multiply(vector<vector<long long int>>& a, vector<vector<long long int>>& b) {
        long long int n = a.size();
        vector<vector<long long int>> ans(n, vector<long long int>(n, 0));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    ans[i][j] = (ans[i][j] + (a[i][k] * b[k][j]) % mod) % mod;
                }
            }
        }
        return ans;
    }

    vector<vector<long long int>> power(vector<vector<long long int>>& F, long long int n) {
        if (n == 0) {
            long long int s = F.size();
            vector<vector<long long int>> ans(s, vector<long long int>(s, 0));
            for (int i = 0; i < s; i++) {
                ans[i][i] = 1;
            }
            return ans;
        }
        if (n == 1) {
            return F;
        }
        vector<vector<long long int>> temp = power(F, n / 2);
        vector<vector<long long int>> ans = multiply(temp, temp);
        if (n % 2 != 0) {
            ans = multiply(ans, F);
        }
        return ans;
    }

    long long int fibSum(long long int N) {
        vector<vector<long long int>> a = {{1, 1, 1}, {0, 1, 1}, {0, 1, 0}};
        vector<vector<long long int>> ans = power(a, N);
        return ans[0][2];
    }
};
```

#### Code (Python):

```python
class Solution:
    MOD = int(1e9 + 7)

    def multiply(self, a, b):
        n = len(a)
        ans = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                for k in range(n):
                    ans[i][j] = (ans[i][j] + a[i][k] * b[k][j]) % self.MOD
        return ans

    def power(self, F, n):
        if n == 0:
            s = len(F)
            ans = [[0] * s for _ in range(s)]
            for i in range(s):
                ans[i][i] = 1
            return ans
        if n == 1:
            return F
        temp = self.power(F, n // 2)
        ans = self.multiply(temp, temp)
        if n % 2 != 0:
            ans = self.multiply(ans, F)
        return ans

    def fibSum(self, N):
        a = [[1, 1, 1], [0, 1, 1], [0, 1, 0]]
        ans = self.power(a, N)
        return ans[0][2]

# Example usage:
solution = Solution()
print(solution.fibSum(5))  # Output the sum of the first 5 Fibonacci numbers
```

#### Code (Java):

```java
import java.util.Arrays;

class Solution {
    private static final int MOD = 1000000007;

    private long[][] multiply(long[][] a, long[][] b) {
        int n = a.length;
        long[][] ans = new long[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    ans[i][j] = (ans[i][j] + a[i][k] * b[k][j]) % MOD;
                }
            }
        }
        return ans;
    }

    private long[][] power(long[][] F, long n) {
        int size = F.length;
        long[][] ans = new long[size][size];
        for (int i = 0; i < size; i++) {
            ans[i][i] = 1;
        }
        if (n == 0) return ans;
        if (n == 1) return F;

        long[][] temp = power(F, n / 2);
        ans = multiply(temp, temp);
        if (n % 2 != 0) {
            ans = multiply(ans, F);
        }
        return ans;
    }

    public long fibSum(long N) {
        long[][] a = {{1, 1, 1}, {0, 1, 1}, {0, 1, 0}};
        long[][] ans = power(a, N);
        return ans[0][2];
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.fibSum(5));  // Output the sum of the first 5 Fibonacci numbers
    }
}
```

#### Complexity:

- Time Complexity: $O(logN)$, due to matrix exponentiation.
- Space Complexity: $O(logN)$, for recursive stack

## Conclusion

The problem of finding the sum of the first N Fibonacci numbers can be efficiently solved using matrix exponentiation, reducing the time complexity to logarithmic time $O(\log N)$. This approach ensures that even for large values of N, the computation remains feasible and efficient. The provided implementations in C++, Java, and Python demonstrate the versatility of the matrix exponentiation technique across different programming languages.

By leveraging the properties of Fibonacci numbers and matrix multiplication, we can achieve optimal performance for this problem, making it suitable for large input sizes as specified in the constraints.

## References

- **GeeksforGeeks Problem:** [Geeks for Geeks Problem](https://www.geeksforgeeks.org/problems/fibonacci-sum/0)
- **Solution Link:** [Fibonacci Sum on Geeks for Geeks](https://www.geeksforgeeks.org/problems/fibonacci-sum/0)
- **Authors GeeksforGeeks Profile:** [Vipul](https://www.geeksforgeeks.org/user/lakumvipwjge/)
