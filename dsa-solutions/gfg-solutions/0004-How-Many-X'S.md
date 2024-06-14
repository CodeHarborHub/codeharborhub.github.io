---

id: how-many-xs
title: How Many Xs Solution
sidebar_label: 0004 - How Many Xs
tags:
  - Number Theory
  - Counting
  - Mathematics
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the How Many Xs problem."

---

In this page, we will solve the How Many Xs problem using different approaches: iterative and mathematical. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, and C++.

## Problem Description

You are given an integer `L`, `R`, and `X`.  Find the number of occurrences of `X `in all the numbers in the range `(L, R)` excluding `L` and `R`.
### Examples

**Example 1:**

```plaintext
Input: L = 10, R = 20, X = 1
Output: 10
Explanation: The digit 1 appears 11 times in numbers from 10 to 19.
```

**Example 2:**

```plaintext
Input: L = 100, R = 120, X = 2
Output: 2
Explanation: The digit 2 appears 3 times in numbers from 100 to 119.
```

### Constraints

- `0 <= L <= R <= 10^9`
- `0 <= X <= 9`

---

## Solution for How Many Xs Problem

### Intuition and Approach

The problem can be solved using different approaches such as iterative counting and mathematical properties.

<Tabs>
 <tabItem value="Iterative" label="Iterative">

### Approach 1: Iterative

The iterative approach involves iterating through each number in the range and counting the occurrences of the digit `X`.

#### Implementation

