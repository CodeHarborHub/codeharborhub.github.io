---

id: two-repeated-elements
title: Two Repeated Elements Solution
sidebar_label: 0009 - Two Repeated Elements 
tags:
  - Array
  - Hashing
  - Mathematics
  - Bit Manipulation
  - JavaScript
  - TypeScript
  - Python
  - Java
  - C++
description: "This is a solution to the Two Repeated Elements problem."

---

In this page, we will solve the Two Repeated Elements problem using different approaches: hashing, mathematical, and bit manipulation. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, and C++.

## Problem Description

You are given an integer `n` and an integer array `arr` of size `n+2`. All elements of the array are in the range from `1` to `n`. Also, all elements occur once except two numbers which occur twice. Find the two repeating numbers.

### Examples

**Example 1:**

```plaintext
Input: n = 4, arr = [4, 2, 4, 5, 2, 3, 1]
Output: [4, 2]
Explanation: 4 and 2 occur twice.
```

**Example 2:**

```plaintext
Input: n = 2, arr = [1, 2, 1, 2]
Output: [1, 2]
Explanation: 1 and 2 occur twice.
```

### Constraints

- `1 <= n <= 10^5`
- The array `arr` has a length of `n + 2`.

---

## Solution for Two Repeated Elements Problem

### Intuition and Approach

The problem can be solved using different approaches such as hashing, mathematical properties, and bit manipulation.

<Tabs>
 <tabItem value="Hashing" label="Hashing">

### Approach 1: Hashing

The hashing approach involves using a hash set to keep track of the elements that have been seen so far.

#### Implementation

