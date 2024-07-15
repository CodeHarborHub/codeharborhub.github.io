---
id: maximum-nesting-depth-of-two-valid-parentheses-strings
title: Maximun-Nesting-Depth-of-Two-Valid-Parentheses-Strings
sidebar_label: 1111 - Maximun-Nesting-Depth-of-Two-Valid-Parentheses-Strings
tags:
  - Leetcode
---

## Problem Statement

A string is a valid parentheses string (VPS) if and only if it consists of `(` and `)` characters only, and:

- It is the empty string, or
- It can be written as AB (A concatenated with B), where A and B are VPS's, or
- It can be written as (A), where A is a VPS.

We can similarly define the nesting depth `depth(S)` of any VPS `S` as follows:

- `depth("") = 0`
- `depth(A + B) = max(depth(A), depth(B))`, where A and B are VPS's
- `depth("(" + A + ")") = 1 + depth(A)`, where A is a VPS.

For example, `""`, `"()()"`, and `"()(()())"` are VPS's (with nesting depths 0, 1, and 2), and `")("` and `"(()"` are not VPS's.

Given a VPS `seq`, split it into two disjoint subsequences `A` and `B`, such that `A` and `B` are VPS's (and `A.length + B.length = seq.length`).

Now choose any such `A` and `B` such that `max(depth(A), depth(B))` is the minimum possible value.

Return an answer array (of length `seq.length`) that encodes such a choice of `A` and `B`: `answer[i] = 0` if `seq[i]` is part of `A`, else `answer[i] = 1`. Note that even though multiple answers may exist, you may return any of them.

## Examples

### Example 1

**Input:** `seq = "(()())"`  
**Output:** `[0, 1, 1, 1, 1, 0]`

### Example 2

**Input:** `seq = "()(())()"`  
**Output:** `[0, 0, 0, 1, 1, 0, 1, 1]`

## Constraints

- $1 <= seq.size <= 10000$

## Algorithm

1. Initialize an empty stack to keep track of the depth.
2. Initialize the `answer` array with all zeros.
3. Iterate through each character in the `seq` string:
   - If the character is `(`, check the current depth (based on the size of the stack):
     - Assign the character to one of the subsequences (either `0` or `1`) in an alternating fashion to balance the depth between `A` and `B`.
     - Push the current depth level onto the stack.
   - If the character is `)`, pop from the stack and assign the closing parenthesis to the same subsequence as its matching opening parenthesis.
4. Return the `answer` array.

## C++ Code

```cpp
class Solution {
public:
    vector<int> maxDepthAfterSplit(string seq) {
        int n = seq.size();
        vector<int> answer(n, 0);
        int depth = 0;

        for (int i = 0; i < n; ++i) {
            if (seq[i] == '(') {
                answer[i] = depth % 2;
                depth++;
            } else {
                depth--;
                answer[i] = depth % 2;
            }
        }

        return answer;
    }
};
```

## Python Code

```python
class Solution:
    def maxDepthAfterSplit(self, seq: str) -> List[int]:
        depth = 0
        answer = []

        for char in seq:
            if char == '(':
                answer.append(depth % 2)
                depth += 1
            else:
                depth -= 1
                answer.append(depth % 2)

        return answer
```

## Java Code

```java
class Solution {
    public int[] maxDepthAfterSplit(String seq) {
        int n = seq.length();
        int[] answer = new int[n];
        int depth = 0;

        for (int i = 0; i < n; i++) {
            if (seq.charAt(i) == '(') {
                answer[i] = depth % 2;
                depth++;
            } else {
                depth--;
                answer[i] = depth % 2;
            }
        }

        return answer;
    }
}
```

## JavaScript Code

```javascript
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  const answer = [];
  let depth = 0;

  for (let char of seq) {
    if (char === "(") {
      answer.push(depth % 2);
      depth++;
    } else {
      depth--;
      answer.push(depth % 2);
    }
  }

  return answer;
};
```
