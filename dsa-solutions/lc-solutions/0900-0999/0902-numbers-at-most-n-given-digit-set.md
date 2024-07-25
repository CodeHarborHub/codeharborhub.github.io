---
id: numbers-at-most-n-given-digit-set
title: Numbers At Most N Given Digit Set
sidebar_label: 0902 - Numbers At Most N Given Digit Set
tags:
  - Dynamic Programming
  - Recursion
  - Math
description: "This is a solution to the Numbers At Most N Given Digit Set problem on LeetCode."
---

## Problem Description

Given an array of digits which is sorted in **non-decreasing** order. You can write numbers using each `digits[i]` as many times as we want. For example, if `digits = ['1','3','5']`, we may write numbers such as `'13'`, `'551'`, and `'1351315'`.

Return the number of positive integers that can be generated that are less than or equal to a given integer `n`.

### Examples

**Example 1:**

```
Input: digits = ["1","3","5","7"], n = 100
Output: 20
Explanation: 
The 20 numbers that can be written are:
1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.
```
**Example 2:**

```
Input: digits = ["1","4","9"], n = 1000000000
Output: 29523
Explanation: 
We can write 3 one digit numbers, 9 two digit numbers, 27 three digit numbers,
81 four digit numbers, 243 five digit numbers, 729 six digit numbers,
2187 seven digit numbers, 6561 eight digit numbers, and 19683 nine digit numbers.
In total, this is 29523 integers that can be written using the digits array.
```

### Constraints

- `1 <= digits.length <= 9`
- `digits[i].length == 1`
- `digits[i]` is a digit from `'1'` to `'9'`.
- All the values in digits are **unique**.
- digits is sorted in **non-decreasing** order.
- $1 \leq n \leq 10^9$

## Solution for Numbers At Most N Given Digit Set

## Approach 1: Dynamic Programming + Counting
### Intuition

First, call a positive integer `X` valid if `X <= N` and `X` only consists of digits from `D`. Our goal is to find the number of valid integers.

Say `N` has `K` digits. If we write a valid number with `k` digits (`k < K`), then there are $(D.length)^k$ possible numbers we could write, since all of them will definitely be less than `N`.

Now, say we are to write a valid `K` digit number from left to right. For example, `N = 2345`, `K = 4`, and `D = '1', '2', ..., '9'`. Let's consider what happens when we write the first digit.

- If the first digit we write is less than the first digit of N, then we could write any numbers after, for a total of $(D.length)^{K-1}$ valid numbers from this one-digit prefix. In our example, if we start with `1`, we could write any of the numbers `1111` to `1999` from this prefix.

- If the first digit we write is the same, then we require that the next digit we write is equal to or lower than the next digit in `N`. In our example (with `N = 2345`), if we start with `2`, the next digit we write must be `3` or less.

- We can't write a larger digit, because if we started with eg. `3`, then even a number of `3000` is definitely larger than `N`.

### Algorithm

Let `dp[i]` be the number of ways to write a valid number if `N` became `N[i], N[i+1], ....` For example, if `N = 2345`, then `dp[0]` would be the number of valid numbers at most `2345`, `dp[1]` would be the ones at most `345`, `dp[2]` would be the ones at most `45`, and `dp[3]` would be the ones at most `5`.

