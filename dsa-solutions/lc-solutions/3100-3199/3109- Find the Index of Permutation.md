---
id: find-the-index-of-permutation
title: 3109-Find the Index of Permutation
sidebar_label: 3109 Find the Index of Permutation
tags:
  - Array
  - Maths
  - LeetCode
  - C++
description: "This is a solution to the Find the Index of Permutation problem on LeetCode."
---

## Problem Description

Given an array perm of length n which is a permutation of [1, 2, ..., n], return the index of perm in the lexicographically sorted array of all of the permutations of [1, 2, ..., n].

Since the answer may be very large, return it modulo 109 + 7.

### Examples

**Example 1:**

```
Input: s = "cbadabacg", p = "abc"
Output: 0
Explanation: The first occurrence of a permutation of "abc" is "cba" which starts at index 0.

```

**Example 2:**

```
Input: s = "eidbaooo", p = "ab"
Output: 3
Explanation: The first occurrence of a permutation of "ab" is "ba" which starts at index 3.

```

### Constraints

- `1 <= n == perm.length <= 105`

### Approach

According to the problem requirements, we need to find out how many permutations are lexicographically smaller than the given permutation.

We consider how to calculate the number of permutations that are lexicographically smaller than the given permutation. There are two situations:

- The first element of the permutation is less than $perm[0]$, there are $(perm[0] - 1) \times (n-1)!$ permutations.
- The first element of the permutation is equal to $perm[0]$, we need to continue to consider the second element, and so on.
- The sum of all situations is the answer.

We can use a binary indexed tree to maintain the number of elements that are smaller than the current element in the traversed elements. For the $i$-th element of the given permutation, the number of remaining elements that are smaller than it is $perm[i] - 1 - tree.query(perm[i])$, and the number of permutation types is $(perm[i] - 1 - tree.query(perm[i])) \times (n-i-1)!$, which is added to the answer. Then we update the binary indexed tree and add the current element to the binary indexed tree. Continue to traverse the next element until all elements are traversed.

The time complexity is $O(n \times \log n)$, and the space complexity is $O(n)$. Where $n$ is the length of the permutation.

#### Python3

```python
class BinaryIndexedTree:
    __slots__ = "n", "c"

    def __init__(self, n: int):
        self.n = n
        self.c = [0] * (n + 1)

    def update(self, x: int, delta: int) -> None:
        while x <= self.n:
            self.c[x] += delta
            x += x & -x

    def query(self, x: int) -> int:
        s = 0
        while x:
            s += self.c[x]
            x -= x & -x
        return s


class Solution:
    def getPermutationIndex(self, perm: List[int]) -> int:
        mod = 10**9 + 7
        ans, n = 0, len(perm)
        tree = BinaryIndexedTree(n + 1)
        f = [1] * n
        for i in range(1, n):
            f[i] = f[i - 1] * i % mod
        for i, x in enumerate(perm):
            cnt = x - 1 - tree.query(x)
            ans += cnt * f[n - i - 1] % mod
            tree.update(x, 1)
        return ans % mod
```

#### Java

```java
class BinaryIndexedTree {
    private int n;
    private int[] c;

    public BinaryIndexedTree(int n) {
        this.n = n;
        this.c = new int[n + 1];
    }

    public void update(int x, int delta) {
        for (; x <= n; x += x & -x) {
            c[x] += delta;
        }
    }

    public int query(int x) {
        int s = 0;
        for (; x > 0; x -= x & -x) {
            s += c[x];
        }
        return s;
    }
}

class Solution {
    public int getPermutationIndex(int[] perm) {
        final int mod = (int) 1e9 + 7;
        long ans = 0;
        int n = perm.length;
        BinaryIndexedTree tree = new BinaryIndexedTree(n + 1);
        long[] f = new long[n];
        f[0] = 1;
        for (int i = 1; i < n; ++i) {
            f[i] = f[i - 1] * i % mod;
        }
        for (int i = 0; i < n; ++i) {
            int cnt = perm[i] - 1 - tree.query(perm[i]);
            ans = (ans + cnt * f[n - i - 1] % mod) % mod;
            tree.update(perm[i], 1);
        }
        return (int) ans;
    }
}
```
