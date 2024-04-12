---
id: master-theorem
title: Master Theorem for Divide and Conquer Recurrences
sidebar_label: Master Theorem
sidebar_position: 3
description: "Master Theorem for solving divide and conquer recurrences. Explained with examples."
tags:
  [
    dsa,
    data-structures,
    algorithms,
    divide-and-conquer,
    master-theorem,
    recurrences,
  ]
---

Master Theorem is a popular technique to solve recurrence relations of divide and conquer algorithms. It provides a way to determine the time complexity of recursive algorithms. The theorem is used to solve recurrences of the form:

```plaintext title="Recurrence Relation"
T(n) = aT(n/b) + f(n)
```

where:

- `T(n)` is the time complexity of the algorithm.
- `a` is the number of subproblems in the recursion.
- `n/b` is the size of each subproblem.
- `f(n)` is the time complexity of the work done outside the recursive calls.
- `n` is the size of the input.
- `a >= 1` and `b > 1` are constants.
- `f(n)` is a function that is asymptotically positive.
- `T(n)` is defined on non-negative integers.
- The recurrence relation is defined for `n >= n0` for some constant `n0`.

The Master Theorem provides a way to determine the time complexity of the algorithm based on the values of `a`, `b`, and `f(n)`.

## Master Theorem Cases {#master-theorem-cases}

The Master Theorem has three cases based on the comparison of `f(n)` with `n^log_b(a)`:

1. **Case 1**: If `f(n) = O(n^log_b(a - ε))` for some constant `ε > 0`, then `T(n) = Θ(n^log_b(a))`.
2. **Case 2**: If `f(n) = Θ(n^log_b(a))`, then `T(n) = Θ(n^log_b(a) * log(n))`.
3. **Case 3**: If `f(n) = Ω(n^log_b(a + ε))` for some constant `ε > 0`, if `a * f(n/b) <= c * f(n)` for some constant `c < 1` and sufficiently large `n`, then `T(n) = Θ(f(n))`.

## Example {#example}

Let's consider the recurrence relation for the Merge Sort algorithm:

```plaintext title="Merge Sort Recurrence Relation"
T(n) = 2T(n/2) + Θ(n)
```

Here:

- `a = 2` (number of subproblems).
- `b = 2` (size of each subproblem).
- `f(n) = Θ(n)` (time complexity of work done outside the recursive calls).
- `n` is the size of the input.
- `n0 = 1`.
- `f(n)` is asymptotically positive.
- `a >= 1` and `b > 1`.
- The recurrence relation is defined for `n >= n0`.
- The relation is of the form `T(n) = aT(n/b) + f(n)`.

Now, let's compare `f(n)` with `n^log_b(a)`:

- `n^log_b(a) = n^log_2(2) = n`.
- `f(n) = Θ(n)`.
- `f(n) = Θ(n) = n^log_b(a)`.

Since `f(n) = Θ(n) = n^log_b(a)`, the recurrence relation falls under **Case 2** of the Master Theorem. Therefore, the time complexity of the Merge Sort algorithm is `T(n) = Θ(n * log(n))`.

## Conclusion {#conclusion}

The Master Theorem provides a way to determine the time complexity of divide and conquer algorithms. It simplifies the process of solving recurrence relations and helps in analyzing the time complexity of recursive algorithms. By comparing the function `f(n)` with `n^log_b(a)`, the Master Theorem classifies the recurrence relation into one of the three cases and provides the time complexity of the algorithm.

Master Theorem is a powerful tool to analyze the time complexity of divide and conquer algorithms. It is widely used in the analysis of recursive algorithms to determine their time complexity.

## Implementations

<Tabs>
  <TabItem value="js" label="JavaScript">    
   ```js
    function masterTheorem(a, b, f, n) {
     if (a < 1 || b < 1) {
          return "Invalid input";
     }
    
     const logBaseB = Math.log(a) / Math.log(b);
    
     if (f === n ** logBaseB) {
          return `T(n) = Θ(n^${logBaseB} * log(n))`;
     } else if (f < n ** logBaseB) {
          return `T(n) = Θ(n^${logBaseB})`;
     } else {
          return "Case 3: Not covered by Master Theorem";
     }
    }
    ```
 </TabItem>
 <TabItem value="java" label="Java">
    ```java
    public class MasterTheorem {
        public static String masterTheorem(int a, int b, int f, int n) {
            if (a < 1 || b < 1) {
                return "Invalid input";
            }

            double logBaseB = Math.log(a) / Math.log(b);

            if (f == Math.pow(n, logBaseB)) {
                return String.format("T(n) = Θ(n^%.2f * log(n))", logBaseB);
            } else if (f < Math.pow(n, logBaseB)) {
                return String.format("T(n) = Θ(n^%.2f)", logBaseB);
            } else {
                return "Case 3: Not covered by Master Theorem";
            }
        }

        public static void main(String[] args) {
            System.out.println(masterTheorem(2, 2, 2, 2));
        }
    }
    ```

   </TabItem>
   <TabItem value="python" label="Python">
    ```python
    def master_theorem(a, b, f, n):
        if a < 1 or b < 1:
            return "Invalid input"

        log_base_b = a / b

        if f == n ** log_base_b:
            return f"T(n) = Θ(n^{log_base_b} * log(n))"
        elif f < n ** log_base_b:
            return f"T(n) = Θ(n^{log_base_b})"
        else:
            return "Case 3: Not covered by Master Theorem"
    ```

   </TabItem>
   <TabItem value="cpp" label="C++">
    ```cpp
    #include <iostream>
    #include <cmath>
    #include <string>

    std::string masterTheorem(int a, int b, int f, int n) {
        if (a < 1 || b < 1) {
            return "Invalid input";
        }

        double logBaseB = log(a) / log(b);

        if (f == pow(n, logBaseB)) {
            return "T(n) = Θ(n^" + std::to_string(logBaseB) + " * log(n))";
        } else if (f < pow(n, logBaseB)) {
            return "T(n) = Θ(n^" + std::to_string(logBaseB) + ")";
        } else {
            return "Case 3: Not covered by Master Theorem";
        }
    }

    int main() {
        std::cout << masterTheorem(2, 2, 2, 2) << std::endl;
        return 0;
    }
    ```

   </TabItem>   
</Tabs>

## Live Coding Implementation

```jsx live
function MasterTheoremExample() {
  const a = 2, b = 2, f = 2, n = 4;

  function MasterTheorem(a, b, f, n) {
    if (a < 1 || b < 1) {
      return `Invalid input`;
    }

    const logBaseB = Math.log(a) / Math.log(b);

    if (f === n ** logBaseB) {
      return `T(n) = Θ(n^${logBaseB} * log(n))`;
    } else if (f < n ** logBaseB) {
      return `T(n) = Θ(n^${logBaseB})`;
    } else {
      return `Case 3: Not covered by Master Theorem`;
    }
  }

  return (
    <div>
      <p>
        <b>Output:</b> {MasterTheorem(a, b, f, n)}
      </p>
    </div>
  );
}
```