Then, by our reasoning above, `dp[i] = (number of d in D with d < S[i]) * ((D.length) ** (K-i-1))`, plus `dp[i+1]` if `S[i]` is in `D`.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int atMostNGivenDigitSet(vector<string>& D, int N) {
        string S = to_string(N);
        int K = S.length();
        vector<int> dp(K+1, 0);
        dp[K] = 1;

        for (int i = K-1; i >= 0; --i) {
            // compute dp[i]
            int Si = S[i] - '0';
            for (const string& d : D) {
                if (stoi(d) < Si)
                    dp[i] += pow(D.size(), K-i-1);
                else if (stoi(d) == Si)
                    dp[i] += dp[i+1];
            }
        }

        for (int i = 1; i < K; ++i)
            dp[0] += pow(D.size(), i);
        return dp[0];
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int atMostNGivenDigitSet(String[] D, int N) {
        String S = String.valueOf(N);
        int K = S.length();
        int[] dp = new int[K+1];
        dp[K] = 1;

        for (int i = K-1; i >= 0; --i) {
            // compute dp[i]
            int Si = S.charAt(i) - '0';
            for (String d: D) {
                if (Integer.valueOf(d) < Si)
                    dp[i] += Math.pow(D.length, K-i-1);
                else if (Integer.valueOf(d) == Si)
                    dp[i] += dp[i+1];
            }
        }

        for (int i = 1; i < K; ++i)
            dp[0] += Math.pow(D.length, i);
        return dp[0];
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def atMostNGivenDigitSet(self, D, N):
        S = str(N)
        K = len(S)
        dp = [0] * K + [1]
        # dp[i] = total number of valid integers if N was "N[i:]"

        for i in xrange(K-1, -1, -1):
            # Compute dp[i]

            for d in D:
                if d < S[i]:
                    dp[i] += len(D) ** (K-i-1)
                elif d == S[i]:
                    dp[i] += dp[i+1]

        return dp[0] + sum(len(D) ** i for i in xrange(1, K))
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(logN)$

> **Reason**: and assuming `D.length` is constant. (We could make this better by pre-calculating the number of `d < S[i]` for all possible digits `S[i]`, but this isn't necessary.)

#### Space Complexity: $O(logN)$

> **Reason**:  the space used by `S` and `dp`. (Actually, we could store only the last 2 entries of `dp`, but this isn't necessary.)

## Approach 2: Mathematical
### Intuition

As in Approach 1, call a positive integer `X` valid if `X <= N` and `X` only consists of digits from `D`.

Now let `B = D.length`. There is a bijection between valid integers and so called "bijective-base-`B`" numbers. For example, if `D = ['1', '3', '5', '7']`, then we could write the numbers `'1', '3', '5', '7', '11', '13', '15', '17', '31', ...` as (bijective-base-`B`) numbers `'1', '2', '3', '4', '11', '12', '13', '14', '21', ....`

It is clear that both of these sequences are increasing, which means that the first sequence is a contiguous block of valid numbers, followed by invalid numbers.

Our approach is to find the largest valid integer, and convert it into bijective-base-`B` from which it is easy to find its rank (position in the sequence.) Because of the bijection, the rank of this element must be the number of valid integers.

Continuing our example, if `N = 64`, then the valid numbers are `'1', '3', ..., '55', '57'`, which can be written as bijective-base-4 numbers `'1', '2', ..., '33', '34'`. Converting this last entry `'34'` to decimal, the answer is `16` (3 * 4 + 4).

### Algorithm

Let's convert `N` into the largest possible valid integer `X`, convert `X` to bijective-base-B, then convert that result to a decimal answer. The last two conversions are relatively straightforward, so let's focus on the first part of the task.

Let's try to write `X` one digit at a time. Let's walk through an example where `D = ['2', '4', '6', '8']`. There are some cases:

- If the first digit of `N` is in `D`, we write that digit and continue. For example, if `N = 25123`, then we will write `2` and continue.

- If the first digit of `N` is larger than `min(D)`, then we write the largest possible number from `D` less than that digit, and the rest of the numbers will be big. For example, if `N = 5123`, then we will write `4888` (`4` then `888`).

- If the first digit of `N` is smaller than `min(D)`, then we must "subtract 1" (in terms of `X`'s bijective-base-B representation), and the rest of the numbers will be big.

    For example, if `N = 123, we will write `88`. If `N = 4123`, we will write `2888`. And if `N = 22123`, we will write `8888`. This is because "subtracting 1" from `'', '4', '22'` yields `'', '2', '8'` (can't go below 0).

Actually, in our solution, it is easier to write in bijective-base-B, so instead of writing digits of `D`, we'll write the index of those digits (1-indexed). For example, `X = 24888` will be `A = [1, 2, 4, 4, 4]`. Afterwards, we convert this to decimal.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int atMostNGivenDigitSet(vector<string>& D, int N) {
        int B = D.size(); // bijective-base B
        string s = to_string(N);
        int K = s.length();
        vector<int> A(K, 0);
        int t = 0;

        for (char c : s) {
            int c_index = 0;  // Largest such that c >= D[c_index - 1]
            bool match = false;
            for (int i = 0; i < B; ++i) {
                if (c >= D[i][0])
                    c_index = i+1;
                if (c == D[i][0])
                    match = true;
            }

            A[t++] = c_index;
            if (match) continue;

            if (c_index == 0) { // subtract 1
                for (int j = t-1; j > 0; --j) {
                    if (A[j] > 0) break;
                    A[j] += B;
                    A[j-1]--;
                }
            }

            while (t < K)
                A[t++] = B;
            break;
        }

        int ans = 0;
        for (int x : A)
            ans = ans * B + x;
        return ans;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int atMostNGivenDigitSet(String[] D, int N) {
        int B = D.length; // bijective-base B
        char[] ca = String.valueOf(N).toCharArray();
        int K = ca.length;
        int[] A = new int[K];
        int t = 0;

        for (char c: ca) {
            int c_index = 0;  // Largest such that c >= D[c_index - 1]
            boolean match = false;
            for (int i = 0; i < B; ++i) {
                if (c >= D[i].charAt(0))
                    c_index = i+1;
                if (c == D[i].charAt(0))
                    match = true;
            }

            A[t++] = c_index;
            if (match) continue;

            if (c_index == 0) { // subtract 1
                for (int j = t-1; j > 0; --j) {
                    if (A[j] > 0) break;
                    A[j] += B;
                    A[j-1]--;
                }
            }

            while (t < K)
                A[t++] = B;
            break;
        }

        int ans = 0;
        for (int x: A)
            ans = ans * B + x;
        return ans;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def atMostNGivenDigitSet(self, D, N):
        B = len(D) # bijective-base B
        S = str(N)
        K = len(S)
        A = []  #  The largest valid number in bijective-base-B.

        for c in S:
            if c in D:
                A.append(D.index(c) + 1)
            else:
                i = bisect.bisect(D, c)
                A.append(i)
                # i = 1 + (largest index j with c >= D[j], or -1 if impossible)
                if i == 0:
                    # subtract 1
                    for j in xrange(len(A) - 1, 0, -1):
                        if A[j]: break
                        A[j] += B
                        A[j-1] -= 1

                A.extend([B] * (K - len(A)))
                break

        ans = 0
        for x in A:
            ans = ans * B + x
        return ans
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(logN)$

> **Reason**: and assuming `D.length` is constant.


#### Space Complexity: $O(logN)$

> **Reason**: the space used by `A`.

## Video Solution 

<LiteYouTubeEmbed
    id="msPHbO9qx3E"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="LeetCode 902. Numbers At Most N Given Digit Set"
    poster="hqdefault"
    webp />

## References

- **LeetCode Problem**: [Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/description/)

- **Solution Link**: [Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>