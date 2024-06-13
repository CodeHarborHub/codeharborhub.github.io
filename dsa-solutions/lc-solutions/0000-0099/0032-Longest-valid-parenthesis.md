---
id: Longest Valid Parentheses
title: Longest Valid Parentheses
sidebar_label: 0032 - Longest Valid Parentheses
tags:
  - Java
  - C++
  - Javascript
  - Python

description: "This is a solution to the Longest Valid Parentheses problem on LeetCode."
---

## Problem Description

Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
substring.

### Examples

**Example 1:**

```plaintext
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
```

**Example 2:**

```plaintext
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
```

**Example 3:**

```plaintext
Input: s = ""
Output: 0
```

### Constraints

- 0 <= s.length <= 3 * 104
- s[i] is '(', or ')'.


---

## Solution for Two Sum Problem

### Intuition and Approach

Brute Force Method

Idea: Combine all elements of the k lists into one list and then sort it.
Steps:
Traverse each of the 𝑘 lists and collect all elements.
Sort the collected elements.
Create a new sorted linked list from the sorted elements.

Min-Heap (Priority Queue) Method

Idea: Use a min-heap to always extract the smallest element among the heads of the 
𝑘
k lists.
Steps:
Initialize a min-heap.
Insert the head of each of the  k lists into the min-heap.
Extract the smallest element from the heap, add it to the merged list, and insert the next element from the same list into the heap.
Repeat until the heap is empty.

Divide and Conquer Method

Idea: Recursively split the list of k lists into two halves and merge each half, then merge the two halves.
Steps:
Split the k lists into two halves.
Recursively merge each half.
Merge the two sorted halves.



### Solution Code

#### Python

```
class Solution:
    def longestValidParentheses(self, S: str) -> int:
        stack, ans = [-1], 0
        for i in range(len(S)):
            if S[i] == '(': stack.append(i)
            elif len(stack) == 1: stack[0] = i
            else:
                stack.pop()
                ans = max(ans, i - stack[-1])
        return ans

```

#### Java
```
class Solution {
    public int longestValidParentheses(String S) {
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);
        int ans = 0;
        for (int i = 0; i < S.length(); i++)
            if (S.charAt(i) == '(') stack.push(i);
            else {
                stack.pop();
                if (stack.isEmpty()) stack.push(i);
                else ans = Math.max(ans, i - stack.peek());
            }
        return ans;
    }
}

```

#### C++
```
class Solution {
public:
    int longestValidParentheses(string S) {
        vector<int> stack = {-1};
        int ans = 0;
        for (int i = 0; i < S.size(); i++)
            if (S[i] == '(') stack.push_back(i);
            else if (stack.size() == 1) stack[0] = i;
            else {
                stack.pop_back();
                ans = max(ans, i - stack.back());
            }
        return ans;
    }
};
```
#### Javascript
```
var longestValidParentheses = function(S) {
    let stack = [-1], ans = 0
    for (let i = 0; i < S.length; i++)
        if (S[i] === '(') stack.push(i)
        else if (stack.length === 1) stack[0] = i
        else stack.pop(), ans = Math.max(ans, i - stack[stack.length-1])
    return ans
};

```
### Conclusion

he stack-based approach and the two-pass scanning approach are both efficient and intuitive solutions for finding the longest valid parentheses substring. The stack-based method leverages the Last-In-First-Out (LIFO) property of stacks to manage indices and validate substrings dynamically. The two-pass scanning approach uses a simpler logic by counting parentheses and ensuring balance, offering an O(1) space complexity solution.
Both methods have their merits, and understanding them enriches one's grasp of string manipulation and algorithm design, making it easier to tackle similar problems in the future.