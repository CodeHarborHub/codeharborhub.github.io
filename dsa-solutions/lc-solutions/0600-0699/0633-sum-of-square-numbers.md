---
id: sum-of-square-numbers
title:   Sum of Square Numbers
sidebar_label: 0633. Sum of Square Numbers

tags:
- numbers
- C++
- Java
- Python
- Javascript
- Binary Search
- Sum of Square Numbers

description: "This is a solution to the Sum of Square Numbers problem on LeetCode."
---

## Problem Description
Given a non-negative integer c, decide whether there're two integers `a` and `b` such that `a^2 + b^2 = c`.

### Examples

**Example 1:**
```
Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
```

**Example 2:**
```
Input: s = c = 3
Output: false
```

### Constraints
- `0 <= c <= 231 - 1`


## Solution for Sum of Square Numbers
### Approach 
#### Brute Force 
- Iterate over all possible values of `a` from `0` to `sqrt(c)`.
- For each value of `a`, iterate over all possible values of `b` from `0` to `sqrt(c)`.
- Check if `a^2 + b^2`equals `c`.
- If such a pair `(a, b)` is found, return `true`.
- If no such pair is found after all iterations, return `false`.

**Implementation:**
```python
def judgeSquareSum(c: int) -> bool:
    for a in range(int(c**0.5) + 1):
        for b in range(int(c**0.5) + 1):
            if a * a + b * b == c:
                return True
    return False
```

**Complexity:**
- Time Complexity: `O(c)`, since we iterate over all pairs `(a, b)` up to `sqrt(c)`.
- Space Complexity: O(1), as we only use a constant amount of extra space.


#### Optimized Approach 
- Iterate over possible values of `a` from `0` to `sqrt(c)`.
- For each value of `a`, calculate `b^2 = c - a^2`.
- Check if `b^2` is a perfect square.
- If `b^2` is a perfect square, return `true`.
- If no such pair `(a, b)` is found, return `false`.


**Implementation:**

```python
import math

def judgeSquareSum(c: int) -> bool:
    def is_square(n: int) -> bool:
        root = int(math.sqrt(n))
        return n == root * root

    for a in range(int(math.sqrt(c)) + 1):
        b_squared = c - a * a
        if is_square(b_squared):
            return True
    return False

# Example Usage
c = 5
print(judgeSquareSum(c))  # Output: True, because 1^2 + 2^2 = 5
```

**Complexity:**
- Time Complexity: `O(Sqrt(logc))`, where `sqrt` and `is_square` checks are logarithmic in terms of their input sizes.
- Space Complexity: O(1)  as we only use a constant amount of extra space.

**Corner Cases:**
- Zero Input: If `c = 0`, the output should be `true` since `0^2 + 0^2 = 0`.
- Small Inputs: For small values of `c` such as `1, 2, 3,` ensure correct handling.
- Large Inputs: Ensure that the solution handles large values of `c` efficiently.
- Prime Numbers: Check behavior when `c` is a prime number, as prime numbers cannot be expressed as a sum of squares except for specific primes.


<Tabs>
  <TabItem value="Solution" label="Solution">

#### Implementation

    ```jsx live
    function Solution() {
      const judgeSquareSum = function(c) {
        const isSquare = (n) => {
            const root = Math.floor(Math.sqrt(n));
            return n === root * root;
        };

        for (let a = 0; a * a <= c; a++) {
            const bSquared = c - a * a;
            if (isSquare(bSquared)) {
                return true;
            }
        }
        return false;
      };

      const input = 5
      const output = judgeSquareSum(input)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {JSON.stringify(output)}
          </p>
        </div>
      );
    }
    ```

#### Complexity Analysis
- Time Complexity: `O(Sqrt(logc))`, where `sqrt` and `is_square` checks are logarithmic in terms of their input sizes.
- Space Complexity: `O(1)` as we only use a constant amount of extra space.

  ## Code in Different Languages

   <Tabs>

  <TabItem value="JavaScript" label="JavaScript">
    <SolutionAuthor name="@vansh-codes" />

   ```javascript
    var judgeSquareSum = function(c) {
        const isSquare = (n) => {
            const root = Math.floor(Math.sqrt(n));
            return n === root * root;
        };

        for (let a = 0; a * a <= c; a++) {
            const bSquared = c - a * a;
            if (isSquare(bSquared)) {
                return true;
            }
        }
        return false;
    };
    ```

  </TabItem>

  <TabItem value="TypeScript" label="TypeScript">
    <SolutionAuthor name="@vansh-codes" /> 

   ```typescript
    function judgeSquareSum(c: number): boolean {
        const isSquare = (n: number): boolean => {
            const root = Math.floor(Math.sqrt(n));
            return n === root * root;
        };

        for (let a = 0; a * a <= c; a++) {
            const bSquared = c - a * a;
            if (isSquare(bSquared)) {
                return true;
            }
        }
        return false;
    };
    ```

  </TabItem>

  <TabItem value="Python" label="Python">
    <SolutionAuthor name="@vansh-codes" />

   ```python
    class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        def isSquare(n: int) -> bool:
            root = int(n**0.5)
            return n == root * root

        for a in range(int(c**0.5) + 1):
            b_squared = c - a * a
            if isSquare(b_squared):
                return True
        return False
    ```

  </TabItem>

  <TabItem value="Java" label="Java">
    <SolutionAuthor name="@vansh-codes" />

   ```java
    class Solution {
        public boolean judgeSquareSum(int c) {
            for (int a = 0; a * a <= c; a++) {
                int bSquared = c - a * a;
                if (isSquare(bSquared)) {
                    return true;
                }
            }
            return false;
        }

        private boolean isSquare(int n) {
            int root = (int) Math.sqrt(n);
            return n == root * root;
        }
    }
    ```

  </TabItem>

  <TabItem value="C++" label="C++">
    <SolutionAuthor name="@vansh-codes" />

   ```cpp
   class Solution {
    public:
        bool judgeSquareSum(int c) {
            auto isSquare = [](long long n) {
                long long root = static_cast<long long>(sqrt(n));
                return n == root * root;
            };

            for (long long a = 0; a * a <= c; a++) {
                long long bSquared = c - a * a;
                if (isSquare(bSquared)) {
                    return true;
                }
            }
            return false;
        }
    };

    ```

    </TabItem>
    </Tabs>

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Squares of a Sorted Array](https://leetcode.com/problems/sum-of-square-numbers/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/sum-of-square-numbers/solutions/)  