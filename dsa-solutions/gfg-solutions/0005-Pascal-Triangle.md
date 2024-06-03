---

id: pascal-triangle
title: Pascal Triangle Solution
sidebar_label: 0005 - Pascal Triangle 
tags:
  - Pascal Triangle
  - Dynamic Programming
  - Mathematics
  - Binomial Coefficient
  - JavaScript
  - TypeScript
  - Python
  - Java
  - C++
description: "This is a solution to the Pascal Triangle Row problem."

---

In this page, we will solve the Pascal Triangle Row problem using different approaches: dynamic programming and mathematical. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

Given a positive integer N, return the Nth row of Pascal's triangle. Pascal's triangle is a triangular array of the binomial coefficients formed by summing up the elements of the previous row. The elements can be large so return it modulo $(10^9 + 7)$.

### Examples

**Example 1:**

```plaintext
Input: N = 4
Output: 1 3 3 1
Explanation: 4th row of Pascal's triangle is 1 3 3 1.
```

**Example 2:**

```plaintext
Input: N = 5
Output: 1 4 6 4 1
Explanation: 5th row of Pascal's triangle is 1 4 6 4 1.
```

### Constraints

- `1 <= N <= 10^3`

---

## Solution for Pascal Triangle Row Problem

### Intuition and Approach

The problem can be solved using dynamic programming or a mathematical approach. The dynamic programming approach is more intuitive and builds the entire triangle row by row. The mathematical approach leverages the properties of binomial coefficients.

<Tabs>
 <tabItem value="Dynamic Programming" label="Dynamic Programming">

### Approach 1: Dynamic Programming

The dynamic programming approach involves building the Pascal's triangle row by row until the desired row is reached.

#### Implementation

