---
id: basic-calculator-II
title: Basic Calculator II
sidebar_label: 0227 Basic Calculator II
tags: [Math, String, Stack]
description: "This gives solution to the problem basic calculator II"
---

## Problem

Given a string s which represents an expression, evaluate this expression and return its value.

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-2^31, 2^31 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

### Examples

**Example 1:**

**Input:** `s = "3+2*2"`  
**Output:** `7`

**Example 2:**

**Input:** `s = "3/2"`  
**Output:** `1`

**Example 3:**

**Input:** `s = "3+5 / 2"`  
**Output:** `5`

---

### Constraints

- $1 \leq s.length \leq 3 \times 10^5$
- `s` consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
- `s` represents a valid expression.
- All the integers in the expression are non-negative integers in the range [0, 2^31 - 1].
- The answer is guaranteed to fit in a 32-bit integer.

---

### Approach

1. **Iterate through the input string**: The code goes through each character in the input string one by one.

2. **If char of string is number (`isdigit(c)`)**: When it encounters a digit character, convert `char` (which is initially initialized) to its numeric value.

3. **Handle operators**: When it encounters an operator (`+`, `-`, `*`, `/`) or reaches the end of a number, it performs the operation based on the last operator seen and the number.

4. **Use a stack for intermediate results**: The code utilizes a stack data structure to store intermediate results as it processes the expression. This allows it to maintain the correct order of operations.

5. **Return the final result**: After processing all characters in the string and evaluating the expression, the code returns the final result by summing up all the values stored in the stack.

---

### Solution

#### C++ Solution

```cpp
class Solution {
public:
    int calculate(string s) {
        int num=0;
        char opr='+';
        stack<int>st;

        for(int i=0;i<s.length();i++)
        {
            char c=s[i];

            //if char is digit,convert char c to numeric val
            if(isdigit(c))
            {
                num=num*10+(c-'0');
            }

            if((!isdigit(c) && c!=' ') || i==s.size()-1)
            {
                if(opr=='+')
                {
                    st.push(num);
                }
                else if(opr=='-')
                {
                    st.push(-num);
                }
                else if(opr=='*')
                {
                    int temp=st.top()*num;
                    st.pop();
                    st.push(temp);
                }
                else if(opr=='/')
                { 
                        int tmp=st.top()/num;
                        st.pop();
                        st.push(tmp);
                }
                opr=c;
                num=0;
            }
        }

        int ans=0;
        while(!st.empty())
        {
            ans+=st.top();
            st.pop();
        }
        return ans;
    }
};
```

#### Java Solution

```java
// Expected 
// Time O(n) Space: O(1)
class Solution {
    public int calculate(String s) {
        int i = 0;
        int cur = 0, prev = 0, res = 0;
        char curOperation = '+';
        
        while (i < s.length()) {
            char curChar = s.charAt(i);

            if (Character.isDigit(curChar)) {
                cur = 0;
                while (i < s.length() && Character.isDigit(s.charAt(i))) {
                    cur = cur * 10 + (s.charAt(i) - '0');
                    i++;
                }
                i--;

                if (curOperation == '+') {
                    res += cur;
                    prev = cur;
                } else if (curOperation == '-') {
                    res -= cur;
                    prev = -cur;
                } else if (curOperation == '*') {
                    res -= prev;
                    prev *= cur;
                    res += prev;
                } else if (curOperation == '/') {
                    res -= prev;
                    prev = prev / cur;
                    res += prev;
                }
            } else if (curChar != ' ') {
                curOperation = curChar;
            }
            i++;
        }
        return res;
    }
}
```

#### Python Solution

```python
class Solution:
    def calculate(self, s):
        def precedence(c):
            return c == '*' or c == '/'
        def toPostfix(s):
            op, post = deque(), ''
            for c in s:
                if c == ' ': continue
                elif c.isdigit(): post += c
                else:
                    post += '|'
                    while op and precedence(c) <= precedence(op[-1]):
                        post += op.pop()
                    op.append(c)
                    
            return post + '|' + ''.join(reversed(op))
        
        s, num, i = toPostfix(s), deque(), 0
        while i < len(s):
            if s[i].isdigit():
                j = s.find('|', i+1)
                num.append(int(s[i:j]))
                i = j
            else:
                num1, num2 = num.pop(), num.pop()
                if   s[i] == '*': num.append(num2 * num1)
                elif s[i] == '/': num.append(num2 // num1)
                elif s[i] == '+': num.append(num2 + num1)
                elif s[i] == '-': num.append(num2 - num1)
            i += 1

        return num.pop()
            
```

### Complexity Analysis

**Time Complexity:** $O(N)$
> **Reason:** The algorithm processes each character of the input string twice. The first pass converts the infix expression to a postfix expression using a stack for operators, and the second pass evaluates the postfix expression. Both passes together result in a linear time complexity relative to the length of the string.

**Space Complexity:** $O(N)$
> **Reason:** The algorithm uses additional space for the operator stack during the conversion to postfix notation and the number stack during the evaluation of the postfix expression. Both of these stacks can grow up to the size of the input string, leading to linear space complexity.
