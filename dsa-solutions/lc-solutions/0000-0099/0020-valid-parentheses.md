---
id: valid-parentheses
title: Valid Parentheses (LeetCode)
sidebar_label: 0020-valid-parentheses
tags:
  - Stack

description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid."
---

## Problem Description

| Problem Statement                                                                  | Solution Link | LeetCode Profile |
| :--------------------------------------------------------------------------------- | :------------ | :--------------- |
| [Valid Parentheses ](https://leetcode.com/problems/valid-parentheses/description/) |

### Problem Description

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

### Examples

#### Example 1

- **Input:** `s = "()"`
- **Output:** true

#### Example 2

- **Input:** `s = "()[]{}"`
- **Output:** true

#### Example 3

- **Input:** `s = "(]"`
- **Output:** false

### Constraints

- $1 \leq \text{s.length} \leq 104$
- s consists of parentheses only '()[]{}'.

### Approach

Here is the step-by-step approach of the algorithm:

1. Initialize an empty stack.
2. Traverse the input string character by character.
3. If the current character is an opening bracket `(i.e., '(', '{', '[')`, push it onto the stack.
4. If the current character is a closing bracket `(i.e., ')', '}', ']')`, check if the stack is empty. If it is empty, return false, because the closing bracket does not have a corresponding opening bracket. Otherwise, pop the top element from the stack and check if it matches the current closing bracket. If it does not match, return false, because the brackets are not valid.
5. After traversing the entire input string, if the stack is empty, return true, because all opening brackets have been matched with their corresponding closing brackets. Otherwise, return false, because some opening brackets have not been matched with their corresponding closing brackets.

### Solution Code

#### Python

```python
class Solution(object):
    def isValid(self, s):
        stack = [] # create an empty stack to store opening brackets
        for c in s: # loop through each character in the string
            if c in '([{': # if the character is an opening bracket
                stack.append(c) # push it onto the stack
            else: # if the character is a closing bracket
                if not stack or \
                    (c == ')' and stack[-1] != '(') or \
                    (c == '}' and stack[-1] != '{') or \
                    (c == ']' and stack[-1] != '['):
                    return False # the string is not valid, so return false
                stack.pop() # otherwise, pop the opening bracket from the stack
        return not stack # if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
                         # so the string is valid, otherwise, there are unmatched opening brackets, so return false
```

#### C++

```cpp
class Solution {
public:
    bool isValid(string s) {
        stack<char> st; // create an empty stack to store opening brackets
        for (char c : s) { // loop through each character in the string
            if (c == '(' || c == '{' || c == '[') { // if the character is an opening bracket
                st.push(c); // push it onto the stack
            } else { // if the character is a closing bracket
                if (st.empty() || // if the stack is empty or
                    (c == ')' && st.top() != '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
                    (c == '}' && st.top() != '{') ||
                    (c == ']' && st.top() != '[')) {
                    return false; // the string is not valid, so return false
                }
                st.pop(); // otherwise, pop the opening bracket from the stack
            }
        }
        return st.empty(); // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
                           // so the string is valid, otherwise, there are unmatched opening brackets, so return false
    }
};
```

#### Java

```java
class Solution {
    public boolean isValid(String s) {
        // Create an empty stack to keep track of opening brackets
        Stack<Character> stack = new Stack<Character>();

        // Loop through every character in the string
        for (char c : s.toCharArray()) {
            // If the character is an opening bracket, push it onto the stack
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else { // If the character is a closing bracket
                // If the stack is empty, there is no matching opening bracket, so return false
                if (stack.isEmpty()) {
                    return false;
                }
                // Otherwise, get the top of the stack and check if it's the matching opening bracket
                char top = stack.peek();
                if ((c == ')' && top == '(') || (c == ']' && top == '[') || (c == '}' && top == '{')) {
                    // If it is, pop the opening bracket from the stack
                    stack.pop();
                } else { // Otherwise, the brackets don't match, so return false
                    return false;
                }
            }
        }
        // If the stack is empty, all opening brackets have been closed, so return true
        // Otherwise, there are unmatched opening brackets, so return false
        return stack.isEmpty();
    }
}
```

#### Javascript

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []; // create an empty stack to store opening brackets
  for (let c of s) {
    // loop through each character in the string
    if (c === "(" || c === "{" || c === "[") {
      // if the character is an opening bracket
      stack.push(c); // push it onto the stack
    } else {
      // if the character is a closing bracket
      if (
        !stack.length || // if the stack is empty or
        (c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false; // the string is not valid, so return false
      }
      stack.pop(); // otherwise, pop the opening bracket from the stack
    }
  }
  return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
  // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};
```
