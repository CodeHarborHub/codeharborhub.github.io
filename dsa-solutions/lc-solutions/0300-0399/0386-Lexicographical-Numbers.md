---
id: lexicographical-numbers
title: Lexicographical-Numbers
sidebar_label: 0389-Lexicographical-Numbers
tags:
  - Leet code
description: "Solution to leetocde 386"
---

### Problem Description

Given an integer `n`, return all the numbers in the range `[1, n]` sorted in lexicographical order.

You must write an algorithm that runs in $O(n)$ time and uses $O(1)$ extra space. 

Example 1:

```
Input: n = 13
Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]

```

Example 2:

```
Input: n = 2
Output: [1,2]

```

### Constraints:

- `1 <= n <= 5 * 10^4`

### Algorithm

The basic idea is to find the next number to add.
Take 45 for example: if the current number is 45, the next one will be `450 (450 == 45 * 10)(if 450 <= n)`, or `46 (46 == 45 + 1) (if 46 <= n)` or `5 (5 == 45 / 10 + 1)`(5 is less than 45 so it is for sure less than n).
We should also consider `n = 600`, and the current number = 499, the next number is `5` because there are all "9"s after "4" in `"499"` so we should divide `499 by 10` until the last digit is not `"9"`.
It is like a tree, and we are easy to get a sibling, a left most child and the parent of any node.

### Code Implementation

**Python:**

```python
def lexicalOrder(self, n):
    top = 1
    while top * 10 <= n:
        top *= 10
    def mycmp(a, b, top=top):
        while a < top: a *= 10
        while b < top: b *= 10
        return -1 if a < b else b < a
    return sorted(xrange(1, n+1), mycmp)
    
```

**C++:**

```c++
class Solution {
public:
    vector<int> lexicalOrder(int n) {
        vector<int> res(n);
        int cur = 1;
        for (int i = 0; i < n; i++) {
            res[i] = cur;
            if (cur * 10 <= n) {
                cur *= 10;
            } else {
                if (cur >= n) 
                    cur /= 10;
                cur += 1;
                while (cur % 10 == 0)
                    cur /= 10;
            }
        }
        return res;
    }
};
```

**Java:**

```java
public List<Integer> lexicalOrder(int n) {
        List<Integer> list = new ArrayList<>(n);
        int curr = 1;
        for (int i = 1; i <= n; i++) {
            list.add(curr);
            if (curr * 10 <= n) {
                curr *= 10;
            } else if (curr % 10 != 9 && curr + 1 <= n) {
                curr++;
            } else {
                while ((curr / 10) % 10 == 9) {
                    curr /= 10;
                }
                curr = curr / 10 + 1;
            }
        }
        return list;
    }
```

