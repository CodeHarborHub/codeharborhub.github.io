---
id: final-value-of-variable-after-performing-operations
title: Final Value of Variable After Performing Operations
sidebar_label: 2011 Final Value of Variable After Performing Operations
tags:
  - Array
  - Simulation
  - LeetCode
description: "This is a solution to the Final Value of Variable After Performing Operations problem on LeetCode."
sidebar_position: 2011
---

## Problem Description

There is a programming language with only four operations and one variable `X`:

- `++X` and `X++` increment the value of the variable `X` by 1.
- `--X` and `X--` decrement the value of the variable `X` by 1.

Initially, the value of `X` is 0.

Given an array of strings `operations` containing a list of operations, return the final value of `X` after performing all the operations.

### Examples

**Example 1:**

```
Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X = 0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.

```

**Example 2:**

```

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.

```

**Example 3:**

```

Input: operations = ["X++","++X","--X","X--"]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.
```

### Constraints

- `1 <= operations.length <= 100`
- `operations[i]` will be either `"++X"`, `"X++"`, `"--X"`, or `"X--"`.

### Approach

To solve this problem, we will:
1. Initialize `X` to 0.
2. Iterate through each operation in the `operations` array.
3. Depending on the operation, increment or decrement `X`.
4. Return the final value of `X`.

#### C++

``` cpp
class Solution {
public:
    int finalValueAfterOperations(std::vector<std::string>& operations) {
        int X = 0;
        for (const auto& operation : operations) {
            if (operation == "++X" || operation == "X++") {
                X += 1;
            } else {
                X -= 1;
            }
        }
        return X;
    }
};

```

#### Python

``` python

def finalValueAfterOperations(operations):
    X = 0
    for operation in operations:
        if operation == "++X" or operation == "X++":
            X += 1
        else:
            X -= 1
    return X
```