```jsx live
function nthRowOfPascalTriangle() {
  const N = 4;
  const MOD = 1000000007;

  const generate = function(N) {
    const row = [1];
    for (let i = 1; i < N; i++) {
      row[i] = (row[i - 1] * (N - i) / i) % MOD;
    }
    return row;
  };

  const result = generate(N);
  return (
    <div>
      <p>
        <b>Input:</b> N = {N}
      </p>
      <p>
        <b>Output:</b> {JSON.stringify(result)}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function nthRowOfPascalTriangle(N) {
      const MOD = 1000000007;
      const row = [1];
      for (let i = 1; i < N; i++) {
        row[i] = (row[i - 1] * (N - i) / i) % MOD;
      }
      return row;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function nthRowOfPascalTriangle(N: number): number[] {
      const MOD = 1000000007;
      const row: number[] = [1];
      for (let i = 1; i < N; i++) {
        row[i] = (row[i - 1] * (N - i) / i) % MOD;
      }
      return row;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def nthRowOfPascalTriangle(self, N: int) -> List[int]:
            MOD = 1000000007
            row = [1]
            for i in range(1, N):
                row.append((row[-1] * (N - i) // i) % MOD)
            return row
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.ArrayList;
    import java.util.List;

    class Solution {
        public List<Integer> nthRowOfPascalTriangle(int N) {
            final int MOD = 1000000007;
            List<Integer> row = new ArrayList<>();
            row.add(1);
            for (int i = 1; i < N; i++) {
                row.add((int)((long)row.get(i - 1) * (N - i) / i % MOD));
            }
            return row;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>

    using namespace std;

    class Solution {
    public:
        vector<int> nthRowOfPascalTriangle(int N) {
            const int MOD = 1000000007;
            vector<int> row(1, 1);
            for (int i = 1; i < N; i++) {
                row.push_back((long long)row[i - 1] * (N - i) / i % MOD);
            }
            return row;
        }
    };
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(N^2)$$
- Space Complexity: $$O(N)$$

</tabItem>
<tabItem value="Mathematical" label="Mathematical">

### Approach 2: Mathematical (Binomial Coefficient)

The mathematical approach leverages the properties of binomial coefficients to directly compute each element in the Nth row of Pascal's triangle. The value of the element at the ith position is calculated using the formula:

$[
\text{Value} = \binom{i}{j} = \frac{i!}{j! \cdot (i - j)!}
]$
#### Implementation

```jsx live
function nthRowOfPascalTriangle() {
  const N = 5;
  const MOD = 1000000007;

  const generate = function(N) {
    const row = [];
    const factorial = (n) => {
      if (n === 0) return 1;
      let fact = 1;
      for (let i = 1; i <= n; i++) {
        fact = (fact * i) % MOD;
      }
      return fact;
    };

    const binomialCoeff = (n, k) => {
      return (factorial(n) / (factorial(k) * factorial(n - k))) % MOD;
    };

    for (let i = 0; i < N; i++) {
      row.push(binomialCoeff(N - 1, i));
    }

    return row;
  };

  const result = generate(N);
  return (
    <div>
      <p>
        <b>Input:</b> N = {N}
      </p>
      <p>
        <b>Output:</b> {JSON.stringify(result)}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function nthRowOfPascalTriangle(N) {
      const MOD = 1000000007;
      const row = [];
      const factorial = (n) => {
        if (n === 0) return 1;
        let fact = 1;
        for (let i = 1; i <= n; i++) {
          fact = (fact * i) % MOD;
        }
        return fact;
      };

      const binomialCoeff = (n, k) => {
        return (factorial(n) / (factorial(k) * factorial(n - k))) % MOD;
      };

      for (let i = 0; i < N; i++) {
        row.push(binomialCoeff(N - 1, i));
      }

      return row;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function nthRowOfPascalTriangle(N: number): number[] {
      const MOD = 1000000007;
      const row: number[] = [];
      const factorial = (n: number): number => {
        if (n === 0) return 1;
        let fact = 1;
        for (let i = 1; i <= n; i++) {
          fact = (fact * i) % MOD;
        }
        return fact;
      };

      const binomialCoeff = (n: number, k: number): number => {
        return (factorial(n) / (factorial(k) * factorial(n - k))) % MOD;
      };

      for (let i = 0; i < N; i++) {
        row.push(binomialCoeff(N - 1, i));
      }

      return row;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@man

ishh12"/>
   ```python
    import math

    class Solution:
        def nthRowOfPascalTriangle(self, N: int) -> List[int]:
            MOD = 1000000007

            def factorial(n):
                if n == 0:
                    return 1
                fact = 1
                for i in range(1, n + 1):
                    fact = (fact * i) % MOD
                return fact

            def binomialCoeff(n, k):
                return (factorial(n) // (factorial(k) * factorial(n - k))) % MOD

            row = []
            for i in range(N):
                row.append(binomialCoeff(N - 1, i))
            
            return row
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.ArrayList;
    import java.util.List;

    class Solution {
        private static final int MOD = 1000000007;

        public List<Integer> nthRowOfPascalTriangle(int N) {
            List<Integer> row = new ArrayList<>();
            for (int i = 0; i < N; i++) {
                row.add(binomialCoeff(N - 1, i));
            }
            return row;
        }

        private int factorial(int n) {
            if (n == 0) return 1;
            long fact = 1;
            for (int i = 1; i <= n; i++) {
                fact = (fact * i) % MOD;
            }
            return (int) fact;
        }

        private int binomialCoeff(int n, int k) {
            return (int) ((factorial(n) / (factorial(k) * factorial(n - k))) % MOD);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <cmath>

    using namespace std;

    class Solution {
    public:
        vector<int> nthRowOfPascalTriangle(int N) {
            const int MOD = 1000000007;
            vector<int> row;
            for (int i = 0; i < N; i++) {
                row.push_back(binomialCoeff(N - 1, i, MOD));
            }
            return row;
        }

    private:
        int factorial(int n, const int MOD) {
            if (n == 0) return 1;
            long long fact = 1;
            for (int i = 1; i <= n; i++) {
                fact = (fact * i) % MOD;
            }
            return fact;
        }

        int binomialCoeff(int n, int k, const int MOD) {
            return (factorial(n, MOD) / (factorial(k, MOD) * factorial(n - k, MOD))) % MOD;
        }
    };
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(N^2)$$
- Space Complexity: $$O(N^2)$$

</tabItem>
</Tabs>

---

These are the two approaches to solve the Pascal's Triangle Row problem. Each approach has its own advantages and trade-offs in terms of time and space complexity. You can choose the one that best fits your requirements.


## References

- **GeeksforGeeks Problem:** [GeeksforGeeks Problem](https://www.geeksforgeeks.org/problems/pascal-triangle0652/0)
- **Solution Link:** [Pascal's Triangle Solution on GeeksforGeeks](https://www.geeksforgeeks.org/problems/pascal-triangle0652/0)
- **Authors GeeksforGeeks Profile:** [Manish Kumar Gupta](https://www.geeksforgeeks.org/user/manishd5hla/)

---
