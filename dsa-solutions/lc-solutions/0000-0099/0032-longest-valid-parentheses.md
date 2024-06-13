---
id: longest-valid-parentheses
title: longest-valid-parentheses
sidebar_label: 0032 longest-valid-parentheses
tags:
  - stack 
  - LeetCode
  - Java
  - Python
  - C++
description: This is a solution to the longest-valid-parentheses on LeetCode
---

## Problem Description

Given a string containing just the characters `'('` and `')'`, return the length of the longest valid (well-formed) parentheses
`substring`


### Examples

**Example 1:**

```

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

```

**Example 2:**


```
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
```

**Example 3:**


```
Input: s = ""
Output: 0
```


### Constraints

-  $1 \leq \text{nums.length} \leq  105$


---

## Solution for  Longest Valid Parentheses


### Intuition

The intuition behind the given code is to use a stack to efficiently track the indices of opening parentheses.


### Approach


   - It initializes a variable maxCount to 0 to store the length of the longest valid parentheses substring.

   - It initializes a stack (st) and pushes -1 onto the stack. The stack is used to keep track of the indices of opening parentheses.

   - It iterates through each character in the input string s.

   - If the current character is an opening parenthesis '(', it pushes its index onto the stack.

   - If the current character is a closing parenthesis ')', it pops the top element from the stack, representing the index of the matching opening parenthesis.

   - If the stack becomes empty after popping, it pushes the current index onto the stack (unmatched closing parenthesis).

   - If the stack is not empty, it calculates the length of the valid parentheses substring by subtracting the index of the matching opening parenthesis from the current index. It updates maxCount with the maximum length encountered so far.

   - After iterating through all characters, it returns maxCount, representing the length of the longest valid parentheses substring.





#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@parikhitkurmi"/>
    
   ```python
//python

class Solution:
    def longestValidParentheses(self, s: str) -> int:
        max_length = 0
        stck=[-1] # initialize with a start index
        for i in range(len(s)):
            if s[i] == '(':
                stck.append(i)
            else:
                stck.pop()
                if not stck: # if popped -1, add a new start index
                    stck.append(i)
                else:
                    max_length=max(max_length, i-stck[-1]) # update the length of the valid substring
        return max_length
```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@parikhitkurmi"/>

   ```java
//java


class Solution {
    public int longestValidParentheses(String s) {
      Stack<Integer> stack = new Stack<>();
      stack.push(-1);
      int max=0;
      for(int i=0;i<s.length();i++){
        Character ch = s.charAt(i);
        if(ch == '('){
            stack.push(i);
        }
        else{
            stack.pop();
            if(stack.isEmpty()){
                stack.push(i);
            }
            max = Math.max(max,i-stack.peek());
        }
      }
    return max;
    }
}

```
</TabItem>
<TabItem value="C++" label="C++">
<SolutionAuthor name="@parikhitkurmi"/>

   ```cpp
//cpp
class Solution {
public:
    int longestValidParentheses(string s) {
        int n = s.size();
        stack <int>st;
        st.push(-1);
        int len_max = 0;
        for(int i=0;i<s.size();i++){
            if(s[i]=='('){
                st.push(i);
            }
            
            else{
                st.pop();
                if(st.empty()){
                  st.push(i);
                }
                else {
                    int len = i-st.top();
                 len_max = max(len,len_max);
                   
                }
            }
            
        }
        return len_max;
    }
};

```

  </TabItem>
</Tabs>


# Complexity

    - Time complexity:
    `$O(n)$` time complexity as we iterate over the string

    - Space complexity:
    `$O(n)$` space complexity because we used stack
## References

- **LeetCode Problem:** [Continuous Subarray Sum](https://leetcode.com/problems/longest-valid-parentheses/)
- **Solution Link:** [Continuous Subarray Sum](https://leetcode.com/problems/longest-valid-parentheses/submissions/)
- **Authors GeeksforGeeks Profile:** [parikhit kurmi](https://www.geeksforgeeks.org/user/sololeveler673/)
- **Authors Leetcode:** [parikhit kurmi](https://leetcode.com/u/parikhitkurmi14/)