---
id: basic-calculator
title: Basic Calculator
sidebar_label: 0224 Basic Calculator
tags: [Math, String, Stack, Recursion]
description: "This gives solution to the problem basic calculator"
---

## Problem

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

**Note:** You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.

### Examples

**Example 1:**

**Input:** `s = "1 + 1"`  
**Output:** `2`

**Example 2:**

**Input:** `s = " 2-1 + 2 "`  
**Output:** `3`

**Example 3:**

**Input:** `s = "(1+(4+5+2)-3)+(6+8)"`  
**Output:** `23`

### Constraints

- $1 \leq s.length \leq 3 \times 10^5$
- `s` consists of digits, '+', '-', '(', ')', and ' '.
- `s` represents a valid expression.
- `'+'` is not used as a unary operation (i.e., `"+1"` and `"+(2 + 3)"` are invalid).
- `'-'` could be used as a unary operation (i.e., `"-1"` and `"-(2 + 3)"` are valid).
- There will be no two consecutive operators in the input.
- Every number and running calculation will fit in a signed 32-bit integer.

---

## Approach
The code employs a stack-based approach to parse and evaluate arithmetic expressions. It iterates through each character of the input string, updating the current number and result based on encountered digits, operators, and parentheses. It utilizes a stack to handle nested expressions, pushing and popping intermediate results and signs as needed. Finally, it returns the evaluated result, assuming a valid input expression.

### Solution

#### C++ Solution

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
int calculate(char* s) {
    int stack[1000];
    int top = -1;
    int num = 0;
    int sign = 1;
    int result = 0;
    while (*s) {
        if (isdigit(*s)) {
            num = num * 10 + (*s - '0');
        } else if (*s == '+') {
            result += sign * num;
            num = 0;
            sign = 1;
        } else if (*s == '-') {
            result += sign * num;
            num = 0;
            sign = -1;
        } else if (*s == '(') {
            stack[++top] = result;
            stack[++top] = sign;
            result = 0;
            sign = 1;
        } else if (*s == ')') {
            result += sign * num;
            num = 0;
            result *= stack[top--];
            result += stack[top--];
        }
        s++;
    }
    return result + sign * num;
}
```

#### Java Solution

```java
public int calculate(String s) {
    Stack<Integer> stack = new Stack<Integer>();
    int result = 0;
    int number = 0;
    int sign = 1;
    for(int i = 0; i < s.length(); i++){
        char c = s.charAt(i);
        if(Character.isDigit(c)){
            number = 10 * number + (int)(c - '0');
        }else if(c == '+'){
            result += sign * number;
            number = 0;
            sign = 1;
        }else if(c == '-'){
            result += sign * number;
            number = 0;
            sign = -1;
        }else if(c == '('){
            stack.push(result);
            stack.push(sign);
            sign = 1;   
            result = 0;
        }else if(c == ')'){
            result += sign * number;  
            number = 0;
            result *= stack.pop();    
            result += stack.pop();   
        }
    }
    if(number != 0) result += sign * number;
    return result;
}
```

#### Python Solution

```python
class Solution:
    def calculate(self, s: str) -> int:
        stack = deque()
        current_num = 0
        operator = 1
        n = len(s)
        result = 0
        for i, char in enumerate(s):
            if char.isdigit():
                current_num = (current_num*10) + int(char)
            if char in "+-()" or i==n-1:
                if operator == 1:
                    result+=current_num
                elif operator == -1:
                    result-=current_num
                if char == '(':
                    stack.append(result)
                    stack.append(operator)
                    operator = 1
                    result=0
                elif char == ')':
                    sign = stack.pop()
                    first_arg = stack.pop()
                    result = first_arg + result * sign

                current_num = 0
                if char == '+':
                    operator = 1
                elif char == '-':
                    operator = -1

        return result
```

### Complexity Analysis

**Time Complexity:** $O(N)$
:::tip Reason:
We perform a single pass through the string `s`, iterating over each character exactly once, resulting in linear time complexity.
:::

**Space Complexity:** $O(N)$
:::tip Reason:
The extra space used is mainly for the stack, which can store at most all the numbers and operators from the string `s` if they are all parentheses, leading to linear space complexity.
:::

:::note
This solution efficiently calculates the result of the given expression by handling parentheses, addition, and subtraction. The time complexity is linear due to a single pass through the string, and the space complexity is linear due to the use of a stack to handle nested parentheses.
:::
