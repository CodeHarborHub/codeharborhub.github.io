---
id: rotate-string
title: Rotate String
sidebar_label: 0796 - Rotate String
tags:
  - String
  - String Matching
  - Queue
description: "This is a solution to the Rotate String problem on LeetCode."
---

## Problem Description

Given two strings `s` and goal, return `true` if and only if `s` can become `goal` after some number of **shifts** on `s`.

A **shift** on `s` consists of moving the leftmost character of `s` to the rightmost position.

For example, if `s = "abcde"`, then it will be `"bcdea"` after one shift.

### Examples

**Example 1:**

```
Input: s = "abcde", goal = "cdeab"
Output: true
```

**Example 2:**

```
Input: s = "abcde", goal = "abced"
Output: false
```

### Constraints

- `1 <= s.length, goal.length <= 100`
- `s` and `goal` consist of lowercase English letters.

## Solution for Rotate String

## Approach 1: Brute Force 
### Intuition

For each rotation of `A`, let's check if it equals `B`.

### Algorithm

More specifically, say we rotate `A` by `s`. Then, instead of `A[0], A[1], A[2], ...`, we have `A[s], A[s+1], A[s+2], ...`; and we should check that `A[s] == B[0]`, `A[s+1] == B[1]`, `A[s+2] == B[2]`, etc.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    bool rotateString(string A, string B) {
        if (A.length() != B.length())
            return false;
        if (A.length() == 0)
            return true;

        for (int s = 0; s < A.length(); ++s) {
            bool match = true;
            for (int i = 0; i < A.length(); ++i) {
                if (A[(s+i) % A.length()] != B[i]) {
                    match = false;
                    break;
                }
            }
            if (match)
                return true;
        }
        return false;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public boolean rotateString(String A, String B) {
        if (A.length() != B.length())
            return false;
        if (A.length() == 0)
            return true;

        search:
            for (int s = 0; s < A.length(); ++s) {
                for (int i = 0; i < A.length(); ++i) {
                    if (A.charAt((s+i) % A.length()) != B.charAt(i))
                        continue search;
                }
                return true;
            }
        return false;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def rotateString(self, A, B):
        if len(A) != len(B):
            return False
        if len(A) == 0:
            return True

        for s in xrange(len(A)):
            if all(A[(s+i) % len(A)] == B[i] for i in xrange(len(A))):
                return True
        return False
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(N^2)$

> **Reason**: where `N` is the length of `A`. For each rotation `s`, we check up to `N` elements in `A` and `B`.

#### Space Complexity: $O(1)$

> **Reason**: We only use pointers to elements of `A` and `B`.

## Approach 2: Simple Check
### Intuition and Algorithm

All rotations of `A` are contained in `A+A`. Thus, we can simply check whether `B` is a substring of `A+A`. We also need to check `A.length == B.length`, otherwise we will fail cases like `A = "a", B = "aa"`.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    bool rotateString(string A, string B) {
        return A.length() == B.length() && (A + A).find(B) != string::npos;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public boolean rotateString(String A, String B) {
        return A.length() == B.length() && (A + A).contains(B);
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def rotateString(self, A, B):
        return len(A) == len(B) and B in A+A
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(N^2)$

> **Reason**:  where `N` is the length of `A`.


#### Space Complexity: $O(N)$

> **Reason**: the space used building `A+A`.

## Approach 3: Rolling Hash
### Intuition

Our approach comes down to quickly checking whether want to check whether `B` is a substring of `A2 = A+A`. Specifically, (if `N = A.length`) we should check whether `B = A2[0:N]`, or `B = A2[1:N+1]`, or `B = A2[2:N+2]` and so on. To check this, we can use a rolling hash.

### Algorithm

For a string `S`, say `hash(S) = (S[0] * P**0 + S[1] * P**1 + S[2] * P**2 + ...) % MOD`, where `X**Y` represents exponentiation, and `S[i]` is the ASCII character code of the string at that index.

The idea is that `hash(S)` has output that is approximately uniformly distributed between `[0, 1, 2, ..., MOD-1]`, and so if `hash(S) == hash(T)` it is very likely that `S == T`.

Now say we have a hash `hash(A)`, and we want the hash of `A[1], A[2], ..., A[N-1], A[0]`. We can subtract `A[0]` from the hash, divide by `P`, and add `A[0] * P**(N-1)`. (Our division is under the finite field $\mathbb{F}_\text{MOD}$- done by multiplying by the modular inverse `Pinv = pow(P, MOD-2, MOD)`.)
### Code in Different Languages

<Tabs>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
import java.math.BigInteger;
class Solution {
    public boolean rotateString(String A, String B) {
        if (A.equals(B)) return true;

        int MOD = 1_000_000_007;
        int P = 113;
        int Pinv = BigInteger.valueOf(P).modInverse(BigInteger.valueOf(MOD)).intValue();

        long hb = 0, power = 1;
        for (char x: B.toCharArray()) {
            hb = (hb + power * x) % MOD;
            power = power * P % MOD;
        }

        long ha = 0; power = 1;
        char[] ca = A.toCharArray();
        for (char x: ca) {
            ha = (ha + power * x) % MOD;
            power = power * P % MOD;
        }

        for (int i = 0; i < ca.length; ++i) {
            char x = ca[i];
            ha += power * x - x;
            ha %= MOD;
            ha *= Pinv;
            ha %= MOD;
            if (ha == hb && (A.substring(i+1) + A.substring(0, i+1)).equals(B))
                return true;

        }
        return false;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def rotateString(self, A, B):
        MOD = 10**9 + 7
        P = 113
        Pinv = pow(P, MOD-2, MOD)

        hb = 0
        power = 1
        for x in B:
            code = ord(x) - 96
            hb = (hb + power * code) % MOD
            power = power * P % MOD

        ha = 0
        power = 1
        for x in A:
            code = ord(x) - 96
            ha = (ha + power * code) % MOD
            power = power * P % MOD

        if ha == hb and A == B: return True
        for i, x in enumerate(A):
            code = ord(x) - 96
            ha += power * code
            ha -= code
            ha *= Pinv
            ha %= MOD
            if ha == hb and A[i+1:] + A[:i+1] == B:
                return True
        return False
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(N)$

> **Reason**:  where `N` is the length of `A`.


#### Space Complexity: $O(N)$

> **Reason**: to perform the final check `A_rotation == B`.


## Video Solution 

<LiteYouTubeEmbed
    id="ost2pALth0k"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="796 Rotate String Leetcode Javascript Solution"
    poster="hqdefault"
    webp />

## References

- **LeetCode Problem**: [Rotate String](https://leetcode.com/problems/rotate-string/description/)

- **Solution Link**: [Rotate String](https://leetcode.com/problems/rotate-string/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>