```jsx live
function countXs() {
  const L = 10;
  const R = 20;
  const X = 1;

  const countDigitOccurrences = (L, R, X) => {
    let count = 0;
    for (let i = L+1; i < R; i++) {
      let num = i;
      while (num > 0) {
        if (num % 10 === X) count++;
        num = Math.floor(num / 10);
      }
    }
    return count;
  };

  const result = countDigitOccurrences(L, R, X);
  return (
    <div>
      <p>
        <b>Input:</b> L = {L}, R = {R}, X = {X}
      </p>
      <p>
        <b>Output:</b> {result}
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
    function countDigitOccurrences(L, R, X) {
      let count = 0;
      for (let i = L+1; i < R; i++) {
        let num = i;
        while (num > 0) {
          if (num % 10 === X) count++;
          num = Math.floor(num / 10);
        }
      }
      return count;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function countDigitOccurrences(L: number, R: number, X: number): number {
      let count = 0;
      for (let i = L+1; i < R; i++) {
        let num = i;
        while (num > 0) {
          if (num % 10 === X) count++;
          num = Math.floor(num / 10);
        }
      }
      return count;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    def count_digit_occurrences(L, R, X):
        count = 0
        for i in range(L+1, R):
            num = i
            while num > 0:
                if num % 10 == X:
                    count += 1
                num //= 10
        return count
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int countDigitOccurrences(int L, int R, int X) {
            int count = 0;
            for (int i = L+1; i < R; i++) {
                int num = i;
                while (num > 0) {
                    if (num % 10 == X) {
                        count++;
                    }
                    num /= 10;
                }
            }
            return count;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <iostream>

    using namespace std;

    int countDigitOccurrences(int L, int R, int X) {
        int count = 0;
        for (int i = L+1; i < R; i++) {
            int num = i;
            while (num > 0) {
                if (num % 10 == X) {
                    count++;
                }
                num /= 10;
            }
        }
        return count;
    }
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O((R - L)*logR)$$
- Space Complexity: $$O(1)$$

</tabItem>
<tabItem value="Mathematical" label="Mathematical">

### Approach 2: Mathematical

The mathematical approach involves counting the occurrences of the digit `X` in the range without iterating through each number.

#### Implementation

```jsx live
function countXs() {
  const L = 10;
  const R = 20;
  const X = 1;

  const countOccurrences = (num, X) => {
    let count = 0, factor = 1, nextNum = 0, currentNum = 0;
    while (num / factor > 0) {
      currentNum = Math.floor((num / factor) % 10);
      nextNum = Math.floor(num / (factor * 10));
      count += nextNum * factor;
      if (currentNum > X) count += factor;
      else if (currentNum === X) count += num % factor + 1;
      factor *= 10;
    }
    return count;
  };

  const countX = (L, R, X) => {
    return countOccurrences(R - 1, X) - countOccurrences(L, X);
  };

  const result = countX(L, R, X);
  return (
    <div>
      <p>
        <b>Input:</b> L = {L}, R = {R}, X = {X}
      </p>
      <p>
        <b>Output:</b> {result}
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
    function countDigitOccurrences(num, X) {
      let count = 0, factor = 1, nextNum = 0, currentNum = 0;
      while (num / factor > 0) {
        currentNum = Math.floor((num / factor) % 10);
        nextNum = Math.floor(num / (factor * 10));
        count += nextNum * factor;
        if (currentNum > X) count += factor;
        else if (currentNum === X) count += num % factor + 1;
        factor *= 10;
      }
      return count;
    }

    function countX(L, R, X) {
      return countDigitOccurrences(R - 1, X) - countDigitOccurrences(L, X);
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function countDigitOccurrences(num: number, X: number): number {
      let count = 0, factor = 1, nextNum = 0, currentNum = 0;
      while (num / factor > 0) {
        currentNum = Math.floor((num / factor) % 10);
        nextNum = Math.floor(num / (factor * 10));
        count += nextNum * factor;
        if (currentNum > X) count += factor;
        else if (currentNum === X) count += num % factor + 1;
        factor *= 10;
      }
      return count;
    }

    function countX(L: number, R: number, X: number): number {
      return countDigitOccurrences(R - 1, X) - countDigitOccurrences(L, X);
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    def count_digit_occurrences(num, X):
        count = 0
        factor = 1
        while num // factor > 0:
            current_num = (num // factor) % 10
            next_num = num // (factor * 10)
            count

 += next_num * factor
            if current_num > X:
                count += factor
            elif current_num == X:
                count += num % factor + 1
            factor *= 10
        return count

    def count_X(L, R, X):
        return count_digit_occurrences(R - 1, X) - count_digit_occurrences(L , X)
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int countDigitOccurrences(int num, int X) {
            int count = 0, factor = 1, nextNum = 0, currentNum = 0;
            while (num / factor > 0) {
                currentNum = (num / factor) % 10;
                nextNum = num / (factor * 10);
                count += nextNum * factor;
                if (currentNum > X) {
                    count += factor;
                } else if (currentNum == X) {
                    count += num % factor + 1;
                }
                factor *= 10;
            }
            return count;
        }

        public int countX(int L, int R, int X) {
            return countDigitOccurrences(R - 1, X) - countDigitOccurrences(L , X);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <iostream>

    using namespace std;

    int countDigitOccurrences(int num, int X) {
        int count = 0, factor = 1, nextNum = 0, currentNum = 0;
        while (num / factor > 0) {
            currentNum = (num / factor) % 10;
            nextNum = num / (factor * 10);
            count += nextNum * factor;
            if (currentNum > X) {
                count += factor;
            } else if (currentNum == X) {
                count += num % factor + 1;
            }
            factor *= 10;
        }
        return count;
    }

    int countX(int L, int R, int X) {
        return countDigitOccurrences(R - 1, X) - countDigitOccurrences(L , X);
    }
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(\log_{10}(R))$$
- Space Complexity: $$O(1)$$

</tabItem>
</Tabs>

:::tip
The mathematical approach is more efficient for large ranges. Choose the method that best suits the given constraints.
:::
## References

- **GeeksforGeeks Problem:** [GeeksforGeeks Problem](https://www.geeksforgeeks.org/problems/how-many-xs4514/0)
- **Solution Link:** [How Many X's Solution on GeeksforGeeks](https://www.geeksforgeeks.org/problems/how-many-xs4514/0)
- **Authors GeeksforGeeks Profile:** [Manish Kumar Gupta](https://www.geeksforgeeks.org/user/manishd5hla)

---
