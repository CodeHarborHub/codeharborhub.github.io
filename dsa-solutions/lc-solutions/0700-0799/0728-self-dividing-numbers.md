---
id: self-dividing-numbers
title: Self Dividing Numbers
sidebar_label: 0728 - Self Dividing Numbers
tags:
  - Recursion
  - Array
  - Math
description: "This is a solution to the Self Dividing Numbers problem on LeetCode."
---

## Problem Description

A **self-dividing number** is a number that is divisible by every digit it contains.

For example, `128` is a **self-dividing number** because `128 % 1 == 0`, `128 % 2 == 0`, and `128 % 8 == 0`.
A **self-dividing number** is not allowed to contain the digit zero.

Given two integers `left` and `right`, return a list of all the **self-dividing numbers** in the range `[left, right]`.

### Examples

**Example 1:**

```
Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
```

**Example 2:**

```
Input: left = 47, right = 85
Output: [48,55,66,77]
```

### Constraints

- $1 \leq left \leq right \leq 10^4$

## Solution for Self Dividing Numbers

### Approach: Brute Force 
#### Intuition and Algorithm

For each number in the given range, we will directly test if that number is self-dividing.

By definition, we want to test each whether each digit is non-zero and divide the number. For example, with `128`, we want to test `d != 0 && 128 % d == 0` for `d = 1, 2, 8`. To do that, we need to iterate over each digit of the number.

A straightforward approach to that problem would be to convert the number into a character array (string in Python), and then convert it back to an integer to perform the modulo operation when checking `n % d == 0`.

We could also continually divide the number by 10 and peek at the last digit. That is shown as a variation in a comment.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <string>
#include <cctype>

class Solution {
public:
    std::vector<int> selfDividingNumbers(int left, int right) {
        std::vector<int> ans;
        for (int n = left; n <= right; ++n) {
            if (selfDividing(n)) {
                ans.push_back(n);
            }
        }
        return ans;
    }

    bool selfDividing(int n) {
        int temp = n;
        while (temp > 0) {
            int digit = temp % 10;
            if (digit == 0 || n % digit != 0) {
                return false;
            }
            temp /= 10;
        }
        return true;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
        List<Integer> ans = new ArrayList();
        for (int n = left; n <= right; ++n) {
            if (selfDividing(n)) {
                ans.add(n);
            }
        }
        return ans;
    }
    public boolean selfDividing(int n) {
        for (char c: String.valueOf(n).toCharArray()) {
            if (c == '0' || (n % (c - '0') > 0)) {
                return false;
            }
        }
        return true;
    }
    /*
    Alternate implementation of selfDividing:
    public boolean selfDividing(int n) {
        int x = n;
        while (x > 0) {
            int d = x % 10;
            x /= 10;
            if (d == 0 || (n % d) > 0) {
                return false;
            }
        }
        return true;
    */
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def selfDividingNumbers(self, left, right):
        def self_dividing(n):
            for d in str(n):
                if d == '0' or n % int(d) > 0:
                    return False
            return True
        """
        An alternate implementation of self_dividing:
        def self_dividing(n):
            x = n
            while x > 0:
                x, d = divmod(x, 10)
                if d == 0 or n % d > 0:
                    return False
            return True
        """
        ans = []
        for n in range(left, right + 1):
            if self_dividing(n):
                ans.append(n)
        return ans #Equals filter(self_dividing, range(left, right+1))

```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(D)$

> **Reason**: where D is the number of integers in the range [L,R], and assuming $log⁡(R)$ is bounded (In general, the complexity would be $O(Dlog⁡R)$).

### Space Complexity: $O(D)$

> **Reason**: the length of the answer

## References

- **LeetCode Problem**: [Self Dividing Numbers](https://leetcode.com/problems/self-dividing-numbers/description/)

- **Solution Link**: [Self Dividing Numbers](https://leetcode.com/problems/self-dividing-numbers/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>