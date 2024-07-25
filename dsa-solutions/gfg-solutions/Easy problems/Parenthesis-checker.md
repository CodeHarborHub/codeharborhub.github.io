---
id: parenthesis-checker
title: Parenthesis Checker
sidebar_label: 0017 - Parenthesis Checker
tags:
  - Easy
  - Stack
  - GeeksforGeeks
  - CPP
  - DSA
description: "This tutorial covers the solution to the Parenthesis Checker problem from the GeeksforGeeks website, featuring implementations in Python and C++."
---
## Problem Description

Given an expression string `x`, examine whether the pairs and the orders of `{}`, `()`, `[]` are correct in the expression.

## Examples

**Example 1:**

```
Input:
x = "[()]{}{[()()]()}"
Output: true
Explanation: All the brackets are well-formed and properly nested.
```

**Example 2:**

```
Input:
x = "[(])"
Output: false
Explanation: The brackets are not properly nested.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `ispar()` which takes the string `x` as input and returns a boolean indicating whether the string has balanced parentheses.

Expected Time Complexity: $O(N)$

Expected Auxiliary Space: $O(N)$

## Constraints

* `1 ≤ |x| ≤ 10^5`

## Problem Explanation

The task is to check whether the input string `x` has balanced parentheses. Balanced parentheses mean that each opening bracket has a corresponding closing bracket and the brackets are properly nested.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@arunimad6yuq"/>

  ```py
  class Solution:
      def ispar(self, x: str) -> bool:
          stack = []
          pair = {')': '(', '}': '{', ']': '['}
          
          for char in x:
              if char in '({[':
                  stack.append(char)
              elif char in ')}]':
                  if not stack or stack.pop() != pair[char]:
                      return False
          
          return not stack

  # Example usage
  if __name__ == "__main__":
      solution = Solution()
      print(solution.ispar("[()]{}{[()()]()}"))  # Expected output: True
      print(solution.ispar("[(])"))  # Expected output: False
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@arunimad6yuq"/>

  ```cpp
  //{ Driver Code Starts
  #include<bits/stdc++.h>
  using namespace std;

  // } Driver Code Ends
  class Solution {
  public:
      // Function to check if brackets are balanced or not.
      bool ispar(string x) {
          stack<char> s;
          for (char ch : x) {
              if (ch == '(' || ch == '{' || ch == '[') {
                  s.push(ch);
              } else {
                  if (s.empty()) return false;
                  char top = s.top();
                  if ((ch == ')' && top == '(') ||
                      (ch == '}' && top == '{') ||
                      (ch == ']' && top == '[')) {
                      s.pop();
                  } else {
                      return false;
                  }
              }
          }
          return s.empty();
      }
  };

  //{ Driver Code Starts.
  int main() {
      int t;
      string a;
      cin >> t;
      while (t--) {
          cin >> a;
          Solution obj;
          if (obj.ispar(a)) {
              cout << "balanced" << endl;
          } else {
              cout << "not balanced" << endl;
          }
      }
  }
  // } Driver Code Ends
  ```

  </TabItem>
</Tabs>

## Example Walkthrough

**Example 1:**

For the input string:
```
x = "[()]{}{[()()]()}"
```
1. The string contains properly nested and balanced parentheses, so the output is true.

**Example 2:**

For the input string:
```
x = "[(])"
```
1. The brackets are not properly nested, so the output is false.

## Solution Logic:

1. Use a stack to keep track of opening brackets.
2. Traverse the string character by character:
    - If the character is an opening bracket, push it onto the stack.
    - If the character is a closing bracket, check if it matches the top of the stack.
3. If the stack is empty at the end, the parentheses are balanced; otherwise, they are not.

## Time Complexity

* The function traverses the string once, so the time complexity is $O(N)$.

## Space Complexity

* The function uses a stack to store opening brackets, so the auxiliary space complexity is $O(N)$.

## References

- **GeeksforGeeks Problem:** [Parenthesis Checker](https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
