---
id: mini-parser
title: Mini Parser
sidebar_label: 0385 - Mini Parser
tags:
  - String
  - Stack
  - Depth First Search
description: "This is a solution to the Mini Parser problem on LeetCode."
---

## Problem Description

Given a string s represents the serialization of a nested list, implement a parser to deserialize it and return the deserialized `NestedInteger`.

Each element is either an integer or a list whose elements may also be integers or other lists.

### Examples

**Example 1:**

```
Input: s = "324"
Output: 324
Explanation: You should return a NestedInteger object which contains a single integer 324.

```
**Example 2:**
```

Input: s = "[123,[456,[789]]]"
Output: [123,[456,[789]]]
Explanation: Return a NestedInteger object containing a nested list with 2 elements:
1. An integer containing value 123.
2. A nested list containing two elements:
    i.  An integer containing value 456.
    ii. A nested list with one element:
         a. An integer containing value 789

```
### Constraints

- `1 <= s.length <= 5 * 10^4`
- `s is the serialization of valid NestedInteger`
- `All the values in the input are in the range [-10^6, 10^6]`

## Solution for Mini Parser

### Approach 

This solution uses a stack to record the `NestedInteger`'s.
At the very beginning, an empty NestedInteger is placed in the stack. This NestedInteger will be regarded as a list that holds one but only one NestedInteger, which will be returned in the end.
`Logic: When encountering '[', the stack has one more element. When encountering ']', the stack has one less element`.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```cpp
class Solution {
public:
    NestedInteger deserialize(string s) {
        function<bool(char)> isnumber = [](char c){ return (c == '-') || isdigit(c); };
        
        stack<NestedInteger> stk;
        stk.push(NestedInteger());
        
        for (auto it = s.begin(); it != s.end();) {
            const char & c = (*it);
            if (isnumber(c)) {
                auto it2 = find_if_not(it, s.end(), isnumber);
                int val = stoi(string(it, it2));
                stk.top().add(NestedInteger(val));
                it = it2;
            }
            else {
                if (c == '[') {
                    stk.push(NestedInteger());
                }
                else if (c == ']') {
                    NestedInteger ni = stk.top();
                    stk.pop();
                    stk.top().add(ni);
                }
                ++it;
            }
        }
        
        NestedInteger result = stk.top().getList().front();
        return result;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```java
public NestedInteger deserialize(String s) {
    if (s.isEmpty())
        return null;
    if (s.charAt(0) != '[') // ERROR: special case
        return new NestedInteger(Integer.valueOf(s));
        
    Stack<NestedInteger> stack = new Stack<>();
    NestedInteger curr = null;
    int l = 0; // l shall point to the start of a number substring; 
               // r shall point to the end+1 of a number substring
    for (int r = 0; r < s.length(); r++) {
        char ch = s.charAt(r);
        if (ch == '[') {
            if (curr != null) {
                stack.push(curr);
            }
            curr = new NestedInteger();
            l = r+1;
        } else if (ch == ']') {
            String num = s.substring(l, r);
            if (!num.isEmpty())
                curr.add(new NestedInteger(Integer.valueOf(num)));
            if (!stack.isEmpty()) {
                NestedInteger pop = stack.pop();
                pop.add(curr);
                curr = pop;
            }
            l = r+1;
        } else if (ch == ',') {
            if (s.charAt(r-1) != ']') {
                String num = s.substring(l, r);
                curr.add(new NestedInteger(Integer.valueOf(num)));
            }
            l = r+1;
        }
    }
    
    return curr;
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```python
class Solution:
    def deserialize(self, s):
        stack, num, last = [], "", None
        for c in s:
            if c.isdigit() or c == "-": num += c
            elif c == "," and num:
                stack[-1].add(NestedInteger(int(num)))
                num = ""
            elif c == "[":
                elem = NestedInteger()
                if stack: stack[-1].add(elem)
                stack.append(elem)
            elif c == "]":
                if num:
                    stack[-1].add(NestedInteger(int(num)))
                    num = ""
                last = stack.pop()
        return last if last else NestedInteger(int(num))
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

### Space Complexity: $O(N)$

## References

- **LeetCode Problem**: [Kth Largest Element in a Stream](https://leetcode.com/problems/mini-parser/description/)

- **Solution Link**: [Kth Largest Element in a Stream](https://leetcode.com/problems/mini-parser/solutions/)