```jsx live
function findTwoRepeatedElements() {
  const n = 4;
  const arr = [4, 2, 4,2, 3, 1];

  const findRepeating = (n, arr) => {
    const seen = new Set();
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (seen.has(arr[i])) {
        result.push(arr[i]);
        if (result.length === 2) break;
      } else {
        seen.add(arr[i]);
      }
    }

    return result;
  };

 const result = findRepeating(n, arr);
  return (
    <div>
      <p>
        <b>Input:</b> n = {n}, arr = [{arr.join(", ")}]
      </p>
      <p>
        <b>Output:</b> [{result.join(", ")}]
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
    function findTwoRepeated(arr) {
      const n = arr.length - 2;
      const seen = new Set();
      const result = [];

      for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
          result.push(arr[i]);
          if (result.length === 2) break;
        } else {
          seen.add(arr[i]);
        }
      }

      return result;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
    <SolutionAuthor name="@manishh12"/>
   ```typescript
    function findTwoRepeated(arr: number[]): number[] {
      const n = arr.length - 2;
      const seen = new Set<number>();
      const result: number[] = [];

      for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
          result.push(arr[i]);
          if (result.length === 2) break;
        } else {
          seen.add(arr[i]);
        }
      }

      return result;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    def findTwoRepeated(arr):
        seen = set()
        result = []

        for num in arr:
            if num in seen:
                result.append(num)
                if len(result) == 2:
                    break
            else:
                seen.add(num)

        return result
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.*;

    class Solution {
        public int[] findTwoRepeated(int[] arr) {
            Set<Integer> seen = new HashSet<>();
            int[] result = new int[2];
            int index = 0;

            for (int num : arr) {
                if (seen.contains(num)) {
                    result[index++] = num;
                    if (index == 2) break;
                } else {
                    seen.add(num);
                }
            }

            return result;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <unordered_set>

    using namespace std;

    class Solution {
    public:
        vector<int> findTwoRepeated(vector<int>& arr) {
            unordered_set<int> seen;
            vector<int> result;

            for (int num : arr) {
                if (seen.count(num)) {
                    result.push_back(num);
                    if (result.size() == 2) break;
                } else {
                    seen.insert(num);
                }
            }

            return result;
        }
    };
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(n)$$

</tabItem>
<tabItem value="Mathematical" label="Mathematical">

### Approach 2: Mathematical

The mathematical approach involves using the sum and sum of squares formulas to find the repeating numbers.

#### Implementation

```jsx live
function findTwoRepeatedElements() {
  const n = 4;
  const arr = [4, 2, 4, 2, 3, 1];

  const findRepeating = (n, arr) => {
    const totalSum = (n * (n + 1)) / 2;
    const totalSumSquare = (n * (n + 1) * (2 * n + 1)) / 6;

    let sum = 0;
    let sumSquare = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      sumSquare += arr[i] * arr[i];
    }

    const sumDiff = sum - totalSum; // x + y
    const sumSquareDiff = sumSquare - totalSumSquare; // x^2 + y^2

    const sumProduct = (sumDiff * sumDiff - sumSquareDiff) / 2; // xy
    const discriminant = Math.sqrt(sumDiff * sumDiff - 4 * sumProduct);

    const x = (sumDiff + discriminant) / 2;
    const y = (sumDiff - discriminant) / 2;

    return [x, y];
  };

  const result = findRepeating(n, arr);
  return (
    <div>
      <p>
        <b>Input:</b> n = {n}, arr = [{arr.join(", ")}]
      </p>
      <p>
        <b>Output:</b> [{result.join(", ")}]
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
   function findTwoRepeatedElements(n, arr) {
  const totalSum = (n * (n + 1)) / 2;
  const totalSumSquare = (n * (n + 1) * (2 * n + 1)) / 6;

  let sum = 0;
  let sumSquare = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sumSquare += arr[i] * arr[i];
  }

  const sumDiff = sum - totalSum; // x + y
  const sumSquareDiff = sumSquare - totalSumSquare; // x^2 + y^2

  const sumProduct = (sumDiff * sumDiff - sumSquareDiff) / 2; // xy
  const discriminant = Math.sqrt(sumDiff * sumDiff - 4 * sumProduct);

  const x = (sumDiff + discriminant) / 2;
  const y = (sumDiff - discriminant) / 2;

  return [x, y];
}
```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function findTwoRepeatedElements(n: number, arr: number[]): number[] {
  const totalSum: number = (n * (n + 1)) / 2;
  const totalSumSquare: number = (n * (n + 1) * (2 * n + 1)) / 6;

  let sum: number = 0;
  let sumSquare: number = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sumSquare += arr[i] * arr[i];
  }

  const sumDiff: number = sum - totalSum; // x + y
  const sumSquareDiff: number = sumSquare - totalSumSquare; // x^2 + y^2

  const sumProduct: number = (sumDiff * sumDiff - sumSquareDiff) / 2; // xy
  const discriminant: number = Math.sqrt(sumDiff * sumDiff - 4 * sumProduct);

  const x: number = (sumDiff + discriminant) / 2;
  const y: number = (sumDiff - discriminant) / 2;

  return [x, y];
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    from math import sqrt

def findTwoRepeatedElements(n, arr):
    totalSum = (n * (n + 1)) // 2
    totalSumSquare = (n * (n + 1) * (2 * n + 1)) // 6

    sumVal = 0
    sumSquare = 0

    for i in arr:
        sumVal += i
        sumSquare += i * i

    sumDiff = sumVal - totalSum  # x + y
    sumSquareDiff = sumSquare - totalSumSquare  # x^2 + y^2

    sumProduct = (sumDiff * sumDiff - sumSquareDiff) // 2  # xy
    discriminant = int(sqrt(sumDiff * sumDiff - 4 * sumProduct))

    x = (sumDiff + discriminant) // 2
    y = (sumDiff - discriminant) // 2

    return [x, y]

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
   import java.util.*;

class Main {
    public static List<Integer> findTwoRepeatedElements(int n, int[] arr) {
        int totalSum = (n * (n + 1)) / 2;
        int totalSumSquare = (n * (n + 1) * (2 * n + 1)) / 6;

        int sum = 0;
        int sumSquare = 0;

        for (int i : arr) {
            sum += i;
            sumSquare += i * i;
        }

        int sumDiff = sum - totalSum; // x + y
        int sumSquareDiff = sumSquare - totalSumSquare; // x^2 + y^2

        int sumProduct = (sumDiff * sumDiff - sumSquareDiff) / 2; // xy
        int discriminant = (int) Math.sqrt(sumDiff * sumDiff - 4 * sumProduct);

        int x = (sumDiff + discriminant) / 2;
        int y = (sumDiff - discriminant) / 2;

        List<Integer> result = new ArrayList<>();
        result.add(x);
        result.add(y);
        return result;
    }



    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

vector<int> findTwoRepeatedElements(int n, vector<int>& arr) {
    const int totalSum = (n * (n + 1)) / 2;
    const int totalSumSquare = (n * (n + 1) * (2 * n + 1)) / 6;

    int sum = 0;
    int sumSquare = 0;

    for (int i = 0; i < arr.size(); i++) {
        sum += arr[i];
        sumSquare += arr[i] * arr[i];
    }

    const int sumDiff = sum - totalSum; // x + y
    const int sumSquareDiff = sumSquare - totalSumSquare; // x^2 + y^2

    const int sumProduct = (sumDiff * sumDiff - sumSquareDiff) / 2; // xy
    const int discriminant = sqrt(sumDiff * sumDiff - 4 * sumProduct);

    const int x = (sumDiff + discriminant) / 2;
    const int y = (sumDiff - discriminant) / 2;

    return {x, y};
}



    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$

</tabItem>
<tabItem value="Bit Manipulation" label="Bit Manipulation">

### Approach 3: Bit Manipulation

The bit manipulation approach uses XOR to find the two repeating numbers.

#### Implementation

```jsx live
function findTwoRepeatedElements() {
  const n = 4;
  const arr = [4, 2, 4, 2, 3, 1];

  const findRepeating = (n, arr) => {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
      xor ^= arr[i];
    }
    for (let i = 1; i <= n; i++) {
      xor ^= i;
    }

    const setBit = xor & ~(xor - 1);
    let x = 0, y = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] & setBit) {
        x ^= arr[i];
      } else {
        y ^= arr[i];
      }
    }
    for (let i = 1; i <= n; i++) {
      if (i & setBit) {
        x ^= i;
      } else {
        y ^= i;
      }
    }

    let first = 0, second = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        first = x;
        second = y;
        break;
      }
      if (arr[i] === y) {
        first = y;
        second = x;
        break;
      }
    }

    return [first, second];
  };

  const result = findRepeating(n, arr);
  return (
    <div>
      <p>
        <b>Input:</b> n = {n}, arr = [{arr.join(", ")}]
      </p>
      <p>
        <b>Output:</b> [{result.join(", ")}]
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
    function findTwoRepeated(arr) {
      const n = arr.length - 2;
      let xor = 0;

      for (let i = 0; i < arr.length; i++) {
        xor ^= arr[i];
      }

      for (let i = 1; i <= n; i++) {
        xor ^= i;
      }

      const setBit = xor & -xor;
      let x = 0, y = 0;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] & setBit) {
          x ^= arr[i];
        } else {
          y ^= arr[i];
        }
      }

      for (let i = 1; i <= n; i++) {
        if (i & setBit) {
          x ^= i;
        } else {
          y ^= i;
        }
      }

      return [x, y];
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function findTwoRepeated(arr: number[]): number[] {
      const n = arr.length - 2;
      let xor = 0;

      for (let i = 0; i < arr.length; i++) {
        xor ^= arr[i];
      }

      for (let i = 1; i <= n; i++) {
        xor ^= i;
      }

      const setBit = xor & -xor;
      let x = 0, y = 0;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] & setBit) {
          x ^= arr[i];
        } else {
          y ^= arr[i];
        }
      }

      for (let i = 1; i <= n; i++) {
        if (i & setBit) {
          x ^= i;
        } else {
          y ^= i;
        }
      }

      return [x, y];
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    def findTwoRepeated(arr):
        n = len(arr) - 2
        xor = 0

        for num in arr:
            xor ^= num

        for i in range(1, n + 1):
            xor ^= i

        set_bit = xor & -xor
        x = y = 0

        for num in arr:
            if num & set_bit:
                x ^= num
            else:
                y ^= num

        for i in range(1, n + 1):
            if i & set_bit:
                x ^= i
            else:
                y ^= i

        return [x, y]
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int[] findTwoRepeated(int[] arr) {
            int n = arr.length - 2;
            int xor = 0;

            for (int num : arr) {
                xor ^= num;
            }

            for (int i = 1; i <= n; i++) {
                xor ^= i;
            }

            int setBit = xor & -xor;
            int x = 0, y = 0;

            for (int num : arr) {
                if ((num & setBit) != 0) {
                    x ^= num;
                } else {
                    y ^= num;
                }
            }

            for (int i = 1; i <= n; i++) {
                if ((i & setBit) != 0) {
                    x ^= i;
                } else {
                    y ^= i;
                }
            }

            return new int[]{x, y};
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
        vector<int> findTwoRepeated(vector<int>& arr) {
            int n = arr.size() - 2;
            int xorAll = 0;

            for (int num : arr) {
                xorAll ^= num;
            }

            for (int i = 1; i <= n; i++) {
                xorAll ^= i;
            }

            int setBit = xorAll & -xorAll;
            int x = 0, y = 0;

            for (int num : arr) {
                if (num & setBit) {
                    x ^= num;
                } else {
                    y ^= num;
                }
            }

            for (int i = 1; i <= n; i++) {
                if (i & setBit) {
                    x ^= i;
                } else {
                    y ^= i;
                }
            }

            return {x, y};
        }
    };
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$

</tabItem>
</Tabs>

:::tip

These are the three approaches to solve the Two Repeated Elements problem. Each approach has its own advantages and trade-offs in terms of time and space complexity. You can choose the one that best fits your requirements.

:::
## References

- **GeeksforGeeks Problem:** [GeeksforGeeks Problem](https://www.geeksforgeeks.org/problems/two-repeated-elements-1587115621/0)
- **Solution Link:** [Two Repeated Elements Solution on GeeksforGeeks](https://www.geeksforgeeks.org/problems/two-repeated-elements-1587115621/0)
- **Authors GeeksforGeeks Profile:** [Manish Kumar Gupta](https://www.geeksforgeeks.org/user/manishd5hla)

---