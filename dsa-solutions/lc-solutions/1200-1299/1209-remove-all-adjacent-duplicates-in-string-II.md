---
id: remove-all-adjacent-duplicates-in-string-II
title: Remove All Adjacent Duplicates in String II
sidebar_label: 1209. Remove All Adjacent Duplicates in String II
tags:
  - String
  - Stack
description: "Solution to Leetcode 1209. Remove All Adjacent Duplicates in String II"
---

## Problem Description

You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

### Examples

**Example 1:**

```
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
```

**Example 2:**

```
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation:
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
```

### Constraints

- `1 <= s.length <= 10^5`
- `2 <= k <= 10^4`

### Approach

1. Save the character c and its count to the stack.
2. If the next character c is same as the last one, increment the count.
3. Otherwise push a pair (c, 1) into the stack.
4. I used a dummy element ('#', 0) to avoid empty stack.

### Complexity

Time complexity: $O(n)$
Space complexity: $O(n)$

### Solution

#### Code in Different Languages

#### C++

```cpp
    string removeDuplicates(string s, int k) {
       vector<pair<int, char>> stack = {{0, '#'}};
       for (char c: s) {
           if (stack.back().second != c) {
               stack.push_back({1, c});
           } else if (++stack.back().first == k)
               stack.pop_back();
       }
       string res;
       for (auto & p : stack) {
           res.append(p.first, p.second);
       }
       return res;
    }
```

#### JAVA

```java
    public String removeDuplicates(String s, int k) {
        int[] count = new int[s.length()];
        StringBuilder sb = new StringBuilder();
        for(char c : s.toCharArray()) {
            sb.append(c);
            int last = sb.length()-1;
            count[last] = 1 + (last > 0 && sb.charAt(last) == sb.charAt(last-1) ? count[last-1] : 0);
            if(count[last] >= k) sb.delete(sb.length()-k, sb.length());
        }
    return sb.toString();
    }
```

#### PYTHON

```python
    def removeDuplicates(self, s, k):
        stack = [['#', 0]]
        for c in s:
            if stack[-1][0] == c:
                stack[-1][1] += 1
                if stack[-1][1] == k:
                    stack.pop()
            else:
                stack.append([c, 1])
        return ''.join(c * k for c, k in stack)
```

### Complexity Analysis

- Time Complexity: $O(n)$

- Space Complexity: $O(n)$

### References

- **LeetCode Problem**: Remove All Adjacent Duplicates in String II
