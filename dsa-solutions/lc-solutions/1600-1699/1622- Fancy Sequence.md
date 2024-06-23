---
id: fancy-sequence
title: Fancy Sequence
sidebar_label: 1622 Fancy Sequence
tags:
- Math
- Design
- Segment Tree
description: "This document provides a solution where we need to Write an API that generates fancy sequences using the append, addAll, and multAll operations. "
---

## Problem

Write an API that generates fancy sequences using the $append$, $addAll$, and $multAll$ operations.

Implement the $Fancy$ class:

- Fancy() Initializes the object with an empty sequence.

- void append(val) Appends an integer val to the end of the sequence.
  
- void addAll(inc) Increments all existing values in the sequence by an integer inc.
  
- void multAll(m) Multiplies all existing values in the sequence by an integer m.
  
- int getIndex(idx) Gets the current value at index $idx$ (0-indexed) of the sequence **modulo** $10^9$ + $7$. If the index is greater or equal than the length of the sequence, return $-1$.

### Examples

**Example 1:**

```
Input: "["Fancy", "append", "addAll", "append", "multAll", "getIndex", "addAll", "append", "multAll", "getIndex", "getIndex", "getIndex"]
[[], [2], [3], [7], [2], [0], [3], [10], [2], [0], [1], [2]]"

Output: "[null, null, null, null, null, 10, null, null, null, 26, 34, 20]"

Explanation: 

Fancy fancy = new Fancy();
fancy.append(2);   // fancy sequence: [2]
fancy.addAll(3);   // fancy sequence: [2+3] -> [5]
fancy.append(7);   // fancy sequence: [5, 7]
fancy.multAll(2);  // fancy sequence: [5*2, 7*2] -> [10, 14]
fancy.getIndex(0); // return 10
fancy.addAll(3);   // fancy sequence: [10+3, 14+3] -> [13, 17]
fancy.append(10);  // fancy sequence: [13, 17, 10]
fancy.multAll(2);  // fancy sequence: [13*2, 17*2, 10*2] -> [26, 34, 20]
fancy.getIndex(0); // return 26
fancy.getIndex(1); // return 34
fancy.getIndex(2); // return 20
```

### Constraints

- `1 <= val, inc, m <= 100`
- `0 <= idx <= 10^5`
- At most $10^5$ calls total will be made to $append$, $addAll$, $multAll$, and $getIndex$.

---

## Approach

To solve the problem, we need to understand the nature of the allowed moves:

1. **Using Lazy Operations**:

   - Instead of updating the entire sequence for $addAll$ and $multAll$, we maintain cumulative addition and multiplication factors. This way, we can defer the actual updates to when we need to access a particular element.

2. **Tracking Inverse Operations**:

   - When appending a new value, we need to account for the current cumulative operations, so we store values in a form that can be easily adjusted when retrieving them.

3. **Efficient Index Retrieval**:

   - By maintaining cumulative operations and only applying them when accessing an index, we ensure that our operations are efficient and avoid unnecessary updates to the sequence.
  
## Solution for Fancy Sequence

The problem involves three types of operations on a sequence of numbers: appending a value, adding a value to all elements, and multiplying all elements by a value. A naive approach would directly modify the sequence for each operation, but this would be inefficient given the constraints. Instead, we can use lazy propagation-like techniques to efficiently handle the operations.

#### Code in Java

```java
import java.util.ArrayList;
import java.util.List;

class Fancy {
    private static final int MOD = 1000000007;
    private List<Long> sequence;
    private long add;
    private long mult;

    public Fancy() {
        sequence = new ArrayList<>();
        add = 0;
        mult = 1;
    }

    public void append(int val) {
        // Apply the inverse of the current add and mult to keep the value as its original form
        long adjustedVal = ((val - add) * modInverse(mult, MOD)) % MOD;
        if (adjustedVal < 0) adjustedVal += MOD;
        sequence.add(adjustedVal);
    }

    public void addAll(int inc) {
        add = (add + inc) % MOD;
    }

    public void multAll(int m) {
        add = (add * m) % MOD;
        mult = (mult * m) % MOD;
    }

    public int getIndex(int idx) {
        if (idx >= sequence.size()) return -1;
        long result = (sequence.get(idx) * mult + add) % MOD;
        return (int) result;
    }

    // Function to compute the modular inverse using Fermat's Little Theorem
    private long modInverse(long a, int mod) {
        return power(a, mod - 2, mod);
    }

    // Function to compute (x^y) % mod
    private long power(long x, int y, int mod) {
        if (y == 0) return 1;
        long p = power(x, y / 2, mod) % mod;
        p = (p * p) % mod;
        return (y % 2 == 0) ? p : (x * p) % mod;
    }

    public static void main(String[] args) {
        Fancy fancy = new Fancy();
        fancy.append(2);   
        fancy.addAll(3);   
        fancy.append(7);   
        fancy.multAll(2);  
        System.out.println(fancy.getIndex(0));
        fancy.addAll(3);   
        fancy.append(10);  
        fancy.multAll(2);  
        System.out.println(fancy.getIndex(0)); 
        System.out.println(fancy.getIndex(1)); 
        System.out.println(fancy.getIndex(2)); 
    }
}
    
```

### Complexity Analysis

#### Time Complexity: $O(1)$

> **Reason**: Time Complexity is $O(1)$, because append involves adding an element to the list, Whereas addAll only updates a cumulative variable, multAll updates cumulative variables and lastly getIndex, it basically involves getIndex calculating the result using the cumulative variables.

#### Space Complexity: $O(n)$

> **Reason**: $O(n)$, where n is the number of elements in the sequence, as we store each element.

# References

- **LeetCode Problem:** [Fancy Sequence](https://leetcode.com/problems/fancy-sequence/description/)
- **Solution Link:** [Fancy Sequence Solution on LeetCode](https://leetcode.com/problems/fancy-sequence/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)
