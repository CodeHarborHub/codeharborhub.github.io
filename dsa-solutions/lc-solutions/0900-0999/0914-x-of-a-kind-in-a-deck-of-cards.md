---
id: x-of-a-kind-in-a-deck-of-cards
title: X of a Kind in a Deck of Cards
sidebar_label: 0914 - X of a Kind in a Deck of Cards
tags:
  - Math
  - Hash Table
  - Array
description: "This is a solution to the X of a Kind in a Deck of Cards problem on LeetCode."
---

## Problem Description

You are given an integer array deck where `deck[i]` represents the number written on the $i^th$ card.

Partition the cards into **one or more groups** such that:

- Each group has **exactly** `x` cards where `x > 1`, and
- All the cards in one group have the same integer written on them.

Return `true` if such partition is possible, or `false` otherwise.


### Examples

**Example 1:**

```
Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
```
**Example 2:**

```
Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
```

### Constraints

- $1 \leq deck.length \leq 10^4$
- $0 \leq deck[i] < 10^4$

## Solution for X of a Kind in a Deck of Cards

## Approach 1: Brute Force
### Intuition

We can try every possible `X`.

### Algorithm

Since we divide the deck of `N` cards into say, `K` piles of `X` cards each, we must have `N % X == 0`.

Then, say the deck has `C_i` copies of cards with number `i`. Each group with number `i` has `X` copies, so we must have `C_i % X == 0`. These are necessary and sufficient conditions.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    bool hasGroupsSizeX(vector<int>& deck) {
        int N = deck.size();
        vector<int> count(10000, 0);
        for (int c : deck)
            count[c]++;

        vector<int> values;
        for (int i = 0; i < 10000; ++i)
            if (count[i] > 0)
                values.push_back(count[i]);

        for (int X = 2; X <= N; ++X) {
            if (N % X == 0) {
                bool valid = true;
                for (int v : values) {
                    if (v % X != 0) {
                        valid = false;
                        break;
                    }
                }
                if (valid)
                    return true;
            }
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
    public boolean hasGroupsSizeX(int[] deck) {
        int N = deck.length;
        int[] count = new int[10000];
        for (int c: deck)
            count[c]++;

        List<Integer> values = new ArrayList();
        for (int i = 0; i < 10000; ++i)
            if (count[i] > 0)
                values.add(count[i]);

        search: for (int X = 2; X <= N; ++X)
            if (N % X == 0) {
                for (int v: values)
                    if (v % X != 0)
                        continue search;
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
    def hasGroupsSizeX(self, deck):
        count = collections.Counter(deck)
        N = len(deck)
        for X in xrange(2, N+1):
            if N % X == 0:
                if all(v % X == 0 for v in count.values()):
                    return True
        return False
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(N^2log(logN))$

> **Reason**: where N is the number of cards. It is outside the scope of this article to prove that the number of divisors of N is bounded by $O(Nlog(⁡log⁡N))$.

#### Space Complexity: $O(N)$ 

> **Reason**: The space needed to store the counts of each card type in the `values` list.

## Approach 2: Greatest Common Divisor
### Intuition and Algorithm

Again, say there are `C_i` cards of number `i`. These must be broken down into piles of `X` cards each, ie. `C_i % X == 0` for all `i`.

Thus, `X` must divide the greatest common divisor of `C_i`. If this greatest common divisor `g` is greater than `1`, then `X = g` will satisfy. Otherwise, it won't.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    bool hasGroupsSizeX(vector<int>& deck) {
        vector<int> count(10000, 0);
        for (int c : deck)
            count[c]++;

        int g = -1;
        for (int i = 0; i < 10000; ++i)
            if (count[i] > 0) {
                if (g == -1)
                    g = count[i];
                else
                    g = gcd(g, count[i]);
            }

        return g >= 2;
    }

    int gcd(int x, int y) {
        return x == 0 ? y : gcd(y % x, x);
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public boolean hasGroupsSizeX(int[] deck) {
        int[] count = new int[10000];
        for (int c: deck)
            count[c]++;

        int g = -1;
        for (int i = 0; i < 10000; ++i)
            if (count[i] > 0) {
                if (g == -1)
                    g = count[i];
                else
                    g = gcd(g, count[i]);
            }

        return g >= 2;
    }

    public int gcd(int x, int y) {
        return x == 0 ? y : gcd(y%x, x);
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def hasGroupsSizeX(self, deck):
        from fractions import gcd
        vals = collections.Counter(deck).values()
        return reduce(gcd, vals) >= 2
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(Nlog^2(N))$

> **Reason**: where N is the number of votes. If there are $C_i$ cards with number i, then each gcd operation is naively $O(\log^2 C_i)$. Better bounds exist, but are outside the scope of this article to develop

#### Space Complexity: $O(N)$ 

> **Reason**: The space needed to store the counts of each card type in the `values` list.



## Video Solution 

<LiteYouTubeEmbed
    id="wN_BIEB73Jc"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="LeetCode 914. X of a Kind in a Deck of Cards"
    poster="hqdefault"
    webp />

## References

- **LeetCode Problem**: [X of a Kind in a Deck of Cards](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/)

- **Solution Link**: [X of a Kind in a Deck of Cards](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>